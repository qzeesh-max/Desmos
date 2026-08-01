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
