#include <emscripten/bind.h>
#include "Sorter.cpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(sorter_module) {
    class_<Sorter>("Sorter")
        .constructor<int>()
        .function("setDelay", &Sorter::setDelay)
        .function("randomize", &Sorter::randomize)
        .function("getElement", &Sorter::getElement)
        .function("getSize", &Sorter::getSize)
        .function("isRunning", &Sorter::isRunning)
        .function("stop", &Sorter::stop)
        .function("bubbleSort", &Sorter::bubbleSort)
        .function("quickSort", &Sorter::quickSort)
        .function("radixSort", &Sorter::radixSort)
        ;
}
