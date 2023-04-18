import pytest

from .utils import (
    ADDRS,
    CONTRACTS,
    KEYS,
    deploy_contract,
    send_transaction,
    w3_wait_for_new_blocks,
)


def test_gas_eth_tx(geth, humans):
    tx_value = 10

    # send a transaction with geth
    geth_gas_price = geth.w3.eth.gas_price
    tx = {"to": ADDRS["community"], "value": tx_value, "gasPrice": geth_gas_price}
    geth_receipt = send_transaction(geth.w3, tx, KEYS["validator"])

    # send an equivalent transaction with humans
    humans_gas_price = humans.w3.eth.gas_price
    tx = {"to": ADDRS["community"], "value": tx_value, "gasPrice": humans_gas_price}
    humans_receipt = send_transaction(humans.w3, tx, KEYS["validator"])

    # ensure that the gasUsed is equivalent
    assert geth_receipt.gasUsed == humans_receipt.gasUsed


def test_gas_deployment(geth, humans):
    # deploy an identical contract on geth and humans
    # ensure that the gasUsed is equivalent
    _, geth_contract_receipt = deploy_contract(geth.w3, CONTRACTS["TestERC20A"])
    _, humans_contract_receipt = deploy_contract(
        humans.w3, CONTRACTS["TestERC20A"]
    )
    assert geth_contract_receipt.gasUsed == humans_contract_receipt.gasUsed


def test_gas_call(geth, humans):
    function_input = 10

    # deploy an identical contract on geth and humans
    # ensure that the contract has a function which consumes non-trivial gas
    geth_contract, _ = deploy_contract(geth.w3, CONTRACTS["BurnGas"])
    humans_contract, _ = deploy_contract(humans.w3, CONTRACTS["BurnGas"])

    # call the contract and get tx receipt for geth
    geth_gas_price = geth.w3.eth.gas_price
    geth_txhash = geth_contract.functions.burnGas(function_input).transact(
        {"from": ADDRS["validator"], "gasPrice": geth_gas_price}
    )
    geth_call_receipt = geth.w3.eth.wait_for_transaction_receipt(geth_txhash)

    # repeat the above for humans
    humans_gas_price = humans.w3.eth.gas_price
    humans_txhash = humans_contract.functions.burnGas(function_input).transact(
        {"from": ADDRS["validator"], "gasPrice": humans_gas_price}
    )
    humans_call_receipt = humans.w3.eth.wait_for_transaction_receipt(
        humans_txhash
    )

    # ensure that the gasUsed is equivalent
    assert geth_call_receipt.gasUsed == humans_call_receipt.gasUsed


def test_block_gas_limit(humans):
    tx_value = 10

    # get the block gas limit from the latest block
    w3_wait_for_new_blocks(humans.w3, 5)
    block = humans.w3.eth.get_block("latest")
    exceeded_gas_limit = block.gasLimit + 100

    # send a transaction exceeding the block gas limit
    humans_gas_price = humans.w3.eth.gas_price
    tx = {
        "to": ADDRS["community"],
        "value": tx_value,
        "gas": exceeded_gas_limit,
        "gasPrice": humans_gas_price,
    }

    # expect an error due to the block gas limit
    with pytest.raises(Exception):
        send_transaction(humans.w3, tx, KEYS["validator"])

    # deploy a contract on humans
    humans_contract, _ = deploy_contract(humans.w3, CONTRACTS["BurnGas"])

    # expect an error on contract call due to block gas limit
    with pytest.raises(Exception):
        humans_txhash = humans_contract.functions.burnGas(
            exceeded_gas_limit
        ).transact(
            {
                "from": ADDRS["validator"],
                "gas": exceeded_gas_limit,
                "gasPrice": humans_gas_price,
            }
        )
        (humans.w3.eth.wait_for_transaction_receipt(humans_txhash))

    return
