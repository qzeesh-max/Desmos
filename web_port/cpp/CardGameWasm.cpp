#include <emscripten/bind.h>
#include "CardGame.cpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(cardgame_module) {
    class_<CardGame>("CardGame")
        .constructor<>()
        .function("startNewGame", &CardGame::startNewGame)
        .function("playerHit", &CardGame::playerHit)
        .function("playerStand", &CardGame::playerStand)
        .function("getPlayerScore", &CardGame::getPlayerScore)
        .function("getDealerScore", &CardGame::getDealerScore)
        .function("getPlayerWins", &CardGame::getPlayerWins)
        .function("getDealerWins", &CardGame::getDealerWins)
        .function("getPushes", &CardGame::getPushes)
        .function("getPlayerCards", &CardGame::getPlayerCards)
        .function("getDealerCards", &CardGame::getDealerCards)
        .function("getGameStatus", &CardGame::getGameStatus)
        .function("getPlayerCardCount", &CardGame::getPlayerCardCount)
        .function("getDealerCardCount", &CardGame::getDealerCardCount)
        .function("isGameOver", &CardGame::isGameOver)
        ;
}
