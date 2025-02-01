{pkgs ? import <nixpkgs> {}}:
pkgs.mkShell {
  inputsFrom = [(pkgs.callPackage ./default.nix {})];
  buildInputs = with pkgs; [
    libunwind
    nodejs_22
    rust-analyzer
    rustfmt
    crate2nix
    clippy
    lld

    (writeScriptBin "helpme" ''
      __usage="
      👋 Welcome to Najm Course API development environment. 🚀
      If you see this message, it means your are inside the Nix shell ❄️.

      [Info]===============================================================>

      Rustc Version: v${rustc.version}
      Rustup Version: v${rustup.version}
      Cargo Version: v${cargo.version}

      Command available:
        - start:            start project in production 🛹 ( need to run build first )
        - build:            build project for production
        - dev:              start project in development
        - start-docker:     start project in docker container ( compose )
        - build-docker:     build project for docker container
        - helpme:           show this messages

      Repository:
        - https://github.com/maulanasdqn/najm-course-api
      [Info]===============================================================>
      "
      echo "$__usage"
    '')

    (writeScriptBin "dev-be" ''
      cargo watch -x run
    '')

    (writeScriptBin "dev-fe" ''
      npm run start
    '')

    (writeScriptBin "start" ''
      echo "Starting project in production mode..."
      echo "Najm Course API started on port $PORT 🛹..."
      ./result/bin/najm-course-api
    '')

    (writeScriptBin "build" ''
      echo "Building project..."
      crate2nix generate
      nix build -f Cargo.nix
      echo "Now you can start the project with the command 'start'"
    '')

    (writeScriptBin "start-docker" ''
      echo "Starting project in docker container..."
      docker compose up -d
    '')

    (writeScriptBin "build-docker" ''
      echo "Building project with docker..."
      docker build -t najm-course-api:latest .
      echo "Project built successfully."
      echo "Now you can start the project with the command 'start-docker'"
    '')
  ];

  shellHook = ''
    export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:${pkgs.libunwind}/lib
    helpme
    if [ -f .env ]; then
      echo "Loading .env file..."
      export $(cat .env | xargs)
      echo "Successfully applied .env file."
    else
      echo ".env file not found."
    fi
  '';
}
