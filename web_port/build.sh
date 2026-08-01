#!/bin/bash
set -e

# WebAssembly & TeaVM Build Script for Desmos Web Port

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "======================================"
echo " 1. Building C++ WebAssembly Modules"
echo "======================================"
cd "$ROOT_DIR/cpp"

# Make sure emcc is in PATH
if ! command -v emcc &> /dev/null; then
    echo "Error: Emscripten (emcc) could not be found."
    echo "Please activate the Emscripten SDK using 'source emsdk_env.sh'."
    exit 1
fi

./build_wasm.sh

echo "======================================"
echo " 2. Building Java TeaVM UI"
echo "======================================"
cd "$ROOT_DIR/java"

# Make sure maven is installed
if ! command -v mvn &> /dev/null; then
    echo "Error: Maven (mvn) could not be found."
    echo "Please install Maven to build the Java code."
    exit 1
fi

mvn clean package

echo "======================================"
echo " Build Complete!"
echo "======================================"
echo "To run the Web Port locally, start the Python server:"
echo "cd webapp && python3 server.py 8000"
echo "Then navigate to http://localhost:8000"
