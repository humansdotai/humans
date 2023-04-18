{ pkgs
, config
, humans ? (import ../. { inherit pkgs; })
}: rec {
  start-humans = pkgs.writeShellScriptBin "start-humans" ''
    # rely on environment to provide humansd
    export PATH=${pkgs.test-env}/bin:$PATH
    ${../scripts/start-humans.sh} ${config.humans-config} ${config.dotenv} $@
  '';
  start-geth = pkgs.writeShellScriptBin "start-geth" ''
    export PATH=${pkgs.test-env}/bin:${pkgs.go-ethereum}/bin:$PATH
    source ${config.dotenv}
    ${../scripts/start-geth.sh} ${config.geth-genesis} $@
  '';
  start-scripts = pkgs.symlinkJoin {
    name = "start-scripts";
    paths = [ start-humans start-geth ];
  };
}
