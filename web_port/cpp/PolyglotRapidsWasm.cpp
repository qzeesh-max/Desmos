#include <emscripten/bind.h>
#include "PolyglotRapids.cpp"

using namespace emscripten;

EMSCRIPTEN_BINDINGS(polyglot_module) {
    class_<PolyglotRapids>("PolyglotRapids")
        .constructor<>()
        .function("setLanguages", &PolyglotRapids::setLanguages)
        .function("startGame", &PolyglotRapids::startGame)
        .function("moveRaft", &PolyglotRapids::moveRaft)
        .function("update", &PolyglotRapids::update)
        .function("getStatus", &PolyglotRapids::getStatus)
        .function("getHealth", &PolyglotRapids::getHealth)
        .function("getScore", &PolyglotRapids::getScore)
        .function("getRaftX", &PolyglotRapids::getRaftX)
        .function("getInvulnerableTimer", &PolyglotRapids::getInvulnerableTimer)
        .function("getActiveWord", &PolyglotRapids::getActiveWord)
        .function("getActiveLanguagesCsv", &PolyglotRapids::getActiveLanguagesCsv)
        .function("getObstaclesData", &PolyglotRapids::getObstaclesData)
        .function("getLettersData", &PolyglotRapids::getLettersData)
        .function("getFoundWords", &PolyglotRapids::getFoundWords)
        .function("getWordLockTimer", &PolyglotRapids::getWordLockTimer)
        .function("getCurrentLanguage", &PolyglotRapids::getCurrentLanguage)
        .function("getWordLanguages", &PolyglotRapids::getWordLanguages)
        .function("reset", &PolyglotRapids::reset)
        ;
}
