import pytest

from .network import setup_humans
from .utils import CONTRACTS, deploy_contract


@pytest.fixture(scope="module")
def custom_humans(tmp_path_factory):
    path = tmp_path_factory.mktemp("storage-proof")
    yield from setup_humans(path, 26800, long_timeout_commit=True)


@pytest.fixture(scope="module", params=["humans", "geth"])
def cluster(request, custom_humans, geth):
    """
    run on both humans and geth
    """
    provider = request.param
    if provider == "humans":
        yield custom_humans
    elif provider == "geth":
        yield geth
    else:
        raise NotImplementedError


def test_basic(cluster):
    _, res = deploy_contract(
        cluster.w3,
        CONTRACTS["StateContract"],
    )
    method = "eth_getProof"
    storage_keys = ["0x0", "0x1"]
    proof = (
        cluster.w3.provider.make_request(
            method, [res["contractAddress"], storage_keys, hex(res["blockNumber"])]
        )
    )["result"]
    for proof in proof["storageProof"]:
        if proof["key"] == storage_keys[0]:
            assert proof["value"] != "0x0"
