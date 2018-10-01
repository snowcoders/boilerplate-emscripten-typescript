# Useful methods or functions
include makefile.sharedFunctions

.PHONY: all
all: client_shared_js client_shared_cpp_test

.PHONY: client_shared_cpp
client_shared_cpp:
	cd ./client-shared-cpp $(CmdSeparator) $(Make)
	
.PHONY: client_shared_js
client_shared_js: client_shared_cpp
	cd ./client-shared-js $(CmdSeparator) $(Make)
	
.PHONY: client_shared_cpp_test
client_shared_cpp_test: client_shared_cpp
	cd ./client-shared-cpp-test $(CmdSeparator) $(Make)

clean:
	cd $(call FixPath,./client-shared-js) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-cpp-test) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-cpp) $(CmdSeparator) $(Make) clean