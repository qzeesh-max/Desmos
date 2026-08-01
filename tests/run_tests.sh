#!/bin/bash
set -e

# run_tests.sh - Build and execute Desmos unit tests

echo "====================================="
echo "Building Desmos Test Suite"
echo "====================================="

cd "$(dirname "$0")/java_e2e"

OS=$(uname -s)
if [ "$OS" = "Darwin" ]; then
    EXT="dylib"
else
    EXT="so"
fi

# Compile the core C++ framework into a shared library local to tests
echo "1. Compiling libDesmos.${EXT}..."
g++-16 -std=c++26 -freflection -shared -fPIC -I../../include ../../src/Exporter.cpp -o libDesmos.${EXT}
# Tests look for 'libDesmosTest.${EXT}' in some cases based on naming
cp libDesmos.${EXT} libDesmosTest.${EXT}

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

# Compile the test native library (libPoint.${EXT})
echo "4. Compiling libPoint.${EXT} (Test Native Library)..."
g++-16 -std=c++26 -freflection -shared -fPIC -I../../include Point.cpp VirtualBase_Trampoline.cpp PrimitiveTypesTest.cpp -o libPoint.${EXT} -L. -lDesmos

# Compile the Java source files
echo "5. Compiling Java test files..."
if [ -x /opt/homebrew/opt/openjdk@26/bin/javac ]; then
    JAVAC=/opt/homebrew/opt/openjdk@26/bin/javac
    JAVA=/opt/homebrew/opt/openjdk@26/bin/java
else
    JAVAC=javac
    JAVA=java
fi

$JAVAC Point.java VirtualBase.java VirtualBase_Trampoline.java PrimitiveTester.java PrimitiveTester_Trampoline.java PrimitiveTest.java VirtualTest.java Main.java

echo "====================================="
echo "Running Desmos Unit Tests"
echo "====================================="

# Execute the test suite
$JAVA -Djava.library.path=. --enable-native-access=ALL-UNNAMED Main

echo "====================================="
echo "ALL TESTS PASSED SUCCESSFULLY!"
echo "====================================="
