#!/bin/bash
set -e

# run_tests.sh - Build and execute JavaNativeLink unit tests

echo "====================================="
echo "Building JavaNativeLink Test Suite"
echo "====================================="

cd "$(dirname "$0")/java_e2e"

# Compile the core C++ framework into a shared library local to tests
echo "1. Compiling libJavaNativeLink.dylib..."
g++-16 -std=c++26 -freflection -shared -fPIC -I../../include ../../src/Exporter.cpp -o libJavaNativeLink.dylib
# Tests look for 'libJavaNativeLinkTest.dylib' in some cases based on naming
cp libJavaNativeLink.dylib libJavaNativeLinkTest.dylib

# Compile and run Generator_step1 (Generates Trampolines C++ and first pass Java)
echo "2. Compiling and running Generator_step1..."
g++-16 -std=c++26 -freflection -I../../include Generator_step1.cpp -o Generator_step1 -L. -lJavaNativeLink
export LD_LIBRARY_PATH=.:$LD_LIBRARY_PATH
export DYLD_LIBRARY_PATH=.:$DYLD_LIBRARY_PATH
./Generator_step1

# Compile and run Generator_step2 (Generates Trampoline Java wrappers)
echo "3. Compiling and running Generator_step2..."
g++-16 -std=c++26 -freflection -I../../include Generator_step2.cpp -o Generator_step2 -L. -lJavaNativeLink
./Generator_step2

# Compile the test native library (libPoint.dylib)
echo "4. Compiling libPoint.dylib (Test Native Library)..."
g++-16 -std=c++26 -freflection -shared -fPIC -I../../include Point.cpp VirtualBase_Trampoline.cpp PrimitiveTypesTest.cpp -o libPoint.dylib -L. -lJavaNativeLink

# Compile the Java source files
echo "5. Compiling Java test files..."
/opt/homebrew/opt/openjdk@26/bin/javac Point.java VirtualBase.java VirtualBase_Trampoline.java PrimitiveTester.java PrimitiveTester_Trampoline.java PrimitiveTest.java VirtualTest.java Main.java

echo "====================================="
echo "Running JavaNativeLink Unit Tests"
echo "====================================="

# Execute the test suite
/opt/homebrew/opt/openjdk@26/bin/java -Djava.library.path=. --enable-native-access=ALL-UNNAMED Main

echo "====================================="
echo "ALL TESTS PASSED SUCCESSFULLY!"
echo "====================================="
