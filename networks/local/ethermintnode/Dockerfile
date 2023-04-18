FROM golang:stretch as build-env

# Install minimum necessary dependencies
ENV PACKAGES curl make git libc-dev bash gcc
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y $PACKAGES

# Set working directory for the build
WORKDIR /go/src/github.com/0x4139/humans

# Add source files
COPY . .

# build Humans
RUN make build-linux

# Final image
FROM golang:1.19 as final

WORKDIR /

RUN apt-get update

# Copy over binaries from the build-env
COPY --from=build-env /go/src/github.com/0x4139/humans/build/humansd /
COPY --from=build-env /go/src/github.com/0x4139/humans/scripts/start-docker.sh /

EXPOSE 26656 26657 1317 8545 8546

# Run humansd by default, omit entrypoint to ease using container with humansd
ENTRYPOINT ["/bin/bash", "-c"]