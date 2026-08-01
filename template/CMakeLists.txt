cmake_minimum_required(VERSION 3.25)
project(Desmos_Template CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(MyClass
    CPP_SOURCES MyClass.cpp
    JAVA_SOURCES MyClass.java Main.java
    MAIN_CLASS Main
)
