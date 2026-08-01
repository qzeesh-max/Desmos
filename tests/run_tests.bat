@echo off
setlocal EnableDelayedExpansion

echo =====================================
echo Building Desmos Test Suite
echo =====================================

cd /d "%~dp0java_e2e"

echo 1. Compiling Desmos.dll...
g++ -std=c++26 -freflection -shared -I..\..\include ..\..\src\Exporter.cpp -o Desmos.dll
if %errorlevel% neq 0 exit /b %errorlevel%

copy /y Desmos.dll DesmosTest.dll > nul

echo 2. Compiling and running Generator_step1...
g++ -std=c++26 -freflection -I..\..\include Generator_step1.cpp -o Generator_step1.exe -L. -lDesmos
if %errorlevel% neq 0 exit /b %errorlevel%

set PATH=.;%PATH%
Generator_step1.exe
if %errorlevel% neq 0 exit /b %errorlevel%

echo 3. Compiling and running Generator_step2...
g++ -std=c++26 -freflection -I..\..\include Generator_step2.cpp -o Generator_step2.exe -L. -lDesmos
if %errorlevel% neq 0 exit /b %errorlevel%

Generator_step2.exe
if %errorlevel% neq 0 exit /b %errorlevel%

echo 4. Compiling Point.dll (Test Native Library)...
g++ -std=c++26 -freflection -shared -I..\..\include Point.cpp VirtualBase_Trampoline.cpp PrimitiveTypesTest.cpp -o Point.dll -L. -lDesmos
if %errorlevel% neq 0 exit /b %errorlevel%

echo 5. Compiling Java test files...
javac Point.java VirtualBase.java VirtualBase_Trampoline.java PrimitiveTester.java PrimitiveTester_Trampoline.java PrimitiveTest.java VirtualTest.java Main.java
if %errorlevel% neq 0 exit /b %errorlevel%

echo =====================================
echo Running Desmos Unit Tests
echo =====================================

java -Djava.library.path=. --enable-native-access=ALL-UNNAMED Main
if %errorlevel% neq 0 exit /b %errorlevel%

echo =====================================
echo ALL TESTS PASSED SUCCESSFULLY!
echo =====================================
