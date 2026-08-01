cmake_minimum_required(VERSION 3.25)
project(Desmos_PolyglotRapids CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(PolyglotRapids
    CPP_SOURCES PolyglotRapids.cpp
    JAVA_SOURCES PolyglotRapidsUI.java
    MAIN_CLASS PolyglotRapidsUI
)
