# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions
# Dependent libraries
LIBRARIES_DEBUG = $(call FixPath,../client-shared-cpp/debug/client-shared.bc)
LIBRARIES_SHIP = $(call FixPath,../client-shared-cpp/ship/client-shared.bc)
# Outputs
TARGET_NAME_ES6 = client-shared-js.es6.js
TARGET_NAME_ES6_DEBUG = $(call FixPath,debug/$(TARGET_NAME_ES6))
TARGET_NAME_ES6_SHIP = $(call FixPath,ship/$(TARGET_NAME_ES6))
TARGET_NAME_GCC = client-shared-js.js
TARGET_NAME_GCC_DEBUG = $(call FixPath,debug/$(TARGET_NAME_GCC))
TARGET_NAME_GCC_SHIP = $(call FixPath,ship/$(TARGET_NAME_GCC))
# emcc flags
EMCC_JS_WRAPPER = -s MODULARIZE=1 -s SINGLE_FILE=1 -s EXPORT_ES6=1

all: debug ship
debug: $(TARGET_NAME_GCC_DEBUG)
ship: $(TARGET_NAME_GCC_SHIP)

node_modules:
	npm install

$(TARGET_NAME_GCC_DEBUG): $(TARGET_NAME_ES6_DEBUG) node_modules
# Required because EXPORT_ES6 outputs ES6 specific code and most libraries export ES5
	npm run build-debug

$(TARGET_NAME_GCC_SHIP): $(TARGET_NAME_ES6_SHIP) node_modules
# Required because EXPORT_ES6 outputs ES6 specific code and most libraries export ES5
	npm run build-ship

$(TARGET_NAME_ES6_DEBUG): $(LIBRARIES_DEBUG)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_DEBUG) -o $(TARGET_NAME_ES6_DEBUG) $(EMCC_FLAGS_DEBUG) $(EMCC_JS_WRAPPER)

$(TARGET_NAME_ES6_SHIP): $(LIBRARIES_SHIP)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_SHIP) -o $(TARGET_NAME_ES6_SHIP) $(EMCC_FLAGS_SHIP) $(EMCC_JS_WRAPPER)
# Required because EXPORT_ES6 outputs ES6 specific code and most libraries export ES5
	npm run build-ship

clean:
	$(call RemoveDir,debug)
	$(call RemoveDir,ship)