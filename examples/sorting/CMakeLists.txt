cmake_minimum_required(VERSION 3.25)
project(JavaNativeLink_Sorting CXX)

if(NOT TARGET JavaNativeLink::JavaNativeLink)
    find_package(JavaNativeLink REQUIRED)
endif()

jnl_add_java_binding(Sorter
    HEADERS Sorter.h
    CPP_SOURCES Sorter.cpp
    JAVA_SOURCES Sorter.java SortingVisualizer.java
    MAIN_CLASS SortingVisualizer
)
