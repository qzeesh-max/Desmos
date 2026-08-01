@echo off
setlocal

set "UseMSVC=0"
set "UseMSYS2=0"

:parse_args
if "%~1"=="" goto check_args
if /I "%~1"=="-UseMSVC" set "UseMSVC=1"
if /I "%~1"=="-UseMSYS2" set "UseMSYS2=1"
shift
goto parse_args

:check_args
if "%UseMSVC%"=="0" if "%UseMSYS2%"=="0" (
    set "UseMSYS2=1"
)

echo Building Desmos on Windows...

if "%UseMSVC%"=="1" goto run_msvc
if "%UseMSYS2%"=="1" goto run_msys2
goto end

:run_msvc
echo Using Microsoft Visual Studio...
if exist build rmdir /s /q build
mkdir build
cd build
cmake .. 
if errorlevel 1 exit /b %errorlevel%
cmake --build . --config Release
if errorlevel 1 exit /b %errorlevel%
ctest --output-on-failure -C Release
if errorlevel 1 exit /b %errorlevel%
cd ..
echo Note: Skipping Java E2E tests for MSVC as C++26 reflection is not supported yet.
goto end

:run_msys2
echo Using MSYS2 g++...
if exist build rmdir /s /q build
mkdir build
cd build
cmake -G "Ninja" -DCMAKE_CXX_COMPILER=g++ ..
if errorlevel 1 exit /b %errorlevel%
cmake --build .
if errorlevel 1 exit /b %errorlevel%
ctest --output-on-failure
if errorlevel 1 exit /b %errorlevel%
cd ..

echo Building Java E2E...
cd tests\java_e2e

set "PATH=%CD%\..\..\build;%PATH%"

echo Step 1: Generator_step1
g++ -std=c++26 -freflection Generator_step1.cpp -o Generator_step1.exe -I..\..\include -L..\..\build -lDesmos
if errorlevel 1 exit /b %errorlevel%
.\Generator_step1.exe
if errorlevel 1 exit /b %errorlevel%

echo Step 2: Generator_step2
g++ -std=c++26 -freflection Generator_step2.cpp -o Generator_step2.exe -I..\..\include -L..\..\build -lDesmos
if errorlevel 1 exit /b %errorlevel%
.\Generator_step2.exe
if errorlevel 1 exit /b %errorlevel%

echo Step 3: Compiling Point.dll
g++ -std=c++26 -freflection -fPIC -shared Point.cpp VirtualBase_Trampoline.cpp PrimitiveTypesTest.cpp -o Point.dll -I..\..\include -L..\..\build -lDesmos
if errorlevel 1 exit /b %errorlevel%

echo Step 4: Compiling Java files
javac Point.java VirtualBase.java VirtualBase_Trampoline.java PrimitiveTester.java PrimitiveTester_Trampoline.java PrimitiveTest.java VirtualTest.java Main.java
if errorlevel 1 exit /b %errorlevel%

echo Step 5: Running Main
java --enable-native-access=ALL-UNNAMED "-Djava.library.path=.;..\..\build" Main
if errorlevel 1 exit /b %errorlevel%

cd ..\..



:end
echo Success!
endlocal
