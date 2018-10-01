# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions
# Dependent files
PREFIX = $(call FixPath,./src/prefix.txt)
POSTFIX = $(call FixPath,./src/postfix.txt)
# Dependent libraries
LIBRARIES_DEBUG = $(call FixPath,../client-shared-cpp/debug/client-shared.bc)
LIBRARIES_SHIP = $(call FixPath,../client-shared-cpp/ship/client-shared.bc)
# Outputs
TARGET_NAME_GCC = client-shared-js.js
TARGET_NAME_GCC_DEBUG = $(call FixPath,debug/$(TARGET_NAME_GCC))
TARGET_NAME_GCC_SHIP = $(call FixPath,ship/$(TARGET_NAME_GCC))
# emcc flags
EMCC_JS_WRAPPER = -s MODULARIZE=1 -s SINGLE_FILE=1 -s EXPORT_ES6=1

all: debug ship
debug: debug_emcc
ship: ship_emcc
debug_emcc: $(TARGET_NAME_GCC_DEBUG)
ship_emcc: $(TARGET_NAME_GCC_SHIP)

$(TARGET_NAME_GCC_DEBUG): $(LIBRARIES_DEBUG)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_DEBUG) -o $(TARGET_NAME_GCC_DEBUG) $(EMCC_FLAGS_DEBUG) $(EMCC_JS_WRAPPER)
# Required because EXPORT_ES6 outputs ES6 specific code and most libraries export ES5
	npm run transpile -- ".\$(TARGET_NAME_GCC_DEBUG)"

$(TARGET_NAME_GCC_SHIP): $(LIBRARIES_SHIP)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_SHIP) -o $(TARGET_NAME_GCC_SHIP) $(EMCC_FLAGS_SHIP) $(EMCC_JS_WRAPPER)
# Required because EXPORT_ES6 outputs ES6 specific code and most libraries export ES5
	npm run transpile -- ".\$(TARGET_NAME_GCC_SHIP)"

clean:
	$(call RemoveDir,debug)
	$(call RemoveDir,ship)