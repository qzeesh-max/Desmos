# Desmos Web Port

This directory contains the WebAssembly and TeaVM port of the `Desmos` desktop examples (`CardGame` and `SortingVisualizer`). This allows you to run the C++ computationally intensive logic directly in the browser via WebAssembly, while rendering the UI using Java compiled to JavaScript (via TeaVM).

## Prerequisites

To build the web port, you need:
1. **Emscripten**: For compiling C++ to WebAssembly. Install [emsdk](https://emscripten.org/docs/getting_started/downloads.html) and ensure `emcc` is in your `PATH`.
2. **Maven**: For building the Java frontend and converting it to JavaScript via TeaVM.
3. **Python 3**: For running a local web server to host the demo.

## Building

A unified build script is provided in this directory. It will automatically build the C++ bindings with Emscripten and the Java UI with TeaVM.

```bash
chmod +x build.sh
./build.sh
```

## Running the Showcase

The `SortingVisualizer` uses WebAssembly threads (pthreads), which require specific HTTP Headers (`Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy`) due to browser security restrictions on `SharedArrayBuffer`. 

We provide a lightweight Python HTTP server that injects these headers automatically:

```bash
cd webapp
python3 server.py 8000
```

Open your browser to `http://localhost:8000`.

## Architecture

- **`cpp/`**: Contains the C++ logic. The original C++ source files have been stripped of the proprietary `Desmos` FFM annotations since they are incompatible with Emscripten. We provide `CardGameWasm.cpp` and `SorterWasm.cpp` to expose the C++ functions to JavaScript using `emscripten::bind`.
- **`java/`**: Contains the TeaVM Java frontend UI code. It leverages `teavm-jso` to bind to HTML5 APIs like Canvas, and calls into the Emscripten WASM modules through the `Interop.java` class.
- **`webapp/`**: Contains the static HTML files, CSS, and the `assets/` directory where the compiled `.js` and `.wasm` artifacts are placed. 

## Technical Details (TeaVM)

TeaVM applications default to placing their runtime and main entries directly into the global JavaScript namespace. Since we showcase multiple TeaVM components on the same page, we encapsulate each app within an `<iframe>` inside `index.html` (e.g. `cardgame.html` and `sorter.html`). This cleanly avoids namespace collisions.
