# Useful methods or functions
include ../makefile.sharedFunctions
# Inputs
CPP_FILES = $(call rwildcard,src/,*.cpp) 
HEADER_FILES = $(call rwildcard,src/,*.h) 
# Intermediary outputs
OBJ_FILES_DEBUG_GCC = $(patsubst %.cpp,debug_obj/gcc/%.o, $(CPP_FILES))
OBJ_FILES_SHIP_GCC = $(patsubst %.cpp,ship_obj/gcc/%.o, $(CPP_FILES))
OBJ_FILES_DEBUG_EMCC = $(patsubst %.cpp,debug_obj/emcc/%.o, $(CPP_FILES))
OBJ_FILES_SHIP_EMCC = $(patsubst %.cpp,ship_obj/emcc/%.o, $(CPP_FILES))
# Outputs
TARGET_NAME_GCC = libclient.shared.a
TARGET_NAME_EMCC = client.shared.bc
TARGET_NAME_GCC_DEBUG = debug/$(TARGET_NAME_GCC)
TARGET_NAME_GCC_SHIP = ship/$(TARGET_NAME_GCC)
TARGET_NAME_EMCC_DEBUG = debug/$(TARGET_NAME_EMCC)
TARGET_NAME_EMCC_SHIP = ship/$(TARGET_NAME_EMCC)
# Headers
HEADER_FILES_NO_SRC = $(patsubst src/%,%, $(HEADER_FILES))
HEADER_FILES_DEBUG = $(patsubst %.h,debug/headers/%.h, $(HEADER_FILES_NO_SRC))
HEADER_FILES_SHIP = $(patsubst %.h,ship/headers/%.h, $(HEADER_FILES_NO_SRC))
# g++ flags
GPP_FLAGS_DEBUG = -O0 -g3
GPP_FLAGS_SHIP = -O3

all: debug ship
debug: debug_gcc debug_emcc debug_headers
ship: ship_gcc ship_emcc ship_headers
debug_gcc: $(TARGET_NAME_GCC_DEBUG)
ship_gcc: $(TARGET_NAME_GCC_SHIP)
debug_emcc: $(TARGET_NAME_EMCC_DEBUG)
ship_emcc: $(TARGET_NAME_EMCC_SHIP)
debug_headers: $(HEADER_FILES_DEBUG)
ship_headers: $(HEADER_FILES_SHIP)

$(TARGET_NAME_GCC_DEBUG): $(OBJ_FILES_DEBUG_GCC)
	$(call MakeDir,$(dir $@))
	ar rcs $(call FixPath,$(TARGET_NAME_GCC_DEBUG)) $(call FixPath,$(OBJ_FILES_DEBUG_GCC))

$(TARGET_NAME_GCC_SHIP): $(OBJ_FILES_SHIP_GCC)
	$(call MakeDir,$(dir $@))
	ar rcs $(call FixPath,$(TARGET_NAME_GCC_SHIP)) $(call FixPath,$(OBJ_FILES_SHIP_GCC))

$(TARGET_NAME_EMCC_DEBUG): $(OBJ_FILES_DEBUG_EMCC)
	$(call MakeDir,$(dir $@))
	emcc -std=c++11 $(call FixPath,$^) -o $(call FixPath,$@) -o0 -g4 -s MODULARIZE=1 -s NO_EXIT_RUNTIME=1 -s EXCEPTION_DEBUG=1 -s SAFE_HEAP=1

$(TARGET_NAME_EMCC_SHIP): $(OBJ_FILES_SHIP_EMCC)
	$(call MakeDir,$(dir $@))
	emcc -std=c++11 $(call FixPath,$^) -o $(call FixPath,$@) -oz -s MODULARIZE=1 -s NO_EXIT_RUNTIME=1

debug_obj/gcc/%.o: %.cpp
	$(call MakeDir,$@)
	g++ -c $(call FixPath,$^) -o $(call FixPath,$@) $(GPP_FLAGS_DEBUG)

ship_obj/gcc/%.o: %.cpp
	$(call MakeDir,$@)
	g++ -c $(call FixPath,$^) -o $(call FixPath,$@) $(GPP_FLAGS_SHIP)

debug_obj/emcc/%.o: %.cpp
	$(call MakeDir,$@)
	emcc -std=c++11 -c $(call FixPath,$^) -o $(call FixPath,$@) $(GPP_FLAGS_DEBUG)

ship_obj/emcc/%.o: %.cpp
	$(call MakeDir,$@)
	emcc -std=c++11 -c $(call FixPath,$^) -o $(call FixPath,$@) $(GPP_FLAGS_SHIP)

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