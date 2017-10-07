# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions
# Final outputs
TARGET_NAME_GCC = client.shared.test.exe
# Dependent libraries
LIBRARIES_DEBUG = $(call FixPath,../client.shared/debug/libclient.shared.a)
LIBRARIES_SHIP = $(call FixPath,../client.shared/ship/libclient.shared.a)
LIBRARIES_FLAGS_DEBUG = -I$(call FixPath,../bandit) -I$(call FixPath,../client.shared/debug/headers) -L$(call FixPath,../client.shared/debug) -lclient.shared
LIBRARIES_FLAGS_SHIP = -I$(call FixPath,../bandit) -I$(call FixPath,../client.shared/ship/headers) -L$(call FixPath,../client.shared/ship) -lclient.shared
# Inputs
CPP_FILES = $(call rwildcard,src/,*.cpp) 
HEADER_FILES = $(call rwildcard,src/,*.h) 
# Intermediary outputs
OBJ_FILES_DEBUG = $(patsubst %.cpp,debug_obj/%.o, $(CPP_FILES))
OBJ_FILES_SHIP = $(patsubst %.cpp,ship_obj/%.o, $(CPP_FILES))
# Outputs
TARGET_NAME_GCC_DEBUG = debug/$(TARGET_NAME_GCC)
TARGET_NAME_GCC_SHIP = ship/$(TARGET_NAME_GCC)
# Headers
HEADER_FILES_NO_SRC = $(patsubst src/%,%, $(HEADER_FILES))
HEADER_FILES_DEBUG = $(patsubst %.h,debug/headers/%.h, $(HEADER_FILES_NO_SRC))
HEADER_FILES_SHIP = $(patsubst %.h,ship/headers/%.h, $(HEADER_FILES_NO_SRC))

all: debug ship
debug: debug_gcc debug_headers
ship: ship_gcc ship_headers
debug_gcc: $(TARGET_NAME_GCC_DEBUG)
ship_gcc: $(TARGET_NAME_GCC_SHIP)
debug_headers: $(HEADER_FILES_DEBUG)
ship_headers: $(HEADER_FILES_SHIP)

$(TARGET_NAME_GCC_DEBUG): $(OBJ_FILES_DEBUG) $(LIBRARIES_DEBUG)
	$(call MakeDir,$(dir $@))
	g++ $(call FixPath,$(OBJ_FILES_DEBUG)) -o $(call FixPath,$@) $(LIBRARIES_FLAGS_DEBUG) $(GPP_FLAGS_DEBUG)

$(TARGET_NAME_GCC_SHIP): $(OBJ_FILES_SHIP) $(LIBRARIES_SHIP)
	$(call MakeDir,$(dir $@))
	g++ $(call FixPath,$(OBJ_FILES_SHIP)) -o $(call FixPath,$@) $(LIBRARIES_FLAGS_SHIP) $(GPP_FLAGS_SHIP)

debug_obj/%.o: %.cpp
	$(call MakeDir,$@)
	g++ -c $(call FixPath,$^) -o $(call FixPath,$@) $(LIBRARIES_FLAGS_DEBUG) $(GPP_FLAGS_DEBUG)

ship_obj/%.o: %.cpp
	$(call MakeDir,$@)
	g++ -c $(call FixPath,$^) -o $(call FixPath,$@) $(LIBRARIES_FLAGS_SHIP) $(GPP_FLAGS_SHIP)

debug/headers/%: src/%
	$(call MakeDir,$@)
	xcopy $(call FixPath,$^) $(call FixPath,$(dir $@).) /Q /Y /I

ship/headers/%: src/%
	$(call MakeDir,$@)
	xcopy $(call FixPath,$^) $(call FixPath,$(dir $@).) /Q /Y /I

clean:
	$(call RemoveDir,debug)
	$(call RemoveDir,debug_obj)
	$(call RemoveDir,ship)
	$(call RemoveDir,ship_obj)