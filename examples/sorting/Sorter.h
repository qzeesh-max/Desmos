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

#pragma once
#include <atomic>
#include <vector>
#include <thread>
#include <memory>
#include <cstdint>
#include "Desmos/Exporter.h"
#include "Desmos/Annotations.h"

class [[=desm::export_java{}]] Sorter {
private:
    std::vector<int> m_array;
    std::atomic<int>* m_visualArray;
    int m_size;
    std::atomic<bool>* m_running;
    int m_delayMs;
    std::thread* m_worker;

    void updateVisual(int index, int value);
    int getMax();
    void countSort(int exp);
public:
    Sorter(int size);
    virtual ~Sorter();

    virtual void setDelay(int ms);
    virtual void randomize();
    
    // Reads a specific index (called by Java UI)
    virtual int getElement(int index);
    virtual int getSize();
    virtual bool isRunning();

    virtual void stop();

    virtual void bubbleSort();
    virtual void quickSort();
    virtual void radixSort();

    void quickSortImpl(int low, int high);
};

DESM_EXPORT_CLASS(Sorter);
