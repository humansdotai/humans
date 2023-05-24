# Humans Blockchain

This is the official repository for the Humans blockchain. This repository contains the source code and documentation for the blockchain and its related components.

## Getting Started for developers

To get started with the Humans blockchain, you will need to clone this repository to your local machine. You can do this by running the following command in your terminal:

```bash
git clone https://github.com/humansdotai/humans.git
```

Once you have cloned the repository, navigate to the cloned directory and run the `start.sh` script. The script contains the commands necessary to start a node for the Humans 9000 blockchain network.

```bash
cd humans
bash ./start.sh
```

## What is going on in the script

The `start_node.sh` script is a shell script written in the bash shell language. The purpose of the script is to automate the process of starting a node for the Humans blockchain network.

The script first checks if the `jq` command is installed and exits with an error message if not. jq is a command-line JSON processor and is required for the script to run.

The script then modifies the `config.toml` and `app.toml` files located in the `$HOME/.humansd/config/` directory. The following configurations are updated:

```ini
create_empty_blocks is set to false
prometheus is set to true
prometheus-retention-time is set to 1000000000000
enabled is set to true
```

If the pending argument is passed to the script, the following parameters are also updated:

```ini
create_empty_blocks_interval is set to 30s
timeout_propose is set to 30s
timeout_propose_delta is set to 5s
timeout_prevote is set to 10s
timeout_prevote_delta is set to 5s
timeout_precommit is set to 10s
timeout_precommit_delta is set to 5s
timeout_commit is set to 150s
timeout_broadcast_tx_commit is set to 150s
```

Finally, the script starts the node by executing the `humansd start` command with the following options:

```ini
--home $DATADIR specifies the home directory for the node
--chain-id $CHAINID sets the chain ID to humans_9000-1
--metrics enables Prometheus metrics
--pruning=nothing disables pruning of historical data
--evm.tracer=json sets the EVM tracer to JSON format
--minimum-gas-prices=0.0001aheart sets the minimum gas price to 0.0001 aheart
--json-rpc.api eth,txpool,personal,net,debug,web3,miner enables JSON-RPC APIs for Ethereum, transaction pool, personal, network, debug, web3, and miner
--api.enable enables the API server.
```
