# Useful methods or functions
include ../makefile.sharedConstants
include ../makefile.sharedFunctions

all: dist

dist: node_modules
	npm run build

node_modules:
	npm install

.PHONY: clean
clean:
	$(call RemoveDir,dist)
	