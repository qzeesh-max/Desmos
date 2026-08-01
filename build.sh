#!/bin/bash
set -e

# build.sh - Build the Desmos framework library

echo "Building Desmos on WSL/macOS..."

# Ensure JAVA_HOME is set
if [ -z "$JAVA_HOME" ]; then
    if [ -d "$HOME/jdk/jdk-22.0.2" ]; then
        export JAVA_HOME="$HOME/jdk/jdk-22.0.2"
        export PATH="$JAVA_HOME/bin:$PATH"
    elif ! command -v javac &> /dev/null; then
        echo "JAVA_HOME not set and jdk-22 not found in ~/jdk, and javac is not in PATH. Please install JDK 22."
        exit 1
    fi
fi

# Clean and create build directory
rm -rf build && mkdir build && cd build

# Run CMake and build
cmake -DCMAKE_CXX_COMPILER=g++-16 ..
make -j$(nproc)

# Run C++ tests
ctest --output-on-failure
cd ..

# Build Java end-to-end test
echo "Building and running Java E2E via run_tests.sh..."
chmod +x tests/run_tests.sh
./tests/run_tests.sh



echo "Success!"
