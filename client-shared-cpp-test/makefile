# Useful methods or functions
include ../shared-makefile/shared-cli.mk
include ../shared-makefile/cpp-constants.mk
# Final outputs
TARGET_NAME = client-shared-cpp-test.exe
# Dependent libraries
LIBRARIES_DEBUG = $(call FixPath,../client-shared-cpp/debug/libclient-shared.a)
LIBRARIES_SHIP = $(call FixPath,../client-shared-cpp/ship/libclient-shared.a)
LIBRARIES_FLAGS_DEBUG = -I$(call FixPath,../bandit) -I$(call FixPath,../client-shared-cpp/debug/headers) -L$(call FixPath,../client-shared-cpp/debug) -lclient-shared
LIBRARIES_FLAGS_SHIP = -I$(call FixPath,../bandit) -I$(call FixPath,../client-shared-cpp/ship/headers) -L$(call FixPath,../client-shared-cpp/ship) -lclient-shared

include ../shared-makefile/cpp-exe-rules.mk

.PHONY: test
test: $(TARGET_NAME_SHIP)
	./$(TARGET_NAME_SHIP) --reporter=spec