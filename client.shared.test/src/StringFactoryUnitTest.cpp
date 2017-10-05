#include <bandit/bandit.h>

#include <StringFactory.h>

#include <iostream>
#include <memory>

using namespace snowhouse;
using namespace bandit;

go_bandit([]() {
  describe("StringFactory", []() {
    it("Create and test outputs", [&]() {
      auto factory = std::make_shared<StringFactory>();
      auto string_0 = factory->getString();
      AssertThat(string_0, Contains("0"));
      auto string_1 = factory->getString();
      AssertThat(string_0.length(), Equals(string_1.length()));
      AssertThat(string_0, !Contains(string_1));
      AssertThat(string_1, Contains("1"));
    });
  });
});