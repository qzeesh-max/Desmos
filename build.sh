#!/bin/bash
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published
# by the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.
#
# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <https://www.gnu.org/licenses/>.

set -e

# build.sh - Build the Desmos framework library

echo "Building Desmos on WSL/macOS..."

# Ensure JAVA_HOME is set to JDK 22+
#if [ -d "/opt/homebrew/opt/openjdk@26" ]; then
#    export JAVA_HOME="/opt/homebrew/opt/openjdk@26"
#    export PATH="$JAVA_HOME/bin:$PATH"
#elif [ -z "$JAVA_HOME" ]; then
#    if [ -d "$HOME/jdk/jdk-22.0.2" ]; then
#        export JAVA_HOME="$HOME/jdk/jdk-22.0.2"
#        export PATH="$JAVA_HOME/bin:$PATH"
#    elif ! command -v javac &> /dev/null; then
#        echo "JAVA_HOME not set and jdk-22 not found in ~/jdk, and javac is not in PATH. Please install JDK 22."
#        exit 1
#    fi
#fi

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
