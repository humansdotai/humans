#!/bin/bash

CHAINID="humans_9000-1"
DATADIR="/data/humansd"

# validate dependencies are installed
command -v jq > /dev/null 2>&1 || { echo >&2 "jq not installed. More info: https://stedolan.github.io/jq/download/"; exit 1; }


# disable produce empty block and enable prometheus metrics
if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' 's/create_empty_blocks = true/create_empty_blocks = false/g' $DATADIR/config/config.toml
    sed -i '' 's/prometheus = false/prometheus = true/' $DATADIR/config/config.toml
    sed -i '' 's/prometheus-retention-time = 0/prometheus-retention-time  = 1000000000000/g' $DATADIR/config/app.toml
    sed -i '' 's/enabled = false/enabled = true/g' $DATADIR/config/app.toml
else
    sed -i 's/create_empty_blocks = true/create_empty_blocks = false/g' $DATADIR/config/config.toml
    sed -i 's/prometheus = false/prometheus = true/' $DATADIR/config/config.toml
    sed -i 's/prometheus-retention-time  = "0"/prometheus-retention-time  = "1000000000000"/g' $DATADIR/config/app.toml
    sed -i 's/enabled = false/enabled = true/g' $DATADIR/config/app.toml
fi

if [[ $1 == "pending" ]]; then
    echo "pending mode is on, please wait for the first block committed."
    if [[ $OSTYPE == "darwin"* ]]; then
        sed -i '' 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $DATADIR/config/config.toml
        sed -i '' 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $DATADIR/config/config.toml
    else
        sed -i 's/create_empty_blocks_interval = "0s"/create_empty_blocks_interval = "30s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_propose = "3s"/timeout_propose = "30s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_propose_delta = "500ms"/timeout_propose_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_prevote = "1s"/timeout_prevote = "10s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_prevote_delta = "500ms"/timeout_prevote_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_precommit = "1s"/timeout_precommit = "10s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_precommit_delta = "500ms"/timeout_precommit_delta = "5s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_commit = "5s"/timeout_commit = "150s"/g' $DATADIR/config/config.toml
        sed -i 's/timeout_broadcast_tx_commit = "10s"/timeout_broadcast_tx_commit = "150s"/g' $DATADIR/config/config.toml
    fi
fi

# Start the node (remove the --pruning=nothing flag if historical queries are not needed)
humansd start --home $DATADIR --chain-id $CHAINID --metrics --pruning=nothing --evm.tracer=json --minimum-gas-prices=0.0001aheart --json-rpc.api eth,txpool,personal,net,debug,web3,miner --api.enable