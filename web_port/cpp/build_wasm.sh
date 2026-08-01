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

# Compile CardGame
echo "Compiling CardGame..."
emcc CardGameWasm.cpp -o ../webapp/assets/cardgame.js \
    -O3 \
    --bind \
    -s EXPORT_NAME="createCardGameModule" \
    -s MODULARIZE=1 \
    -s ALLOW_MEMORY_GROWTH=1

# Compile Sorter (requires pthreads)
echo "Compiling Sorter..."
emcc SorterWasm.cpp -o ../webapp/assets/sorter.js \
    -O3 \
    --bind \
    -pthread \
    -s USE_PTHREADS=1 \
    -s PTHREAD_POOL_SIZE=4 \
    -s EXPORT_NAME="createSorterModule" \
    -s MODULARIZE=1 \
    -s ALLOW_MEMORY_GROWTH=1

echo "Compiling PolyglotRapids..."
emcc PolyglotRapidsWasm.cpp -o ../webapp/polyglot.js \
    -O3 \
    --bind \
    -I./dummy_include \
    -s EXPORT_NAME="createPolyglotModule" \
    -s MODULARIZE=1 \
    -s INITIAL_MEMORY=33554432 \
    --preload-file ../../examples/polyglot/assets@examples/polyglot/assets

echo "WebAssembly modules compiled successfully."
