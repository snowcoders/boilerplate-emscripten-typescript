#include <string>

class StringFactory {
private:
    size_t counter;
public:
    StringFactory();
    std::string getString();
};