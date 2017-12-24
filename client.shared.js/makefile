# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions
# Dependent files
PREFIX = $(call FixPath,./src/prefix.js)
POSTFIX = $(call FixPath,./src/postfix.js)
# Dependent libraries
LIBRARIES_DEBUG = $(call FixPath,../client.shared/debug/client.shared.bc)
LIBRARIES_SHIP = $(call FixPath,../client.shared/ship/client.shared.bc)
# Outputs
TARGET_NAME_GCC = client-shared.js
TARGET_NAME_GCC_DEBUG = $(call FixPath,debug/$(TARGET_NAME_GCC))
TARGET_NAME_GCC_SHIP = $(call FixPath,ship/$(TARGET_NAME_GCC))
# g++ flags
#GPP_FLAGS_ALL = -s MODULARIZE=1
EMCC_JS_WRAPPER = --pre-js $(PREFIX) --post-js $(POSTFIX)

all: debug ship
debug: debug_emcc
ship: ship_emcc
debug_emcc: $(TARGET_NAME_GCC_DEBUG)
ship_emcc: $(TARGET_NAME_GCC_SHIP)

$(TARGET_NAME_GCC_DEBUG): $(LIBRARIES_DEBUG) $(PREFIX) $(POSTFIX)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_DEBUG) -o $(TARGET_NAME_GCC_DEBUG) $(EMCC_FLAGS_DEBUG) $(EMCC_JS_WRAPPER)

$(TARGET_NAME_GCC_SHIP): $(LIBRARIES_SHIP) $(PREFIX) $(POSTFIX)
	$(call MakeDir,$(dir $@))
	emcc --bind $(LIBRARIES_SHIP) -o $(TARGET_NAME_GCC_SHIP) $(EMCC_FLAGS_SHIP) $(EMCC_JS_WRAPPER)

clean:
	$(call RemoveDir,debug)
	$(call RemoveDir,ship)