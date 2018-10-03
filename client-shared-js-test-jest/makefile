# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions

all: node_modules

node_modules:
	npm install

test: coverage

coverage: node_modules
	npm run test

.PHONY: clean
clean:
	$(call RemoveDir,coverage)
