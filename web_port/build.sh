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
echo " 3. Copying Web Assets"
echo "======================================"
cp -r ../../examples/polyglot/assets/flags ../webapp/assets/flags
cp ../../examples/polyglot/assets/polyglot_logo.png ../../examples/polyglot/assets/river.wav ../webapp/assets



echo "======================================"
echo " Build Complete!"
echo "======================================"
echo "To run the Web Port locally, start the Python server:"
echo "cd webapp && python3 server.py 8000"
echo "Then navigate to http://localhost:8000"
