# Introduction
This is example boilerplate code of how to write code in C++ that is compiled using make and mingw32-make and then how to transpile it into javascript. Finally, it provides two example test projects, one for the javascript output and one for the C++ output.

 - client-shared-cpp - The C++ library code
 - client-shared-cpp-test - The C++ test code for the library
 - client-shared-js - The transpiled javascript code associated with the C++ library
 - client-shared-js-test-jest - A jest based javascript test suite for the transpiled library
 - client-shared-js-test-jest - A mocha based javascript test suite for the transpiled library
 - client-web-raw - A sample web application that uses basic web technologies to load the transpiled library
 - client-web-webpack - A webpack sample application that uses webpack for two websites; one in React and one in Knockout

# Getting this example
```
git clone --recursive https://github.com/snowcoders/boilerplate-emscripten-typescript/
```
or if you already cloned it just run
```
git submodule update --init --recursive
```
in the root directory

# Dependencies
There are several dependencies to compiling this project.

## Emscripten
Emscripten is a C++ to JavaScript compiler which converts C++ code into JavaScript.
http://kripken.github.io/emscripten-site/
You'll need the SDK at minimum

## Windows only - Mingw64
Mingw64 allows for make to be run on windows.
http://mingw-w64.org/

# Setting up the CMD
Note: I've been doing this on Windows but it should compile on unix or linux with a few minor fixes. Most likely, it's the npm scripts that would give you the biggest hurdles.

# Building
## client-shared-cpp, client-shared-js, client-shared-cpp-test
1. Open a prompt window
1. Setup the emscripten sdk by running `emsdk_env.bat` from wherever you installed
1. If on windows, set the path to include your MinGW location (e.g. `PATH = %PATH%;D:/MinGW/mingw64/bin`)
1. Run `make` (or if on windows `mingw32-make`)
    - Hint: Use the -jN feature to run multiple processors

You can also run make from the root directory, and it will recurse into all the sub directories.

## client-shared-js-test, client-web-raw, client-web-webpack
1. Build client-shared-js
1. Run npm install

# Running
## client-shared-cpp-test
After building there should be two files
- client-shared-cpp-test/debug/client-shared-test.exe
- client-shared-cpp-test/ship/client-shared-test.exe

You can change the reporter status to get more details from the tests. `--reporter=spec` is a pretty good start, more information can be found via [banditcpp's documentation](https://github.com/banditcpp/bandit)

## client-shared-js-test-*
1. Go into the directory
1. Run `npm run test`.

## client-web-*
1. Go into the directory
1. Run `npm run start`.

# Last checked versions
This example code was last checked with
| Tool          | Version |
| ------------- | -------- |
| EMCC | 1.38.12 (commit 0d8576c0e8f5ee09a36120b9d44184b5da2f2e7a) |
| Node | 8.9.1 |
| mingw32-make | v5.0.0 |

