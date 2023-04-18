{ pkgs ? import ../../../nix { } }:
let humansd = (pkgs.callPackage ../../../. { });
in
humansd.overrideAttrs (oldAttrs: {
  patches = oldAttrs.patches or [ ] ++ [
    ./broken-humansd.patch
  ];
})
