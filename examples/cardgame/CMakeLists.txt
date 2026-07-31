cmake_minimum_required(VERSION 3.25)
project(JavaNativeLink_CardGame CXX)

if(NOT TARGET JavaNativeLink::JavaNativeLink)
    find_package(JavaNativeLink REQUIRED)
endif()

jnl_add_java_binding(CardGame
    CPP_SOURCES CardGame.cpp
    JAVA_SOURCES CardGame.java CardGameUI.java
    MAIN_CLASS CardGameUI
)
