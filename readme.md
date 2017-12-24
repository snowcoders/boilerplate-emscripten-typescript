# Introduction
This is example boilerplate code of how to write code in C++ that is compiled using make and mingw32-make and then how to transpile it into javascript. Finally, it provides two example test projects, one for the javascript output and one for the C++ output.

 - client.shared - The C++ library code
 - client.shared.js - The transpiled javascript code associated with the C++ library
 - client.shared.test.cpp - The C++ test code for the library
 - client.shared.test.js - The javascript test code for the library
 - client.web - A sample web application that uses basic web technologies to load the transpiled library
 - client.web.webpack - A webpack sample application that uses webpack + component libraries (more accurate to what most people will be doing)

# Getting this example
`git clone --recursive https://github.com/snowcoders/boilerplate-emscripten-typescript/`
or if you already cloned it just run
`git submodule update --init --recursive`
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
## client.shared, client.shared.js, client.shared.test.cpp
1. Open a prompt window
1. Setup the emscripten sdk by running `emsdk_env.bat` from wherever you installed
1. If on windows, set the path to include your MinGW location (e.g. `PATH = %PATH%;D:/MinGW/mingw64/bin`)
1. Run `make` (or if on windows `mingw32-make`)

You can also run make from the root directory, and it will recurse into all the sub directories.

## client.shared.test.js, client.web, client.web.webpack
1. Build client.shared.js
1. Run npm install

# Running
## client.shared.test.cpp
After building there should be two files
- client.shared.test.cpp/debug/client.shared.test.exe
- client.shared.test.cpp/ship/client.shared.test.exe

## client.shared.test.js
This contains tests examples for karma and mocha. To run Karma run `npm run karma`. To run Mocha run `npm run mocha`. To run both, just run `npm run test`.

## client.web
Run `npm run serve` from this directory and it will show you an introduction page

## client.web.webpack
Run `npm run serve` from this directory and it will show you an introduction page