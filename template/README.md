# Desmos Project Template

This is a starter template for building a Java/C++ project with Desmos (Desmos).

## Quick Start

1. **Copy this directory** into your own project location:
   ```bash
   cp -r template/ /path/to/my_project/
   ```

2. **Rename `MyClass`** to your actual class name:
   - Rename `MyClass.cpp` to `YourClass.cpp`
   - Update the struct name, `DESM_EXPORT_CLASS(YourClass)`, and all references in `Generator.cpp` and `Main.java`

3. **Set the `DESM_ROOT` environment variable** to point to your Desmos installation:
   ```bash
   export DESM_ROOT=/path/to/Desmos   # Linux/macOS
   set DESM_ROOT=C:\path\to\Desmos     # Windows
   ```

4. **Build**:
   ```bash
   # Linux/macOS
   ./build.sh

   # Windows (MSYS2)
   build.bat
   ```

## File Overview

| File | Purpose |
|------|---------|
| `MyClass.cpp` | Your C++ class with `DESM_EXPORT_CLASS` macro |
| `Generator.cpp` | Compile-time code generator that produces `MyClass.java` |
| `Main.java` | Example Java application that uses the generated bindings |
| `build.sh` | Linux/macOS build script |
| `build.bat` | Windows (MSYS2) build script |

## How It Works

1. **Build the Desmos core library** (`libDesmos.so` / `Desmos.dll`) from the parent project
2. **Compile `Generator.cpp`** with GCC 16's `-freflection` flag — this uses C++26 reflection to introspect your class
3. **Run the Generator** — it produces a `MyClass.java` file with FFM bindings
4. **Compile `MyClass.cpp`** into a shared library (`libMyClass.so` / `MyClass.dll`)
5. **Compile and run `Main.java`** with `--enable-native-access=ALL-UNNAMED`

## Customization Tips

- **Add more methods**: Just add public methods to your struct — they are automatically exported
- **Add fields**: Public non-const fields get auto-generated getters and setters
- **Multiple classes**: Create additional `.cpp` files and add `DESM_EXPORT_CLASS()` calls. Update `Generator.cpp` to generate bindings for each class.
- **Packages**: Pass a package name as the second argument to `desm::generate_java<>()` to place the generated Java class in a package.
