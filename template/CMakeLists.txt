cmake_minimum_required(VERSION 3.25)
project(JavaNativeLink_Template CXX)

if(NOT TARGET JavaNativeLink::JavaNativeLink)
    find_package(JavaNativeLink REQUIRED)
endif()

jnl_add_java_binding(MyClass
    CPP_SOURCES MyClass.cpp
    JAVA_SOURCES MyClass.java Main.java
    MAIN_CLASS Main
)
