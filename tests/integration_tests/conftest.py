import pytest

from .network import setup_humans, setup_geth


@pytest.fixture(scope="session")
def humans(tmp_path_factory):
    path = tmp_path_factory.mktemp("humans")
    yield from setup_humans(path, 26650)


@pytest.fixture(scope="session")
def geth(tmp_path_factory):
    path = tmp_path_factory.mktemp("geth")
    yield from setup_geth(path, 8545)


@pytest.fixture(
    scope="session", params=["humans", "humans-ws"]
)
def humans_rpc_ws(request, humans):
    """
    run on both humans and humans websocket
    """
    provider = request.param
    if provider == "humans":
        yield humans
    elif provider == "humans-ws":
        humans_ws = humans.copy()
        humans_ws.use_websocket()
        yield humans_ws
    else:
        raise NotImplementedError
