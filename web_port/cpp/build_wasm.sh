#!/bin/bash
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

echo "Done compiling WebAssembly modules."
