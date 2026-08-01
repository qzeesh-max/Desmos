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

#include "Sorter.h"
#include <chrono>
#include <random>
#include <algorithm>
#include <iostream>

Sorter::Sorter(int size) : m_array(size), m_size(size), m_delayMs(5) {
    m_worker = nullptr;
    m_running = new std::atomic<bool>(false);
    m_visualArray = new std::atomic<int>[size];
    for(int i = 0; i < size; i++) {
        m_visualArray[i].store(0, std::memory_order_relaxed);
    }
    randomize();
}

Sorter::~Sorter() {
    stop();
    delete[] m_visualArray;
    delete m_running;
    if (m_worker) delete m_worker;
}

void Sorter::setDelay(int ms) {
    m_delayMs = ms;
}

void Sorter::updateVisual(int index, int value) {
    m_visualArray[index].store(value, std::memory_order_relaxed);
}

void Sorter::randomize() {
    stop();
    std::random_device rd;
    std::mt19937 gen(rd());
    std::uniform_int_distribution<> dis(10, 500);

    for (size_t i = 0; i < m_array.size(); ++i) {
        int val = dis(gen);
        m_array[i] = val;
        updateVisual(i, val);
    }
}

int Sorter::getElement(int index) {
    if (index >= 0 && index < m_size) {
        return m_visualArray[index].load(std::memory_order_relaxed);
    }
    return 0;
}

int Sorter::getSize() {
    return m_size;
}

bool Sorter::isRunning() {
    return m_running->load();
}

void Sorter::stop() {
    m_running->store(false);
    if (m_worker && m_worker->joinable()) {
        m_worker->join();
    }
}

void Sorter::bubbleSort() {
    stop();
    m_running->store(true);
    
    if (m_worker) delete m_worker;
    m_worker = new std::thread([this]() {
        int n = m_array.size();
        for (int i = 0; i < n - 1; ++i) {
            for (int j = 0; j < n - i - 1; ++j) {
                if (!m_running->load()) break;
                if (m_array[j] > m_array[j + 1]) {
                    std::swap(m_array[j], m_array[j + 1]);
                    updateVisual(j, m_array[j]);
                    updateVisual(j + 1, m_array[j + 1]);
                    std::this_thread::sleep_for(std::chrono::milliseconds(m_delayMs));
                }
            }
        }
        m_running->store(false);
    });
}

void Sorter::quickSort() {
    stop();
    m_running->store(true);

    if (m_worker) delete m_worker;
    m_worker = new std::thread([this]() {
        quickSortImpl(0, m_array.size() - 1);
        m_running->store(false);
    });
}

void Sorter::quickSortImpl(int low, int high) {
    if (low < high && m_running->load()) {
        int pivot = m_array[high];
        int i = low - 1;

        for (int j = low; j <= high - 1; j++) {
            if (!m_running->load()) return;
            if (m_array[j] < pivot) {
                i++;
                std::swap(m_array[i], m_array[j]);
                updateVisual(i, m_array[i]);
                updateVisual(j, m_array[j]);
                std::this_thread::sleep_for(std::chrono::milliseconds(m_delayMs));
            }
        }
        std::swap(m_array[i + 1], m_array[high]);
        updateVisual(i + 1, m_array[i + 1]);
        updateVisual(high, m_array[high]);
        std::this_thread::sleep_for(std::chrono::milliseconds(m_delayMs));

        int pi = i + 1;
        quickSortImpl(low, pi - 1);
        quickSortImpl(pi + 1, high);
    }
}

int Sorter::getMax() {
    int mx = m_array[0];
    for (int i = 1; i < m_array.size(); i++) {
        if (m_array[i] > mx) {
            mx = m_array[i];
        }
    }
    return mx;
}

void Sorter::countSort(int exp) {
    int n = m_array.size();
    std::vector<int> output(n);
    int i, count[10] = { 0 };

    for (i = 0; i < n; i++) {
        if (!m_running->load()) return;
        count[(m_array[i] / exp) % 10]++;
    }

    for (i = 1; i < 10; i++) {
        if (!m_running->load()) return;
        count[i] += count[i - 1];
    }

    for (i = n - 1; i >= 0; i--) {
        if (!m_running->load()) return;
        output[count[(m_array[i] / exp) % 10] - 1] = m_array[i];
        count[(m_array[i] / exp) % 10]--;
    }

    for (i = 0; i < n; i++) {
        if (!m_running->load()) return;
        m_array[i] = output[i];
        updateVisual(i, m_array[i]);
        std::this_thread::sleep_for(std::chrono::milliseconds(m_delayMs));
    }
}

void Sorter::radixSort() {
    stop();
    m_running->store(true);

    if (m_worker) delete m_worker;
    m_worker = new std::thread([this]() {
        int m = getMax();
        for (int exp = 1; m / exp > 0; exp *= 10) {
            if (!m_running->load()) return;
            countSort(exp);
        }
        m_running->store(false);
    });
}
