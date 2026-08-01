cmake_minimum_required(VERSION 3.25)
project(Desmos_Sorting CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(Sorter
    HEADERS Sorter.h
    CPP_SOURCES Sorter.cpp
    JAVA_SOURCES Sorter.java SortingVisualizer.java
    MAIN_CLASS SortingVisualizer
)
