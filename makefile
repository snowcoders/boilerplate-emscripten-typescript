# Useful methods or functions
include shared-makefile/shared-cli.mk

.PHONY: all
all: client_shared_cpp_test client_shared_js_test_jest  client_shared_js_test_mocha client_web_raw client_web_webpack

.PHONY: client_shared_cpp
client_shared_cpp:
	cd ./client-shared-cpp $(CmdSeparator) $(Make)
	
.PHONY: client_shared_js
client_shared_js: client_shared_cpp
	cd ./client-shared-js $(CmdSeparator) $(Make)
	
.PHONY: client_shared_cpp_test
client_shared_cpp_test: client_shared_cpp
	cd ./client-shared-cpp-test $(CmdSeparator) $(Make)
	
.PHONY: client_shared_js_test_jest
client_shared_js_test_jest: client_shared_js
	cd ./client-shared-js-test-jest $(CmdSeparator) $(Make)
	
.PHONY: client_shared_js_test_mocha
client_shared_js_test_mocha: client_shared_js
	cd ./client-shared-js-test-mocha $(CmdSeparator) $(Make)
	
.PHONY: client_web_raw
client_web_raw: client_shared_js
	cd ./client-web-raw $(CmdSeparator) $(Make)
	
.PHONY: client_web_webpack
client_web_webpack: client_shared_js
	cd ./client-web-webpack $(CmdSeparator) $(Make)

.PHONY: test
test: client_shared_cpp_test client_shared_js_test_jest client_shared_js_test_mocha
	cd ./client-shared-cpp-test $(CmdSeparator) $(Make) test
	cd ./client-shared-js-test-jest $(CmdSeparator) $(Make) test
	cd ./client-shared-js-test-mocha $(CmdSeparator) $(Make) test

.PHONY: clean
clean:
	cd $(call FixPath,./client-web-raw) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-web-webpack) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-js-test-jest) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-js-test-mocha) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-js) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-cpp-test) $(CmdSeparator) $(Make) clean
	cd $(call FixPath,./client-shared-cpp) $(CmdSeparator) $(Make) clean
	
.PHONY: clean-hard
clean-hard: clean
	cd $(call FixPath,./client-shared-js-test-jest) $(CmdSeparator) $(Make) clean-hard
	cd $(call FixPath,./client-shared-js-test-mocha) $(CmdSeparator) $(Make) clean-hard
	cd $(call FixPath,./client-web-raw) $(CmdSeparator) $(Make) clean-hard
	cd $(call FixPath,./client-web-webpack) $(CmdSeparator) $(Make) clean-hard
