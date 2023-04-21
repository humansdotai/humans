#!/usr/bin/make -f

PACKAGES_NOSIMULATION=$(shell go list ./... | grep -v '/simulation')
VERSION ?= $(shell echo $(shell git describe --tags `git rev-list --tags="v*" --max-count=1`) | sed 's/^v//')
TMVERSION := $(shell go list -m github.com/tendermint/tendermint | sed 's:.* ::')
COMMIT := $(shell git log -1 --format='%H')
LEDGER_ENABLED ?= true
BINDIR ?= $(GOPATH)/bin
HUMANS_BINARY = humansd
HUMANS_DIR = humans
BUILDDIR ?= $(CURDIR)/build
HTTPS_GIT := https://github.com/0x4139/humans.git
DOCKER := $(shell which docker)
NAMESPACE := 0x4139
PROJECT := humans
DOCKER_IMAGE := $(NAMESPACE)/$(PROJECT)
COMMIT_HASH := $(shell git rev-parse --short=7 HEAD)
DOCKER_TAG := $(COMMIT_HASH)

# RocksDB is a native dependency, so we don't assume the library is installed.
# Instead, it must be explicitly enabled and we warn when it is not.
ENABLE_ROCKSDB ?= false

export GO111MODULE = on

# Default target executed when no arguments are given to make.
default_target: all

.PHONY: default_target

# process build tags

build_tags = netgo
ifeq ($(LEDGER_ENABLED),true)
  ifeq ($(OS),Windows_NT)
    GCCEXE = $(shell where gcc.exe 2> NUL)
    ifeq ($(GCCEXE),)
      $(error gcc.exe not installed for ledger support, please install or set LEDGER_ENABLED=false)
    else
      build_tags += ledger
    endif
  else
    UNAME_S = $(shell uname -s)
    ifeq ($(UNAME_S),OpenBSD)
      $(warning OpenBSD detected, disabling ledger support (https://github.com/cosmos/cosmos-sdk/issues/1988))
    else
      GCC = $(shell command -v gcc 2> /dev/null)
      ifeq ($(GCC),)
        $(error gcc not installed for ledger support, please install or set LEDGER_ENABLED=false)
      else
        build_tags += ledger
      endif
    endif
  endif
endif

build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

whitespace :=
whitespace += $(whitespace)
comma := ,
build_tags_comma_sep := $(subst $(whitespace),$(comma),$(build_tags))

# process linker flags

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=humans \
		  -X github.com/cosmos/cosmos-sdk/version.AppName=$(HUMANS_BINARY) \
		  -X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
		  -X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
			-X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags_comma_sep)" \
			-X github.com/tendermint/tendermint/version.TMCoreSemVer=$(TMVERSION)

ifeq ($(ENABLE_ROCKSDB),true)
  BUILD_TAGS += rocksdb_build
  test_tags += rocksdb_build
else
  $(warning RocksDB support is disabled; to build and test with RocksDB support, set ENABLE_ROCKSDB=true)
endif

# DB backend selection
ifeq (cleveldb,$(findstring cleveldb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += gcc
endif
ifeq (badgerdb,$(findstring badgerdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += badgerdb
endif
# handle rocksdb
ifeq (rocksdb,$(findstring rocksdb,$(COSMOS_BUILD_OPTIONS)))
  ifneq ($(ENABLE_ROCKSDB),true)
    $(error Cannot use RocksDB backend unless ENABLE_ROCKSDB=true)
  endif
  CGO_ENABLED=1
  BUILD_TAGS += rocksdb
endif
# handle boltdb
ifeq (boltdb,$(findstring boltdb,$(COSMOS_BUILD_OPTIONS)))
  BUILD_TAGS += boltdb
endif

ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  ldflags += -w -s
endif
ldflags += $(LDFLAGS)
ldflags := $(strip $(ldflags))

build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

BUILD_FLAGS := -tags "$(build_tags)" -ldflags '$(ldflags)'
# check for nostrip option
ifeq (,$(findstring nostrip,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -trimpath
endif

# check if no optimization option is passed
# used for remote debugging
ifneq (,$(findstring nooptimization,$(COSMOS_BUILD_OPTIONS)))
  BUILD_FLAGS += -gcflags "all=-N -l"
endif

# # The below include contains the tools and runsim targets.
# include contrib/devtools/Makefile

###############################################################################
###                                  Build                                  ###
###############################################################################

BUILD_TARGETS := build install

build: BUILD_ARGS=-o $(BUILDDIR)/
build-linux:
	GOOS=linux GOARCH=amd64 LEDGER_ENABLED=false $(MAKE) build

$(BUILD_TARGETS): clean go.sum $(BUILDDIR)/
	go $@ $(BUILD_FLAGS) $(BUILD_ARGS) ./...

$(BUILDDIR)/:
	mkdir -p $(BUILDDIR)/

docker-build:
	docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
	docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest
	# docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:${COMMIT_HASH}
	# update old container
	docker rm humans || true
	# create a new container from the latest image
	docker create --name humans -t -i ${DOCKER_IMAGE}:${DOCKER_TAG} humans
	# move the binaries to the ./build directory
	mkdir -p ./build/
	docker cp humans:/usr/bin/humansd ./build/

$(MOCKS_DIR):
	mkdir -p $(MOCKS_DIR)

clean:
	@rm -rf \
    $(BUILDDIR)/ \
    artifacts/ \
    tmp-swagger-gen/

all: build

build-all: build vulncheck

.PHONY: distclean clean build-all

###############################################################################
###                                Releasing                                ###
###############################################################################

PACKAGE_NAME:=github.com/0x4139/humans
GOLANG_CROSS_VERSION = v1.19
GOPATH ?= '$(HOME)/go'
release-dry-run:
	docker run \
		--rm \
		--privileged \
		-e CGO_ENABLED=1 \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-v ${GOPATH}/pkg:/go/pkg \
		-w /go/src/$(PACKAGE_NAME) \
		ghcr.io/goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		--rm-dist --skip-validate --skip-publish --snapshot

release:
	docker run \
		--rm \
		--privileged \
		-e CGO_ENABLED=1 \
		-e GITHUB_TOKEN=${GITHUB_TOKEN} \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-v `pwd`:/go/src/$(PACKAGE_NAME) \
		-w /go/src/$(PACKAGE_NAME) \
		ghcr.io/goreleaser/goreleaser-cross:${GOLANG_CROSS_VERSION} \
		release --clean --skip-validate

.PHONY: release-dry-run release

###############################################################################
###                          Tools & Dependencies                           ###
###############################################################################

go.sum: go.mod
	echo "Ensure dependencies have not been modified ..." >&2
	go mod verify
	go mod tidy

vulncheck: $(BUILDDIR)/
	GOBIN=$(BUILDDIR) go install golang.org/x/vuln/cmd/govulncheck@latest
	$(BUILDDIR)/govulncheck ./...

###############################################################################
###                                Protobuf                                 ###
###############################################################################

# ------
# NOTE: Link to the tendermintdev/sdk-proto-gen docker images: 
#       https://hub.docker.com/r/tendermintdev/sdk-proto-gen/tags
#
protoVer=v0.7
protoImageName=tendermintdev/sdk-proto-gen:$(protoVer)
protoImage=$(DOCKER) run --network host --rm -v $(CURDIR):/workspace --workdir /workspace $(protoImageName)
# ------
# NOTE: cosmos/proto-builder image is needed because clang-format is not installed
#       on the tendermintdev/sdk-proto-gen docker image.
#		Link to the cosmos/proto-builder docker images:
#       https://github.com/cosmos/cosmos-sdk/pkgs/container/proto-builder
#
protoCosmosVer=0.11.2
protoCosmosName=ghcr.io/cosmos/proto-builder:$(protoCosmosVer)
protoCosmosImage=$(DOCKER) run --network host --rm -v $(CURDIR):/workspace --workdir /workspace $(protoCosmosName)
# ------
# NOTE: Link to the yoheimuta/protolint docker images:
#       https://hub.docker.com/r/yoheimuta/protolint/tags
#
protolintVer=0.42.2
protolintName=yoheimuta/protolint:$(protolintVer)
protolintImage=$(DOCKER) run --network host --rm -v $(CURDIR):/workspace --workdir /workspace $(protolintName)


# ------
# NOTE: If you are experiencing problems running these commands, try deleting
#       the docker images and execute the desired command again.
#
proto-all: proto-format proto-lint proto-gen

proto-gen:
	@echo "Generating Protobuf files"
	$(protoImage) sh ./scripts/protocgen.sh


# TODO: Rethink API docs generation
# proto-swagger-gen:
# 	@echo "Generating Protobuf Swagger"
# 	$(protoImage) sh ./scripts/protoc-swagger-gen.sh

proto-format:
	@echo "Formatting Protobuf files"
	$(protoCosmosImage) find ./ -name *.proto -exec clang-format -i {} \;

# NOTE: The linter configuration lives in .protolint.yaml
proto-lint:
	@echo "Linting Protobuf files"
	$(protolintImage) lint ./proto

proto-check-breaking:
	@echo "Checking Protobuf files for breaking changes"
	$(protoImage) buf breaking --against $(HTTPS_GIT)#branch=main


.PHONY: proto-all proto-gen proto-gen-any proto-format proto-lint proto-check-breaking

###############################################################################
###                                Localnet                                 ###
###############################################################################

# Build image for a local testnet
localnet-build:
	docker build --no-cache --tag humansd/node .

# Start a 4-node testnet locally
localnet-start: localnet-stop clean
ifeq ($(OS),Windows_NT)
	mkdir localnet-setup &
	@$(MAKE) localnet-build

	IF not exist "build/node0/$(HUMANS_BINARY)/config/genesis.json" docker run --rm -v $(CURDIR)/build\humans\Z humansd/node "./humansd testnet init-files --v 4 -o /humans --keyring-backend=test --ip-addresses humansdnode0,humansdnode1,humansdnode2,humansdnode3"
	docker-compose up -d
else
	mkdir -p localnet-setup
	@$(MAKE) localnet-build

	if ! [ -f localnet-setup/node0/$(HUMANS_BINARY)/config/genesis.json ]; then docker run --rm -v $(CURDIR)/localnet-setup:/humans:Z humansd/node "./humansd testnet init-files --v 4 -o /humans --keyring-backend=test --ip-addresses humansdnode0,humansdnode1,humansdnode2,humansdnode3"; fi
	docker-compose up -d
endif

# Stop testnet
localnet-stop:
	docker-compose down

# Clean testnet
localnet-clean:
	docker-compose down
	sudo rm -rf localnet-setup

 # Reset testnet
localnet-unsafe-reset:
	docker-compose down
ifeq ($(OS),Windows_NT)
	@docker run --rm -v $(CURDIR)\localnet-setup\node0\ethermitd:humans\Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)\localnet-setup\node1\ethermitd:humans\Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)\localnet-setup\node2\ethermitd:humans\Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)\localnet-setup\node3\ethermitd:humans\Z humansd/node "./humansd unsafe-reset-all --home=/humans"
else
	@docker run --rm -v $(CURDIR)/localnet-setup/node0/ethermitd:/humans:Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)/localnet-setup/node1/ethermitd:/humans:Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)/localnet-setup/node2/ethermitd:/humans:Z humansd/node "./humansd unsafe-reset-all --home=/humans"
	@docker run --rm -v $(CURDIR)/localnet-setup/node3/ethermitd:/humans:Z humansd/node "./humansd unsafe-reset-all --home=/humans"
endif

# Clean testnet
localnet-show-logstream:
	docker-compose logs --tail=1000 -f

.PHONY: build-docker-local-humans localnet-start localnet-stop
