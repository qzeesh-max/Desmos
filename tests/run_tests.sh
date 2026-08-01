#!/bin/bash
set -e

# run_tests.sh - Build and execute Desmos unit tests

echo "====================================="
echo "Building Desmos Test Suite"
echo "====================================="

cd "$(dirname "$0")/java_e2e"

# Compile the core C++ framework into a shared library local to tests
echo "1. Compiling libDesmos.dylib..."
g++-16 -std=c++26 -freflection -shared -fPIC -DDESM_EXPORTS -I../../include ../../src/Exporter.cpp -o libDesmos.dylib
# Tests look for 'libDesmosTest.dylib' in some cases based on naming
cp libDesmos.dylib libDesmosTest.dylib

# Compile and run Generator_step1 (Generates Trampolines C++ and first pass Java)
echo "2. Compiling and running Generator_step1..."
g++-16 -std=c++26 -freflection -I../../include Generator_step1.cpp -o Generator_step1 -L. -lDesmos
export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
export DYLD_LIBRARY_PATH=.:$DYLD_LIBRARY_PATH
./Generator_step1

# Compile and run Generator_step2 (Generates Trampoline Java wrappers)
echo "3. Compiling and running Generator_step2..."
g++-16 -std=c++26 -freflection -I../../include Generator_step2.cpp -o Generator_step2 -L. -lDesmos
./Generator_step2

# Compile the test native library (libPoint.dylib)
echo "4. Compiling libPoint.dylib (Test Native Library)..."
g++-16 -std=c++26 -freflection -shared -fPIC -I../../include Point.cpp VirtualBase_Trampoline.cpp PrimitiveTypesTest.cpp -o libPoint.dylib -L. -lDesmos

# Compile the Java source files
echo "5. Compiling Java test files..."
/opt/homebrew/opt/openjdk@26/bin/javac Point.java VirtualBase.java VirtualBase_Trampoline.java PrimitiveTester.java PrimitiveTester_Trampoline.java PrimitiveTest.java VirtualTest.java Main.java

echo "====================================="
echo "Running Desmos Unit Tests"
echo "====================================="

# Execute the test suite
/opt/homebrew/opt/openjdk@26/bin/java -Djava.library.path=. --enable-native-access=ALL-UNNAMED Main

echo "====================================="
echo "ALL TESTS PASSED SUCCESSFULLY!"
echo "====================================="
