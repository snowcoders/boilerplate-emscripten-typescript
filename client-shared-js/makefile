include ../shared-makefile/shared-cli.mk

# Useful constants
include ../shared-makefile/cpp-constants.mk
include ../shared-makefile/npm-constants.mk

# Required Variables
LIBRARIES_DEBUG = $(call FixPath,../client-shared-cpp/debug/client-shared.bc)
LIBRARIES_SHIP = $(call FixPath,../client-shared-cpp/ship/client-shared.bc)
TARGET_NAME = client-shared-js

include ../shared-makefile/emcc-rules.mk
include ../shared-makefile/npm-rules.mk