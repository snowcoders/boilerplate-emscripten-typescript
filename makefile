# Useful methods or functions
include makefile.sharedFunctions

all: client_shared client_shared_javascript client_shared_test

client_shared:
	cd ./client.shared $(CmdSeparator) $(Make)
	
client_shared_javascript:
	cd ./client.shared.js $(CmdSeparator) $(Make)
	
client_shared_test:
	cd ./client.shared.test.cpp $(CmdSeparator) $(Make)

clean:
	cd $(call FixPath,./client.shared) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client.shared.js) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client.shared.test.cpp) $(CmdSeparator) $(Make) clean