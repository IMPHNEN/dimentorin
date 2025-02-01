{pkgs, ...}: let
  baseImage = pkgs.ociTools.pullImage {
    imageName = "ubuntu";
    tag = "latest";
  };
in
  pkgs.dockerTools.buildImage {
    name = "najm-course-api";

    fromImage = baseImage;

    copyToRoot = pkgs.buildEnv {
      name = "app-env";
      paths = [
        (pkgs.stdenv.mkDerivation {
          name = "najm-course-api";
          src = ./src;

          buildInputs = [
            pkgs.rustc
            pkgs.cargo
            pkgs.openssl
            pkgs.pkg-config
          ];

          buildPhase = ''
            cargo build --release
          '';

          installPhase = ''
            mkdir -p $out/bin
            cp target/release/najm-course-api $out/bin/
          '';
        })
      ];
    };

    config = {
      Cmd = ["/bin/najm-course-api"];
      WorkingDir = "/bin";
    };
  }
