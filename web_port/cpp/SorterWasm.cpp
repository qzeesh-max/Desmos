// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

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
