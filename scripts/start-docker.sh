#!/bin/bash

echo "prepare genesis: Run validate-genesis to ensure everything worked and that the genesis file is setup correctly"
./humansd validate-genesis --home /humans

echo "starting humans node $ID in background ..."
./humansd start \
--home /humans \
--keyring-backend test

echo "started humans node"
tail -f /dev/null