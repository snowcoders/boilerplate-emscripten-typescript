#include "StringFactory.h"

#ifdef EMSCRIPTEN
#include <emscripten/bind.h>
using namespace emscripten;
#endif

StringFactory::StringFactory() {
    this->counter = 0;
}

std::string StringFactory::getString() {
    return std::string("Hello, this is string number ") + std::to_string(this->counter++);
}

#ifdef EMSCRIPTEN
EMSCRIPTEN_BINDINGS(StringFactory) {
    class_<StringFactory>("StringFactory")
        .smart_ptr_constructor("StringFactory", &std::make_shared<StringFactory>)
        .function("getString", &StringFactory::getString)
        ;
}
#endif