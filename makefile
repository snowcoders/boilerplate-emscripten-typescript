# Useful methods or functions
include makefile.sharedFunctions

.PHONY: all
all: client_shared_javascript client_shared_test

.PHONY: client_shared
client_shared:
	cd ./client.shared $(CmdSeparator) $(Make)
	
.PHONY: client_shared_javascript
client_shared_javascript: client_shared
	cd ./client.shared.js $(CmdSeparator) $(Make)
	
.PHONY: client_shared_test
client_shared_test: client_shared
	cd ./client.shared.test.cpp $(CmdSeparator) $(Make)

clean:
	cd $(call FixPath,./client.shared) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client.shared.js) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client.shared.test.cpp) $(CmdSeparator) $(Make) clean