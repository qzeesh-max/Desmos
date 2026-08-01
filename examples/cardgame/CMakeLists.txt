cmake_minimum_required(VERSION 3.25)
project(Desmos_CardGame CXX)

if(NOT TARGET Desmos::Desmos)
    find_package(Desmos REQUIRED)
endif()

desmos_add_java_binding(CardGame
    CPP_SOURCES CardGame.cpp
    JAVA_SOURCES CardGame.java CardGameUI.java
    MAIN_CLASS CardGameUI
)
