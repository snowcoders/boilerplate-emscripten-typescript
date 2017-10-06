# Introduction
This is example boilerplate code of how to write code in C++ that is compiled using make and mingw32-make and then how to transpile it into javascript. Finally, it provides two example test projects, one for the javascript output and one for the C++ output.

 - client.shared - The C++ library code
 - client.shared.js - The transpiled javascript code associated with the C++ library
 - client.shared.test.cpp - The C++ test code for the library
 - client.shared.test.js - The javascript test code for the library

# Getting this example
TODO

# Dependencies
There are several dependencies to compiling this project.

## Emscripten
Emscripten is a C++ to JavaScript compiler which converts C++ code into JavaScript.
http://kripken.github.io/emscripten-site/
You'll need the SDK at minimum

## Bandit
Bandit is a C++ Unit Test library that is header only.
https://github.com/banditcpp/bandit
You'll need to clone the library
This is only required for client.shared.test

## Windows only - Mingw64
Mingw64 allows for make to be run on windows.
http://mingw-w64.org/

# Setting up the CMD
Note: I've been doing this on Windows but it should compile on unix or linux with a few minor fixes.

# Building client.shared, client.shared.js, client.shared.test.cpp
1. Open a prompt window
2. Setup the emscripten sdk by running `emsdk_env.bat` from wherever you installed
3. If on windows, set the path to include your MinGW location (e.g. `PATH = %PATH%;C:\MinGW\bin`)
4. Run `make` (or if on windows `mingw32-make`)

# Building client.shared.test.js
There is no build system for this because it only consists of tests! Just be sure to build everything else first.

# Running client.shared.test.cpp
After building there should be two files
- client.shared.test/debug/client.shared.test.exe
- client.shared.test/ship/client.shared.test.exe

# Running client.shared.test.js
This contains tests examples for karma and mocha. To run Karma run `npm run karma`. To run Mocha run `npm run mocha`. To run both, just do `npm test`.