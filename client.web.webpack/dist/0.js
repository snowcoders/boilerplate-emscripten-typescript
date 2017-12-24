webpackJsonp([0],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      var v = factory(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), exports);
      if (v !== undefined) {
        module.exports = {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      }
    }
    else if (true) {
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
        var v = factory(!(function webpackMissingModule() { var e = new Error("Cannot find module \".\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()), exports);
        return {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {
      var v = factory(null, null);
      Module = {
        createInstance: function (moduleParams) {
          return v(moduleParams);
      }};
    }
  })(function (require, exports) {
    var Module = function (Module) {
      Module = Module || {};
      var Module = Module;
// The Module object: Our interface to the outside world. We import
// and export values on it, and do the work to get that through
// closure compiler if necessary. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to do an eval in order to handle the closure compiler
// case, where this code here is minified but Module was defined
// elsewhere (e.g. case 4 above). We also need to check if Module
// already exists (e.g. case 3 above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module;
if (!Module) Module = (typeof Module !== 'undefined' ? Module : null) || {};

// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = {};
for (var key in Module) {
  if (Module.hasOwnProperty(key)) {
    moduleOverrides[key] = Module[key];
  }
}

// The environment setup code below is customized to use Module.
// *** Environment setup code ***
var ENVIRONMENT_IS_WEB = false;
var ENVIRONMENT_IS_WORKER = false;
var ENVIRONMENT_IS_NODE = false;
var ENVIRONMENT_IS_SHELL = false;

// Three configurations we can be running in:
// 1) We could be the application main() thread running in the main JS UI thread. (ENVIRONMENT_IS_WORKER == false and ENVIRONMENT_IS_PTHREAD == false)
// 2) We could be the application main() thread proxied to worker. (with Emscripten -s PROXY_TO_WORKER=1) (ENVIRONMENT_IS_WORKER == true, ENVIRONMENT_IS_PTHREAD == false)
// 3) We could be an application pthread running in a worker. (ENVIRONMENT_IS_WORKER == true and ENVIRONMENT_IS_PTHREAD == true)

if (Module['ENVIRONMENT']) {
  if (Module['ENVIRONMENT'] === 'WEB') {
    ENVIRONMENT_IS_WEB = true;
  } else if (Module['ENVIRONMENT'] === 'WORKER') {
    ENVIRONMENT_IS_WORKER = true;
  } else if (Module['ENVIRONMENT'] === 'NODE') {
    ENVIRONMENT_IS_NODE = true;
  } else if (Module['ENVIRONMENT'] === 'SHELL') {
    ENVIRONMENT_IS_SHELL = true;
  } else {
    throw new Error('The provided Module[\'ENVIRONMENT\'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.');
  }
} else {
  ENVIRONMENT_IS_WEB = typeof window === 'object';
  ENVIRONMENT_IS_WORKER = typeof importScripts === 'function';
  ENVIRONMENT_IS_NODE = typeof process === 'object' && typeof require === 'function' && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;
  ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;
}


if (ENVIRONMENT_IS_NODE) {
  // Expose functionality in the same simple way that the shells work
  // Note that we pollute the global namespace here, otherwise we break in node
  if (!Module['print']) Module['print'] = console.log;
  if (!Module['printErr']) Module['printErr'] = console.warn;

  var nodeFS;
  var nodePath;

  Module['read'] = function read(filename, binary) {
    if (!nodeFS) nodeFS = require('fs');
    if (!nodePath) nodePath = require('path');
    filename = nodePath['normalize'](filename);
    var ret = nodeFS['readFileSync'](filename);
    return binary ? ret : ret.toString();
  };

  Module['readBinary'] = function readBinary(filename) {
    var ret = Module['read'](filename, true);
    if (!ret.buffer) {
      ret = new Uint8Array(ret);
    }
    assert(ret.buffer);
    return ret;
  };

  Module['load'] = function load(f) {
    globalEval(read(f));
  };

  if (!Module['thisProgram']) {
    if (process['argv'].length > 1) {
      Module['thisProgram'] = process['argv'][1].replace(/\\/g, '/');
    } else {
      Module['thisProgram'] = 'unknown-program';
    }
  }

  Module['arguments'] = process['argv'].slice(2);

  if (true) {
    module['exports'] = Module;
  }

  process['on']('uncaughtException', function(ex) {
    // suppress ExitStatus exceptions from showing an error
    if (!(ex instanceof ExitStatus)) {
      throw ex;
    }
  });

  Module['inspect'] = function () { return '[Emscripten Module object]'; };
}
else if (ENVIRONMENT_IS_SHELL) {
  if (!Module['print']) Module['print'] = print;
  if (typeof printErr != 'undefined') Module['printErr'] = printErr; // not present in v8 or older sm

  if (typeof read != 'undefined') {
    Module['read'] = read;
  } else {
    Module['read'] = function read() { throw 'no read() available' };
  }

  Module['readBinary'] = function readBinary(f) {
    if (typeof readbuffer === 'function') {
      return new Uint8Array(readbuffer(f));
    }
    var data = read(f, 'binary');
    assert(typeof data === 'object');
    return data;
  };

  if (typeof scriptArgs != 'undefined') {
    Module['arguments'] = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof quit === 'function') {
    Module['quit'] = function(status, toThrow) {
      quit(status);
    }
  }

}
else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  Module['read'] = function read(url) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  };

  if (ENVIRONMENT_IS_WORKER) {
    Module['readBinary'] = function read(url) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return xhr.response;
    };
  }

  Module['readAsync'] = function readAsync(url, onload, onerror) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function xhr_onload() {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
      } else {
        onerror();
      }
    };
    xhr.onerror = onerror;
    xhr.send(null);
  };

  if (typeof arguments != 'undefined') {
    Module['arguments'] = arguments;
  }

  if (typeof console !== 'undefined') {
    if (!Module['print']) Module['print'] = function print(x) {
      console.log(x);
    };
    if (!Module['printErr']) Module['printErr'] = function printErr(x) {
      console.warn(x);
    };
  } else {
    // Probably a worker, and without console.log. We can do very little here...
    var TRY_USE_DUMP = false;
    if (!Module['print']) Module['print'] = (TRY_USE_DUMP && (typeof(dump) !== "undefined") ? (function(x) {
      dump(x);
    }) : (function(x) {
      // self.postMessage(x); // enable this if you want stdout to be sent as messages
    }));
  }

  if (ENVIRONMENT_IS_WORKER) {
    Module['load'] = importScripts;
  }

  if (typeof Module['setWindowTitle'] === 'undefined') {
    Module['setWindowTitle'] = function(title) { document.title = title };
  }
}
else {
  // Unreachable because SHELL is dependant on the others
  throw 'Unknown runtime environment. Where are we?';
}

function globalEval(x) {
  eval.call(null, x);
}
if (!Module['load'] && Module['read']) {
  Module['load'] = function load(f) {
    globalEval(Module['read'](f));
  };
}
if (!Module['print']) {
  Module['print'] = function(){};
}
if (!Module['printErr']) {
  Module['printErr'] = Module['print'];
}
if (!Module['arguments']) {
  Module['arguments'] = [];
}
if (!Module['thisProgram']) {
  Module['thisProgram'] = './this.program';
}
if (!Module['quit']) {
  Module['quit'] = function(status, toThrow) {
    throw toThrow;
  }
}

// *** Environment setup code ***

// Closure helpers
Module.print = Module['print'];
Module.printErr = Module['printErr'];

// Callbacks
Module['preRun'] = [];
Module['postRun'] = [];

// Merge back in the overrides
for (var key in moduleOverrides) {
  if (moduleOverrides.hasOwnProperty(key)) {
    Module[key] = moduleOverrides[key];
  }
}
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = undefined;



// {{PREAMBLE_ADDITIONS}}

// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

//========================================
// Runtime code shared with compiler
//========================================

var Runtime = {
  setTempRet0: function (value) {
    tempRet0 = value;
    return value;
  },
  getTempRet0: function () {
    return tempRet0;
  },
  stackSave: function () {
    return STACKTOP;
  },
  stackRestore: function (stackTop) {
    STACKTOP = stackTop;
  },
  getNativeTypeSize: function (type) {
    switch (type) {
      case 'i1': case 'i8': return 1;
      case 'i16': return 2;
      case 'i32': return 4;
      case 'i64': return 8;
      case 'float': return 4;
      case 'double': return 8;
      default: {
        if (type[type.length-1] === '*') {
          return Runtime.QUANTUM_SIZE; // A pointer
        } else if (type[0] === 'i') {
          var bits = parseInt(type.substr(1));
          assert(bits % 8 === 0);
          return bits/8;
        } else {
          return 0;
        }
      }
    }
  },
  getNativeFieldSize: function (type) {
    return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE);
  },
  STACK_ALIGN: 16,
  prepVararg: function (ptr, type) {
    if (type === 'double' || type === 'i64') {
      // move so the load is aligned
      if (ptr & 7) {
        assert((ptr & 7) === 4);
        ptr += 4;
      }
    } else {
      assert((ptr & 3) === 0);
    }
    return ptr;
  },
  getAlignSize: function (type, size, vararg) {
    // we align i64s and doubles on 64-bit boundaries, unlike x86
    if (!vararg && (type == 'i64' || type == 'double')) return 8;
    if (!type) return Math.min(size, 8); // align structures internally to 64 bits
    return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE);
  },
  dynCall: function (sig, ptr, args) {
    if (args && args.length) {
      assert(args.length == sig.length-1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].apply(null, [ptr].concat(args));
    } else {
      assert(sig.length == 1);
      assert(('dynCall_' + sig) in Module, 'bad function pointer type - no table for sig \'' + sig + '\'');
      return Module['dynCall_' + sig].call(null, ptr);
    }
  },
  functionPointers: [],
  addFunction: function (func) {
    for (var i = 0; i < Runtime.functionPointers.length; i++) {
      if (!Runtime.functionPointers[i]) {
        Runtime.functionPointers[i] = func;
        return 2*(1 + i);
      }
    }
    throw 'Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.';
  },
  removeFunction: function (index) {
    Runtime.functionPointers[(index-2)/2] = null;
  },
  warnOnce: function (text) {
    if (!Runtime.warnOnce.shown) Runtime.warnOnce.shown = {};
    if (!Runtime.warnOnce.shown[text]) {
      Runtime.warnOnce.shown[text] = 1;
      Module.printErr(text);
    }
  },
  funcWrappers: {},
  getFuncWrapper: function (func, sig) {
    assert(sig);
    if (!Runtime.funcWrappers[sig]) {
      Runtime.funcWrappers[sig] = {};
    }
    var sigCache = Runtime.funcWrappers[sig];
    if (!sigCache[func]) {
      // optimize away arguments usage in common cases
      if (sig.length === 1) {
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func);
        };
      } else if (sig.length === 2) {
        sigCache[func] = function dynCall_wrapper(arg) {
          return Runtime.dynCall(sig, func, [arg]);
        };
      } else {
        // general case
        sigCache[func] = function dynCall_wrapper() {
          return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments));
        };
      }
    }
    return sigCache[func];
  },
  getCompilerSetting: function (name) {
    throw 'You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work';
  },
  stackAlloc: function (size) { var ret = STACKTOP;STACKTOP = (STACKTOP + size)|0;STACKTOP = (((STACKTOP)+15)&-16);(assert((((STACKTOP|0) < (STACK_MAX|0))|0))|0); return ret; },
  staticAlloc: function (size) { var ret = STATICTOP;STATICTOP = (STATICTOP + (assert(!staticSealed),size))|0;STATICTOP = (((STATICTOP)+15)&-16); return ret; },
  dynamicAlloc: function (size) { assert(DYNAMICTOP_PTR);var ret = HEAP32[DYNAMICTOP_PTR>>2];var end = (((ret + size + 15)|0) & -16);HEAP32[DYNAMICTOP_PTR>>2] = end;if (end >= TOTAL_MEMORY) {var success = enlargeMemory();if (!success) {HEAP32[DYNAMICTOP_PTR>>2] = ret;return 0;}}return ret;},
  alignMemory: function (size,quantum) { var ret = size = Math.ceil((size)/(quantum ? quantum : 16))*(quantum ? quantum : 16); return ret; },
  makeBigInt: function (low,high,unsigned) { var ret = (unsigned ? ((+((low>>>0)))+((+((high>>>0)))*(+4294967296))) : ((+((low>>>0)))+((+((high|0)))*(+4294967296)))); return ret; },
  GLOBAL_BASE: 8,
  QUANTUM_SIZE: 4,
  __dummy__: 0
}



Module["Runtime"] = Runtime;


function getSafeHeapType(bytes, isFloat) {
  switch (bytes) {
    case 1: return 'i8';
    case 2: return 'i16';
    case 4: return isFloat ? 'float' : 'i32';
    case 8: return 'double';
    default: assert(0);
  }
}


function SAFE_HEAP_STORE(dest, value, bytes, isFloat) {
  if (dest <= 0) abort('segmentation fault storing ' + bytes + ' bytes to address ' + dest);
  if (dest % bytes !== 0) abort('alignment error storing to address ' + dest + ', which was expected to be aligned to a multiple of ' + bytes);
  if (staticSealed) {
    if (dest + bytes > HEAP32[DYNAMICTOP_PTR>>2]) abort('segmentation fault, exceeded the top of the available dynamic heap when storing ' + bytes + ' bytes to address ' + dest + '. STATICTOP=' + STATICTOP + ', DYNAMICTOP=' + HEAP32[DYNAMICTOP_PTR>>2]);
    assert(DYNAMICTOP_PTR);
    assert(HEAP32[DYNAMICTOP_PTR>>2] <= TOTAL_MEMORY);
  } else {
    if (dest + bytes > STATICTOP) abort('segmentation fault, exceeded the top of the available static heap when storing ' + bytes + ' bytes to address ' + dest + '. STATICTOP=' + STATICTOP);
  }
  setValue(dest, value, getSafeHeapType(bytes, isFloat), 1);
}
function SAFE_HEAP_STORE_D(dest, value, bytes) {
  SAFE_HEAP_STORE(dest, value, bytes, true);
}

function SAFE_HEAP_LOAD(dest, bytes, unsigned, isFloat) {
  if (dest <= 0) abort('segmentation fault loading ' + bytes + ' bytes from address ' + dest);
  if (dest % bytes !== 0) abort('alignment error loading from address ' + dest + ', which was expected to be aligned to a multiple of ' + bytes);
  if (staticSealed) {
    if (dest + bytes > HEAP32[DYNAMICTOP_PTR>>2]) abort('segmentation fault, exceeded the top of the available dynamic heap when loading ' + bytes + ' bytes from address ' + dest + '. STATICTOP=' + STATICTOP + ', DYNAMICTOP=' + HEAP32[DYNAMICTOP_PTR>>2]);
    assert(DYNAMICTOP_PTR);
    assert(HEAP32[DYNAMICTOP_PTR>>2] <= TOTAL_MEMORY);
  } else {
    if (dest + bytes > STATICTOP) abort('segmentation fault, exceeded the top of the available static heap when loading ' + bytes + ' bytes from address ' + dest + '. STATICTOP=' + STATICTOP);
  }
  var type = getSafeHeapType(bytes, isFloat);
  var ret = getValue(dest, type, 1);
  if (unsigned) ret = unSign(ret, parseInt(type.substr(1)), 1);
  return ret;
}
function SAFE_HEAP_LOAD_D(dest, bytes, unsigned) {
  return SAFE_HEAP_LOAD(dest, bytes, unsigned, true);
}

function SAFE_FT_MASK(value, mask) {
  var ret = value & mask;
  if (ret !== value) {
    abort('Function table mask error: function pointer is ' + value + ' which is masked by ' + mask + ', the likely cause of this is that the function pointer is being called by the wrong type.');
  }
  return ret;
}

function segfault() {
  abort('segmentation fault');
}
function alignfault() {
  abort('alignment fault');
}
function ftfault() {
  abort('Function table mask error');
}

//========================================
// Runtime essentials
//========================================

var ABORT = 0; // whether we are quitting the application. no code should run after this. set in exit() and abort()
var EXITSTATUS = 0;

function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed: ' + text);
  }
}

var globalScope = this;

// Returns the C function with a specified identifier (for C++, you need to do manual name mangling)
function getCFunc(ident) {
  var func = Module['_' + ident]; // closure exported function
  if (!func) {
    try { func = eval('_' + ident); } catch(e) {}
  }
  assert(func, 'Cannot call unknown function ' + ident + ' (perhaps LLVM optimizations or closure removed it?)');
  return func;
}

var cwrap, ccall;
(function(){
  var JSfuncs = {
    // Helpers for cwrap -- it can't refer to Runtime directly because it might
    // be renamed by closure, instead it calls JSfuncs['stackSave'].body to find
    // out what the minified function name is.
    'stackSave': function() {
      Runtime.stackSave()
    },
    'stackRestore': function() {
      Runtime.stackRestore()
    },
    // type conversion from js to c
    'arrayToC' : function(arr) {
      var ret = Runtime.stackAlloc(arr.length);
      writeArrayToMemory(arr, ret);
      return ret;
    },
    'stringToC' : function(str) {
      var ret = 0;
      if (str !== null && str !== undefined && str !== 0) { // null string
        // at most 4 bytes per UTF-8 code point, +1 for the trailing '\0'
        var len = (str.length << 2) + 1;
        ret = Runtime.stackAlloc(len);
        stringToUTF8(str, ret, len);
      }
      return ret;
    }
  };
  // For fast lookup of conversion functions
  var toC = {'string' : JSfuncs['stringToC'], 'array' : JSfuncs['arrayToC']};

  // C calling interface.
  ccall = function ccallFunc(ident, returnType, argTypes, args, opts) {
    var func = getCFunc(ident);
    var cArgs = [];
    var stack = 0;
    assert(returnType !== 'array', 'Return type should not be "array".');
    if (args) {
      for (var i = 0; i < args.length; i++) {
        var converter = toC[argTypes[i]];
        if (converter) {
          if (stack === 0) stack = Runtime.stackSave();
          cArgs[i] = converter(args[i]);
        } else {
          cArgs[i] = args[i];
        }
      }
    }
    var ret = func.apply(null, cArgs);
    if ((!opts || !opts.async) && typeof EmterpreterAsync === 'object') {
      assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling ccall');
    }
    if (opts && opts.async) assert(!returnType, 'async ccalls cannot return values');
    if (returnType === 'string') ret = Pointer_stringify(ret);
    if (stack !== 0) {
      if (opts && opts.async) {
        EmterpreterAsync.asyncFinalizers.push(function() {
          Runtime.stackRestore(stack);
        });
        return;
      }
      Runtime.stackRestore(stack);
    }
    return ret;
  }

  var sourceRegex = /^function\s*[a-zA-Z$_0-9]*\s*\(([^)]*)\)\s*{\s*([^*]*?)[\s;]*(?:return\s*(.*?)[;\s]*)?}$/;
  function parseJSFunc(jsfunc) {
    // Match the body and the return value of a javascript function source
    var parsed = jsfunc.toString().match(sourceRegex).slice(1);
    return {arguments : parsed[0], body : parsed[1], returnValue: parsed[2]}
  }

  // sources of useful functions. we create this lazily as it can trigger a source decompression on this entire file
  var JSsource = null;
  function ensureJSsource() {
    if (!JSsource) {
      JSsource = {};
      for (var fun in JSfuncs) {
        if (JSfuncs.hasOwnProperty(fun)) {
          // Elements of toCsource are arrays of three items:
          // the code, and the return value
          JSsource[fun] = parseJSFunc(JSfuncs[fun]);
        }
      }
    }
  }

  cwrap = function cwrap(ident, returnType, argTypes) {
    argTypes = argTypes || [];
    var cfunc = getCFunc(ident);
    // When the function takes numbers and returns a number, we can just return
    // the original function
    var numericArgs = argTypes.every(function(type){ return type === 'number'});
    var numericRet = (returnType !== 'string');
    if ( numericRet && numericArgs) {
      return cfunc;
    }
    // Creation of the arguments list (["$1","$2",...,"$nargs"])
    var argNames = argTypes.map(function(x,i){return '$'+i});
    var funcstr = "(function(" + argNames.join(',') + ") {";
    var nargs = argTypes.length;
    if (!numericArgs) {
      // Generate the code needed to convert the arguments from javascript
      // values to pointers
      ensureJSsource();
      funcstr += 'var stack = ' + JSsource['stackSave'].body + ';';
      for (var i = 0; i < nargs; i++) {
        var arg = argNames[i], type = argTypes[i];
        if (type === 'number') continue;
        var convertCode = JSsource[type + 'ToC']; // [code, return]
        funcstr += 'var ' + convertCode.arguments + ' = ' + arg + ';';
        funcstr += convertCode.body + ';';
        funcstr += arg + '=(' + convertCode.returnValue + ');';
      }
    }

    // When the code is compressed, the name of cfunc is not literally 'cfunc' anymore
    var cfuncname = parseJSFunc(function(){return cfunc}).returnValue;
    // Call the function
    funcstr += 'var ret = ' + cfuncname + '(' + argNames.join(',') + ');';
    if (!numericRet) { // Return type can only by 'string' or 'number'
      // Convert the result to a string
      var strgfy = parseJSFunc(function(){return Pointer_stringify}).returnValue;
      funcstr += 'ret = ' + strgfy + '(ret);';
    }
    funcstr += "if (typeof EmterpreterAsync === 'object') { assert(!EmterpreterAsync.state, 'cannot start async op with normal JS calling cwrap') }";
    if (!numericArgs) {
      // If we had a stack, restore it
      ensureJSsource();
      funcstr += JSsource['stackRestore'].body.replace('()', '(stack)') + ';';
    }
    funcstr += 'return ret})';
    return eval(funcstr);
  };
})();
Module["ccall"] = ccall;
Module["cwrap"] = cwrap;

function setValue(ptr, value, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
  if (noSafe) {
    switch(type) {
      case 'i1': HEAP8[((ptr)>>0)]=value; break;
      case 'i8': HEAP8[((ptr)>>0)]=value; break;
      case 'i16': HEAP16[((ptr)>>1)]=value; break;
      case 'i32': HEAP32[((ptr)>>2)]=value; break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],HEAP32[((ptr)>>2)]=tempI64[0],HEAP32[(((ptr)+(4))>>2)]=tempI64[1]); break;
      case 'float': HEAPF32[((ptr)>>2)]=value; break;
      case 'double': HEAPF64[((ptr)>>3)]=value; break;
      default: abort('invalid type for setValue: ' + type);
    }
  } else {
    switch(type) {
      case 'i1': SAFE_HEAP_STORE(((ptr)|0), ((value)|0), 1); break;
      case 'i8': SAFE_HEAP_STORE(((ptr)|0), ((value)|0), 1); break;
      case 'i16': SAFE_HEAP_STORE(((ptr)|0), ((value)|0), 2); break;
      case 'i32': SAFE_HEAP_STORE(((ptr)|0), ((value)|0), 4); break;
      case 'i64': (tempI64 = [value>>>0,(tempDouble=value,(+(Math_abs(tempDouble))) >= (+1) ? (tempDouble > (+0) ? ((Math_min((+(Math_floor((tempDouble)/(+4294967296)))), (+4294967295)))|0)>>>0 : (~~((+(Math_ceil((tempDouble - +(((~~(tempDouble)))>>>0))/(+4294967296))))))>>>0) : 0)],SAFE_HEAP_STORE(((ptr)|0), ((tempI64[0])|0), 4),SAFE_HEAP_STORE((((ptr)+(4))|0), ((tempI64[1])|0), 4)); break;
      case 'float': SAFE_HEAP_STORE_D(((ptr)|0), (+(value)), 4); break;
      case 'double': SAFE_HEAP_STORE_D(((ptr)|0), (+(value)), 8); break;
      default: abort('invalid type for setValue: ' + type);
    }
  }
}
Module["setValue"] = setValue;


function getValue(ptr, type, noSafe) {
  type = type || 'i8';
  if (type.charAt(type.length-1) === '*') type = 'i32'; // pointers are 32-bit
  if (noSafe) {
    switch(type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': return HEAP32[((ptr)>>2)];
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      default: abort('invalid type for setValue: ' + type);
    }
  } else {
    switch(type) {
      case 'i1': return ((SAFE_HEAP_LOAD(((ptr)|0), 1, 0))|0);
      case 'i8': return ((SAFE_HEAP_LOAD(((ptr)|0), 1, 0))|0);
      case 'i16': return ((SAFE_HEAP_LOAD(((ptr)|0), 2, 0))|0);
      case 'i32': return ((SAFE_HEAP_LOAD(((ptr)|0), 4, 0))|0);
      case 'i64': return ((SAFE_HEAP_LOAD(((ptr)|0), 8, 0))|0);
      case 'float': return (+(SAFE_HEAP_LOAD_D(((ptr)|0), 4, 0)));
      case 'double': return (+(SAFE_HEAP_LOAD_D(((ptr)|0), 8, 0)));
      default: abort('invalid type for setValue: ' + type);
    }
  }
  return null;
}
Module["getValue"] = getValue;

var ALLOC_NORMAL = 0; // Tries to use _malloc()
var ALLOC_STACK = 1; // Lives for the duration of the current function call
var ALLOC_STATIC = 2; // Cannot be freed
var ALLOC_DYNAMIC = 3; // Cannot be freed except through sbrk
var ALLOC_NONE = 4; // Do not allocate
Module["ALLOC_NORMAL"] = ALLOC_NORMAL;
Module["ALLOC_STACK"] = ALLOC_STACK;
Module["ALLOC_STATIC"] = ALLOC_STATIC;
Module["ALLOC_DYNAMIC"] = ALLOC_DYNAMIC;
Module["ALLOC_NONE"] = ALLOC_NONE;

// allocate(): This is for internal use. You can use it yourself as well, but the interface
//             is a little tricky (see docs right below). The reason is that it is optimized
//             for multiple syntaxes to save space in generated code. So you should
//             normally not use allocate(), and instead allocate memory using _malloc(),
//             initialize it with setValue(), and so forth.
// @slab: An array of data, or a number. If a number, then the size of the block to allocate,
//        in *bytes* (note that this is sometimes confusing: the next parameter does not
//        affect this!)
// @types: Either an array of types, one for each byte (or 0 if no type at that position),
//         or a single type which is used for the entire block. This only matters if there
//         is initial data - if @slab is a number, then this does not matter at all and is
//         ignored.
// @allocator: How to allocate memory, see ALLOC_*
function allocate(slab, types, allocator, ptr) {
  var zeroinit, size;
  if (typeof slab === 'number') {
    zeroinit = true;
    size = slab;
  } else {
    zeroinit = false;
    size = slab.length;
  }

  var singleType = typeof types === 'string' ? types : null;

  var ret;
  if (allocator == ALLOC_NONE) {
    ret = ptr;
  } else {
    ret = [typeof _malloc === 'function' ? _malloc : Runtime.staticAlloc, Runtime.stackAlloc, Runtime.staticAlloc, Runtime.dynamicAlloc][allocator === undefined ? ALLOC_STATIC : allocator](Math.max(size, singleType ? 1 : types.length));
  }

  if (zeroinit) {
    var ptr = ret, stop;
    assert((ret & 3) == 0);
    stop = ret + (size & ~3);
    for (; ptr < stop; ptr += 4) {
      HEAP32[((ptr)>>2)]=0;
    }
    stop = ret + size;
    while (ptr < stop) {
      HEAP8[((ptr++)>>0)]=0;
    }
    return ret;
  }

  if (singleType === 'i8') {
    if (slab.subarray || slab.slice) {
      HEAPU8.set(slab, ret);
    } else {
      HEAPU8.set(new Uint8Array(slab), ret);
    }
    return ret;
  }

  var i = 0, type, typeSize, previousType;
  while (i < size) {
    var curr = slab[i];

    if (typeof curr === 'function') {
      curr = Runtime.getFunctionIndex(curr);
    }

    type = singleType || types[i];
    if (type === 0) {
      i++;
      continue;
    }
    assert(type, 'Must know what type to store in allocate!');

    if (type == 'i64') type = 'i32'; // special case: we have one i32 here, and one i32 later

    setValue(ret+i, curr, type);

    // no need to look up size unless type changes, so cache it
    if (previousType !== type) {
      typeSize = Runtime.getNativeTypeSize(type);
      previousType = type;
    }
    i += typeSize;
  }

  return ret;
}
Module["allocate"] = allocate;

// Allocate memory during any stage of startup - static memory early on, dynamic memory later, malloc when ready
function getMemory(size) {
  if (!staticSealed) return Runtime.staticAlloc(size);
  if (!runtimeInitialized) return Runtime.dynamicAlloc(size);
  return _malloc(size);
}
Module["getMemory"] = getMemory;

function Pointer_stringify(ptr, /* optional */ length) {
  if (length === 0 || !ptr) return '';
  // TODO: use TextDecoder
  // Find the length, and check for UTF while doing so
  var hasUtf = 0;
  var t;
  var i = 0;
  while (1) {
    assert(ptr + i < TOTAL_MEMORY);
    t = ((SAFE_HEAP_LOAD((((ptr)+(i))|0), 1, 1))|0);
    hasUtf |= t;
    if (t == 0 && !length) break;
    i++;
    if (length && i == length) break;
  }
  if (!length) length = i;

  var ret = '';

  if (hasUtf < 128) {
    var MAX_CHUNK = 1024; // split up into chunks, because .apply on a huge string can overflow the stack
    var curr;
    while (length > 0) {
      curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));
      ret = ret ? ret + curr : curr;
      ptr += MAX_CHUNK;
      length -= MAX_CHUNK;
    }
    return ret;
  }
  return Module['UTF8ToString'](ptr);
}
Module["Pointer_stringify"] = Pointer_stringify;

// Given a pointer 'ptr' to a null-terminated ASCII-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function AsciiToString(ptr) {
  var str = '';
  while (1) {
    var ch = ((SAFE_HEAP_LOAD(((ptr++)|0), 1, 0))|0);
    if (!ch) return str;
    str += String.fromCharCode(ch);
  }
}
Module["AsciiToString"] = AsciiToString;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in ASCII form. The copy will require at most str.length+1 bytes of space in the HEAP.

function stringToAscii(str, outPtr) {
  return writeAsciiToMemory(str, outPtr, false);
}
Module["stringToAscii"] = stringToAscii;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the given array that contains uint8 values, returns
// a copy of that string as a Javascript String object.

var UTF8Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf8') : undefined;
function UTF8ArrayToString(u8Array, idx) {
  var endPtr = idx;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  while (u8Array[endPtr]) ++endPtr;

  if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {
    return UTF8Decoder.decode(u8Array.subarray(idx, endPtr));
  } else {
    var u0, u1, u2, u3, u4, u5;

    var str = '';
    while (1) {
      // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
      u0 = u8Array[idx++];
      if (!u0) return str;
      if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
      u1 = u8Array[idx++] & 63;
      if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
      u2 = u8Array[idx++] & 63;
      if ((u0 & 0xF0) == 0xE0) {
        u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
      } else {
        u3 = u8Array[idx++] & 63;
        if ((u0 & 0xF8) == 0xF0) {
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | u3;
        } else {
          u4 = u8Array[idx++] & 63;
          if ((u0 & 0xFC) == 0xF8) {
            u0 = ((u0 & 3) << 24) | (u1 << 18) | (u2 << 12) | (u3 << 6) | u4;
          } else {
            u5 = u8Array[idx++] & 63;
            u0 = ((u0 & 1) << 30) | (u1 << 24) | (u2 << 18) | (u3 << 12) | (u4 << 6) | u5;
          }
        }
      }
      if (u0 < 0x10000) {
        str += String.fromCharCode(u0);
      } else {
        var ch = u0 - 0x10000;
        str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
      }
    }
  }
}
Module["UTF8ArrayToString"] = UTF8ArrayToString;

// Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

function UTF8ToString(ptr) {
  return UTF8ArrayToString(HEAPU8,ptr);
}
Module["UTF8ToString"] = UTF8ToString;

// Copies the given Javascript String object 'str' to the given byte array at address 'outIdx',
// encoded in UTF8 form and null-terminated. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outU8Array: the array to copy to. Each index in this array is assumed to be one 8-byte element.
//   outIdx: The starting offset in the array to begin the copying.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=1, only the null terminator will be written and nothing else.
//                    maxBytesToWrite=0 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {
  if (!(maxBytesToWrite > 0)) // Parameter maxBytesToWrite is not optional. Negative values, 0, null, undefined and false each don't write out any bytes.
    return 0;

  var startIdx = outIdx;
  var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description and https://www.ietf.org/rfc/rfc2279.txt and https://tools.ietf.org/html/rfc3629
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      if (outIdx >= endIdx) break;
      outU8Array[outIdx++] = u;
    } else if (u <= 0x7FF) {
      if (outIdx + 1 >= endIdx) break;
      outU8Array[outIdx++] = 0xC0 | (u >> 6);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0xFFFF) {
      if (outIdx + 2 >= endIdx) break;
      outU8Array[outIdx++] = 0xE0 | (u >> 12);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x1FFFFF) {
      if (outIdx + 3 >= endIdx) break;
      outU8Array[outIdx++] = 0xF0 | (u >> 18);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else if (u <= 0x3FFFFFF) {
      if (outIdx + 4 >= endIdx) break;
      outU8Array[outIdx++] = 0xF8 | (u >> 24);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    } else {
      if (outIdx + 5 >= endIdx) break;
      outU8Array[outIdx++] = 0xFC | (u >> 30);
      outU8Array[outIdx++] = 0x80 | ((u >> 24) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 18) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 12) & 63);
      outU8Array[outIdx++] = 0x80 | ((u >> 6) & 63);
      outU8Array[outIdx++] = 0x80 | (u & 63);
    }
  }
  // Null-terminate the pointer to the buffer.
  outU8Array[outIdx] = 0;
  return outIdx - startIdx;
}
Module["stringToUTF8Array"] = stringToUTF8Array;

// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF8 form. The copy will require at most str.length*4+1 bytes of space in the HEAP.
// Use the function lengthBytesUTF8 to compute the exact number of bytes (excluding null terminator) that this function will write.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF8(str, outPtr, maxBytesToWrite) {
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  return stringToUTF8Array(str, HEAPU8,outPtr, maxBytesToWrite);
}
Module["stringToUTF8"] = stringToUTF8;

// Returns the number of bytes the given Javascript string takes if encoded as a UTF8 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF8(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! So decode UTF16->UTF32->UTF8.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var u = str.charCodeAt(i); // possibly a lead surrogate
    if (u >= 0xD800 && u <= 0xDFFF) u = 0x10000 + ((u & 0x3FF) << 10) | (str.charCodeAt(++i) & 0x3FF);
    if (u <= 0x7F) {
      ++len;
    } else if (u <= 0x7FF) {
      len += 2;
    } else if (u <= 0xFFFF) {
      len += 3;
    } else if (u <= 0x1FFFFF) {
      len += 4;
    } else if (u <= 0x3FFFFFF) {
      len += 5;
    } else {
      len += 6;
    }
  }
  return len;
}
Module["lengthBytesUTF8"] = lengthBytesUTF8;

// Given a pointer 'ptr' to a null-terminated UTF16LE-encoded string in the emscripten HEAP, returns
// a copy of that string as a Javascript String object.

var UTF16Decoder = typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-16le') : undefined;
function UTF16ToString(ptr) {
  assert(ptr % 2 == 0, 'Pointer passed to UTF16ToString must be aligned to two bytes!');
  var endPtr = ptr;
  // TextDecoder needs to know the byte length in advance, it doesn't stop on null terminator by itself.
  // Also, use the length info to avoid running tiny strings through TextDecoder, since .subarray() allocates garbage.
  var idx = endPtr >> 1;
  while (HEAP16[idx]) ++idx;
  endPtr = idx << 1;

  if (endPtr - ptr > 32 && UTF16Decoder) {
    return UTF16Decoder.decode(HEAPU8.subarray(ptr, endPtr));
  } else {
    var i = 0;

    var str = '';
    while (1) {
      var codeUnit = ((SAFE_HEAP_LOAD((((ptr)+(i*2))|0), 2, 0))|0);
      if (codeUnit == 0) return str;
      ++i;
      // fromCharCode constructs a character from a UTF-16 code unit, so we can pass the UTF16 string right through.
      str += String.fromCharCode(codeUnit);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF16 form. The copy will require at most str.length*4+2 bytes of space in the HEAP.
// Use the function lengthBytesUTF16() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=2, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<2 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF16(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 2 == 0, 'Pointer passed to stringToUTF16 must be aligned to two bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 2) return 0;
  maxBytesToWrite -= 2; // Null terminator.
  var startPtr = outPtr;
  var numCharsToWrite = (maxBytesToWrite < str.length*2) ? (maxBytesToWrite / 2) : str.length;
  for (var i = 0; i < numCharsToWrite; ++i) {
    // charCodeAt returns a UTF-16 encoded code unit, so it can be directly written to the HEAP.
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    SAFE_HEAP_STORE(((outPtr)|0), ((codeUnit)|0), 2);
    outPtr += 2;
  }
  // Null-terminate the pointer to the HEAP.
  SAFE_HEAP_STORE(((outPtr)|0), ((0)|0), 2);
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF16(str) {
  return str.length*2;
}


function UTF32ToString(ptr) {
  assert(ptr % 4 == 0, 'Pointer passed to UTF32ToString must be aligned to four bytes!');
  var i = 0;

  var str = '';
  while (1) {
    var utf32 = ((SAFE_HEAP_LOAD((((ptr)+(i*4))|0), 4, 0))|0);
    if (utf32 == 0)
      return str;
    ++i;
    // Gotcha: fromCharCode constructs a character from a UTF-16 encoded code (pair), not from a Unicode code point! So encode the code point to UTF-16 for constructing.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    if (utf32 >= 0x10000) {
      var ch = utf32 - 0x10000;
      str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
    } else {
      str += String.fromCharCode(utf32);
    }
  }
}


// Copies the given Javascript String object 'str' to the emscripten HEAP at address 'outPtr',
// null-terminated and encoded in UTF32 form. The copy will require at most str.length*4+4 bytes of space in the HEAP.
// Use the function lengthBytesUTF32() to compute the exact number of bytes (excluding null terminator) that this function will write.
// Parameters:
//   str: the Javascript string to copy.
//   outPtr: Byte address in Emscripten HEAP where to write the string to.
//   maxBytesToWrite: The maximum number of bytes this function can write to the array. This count should include the null
//                    terminator, i.e. if maxBytesToWrite=4, only the null terminator will be written and nothing else.
//                    maxBytesToWrite<4 does not write any bytes to the output, not even the null terminator.
// Returns the number of bytes written, EXCLUDING the null terminator.

function stringToUTF32(str, outPtr, maxBytesToWrite) {
  assert(outPtr % 4 == 0, 'Pointer passed to stringToUTF32 must be aligned to four bytes!');
  assert(typeof maxBytesToWrite == 'number', 'stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
  // Backwards compatibility: if max bytes is not specified, assume unsafe unbounded write is allowed.
  if (maxBytesToWrite === undefined) {
    maxBytesToWrite = 0x7FFFFFFF;
  }
  if (maxBytesToWrite < 4) return 0;
  var startPtr = outPtr;
  var endPtr = startPtr + maxBytesToWrite - 4;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i); // possibly a lead surrogate
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) {
      var trailSurrogate = str.charCodeAt(++i);
      codeUnit = 0x10000 + ((codeUnit & 0x3FF) << 10) | (trailSurrogate & 0x3FF);
    }
    SAFE_HEAP_STORE(((outPtr)|0), ((codeUnit)|0), 4);
    outPtr += 4;
    if (outPtr + 4 > endPtr) break;
  }
  // Null-terminate the pointer to the HEAP.
  SAFE_HEAP_STORE(((outPtr)|0), ((0)|0), 4);
  return outPtr - startPtr;
}


// Returns the number of bytes the given Javascript string takes if encoded as a UTF16 byte array, EXCLUDING the null terminator byte.

function lengthBytesUTF32(str) {
  var len = 0;
  for (var i = 0; i < str.length; ++i) {
    // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code unit, not a Unicode code point of the character! We must decode the string to UTF-32 to the heap.
    // See http://unicode.org/faq/utf_bom.html#utf16-3
    var codeUnit = str.charCodeAt(i);
    if (codeUnit >= 0xD800 && codeUnit <= 0xDFFF) ++i; // possibly a lead surrogate, so skip over the tail surrogate.
    len += 4;
  }

  return len;
}


function demangle(func) {
  var __cxa_demangle_func = Module['___cxa_demangle'] || Module['__cxa_demangle'];
  if (__cxa_demangle_func) {
    try {
      var s =
        func.substr(1);
      var len = lengthBytesUTF8(s)+1;
      var buf = _malloc(len);
      stringToUTF8(s, buf, len);
      var status = _malloc(4);
      var ret = __cxa_demangle_func(buf, 0, 0, status);
      if (getValue(status, 'i32') === 0 && ret) {
        return Pointer_stringify(ret);
      }
      // otherwise, libcxxabi failed
    } catch(e) {
      // ignore problems here
    } finally {
      if (buf) _free(buf);
      if (status) _free(status);
      if (ret) _free(ret);
    }
    // failure when using libcxxabi, don't demangle
    return func;
  }
  Runtime.warnOnce('warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling');
  return func;
}

function demangleAll(text) {
  var regex =
    /__Z[\w\d_]+/g;
  return text.replace(regex,
    function(x) {
      var y = demangle(x);
      return x === y ? x : (x + ' [' + y + ']');
    });
}

function jsStackTrace() {
  var err = new Error();
  if (!err.stack) {
    // IE10+ special cases: It does have callstack info, but it is only populated if an Error object is thrown,
    // so try that as a special-case.
    try {
      throw new Error(0);
    } catch(e) {
      err = e;
    }
    if (!err.stack) {
      return '(no stack trace available)';
    }
  }
  return err.stack.toString();
}

function stackTrace() {
  var js = jsStackTrace();
  if (Module['extraStackTrace']) js += '\n' + Module['extraStackTrace']();
  return demangleAll(js);
}
Module["stackTrace"] = stackTrace;

// Memory management

var PAGE_SIZE = 16384;
var WASM_PAGE_SIZE = 65536;
var ASMJS_PAGE_SIZE = 16777216;
var MIN_TOTAL_MEMORY = 16777216;

function alignUp(x, multiple) {
  if (x % multiple > 0) {
    x += multiple - (x % multiple);
  }
  return x;
}

var HEAP;
var buffer;
var HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;

function updateGlobalBuffer(buf) {
  Module['buffer'] = buffer = buf;
}

function updateGlobalBufferViews() {
  Module['HEAP8'] = HEAP8 = new Int8Array(buffer);
  Module['HEAP16'] = HEAP16 = new Int16Array(buffer);
  Module['HEAP32'] = HEAP32 = new Int32Array(buffer);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(buffer);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(buffer);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(buffer);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(buffer);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(buffer);
}

var STATIC_BASE, STATICTOP, staticSealed; // static area
var STACK_BASE, STACKTOP, STACK_MAX; // stack area
var DYNAMIC_BASE, DYNAMICTOP_PTR; // dynamic area handled by sbrk

  STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;
  staticSealed = false;


// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  assert((STACK_MAX & 3) == 0);
  HEAPU32[(STACK_MAX >> 2)-1] = 0x02135467;
  HEAPU32[(STACK_MAX >> 2)-2] = 0x89BACDFE;
}

function checkStackCookie() {
  if (HEAPU32[(STACK_MAX >> 2)-1] != 0x02135467 || HEAPU32[(STACK_MAX >> 2)-2] != 0x89BACDFE) {
    abort('Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x02135467, but received 0x' + HEAPU32[(STACK_MAX >> 2)-2].toString(16) + ' ' + HEAPU32[(STACK_MAX >> 2)-1].toString(16));
  }
  // Also test the global address 0 for integrity. This check is not compatible with SAFE_SPLIT_MEMORY though, since that mode already tests all address 0 accesses on its own.
  if (HEAP32[0] !== 0x63736d65 /* 'emsc' */) throw 'Runtime error: The application has corrupted its heap memory area (address zero)!';
}

function abortStackOverflow(allocSize) {
  abort('Stack overflow! Attempted to allocate ' + allocSize + ' bytes on the stack, but stack has only ' + (STACK_MAX - asm.stackSave() + allocSize) + ' bytes available!');
}

function abortOnCannotGrowMemory() {
  abort('Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value ' + TOTAL_MEMORY + ', (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which adjusts the size at runtime but prevents some optimizations, (3) set Module.TOTAL_MEMORY to a higher value before the program runs, or if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ');
}


function enlargeMemory() {
  abortOnCannotGrowMemory();
}


var TOTAL_STACK = Module['TOTAL_STACK'] || 5242880;
var TOTAL_MEMORY = Module['TOTAL_MEMORY'] || 16777216;
if (TOTAL_MEMORY < TOTAL_STACK) Module.printErr('TOTAL_MEMORY should be larger than TOTAL_STACK, was ' + TOTAL_MEMORY + '! (TOTAL_STACK=' + TOTAL_STACK + ')');

// Initialize the runtime's memory
// check for full engine support (use string 'subarray' to avoid closure compiler confusion)
assert(typeof Int32Array !== 'undefined' && typeof Float64Array !== 'undefined' && !!(new Int32Array(1)['subarray']) && !!(new Int32Array(1)['set']),
       'JS engine does not provide full typed array support');



// Use a provided buffer, if there is one, or else allocate a new one
if (Module['buffer']) {
  buffer = Module['buffer'];
  assert(buffer.byteLength === TOTAL_MEMORY, 'provided buffer should be ' + TOTAL_MEMORY + ' bytes, but it is ' + buffer.byteLength);
} else {
  // Use a WebAssembly memory where available
  {
    buffer = new ArrayBuffer(TOTAL_MEMORY);
  }
  assert(buffer.byteLength === TOTAL_MEMORY);
}
updateGlobalBufferViews();


function getTotalMemory() {
  return TOTAL_MEMORY;
}

// Endianness check (note: assumes compiler arch was little-endian)
  HEAP32[0] = 0x63736d65; /* 'emsc' */
HEAP16[1] = 0x6373;
if (HEAPU8[2] !== 0x73 || HEAPU8[3] !== 0x63) throw 'Runtime error: expected the system to be little-endian!';

Module['HEAP'] = HEAP;
Module['buffer'] = buffer;
Module['HEAP8'] = HEAP8;
Module['HEAP16'] = HEAP16;
Module['HEAP32'] = HEAP32;
Module['HEAPU8'] = HEAPU8;
Module['HEAPU16'] = HEAPU16;
Module['HEAPU32'] = HEAPU32;
Module['HEAPF32'] = HEAPF32;
Module['HEAPF64'] = HEAPF64;

function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.shift();
    if (typeof callback == 'function') {
      callback();
      continue;
    }
    var func = callback.func;
    if (typeof func === 'number') {
      if (callback.arg === undefined) {
        Module['dynCall_v'](func);
      } else {
        Module['dynCall_vi'](func, callback.arg);
      }
    } else {
      func(callback.arg === undefined ? null : callback.arg);
    }
  }
}

var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATMAIN__    = []; // functions called when main() is to be run
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the runtime has exited

var runtimeInitialized = false;
var runtimeExited = false;


function preRun() {
  // compatibility - merge in anything from Module['preRun'] at this time
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function ensureInitRuntime() {
  checkStackCookie();
  if (runtimeInitialized) return;
  runtimeInitialized = true;
  callRuntimeCallbacks(__ATINIT__);
}

function preMain() {
  checkStackCookie();
  callRuntimeCallbacks(__ATMAIN__);
}

function exitRuntime() {
  checkStackCookie();
  callRuntimeCallbacks(__ATEXIT__);
  runtimeExited = true;
}

function postRun() {
  checkStackCookie();
  // compatibility - merge in anything from Module['postRun'] at this time
  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}
Module["addOnPreRun"] = addOnPreRun;

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}
Module["addOnInit"] = addOnInit;

function addOnPreMain(cb) {
  __ATMAIN__.unshift(cb);
}
Module["addOnPreMain"] = addOnPreMain;

function addOnExit(cb) {
  __ATEXIT__.unshift(cb);
}
Module["addOnExit"] = addOnExit;

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}
Module["addOnPostRun"] = addOnPostRun;

// Tools


function intArrayFromString(stringy, dontAddNull, length /* optional */) {
  var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
  var u8array = new Array(len);
  var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
  if (dontAddNull) u8array.length = numBytesWritten;
  return u8array;
}
Module["intArrayFromString"] = intArrayFromString;

function intArrayToString(array) {
  var ret = [];
  for (var i = 0; i < array.length; i++) {
    var chr = array[i];
    if (chr > 0xFF) {
      assert(false, 'Character code ' + chr + ' (' + String.fromCharCode(chr) + ')  at offset ' + i + ' not in 0x00-0xFF.');
      chr &= 0xFF;
    }
    ret.push(String.fromCharCode(chr));
  }
  return ret.join('');
}
Module["intArrayToString"] = intArrayToString;

// Deprecated: This function should not be called because it is unsafe and does not provide
// a maximum length limit of how many bytes it is allowed to write. Prefer calling the
// function stringToUTF8Array() instead, which takes in a maximum length that can be used
// to be secure from out of bounds writes.
function writeStringToMemory(string, buffer, dontAddNull) {
  Runtime.warnOnce('writeStringToMemory is deprecated and should not be called! Use stringToUTF8() instead!');

  var lastChar, end;
  if (dontAddNull) {
    // stringToUTF8Array always appends null. If we don't want to do that, remember the
    // character that existed at the location where the null will be placed, and restore
    // that after the write (below).
    end = buffer + lengthBytesUTF8(string);
    lastChar = HEAP8[end];
  }
  stringToUTF8(string, buffer, Infinity);
  if (dontAddNull) HEAP8[end] = lastChar; // Restore the value under the null character.
}
Module["writeStringToMemory"] = writeStringToMemory;

function writeArrayToMemory(array, buffer) {
  assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
  HEAP8.set(array, buffer);
}
Module["writeArrayToMemory"] = writeArrayToMemory;

function writeAsciiToMemory(str, buffer, dontAddNull) {
  for (var i = 0; i < str.length; ++i) {
    assert(str.charCodeAt(i) === str.charCodeAt(i)&0xff);
    SAFE_HEAP_STORE(((buffer++)|0), ((str.charCodeAt(i))|0), 1);
  }
  // Null-terminate the pointer to the HEAP.
  if (!dontAddNull) SAFE_HEAP_STORE(((buffer)|0), ((0)|0), 1);
}
Module["writeAsciiToMemory"] = writeAsciiToMemory;

function unSign(value, bits, ignore) {
  if (value >= 0) {
    return value;
  }
  return bits <= 32 ? 2*Math.abs(1 << (bits-1)) + value // Need some trickery, since if bits == 32, we are right at the limit of the bits JS uses in bitshifts
                    : Math.pow(2, bits)         + value;
}
function reSign(value, bits, ignore) {
  if (value <= 0) {
    return value;
  }
  var half = bits <= 32 ? Math.abs(1 << (bits-1)) // abs is needed if bits == 32
                        : Math.pow(2, bits-1);
  if (value >= half && (bits <= 32 || value > half)) { // for huge values, we can hit the precision limit and always get true here. so don't do that
                                                       // but, in general there is no perfect solution here. With 64-bit ints, we get rounding and errors
                                                       // TODO: In i64 mode 1, resign the two parts separately and safely
    value = -2*half + value; // Cannot bitshift half, as it may be at the limit of the bits JS uses in bitshifts
  }
  return value;
}


// check for imul support, and also for correctness ( https://bugs.webkit.org/show_bug.cgi?id=126345 )
if (!Math['imul'] || Math['imul'](0xffffffff, 5) !== -5) Math['imul'] = function imul(a, b) {
  var ah  = a >>> 16;
  var al = a & 0xffff;
  var bh  = b >>> 16;
  var bl = b & 0xffff;
  return (al*bl + ((ah*bl + al*bh) << 16))|0;
};
Math.imul = Math['imul'];


if (!Math['clz32']) Math['clz32'] = function(x) {
  x = x >>> 0;
  for (var i = 0; i < 32; i++) {
    if (x & (1 << (31 - i))) return i;
  }
  return 32;
};
Math.clz32 = Math['clz32']

if (!Math['trunc']) Math['trunc'] = function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
Math.trunc = Math['trunc'];

var Math_abs = Math.abs;
var Math_cos = Math.cos;
var Math_sin = Math.sin;
var Math_tan = Math.tan;
var Math_acos = Math.acos;
var Math_asin = Math.asin;
var Math_atan = Math.atan;
var Math_atan2 = Math.atan2;
var Math_exp = Math.exp;
var Math_log = Math.log;
var Math_sqrt = Math.sqrt;
var Math_ceil = Math.ceil;
var Math_floor = Math.floor;
var Math_pow = Math.pow;
var Math_imul = Math.imul;
var Math_fround = Math.fround;
var Math_round = Math.round;
var Math_min = Math.min;
var Math_clz32 = Math.clz32;
var Math_trunc = Math.trunc;

// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// PRE_RUN_ADDITIONS (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
  return id;
}

function addRunDependency(id) {
  runDependencies++;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval !== 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(function() {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            Module.printErr('still waiting on run dependencies:');
          }
          Module.printErr('dependency: ' + dep);
        }
        if (shown) {
          Module.printErr('(end of list)');
        }
      }, 10000);
    }
  } else {
    Module.printErr('warning: run dependency added without ID');
  }
}
Module["addRunDependency"] = addRunDependency;

function removeRunDependency(id) {
  runDependencies--;
  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }
  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    Module.printErr('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}
Module["removeRunDependency"] = removeRunDependency;

Module["preloadedImages"] = {}; // maps url to image data
Module["preloadedAudios"] = {}; // maps url to audio data



var memoryInitializer = null;



var /* show errors on likely calls to FS when it was not included */ FS = {
  error: function() {
    abort('Filesystem support (FS) was not included. The problem is that you are using files from JS, but files were not used from C/C++, so filesystem support was not auto-included. You can force-include filesystem support with  -s FORCE_FILESYSTEM=1');
  },
  init: function() { FS.error() },
  createDataFile: function() { FS.error() },
  createPreloadedFile: function() { FS.error() },
  createLazyFile: function() { FS.error() },
  open: function() { FS.error() },
  mkdev: function() { FS.error() },
  registerDevice: function() { FS.error() },
  analyzePath: function() { FS.error() },
  loadFilesFromDB: function() { FS.error() },

  ErrnoError: function ErrnoError() { FS.error() },
};
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;



// === Body ===

var ASM_CONSTS = [];




STATIC_BASE = 8;

STATICTOP = STATIC_BASE + 7152;
  /* global initializers */  __ATINIT__.push({ func: function() { __GLOBAL__sub_I_StringFactory_cpp() } }, { func: function() { __GLOBAL__sub_I_bind_cpp() } });
  

/* memory initializer */ allocate([200,4,0,0,226,5,0,0,112,5,0,0,242,5,0,0,0,0,0,0,8,0,0,0,112,5,0,0,3,6,0,0,1,0,0,0,8,0,0,0,200,4,0,0,29,6,0,0,240,4,0,0,48,6,0,0,32,1,0,0,0,0,0,0,200,4,0,0,183,6,0,0,200,4,0,0,11,7,0,0,240,4,0,0,55,7,0,0,32,1,0,0,0,0,0,0,200,4,0,0,185,7,0,0,140,5,0,0,122,7,0,0,0,0,0,0,1,0,0,0,104,0,0,0,0,0,0,0,200,4,0,0,252,10,0,0,200,4,0,0,27,11,0,0,200,4,0,0,58,11,0,0,200,4,0,0,89,11,0,0,200,4,0,0,120,11,0,0,200,4,0,0,151,11,0,0,200,4,0,0,182,11,0,0,200,4,0,0,213,11,0,0,200,4,0,0,244,11,0,0,200,4,0,0,19,12,0,0,200,4,0,0,50,12,0,0,200,4,0,0,81,12,0,0,140,5,0,0,112,12,0,0,0,0,0,0,1,0,0,0,104,0,0,0,0,0,0,0,140,5,0,0,175,12,0,0,0,0,0,0,1,0,0,0,104,0,0,0,0,0,0,0,200,4,0,0,104,22,0,0,140,5,0,0,129,22,0,0,0,0,0,0,1,0,0,0,24,1,0,0,0,0,0,0,200,4,0,0,64,23,0,0,240,4,0,0,160,23,0,0,80,1,0,0,0,0,0,0,240,4,0,0,77,23,0,0,96,1,0,0,0,0,0,0,200,4,0,0,110,23,0,0,240,4,0,0,123,23,0,0,64,1,0,0,0,0,0,0,240,4,0,0,195,24,0,0,56,1,0,0,0,0,0,0,240,4,0,0,208,24,0,0,56,1,0,0,0,0,0,0,240,4,0,0,224,24,0,0,136,1,0,0,0,0,0,0,240,4,0,0,21,25,0,0,80,1,0,0,0,0,0,0,240,4,0,0,241,24,0,0,168,1,0,0,0,0,0,0,240,4,0,0,55,25,0,0,80,1,0,0,0,0,0,0,84,5,0,0,95,25,0,0,84,5,0,0,97,25,0,0,84,5,0,0,100,25,0,0,84,5,0,0,102,25,0,0,84,5,0,0,104,25,0,0,84,5,0,0,106,25,0,0,84,5,0,0,108,25,0,0,84,5,0,0,110,25,0,0,84,5,0,0,112,25,0,0,84,5,0,0,114,25,0,0,84,5,0,0,116,25,0,0,84,5,0,0,118,25,0,0,84,5,0,0,120,25,0,0,84,5,0,0,122,25,0,0,240,4,0,0,124,25,0,0,64,1,0,0,0,0,0,0,0,0,0,0,56,0,0,0,1,0,0,0,2,0,0,0,3,0,0,0,4,0,0,0,5,0,0,0,80,0,0,0,0,0,0,0,88,0,0,0,6,0,0,0,7,0,0,0,8,0,0,0,9,0,0,0,10,0,0,0,112,0,0,0,16,0,0,0,160,2,0,0,5,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,13,0,0,0,238,27,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,208,25,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,1,0,0,15,0,0,0,16,0,0,0,17,0,0,0,0,0,0,0,32,1,0,0,15,0,0,0,18,0,0,0,17,0,0,0,9,0,0,0,17,0,0,0,19,0,0,0,0,0,0,0,64,1,0,0,20,0,0,0,21,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,25,0,0,0,26,0,0,0,27,0,0,0,0,0,0,0,104,1,0,0,20,0,0,0,28,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,29,0,0,0,30,0,0,0,31,0,0,0,0,0,0,0,120,1,0,0,32,0,0,0,33,0,0,0,34,0,0,0,0,0,0,0,136,1,0,0,35,0,0,0,36,0,0,0,37,0,0,0,0,0,0,0,152,1,0,0,35,0,0,0,38,0,0,0,37,0,0,0,0,0,0,0,200,1,0,0,20,0,0,0,39,0,0,0,22,0,0,0,23,0,0,0,40,0,0,0,0,0,0,0,184,1,0,0,20,0,0,0,41,0,0,0,22,0,0,0,23,0,0,0,42,0,0,0,0,0,0,0,72,2,0,0,20,0,0,0,43,0,0,0,22,0,0,0,23,0,0,0,24,0,0,0,44,0,0,0,45,0,0,0,46,0,0,0,72,101,108,108,111,44,32,116,104,105,115,32,105,115,32,115,116,114,105,110,103,32,110,117,109,98,101,114,32,0,83,116,114,105,110,103,70,97,99,116,111,114,121,0,103,101,116,83,116,114,105,110,103,0,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,0,80,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,0,80,75,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,0,105,105,0,118,0,118,105,0,78,49,48,101,109,115,99,114,105,112,116,101,110,51,118,97,108,69,0,78,83,116,51,95,95,50,50,48,95,95,115,104,97,114,101,100,95,112,116,114,95,112,111,105,110,116,101,114,73,80,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,78,49,48,101,109,115,99,114,105,112,116,101,110,49,53,115,109,97,114,116,95,112,116,114,95,116,114,97,105,116,73,78,83,95,49,48,115,104,97,114,101,100,95,112,116,114,73,83,49,95,69,69,69,49,49,118,97,108,95,100,101,108,101,116,101,114,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,83,49,95,69,69,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,53,115,109,97,114,116,95,112,116,114,95,116,114,97,105,116,73,78,83,116,51,95,95,50,49,48,115,104,97,114,101,100,95,112,116,114,73,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,69,69,69,49,49,118,97,108,95,100,101,108,101,116,101,114,69,0,78,83,116,51,95,95,50,49,48,115,104,97,114,101,100,95,112,116,114,73,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,69,69,0,105,0,105,105,105,0,78,83,116,51,95,95,50,50,48,95,95,115,104,97,114,101,100,95,112,116,114,95,101,109,112,108,97,99,101,73,49,51,83,116,114,105,110,103,70,97,99,116,111,114,121,78,83,95,57,97,108,108,111,99,97,116,111,114,73,83,49,95,69,69,69,69,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,99,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,99,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,99,69,69,69,69,0,78,83,116,51,95,95,50,50,49,95,95,98,97,115,105,99,95,115,116,114,105,110,103,95,99,111,109,109,111,110,73,76,98,49,69,69,69,0,118,111,105,100,0,98,111,111,108,0,99,104,97,114,0,115,105,103,110,101,100,32,99,104,97,114,0,117,110,115,105,103,110,101,100,32,99,104,97,114,0,115,104,111,114,116,0,117,110,115,105,103,110,101,100,32,115,104,111,114,116,0,105,110,116,0,117,110,115,105,103,110,101,100,32,105,110,116,0,108,111,110,103,0,117,110,115,105,103,110,101,100,32,108,111,110,103,0,102,108,111,97,116,0,100,111,117,98,108,101,0,115,116,100,58,58,115,116,114,105,110,103,0,115,116,100,58,58,98,97,115,105,99,95,115,116,114,105,110,103,60,117,110,115,105,103,110,101,100,32,99,104,97,114,62,0,115,116,100,58,58,119,115,116,114,105,110,103,0,101,109,115,99,114,105,112,116,101,110,58,58,118,97,108,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,115,105,103,110,101,100,32,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,99,104,97,114,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,115,104,111,114,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,115,104,111,114,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,105,110,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,108,111,110,103,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,110,115,105,103,110,101,100,32,108,111,110,103,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,56,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,56,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,49,54,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,49,54,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,105,110,116,51,50,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,117,105,110,116,51,50,95,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,102,108,111,97,116,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,100,111,117,98,108,101,62,0,101,109,115,99,114,105,112,116,101,110,58,58,109,101,109,111,114,121,95,118,105,101,119,60,108,111,110,103,32,100,111,117,98,108,101,62,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,101,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,100,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,102,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,109,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,108,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,106,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,105,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,116,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,115,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,104,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,97,69,69,0,78,49,48,101,109,115,99,114,105,112,116,101,110,49,49,109,101,109,111,114,121,95,118,105,101,119,73,99,69,69,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,119,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,119,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,119,69,69,69,69,0,78,83,116,51,95,95,50,49,50,98,97,115,105,99,95,115,116,114,105,110,103,73,104,78,83,95,49,49,99,104,97,114,95,116,114,97,105,116,115,73,104,69,69,78,83,95,57,97,108,108,111,99,97,116,111,114,73,104,69,69,69,69,0,17,0,10,0,17,17,17,0,0,0,0,5,0,0,0,0,0,0,9,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,15,10,17,17,17,3,10,7,0,1,19,9,11,11,0,0,9,6,11,0,0,11,0,6,17,0,0,0,17,17,17,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,17,0,10,10,17,17,17,0,10,0,0,2,0,9,11,0,0,0,9,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,4,13,0,0,0,0,9,14,0,0,0,0,0,14,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,15,0,0,0,0,9,16,0,0,0,0,0,16,0,0,16,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,18,18,18,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,10,0,0,0,0,9,11,0,0,0,0,0,11,0,0,11,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,12,0,0,0,0,9,12,0,0,0,0,0,12,0,0,12,0,0,45,43,32,32,32,48,88,48,120,0,40,110,117,108,108,41,0,45,48,88,43,48,88,32,48,88,45,48,120,43,48,120,32,48,120,0,105,110,102,0,73,78,70,0,110,97,110,0,78,65,78,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,46,0,84,33,34,25,13,1,2,3,17,75,28,12,16,4,11,29,18,30,39,104,110,111,112,113,98,32,5,6,15,19,20,21,26,8,22,7,40,36,23,24,9,10,14,27,31,37,35,131,130,125,38,42,43,60,61,62,63,67,71,74,77,88,89,90,91,92,93,94,95,96,97,99,100,101,102,103,105,106,107,108,114,115,116,121,122,123,124,0,73,108,108,101,103,97,108,32,98,121,116,101,32,115,101,113,117,101,110,99,101,0,68,111,109,97,105,110,32,101,114,114,111,114,0,82,101,115,117,108,116,32,110,111,116,32,114,101,112,114,101,115,101,110,116,97,98,108,101,0,78,111,116,32,97,32,116,116,121,0,80,101,114,109,105,115,115,105,111,110,32,100,101,110,105,101,100,0,79,112,101,114,97,116,105,111,110,32,110,111,116,32,112,101,114,109,105,116,116,101,100,0,78,111,32,115,117,99,104,32,102,105,108,101,32,111,114,32,100,105,114,101,99,116,111,114,121,0,78,111,32,115,117,99,104,32,112,114,111,99,101,115,115,0,70,105,108,101,32,101,120,105,115,116,115,0,86,97,108,117,101,32,116,111,111,32,108,97,114,103,101,32,102,111,114,32,100,97,116,97,32,116,121,112,101,0,78,111,32,115,112,97,99,101,32,108,101,102,116,32,111,110,32,100,101,118,105,99,101,0,79,117,116,32,111,102,32,109,101,109,111,114,121,0,82,101,115,111,117,114,99,101,32,98,117,115,121,0,73,110,116,101,114,114,117,112,116,101,100,32,115,121,115,116,101,109,32,99,97,108,108,0,82,101,115,111,117,114,99,101,32,116,101,109,112,111,114,97,114,105,108,121,32,117,110,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,115,101,101,107,0,67,114,111,115,115,45,100,101,118,105,99,101,32,108,105,110,107,0,82,101,97,100,45,111,110,108,121,32,102,105,108,101,32,115,121,115,116,101,109,0,68,105,114,101,99,116,111,114,121,32,110,111,116,32,101,109,112,116,121,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,112,101,101,114,0,79,112,101,114,97,116,105,111,110,32,116,105,109,101,100,32,111,117,116,0,67,111,110,110,101,99,116,105,111,110,32,114,101,102,117,115,101,100,0,72,111,115,116,32,105,115,32,100,111,119,110,0,72,111,115,116,32,105,115,32,117,110,114,101,97,99,104,97,98,108,101,0,65,100,100,114,101,115,115,32,105,110,32,117,115,101,0,66,114,111,107,101,110,32,112,105,112,101,0,73,47,79,32,101,114,114,111,114,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,32,111,114,32,97,100,100,114,101,115,115,0,66,108,111,99,107,32,100,101,118,105,99,101,32,114,101,113,117,105,114,101,100,0,78,111,32,115,117,99,104,32,100,101,118,105,99,101,0,78,111,116,32,97,32,100,105,114,101,99,116,111,114,121,0,73,115,32,97,32,100,105,114,101,99,116,111,114,121,0,84,101,120,116,32,102,105,108,101,32,98,117,115,121,0,69,120,101,99,32,102,111,114,109,97,116,32,101,114,114,111,114,0,73,110,118,97,108,105,100,32,97,114,103,117,109,101,110,116,0,65,114,103,117,109,101,110,116,32,108,105,115,116,32,116,111,111,32,108,111,110,103,0,83,121,109,98,111,108,105,99,32,108,105,110,107,32,108,111,111,112,0,70,105,108,101,110,97,109,101,32,116,111,111,32,108,111,110,103,0,84,111,111,32,109,97,110,121,32,111,112,101,110,32,102,105,108,101,115,32,105,110,32,115,121,115,116,101,109,0,78,111,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,115,32,97,118,97,105,108,97,98,108,101,0,66,97,100,32,102,105,108,101,32,100,101,115,99,114,105,112,116,111,114,0,78,111,32,99,104,105,108,100,32,112,114,111,99,101,115,115,0,66,97,100,32,97,100,100,114,101,115,115,0,70,105,108,101,32,116,111,111,32,108,97,114,103,101,0,84,111,111,32,109,97,110,121,32,108,105,110,107,115,0,78,111,32,108,111,99,107,115,32,97,118,97,105,108,97,98,108,101,0,82,101,115,111,117,114,99,101,32,100,101,97,100,108,111,99,107,32,119,111,117,108,100,32,111,99,99,117,114,0,83,116,97,116,101,32,110,111,116,32,114,101,99,111,118,101,114,97,98,108,101,0,80,114,101,118,105,111,117,115,32,111,119,110,101,114,32,100,105,101,100,0,79,112,101,114,97,116,105,111,110,32,99,97,110,99,101,108,101,100,0,70,117,110,99,116,105,111,110,32,110,111,116,32,105,109,112,108,101,109,101,110,116,101,100,0,78,111,32,109,101,115,115,97,103,101,32,111,102,32,100,101,115,105,114,101,100,32,116,121,112,101,0,73,100,101,110,116,105,102,105,101,114,32,114,101,109,111,118,101,100,0,68,101,118,105,99,101,32,110,111,116,32,97,32,115,116,114,101,97,109,0,78,111,32,100,97,116,97,32,97,118,97,105,108,97,98,108,101,0,68,101,118,105,99,101,32,116,105,109,101,111,117,116,0,79,117,116,32,111,102,32,115,116,114,101,97,109,115,32,114,101,115,111,117,114,99,101,115,0,76,105,110,107,32,104,97,115,32,98,101,101,110,32,115,101,118,101,114,101,100,0,80,114,111,116,111,99,111,108,32,101,114,114,111,114,0,66,97,100,32,109,101,115,115,97,103,101,0,70,105,108,101,32,100,101,115,99,114,105,112,116,111,114,32,105,110,32,98,97,100,32,115,116,97,116,101,0,78,111,116,32,97,32,115,111,99,107,101,116,0,68,101,115,116,105,110,97,116,105,111,110,32,97,100,100,114,101,115,115,32,114,101,113,117,105,114,101,100,0,77,101,115,115,97,103,101,32,116,111,111,32,108,97,114,103,101,0,80,114,111,116,111,99,111,108,32,119,114,111,110,103,32,116,121,112,101,32,102,111,114,32,115,111,99,107,101,116,0,80,114,111,116,111,99,111,108,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,80,114,111,116,111,99,111,108,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,83,111,99,107,101,116,32,116,121,112,101,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,78,111,116,32,115,117,112,112,111,114,116,101,100,0,80,114,111,116,111,99,111,108,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,0,65,100,100,114,101,115,115,32,102,97,109,105,108,121,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,98,121,32,112,114,111,116,111,99,111,108,0,65,100,100,114,101,115,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,78,101,116,119,111,114,107,32,105,115,32,100,111,119,110,0,78,101,116,119,111,114,107,32,117,110,114,101,97,99,104,97,98,108,101,0,67,111,110,110,101,99,116,105,111,110,32,114,101,115,101,116,32,98,121,32,110,101,116,119,111,114,107,0,67,111,110,110,101,99,116,105,111,110,32,97,98,111,114,116,101,100,0,78,111,32,98,117,102,102,101,114,32,115,112,97,99,101,32,97,118,97,105,108,97,98,108,101,0,83,111,99,107,101,116,32,105,115,32,99,111,110,110,101,99,116,101,100,0,83,111,99,107,101,116,32,110,111,116,32,99,111,110,110,101,99,116,101,100,0,67,97,110,110,111,116,32,115,101,110,100,32,97,102,116,101,114,32,115,111,99,107,101,116,32,115,104,117,116,100,111,119,110,0,79,112,101,114,97,116,105,111,110,32,97,108,114,101,97,100,121,32,105,110,32,112,114,111,103,114,101,115,115,0,79,112,101,114,97,116,105,111,110,32,105,110,32,112,114,111,103,114,101,115,115,0,83,116,97,108,101,32,102,105,108,101,32,104,97,110,100,108,101,0,82,101,109,111,116,101,32,73,47,79,32,101,114,114,111,114,0,81,117,111,116,97,32,101,120,99,101,101,100,101,100,0,78,111,32,109,101,100,105,117,109,32,102,111,117,110,100,0,87,114,111,110,103,32,109,101,100,105,117,109,32,116,121,112,101,0,78,111,32,101,114,114,111,114,32,105,110,102,111,114,109,97,116,105,111,110,0,0,78,83,116,51,95,95,50,49,52,95,95,115,104,97,114,101,100,95,99,111,117,110,116,69,0,78,83,116,51,95,95,50,49,57,95,95,115,104,97,114,101,100,95,119,101,97,107,95,99,111,117,110,116,69,0,98,97,115,105,99,95,115,116,114,105,110,103,0,37,117,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,58,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,101,120,99,101,112,116,105,111,110,32,111,102,32,116,121,112,101,32,37,115,0,116,101,114,109,105,110,97,116,105,110,103,32,119,105,116,104,32,37,115,32,102,111,114,101,105,103,110,32,101,120,99,101,112,116,105,111,110,0,116,101,114,109,105,110,97,116,105,110,103,0,117,110,99,97,117,103,104,116,0,83,116,57,101,120,99,101,112,116,105,111,110,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,54,95,95,115,104,105,109,95,116,121,112,101,95,105,110,102,111,69,0,83,116,57,116,121,112,101,95,105,110,102,111,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,48,95,95,115,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0,112,116,104,114,101,97,100,95,111,110,99,101,32,102,97,105,108,117,114,101,32,105,110,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,95,102,97,115,116,40,41,0,99,97,110,110,111,116,32,99,114,101,97,116,101,32,112,116,104,114,101,97,100,32,107,101,121,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,99,97,110,110,111,116,32,122,101,114,111,32,111,117,116,32,116,104,114,101,97,100,32,118,97,108,117,101,32,102,111,114,32,95,95,99,120,97,95,103,101,116,95,103,108,111,98,97,108,115,40,41,0,116,101,114,109,105,110,97,116,101,95,104,97,110,100,108,101,114,32,117,110,101,120,112,101,99,116,101,100,108,121,32,114,101,116,117,114,110,101,100,0,116,101,114,109,105,110,97,116,101,95,104,97,110,100,108,101,114,32,117,110,101,120,112,101,99,116,101,100,108,121,32,116,104,114,101,119,32,97,110,32,101,120,99,101,112,116,105,111,110,0,115,116,100,58,58,98,97,100,95,97,108,108,111,99,0,83,116,57,98,97,100,95,97,108,108,111,99,0,83,116,49,49,108,111,103,105,99,95,101,114,114,111,114,0,83,116,49,50,108,101,110,103,116,104,95,101,114,114,111,114,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,57,95,95,112,111,105,110,116,101,114,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,49,55,95,95,112,98,97,115,101,95,116,121,112,101,95,105,110,102,111,69,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,51,95,95,102,117,110,100,97,109,101,110,116,97,108,95,116,121,112,101,95,105,110,102,111,69,0,118,0,68,110,0,98,0,99,0,104,0,97,0,115,0,116,0,105,0,106,0,108,0,109,0,102,0,100,0,78,49,48,95,95,99,120,120,97,98,105,118,49,50,49,95,95,118,109,105,95,99,108,97,115,115,95,116,121,112,101,95,105,110,102,111,69,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE);





/* no memory initializer */
var tempDoublePtr = STATICTOP; STATICTOP += 16;

assert(tempDoublePtr % 8 == 0);

function copyTempFloat(ptr) { // functions, because inlining this code increases code size too much

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

}

function copyTempDouble(ptr) {

  HEAP8[tempDoublePtr] = HEAP8[ptr];

  HEAP8[tempDoublePtr+1] = HEAP8[ptr+1];

  HEAP8[tempDoublePtr+2] = HEAP8[ptr+2];

  HEAP8[tempDoublePtr+3] = HEAP8[ptr+3];

  HEAP8[tempDoublePtr+4] = HEAP8[ptr+4];

  HEAP8[tempDoublePtr+5] = HEAP8[ptr+5];

  HEAP8[tempDoublePtr+6] = HEAP8[ptr+6];

  HEAP8[tempDoublePtr+7] = HEAP8[ptr+7];

}

// {{PRE_LIBRARY}}


  function ___cxa_pure_virtual() {
      ABORT = true;
      throw 'Pure virtual function called!';
    }

   
  Module["_i64Subtract"] = _i64Subtract;

   
  Module["_i64Add"] = _i64Add;

  
  
  
  function embind_init_charCodes() {
      var codes = new Array(256);
      for (var i = 0; i < 256; ++i) {
          codes[i] = String.fromCharCode(i);
      }
      embind_charCodes = codes;
    }var embind_charCodes=undefined;function readLatin1String(ptr) {
      var ret = "";
      var c = ptr;
      while (HEAPU8[c]) {
          ret += embind_charCodes[HEAPU8[c++]];
      }
      return ret;
    }
  
  
  var awaitingDependencies={};
  
  var registeredTypes={};
  
  var typeDependencies={};
  
  
  
  
  
  
  var char_0=48;
  
  var char_9=57;function makeLegalFunctionName(name) {
      if (undefined === name) {
          return '_unknown';
      }
      name = name.replace(/[^a-zA-Z0-9_]/g, '$');
      var f = name.charCodeAt(0);
      if (f >= char_0 && f <= char_9) {
          return '_' + name;
      } else {
          return name;
      }
    }function createNamedFunction(name, body) {
      name = makeLegalFunctionName(name);
      /*jshint evil:true*/
      return new Function(
          "body",
          "return function " + name + "() {\n" +
          "    \"use strict\";" +
          "    return body.apply(this, arguments);\n" +
          "};\n"
      )(body);
    }function extendError(baseErrorType, errorName) {
      var errorClass = createNamedFunction(errorName, function(message) {
          this.name = errorName;
          this.message = message;
  
          var stack = (new Error(message)).stack;
          if (stack !== undefined) {
              this.stack = this.toString() + '\n' +
                  stack.replace(/^Error(:[^\n]*)?\n/, '');
          }
      });
      errorClass.prototype = Object.create(baseErrorType.prototype);
      errorClass.prototype.constructor = errorClass;
      errorClass.prototype.toString = function() {
          if (this.message === undefined) {
              return this.name;
          } else {
              return this.name + ': ' + this.message;
          }
      };
  
      return errorClass;
    }var BindingError=undefined;function throwBindingError(message) {
      throw new BindingError(message);
    }
  
  
  
  var InternalError=undefined;function throwInternalError(message) {
      throw new InternalError(message);
    }function whenDependentTypesAreResolved(myTypes, dependentTypes, getTypeConverters) {
      myTypes.forEach(function(type) {
          typeDependencies[type] = dependentTypes;
      });
  
      function onComplete(typeConverters) {
          var myTypeConverters = getTypeConverters(typeConverters);
          if (myTypeConverters.length !== myTypes.length) {
              throwInternalError('Mismatched type converter count');
          }
          for (var i = 0; i < myTypes.length; ++i) {
              registerType(myTypes[i], myTypeConverters[i]);
          }
      }
  
      var typeConverters = new Array(dependentTypes.length);
      var unregisteredTypes = [];
      var registered = 0;
      dependentTypes.forEach(function(dt, i) {
          if (registeredTypes.hasOwnProperty(dt)) {
              typeConverters[i] = registeredTypes[dt];
          } else {
              unregisteredTypes.push(dt);
              if (!awaitingDependencies.hasOwnProperty(dt)) {
                  awaitingDependencies[dt] = [];
              }
              awaitingDependencies[dt].push(function() {
                  typeConverters[i] = registeredTypes[dt];
                  ++registered;
                  if (registered === unregisteredTypes.length) {
                      onComplete(typeConverters);
                  }
              });
          }
      });
      if (0 === unregisteredTypes.length) {
          onComplete(typeConverters);
      }
    }function registerType(rawType, registeredInstance, options) {
      options = options || {};
  
      if (!('argPackAdvance' in registeredInstance)) {
          throw new TypeError('registerType registeredInstance requires argPackAdvance');
      }
  
      var name = registeredInstance.name;
      if (!rawType) {
          throwBindingError('type "' + name + '" must have a positive integer typeid pointer');
      }
      if (registeredTypes.hasOwnProperty(rawType)) {
          if (options.ignoreDuplicateRegistrations) {
              return;
          } else {
              throwBindingError("Cannot register type '" + name + "' twice");
          }
      }
  
      registeredTypes[rawType] = registeredInstance;
      delete typeDependencies[rawType];
  
      if (awaitingDependencies.hasOwnProperty(rawType)) {
          var callbacks = awaitingDependencies[rawType];
          delete awaitingDependencies[rawType];
          callbacks.forEach(function(cb) {
              cb();
          });
      }
    }function __embind_register_void(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          isVoid: true, // void return values can be optimized out sometimes
          name: name,
          'argPackAdvance': 0,
          'fromWireType': function() {
              return undefined;
          },
          'toWireType': function(destructors, o) {
              // TODO: assert if anything else is given?
              return undefined;
          },
      });
    }

  
  function __ZSt18uncaught_exceptionv() { // std::uncaught_exception()
      return !!__ZSt18uncaught_exceptionv.uncaught_exception;
    }
  
  
  
  var EXCEPTIONS={last:0,caught:[],infos:{},deAdjust:function (adjusted) {
        if (!adjusted || EXCEPTIONS.infos[adjusted]) return adjusted;
        for (var ptr in EXCEPTIONS.infos) {
          var info = EXCEPTIONS.infos[ptr];
          if (info.adjusted === adjusted) {
            Module.printErr('de-adjusted exception ptr ' + adjusted + ' to ' + ptr);
            return ptr;
          }
        }
        Module.printErr('no de-adjustment for unknown exception ptr ' + adjusted);
        return adjusted;
      },addRef:function (ptr) {
        Module.printErr('addref ' + ptr);
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount++;
      },decRef:function (ptr) {
        Module.printErr('decref ' + ptr);
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        assert(info.refcount > 0);
        info.refcount--;
        // A rethrown exception can reach refcount 0; it must not be discarded
        // Its next handler will clear the rethrown flag and addRef it, prior to
        // final decRef and destruction here
        if (info.refcount === 0 && !info.rethrown) {
          if (info.destructor) {
            Module['dynCall_vi'](info.destructor, ptr);
          }
          delete EXCEPTIONS.infos[ptr];
          ___cxa_free_exception(ptr);
          Module.printErr('decref freeing exception ' + [ptr, EXCEPTIONS.last, 'stack', EXCEPTIONS.caught]);
        }
      },clearRef:function (ptr) {
        if (!ptr) return;
        var info = EXCEPTIONS.infos[ptr];
        info.refcount = 0;
      }};
  function ___resumeException(ptr) {
      Module.print("Resuming exception " + [ptr, EXCEPTIONS.last]);
      if (!EXCEPTIONS.last) { EXCEPTIONS.last = ptr; }
      throw ptr;
    }function ___cxa_find_matching_catch() {
      var thrown = EXCEPTIONS.last;
      if (!thrown) {
        // just pass through the null ptr
        return ((Runtime.setTempRet0(0),0)|0);
      }
      var info = EXCEPTIONS.infos[thrown];
      var throwntype = info.type;
      if (!throwntype) {
        // just pass through the thrown ptr
        return ((Runtime.setTempRet0(0),thrown)|0);
      }
      var typeArray = Array.prototype.slice.call(arguments);
  
      var pointer = Module['___cxa_is_pointer_type'](throwntype);
      // can_catch receives a **, add indirection
      if (!___cxa_find_matching_catch.buffer) ___cxa_find_matching_catch.buffer = _malloc(4);
      Module.print("can_catch on " + [thrown]);
      SAFE_HEAP_STORE(((___cxa_find_matching_catch.buffer)|0), ((thrown)|0), 4);
      thrown = ___cxa_find_matching_catch.buffer;
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var i = 0; i < typeArray.length; i++) {
        if (typeArray[i] && Module['___cxa_can_catch'](typeArray[i], throwntype, thrown)) {
          thrown = ((SAFE_HEAP_LOAD(((thrown)|0), 4, 0))|0); // undo indirection
          info.adjusted = thrown;
          Module.print("  can_catch found " + [thrown, typeArray[i]]);
          return ((Runtime.setTempRet0(typeArray[i]),thrown)|0);
        }
      }
      // Shouldn't happen unless we have bogus data in typeArray
      // or encounter a type for which emscripten doesn't have suitable
      // typeinfo defined. Best-efforts match just in case.
      thrown = ((SAFE_HEAP_LOAD(((thrown)|0), 4, 0))|0); // undo indirection
      return ((Runtime.setTempRet0(throwntype),thrown)|0);
    }function ___cxa_throw(ptr, type, destructor) {
      Module.printErr('Compiled code throwing an exception, ' + [ptr,type,destructor]);
      EXCEPTIONS.infos[ptr] = {
        ptr: ptr,
        adjusted: ptr,
        type: type,
        destructor: destructor,
        refcount: 0,
        caught: false,
        rethrown: false
      };
      EXCEPTIONS.last = ptr;
      if (!("uncaught_exception" in __ZSt18uncaught_exceptionv)) {
        __ZSt18uncaught_exceptionv.uncaught_exception = 1;
      } else {
        __ZSt18uncaught_exceptionv.uncaught_exception++;
      }
      throw ptr;
    }

   
  Module["_memset"] = _memset;

  
  
  
  
  function _free() {
  }
  Module["_free"] = _free;function getTypeName(type) {
      var ptr = ___getTypeName(type);
      var rv = readLatin1String(ptr);
      _free(ptr);
      return rv;
    }function requireRegisteredType(rawType, humanName) {
      var impl = registeredTypes[rawType];
      if (undefined === impl) {
          throwBindingError(humanName + " has unknown type " + getTypeName(rawType));
      }
      return impl;
    }function __emval_lookupTypes(argCount, argTypes, argWireTypes) {
      var a = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
          a[i] = requireRegisteredType(
              HEAP32[(argTypes >> 2) + i],
              "parameter " + i);
      }
      return a;
    }
  
  
  var emval_free_list=[];
  
  var emval_handle_array=[{},{value:undefined},{value:null},{value:true},{value:false}];
  
  
  function count_emval_handles() {
      var count = 0;
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              ++count;
          }
      }
      return count;
    }
  
  function get_first_emval() {
      for (var i = 5; i < emval_handle_array.length; ++i) {
          if (emval_handle_array[i] !== undefined) {
              return emval_handle_array[i];
          }
      }
      return null;
    }function init_emval() {
      Module['count_emval_handles'] = count_emval_handles;
      Module['get_first_emval'] = get_first_emval;
    }function __emval_register(value) {
  
      switch(value){
        case undefined :{ return 1; }
        case null :{ return 2; }
        case true :{ return 3; }
        case false :{ return 4; }
        default:{
          var handle = emval_free_list.length ?
              emval_free_list.pop() :
              emval_handle_array.length;
  
          emval_handle_array[handle] = {refcount: 1, value: value};
          return handle;
          }
        }
    }
  
  function requireHandle(handle) {
      if (!handle) {
          throwBindingError('Cannot use deleted val. handle = ' + handle);
      }
      return emval_handle_array[handle].value;
    }function __emval_call(handle, argCount, argTypes, argv) {
      handle = requireHandle(handle);
      var types = __emval_lookupTypes(argCount, argTypes);
  
      var args = new Array(argCount);
      for (var i = 0; i < argCount; ++i) {
          var type = types[i];
          args[i] = type['readValueFromPointer'](argv);
          argv += type['argPackAdvance'];
      }
  
      var rv = handle.apply(undefined, args);
      return __emval_register(rv);
    }

   
  Module["_bitshift64Shl"] = _bitshift64Shl;

  function _abort() {
      Module['abort']();
    }

  
  function ___cxa_free_exception(ptr) {
      try {
        return _free(ptr);
      } catch(e) { // XXX FIXME
        Module.printErr('exception during cxa_free_exception: ' + e);
      }
    }function ___cxa_end_catch() {
      // Clear state flag.
      Module['setThrew'](0);
      // Call destructor if one is registered then clear it.
      var ptr = EXCEPTIONS.caught.pop();
      Module.printErr('cxa_end_catch popped ' + [ptr, EXCEPTIONS.last, 'stack', EXCEPTIONS.caught]);
      if (ptr) {
        EXCEPTIONS.decRef(EXCEPTIONS.deAdjust(ptr));
        EXCEPTIONS.last = 0; // XXX in decRef?
      }
    }


  function _pthread_once(ptr, func) {
      if (!_pthread_once.seen) _pthread_once.seen = {};
      if (ptr in _pthread_once.seen) return;
      Module['dynCall_v'](func);
      _pthread_once.seen[ptr] = 1;
    }

  
  
  
  function ClassHandle_isAliasOf(other) {
      if (!(this instanceof ClassHandle)) {
          return false;
      }
      if (!(other instanceof ClassHandle)) {
          return false;
      }
  
      var leftClass = this.$$.ptrType.registeredClass;
      var left = this.$$.ptr;
      var rightClass = other.$$.ptrType.registeredClass;
      var right = other.$$.ptr;
  
      while (leftClass.baseClass) {
          left = leftClass.upcast(left);
          leftClass = leftClass.baseClass;
      }
  
      while (rightClass.baseClass) {
          right = rightClass.upcast(right);
          rightClass = rightClass.baseClass;
      }
  
      return leftClass === rightClass && left === right;
    }
  
  
  function shallowCopyInternalPointer(o) {
      return {
          count: o.count,
          deleteScheduled: o.deleteScheduled,
          preservePointerOnDelete: o.preservePointerOnDelete,
          ptr: o.ptr,
          ptrType: o.ptrType,
          smartPtr: o.smartPtr,
          smartPtrType: o.smartPtrType,
      };
    }
  
  function throwInstanceAlreadyDeleted(obj) {
      function getInstanceTypeName(handle) {
        return handle.$$.ptrType.registeredClass.name;
      }
      throwBindingError(getInstanceTypeName(obj) + ' instance already deleted');
    }function ClassHandle_clone() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.preservePointerOnDelete) {
          this.$$.count.value += 1;
          return this;
      } else {
          var clone = Object.create(Object.getPrototypeOf(this), {
              $$: {
                  value: shallowCopyInternalPointer(this.$$),
              }
          });
  
          clone.$$.count.value += 1;
          clone.$$.deleteScheduled = false;
          return clone;
      }
    }
  
  
  function runDestructor(handle) {
      var $$ = handle.$$;
      if ($$.smartPtr) {
          $$.smartPtrType.rawDestructor($$.smartPtr);
      } else {
          $$.ptrType.registeredClass.rawDestructor($$.ptr);
      }
    }function ClassHandle_delete() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
  
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
  
      this.$$.count.value -= 1;
      var toDelete = 0 === this.$$.count.value;
      if (toDelete) {
          runDestructor(this);
      }
      if (!this.$$.preservePointerOnDelete) {
          this.$$.smartPtr = undefined;
          this.$$.ptr = undefined;
      }
    }
  
  function ClassHandle_isDeleted() {
      return !this.$$.ptr;
    }
  
  
  var delayFunction=undefined;
  
  var deletionQueue=[];
  
  function flushPendingDeletes() {
      while (deletionQueue.length) {
          var obj = deletionQueue.pop();
          obj.$$.deleteScheduled = false;
          obj['delete']();
      }
    }function ClassHandle_deleteLater() {
      if (!this.$$.ptr) {
          throwInstanceAlreadyDeleted(this);
      }
      if (this.$$.deleteScheduled && !this.$$.preservePointerOnDelete) {
          throwBindingError('Object already scheduled for deletion');
      }
      deletionQueue.push(this);
      if (deletionQueue.length === 1 && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
      this.$$.deleteScheduled = true;
      return this;
    }function init_ClassHandle() {
      ClassHandle.prototype['isAliasOf'] = ClassHandle_isAliasOf;
      ClassHandle.prototype['clone'] = ClassHandle_clone;
      ClassHandle.prototype['delete'] = ClassHandle_delete;
      ClassHandle.prototype['isDeleted'] = ClassHandle_isDeleted;
      ClassHandle.prototype['deleteLater'] = ClassHandle_deleteLater;
    }function ClassHandle() {
    }
  
  var registeredPointers={};
  
  
  function ensureOverloadTable(proto, methodName, humanName) {
      if (undefined === proto[methodName].overloadTable) {
          var prevFunc = proto[methodName];
          // Inject an overload resolver function that routes to the appropriate overload based on the number of arguments.
          proto[methodName] = function() {
              // TODO This check can be removed in -O3 level "unsafe" optimizations.
              if (!proto[methodName].overloadTable.hasOwnProperty(arguments.length)) {
                  throwBindingError("Function '" + humanName + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + proto[methodName].overloadTable + ")!");
              }
              return proto[methodName].overloadTable[arguments.length].apply(this, arguments);
          };
          // Move the previous function into the overload table.
          proto[methodName].overloadTable = [];
          proto[methodName].overloadTable[prevFunc.argCount] = prevFunc;
      }
    }function exposePublicSymbol(name, value, numArguments) {
      if (Module.hasOwnProperty(name)) {
          if (undefined === numArguments || (undefined !== Module[name].overloadTable && undefined !== Module[name].overloadTable[numArguments])) {
              throwBindingError("Cannot register public name '" + name + "' twice");
          }
  
          // We are exposing a function with the same name as an existing function. Create an overload table and a function selector
          // that routes between the two.
          ensureOverloadTable(Module, name, name);
          if (Module.hasOwnProperty(numArguments)) {
              throwBindingError("Cannot register multiple overloads of a function with the same number of arguments (" + numArguments + ")!");
          }
          // Add the new function into the overload table.
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          if (undefined !== numArguments) {
              Module[name].numArguments = numArguments;
          }
      }
    }
  
  function RegisteredClass(
      name,
      constructor,
      instancePrototype,
      rawDestructor,
      baseClass,
      getActualType,
      upcast,
      downcast
    ) {
      this.name = name;
      this.constructor = constructor;
      this.instancePrototype = instancePrototype;
      this.rawDestructor = rawDestructor;
      this.baseClass = baseClass;
      this.getActualType = getActualType;
      this.upcast = upcast;
      this.downcast = downcast;
      this.pureVirtualFunctions = [];
    }
  
  
  
  function upcastPointer(ptr, ptrClass, desiredClass) {
      while (ptrClass !== desiredClass) {
          if (!ptrClass.upcast) {
              throwBindingError("Expected null or instance of " + desiredClass.name + ", got an instance of " + ptrClass.name);
          }
          ptr = ptrClass.upcast(ptr);
          ptrClass = ptrClass.baseClass;
      }
      return ptr;
    }function constNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  function genericPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
  
          if (this.isSmartPointer) {
              var ptr = this.rawConstructor();
              if (destructors !== null) {
                  destructors.push(this.rawDestructor, ptr);
              }
              return ptr;
          } else {
              return 0;
          }
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (!this.isConst && handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
  
      if (this.isSmartPointer) {
          // TODO: this is not strictly true
          // We could support BY_EMVAL conversions from raw pointers to smart pointers
          // because the smart pointer can hold a reference to the handle
          if (undefined === handle.$$.smartPtr) {
              throwBindingError('Passing raw pointer to smart pointer is illegal');
          }
  
          switch (this.sharingPolicy) {
              case 0: // NONE
                  // no upcasting
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      throwBindingError('Cannot convert argument of type ' + (handle.$$.smartPtrType ? handle.$$.smartPtrType.name : handle.$$.ptrType.name) + ' to parameter type ' + this.name);
                  }
                  break;
  
              case 1: // INTRUSIVE
                  ptr = handle.$$.smartPtr;
                  break;
  
              case 2: // BY_EMVAL
                  if (handle.$$.smartPtrType === this) {
                      ptr = handle.$$.smartPtr;
                  } else {
                      var clonedHandle = handle['clone']();
                      ptr = this.rawShare(
                          ptr,
                          __emval_register(function() {
                              clonedHandle['delete']();
                          })
                      );
                      if (destructors !== null) {
                          destructors.push(this.rawDestructor, ptr);
                      }
                  }
                  break;
  
              default:
                  throwBindingError('Unsupporting sharing policy');
          }
      }
      return ptr;
    }
  
  function nonConstNoSmartPtrRawPointerToWireType(destructors, handle) {
      if (handle === null) {
          if (this.isReference) {
              throwBindingError('null is not a valid ' + this.name);
          }
          return 0;
      }
  
      if (!handle.$$) {
          throwBindingError('Cannot pass "' + _embind_repr(handle) + '" as a ' + this.name);
      }
      if (!handle.$$.ptr) {
          throwBindingError('Cannot pass deleted object as a pointer of type ' + this.name);
      }
      if (handle.$$.ptrType.isConst) {
          throwBindingError('Cannot convert argument of type ' + handle.$$.ptrType.name + ' to parameter type ' + this.name);
      }
      var handleClass = handle.$$.ptrType.registeredClass;
      var ptr = upcastPointer(handle.$$.ptr, handleClass, this.registeredClass);
      return ptr;
    }
  
  
  function simpleReadValueFromPointer(pointer) {
      return this['fromWireType'](HEAPU32[pointer >> 2]);
    }
  
  function RegisteredPointer_getPointee(ptr) {
      if (this.rawGetPointee) {
          ptr = this.rawGetPointee(ptr);
      }
      return ptr;
    }
  
  function RegisteredPointer_destructor(ptr) {
      if (this.rawDestructor) {
          this.rawDestructor(ptr);
      }
    }
  
  function RegisteredPointer_deleteObject(handle) {
      if (handle !== null) {
          handle['delete']();
      }
    }
  
  
  function downcastPointer(ptr, ptrClass, desiredClass) {
      if (ptrClass === desiredClass) {
          return ptr;
      }
      if (undefined === desiredClass.baseClass) {
          return null; // no conversion
      }
  
      var rv = downcastPointer(ptr, ptrClass, desiredClass.baseClass);
      if (rv === null) {
          return null;
      }
      return desiredClass.downcast(rv);
    }
  
  
  
  
  function getInheritedInstanceCount() {
      return Object.keys(registeredInstances).length;
    }
  
  function getLiveInheritedInstances() {
      var rv = [];
      for (var k in registeredInstances) {
          if (registeredInstances.hasOwnProperty(k)) {
              rv.push(registeredInstances[k]);
          }
      }
      return rv;
    }
  
  function setDelayFunction(fn) {
      delayFunction = fn;
      if (deletionQueue.length && delayFunction) {
          delayFunction(flushPendingDeletes);
      }
    }function init_embind() {
      Module['getInheritedInstanceCount'] = getInheritedInstanceCount;
      Module['getLiveInheritedInstances'] = getLiveInheritedInstances;
      Module['flushPendingDeletes'] = flushPendingDeletes;
      Module['setDelayFunction'] = setDelayFunction;
    }var registeredInstances={};
  
  function getBasestPointer(class_, ptr) {
      if (ptr === undefined) {
          throwBindingError('ptr should not be undefined');
      }
      while (class_.baseClass) {
          ptr = class_.upcast(ptr);
          class_ = class_.baseClass;
      }
      return ptr;
    }function getInheritedInstance(class_, ptr) {
      ptr = getBasestPointer(class_, ptr);
      return registeredInstances[ptr];
    }
  
  function makeClassHandle(prototype, record) {
      if (!record.ptrType || !record.ptr) {
          throwInternalError('makeClassHandle requires ptr and ptrType');
      }
      var hasSmartPtrType = !!record.smartPtrType;
      var hasSmartPtr = !!record.smartPtr;
      if (hasSmartPtrType !== hasSmartPtr) {
          throwInternalError('Both smartPtrType and smartPtr must be specified');
      }
      record.count = { value: 1 };
      return Object.create(prototype, {
          $$: {
              value: record,
          },
      });
    }function RegisteredPointer_fromWireType(ptr) {
      // ptr is a raw pointer (or a raw smartpointer)
  
      // rawPointer is a maybe-null raw pointer
      var rawPointer = this.getPointee(ptr);
      if (!rawPointer) {
          this.destructor(ptr);
          return null;
      }
  
      var registeredInstance = getInheritedInstance(this.registeredClass, rawPointer);
      if (undefined !== registeredInstance) {
          // JS object has been neutered, time to repopulate it
          if (0 === registeredInstance.$$.count.value) {
              registeredInstance.$$.ptr = rawPointer;
              registeredInstance.$$.smartPtr = ptr;
              return registeredInstance['clone']();
          } else {
              // else, just increment reference count on existing object
              // it already has a reference to the smart pointer
              var rv = registeredInstance['clone']();
              this.destructor(ptr);
              return rv;
          }
      }
  
      function makeDefaultHandle() {
          if (this.isSmartPointer) {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this.pointeeType,
                  ptr: rawPointer,
                  smartPtrType: this,
                  smartPtr: ptr,
              });
          } else {
              return makeClassHandle(this.registeredClass.instancePrototype, {
                  ptrType: this,
                  ptr: ptr,
              });
          }
      }
  
      var actualType = this.registeredClass.getActualType(rawPointer);
      var registeredPointerRecord = registeredPointers[actualType];
      if (!registeredPointerRecord) {
          return makeDefaultHandle.call(this);
      }
  
      var toType;
      if (this.isConst) {
          toType = registeredPointerRecord.constPointerType;
      } else {
          toType = registeredPointerRecord.pointerType;
      }
      var dp = downcastPointer(
          rawPointer,
          this.registeredClass,
          toType.registeredClass);
      if (dp === null) {
          return makeDefaultHandle.call(this);
      }
      if (this.isSmartPointer) {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
              smartPtrType: this,
              smartPtr: ptr,
          });
      } else {
          return makeClassHandle(toType.registeredClass.instancePrototype, {
              ptrType: toType,
              ptr: dp,
          });
      }
    }function init_RegisteredPointer() {
      RegisteredPointer.prototype.getPointee = RegisteredPointer_getPointee;
      RegisteredPointer.prototype.destructor = RegisteredPointer_destructor;
      RegisteredPointer.prototype['argPackAdvance'] = 8;
      RegisteredPointer.prototype['readValueFromPointer'] = simpleReadValueFromPointer;
      RegisteredPointer.prototype['deleteObject'] = RegisteredPointer_deleteObject;
      RegisteredPointer.prototype['fromWireType'] = RegisteredPointer_fromWireType;
    }function RegisteredPointer(
      name,
      registeredClass,
      isReference,
      isConst,
  
      // smart pointer properties
      isSmartPointer,
      pointeeType,
      sharingPolicy,
      rawGetPointee,
      rawConstructor,
      rawShare,
      rawDestructor
    ) {
      this.name = name;
      this.registeredClass = registeredClass;
      this.isReference = isReference;
      this.isConst = isConst;
  
      // smart pointer properties
      this.isSmartPointer = isSmartPointer;
      this.pointeeType = pointeeType;
      this.sharingPolicy = sharingPolicy;
      this.rawGetPointee = rawGetPointee;
      this.rawConstructor = rawConstructor;
      this.rawShare = rawShare;
      this.rawDestructor = rawDestructor;
  
      if (!isSmartPointer && registeredClass.baseClass === undefined) {
          if (isConst) {
              this['toWireType'] = constNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          } else {
              this['toWireType'] = nonConstNoSmartPtrRawPointerToWireType;
              this.destructorFunction = null;
          }
      } else {
          this['toWireType'] = genericPointerToWireType;
          // Here we must leave this.destructorFunction undefined, since whether genericPointerToWireType returns
          // a pointer that needs to be freed up is runtime-dependent, and cannot be evaluated at registration time.
          // TODO: Create an alternative mechanism that allows removing the use of var destructors = []; array in
          //       craftInvokerFunction altogether.
      }
    }
  
  function replacePublicSymbol(name, value, numArguments) {
      if (!Module.hasOwnProperty(name)) {
          throwInternalError('Replacing nonexistant public symbol');
      }
      // If there's an overload table for this symbol, replace the symbol in the overload table instead.
      if (undefined !== Module[name].overloadTable && undefined !== numArguments) {
          Module[name].overloadTable[numArguments] = value;
      }
      else {
          Module[name] = value;
          Module[name].argCount = numArguments;
      }
    }
  
  function requireFunction(signature, rawFunction) {
      signature = readLatin1String(signature);
  
      function makeDynCaller(dynCall) {
          var args = [];
          for (var i = 1; i < signature.length; ++i) {
              args.push('a' + i);
          }
  
          var name = 'dynCall_' + signature + '_' + rawFunction;
          var body = 'return function ' + name + '(' + args.join(', ') + ') {\n';
          body    += '    return dynCall(rawFunction' + (args.length ? ', ' : '') + args.join(', ') + ');\n';
          body    += '};\n';
  
          return (new Function('dynCall', 'rawFunction', body))(dynCall, rawFunction);
      }
  
      var fp;
      if (Module['FUNCTION_TABLE_' + signature] !== undefined) {
          fp = Module['FUNCTION_TABLE_' + signature][rawFunction];
      } else if (typeof FUNCTION_TABLE !== "undefined") {
          fp = FUNCTION_TABLE[rawFunction];
      } else {
          // asm.js does not give direct access to the function tables,
          // and thus we must go through the dynCall interface which allows
          // calling into a signature's function table by pointer value.
          //
          // https://github.com/dherman/asm.js/issues/83
          //
          // This has three main penalties:
          // - dynCall is another function call in the path from JavaScript to C++.
          // - JITs may not predict through the function table indirection at runtime.
          var dc = Module["asm"]['dynCall_' + signature];
          if (dc === undefined) {
              // We will always enter this branch if the signature
              // contains 'f' and PRECISE_F32 is not enabled.
              //
              // Try again, replacing 'f' with 'd'.
              dc = Module["asm"]['dynCall_' + signature.replace(/f/g, 'd')];
              if (dc === undefined) {
                  throwBindingError("No dynCall invoker for signature: " + signature);
              }
          }
          fp = makeDynCaller(dc);
      }
  
      if (typeof fp !== "function") {
          throwBindingError("unknown function pointer with signature " + signature + ": " + rawFunction);
      }
      return fp;
    }
  
  
  var UnboundTypeError=undefined;function throwUnboundTypeError(message, types) {
      var unboundTypes = [];
      var seen = {};
      function visit(type) {
          if (seen[type]) {
              return;
          }
          if (registeredTypes[type]) {
              return;
          }
          if (typeDependencies[type]) {
              typeDependencies[type].forEach(visit);
              return;
          }
          unboundTypes.push(type);
          seen[type] = true;
      }
      types.forEach(visit);
  
      throw new UnboundTypeError(message + ': ' + unboundTypes.map(getTypeName).join([', ']));
    }function __embind_register_class(
      rawType,
      rawPointerType,
      rawConstPointerType,
      baseClassRawType,
      getActualTypeSignature,
      getActualType,
      upcastSignature,
      upcast,
      downcastSignature,
      downcast,
      name,
      destructorSignature,
      rawDestructor
    ) {
      name = readLatin1String(name);
      getActualType = requireFunction(getActualTypeSignature, getActualType);
      if (upcast) {
          upcast = requireFunction(upcastSignature, upcast);
      }
      if (downcast) {
          downcast = requireFunction(downcastSignature, downcast);
      }
      rawDestructor = requireFunction(destructorSignature, rawDestructor);
      var legalFunctionName = makeLegalFunctionName(name);
  
      exposePublicSymbol(legalFunctionName, function() {
          // this code cannot run if baseClassRawType is zero
          throwUnboundTypeError('Cannot construct ' + name + ' due to unbound types', [baseClassRawType]);
      });
  
      whenDependentTypesAreResolved(
          [rawType, rawPointerType, rawConstPointerType],
          baseClassRawType ? [baseClassRawType] : [],
          function(base) {
              base = base[0];
  
              var baseClass;
              var basePrototype;
              if (baseClassRawType) {
                  baseClass = base.registeredClass;
                  basePrototype = baseClass.instancePrototype;
              } else {
                  basePrototype = ClassHandle.prototype;
              }
  
              var constructor = createNamedFunction(legalFunctionName, function() {
                  if (Object.getPrototypeOf(this) !== instancePrototype) {
                      throw new BindingError("Use 'new' to construct " + name);
                  }
                  if (undefined === registeredClass.constructor_body) {
                      throw new BindingError(name + " has no accessible constructor");
                  }
                  var body = registeredClass.constructor_body[arguments.length];
                  if (undefined === body) {
                      throw new BindingError("Tried to invoke ctor of " + name + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(registeredClass.constructor_body).toString() + ") parameters instead!");
                  }
                  return body.apply(this, arguments);
              });
  
              var instancePrototype = Object.create(basePrototype, {
                  constructor: { value: constructor },
              });
  
              constructor.prototype = instancePrototype;
  
              var registeredClass = new RegisteredClass(
                  name,
                  constructor,
                  instancePrototype,
                  rawDestructor,
                  baseClass,
                  getActualType,
                  upcast,
                  downcast);
  
              var referenceConverter = new RegisteredPointer(
                  name,
                  registeredClass,
                  true,
                  false,
                  false);
  
              var pointerConverter = new RegisteredPointer(
                  name + '*',
                  registeredClass,
                  false,
                  false,
                  false);
  
              var constPointerConverter = new RegisteredPointer(
                  name + ' const*',
                  registeredClass,
                  false,
                  true,
                  false);
  
              registeredPointers[rawType] = {
                  pointerType: pointerConverter,
                  constPointerType: constPointerConverter
              };
  
              replacePublicSymbol(legalFunctionName, constructor);
  
              return [referenceConverter, pointerConverter, constPointerConverter];
          }
      );
    }

  function __emval_decref(handle) {
      if (handle > 4 && 0 === --emval_handle_array[handle].refcount) {
          emval_handle_array[handle] = undefined;
          emval_free_list.push(handle);
      }
    }

  
  var PTHREAD_SPECIFIC={};function _pthread_getspecific(key) {
      return PTHREAD_SPECIFIC[key] || 0;
    }

  
  var PTHREAD_SPECIFIC_NEXT_KEY=1;
  
  var ERRNO_CODES={EPERM:1,ENOENT:2,ESRCH:3,EINTR:4,EIO:5,ENXIO:6,E2BIG:7,ENOEXEC:8,EBADF:9,ECHILD:10,EAGAIN:11,EWOULDBLOCK:11,ENOMEM:12,EACCES:13,EFAULT:14,ENOTBLK:15,EBUSY:16,EEXIST:17,EXDEV:18,ENODEV:19,ENOTDIR:20,EISDIR:21,EINVAL:22,ENFILE:23,EMFILE:24,ENOTTY:25,ETXTBSY:26,EFBIG:27,ENOSPC:28,ESPIPE:29,EROFS:30,EMLINK:31,EPIPE:32,EDOM:33,ERANGE:34,ENOMSG:42,EIDRM:43,ECHRNG:44,EL2NSYNC:45,EL3HLT:46,EL3RST:47,ELNRNG:48,EUNATCH:49,ENOCSI:50,EL2HLT:51,EDEADLK:35,ENOLCK:37,EBADE:52,EBADR:53,EXFULL:54,ENOANO:55,EBADRQC:56,EBADSLT:57,EDEADLOCK:35,EBFONT:59,ENOSTR:60,ENODATA:61,ETIME:62,ENOSR:63,ENONET:64,ENOPKG:65,EREMOTE:66,ENOLINK:67,EADV:68,ESRMNT:69,ECOMM:70,EPROTO:71,EMULTIHOP:72,EDOTDOT:73,EBADMSG:74,ENOTUNIQ:76,EBADFD:77,EREMCHG:78,ELIBACC:79,ELIBBAD:80,ELIBSCN:81,ELIBMAX:82,ELIBEXEC:83,ENOSYS:38,ENOTEMPTY:39,ENAMETOOLONG:36,ELOOP:40,EOPNOTSUPP:95,EPFNOSUPPORT:96,ECONNRESET:104,ENOBUFS:105,EAFNOSUPPORT:97,EPROTOTYPE:91,ENOTSOCK:88,ENOPROTOOPT:92,ESHUTDOWN:108,ECONNREFUSED:111,EADDRINUSE:98,ECONNABORTED:103,ENETUNREACH:101,ENETDOWN:100,ETIMEDOUT:110,EHOSTDOWN:112,EHOSTUNREACH:113,EINPROGRESS:115,EALREADY:114,EDESTADDRREQ:89,EMSGSIZE:90,EPROTONOSUPPORT:93,ESOCKTNOSUPPORT:94,EADDRNOTAVAIL:99,ENETRESET:102,EISCONN:106,ENOTCONN:107,ETOOMANYREFS:109,EUSERS:87,EDQUOT:122,ESTALE:116,ENOTSUP:95,ENOMEDIUM:123,EILSEQ:84,EOVERFLOW:75,ECANCELED:125,ENOTRECOVERABLE:131,EOWNERDEAD:130,ESTRPIPE:86};function _pthread_key_create(key, destructor) {
      if (key == 0) {
        return ERRNO_CODES.EINVAL;
      }
      SAFE_HEAP_STORE(((key)|0), ((PTHREAD_SPECIFIC_NEXT_KEY)|0), 4);
      // values start at 0
      PTHREAD_SPECIFIC[PTHREAD_SPECIFIC_NEXT_KEY] = 0;
      PTHREAD_SPECIFIC_NEXT_KEY++;
      return 0;
    }

  
  function getShiftFromSize(size) {
      switch (size) {
          case 1: return 0;
          case 2: return 1;
          case 4: return 2;
          case 8: return 3;
          default:
              throw new TypeError('Unknown type size: ' + size);
      }
    }function __embind_register_bool(rawType, name, size, trueValue, falseValue) {
      var shift = getShiftFromSize(size);
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(wt) {
              // ambiguous emscripten ABI: sometimes return values are
              // true or false, and sometimes integers (0 or 1)
              return !!wt;
          },
          'toWireType': function(destructors, o) {
              return o ? trueValue : falseValue;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': function(pointer) {
              // TODO: if heap is fixed (like in asm.js) this could be executed outside
              var heap;
              if (size === 1) {
                  heap = HEAP8;
              } else if (size === 2) {
                  heap = HEAP16;
              } else if (size === 4) {
                  heap = HEAP32;
              } else {
                  throw new TypeError("Unknown boolean type size: " + name);
              }
              return this['fromWireType'](heap[pointer >> shift]);
          },
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __emval_take_value(type, argv) {
      type = requireRegisteredType(type, '_emval_take_value');
      var v = type['readValueFromPointer'](argv);
      return __emval_register(v);
    }

  
  function _embind_repr(v) {
      if (v === null) {
          return 'null';
      }
      var t = typeof v;
      if (t === 'object' || t === 'array' || t === 'function') {
          return v.toString();
      } else {
          return '' + v;
      }
    }
  
  function integerReadValueFromPointer(name, shift, signed) {
      // integers are quite common, so generate very specialized functions
      switch (shift) {
          case 0: return signed ?
              function readS8FromPointer(pointer) { return HEAP8[pointer]; } :
              function readU8FromPointer(pointer) { return HEAPU8[pointer]; };
          case 1: return signed ?
              function readS16FromPointer(pointer) { return HEAP16[pointer >> 1]; } :
              function readU16FromPointer(pointer) { return HEAPU16[pointer >> 1]; };
          case 2: return signed ?
              function readS32FromPointer(pointer) { return HEAP32[pointer >> 2]; } :
              function readU32FromPointer(pointer) { return HEAPU32[pointer >> 2]; };
          default:
              throw new TypeError("Unknown integer type: " + name);
      }
    }function __embind_register_integer(primitiveType, name, size, minRange, maxRange) {
      name = readLatin1String(name);
      if (maxRange === -1) { // LLVM doesn't have signed and unsigned 32-bit types, so u32 literals come out as 'i32 -1'. Always treat those as max u32.
          maxRange = 4294967295;
      }
  
      var shift = getShiftFromSize(size);
      
      var fromWireType = function(value) {
          return value;
      };
      
      if (minRange === 0) {
          var bitshift = 32 - 8*size;
          fromWireType = function(value) {
              return (value << bitshift) >>> bitshift;
          };
      }
  
      registerType(primitiveType, {
          name: name,
          'fromWireType': fromWireType,
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following two if()s and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              if (value < minRange || value > maxRange) {
                  throw new TypeError('Passing a number "' + _embind_repr(value) + '" from JS side to C/C++ side to an argument of type "' + name + '", which is outside the valid range [' + minRange + ', ' + maxRange + ']!');
              }
              return value | 0;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': integerReadValueFromPointer(name, shift, minRange !== 0),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  function __embind_register_emval(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(handle) {
              var rv = emval_handle_array[handle].value;
              __emval_decref(handle);
              return rv;
          },
          'toWireType': function(destructors, value) {
              return __emval_register(value);
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: null, // This type does not need a destructor
  
          // TODO: do we need a deleteObject here?  write a test where
          // emval is passed into JS via an interface
      });
    }

  function _pthread_setspecific(key, value) {
      if (!(key in PTHREAD_SPECIFIC)) {
        return ERRNO_CODES.EINVAL;
      }
      PTHREAD_SPECIFIC[key] = value;
      return 0;
    }

  
  function _malloc(bytes) {
      /* Over-allocate to make sure it is byte-aligned by 8.
       * This will leak memory, but this is only the dummy
       * implementation (replaced by dlmalloc normally) so
       * not an issue.
       */
      var ptr = Runtime.dynamicAlloc(bytes + 8);
      return (ptr+8) & 0xFFFFFFF8;
    }
  Module["_malloc"] = _malloc;function ___cxa_allocate_exception(size) {
      return _malloc(size);
    }

   
  Module["_bitshift64Lshr"] = _bitshift64Lshr;

  function __embind_register_smart_ptr(
      rawType,
      rawPointeeType,
      name,
      sharingPolicy,
      getPointeeSignature,
      rawGetPointee,
      constructorSignature,
      rawConstructor,
      shareSignature,
      rawShare,
      destructorSignature,
      rawDestructor
    ) {
      name = readLatin1String(name);
      rawGetPointee = requireFunction(getPointeeSignature, rawGetPointee);
      rawConstructor = requireFunction(constructorSignature, rawConstructor);
      rawShare = requireFunction(shareSignature, rawShare);
      rawDestructor = requireFunction(destructorSignature, rawDestructor);
  
      whenDependentTypesAreResolved([rawType], [rawPointeeType], function(pointeeType) {
          pointeeType = pointeeType[0];
  
          var registeredPointer = new RegisteredPointer(
              name,
              pointeeType.registeredClass,
              false,
              false,
              // smart pointer properties
              true,
              pointeeType,
              sharingPolicy,
              rawGetPointee,
              rawConstructor,
              rawShare,
              rawDestructor);
          return [registeredPointer];
      });
    }

  
  function heap32VectorToArray(count, firstElement) {
      var array = [];
      for (var i = 0; i < count; i++) {
          array.push(HEAP32[(firstElement >> 2) + i]);
      }
      return array;
    }
  
  function runDestructors(destructors) {
      while (destructors.length) {
          var ptr = destructors.pop();
          var del = destructors.pop();
          del(ptr);
      }
    }function __embind_register_class_constructor(
      rawClassType,
      argCount,
      rawArgTypesAddr,
      invokerSignature,
      invoker,
      rawConstructor
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      invoker = requireFunction(invokerSignature, invoker);
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = 'constructor ' + classType.name;
  
          if (undefined === classType.registeredClass.constructor_body) {
              classType.registeredClass.constructor_body = [];
          }
          if (undefined !== classType.registeredClass.constructor_body[argCount - 1]) {
              throw new BindingError("Cannot register multiple constructors with identical number of parameters (" + (argCount-1) + ") for class '" + classType.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
          }
          classType.registeredClass.constructor_body[argCount - 1] = function unboundTypeHandler() {
              throwUnboundTypeError('Cannot construct ' + classType.name + ' due to unbound types', rawArgTypes);
          };
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
              classType.registeredClass.constructor_body[argCount - 1] = function constructor_body() {
                  if (arguments.length !== argCount - 1) {
                      throwBindingError(humanName + ' called with ' + arguments.length + ' arguments, expected ' + (argCount-1));
                  }
                  var destructors = [];
                  var args = new Array(argCount);
                  args[0] = rawConstructor;
                  for (var i = 1; i < argCount; ++i) {
                      args[i] = argTypes[i]['toWireType'](destructors, arguments[i - 1]);
                  }
  
                  var ptr = invoker.apply(null, args);
                  runDestructors(destructors);
  
                  return argTypes[0]['fromWireType'](ptr);
              };
              return [];
          });
          return [];
      });
    }

  
  function floatReadValueFromPointer(name, shift) {
      switch (shift) {
          case 2: return function(pointer) {
              return this['fromWireType'](HEAPF32[pointer >> 2]);
          };
          case 3: return function(pointer) {
              return this['fromWireType'](HEAPF64[pointer >> 3]);
          };
          default:
              throw new TypeError("Unknown float type: " + name);
      }
    }function __embind_register_float(rawType, name, size) {
      var shift = getShiftFromSize(size);
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              return value;
          },
          'toWireType': function(destructors, value) {
              // todo: Here we have an opportunity for -O3 level "unsafe" optimizations: we could
              // avoid the following if() and assume value is of proper type.
              if (typeof value !== "number" && typeof value !== "boolean") {
                  throw new TypeError('Cannot convert "' + _embind_repr(value) + '" to ' + this.name);
              }
              return value;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': floatReadValueFromPointer(name, shift),
          destructorFunction: null, // This type does not need a destructor
      });
    }

  
  
  function new_(constructor, argumentList) {
      if (!(constructor instanceof Function)) {
          throw new TypeError('new_ called with constructor type ' + typeof(constructor) + " which is not a function");
      }
  
      /*
       * Previously, the following line was just:
  
       function dummy() {};
  
       * Unfortunately, Chrome was preserving 'dummy' as the object's name, even though at creation, the 'dummy' has the
       * correct constructor name.  Thus, objects created with IMVU.new would show up in the debugger as 'dummy', which
       * isn't very helpful.  Using IMVU.createNamedFunction addresses the issue.  Doublely-unfortunately, there's no way
       * to write a test for this behavior.  -NRD 2013.02.22
       */
      var dummy = createNamedFunction(constructor.name || 'unknownFunctionName', function(){});
      dummy.prototype = constructor.prototype;
      var obj = new dummy;
  
      var r = constructor.apply(obj, argumentList);
      return (r instanceof Object) ? r : obj;
    }function craftInvokerFunction(humanName, argTypes, classType, cppInvokerFunc, cppTargetFunc) {
      // humanName: a human-readable string name for the function to be generated.
      // argTypes: An array that contains the embind type objects for all types in the function signature.
      //    argTypes[0] is the type object for the function return value.
      //    argTypes[1] is the type object for function this object/class type, or null if not crafting an invoker for a class method.
      //    argTypes[2...] are the actual function parameters.
      // classType: The embind type object for the class to be bound, or null if this is not a method of a class.
      // cppInvokerFunc: JS Function object to the C++-side function that interops into C++ code.
      // cppTargetFunc: Function pointer (an integer to FUNCTION_TABLE) to the target C++ function the cppInvokerFunc will end up calling.
      var argCount = argTypes.length;
  
      if (argCount < 2) {
          throwBindingError("argTypes array size mismatch! Must at least get return value and 'this' types!");
      }
  
      var isClassMethodFunc = (argTypes[1] !== null && classType !== null);
  
      // Free functions with signature "void function()" do not need an invoker that marshalls between wire types.
  // TODO: This omits argument count check - enable only at -O3 or similar.
  //    if (ENABLE_UNSAFE_OPTS && argCount == 2 && argTypes[0].name == "void" && !isClassMethodFunc) {
  //       return FUNCTION_TABLE[fn];
  //    }
  
      var argsList = "";
      var argsListWired = "";
      for(var i = 0; i < argCount - 2; ++i) {
          argsList += (i!==0?", ":"")+"arg"+i;
          argsListWired += (i!==0?", ":"")+"arg"+i+"Wired";
      }
  
      var invokerFnBody =
          "return function "+makeLegalFunctionName(humanName)+"("+argsList+") {\n" +
          "if (arguments.length !== "+(argCount - 2)+") {\n" +
              "throwBindingError('function "+humanName+" called with ' + arguments.length + ' arguments, expected "+(argCount - 2)+" args!');\n" +
          "}\n";
  
  
      // Determine if we need to use a dynamic stack to store the destructors for the function parameters.
      // TODO: Remove this completely once all function invokers are being dynamically generated.
      var needsDestructorStack = false;
  
      for(var i = 1; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here.
          if (argTypes[i] !== null && argTypes[i].destructorFunction === undefined) { // The type does not define a destructor function - must use dynamic stack
              needsDestructorStack = true;
              break;
          }
      }
  
      if (needsDestructorStack) {
          invokerFnBody +=
              "var destructors = [];\n";
      }
  
      var dtorStack = needsDestructorStack ? "destructors" : "null";
      var args1 = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"];
      var args2 = [throwBindingError, cppInvokerFunc, cppTargetFunc, runDestructors, argTypes[0], argTypes[1]];
  
  
      if (isClassMethodFunc) {
          invokerFnBody += "var thisWired = classParam.toWireType("+dtorStack+", this);\n";
      }
  
      for(var i = 0; i < argCount - 2; ++i) {
          invokerFnBody += "var arg"+i+"Wired = argType"+i+".toWireType("+dtorStack+", arg"+i+"); // "+argTypes[i+2].name+"\n";
          args1.push("argType"+i);
          args2.push(argTypes[i+2]);
      }
  
      if (isClassMethodFunc) {
          argsListWired = "thisWired" + (argsListWired.length > 0 ? ", " : "") + argsListWired;
      }
  
      var returns = (argTypes[0].name !== "void");
  
      invokerFnBody +=
          (returns?"var rv = ":"") + "invoker(fn"+(argsListWired.length>0?", ":"")+argsListWired+");\n";
  
      if (needsDestructorStack) {
          invokerFnBody += "runDestructors(destructors);\n";
      } else {
          for(var i = isClassMethodFunc?1:2; i < argTypes.length; ++i) { // Skip return value at index 0 - it's not deleted here. Also skip class type if not a method.
              var paramName = (i === 1 ? "thisWired" : ("arg"+(i - 2)+"Wired"));
              if (argTypes[i].destructorFunction !== null) {
                  invokerFnBody += paramName+"_dtor("+paramName+"); // "+argTypes[i].name+"\n";
                  args1.push(paramName+"_dtor");
                  args2.push(argTypes[i].destructorFunction);
              }
          }
      }
  
      if (returns) {
          invokerFnBody += "var ret = retType.fromWireType(rv);\n" +
                           "return ret;\n";
      } else {
      }
      invokerFnBody += "}\n";
  
      args1.push(invokerFnBody);
  
      var invokerFunction = new_(Function, args1).apply(null, args2);
      return invokerFunction;
    }function __embind_register_class_function(
      rawClassType,
      methodName,
      argCount,
      rawArgTypesAddr, // [ReturnType, ThisType, Args...]
      invokerSignature,
      rawInvoker,
      context,
      isPureVirtual
    ) {
      var rawArgTypes = heap32VectorToArray(argCount, rawArgTypesAddr);
      methodName = readLatin1String(methodName);
      rawInvoker = requireFunction(invokerSignature, rawInvoker);
  
      whenDependentTypesAreResolved([], [rawClassType], function(classType) {
          classType = classType[0];
          var humanName = classType.name + '.' + methodName;
  
          if (isPureVirtual) {
              classType.registeredClass.pureVirtualFunctions.push(methodName);
          }
  
          function unboundTypesHandler() {
              throwUnboundTypeError('Cannot call ' + humanName + ' due to unbound types', rawArgTypes);
          }
  
          var proto = classType.registeredClass.instancePrototype;
          var method = proto[methodName];
          if (undefined === method || (undefined === method.overloadTable && method.className !== classType.name && method.argCount === argCount - 2)) {
              // This is the first overload to be registered, OR we are replacing a function in the base class with a function in the derived class.
              unboundTypesHandler.argCount = argCount - 2;
              unboundTypesHandler.className = classType.name;
              proto[methodName] = unboundTypesHandler;
          } else {
              // There was an existing function with the same name registered. Set up a function overload routing table.
              ensureOverloadTable(proto, methodName, humanName);
              proto[methodName].overloadTable[argCount - 2] = unboundTypesHandler;
          }
  
          whenDependentTypesAreResolved([], rawArgTypes, function(argTypes) {
  
              var memberFunction = craftInvokerFunction(humanName, argTypes, classType, rawInvoker, context);
  
              // Replace the initial unbound-handler-stub function with the appropriate member function, now that all types
              // are resolved. If multiple overloads are registered for this function, the function goes into an overload table.
              if (undefined === proto[methodName].overloadTable) {
                  // Set argCount in case an overload is registered later
                  memberFunction.argCount = argCount - 2;
                  proto[methodName] = memberFunction;
              } else {
                  proto[methodName].overloadTable[argCount - 2] = memberFunction;
              }
  
              return [];
          });
          return [];
      });
    }

  function ___cxa_find_matching_catch_2() {
          return ___cxa_find_matching_catch.apply(null, arguments);
        }

  function ___cxa_find_matching_catch_3() {
          return ___cxa_find_matching_catch.apply(null, arguments);
        }

  function ___cxa_begin_catch(ptr) {
      var info = EXCEPTIONS.infos[ptr];
      if (info && !info.caught) {
        info.caught = true;
        __ZSt18uncaught_exceptionv.uncaught_exception--;
      }
      if (info) info.rethrown = false;
      EXCEPTIONS.caught.push(ptr);
  		Module.printErr('cxa_begin_catch ' + [ptr, 'stack', EXCEPTIONS.caught]);
      EXCEPTIONS.addRef(EXCEPTIONS.deAdjust(ptr));
      return ptr;
    }

  
  function _emscripten_memcpy_big(dest, src, num) {
      HEAPU8.set(HEAPU8.subarray(src, src+num), dest);
      return dest;
    } 
  Module["_memcpy"] = _memcpy;

  
  var SYSCALLS={varargs:0,get:function (varargs) {
        SYSCALLS.varargs += 4;
        var ret = ((SAFE_HEAP_LOAD((((SYSCALLS.varargs)-(4))|0), 4, 0))|0);
        return ret;
      },getStr:function () {
        var ret = Pointer_stringify(SYSCALLS.get());
        return ret;
      },get64:function () {
        var low = SYSCALLS.get(), high = SYSCALLS.get();
        if (low >= 0) assert(high === 0);
        else assert(high === -1);
        return low;
      },getZero:function () {
        assert(SYSCALLS.get() === 0);
      }};function ___syscall6(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // close
      var stream = SYSCALLS.getStreamFromFD();
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  
  
  var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_STATIC); 
  Module["_llvm_cttz_i32"] = _llvm_cttz_i32; 
  Module["___udivmoddi4"] = ___udivmoddi4; 
  Module["___udivdi3"] = ___udivdi3;

  
  function ___setErrNo(value) {
      if (Module['___errno_location']) SAFE_HEAP_STORE(((Module['___errno_location']())|0), ((value)|0), 4);
      else Module.printErr('failed to set errno from JS');
      return value;
    } 
  Module["_sbrk"] = _sbrk;

  function __embind_register_std_wstring(rawType, charSize, name) {
      // nb. do not cache HEAPU16 and HEAPU32, they may be destroyed by enlargeMemory().
      name = readLatin1String(name);
      var getHeap, shift;
      if (charSize === 2) {
          getHeap = function() { return HEAPU16; };
          shift = 1;
      } else if (charSize === 4) {
          getHeap = function() { return HEAPU32; };
          shift = 2;
      }
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var HEAP = getHeap();
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              var start = (value + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAP[start + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              // assumes 4-byte alignment
              var HEAP = getHeap();
              var length = value.length;
              var ptr = _malloc(4 + length * charSize);
              HEAPU32[ptr >> 2] = length;
              var start = (ptr + 4) >> shift;
              for (var i = 0; i < length; ++i) {
                  HEAP[start + i] = value.charCodeAt(i);
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }

  function ___gxx_personality_v0() {
    }

   
  Module["___uremdi3"] = ___uremdi3;

  function ___cxa_rethrow() {
      var ptr = EXCEPTIONS.caught.pop();
      if (!EXCEPTIONS.infos[ptr].rethrown) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        EXCEPTIONS.caught.push(ptr)
        EXCEPTIONS.infos[ptr].rethrown = true;
      }
      Module.printErr('Compiled code RE-throwing an exception, popped ' + [ptr, EXCEPTIONS.last, 'stack', EXCEPTIONS.caught]);
      EXCEPTIONS.last = ptr;
      throw ptr;
    }

   
  Module["_llvm_bswap_i32"] = _llvm_bswap_i32;

  function __embind_register_memory_view(rawType, dataTypeIndex, name) {
      var typeMapping = [
          Int8Array,
          Uint8Array,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
      ];
  
      var TA = typeMapping[dataTypeIndex];
  
      function decodeMemoryView(handle) {
          handle = handle >> 2;
          var heap = HEAPU32;
          var size = heap[handle]; // in elements
          var data = heap[handle + 1]; // byte offset into emscripten heap
          return new TA(heap['buffer'], data, size);
      }
  
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': decodeMemoryView,
          'argPackAdvance': 8,
          'readValueFromPointer': decodeMemoryView,
      }, {
          ignoreDuplicateRegistrations: true,
      });
    }


  function ___syscall140(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // llseek
      var stream = SYSCALLS.getStreamFromFD(), offset_high = SYSCALLS.get(), offset_low = SYSCALLS.get(), result = SYSCALLS.get(), whence = SYSCALLS.get();
      var offset = offset_low;
      assert(offset_high === 0);
      FS.llseek(stream, offset, whence);
      SAFE_HEAP_STORE(((result)|0), ((stream.position)|0), 4);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function __emval_incref(handle) {
      if (handle > 4) {
          emval_handle_array[handle].refcount += 1;
      }
    }

  function ___syscall146(which, varargs) {SYSCALLS.varargs = varargs;
  try {
   // writev
      // hack to support printf in NO_FILESYSTEM
      var stream = SYSCALLS.get(), iov = SYSCALLS.get(), iovcnt = SYSCALLS.get();
      var ret = 0;
      if (!___syscall146.buffer) {
        ___syscall146.buffers = [null, [], []]; // 1 => stdout, 2 => stderr
        ___syscall146.printChar = function(stream, curr) {
          var buffer = ___syscall146.buffers[stream];
          assert(buffer);
          if (curr === 0 || curr === 10) {
            (stream === 1 ? Module['print'] : Module['printErr'])(UTF8ArrayToString(buffer, 0));
            buffer.length = 0;
          } else {
            buffer.push(curr);
          }
        };
      }
      for (var i = 0; i < iovcnt; i++) {
        var ptr = ((SAFE_HEAP_LOAD((((iov)+(i*8))|0), 4, 0))|0);
        var len = ((SAFE_HEAP_LOAD((((iov)+(i*8 + 4))|0), 4, 0))|0);
        for (var j = 0; j < len; j++) {
          ___syscall146.printChar(stream, HEAPU8[ptr+j]);
        }
        ret += len;
      }
      return ret;
    } catch (e) {
    if (typeof FS === 'undefined' || !(e instanceof FS.ErrnoError)) abort(e);
    return -e.errno;
  }
  }

  function __embind_register_std_string(rawType, name) {
      name = readLatin1String(name);
      registerType(rawType, {
          name: name,
          'fromWireType': function(value) {
              var length = HEAPU32[value >> 2];
              var a = new Array(length);
              for (var i = 0; i < length; ++i) {
                  a[i] = String.fromCharCode(HEAPU8[value + 4 + i]);
              }
              _free(value);
              return a.join('');
          },
          'toWireType': function(destructors, value) {
              if (value instanceof ArrayBuffer) {
                  value = new Uint8Array(value);
              }
  
              function getTAElement(ta, index) {
                  return ta[index];
              }
              function getStringElement(string, index) {
                  return string.charCodeAt(index);
              }
              var getElement;
              if (value instanceof Uint8Array) {
                  getElement = getTAElement;
              } else if (value instanceof Uint8ClampedArray) {
                  getElement = getTAElement;
              } else if (value instanceof Int8Array) {
                  getElement = getTAElement;
              } else if (typeof value === 'string') {
                  getElement = getStringElement;
              } else {
                  throwBindingError('Cannot pass non-string to std::string');
              }
  
              // assumes 4-byte alignment
              var length = value.length;
              var ptr = _malloc(4 + length);
              HEAPU32[ptr >> 2] = length;
              for (var i = 0; i < length; ++i) {
                  var charCode = getElement(value, i);
                  if (charCode > 255) {
                      _free(ptr);
                      throwBindingError('String has UTF-16 code units that do not fit in 8 bits');
                  }
                  HEAPU8[ptr + 4 + i] = charCode;
              }
              if (destructors !== null) {
                  destructors.push(_free, ptr);
              }
              return ptr;
          },
          'argPackAdvance': 8,
          'readValueFromPointer': simpleReadValueFromPointer,
          destructorFunction: function(ptr) { _free(ptr); },
      });
    }
embind_init_charCodes();
BindingError = Module['BindingError'] = extendError(Error, 'BindingError');;
InternalError = Module['InternalError'] = extendError(Error, 'InternalError');;
init_emval();;
init_ClassHandle();
init_RegisteredPointer();
init_embind();;
UnboundTypeError = Module['UnboundTypeError'] = extendError(Error, 'UnboundTypeError');;
/* flush anything remaining in the buffer during shutdown */ __ATEXIT__.push(function() { var fflush = Module["_fflush"]; if (fflush) fflush(0); var printChar = ___syscall146.printChar; if (!printChar) return; var buffers = ___syscall146.buffers; if (buffers[1].length) printChar(1, 10); if (buffers[2].length) printChar(2, 10); });;
DYNAMICTOP_PTR = allocate(1, "i32", ALLOC_STATIC);

STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);

STACK_MAX = STACK_BASE + TOTAL_STACK;

DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);

HEAP32[DYNAMICTOP_PTR>>2] = DYNAMIC_BASE;

staticSealed = true; // seal the static portion of memory

assert(DYNAMIC_BASE < TOTAL_MEMORY, "TOTAL_MEMORY not big enough for stack");



function nullFunc_iiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_i(x) { Module["printErr"]("Invalid function pointer called with signature 'i'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vi(x) { Module["printErr"]("Invalid function pointer called with signature 'vi'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_vii(x) { Module["printErr"]("Invalid function pointer called with signature 'vii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_ii(x) { Module["printErr"]("Invalid function pointer called with signature 'ii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viii(x) { Module["printErr"]("Invalid function pointer called with signature 'viii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_v(x) { Module["printErr"]("Invalid function pointer called with signature 'v'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'iiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiiiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiiiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_iii(x) { Module["printErr"]("Invalid function pointer called with signature 'iii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function nullFunc_viiii(x) { Module["printErr"]("Invalid function pointer called with signature 'viiii'. Perhaps this is an invalid value (e.g. caused by calling a virtual method on a NULL pointer)? Or calling a function with an incorrect type, which will fail? (it is worth building your source files with -Werror (warnings are errors), as warnings can indicate undefined behavior which can cause this)");  Module["printErr"]("Build with ASSERTIONS=2 for more info.");abort(x) }

function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_i(index) {
  try {
    return Module["dynCall_i"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    Module["setThrew"](1, 0);
  }
}

Module.asmGlobalArg = { "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array, "NaN": NaN, "Infinity": Infinity };

Module.asmLibraryArg = { "abort": abort, "assert": assert, "enlargeMemory": enlargeMemory, "getTotalMemory": getTotalMemory, "abortOnCannotGrowMemory": abortOnCannotGrowMemory, "abortStackOverflow": abortStackOverflow, "segfault": segfault, "alignfault": alignfault, "ftfault": ftfault, "nullFunc_iiii": nullFunc_iiii, "nullFunc_viiiii": nullFunc_viiiii, "nullFunc_i": nullFunc_i, "nullFunc_vi": nullFunc_vi, "nullFunc_vii": nullFunc_vii, "nullFunc_ii": nullFunc_ii, "nullFunc_viii": nullFunc_viii, "nullFunc_v": nullFunc_v, "nullFunc_iiiii": nullFunc_iiiii, "nullFunc_viiiiii": nullFunc_viiiiii, "nullFunc_iii": nullFunc_iii, "nullFunc_viiii": nullFunc_viiii, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_i": invoke_i, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "floatReadValueFromPointer": floatReadValueFromPointer, "simpleReadValueFromPointer": simpleReadValueFromPointer, "throwInternalError": throwInternalError, "get_first_emval": get_first_emval, "getLiveInheritedInstances": getLiveInheritedInstances, "__ZSt18uncaught_exceptionv": __ZSt18uncaught_exceptionv, "ClassHandle": ClassHandle, "getShiftFromSize": getShiftFromSize, "___cxa_begin_catch": ___cxa_begin_catch, "_emscripten_memcpy_big": _emscripten_memcpy_big, "runDestructor": runDestructor, "throwInstanceAlreadyDeleted": throwInstanceAlreadyDeleted, "RegisteredPointer_fromWireType": RegisteredPointer_fromWireType, "init_RegisteredPointer": init_RegisteredPointer, "ClassHandle_isAliasOf": ClassHandle_isAliasOf, "flushPendingDeletes": flushPendingDeletes, "makeClassHandle": makeClassHandle, "whenDependentTypesAreResolved": whenDependentTypesAreResolved, "__embind_register_class_constructor": __embind_register_class_constructor, "___cxa_rethrow": ___cxa_rethrow, "init_ClassHandle": init_ClassHandle, "___syscall140": ___syscall140, "ClassHandle_clone": ClassHandle_clone, "___syscall146": ___syscall146, "throwBindingError": throwBindingError, "RegisteredClass": RegisteredClass, "___cxa_free_exception": ___cxa_free_exception, "___cxa_find_matching_catch": ___cxa_find_matching_catch, "embind_init_charCodes": embind_init_charCodes, "___setErrNo": ___setErrNo, "__embind_register_bool": __embind_register_bool, "___resumeException": ___resumeException, "createNamedFunction": createNamedFunction, "__embind_register_emval": __embind_register_emval, "__emval_decref": __emval_decref, "_pthread_once": _pthread_once, "__embind_register_class": __embind_register_class, "constNoSmartPtrRawPointerToWireType": constNoSmartPtrRawPointerToWireType, "heap32VectorToArray": heap32VectorToArray, "__emval_lookupTypes": __emval_lookupTypes, "ClassHandle_delete": ClassHandle_delete, "RegisteredPointer_destructor": RegisteredPointer_destructor, "___syscall6": ___syscall6, "ensureOverloadTable": ensureOverloadTable, "new_": new_, "downcastPointer": downcastPointer, "replacePublicSymbol": replacePublicSymbol, "init_embind": init_embind, "ClassHandle_deleteLater": ClassHandle_deleteLater, "RegisteredPointer_deleteObject": RegisteredPointer_deleteObject, "ClassHandle_isDeleted": ClassHandle_isDeleted, "__embind_register_integer": __embind_register_integer, "___cxa_allocate_exception": ___cxa_allocate_exception, "__emval_take_value": __emval_take_value, "___cxa_end_catch": ___cxa_end_catch, "_embind_repr": _embind_repr, "__emval_call": __emval_call, "throwUnboundTypeError": throwUnboundTypeError, "craftInvokerFunction": craftInvokerFunction, "runDestructors": runDestructors, "requireRegisteredType": requireRegisteredType, "makeLegalFunctionName": makeLegalFunctionName, "_pthread_key_create": _pthread_key_create, "upcastPointer": upcastPointer, "init_emval": init_emval, "shallowCopyInternalPointer": shallowCopyInternalPointer, "nonConstNoSmartPtrRawPointerToWireType": nonConstNoSmartPtrRawPointerToWireType, "_abort": _abort, "requireHandle": requireHandle, "getTypeName": getTypeName, "exposePublicSymbol": exposePublicSymbol, "__embind_register_std_string": __embind_register_std_string, "___cxa_pure_virtual": ___cxa_pure_virtual, "_pthread_getspecific": _pthread_getspecific, "__embind_register_memory_view": __embind_register_memory_view, "getInheritedInstance": getInheritedInstance, "setDelayFunction": setDelayFunction, "___gxx_personality_v0": ___gxx_personality_v0, "extendError": extendError, "__embind_register_void": __embind_register_void, "___cxa_find_matching_catch_3": ___cxa_find_matching_catch_3, "__embind_register_smart_ptr": __embind_register_smart_ptr, "RegisteredPointer_getPointee": RegisteredPointer_getPointee, "__emval_register": __emval_register, "___cxa_find_matching_catch_2": ___cxa_find_matching_catch_2, "__embind_register_class_function": __embind_register_class_function, "__emval_incref": __emval_incref, "RegisteredPointer": RegisteredPointer, "readLatin1String": readLatin1String, "getBasestPointer": getBasestPointer, "getInheritedInstanceCount": getInheritedInstanceCount, "__embind_register_float": __embind_register_float, "integerReadValueFromPointer": integerReadValueFromPointer, "__embind_register_std_wstring": __embind_register_std_wstring, "_pthread_setspecific": _pthread_setspecific, "genericPointerToWireType": genericPointerToWireType, "registerType": registerType, "___cxa_throw": ___cxa_throw, "count_emval_handles": count_emval_handles, "requireFunction": requireFunction, "DYNAMICTOP_PTR": DYNAMICTOP_PTR, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "cttz_i8": cttz_i8 };
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  
  
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);


  var DYNAMICTOP_PTR=env.DYNAMICTOP_PTR|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var cttz_i8=env.cttz_i8|0;

  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var nan = global.NaN, inf = global.Infinity;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;

  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var Math_min=global.Math.min;
  var Math_max=global.Math.max;
  var Math_clz32=global.Math.clz32;
  var abort=env.abort;
  var assert=env.assert;
  var enlargeMemory=env.enlargeMemory;
  var getTotalMemory=env.getTotalMemory;
  var abortOnCannotGrowMemory=env.abortOnCannotGrowMemory;
  var abortStackOverflow=env.abortStackOverflow;
  var segfault=env.segfault;
  var alignfault=env.alignfault;
  var ftfault=env.ftfault;
  var nullFunc_iiii=env.nullFunc_iiii;
  var nullFunc_viiiii=env.nullFunc_viiiii;
  var nullFunc_i=env.nullFunc_i;
  var nullFunc_vi=env.nullFunc_vi;
  var nullFunc_vii=env.nullFunc_vii;
  var nullFunc_ii=env.nullFunc_ii;
  var nullFunc_viii=env.nullFunc_viii;
  var nullFunc_v=env.nullFunc_v;
  var nullFunc_iiiii=env.nullFunc_iiiii;
  var nullFunc_viiiiii=env.nullFunc_viiiiii;
  var nullFunc_iii=env.nullFunc_iii;
  var nullFunc_viiii=env.nullFunc_viiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_i=env.invoke_i;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var floatReadValueFromPointer=env.floatReadValueFromPointer;
  var simpleReadValueFromPointer=env.simpleReadValueFromPointer;
  var throwInternalError=env.throwInternalError;
  var get_first_emval=env.get_first_emval;
  var getLiveInheritedInstances=env.getLiveInheritedInstances;
  var __ZSt18uncaught_exceptionv=env.__ZSt18uncaught_exceptionv;
  var ClassHandle=env.ClassHandle;
  var getShiftFromSize=env.getShiftFromSize;
  var ___cxa_begin_catch=env.___cxa_begin_catch;
  var _emscripten_memcpy_big=env._emscripten_memcpy_big;
  var runDestructor=env.runDestructor;
  var throwInstanceAlreadyDeleted=env.throwInstanceAlreadyDeleted;
  var RegisteredPointer_fromWireType=env.RegisteredPointer_fromWireType;
  var init_RegisteredPointer=env.init_RegisteredPointer;
  var ClassHandle_isAliasOf=env.ClassHandle_isAliasOf;
  var flushPendingDeletes=env.flushPendingDeletes;
  var makeClassHandle=env.makeClassHandle;
  var whenDependentTypesAreResolved=env.whenDependentTypesAreResolved;
  var __embind_register_class_constructor=env.__embind_register_class_constructor;
  var ___cxa_rethrow=env.___cxa_rethrow;
  var init_ClassHandle=env.init_ClassHandle;
  var ___syscall140=env.___syscall140;
  var ClassHandle_clone=env.ClassHandle_clone;
  var ___syscall146=env.___syscall146;
  var throwBindingError=env.throwBindingError;
  var RegisteredClass=env.RegisteredClass;
  var ___cxa_free_exception=env.___cxa_free_exception;
  var ___cxa_find_matching_catch=env.___cxa_find_matching_catch;
  var embind_init_charCodes=env.embind_init_charCodes;
  var ___setErrNo=env.___setErrNo;
  var __embind_register_bool=env.__embind_register_bool;
  var ___resumeException=env.___resumeException;
  var createNamedFunction=env.createNamedFunction;
  var __embind_register_emval=env.__embind_register_emval;
  var __emval_decref=env.__emval_decref;
  var _pthread_once=env._pthread_once;
  var __embind_register_class=env.__embind_register_class;
  var constNoSmartPtrRawPointerToWireType=env.constNoSmartPtrRawPointerToWireType;
  var heap32VectorToArray=env.heap32VectorToArray;
  var __emval_lookupTypes=env.__emval_lookupTypes;
  var ClassHandle_delete=env.ClassHandle_delete;
  var RegisteredPointer_destructor=env.RegisteredPointer_destructor;
  var ___syscall6=env.___syscall6;
  var ensureOverloadTable=env.ensureOverloadTable;
  var new_=env.new_;
  var downcastPointer=env.downcastPointer;
  var replacePublicSymbol=env.replacePublicSymbol;
  var init_embind=env.init_embind;
  var ClassHandle_deleteLater=env.ClassHandle_deleteLater;
  var RegisteredPointer_deleteObject=env.RegisteredPointer_deleteObject;
  var ClassHandle_isDeleted=env.ClassHandle_isDeleted;
  var __embind_register_integer=env.__embind_register_integer;
  var ___cxa_allocate_exception=env.___cxa_allocate_exception;
  var __emval_take_value=env.__emval_take_value;
  var ___cxa_end_catch=env.___cxa_end_catch;
  var _embind_repr=env._embind_repr;
  var __emval_call=env.__emval_call;
  var throwUnboundTypeError=env.throwUnboundTypeError;
  var craftInvokerFunction=env.craftInvokerFunction;
  var runDestructors=env.runDestructors;
  var requireRegisteredType=env.requireRegisteredType;
  var makeLegalFunctionName=env.makeLegalFunctionName;
  var _pthread_key_create=env._pthread_key_create;
  var upcastPointer=env.upcastPointer;
  var init_emval=env.init_emval;
  var shallowCopyInternalPointer=env.shallowCopyInternalPointer;
  var nonConstNoSmartPtrRawPointerToWireType=env.nonConstNoSmartPtrRawPointerToWireType;
  var _abort=env._abort;
  var requireHandle=env.requireHandle;
  var getTypeName=env.getTypeName;
  var exposePublicSymbol=env.exposePublicSymbol;
  var __embind_register_std_string=env.__embind_register_std_string;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _pthread_getspecific=env._pthread_getspecific;
  var __embind_register_memory_view=env.__embind_register_memory_view;
  var getInheritedInstance=env.getInheritedInstance;
  var setDelayFunction=env.setDelayFunction;
  var ___gxx_personality_v0=env.___gxx_personality_v0;
  var extendError=env.extendError;
  var __embind_register_void=env.__embind_register_void;
  var ___cxa_find_matching_catch_3=env.___cxa_find_matching_catch_3;
  var __embind_register_smart_ptr=env.__embind_register_smart_ptr;
  var RegisteredPointer_getPointee=env.RegisteredPointer_getPointee;
  var __emval_register=env.__emval_register;
  var ___cxa_find_matching_catch_2=env.___cxa_find_matching_catch_2;
  var __embind_register_class_function=env.__embind_register_class_function;
  var __emval_incref=env.__emval_incref;
  var RegisteredPointer=env.RegisteredPointer;
  var readLatin1String=env.readLatin1String;
  var getBasestPointer=env.getBasestPointer;
  var getInheritedInstanceCount=env.getInheritedInstanceCount;
  var __embind_register_float=env.__embind_register_float;
  var integerReadValueFromPointer=env.integerReadValueFromPointer;
  var __embind_register_std_wstring=env.__embind_register_std_wstring;
  var _pthread_setspecific=env._pthread_setspecific;
  var genericPointerToWireType=env.genericPointerToWireType;
  var registerType=env.registerType;
  var ___cxa_throw=env.___cxa_throw;
  var count_emval_handles=env.count_emval_handles;
  var requireFunction=env.requireFunction;
  var tempFloat = 0.0;

// EMSCRIPTEN_START_FUNCS
function _malloc($0) {
 $0 = $0 | 0; //@line 6646
 var $$$0192$i = 0, $$$0193$i = 0, $$$4236$i = 0, $$$4351$i = 0, $$$i = 0, $$0 = 0, $$0$i$i = 0, $$0$i$i$i = 0, $$0$i18$i = 0, $$01$i$i = 0, $$0189$i = 0, $$0192$lcssa$i = 0, $$01928$i = 0, $$0193$lcssa$i = 0, $$01937$i = 0, $$0197 = 0, $$0199 = 0, $$0206$i$i = 0, $$0207$i$i = 0, $$0211$i$i = 0; //@line 6647
 var $$0212$i$i = 0, $$024371$i = 0, $$0287$i$i = 0, $$0288$i$i = 0, $$0289$i$i = 0, $$0295$i$i = 0, $$0296$i$i = 0, $$0342$i = 0, $$0344$i = 0, $$0345$i = 0, $$0347$i = 0, $$0353$i = 0, $$0358$i = 0, $$0359$$i = 0, $$0359$i = 0, $$0361$i = 0, $$0362$i = 0, $$0368$i = 0, $$1196$i = 0, $$1198$i = 0; //@line 6648
 var $$124470$i = 0, $$1291$i$i = 0, $$1293$i$i = 0, $$1343$i = 0, $$1348$i = 0, $$1363$i = 0, $$1370$i = 0, $$1374$i = 0, $$2234253237$i = 0, $$2247$ph$i = 0, $$2253$ph$i = 0, $$2355$i = 0, $$3$i = 0, $$3$i$i = 0, $$3$i201 = 0, $$3350$i = 0, $$3372$i = 0, $$4$lcssa$i = 0, $$4$ph$i = 0, $$415$i = 0; //@line 6649
 var $$4236$i = 0, $$4351$lcssa$i = 0, $$435114$i = 0, $$4357$$4$i = 0, $$4357$ph$i = 0, $$435713$i = 0, $$723948$i = 0, $$749$i = 0, $$pre = 0, $$pre$i = 0, $$pre$i$i = 0, $$pre$i19$i = 0, $$pre$i210 = 0, $$pre$i212 = 0, $$pre$phi$i$iZ2D = 0, $$pre$phi$i20$iZ2D = 0, $$pre$phi$i211Z2D = 0, $$pre$phi$iZ2D = 0, $$pre$phi11$i$iZ2D = 0, $$pre$phiZ2D = 0; //@line 6650
 var $$pre10$i$i = 0, $$sink1$i = 0, $$sink1$i$i = 0, $$sink16$i = 0, $$sink2$i = 0, $$sink2$i204 = 0, $$sink3$i = 0, $1 = 0, $10 = 0, $100 = 0, $1000 = 0, $1001 = 0, $1002 = 0, $1003 = 0, $1004 = 0, $1005 = 0, $1006 = 0, $1007 = 0, $1008 = 0, $1009 = 0; //@line 6651
 var $101 = 0, $1010 = 0, $1011 = 0, $1012 = 0, $1013 = 0, $1014 = 0, $1015 = 0, $1016 = 0, $1017 = 0, $1018 = 0, $1019 = 0, $102 = 0, $1020 = 0, $1021 = 0, $1022 = 0, $1023 = 0, $1024 = 0, $1025 = 0, $1026 = 0, $1027 = 0; //@line 6652
 var $1028 = 0, $1029 = 0, $103 = 0, $1030 = 0, $1031 = 0, $1032 = 0, $1033 = 0, $1034 = 0, $1035 = 0, $1036 = 0, $1037 = 0, $1038 = 0, $1039 = 0, $104 = 0, $1040 = 0, $1041 = 0, $1042 = 0, $1043 = 0, $1044 = 0, $1045 = 0; //@line 6653
 var $1046 = 0, $1047 = 0, $1048 = 0, $1049 = 0, $105 = 0, $1050 = 0, $1051 = 0, $1052 = 0, $1053 = 0, $1054 = 0, $1055 = 0, $1056 = 0, $1057 = 0, $1058 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0; //@line 6654
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0; //@line 6655
 var $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0; //@line 6656
 var $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0; //@line 6657
 var $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0; //@line 6658
 var $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0; //@line 6659
 var $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0; //@line 6660
 var $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0; //@line 6661
 var $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0; //@line 6662
 var $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0; //@line 6663
 var $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0; //@line 6664
 var $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0; //@line 6665
 var $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0; //@line 6666
 var $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0, $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0; //@line 6667
 var $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0, $358 = 0, $359 = 0, $36 = 0, $360 = 0, $361 = 0, $362 = 0, $363 = 0; //@line 6668
 var $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0, $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0; //@line 6669
 var $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $389 = 0, $39 = 0, $390 = 0, $391 = 0, $392 = 0, $393 = 0, $394 = 0, $395 = 0, $396 = 0, $397 = 0, $398 = 0, $399 = 0, $4 = 0; //@line 6670
 var $40 = 0, $400 = 0, $401 = 0, $402 = 0, $403 = 0, $404 = 0, $405 = 0, $406 = 0, $407 = 0, $408 = 0, $409 = 0, $41 = 0, $410 = 0, $411 = 0, $412 = 0, $413 = 0, $414 = 0, $415 = 0, $416 = 0, $417 = 0; //@line 6671
 var $418 = 0, $419 = 0, $42 = 0, $420 = 0, $421 = 0, $422 = 0, $423 = 0, $424 = 0, $425 = 0, $426 = 0, $427 = 0, $428 = 0, $429 = 0, $43 = 0, $430 = 0, $431 = 0, $432 = 0, $433 = 0, $434 = 0, $435 = 0; //@line 6672
 var $436 = 0, $437 = 0, $438 = 0, $439 = 0, $44 = 0, $440 = 0, $441 = 0, $442 = 0, $443 = 0, $444 = 0, $445 = 0, $446 = 0, $447 = 0, $448 = 0, $449 = 0, $45 = 0, $450 = 0, $451 = 0, $452 = 0, $453 = 0; //@line 6673
 var $454 = 0, $455 = 0, $456 = 0, $457 = 0, $458 = 0, $459 = 0, $46 = 0, $460 = 0, $461 = 0, $462 = 0, $463 = 0, $464 = 0, $465 = 0, $466 = 0, $467 = 0, $468 = 0, $469 = 0, $47 = 0, $470 = 0, $471 = 0; //@line 6674
 var $472 = 0, $473 = 0, $474 = 0, $475 = 0, $476 = 0, $477 = 0, $478 = 0, $479 = 0, $48 = 0, $480 = 0, $481 = 0, $482 = 0, $483 = 0, $484 = 0, $485 = 0, $486 = 0, $487 = 0, $488 = 0, $489 = 0, $49 = 0; //@line 6675
 var $490 = 0, $491 = 0, $492 = 0, $493 = 0, $494 = 0, $495 = 0, $496 = 0, $497 = 0, $498 = 0, $499 = 0, $5 = 0, $50 = 0, $500 = 0, $501 = 0, $502 = 0, $503 = 0, $504 = 0, $505 = 0, $506 = 0, $507 = 0; //@line 6676
 var $508 = 0, $509 = 0, $51 = 0, $510 = 0, $511 = 0, $512 = 0, $513 = 0, $514 = 0, $515 = 0, $516 = 0, $517 = 0, $518 = 0, $519 = 0, $52 = 0, $520 = 0, $521 = 0, $522 = 0, $523 = 0, $524 = 0, $525 = 0; //@line 6677
 var $526 = 0, $527 = 0, $528 = 0, $529 = 0, $53 = 0, $530 = 0, $531 = 0, $532 = 0, $533 = 0, $534 = 0, $535 = 0, $536 = 0, $537 = 0, $538 = 0, $539 = 0, $54 = 0, $540 = 0, $541 = 0, $542 = 0, $543 = 0; //@line 6678
 var $544 = 0, $545 = 0, $546 = 0, $547 = 0, $548 = 0, $549 = 0, $55 = 0, $550 = 0, $551 = 0, $552 = 0, $553 = 0, $554 = 0, $555 = 0, $556 = 0, $557 = 0, $558 = 0, $559 = 0, $56 = 0, $560 = 0, $561 = 0; //@line 6679
 var $562 = 0, $563 = 0, $564 = 0, $565 = 0, $566 = 0, $567 = 0, $568 = 0, $569 = 0, $57 = 0, $570 = 0, $571 = 0, $572 = 0, $573 = 0, $574 = 0, $575 = 0, $576 = 0, $577 = 0, $578 = 0, $579 = 0, $58 = 0; //@line 6680
 var $580 = 0, $581 = 0, $582 = 0, $583 = 0, $584 = 0, $585 = 0, $586 = 0, $587 = 0, $588 = 0, $589 = 0, $59 = 0, $590 = 0, $591 = 0, $592 = 0, $593 = 0, $594 = 0, $595 = 0, $596 = 0, $597 = 0, $598 = 0; //@line 6681
 var $599 = 0, $6 = 0, $60 = 0, $600 = 0, $601 = 0, $602 = 0, $603 = 0, $604 = 0, $605 = 0, $606 = 0, $607 = 0, $608 = 0, $609 = 0, $61 = 0, $610 = 0, $611 = 0, $612 = 0, $613 = 0, $614 = 0, $615 = 0; //@line 6682
 var $616 = 0, $617 = 0, $618 = 0, $619 = 0, $62 = 0, $620 = 0, $621 = 0, $622 = 0, $623 = 0, $624 = 0, $625 = 0, $626 = 0, $627 = 0, $628 = 0, $629 = 0, $63 = 0, $630 = 0, $631 = 0, $632 = 0, $633 = 0; //@line 6683
 var $634 = 0, $635 = 0, $636 = 0, $637 = 0, $638 = 0, $639 = 0, $64 = 0, $640 = 0, $641 = 0, $642 = 0, $643 = 0, $644 = 0, $645 = 0, $646 = 0, $647 = 0, $648 = 0, $649 = 0, $65 = 0, $650 = 0, $651 = 0; //@line 6684
 var $652 = 0, $653 = 0, $654 = 0, $655 = 0, $656 = 0, $657 = 0, $658 = 0, $659 = 0, $66 = 0, $660 = 0, $661 = 0, $662 = 0, $663 = 0, $664 = 0, $665 = 0, $666 = 0, $667 = 0, $668 = 0, $669 = 0, $67 = 0; //@line 6685
 var $670 = 0, $671 = 0, $672 = 0, $673 = 0, $674 = 0, $675 = 0, $676 = 0, $677 = 0, $678 = 0, $679 = 0, $68 = 0, $680 = 0, $681 = 0, $682 = 0, $683 = 0, $684 = 0, $685 = 0, $686 = 0, $687 = 0, $688 = 0; //@line 6686
 var $689 = 0, $69 = 0, $690 = 0, $691 = 0, $692 = 0, $693 = 0, $694 = 0, $695 = 0, $696 = 0, $697 = 0, $698 = 0, $699 = 0, $7 = 0, $70 = 0, $700 = 0, $701 = 0, $702 = 0, $703 = 0, $704 = 0, $705 = 0; //@line 6687
 var $706 = 0, $707 = 0, $708 = 0, $709 = 0, $71 = 0, $710 = 0, $711 = 0, $712 = 0, $713 = 0, $714 = 0, $715 = 0, $716 = 0, $717 = 0, $718 = 0, $719 = 0, $72 = 0, $720 = 0, $721 = 0, $722 = 0, $723 = 0; //@line 6688
 var $724 = 0, $725 = 0, $726 = 0, $727 = 0, $728 = 0, $729 = 0, $73 = 0, $730 = 0, $731 = 0, $732 = 0, $733 = 0, $734 = 0, $735 = 0, $736 = 0, $737 = 0, $738 = 0, $739 = 0, $74 = 0, $740 = 0, $741 = 0; //@line 6689
 var $742 = 0, $743 = 0, $744 = 0, $745 = 0, $746 = 0, $747 = 0, $748 = 0, $749 = 0, $75 = 0, $750 = 0, $751 = 0, $752 = 0, $753 = 0, $754 = 0, $755 = 0, $756 = 0, $757 = 0, $758 = 0, $759 = 0, $76 = 0; //@line 6690
 var $760 = 0, $761 = 0, $762 = 0, $763 = 0, $764 = 0, $765 = 0, $766 = 0, $767 = 0, $768 = 0, $769 = 0, $77 = 0, $770 = 0, $771 = 0, $772 = 0, $773 = 0, $774 = 0, $775 = 0, $776 = 0, $777 = 0, $778 = 0; //@line 6691
 var $779 = 0, $78 = 0, $780 = 0, $781 = 0, $782 = 0, $783 = 0, $784 = 0, $785 = 0, $786 = 0, $787 = 0, $788 = 0, $789 = 0, $79 = 0, $790 = 0, $791 = 0, $792 = 0, $793 = 0, $794 = 0, $795 = 0, $796 = 0; //@line 6692
 var $797 = 0, $798 = 0, $799 = 0, $8 = 0, $80 = 0, $800 = 0, $801 = 0, $802 = 0, $803 = 0, $804 = 0, $805 = 0, $806 = 0, $807 = 0, $808 = 0, $809 = 0, $81 = 0, $810 = 0, $811 = 0, $812 = 0, $813 = 0; //@line 6693
 var $814 = 0, $815 = 0, $816 = 0, $817 = 0, $818 = 0, $819 = 0, $82 = 0, $820 = 0, $821 = 0, $822 = 0, $823 = 0, $824 = 0, $825 = 0, $826 = 0, $827 = 0, $828 = 0, $829 = 0, $83 = 0, $830 = 0, $831 = 0; //@line 6694
 var $832 = 0, $833 = 0, $834 = 0, $835 = 0, $836 = 0, $837 = 0, $838 = 0, $839 = 0, $84 = 0, $840 = 0, $841 = 0, $842 = 0, $843 = 0, $844 = 0, $845 = 0, $846 = 0, $847 = 0, $848 = 0, $849 = 0, $85 = 0; //@line 6695
 var $850 = 0, $851 = 0, $852 = 0, $853 = 0, $854 = 0, $855 = 0, $856 = 0, $857 = 0, $858 = 0, $859 = 0, $86 = 0, $860 = 0, $861 = 0, $862 = 0, $863 = 0, $864 = 0, $865 = 0, $866 = 0, $867 = 0, $868 = 0; //@line 6696
 var $869 = 0, $87 = 0, $870 = 0, $871 = 0, $872 = 0, $873 = 0, $874 = 0, $875 = 0, $876 = 0, $877 = 0, $878 = 0, $879 = 0, $88 = 0, $880 = 0, $881 = 0, $882 = 0, $883 = 0, $884 = 0, $885 = 0, $886 = 0; //@line 6697
 var $887 = 0, $888 = 0, $889 = 0, $89 = 0, $890 = 0, $891 = 0, $892 = 0, $893 = 0, $894 = 0, $895 = 0, $896 = 0, $897 = 0, $898 = 0, $899 = 0, $9 = 0, $90 = 0, $900 = 0, $901 = 0, $902 = 0, $903 = 0; //@line 6698
 var $904 = 0, $905 = 0, $906 = 0, $907 = 0, $908 = 0, $909 = 0, $91 = 0, $910 = 0, $911 = 0, $912 = 0, $913 = 0, $914 = 0, $915 = 0, $916 = 0, $917 = 0, $918 = 0, $919 = 0, $92 = 0, $920 = 0, $921 = 0; //@line 6699
 var $922 = 0, $923 = 0, $924 = 0, $925 = 0, $926 = 0, $927 = 0, $928 = 0, $929 = 0, $93 = 0, $930 = 0, $931 = 0, $932 = 0, $933 = 0, $934 = 0, $935 = 0, $936 = 0, $937 = 0, $938 = 0, $939 = 0, $94 = 0; //@line 6700
 var $940 = 0, $941 = 0, $942 = 0, $943 = 0, $944 = 0, $945 = 0, $946 = 0, $947 = 0, $948 = 0, $949 = 0, $95 = 0, $950 = 0, $951 = 0, $952 = 0, $953 = 0, $954 = 0, $955 = 0, $956 = 0, $957 = 0, $958 = 0; //@line 6701
 var $959 = 0, $96 = 0, $960 = 0, $961 = 0, $962 = 0, $963 = 0, $964 = 0, $965 = 0, $966 = 0, $967 = 0, $968 = 0, $969 = 0, $97 = 0, $970 = 0, $971 = 0, $972 = 0, $973 = 0, $974 = 0, $975 = 0, $976 = 0; //@line 6702
 var $977 = 0, $978 = 0, $979 = 0, $98 = 0, $980 = 0, $981 = 0, $982 = 0, $983 = 0, $984 = 0, $985 = 0, $986 = 0, $987 = 0, $988 = 0, $989 = 0, $99 = 0, $990 = 0, $991 = 0, $992 = 0, $993 = 0, $994 = 0; //@line 6703
 var $995 = 0, $996 = 0, $997 = 0, $998 = 0, $999 = 0, $cond$i = 0, $cond$i$i = 0, $cond$i208 = 0, $exitcond$i$i = 0, $not$$i = 0, $not$$i$i = 0, $not$$i17$i = 0, $not$$i209 = 0, $not$$i216 = 0, $not$1$i = 0, $not$1$i203 = 0, $not$5$i = 0, $not$7$i$i = 0, $not$8$i = 0, $not$9$i = 0; //@line 6704
 var $or$cond$i = 0, $or$cond$i214 = 0, $or$cond1$i = 0, $or$cond10$i = 0, $or$cond11$i = 0, $or$cond11$not$i = 0, $or$cond12$i = 0, $or$cond2$i = 0, $or$cond2$i215 = 0, $or$cond5$i = 0, $or$cond50$i = 0, $or$cond51$i = 0, $or$cond7$i = 0, label = 0, sp = 0; //@line 6705
 sp = STACKTOP; //@line 6706
 STACKTOP = STACKTOP + 16 | 0; //@line 6707
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 6707
 $1 = sp; //@line 6708
 $2 = $0 >>> 0 < 245; //@line 6709
 do {
  if ($2) {
   $3 = $0 >>> 0 < 11; //@line 6712
   $4 = $0 + 11 | 0; //@line 6713
   $5 = $4 & -8; //@line 6714
   $6 = $3 ? 16 : $5; //@line 6715
   $7 = $6 >>> 3; //@line 6716
   $8 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 6717
   $9 = $8 >>> $7; //@line 6718
   $10 = $9 & 3; //@line 6719
   $11 = ($10 | 0) == 0; //@line 6720
   if (!$11) {
    $12 = $9 & 1; //@line 6722
    $13 = $12 ^ 1; //@line 6723
    $14 = $13 + $7 | 0; //@line 6724
    $15 = $14 << 1; //@line 6725
    $16 = 6672 + ($15 << 2) | 0; //@line 6726
    $17 = $16 + 8 | 0; //@line 6727
    $18 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 6728
    $19 = $18 + 8 | 0; //@line 6729
    $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 6730
    $21 = ($16 | 0) == ($20 | 0); //@line 6731
    do {
     if ($21) {
      $22 = 1 << $14; //@line 6734
      $23 = $22 ^ -1; //@line 6735
      $24 = $8 & $23; //@line 6736
      SAFE_HEAP_STORE(1658 * 4 | 0, $24 | 0, 4);
     } else {
      $25 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 6739
      $26 = $20 >>> 0 < $25 >>> 0; //@line 6740
      if ($26) {
       _abort(); //@line 6742
      }
      $27 = $20 + 12 | 0; //@line 6745
      $28 = SAFE_HEAP_LOAD($27 | 0, 4, 0) | 0 | 0; //@line 6746
      $29 = ($28 | 0) == ($18 | 0); //@line 6747
      if ($29) {
       SAFE_HEAP_STORE($27 | 0, $16 | 0, 4);
       SAFE_HEAP_STORE($17 | 0, $20 | 0, 4);
       break;
      } else {
       _abort(); //@line 6753
      }
     }
    } while (0);
    $30 = $14 << 3; //@line 6758
    $31 = $30 | 3; //@line 6759
    $32 = $18 + 4 | 0; //@line 6760
    SAFE_HEAP_STORE($32 | 0, $31 | 0, 4);
    $33 = $18 + $30 | 0; //@line 6762
    $34 = $33 + 4 | 0; //@line 6763
    $35 = SAFE_HEAP_LOAD($34 | 0, 4, 0) | 0 | 0; //@line 6764
    $36 = $35 | 1; //@line 6765
    SAFE_HEAP_STORE($34 | 0, $36 | 0, 4);
    $$0 = $19; //@line 6767
    STACKTOP = sp; //@line 6768
    return $$0 | 0; //@line 6768
   }
   $37 = SAFE_HEAP_LOAD(6640 | 0, 4, 0) | 0 | 0; //@line 6770
   $38 = $6 >>> 0 > $37 >>> 0; //@line 6771
   if ($38) {
    $39 = ($9 | 0) == 0; //@line 6773
    if (!$39) {
     $40 = $9 << $7; //@line 6775
     $41 = 2 << $7; //@line 6776
     $42 = 0 - $41 | 0; //@line 6777
     $43 = $41 | $42; //@line 6778
     $44 = $40 & $43; //@line 6779
     $45 = 0 - $44 | 0; //@line 6780
     $46 = $44 & $45; //@line 6781
     $47 = $46 + -1 | 0; //@line 6782
     $48 = $47 >>> 12; //@line 6783
     $49 = $48 & 16; //@line 6784
     $50 = $47 >>> $49; //@line 6785
     $51 = $50 >>> 5; //@line 6786
     $52 = $51 & 8; //@line 6787
     $53 = $52 | $49; //@line 6788
     $54 = $50 >>> $52; //@line 6789
     $55 = $54 >>> 2; //@line 6790
     $56 = $55 & 4; //@line 6791
     $57 = $53 | $56; //@line 6792
     $58 = $54 >>> $56; //@line 6793
     $59 = $58 >>> 1; //@line 6794
     $60 = $59 & 2; //@line 6795
     $61 = $57 | $60; //@line 6796
     $62 = $58 >>> $60; //@line 6797
     $63 = $62 >>> 1; //@line 6798
     $64 = $63 & 1; //@line 6799
     $65 = $61 | $64; //@line 6800
     $66 = $62 >>> $64; //@line 6801
     $67 = $65 + $66 | 0; //@line 6802
     $68 = $67 << 1; //@line 6803
     $69 = 6672 + ($68 << 2) | 0; //@line 6804
     $70 = $69 + 8 | 0; //@line 6805
     $71 = SAFE_HEAP_LOAD($70 | 0, 4, 0) | 0 | 0; //@line 6806
     $72 = $71 + 8 | 0; //@line 6807
     $73 = SAFE_HEAP_LOAD($72 | 0, 4, 0) | 0 | 0; //@line 6808
     $74 = ($69 | 0) == ($73 | 0); //@line 6809
     do {
      if ($74) {
       $75 = 1 << $67; //@line 6812
       $76 = $75 ^ -1; //@line 6813
       $77 = $8 & $76; //@line 6814
       SAFE_HEAP_STORE(1658 * 4 | 0, $77 | 0, 4);
       $98 = $77; //@line 6816
      } else {
       $78 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 6818
       $79 = $73 >>> 0 < $78 >>> 0; //@line 6819
       if ($79) {
        _abort(); //@line 6821
       }
       $80 = $73 + 12 | 0; //@line 6824
       $81 = SAFE_HEAP_LOAD($80 | 0, 4, 0) | 0 | 0; //@line 6825
       $82 = ($81 | 0) == ($71 | 0); //@line 6826
       if ($82) {
        SAFE_HEAP_STORE($80 | 0, $69 | 0, 4);
        SAFE_HEAP_STORE($70 | 0, $73 | 0, 4);
        $98 = $8; //@line 6830
        break;
       } else {
        _abort(); //@line 6833
       }
      }
     } while (0);
     $83 = $67 << 3; //@line 6838
     $84 = $83 - $6 | 0; //@line 6839
     $85 = $6 | 3; //@line 6840
     $86 = $71 + 4 | 0; //@line 6841
     SAFE_HEAP_STORE($86 | 0, $85 | 0, 4);
     $87 = $71 + $6 | 0; //@line 6843
     $88 = $84 | 1; //@line 6844
     $89 = $87 + 4 | 0; //@line 6845
     SAFE_HEAP_STORE($89 | 0, $88 | 0, 4);
     $90 = $87 + $84 | 0; //@line 6847
     SAFE_HEAP_STORE($90 | 0, $84 | 0, 4);
     $91 = ($37 | 0) == 0; //@line 6849
     if (!$91) {
      $92 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 6851
      $93 = $37 >>> 3; //@line 6852
      $94 = $93 << 1; //@line 6853
      $95 = 6672 + ($94 << 2) | 0; //@line 6854
      $96 = 1 << $93; //@line 6855
      $97 = $98 & $96; //@line 6856
      $99 = ($97 | 0) == 0; //@line 6857
      if ($99) {
       $100 = $98 | $96; //@line 6859
       SAFE_HEAP_STORE(1658 * 4 | 0, $100 | 0, 4);
       $$pre = $95 + 8 | 0; //@line 6861
       $$0199 = $95; //@line 6862
       $$pre$phiZ2D = $$pre; //@line 6862
      } else {
       $101 = $95 + 8 | 0; //@line 6864
       $102 = SAFE_HEAP_LOAD($101 | 0, 4, 0) | 0 | 0; //@line 6865
       $103 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 6866
       $104 = $102 >>> 0 < $103 >>> 0; //@line 6867
       if ($104) {
        _abort(); //@line 6869
       } else {
        $$0199 = $102; //@line 6872
        $$pre$phiZ2D = $101; //@line 6872
       }
      }
      SAFE_HEAP_STORE($$pre$phiZ2D | 0, $92 | 0, 4);
      $105 = $$0199 + 12 | 0; //@line 6876
      SAFE_HEAP_STORE($105 | 0, $92 | 0, 4);
      $106 = $92 + 8 | 0; //@line 6878
      SAFE_HEAP_STORE($106 | 0, $$0199 | 0, 4);
      $107 = $92 + 12 | 0; //@line 6880
      SAFE_HEAP_STORE($107 | 0, $95 | 0, 4);
     }
     SAFE_HEAP_STORE(6640 | 0, $84 | 0, 4);
     SAFE_HEAP_STORE(6652 | 0, $87 | 0, 4);
     $$0 = $72; //@line 6885
     STACKTOP = sp; //@line 6886
     return $$0 | 0; //@line 6886
    }
    $108 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 6888
    $109 = ($108 | 0) == 0; //@line 6889
    if ($109) {
     $$0197 = $6; //@line 6891
    } else {
     $110 = 0 - $108 | 0; //@line 6893
     $111 = $108 & $110; //@line 6894
     $112 = $111 + -1 | 0; //@line 6895
     $113 = $112 >>> 12; //@line 6896
     $114 = $113 & 16; //@line 6897
     $115 = $112 >>> $114; //@line 6898
     $116 = $115 >>> 5; //@line 6899
     $117 = $116 & 8; //@line 6900
     $118 = $117 | $114; //@line 6901
     $119 = $115 >>> $117; //@line 6902
     $120 = $119 >>> 2; //@line 6903
     $121 = $120 & 4; //@line 6904
     $122 = $118 | $121; //@line 6905
     $123 = $119 >>> $121; //@line 6906
     $124 = $123 >>> 1; //@line 6907
     $125 = $124 & 2; //@line 6908
     $126 = $122 | $125; //@line 6909
     $127 = $123 >>> $125; //@line 6910
     $128 = $127 >>> 1; //@line 6911
     $129 = $128 & 1; //@line 6912
     $130 = $126 | $129; //@line 6913
     $131 = $127 >>> $129; //@line 6914
     $132 = $130 + $131 | 0; //@line 6915
     $133 = 6936 + ($132 << 2) | 0; //@line 6916
     $134 = SAFE_HEAP_LOAD($133 | 0, 4, 0) | 0 | 0; //@line 6917
     $135 = $134 + 4 | 0; //@line 6918
     $136 = SAFE_HEAP_LOAD($135 | 0, 4, 0) | 0 | 0; //@line 6919
     $137 = $136 & -8; //@line 6920
     $138 = $137 - $6 | 0; //@line 6921
     $139 = $134 + 16 | 0; //@line 6922
     $140 = SAFE_HEAP_LOAD($139 | 0, 4, 0) | 0 | 0; //@line 6923
     $not$5$i = ($140 | 0) == (0 | 0); //@line 6924
     $$sink16$i = $not$5$i & 1; //@line 6925
     $141 = ($134 + 16 | 0) + ($$sink16$i << 2) | 0; //@line 6926
     $142 = SAFE_HEAP_LOAD($141 | 0, 4, 0) | 0 | 0; //@line 6927
     $143 = ($142 | 0) == (0 | 0); //@line 6928
     if ($143) {
      $$0192$lcssa$i = $134; //@line 6930
      $$0193$lcssa$i = $138; //@line 6930
     } else {
      $$01928$i = $134; //@line 6932
      $$01937$i = $138; //@line 6932
      $145 = $142; //@line 6932
      while (1) {
       $144 = $145 + 4 | 0; //@line 6934
       $146 = SAFE_HEAP_LOAD($144 | 0, 4, 0) | 0 | 0; //@line 6935
       $147 = $146 & -8; //@line 6936
       $148 = $147 - $6 | 0; //@line 6937
       $149 = $148 >>> 0 < $$01937$i >>> 0; //@line 6938
       $$$0193$i = $149 ? $148 : $$01937$i; //@line 6939
       $$$0192$i = $149 ? $145 : $$01928$i; //@line 6940
       $150 = $145 + 16 | 0; //@line 6941
       $151 = SAFE_HEAP_LOAD($150 | 0, 4, 0) | 0 | 0; //@line 6942
       $not$$i = ($151 | 0) == (0 | 0); //@line 6943
       $$sink1$i = $not$$i & 1; //@line 6944
       $152 = ($145 + 16 | 0) + ($$sink1$i << 2) | 0; //@line 6945
       $153 = SAFE_HEAP_LOAD($152 | 0, 4, 0) | 0 | 0; //@line 6946
       $154 = ($153 | 0) == (0 | 0); //@line 6947
       if ($154) {
        $$0192$lcssa$i = $$$0192$i; //@line 6949
        $$0193$lcssa$i = $$$0193$i; //@line 6949
        break;
       } else {
        $$01928$i = $$$0192$i; //@line 6952
        $$01937$i = $$$0193$i; //@line 6952
        $145 = $153; //@line 6952
       }
      }
     }
     $155 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 6956
     $156 = $$0192$lcssa$i >>> 0 < $155 >>> 0; //@line 6957
     if ($156) {
      _abort(); //@line 6959
     }
     $157 = $$0192$lcssa$i + $6 | 0; //@line 6962
     $158 = $$0192$lcssa$i >>> 0 < $157 >>> 0; //@line 6963
     if (!$158) {
      _abort(); //@line 6965
     }
     $159 = $$0192$lcssa$i + 24 | 0; //@line 6968
     $160 = SAFE_HEAP_LOAD($159 | 0, 4, 0) | 0 | 0; //@line 6969
     $161 = $$0192$lcssa$i + 12 | 0; //@line 6970
     $162 = SAFE_HEAP_LOAD($161 | 0, 4, 0) | 0 | 0; //@line 6971
     $163 = ($162 | 0) == ($$0192$lcssa$i | 0); //@line 6972
     do {
      if ($163) {
       $173 = $$0192$lcssa$i + 20 | 0; //@line 6975
       $174 = SAFE_HEAP_LOAD($173 | 0, 4, 0) | 0 | 0; //@line 6976
       $175 = ($174 | 0) == (0 | 0); //@line 6977
       if ($175) {
        $176 = $$0192$lcssa$i + 16 | 0; //@line 6979
        $177 = SAFE_HEAP_LOAD($176 | 0, 4, 0) | 0 | 0; //@line 6980
        $178 = ($177 | 0) == (0 | 0); //@line 6981
        if ($178) {
         $$3$i = 0; //@line 6983
         break;
        } else {
         $$1196$i = $177; //@line 6986
         $$1198$i = $176; //@line 6986
        }
       } else {
        $$1196$i = $174; //@line 6989
        $$1198$i = $173; //@line 6989
       }
       while (1) {
        $179 = $$1196$i + 20 | 0; //@line 6992
        $180 = SAFE_HEAP_LOAD($179 | 0, 4, 0) | 0 | 0; //@line 6993
        $181 = ($180 | 0) == (0 | 0); //@line 6994
        if (!$181) {
         $$1196$i = $180; //@line 6996
         $$1198$i = $179; //@line 6996
         continue;
        }
        $182 = $$1196$i + 16 | 0; //@line 6999
        $183 = SAFE_HEAP_LOAD($182 | 0, 4, 0) | 0 | 0; //@line 7000
        $184 = ($183 | 0) == (0 | 0); //@line 7001
        if ($184) {
         break;
        } else {
         $$1196$i = $183; //@line 7005
         $$1198$i = $182; //@line 7005
        }
       }
       $185 = $$1198$i >>> 0 < $155 >>> 0; //@line 7008
       if ($185) {
        _abort(); //@line 7010
       } else {
        SAFE_HEAP_STORE($$1198$i | 0, 0 | 0, 4);
        $$3$i = $$1196$i; //@line 7014
        break;
       }
      } else {
       $164 = $$0192$lcssa$i + 8 | 0; //@line 7018
       $165 = SAFE_HEAP_LOAD($164 | 0, 4, 0) | 0 | 0; //@line 7019
       $166 = $165 >>> 0 < $155 >>> 0; //@line 7020
       if ($166) {
        _abort(); //@line 7022
       }
       $167 = $165 + 12 | 0; //@line 7025
       $168 = SAFE_HEAP_LOAD($167 | 0, 4, 0) | 0 | 0; //@line 7026
       $169 = ($168 | 0) == ($$0192$lcssa$i | 0); //@line 7027
       if (!$169) {
        _abort(); //@line 7029
       }
       $170 = $162 + 8 | 0; //@line 7032
       $171 = SAFE_HEAP_LOAD($170 | 0, 4, 0) | 0 | 0; //@line 7033
       $172 = ($171 | 0) == ($$0192$lcssa$i | 0); //@line 7034
       if ($172) {
        SAFE_HEAP_STORE($167 | 0, $162 | 0, 4);
        SAFE_HEAP_STORE($170 | 0, $165 | 0, 4);
        $$3$i = $162; //@line 7038
        break;
       } else {
        _abort(); //@line 7041
       }
      }
     } while (0);
     $186 = ($160 | 0) == (0 | 0); //@line 7046
     L73 : do {
      if (!$186) {
       $187 = $$0192$lcssa$i + 28 | 0; //@line 7049
       $188 = SAFE_HEAP_LOAD($187 | 0, 4, 0) | 0 | 0; //@line 7050
       $189 = 6936 + ($188 << 2) | 0; //@line 7051
       $190 = SAFE_HEAP_LOAD($189 | 0, 4, 0) | 0 | 0; //@line 7052
       $191 = ($$0192$lcssa$i | 0) == ($190 | 0); //@line 7053
       do {
        if ($191) {
         SAFE_HEAP_STORE($189 | 0, $$3$i | 0, 4);
         $cond$i = ($$3$i | 0) == (0 | 0); //@line 7057
         if ($cond$i) {
          $192 = 1 << $188; //@line 7059
          $193 = $192 ^ -1; //@line 7060
          $194 = $108 & $193; //@line 7061
          SAFE_HEAP_STORE(6636 | 0, $194 | 0, 4);
          break L73;
         }
        } else {
         $195 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7066
         $196 = $160 >>> 0 < $195 >>> 0; //@line 7067
         if ($196) {
          _abort(); //@line 7069
         } else {
          $197 = $160 + 16 | 0; //@line 7072
          $198 = SAFE_HEAP_LOAD($197 | 0, 4, 0) | 0 | 0; //@line 7073
          $not$1$i = ($198 | 0) != ($$0192$lcssa$i | 0); //@line 7074
          $$sink2$i = $not$1$i & 1; //@line 7075
          $199 = ($160 + 16 | 0) + ($$sink2$i << 2) | 0; //@line 7076
          SAFE_HEAP_STORE($199 | 0, $$3$i | 0, 4);
          $200 = ($$3$i | 0) == (0 | 0); //@line 7078
          if ($200) {
           break L73;
          } else {
           break;
          }
         }
        }
       } while (0);
       $201 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7087
       $202 = $$3$i >>> 0 < $201 >>> 0; //@line 7088
       if ($202) {
        _abort(); //@line 7090
       }
       $203 = $$3$i + 24 | 0; //@line 7093
       SAFE_HEAP_STORE($203 | 0, $160 | 0, 4);
       $204 = $$0192$lcssa$i + 16 | 0; //@line 7095
       $205 = SAFE_HEAP_LOAD($204 | 0, 4, 0) | 0 | 0; //@line 7096
       $206 = ($205 | 0) == (0 | 0); //@line 7097
       do {
        if (!$206) {
         $207 = $205 >>> 0 < $201 >>> 0; //@line 7100
         if ($207) {
          _abort(); //@line 7102
         } else {
          $208 = $$3$i + 16 | 0; //@line 7105
          SAFE_HEAP_STORE($208 | 0, $205 | 0, 4);
          $209 = $205 + 24 | 0; //@line 7107
          SAFE_HEAP_STORE($209 | 0, $$3$i | 0, 4);
          break;
         }
        }
       } while (0);
       $210 = $$0192$lcssa$i + 20 | 0; //@line 7113
       $211 = SAFE_HEAP_LOAD($210 | 0, 4, 0) | 0 | 0; //@line 7114
       $212 = ($211 | 0) == (0 | 0); //@line 7115
       if (!$212) {
        $213 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7117
        $214 = $211 >>> 0 < $213 >>> 0; //@line 7118
        if ($214) {
         _abort(); //@line 7120
        } else {
         $215 = $$3$i + 20 | 0; //@line 7123
         SAFE_HEAP_STORE($215 | 0, $211 | 0, 4);
         $216 = $211 + 24 | 0; //@line 7125
         SAFE_HEAP_STORE($216 | 0, $$3$i | 0, 4);
         break;
        }
       }
      }
     } while (0);
     $217 = $$0193$lcssa$i >>> 0 < 16; //@line 7132
     if ($217) {
      $218 = $$0193$lcssa$i + $6 | 0; //@line 7134
      $219 = $218 | 3; //@line 7135
      $220 = $$0192$lcssa$i + 4 | 0; //@line 7136
      SAFE_HEAP_STORE($220 | 0, $219 | 0, 4);
      $221 = $$0192$lcssa$i + $218 | 0; //@line 7138
      $222 = $221 + 4 | 0; //@line 7139
      $223 = SAFE_HEAP_LOAD($222 | 0, 4, 0) | 0 | 0; //@line 7140
      $224 = $223 | 1; //@line 7141
      SAFE_HEAP_STORE($222 | 0, $224 | 0, 4);
     } else {
      $225 = $6 | 3; //@line 7144
      $226 = $$0192$lcssa$i + 4 | 0; //@line 7145
      SAFE_HEAP_STORE($226 | 0, $225 | 0, 4);
      $227 = $$0193$lcssa$i | 1; //@line 7147
      $228 = $157 + 4 | 0; //@line 7148
      SAFE_HEAP_STORE($228 | 0, $227 | 0, 4);
      $229 = $157 + $$0193$lcssa$i | 0; //@line 7150
      SAFE_HEAP_STORE($229 | 0, $$0193$lcssa$i | 0, 4);
      $230 = ($37 | 0) == 0; //@line 7152
      if (!$230) {
       $231 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 7154
       $232 = $37 >>> 3; //@line 7155
       $233 = $232 << 1; //@line 7156
       $234 = 6672 + ($233 << 2) | 0; //@line 7157
       $235 = 1 << $232; //@line 7158
       $236 = $8 & $235; //@line 7159
       $237 = ($236 | 0) == 0; //@line 7160
       if ($237) {
        $238 = $8 | $235; //@line 7162
        SAFE_HEAP_STORE(1658 * 4 | 0, $238 | 0, 4);
        $$pre$i = $234 + 8 | 0; //@line 7164
        $$0189$i = $234; //@line 7165
        $$pre$phi$iZ2D = $$pre$i; //@line 7165
       } else {
        $239 = $234 + 8 | 0; //@line 7167
        $240 = SAFE_HEAP_LOAD($239 | 0, 4, 0) | 0 | 0; //@line 7168
        $241 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7169
        $242 = $240 >>> 0 < $241 >>> 0; //@line 7170
        if ($242) {
         _abort(); //@line 7172
        } else {
         $$0189$i = $240; //@line 7175
         $$pre$phi$iZ2D = $239; //@line 7175
        }
       }
       SAFE_HEAP_STORE($$pre$phi$iZ2D | 0, $231 | 0, 4);
       $243 = $$0189$i + 12 | 0; //@line 7179
       SAFE_HEAP_STORE($243 | 0, $231 | 0, 4);
       $244 = $231 + 8 | 0; //@line 7181
       SAFE_HEAP_STORE($244 | 0, $$0189$i | 0, 4);
       $245 = $231 + 12 | 0; //@line 7183
       SAFE_HEAP_STORE($245 | 0, $234 | 0, 4);
      }
      SAFE_HEAP_STORE(6640 | 0, $$0193$lcssa$i | 0, 4);
      SAFE_HEAP_STORE(6652 | 0, $157 | 0, 4);
     }
     $246 = $$0192$lcssa$i + 8 | 0; //@line 7189
     $$0 = $246; //@line 7190
     STACKTOP = sp; //@line 7191
     return $$0 | 0; //@line 7191
    }
   } else {
    $$0197 = $6; //@line 7194
   }
  } else {
   $247 = $0 >>> 0 > 4294967231; //@line 7197
   if ($247) {
    $$0197 = -1; //@line 7199
   } else {
    $248 = $0 + 11 | 0; //@line 7201
    $249 = $248 & -8; //@line 7202
    $250 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 7203
    $251 = ($250 | 0) == 0; //@line 7204
    if ($251) {
     $$0197 = $249; //@line 7206
    } else {
     $252 = 0 - $249 | 0; //@line 7208
     $253 = $248 >>> 8; //@line 7209
     $254 = ($253 | 0) == 0; //@line 7210
     if ($254) {
      $$0358$i = 0; //@line 7212
     } else {
      $255 = $249 >>> 0 > 16777215; //@line 7214
      if ($255) {
       $$0358$i = 31; //@line 7216
      } else {
       $256 = $253 + 1048320 | 0; //@line 7218
       $257 = $256 >>> 16; //@line 7219
       $258 = $257 & 8; //@line 7220
       $259 = $253 << $258; //@line 7221
       $260 = $259 + 520192 | 0; //@line 7222
       $261 = $260 >>> 16; //@line 7223
       $262 = $261 & 4; //@line 7224
       $263 = $262 | $258; //@line 7225
       $264 = $259 << $262; //@line 7226
       $265 = $264 + 245760 | 0; //@line 7227
       $266 = $265 >>> 16; //@line 7228
       $267 = $266 & 2; //@line 7229
       $268 = $263 | $267; //@line 7230
       $269 = 14 - $268 | 0; //@line 7231
       $270 = $264 << $267; //@line 7232
       $271 = $270 >>> 15; //@line 7233
       $272 = $269 + $271 | 0; //@line 7234
       $273 = $272 << 1; //@line 7235
       $274 = $272 + 7 | 0; //@line 7236
       $275 = $249 >>> $274; //@line 7237
       $276 = $275 & 1; //@line 7238
       $277 = $276 | $273; //@line 7239
       $$0358$i = $277; //@line 7240
      }
     }
     $278 = 6936 + ($$0358$i << 2) | 0; //@line 7243
     $279 = SAFE_HEAP_LOAD($278 | 0, 4, 0) | 0 | 0; //@line 7244
     $280 = ($279 | 0) == (0 | 0); //@line 7245
     L117 : do {
      if ($280) {
       $$2355$i = 0; //@line 7248
       $$3$i201 = 0; //@line 7248
       $$3350$i = $252; //@line 7248
       label = 81; //@line 7249
      } else {
       $281 = ($$0358$i | 0) == 31; //@line 7251
       $282 = $$0358$i >>> 1; //@line 7252
       $283 = 25 - $282 | 0; //@line 7253
       $284 = $281 ? 0 : $283; //@line 7254
       $285 = $249 << $284; //@line 7255
       $$0342$i = 0; //@line 7256
       $$0347$i = $252; //@line 7256
       $$0353$i = $279; //@line 7256
       $$0359$i = $285; //@line 7256
       $$0362$i = 0; //@line 7256
       while (1) {
        $286 = $$0353$i + 4 | 0; //@line 7258
        $287 = SAFE_HEAP_LOAD($286 | 0, 4, 0) | 0 | 0; //@line 7259
        $288 = $287 & -8; //@line 7260
        $289 = $288 - $249 | 0; //@line 7261
        $290 = $289 >>> 0 < $$0347$i >>> 0; //@line 7262
        if ($290) {
         $291 = ($289 | 0) == 0; //@line 7264
         if ($291) {
          $$415$i = $$0353$i; //@line 7266
          $$435114$i = 0; //@line 7266
          $$435713$i = $$0353$i; //@line 7266
          label = 85; //@line 7267
          break L117;
         } else {
          $$1343$i = $$0353$i; //@line 7270
          $$1348$i = $289; //@line 7270
         }
        } else {
         $$1343$i = $$0342$i; //@line 7273
         $$1348$i = $$0347$i; //@line 7273
        }
        $292 = $$0353$i + 20 | 0; //@line 7275
        $293 = SAFE_HEAP_LOAD($292 | 0, 4, 0) | 0 | 0; //@line 7276
        $294 = $$0359$i >>> 31; //@line 7277
        $295 = ($$0353$i + 16 | 0) + ($294 << 2) | 0; //@line 7278
        $296 = SAFE_HEAP_LOAD($295 | 0, 4, 0) | 0 | 0; //@line 7279
        $297 = ($293 | 0) == (0 | 0); //@line 7280
        $298 = ($293 | 0) == ($296 | 0); //@line 7281
        $or$cond2$i = $297 | $298; //@line 7282
        $$1363$i = $or$cond2$i ? $$0362$i : $293; //@line 7283
        $299 = ($296 | 0) == (0 | 0); //@line 7284
        $not$8$i = $299 ^ 1; //@line 7285
        $300 = $not$8$i & 1; //@line 7286
        $$0359$$i = $$0359$i << $300; //@line 7287
        if ($299) {
         $$2355$i = $$1363$i; //@line 7289
         $$3$i201 = $$1343$i; //@line 7289
         $$3350$i = $$1348$i; //@line 7289
         label = 81; //@line 7290
         break;
        } else {
         $$0342$i = $$1343$i; //@line 7293
         $$0347$i = $$1348$i; //@line 7293
         $$0353$i = $296; //@line 7293
         $$0359$i = $$0359$$i; //@line 7293
         $$0362$i = $$1363$i; //@line 7293
        }
       }
      }
     } while (0);
     if ((label | 0) == 81) {
      $301 = ($$2355$i | 0) == (0 | 0); //@line 7299
      $302 = ($$3$i201 | 0) == (0 | 0); //@line 7300
      $or$cond$i = $301 & $302; //@line 7301
      if ($or$cond$i) {
       $303 = 2 << $$0358$i; //@line 7303
       $304 = 0 - $303 | 0; //@line 7304
       $305 = $303 | $304; //@line 7305
       $306 = $250 & $305; //@line 7306
       $307 = ($306 | 0) == 0; //@line 7307
       if ($307) {
        $$0197 = $249; //@line 7309
        break;
       }
       $308 = 0 - $306 | 0; //@line 7312
       $309 = $306 & $308; //@line 7313
       $310 = $309 + -1 | 0; //@line 7314
       $311 = $310 >>> 12; //@line 7315
       $312 = $311 & 16; //@line 7316
       $313 = $310 >>> $312; //@line 7317
       $314 = $313 >>> 5; //@line 7318
       $315 = $314 & 8; //@line 7319
       $316 = $315 | $312; //@line 7320
       $317 = $313 >>> $315; //@line 7321
       $318 = $317 >>> 2; //@line 7322
       $319 = $318 & 4; //@line 7323
       $320 = $316 | $319; //@line 7324
       $321 = $317 >>> $319; //@line 7325
       $322 = $321 >>> 1; //@line 7326
       $323 = $322 & 2; //@line 7327
       $324 = $320 | $323; //@line 7328
       $325 = $321 >>> $323; //@line 7329
       $326 = $325 >>> 1; //@line 7330
       $327 = $326 & 1; //@line 7331
       $328 = $324 | $327; //@line 7332
       $329 = $325 >>> $327; //@line 7333
       $330 = $328 + $329 | 0; //@line 7334
       $331 = 6936 + ($330 << 2) | 0; //@line 7335
       $332 = SAFE_HEAP_LOAD($331 | 0, 4, 0) | 0 | 0; //@line 7336
       $$4$ph$i = 0; //@line 7337
       $$4357$ph$i = $332; //@line 7337
      } else {
       $$4$ph$i = $$3$i201; //@line 7339
       $$4357$ph$i = $$2355$i; //@line 7339
      }
      $333 = ($$4357$ph$i | 0) == (0 | 0); //@line 7341
      if ($333) {
       $$4$lcssa$i = $$4$ph$i; //@line 7343
       $$4351$lcssa$i = $$3350$i; //@line 7343
      } else {
       $$415$i = $$4$ph$i; //@line 7345
       $$435114$i = $$3350$i; //@line 7345
       $$435713$i = $$4357$ph$i; //@line 7345
       label = 85; //@line 7346
      }
     }
     if ((label | 0) == 85) {
      while (1) {
       label = 0; //@line 7351
       $334 = $$435713$i + 4 | 0; //@line 7352
       $335 = SAFE_HEAP_LOAD($334 | 0, 4, 0) | 0 | 0; //@line 7353
       $336 = $335 & -8; //@line 7354
       $337 = $336 - $249 | 0; //@line 7355
       $338 = $337 >>> 0 < $$435114$i >>> 0; //@line 7356
       $$$4351$i = $338 ? $337 : $$435114$i; //@line 7357
       $$4357$$4$i = $338 ? $$435713$i : $$415$i; //@line 7358
       $339 = $$435713$i + 16 | 0; //@line 7359
       $340 = SAFE_HEAP_LOAD($339 | 0, 4, 0) | 0 | 0; //@line 7360
       $not$1$i203 = ($340 | 0) == (0 | 0); //@line 7361
       $$sink2$i204 = $not$1$i203 & 1; //@line 7362
       $341 = ($$435713$i + 16 | 0) + ($$sink2$i204 << 2) | 0; //@line 7363
       $342 = SAFE_HEAP_LOAD($341 | 0, 4, 0) | 0 | 0; //@line 7364
       $343 = ($342 | 0) == (0 | 0); //@line 7365
       if ($343) {
        $$4$lcssa$i = $$4357$$4$i; //@line 7367
        $$4351$lcssa$i = $$$4351$i; //@line 7367
        break;
       } else {
        $$415$i = $$4357$$4$i; //@line 7370
        $$435114$i = $$$4351$i; //@line 7370
        $$435713$i = $342; //@line 7370
        label = 85; //@line 7371
       }
      }
     }
     $344 = ($$4$lcssa$i | 0) == (0 | 0); //@line 7375
     if ($344) {
      $$0197 = $249; //@line 7377
     } else {
      $345 = SAFE_HEAP_LOAD(6640 | 0, 4, 0) | 0 | 0; //@line 7379
      $346 = $345 - $249 | 0; //@line 7380
      $347 = $$4351$lcssa$i >>> 0 < $346 >>> 0; //@line 7381
      if ($347) {
       $348 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7383
       $349 = $$4$lcssa$i >>> 0 < $348 >>> 0; //@line 7384
       if ($349) {
        _abort(); //@line 7386
       }
       $350 = $$4$lcssa$i + $249 | 0; //@line 7389
       $351 = $$4$lcssa$i >>> 0 < $350 >>> 0; //@line 7390
       if (!$351) {
        _abort(); //@line 7392
       }
       $352 = $$4$lcssa$i + 24 | 0; //@line 7395
       $353 = SAFE_HEAP_LOAD($352 | 0, 4, 0) | 0 | 0; //@line 7396
       $354 = $$4$lcssa$i + 12 | 0; //@line 7397
       $355 = SAFE_HEAP_LOAD($354 | 0, 4, 0) | 0 | 0; //@line 7398
       $356 = ($355 | 0) == ($$4$lcssa$i | 0); //@line 7399
       do {
        if ($356) {
         $366 = $$4$lcssa$i + 20 | 0; //@line 7402
         $367 = SAFE_HEAP_LOAD($366 | 0, 4, 0) | 0 | 0; //@line 7403
         $368 = ($367 | 0) == (0 | 0); //@line 7404
         if ($368) {
          $369 = $$4$lcssa$i + 16 | 0; //@line 7406
          $370 = SAFE_HEAP_LOAD($369 | 0, 4, 0) | 0 | 0; //@line 7407
          $371 = ($370 | 0) == (0 | 0); //@line 7408
          if ($371) {
           $$3372$i = 0; //@line 7410
           break;
          } else {
           $$1370$i = $370; //@line 7413
           $$1374$i = $369; //@line 7413
          }
         } else {
          $$1370$i = $367; //@line 7416
          $$1374$i = $366; //@line 7416
         }
         while (1) {
          $372 = $$1370$i + 20 | 0; //@line 7419
          $373 = SAFE_HEAP_LOAD($372 | 0, 4, 0) | 0 | 0; //@line 7420
          $374 = ($373 | 0) == (0 | 0); //@line 7421
          if (!$374) {
           $$1370$i = $373; //@line 7423
           $$1374$i = $372; //@line 7423
           continue;
          }
          $375 = $$1370$i + 16 | 0; //@line 7426
          $376 = SAFE_HEAP_LOAD($375 | 0, 4, 0) | 0 | 0; //@line 7427
          $377 = ($376 | 0) == (0 | 0); //@line 7428
          if ($377) {
           break;
          } else {
           $$1370$i = $376; //@line 7432
           $$1374$i = $375; //@line 7432
          }
         }
         $378 = $$1374$i >>> 0 < $348 >>> 0; //@line 7435
         if ($378) {
          _abort(); //@line 7437
         } else {
          SAFE_HEAP_STORE($$1374$i | 0, 0 | 0, 4);
          $$3372$i = $$1370$i; //@line 7441
          break;
         }
        } else {
         $357 = $$4$lcssa$i + 8 | 0; //@line 7445
         $358 = SAFE_HEAP_LOAD($357 | 0, 4, 0) | 0 | 0; //@line 7446
         $359 = $358 >>> 0 < $348 >>> 0; //@line 7447
         if ($359) {
          _abort(); //@line 7449
         }
         $360 = $358 + 12 | 0; //@line 7452
         $361 = SAFE_HEAP_LOAD($360 | 0, 4, 0) | 0 | 0; //@line 7453
         $362 = ($361 | 0) == ($$4$lcssa$i | 0); //@line 7454
         if (!$362) {
          _abort(); //@line 7456
         }
         $363 = $355 + 8 | 0; //@line 7459
         $364 = SAFE_HEAP_LOAD($363 | 0, 4, 0) | 0 | 0; //@line 7460
         $365 = ($364 | 0) == ($$4$lcssa$i | 0); //@line 7461
         if ($365) {
          SAFE_HEAP_STORE($360 | 0, $355 | 0, 4);
          SAFE_HEAP_STORE($363 | 0, $358 | 0, 4);
          $$3372$i = $355; //@line 7465
          break;
         } else {
          _abort(); //@line 7468
         }
        }
       } while (0);
       $379 = ($353 | 0) == (0 | 0); //@line 7473
       L164 : do {
        if ($379) {
         $470 = $250; //@line 7476
        } else {
         $380 = $$4$lcssa$i + 28 | 0; //@line 7478
         $381 = SAFE_HEAP_LOAD($380 | 0, 4, 0) | 0 | 0; //@line 7479
         $382 = 6936 + ($381 << 2) | 0; //@line 7480
         $383 = SAFE_HEAP_LOAD($382 | 0, 4, 0) | 0 | 0; //@line 7481
         $384 = ($$4$lcssa$i | 0) == ($383 | 0); //@line 7482
         do {
          if ($384) {
           SAFE_HEAP_STORE($382 | 0, $$3372$i | 0, 4);
           $cond$i208 = ($$3372$i | 0) == (0 | 0); //@line 7486
           if ($cond$i208) {
            $385 = 1 << $381; //@line 7488
            $386 = $385 ^ -1; //@line 7489
            $387 = $250 & $386; //@line 7490
            SAFE_HEAP_STORE(6636 | 0, $387 | 0, 4);
            $470 = $387; //@line 7492
            break L164;
           }
          } else {
           $388 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7496
           $389 = $353 >>> 0 < $388 >>> 0; //@line 7497
           if ($389) {
            _abort(); //@line 7499
           } else {
            $390 = $353 + 16 | 0; //@line 7502
            $391 = SAFE_HEAP_LOAD($390 | 0, 4, 0) | 0 | 0; //@line 7503
            $not$$i209 = ($391 | 0) != ($$4$lcssa$i | 0); //@line 7504
            $$sink3$i = $not$$i209 & 1; //@line 7505
            $392 = ($353 + 16 | 0) + ($$sink3$i << 2) | 0; //@line 7506
            SAFE_HEAP_STORE($392 | 0, $$3372$i | 0, 4);
            $393 = ($$3372$i | 0) == (0 | 0); //@line 7508
            if ($393) {
             $470 = $250; //@line 7510
             break L164;
            } else {
             break;
            }
           }
          }
         } while (0);
         $394 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7518
         $395 = $$3372$i >>> 0 < $394 >>> 0; //@line 7519
         if ($395) {
          _abort(); //@line 7521
         }
         $396 = $$3372$i + 24 | 0; //@line 7524
         SAFE_HEAP_STORE($396 | 0, $353 | 0, 4);
         $397 = $$4$lcssa$i + 16 | 0; //@line 7526
         $398 = SAFE_HEAP_LOAD($397 | 0, 4, 0) | 0 | 0; //@line 7527
         $399 = ($398 | 0) == (0 | 0); //@line 7528
         do {
          if (!$399) {
           $400 = $398 >>> 0 < $394 >>> 0; //@line 7531
           if ($400) {
            _abort(); //@line 7533
           } else {
            $401 = $$3372$i + 16 | 0; //@line 7536
            SAFE_HEAP_STORE($401 | 0, $398 | 0, 4);
            $402 = $398 + 24 | 0; //@line 7538
            SAFE_HEAP_STORE($402 | 0, $$3372$i | 0, 4);
            break;
           }
          }
         } while (0);
         $403 = $$4$lcssa$i + 20 | 0; //@line 7544
         $404 = SAFE_HEAP_LOAD($403 | 0, 4, 0) | 0 | 0; //@line 7545
         $405 = ($404 | 0) == (0 | 0); //@line 7546
         if ($405) {
          $470 = $250; //@line 7548
         } else {
          $406 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7550
          $407 = $404 >>> 0 < $406 >>> 0; //@line 7551
          if ($407) {
           _abort(); //@line 7553
          } else {
           $408 = $$3372$i + 20 | 0; //@line 7556
           SAFE_HEAP_STORE($408 | 0, $404 | 0, 4);
           $409 = $404 + 24 | 0; //@line 7558
           SAFE_HEAP_STORE($409 | 0, $$3372$i | 0, 4);
           $470 = $250; //@line 7560
           break;
          }
         }
        }
       } while (0);
       $410 = $$4351$lcssa$i >>> 0 < 16; //@line 7566
       do {
        if ($410) {
         $411 = $$4351$lcssa$i + $249 | 0; //@line 7569
         $412 = $411 | 3; //@line 7570
         $413 = $$4$lcssa$i + 4 | 0; //@line 7571
         SAFE_HEAP_STORE($413 | 0, $412 | 0, 4);
         $414 = $$4$lcssa$i + $411 | 0; //@line 7573
         $415 = $414 + 4 | 0; //@line 7574
         $416 = SAFE_HEAP_LOAD($415 | 0, 4, 0) | 0 | 0; //@line 7575
         $417 = $416 | 1; //@line 7576
         SAFE_HEAP_STORE($415 | 0, $417 | 0, 4);
        } else {
         $418 = $249 | 3; //@line 7579
         $419 = $$4$lcssa$i + 4 | 0; //@line 7580
         SAFE_HEAP_STORE($419 | 0, $418 | 0, 4);
         $420 = $$4351$lcssa$i | 1; //@line 7582
         $421 = $350 + 4 | 0; //@line 7583
         SAFE_HEAP_STORE($421 | 0, $420 | 0, 4);
         $422 = $350 + $$4351$lcssa$i | 0; //@line 7585
         SAFE_HEAP_STORE($422 | 0, $$4351$lcssa$i | 0, 4);
         $423 = $$4351$lcssa$i >>> 3; //@line 7587
         $424 = $$4351$lcssa$i >>> 0 < 256; //@line 7588
         if ($424) {
          $425 = $423 << 1; //@line 7590
          $426 = 6672 + ($425 << 2) | 0; //@line 7591
          $427 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 7592
          $428 = 1 << $423; //@line 7593
          $429 = $427 & $428; //@line 7594
          $430 = ($429 | 0) == 0; //@line 7595
          if ($430) {
           $431 = $427 | $428; //@line 7597
           SAFE_HEAP_STORE(1658 * 4 | 0, $431 | 0, 4);
           $$pre$i210 = $426 + 8 | 0; //@line 7599
           $$0368$i = $426; //@line 7600
           $$pre$phi$i211Z2D = $$pre$i210; //@line 7600
          } else {
           $432 = $426 + 8 | 0; //@line 7602
           $433 = SAFE_HEAP_LOAD($432 | 0, 4, 0) | 0 | 0; //@line 7603
           $434 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7604
           $435 = $433 >>> 0 < $434 >>> 0; //@line 7605
           if ($435) {
            _abort(); //@line 7607
           } else {
            $$0368$i = $433; //@line 7610
            $$pre$phi$i211Z2D = $432; //@line 7610
           }
          }
          SAFE_HEAP_STORE($$pre$phi$i211Z2D | 0, $350 | 0, 4);
          $436 = $$0368$i + 12 | 0; //@line 7614
          SAFE_HEAP_STORE($436 | 0, $350 | 0, 4);
          $437 = $350 + 8 | 0; //@line 7616
          SAFE_HEAP_STORE($437 | 0, $$0368$i | 0, 4);
          $438 = $350 + 12 | 0; //@line 7618
          SAFE_HEAP_STORE($438 | 0, $426 | 0, 4);
          break;
         }
         $439 = $$4351$lcssa$i >>> 8; //@line 7622
         $440 = ($439 | 0) == 0; //@line 7623
         if ($440) {
          $$0361$i = 0; //@line 7625
         } else {
          $441 = $$4351$lcssa$i >>> 0 > 16777215; //@line 7627
          if ($441) {
           $$0361$i = 31; //@line 7629
          } else {
           $442 = $439 + 1048320 | 0; //@line 7631
           $443 = $442 >>> 16; //@line 7632
           $444 = $443 & 8; //@line 7633
           $445 = $439 << $444; //@line 7634
           $446 = $445 + 520192 | 0; //@line 7635
           $447 = $446 >>> 16; //@line 7636
           $448 = $447 & 4; //@line 7637
           $449 = $448 | $444; //@line 7638
           $450 = $445 << $448; //@line 7639
           $451 = $450 + 245760 | 0; //@line 7640
           $452 = $451 >>> 16; //@line 7641
           $453 = $452 & 2; //@line 7642
           $454 = $449 | $453; //@line 7643
           $455 = 14 - $454 | 0; //@line 7644
           $456 = $450 << $453; //@line 7645
           $457 = $456 >>> 15; //@line 7646
           $458 = $455 + $457 | 0; //@line 7647
           $459 = $458 << 1; //@line 7648
           $460 = $458 + 7 | 0; //@line 7649
           $461 = $$4351$lcssa$i >>> $460; //@line 7650
           $462 = $461 & 1; //@line 7651
           $463 = $462 | $459; //@line 7652
           $$0361$i = $463; //@line 7653
          }
         }
         $464 = 6936 + ($$0361$i << 2) | 0; //@line 7656
         $465 = $350 + 28 | 0; //@line 7657
         SAFE_HEAP_STORE($465 | 0, $$0361$i | 0, 4);
         $466 = $350 + 16 | 0; //@line 7659
         $467 = $466 + 4 | 0; //@line 7660
         SAFE_HEAP_STORE($467 | 0, 0 | 0, 4);
         SAFE_HEAP_STORE($466 | 0, 0 | 0, 4);
         $468 = 1 << $$0361$i; //@line 7663
         $469 = $470 & $468; //@line 7664
         $471 = ($469 | 0) == 0; //@line 7665
         if ($471) {
          $472 = $470 | $468; //@line 7667
          SAFE_HEAP_STORE(6636 | 0, $472 | 0, 4);
          SAFE_HEAP_STORE($464 | 0, $350 | 0, 4);
          $473 = $350 + 24 | 0; //@line 7670
          SAFE_HEAP_STORE($473 | 0, $464 | 0, 4);
          $474 = $350 + 12 | 0; //@line 7672
          SAFE_HEAP_STORE($474 | 0, $350 | 0, 4);
          $475 = $350 + 8 | 0; //@line 7674
          SAFE_HEAP_STORE($475 | 0, $350 | 0, 4);
          break;
         }
         $476 = SAFE_HEAP_LOAD($464 | 0, 4, 0) | 0 | 0; //@line 7678
         $477 = ($$0361$i | 0) == 31; //@line 7679
         $478 = $$0361$i >>> 1; //@line 7680
         $479 = 25 - $478 | 0; //@line 7681
         $480 = $477 ? 0 : $479; //@line 7682
         $481 = $$4351$lcssa$i << $480; //@line 7683
         $$0344$i = $481; //@line 7684
         $$0345$i = $476; //@line 7684
         while (1) {
          $482 = $$0345$i + 4 | 0; //@line 7686
          $483 = SAFE_HEAP_LOAD($482 | 0, 4, 0) | 0 | 0; //@line 7687
          $484 = $483 & -8; //@line 7688
          $485 = ($484 | 0) == ($$4351$lcssa$i | 0); //@line 7689
          if ($485) {
           label = 139; //@line 7691
           break;
          }
          $486 = $$0344$i >>> 31; //@line 7694
          $487 = ($$0345$i + 16 | 0) + ($486 << 2) | 0; //@line 7695
          $488 = $$0344$i << 1; //@line 7696
          $489 = SAFE_HEAP_LOAD($487 | 0, 4, 0) | 0 | 0; //@line 7697
          $490 = ($489 | 0) == (0 | 0); //@line 7698
          if ($490) {
           label = 136; //@line 7700
           break;
          } else {
           $$0344$i = $488; //@line 7703
           $$0345$i = $489; //@line 7703
          }
         }
         if ((label | 0) == 136) {
          $491 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7707
          $492 = $487 >>> 0 < $491 >>> 0; //@line 7708
          if ($492) {
           _abort(); //@line 7710
          } else {
           SAFE_HEAP_STORE($487 | 0, $350 | 0, 4);
           $493 = $350 + 24 | 0; //@line 7714
           SAFE_HEAP_STORE($493 | 0, $$0345$i | 0, 4);
           $494 = $350 + 12 | 0; //@line 7716
           SAFE_HEAP_STORE($494 | 0, $350 | 0, 4);
           $495 = $350 + 8 | 0; //@line 7718
           SAFE_HEAP_STORE($495 | 0, $350 | 0, 4);
           break;
          }
         } else if ((label | 0) == 139) {
          $496 = $$0345$i + 8 | 0; //@line 7724
          $497 = SAFE_HEAP_LOAD($496 | 0, 4, 0) | 0 | 0; //@line 7725
          $498 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 7726
          $499 = $497 >>> 0 >= $498 >>> 0; //@line 7727
          $not$9$i = $$0345$i >>> 0 >= $498 >>> 0; //@line 7728
          $500 = $499 & $not$9$i; //@line 7729
          if ($500) {
           $501 = $497 + 12 | 0; //@line 7731
           SAFE_HEAP_STORE($501 | 0, $350 | 0, 4);
           SAFE_HEAP_STORE($496 | 0, $350 | 0, 4);
           $502 = $350 + 8 | 0; //@line 7734
           SAFE_HEAP_STORE($502 | 0, $497 | 0, 4);
           $503 = $350 + 12 | 0; //@line 7736
           SAFE_HEAP_STORE($503 | 0, $$0345$i | 0, 4);
           $504 = $350 + 24 | 0; //@line 7738
           SAFE_HEAP_STORE($504 | 0, 0 | 0, 4);
           break;
          } else {
           _abort(); //@line 7742
          }
         }
        }
       } while (0);
       $505 = $$4$lcssa$i + 8 | 0; //@line 7748
       $$0 = $505; //@line 7749
       STACKTOP = sp; //@line 7750
       return $$0 | 0; //@line 7750
      } else {
       $$0197 = $249; //@line 7752
      }
     }
    }
   }
  }
 } while (0);
 $506 = SAFE_HEAP_LOAD(6640 | 0, 4, 0) | 0 | 0; //@line 7759
 $507 = $506 >>> 0 < $$0197 >>> 0; //@line 7760
 if (!$507) {
  $508 = $506 - $$0197 | 0; //@line 7762
  $509 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 7763
  $510 = $508 >>> 0 > 15; //@line 7764
  if ($510) {
   $511 = $509 + $$0197 | 0; //@line 7766
   SAFE_HEAP_STORE(6652 | 0, $511 | 0, 4);
   SAFE_HEAP_STORE(6640 | 0, $508 | 0, 4);
   $512 = $508 | 1; //@line 7769
   $513 = $511 + 4 | 0; //@line 7770
   SAFE_HEAP_STORE($513 | 0, $512 | 0, 4);
   $514 = $511 + $508 | 0; //@line 7772
   SAFE_HEAP_STORE($514 | 0, $508 | 0, 4);
   $515 = $$0197 | 3; //@line 7774
   $516 = $509 + 4 | 0; //@line 7775
   SAFE_HEAP_STORE($516 | 0, $515 | 0, 4);
  } else {
   SAFE_HEAP_STORE(6640 | 0, 0 | 0, 4);
   SAFE_HEAP_STORE(6652 | 0, 0 | 0, 4);
   $517 = $506 | 3; //@line 7780
   $518 = $509 + 4 | 0; //@line 7781
   SAFE_HEAP_STORE($518 | 0, $517 | 0, 4);
   $519 = $509 + $506 | 0; //@line 7783
   $520 = $519 + 4 | 0; //@line 7784
   $521 = SAFE_HEAP_LOAD($520 | 0, 4, 0) | 0 | 0; //@line 7785
   $522 = $521 | 1; //@line 7786
   SAFE_HEAP_STORE($520 | 0, $522 | 0, 4);
  }
  $523 = $509 + 8 | 0; //@line 7789
  $$0 = $523; //@line 7790
  STACKTOP = sp; //@line 7791
  return $$0 | 0; //@line 7791
 }
 $524 = SAFE_HEAP_LOAD(6644 | 0, 4, 0) | 0 | 0; //@line 7793
 $525 = $524 >>> 0 > $$0197 >>> 0; //@line 7794
 if ($525) {
  $526 = $524 - $$0197 | 0; //@line 7796
  SAFE_HEAP_STORE(6644 | 0, $526 | 0, 4);
  $527 = SAFE_HEAP_LOAD(6656 | 0, 4, 0) | 0 | 0; //@line 7798
  $528 = $527 + $$0197 | 0; //@line 7799
  SAFE_HEAP_STORE(6656 | 0, $528 | 0, 4);
  $529 = $526 | 1; //@line 7801
  $530 = $528 + 4 | 0; //@line 7802
  SAFE_HEAP_STORE($530 | 0, $529 | 0, 4);
  $531 = $$0197 | 3; //@line 7804
  $532 = $527 + 4 | 0; //@line 7805
  SAFE_HEAP_STORE($532 | 0, $531 | 0, 4);
  $533 = $527 + 8 | 0; //@line 7807
  $$0 = $533; //@line 7808
  STACKTOP = sp; //@line 7809
  return $$0 | 0; //@line 7809
 }
 $534 = SAFE_HEAP_LOAD(1776 * 4 | 0, 4, 0) | 0 | 0; //@line 7811
 $535 = ($534 | 0) == 0; //@line 7812
 if ($535) {
  SAFE_HEAP_STORE(7112 | 0, 4096 | 0, 4);
  SAFE_HEAP_STORE(7108 | 0, 4096 | 0, 4);
  SAFE_HEAP_STORE(7116 | 0, -1 | 0, 4);
  SAFE_HEAP_STORE(7120 | 0, -1 | 0, 4);
  SAFE_HEAP_STORE(7124 | 0, 0 | 0, 4);
  SAFE_HEAP_STORE(7076 | 0, 0 | 0, 4);
  $536 = $1; //@line 7820
  $537 = $536 & -16; //@line 7821
  $538 = $537 ^ 1431655768; //@line 7822
  SAFE_HEAP_STORE($1 | 0, $538 | 0, 4);
  SAFE_HEAP_STORE(1776 * 4 | 0, $538 | 0, 4);
  $542 = 4096; //@line 7825
 } else {
  $$pre$i212 = SAFE_HEAP_LOAD(7112 | 0, 4, 0) | 0 | 0; //@line 7827
  $542 = $$pre$i212; //@line 7828
 }
 $539 = $$0197 + 48 | 0; //@line 7830
 $540 = $$0197 + 47 | 0; //@line 7831
 $541 = $542 + $540 | 0; //@line 7832
 $543 = 0 - $542 | 0; //@line 7833
 $544 = $541 & $543; //@line 7834
 $545 = $544 >>> 0 > $$0197 >>> 0; //@line 7835
 if (!$545) {
  $$0 = 0; //@line 7837
  STACKTOP = sp; //@line 7838
  return $$0 | 0; //@line 7838
 }
 $546 = SAFE_HEAP_LOAD(7072 | 0, 4, 0) | 0 | 0; //@line 7840
 $547 = ($546 | 0) == 0; //@line 7841
 if (!$547) {
  $548 = SAFE_HEAP_LOAD(7064 | 0, 4, 0) | 0 | 0; //@line 7843
  $549 = $548 + $544 | 0; //@line 7844
  $550 = $549 >>> 0 <= $548 >>> 0; //@line 7845
  $551 = $549 >>> 0 > $546 >>> 0; //@line 7846
  $or$cond1$i = $550 | $551; //@line 7847
  if ($or$cond1$i) {
   $$0 = 0; //@line 7849
   STACKTOP = sp; //@line 7850
   return $$0 | 0; //@line 7850
  }
 }
 $552 = SAFE_HEAP_LOAD(7076 | 0, 4, 0) | 0 | 0; //@line 7853
 $553 = $552 & 4; //@line 7854
 $554 = ($553 | 0) == 0; //@line 7855
 L244 : do {
  if ($554) {
   $555 = SAFE_HEAP_LOAD(6656 | 0, 4, 0) | 0 | 0; //@line 7858
   $556 = ($555 | 0) == (0 | 0); //@line 7859
   L246 : do {
    if ($556) {
     label = 163; //@line 7862
    } else {
     $$0$i$i = 7080; //@line 7864
     while (1) {
      $557 = SAFE_HEAP_LOAD($$0$i$i | 0, 4, 0) | 0 | 0; //@line 7866
      $558 = $557 >>> 0 > $555 >>> 0; //@line 7867
      if (!$558) {
       $559 = $$0$i$i + 4 | 0; //@line 7869
       $560 = SAFE_HEAP_LOAD($559 | 0, 4, 0) | 0 | 0; //@line 7870
       $561 = $557 + $560 | 0; //@line 7871
       $562 = $561 >>> 0 > $555 >>> 0; //@line 7872
       if ($562) {
        break;
       }
      }
      $563 = $$0$i$i + 8 | 0; //@line 7877
      $564 = SAFE_HEAP_LOAD($563 | 0, 4, 0) | 0 | 0; //@line 7878
      $565 = ($564 | 0) == (0 | 0); //@line 7879
      if ($565) {
       label = 163; //@line 7881
       break L246;
      } else {
       $$0$i$i = $564; //@line 7884
      }
     }
     $588 = $541 - $524 | 0; //@line 7887
     $589 = $588 & $543; //@line 7888
     $590 = $589 >>> 0 < 2147483647; //@line 7889
     if ($590) {
      $591 = _sbrk($589 | 0) | 0; //@line 7891
      $592 = SAFE_HEAP_LOAD($$0$i$i | 0, 4, 0) | 0 | 0; //@line 7892
      $593 = SAFE_HEAP_LOAD($559 | 0, 4, 0) | 0 | 0; //@line 7893
      $594 = $592 + $593 | 0; //@line 7894
      $595 = ($591 | 0) == ($594 | 0); //@line 7895
      if ($595) {
       $596 = ($591 | 0) == (-1 | 0); //@line 7897
       if ($596) {
        $$2234253237$i = $589; //@line 7899
       } else {
        $$723948$i = $589; //@line 7901
        $$749$i = $591; //@line 7901
        label = 180; //@line 7902
        break L244;
       }
      } else {
       $$2247$ph$i = $591; //@line 7906
       $$2253$ph$i = $589; //@line 7906
       label = 171; //@line 7907
      }
     } else {
      $$2234253237$i = 0; //@line 7910
     }
    }
   } while (0);
   do {
    if ((label | 0) == 163) {
     $566 = _sbrk(0) | 0; //@line 7916
     $567 = ($566 | 0) == (-1 | 0); //@line 7917
     if ($567) {
      $$2234253237$i = 0; //@line 7919
     } else {
      $568 = $566; //@line 7921
      $569 = SAFE_HEAP_LOAD(7108 | 0, 4, 0) | 0 | 0; //@line 7922
      $570 = $569 + -1 | 0; //@line 7923
      $571 = $570 & $568; //@line 7924
      $572 = ($571 | 0) == 0; //@line 7925
      $573 = $570 + $568 | 0; //@line 7926
      $574 = 0 - $569 | 0; //@line 7927
      $575 = $573 & $574; //@line 7928
      $576 = $575 - $568 | 0; //@line 7929
      $577 = $572 ? 0 : $576; //@line 7930
      $$$i = $577 + $544 | 0; //@line 7931
      $578 = SAFE_HEAP_LOAD(7064 | 0, 4, 0) | 0 | 0; //@line 7932
      $579 = $$$i + $578 | 0; //@line 7933
      $580 = $$$i >>> 0 > $$0197 >>> 0; //@line 7934
      $581 = $$$i >>> 0 < 2147483647; //@line 7935
      $or$cond$i214 = $580 & $581; //@line 7936
      if ($or$cond$i214) {
       $582 = SAFE_HEAP_LOAD(7072 | 0, 4, 0) | 0 | 0; //@line 7938
       $583 = ($582 | 0) == 0; //@line 7939
       if (!$583) {
        $584 = $579 >>> 0 <= $578 >>> 0; //@line 7941
        $585 = $579 >>> 0 > $582 >>> 0; //@line 7942
        $or$cond2$i215 = $584 | $585; //@line 7943
        if ($or$cond2$i215) {
         $$2234253237$i = 0; //@line 7945
         break;
        }
       }
       $586 = _sbrk($$$i | 0) | 0; //@line 7949
       $587 = ($586 | 0) == ($566 | 0); //@line 7950
       if ($587) {
        $$723948$i = $$$i; //@line 7952
        $$749$i = $566; //@line 7952
        label = 180; //@line 7953
        break L244;
       } else {
        $$2247$ph$i = $586; //@line 7956
        $$2253$ph$i = $$$i; //@line 7956
        label = 171; //@line 7957
       }
      } else {
       $$2234253237$i = 0; //@line 7960
      }
     }
    }
   } while (0);
   do {
    if ((label | 0) == 171) {
     $597 = 0 - $$2253$ph$i | 0; //@line 7967
     $598 = ($$2247$ph$i | 0) != (-1 | 0); //@line 7968
     $599 = $$2253$ph$i >>> 0 < 2147483647; //@line 7969
     $or$cond7$i = $599 & $598; //@line 7970
     $600 = $539 >>> 0 > $$2253$ph$i >>> 0; //@line 7971
     $or$cond10$i = $600 & $or$cond7$i; //@line 7972
     if (!$or$cond10$i) {
      $610 = ($$2247$ph$i | 0) == (-1 | 0); //@line 7974
      if ($610) {
       $$2234253237$i = 0; //@line 7976
       break;
      } else {
       $$723948$i = $$2253$ph$i; //@line 7979
       $$749$i = $$2247$ph$i; //@line 7979
       label = 180; //@line 7980
       break L244;
      }
     }
     $601 = SAFE_HEAP_LOAD(7112 | 0, 4, 0) | 0 | 0; //@line 7984
     $602 = $540 - $$2253$ph$i | 0; //@line 7985
     $603 = $602 + $601 | 0; //@line 7986
     $604 = 0 - $601 | 0; //@line 7987
     $605 = $603 & $604; //@line 7988
     $606 = $605 >>> 0 < 2147483647; //@line 7989
     if (!$606) {
      $$723948$i = $$2253$ph$i; //@line 7991
      $$749$i = $$2247$ph$i; //@line 7991
      label = 180; //@line 7992
      break L244;
     }
     $607 = _sbrk($605 | 0) | 0; //@line 7995
     $608 = ($607 | 0) == (-1 | 0); //@line 7996
     if ($608) {
      _sbrk($597 | 0) | 0; //@line 7998
      $$2234253237$i = 0; //@line 7999
      break;
     } else {
      $609 = $605 + $$2253$ph$i | 0; //@line 8002
      $$723948$i = $609; //@line 8003
      $$749$i = $$2247$ph$i; //@line 8003
      label = 180; //@line 8004
      break L244;
     }
    }
   } while (0);
   $611 = SAFE_HEAP_LOAD(7076 | 0, 4, 0) | 0 | 0; //@line 8009
   $612 = $611 | 4; //@line 8010
   SAFE_HEAP_STORE(7076 | 0, $612 | 0, 4);
   $$4236$i = $$2234253237$i; //@line 8012
   label = 178; //@line 8013
  } else {
   $$4236$i = 0; //@line 8015
   label = 178; //@line 8016
  }
 } while (0);
 if ((label | 0) == 178) {
  $613 = $544 >>> 0 < 2147483647; //@line 8020
  if ($613) {
   $614 = _sbrk($544 | 0) | 0; //@line 8022
   $615 = _sbrk(0) | 0; //@line 8023
   $616 = ($614 | 0) != (-1 | 0); //@line 8024
   $617 = ($615 | 0) != (-1 | 0); //@line 8025
   $or$cond5$i = $616 & $617; //@line 8026
   $618 = $614 >>> 0 < $615 >>> 0; //@line 8027
   $or$cond11$i = $618 & $or$cond5$i; //@line 8028
   $619 = $615; //@line 8029
   $620 = $614; //@line 8030
   $621 = $619 - $620 | 0; //@line 8031
   $622 = $$0197 + 40 | 0; //@line 8032
   $623 = $621 >>> 0 > $622 >>> 0; //@line 8033
   $$$4236$i = $623 ? $621 : $$4236$i; //@line 8034
   $or$cond11$not$i = $or$cond11$i ^ 1; //@line 8035
   $624 = ($614 | 0) == (-1 | 0); //@line 8036
   $not$$i216 = $623 ^ 1; //@line 8037
   $625 = $624 | $not$$i216; //@line 8038
   $or$cond50$i = $625 | $or$cond11$not$i; //@line 8039
   if (!$or$cond50$i) {
    $$723948$i = $$$4236$i; //@line 8041
    $$749$i = $614; //@line 8041
    label = 180; //@line 8042
   }
  }
 }
 if ((label | 0) == 180) {
  $626 = SAFE_HEAP_LOAD(7064 | 0, 4, 0) | 0 | 0; //@line 8047
  $627 = $626 + $$723948$i | 0; //@line 8048
  SAFE_HEAP_STORE(7064 | 0, $627 | 0, 4);
  $628 = SAFE_HEAP_LOAD(7068 | 0, 4, 0) | 0 | 0; //@line 8050
  $629 = $627 >>> 0 > $628 >>> 0; //@line 8051
  if ($629) {
   SAFE_HEAP_STORE(7068 | 0, $627 | 0, 4);
  }
  $630 = SAFE_HEAP_LOAD(6656 | 0, 4, 0) | 0 | 0; //@line 8055
  $631 = ($630 | 0) == (0 | 0); //@line 8056
  do {
   if ($631) {
    $632 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8059
    $633 = ($632 | 0) == (0 | 0); //@line 8060
    $634 = $$749$i >>> 0 < $632 >>> 0; //@line 8061
    $or$cond12$i = $633 | $634; //@line 8062
    if ($or$cond12$i) {
     SAFE_HEAP_STORE(6648 | 0, $$749$i | 0, 4);
    }
    SAFE_HEAP_STORE(7080 | 0, $$749$i | 0, 4);
    SAFE_HEAP_STORE(7084 | 0, $$723948$i | 0, 4);
    SAFE_HEAP_STORE(7092 | 0, 0 | 0, 4);
    $635 = SAFE_HEAP_LOAD(1776 * 4 | 0, 4, 0) | 0 | 0; //@line 8069
    SAFE_HEAP_STORE(6668 | 0, $635 | 0, 4);
    SAFE_HEAP_STORE(6664 | 0, -1 | 0, 4);
    $$01$i$i = 0; //@line 8072
    while (1) {
     $636 = $$01$i$i << 1; //@line 8074
     $637 = 6672 + ($636 << 2) | 0; //@line 8075
     $638 = $637 + 12 | 0; //@line 8076
     SAFE_HEAP_STORE($638 | 0, $637 | 0, 4);
     $639 = $637 + 8 | 0; //@line 8078
     SAFE_HEAP_STORE($639 | 0, $637 | 0, 4);
     $640 = $$01$i$i + 1 | 0; //@line 8080
     $exitcond$i$i = ($640 | 0) == 32; //@line 8081
     if ($exitcond$i$i) {
      break;
     } else {
      $$01$i$i = $640; //@line 8085
     }
    }
    $641 = $$723948$i + -40 | 0; //@line 8088
    $642 = $$749$i + 8 | 0; //@line 8089
    $643 = $642; //@line 8090
    $644 = $643 & 7; //@line 8091
    $645 = ($644 | 0) == 0; //@line 8092
    $646 = 0 - $643 | 0; //@line 8093
    $647 = $646 & 7; //@line 8094
    $648 = $645 ? 0 : $647; //@line 8095
    $649 = $$749$i + $648 | 0; //@line 8096
    $650 = $641 - $648 | 0; //@line 8097
    SAFE_HEAP_STORE(6656 | 0, $649 | 0, 4);
    SAFE_HEAP_STORE(6644 | 0, $650 | 0, 4);
    $651 = $650 | 1; //@line 8100
    $652 = $649 + 4 | 0; //@line 8101
    SAFE_HEAP_STORE($652 | 0, $651 | 0, 4);
    $653 = $649 + $650 | 0; //@line 8103
    $654 = $653 + 4 | 0; //@line 8104
    SAFE_HEAP_STORE($654 | 0, 40 | 0, 4);
    $655 = SAFE_HEAP_LOAD(7120 | 0, 4, 0) | 0 | 0; //@line 8106
    SAFE_HEAP_STORE(6660 | 0, $655 | 0, 4);
   } else {
    $$024371$i = 7080; //@line 8109
    while (1) {
     $656 = SAFE_HEAP_LOAD($$024371$i | 0, 4, 0) | 0 | 0; //@line 8111
     $657 = $$024371$i + 4 | 0; //@line 8112
     $658 = SAFE_HEAP_LOAD($657 | 0, 4, 0) | 0 | 0; //@line 8113
     $659 = $656 + $658 | 0; //@line 8114
     $660 = ($$749$i | 0) == ($659 | 0); //@line 8115
     if ($660) {
      label = 190; //@line 8117
      break;
     }
     $661 = $$024371$i + 8 | 0; //@line 8120
     $662 = SAFE_HEAP_LOAD($661 | 0, 4, 0) | 0 | 0; //@line 8121
     $663 = ($662 | 0) == (0 | 0); //@line 8122
     if ($663) {
      break;
     } else {
      $$024371$i = $662; //@line 8126
     }
    }
    if ((label | 0) == 190) {
     $664 = $$024371$i + 12 | 0; //@line 8130
     $665 = SAFE_HEAP_LOAD($664 | 0, 4, 0) | 0 | 0; //@line 8131
     $666 = $665 & 8; //@line 8132
     $667 = ($666 | 0) == 0; //@line 8133
     if ($667) {
      $668 = $630 >>> 0 >= $656 >>> 0; //@line 8135
      $669 = $630 >>> 0 < $$749$i >>> 0; //@line 8136
      $or$cond51$i = $669 & $668; //@line 8137
      if ($or$cond51$i) {
       $670 = $658 + $$723948$i | 0; //@line 8139
       SAFE_HEAP_STORE($657 | 0, $670 | 0, 4);
       $671 = SAFE_HEAP_LOAD(6644 | 0, 4, 0) | 0 | 0; //@line 8141
       $672 = $630 + 8 | 0; //@line 8142
       $673 = $672; //@line 8143
       $674 = $673 & 7; //@line 8144
       $675 = ($674 | 0) == 0; //@line 8145
       $676 = 0 - $673 | 0; //@line 8146
       $677 = $676 & 7; //@line 8147
       $678 = $675 ? 0 : $677; //@line 8148
       $679 = $630 + $678 | 0; //@line 8149
       $680 = $$723948$i - $678 | 0; //@line 8150
       $681 = $671 + $680 | 0; //@line 8151
       SAFE_HEAP_STORE(6656 | 0, $679 | 0, 4);
       SAFE_HEAP_STORE(6644 | 0, $681 | 0, 4);
       $682 = $681 | 1; //@line 8154
       $683 = $679 + 4 | 0; //@line 8155
       SAFE_HEAP_STORE($683 | 0, $682 | 0, 4);
       $684 = $679 + $681 | 0; //@line 8157
       $685 = $684 + 4 | 0; //@line 8158
       SAFE_HEAP_STORE($685 | 0, 40 | 0, 4);
       $686 = SAFE_HEAP_LOAD(7120 | 0, 4, 0) | 0 | 0; //@line 8160
       SAFE_HEAP_STORE(6660 | 0, $686 | 0, 4);
       break;
      }
     }
    }
    $687 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8166
    $688 = $$749$i >>> 0 < $687 >>> 0; //@line 8167
    if ($688) {
     SAFE_HEAP_STORE(6648 | 0, $$749$i | 0, 4);
     $752 = $$749$i; //@line 8170
    } else {
     $752 = $687; //@line 8172
    }
    $689 = $$749$i + $$723948$i | 0; //@line 8174
    $$124470$i = 7080; //@line 8175
    while (1) {
     $690 = SAFE_HEAP_LOAD($$124470$i | 0, 4, 0) | 0 | 0; //@line 8177
     $691 = ($690 | 0) == ($689 | 0); //@line 8178
     if ($691) {
      label = 198; //@line 8180
      break;
     }
     $692 = $$124470$i + 8 | 0; //@line 8183
     $693 = SAFE_HEAP_LOAD($692 | 0, 4, 0) | 0 | 0; //@line 8184
     $694 = ($693 | 0) == (0 | 0); //@line 8185
     if ($694) {
      break;
     } else {
      $$124470$i = $693; //@line 8189
     }
    }
    if ((label | 0) == 198) {
     $695 = $$124470$i + 12 | 0; //@line 8193
     $696 = SAFE_HEAP_LOAD($695 | 0, 4, 0) | 0 | 0; //@line 8194
     $697 = $696 & 8; //@line 8195
     $698 = ($697 | 0) == 0; //@line 8196
     if ($698) {
      SAFE_HEAP_STORE($$124470$i | 0, $$749$i | 0, 4);
      $699 = $$124470$i + 4 | 0; //@line 8199
      $700 = SAFE_HEAP_LOAD($699 | 0, 4, 0) | 0 | 0; //@line 8200
      $701 = $700 + $$723948$i | 0; //@line 8201
      SAFE_HEAP_STORE($699 | 0, $701 | 0, 4);
      $702 = $$749$i + 8 | 0; //@line 8203
      $703 = $702; //@line 8204
      $704 = $703 & 7; //@line 8205
      $705 = ($704 | 0) == 0; //@line 8206
      $706 = 0 - $703 | 0; //@line 8207
      $707 = $706 & 7; //@line 8208
      $708 = $705 ? 0 : $707; //@line 8209
      $709 = $$749$i + $708 | 0; //@line 8210
      $710 = $689 + 8 | 0; //@line 8211
      $711 = $710; //@line 8212
      $712 = $711 & 7; //@line 8213
      $713 = ($712 | 0) == 0; //@line 8214
      $714 = 0 - $711 | 0; //@line 8215
      $715 = $714 & 7; //@line 8216
      $716 = $713 ? 0 : $715; //@line 8217
      $717 = $689 + $716 | 0; //@line 8218
      $718 = $717; //@line 8219
      $719 = $709; //@line 8220
      $720 = $718 - $719 | 0; //@line 8221
      $721 = $709 + $$0197 | 0; //@line 8222
      $722 = $720 - $$0197 | 0; //@line 8223
      $723 = $$0197 | 3; //@line 8224
      $724 = $709 + 4 | 0; //@line 8225
      SAFE_HEAP_STORE($724 | 0, $723 | 0, 4);
      $725 = ($717 | 0) == ($630 | 0); //@line 8227
      do {
       if ($725) {
        $726 = SAFE_HEAP_LOAD(6644 | 0, 4, 0) | 0 | 0; //@line 8230
        $727 = $726 + $722 | 0; //@line 8231
        SAFE_HEAP_STORE(6644 | 0, $727 | 0, 4);
        SAFE_HEAP_STORE(6656 | 0, $721 | 0, 4);
        $728 = $727 | 1; //@line 8234
        $729 = $721 + 4 | 0; //@line 8235
        SAFE_HEAP_STORE($729 | 0, $728 | 0, 4);
       } else {
        $730 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 8238
        $731 = ($717 | 0) == ($730 | 0); //@line 8239
        if ($731) {
         $732 = SAFE_HEAP_LOAD(6640 | 0, 4, 0) | 0 | 0; //@line 8241
         $733 = $732 + $722 | 0; //@line 8242
         SAFE_HEAP_STORE(6640 | 0, $733 | 0, 4);
         SAFE_HEAP_STORE(6652 | 0, $721 | 0, 4);
         $734 = $733 | 1; //@line 8245
         $735 = $721 + 4 | 0; //@line 8246
         SAFE_HEAP_STORE($735 | 0, $734 | 0, 4);
         $736 = $721 + $733 | 0; //@line 8248
         SAFE_HEAP_STORE($736 | 0, $733 | 0, 4);
         break;
        }
        $737 = $717 + 4 | 0; //@line 8252
        $738 = SAFE_HEAP_LOAD($737 | 0, 4, 0) | 0 | 0; //@line 8253
        $739 = $738 & 3; //@line 8254
        $740 = ($739 | 0) == 1; //@line 8255
        if ($740) {
         $741 = $738 & -8; //@line 8257
         $742 = $738 >>> 3; //@line 8258
         $743 = $738 >>> 0 < 256; //@line 8259
         L314 : do {
          if ($743) {
           $744 = $717 + 8 | 0; //@line 8262
           $745 = SAFE_HEAP_LOAD($744 | 0, 4, 0) | 0 | 0; //@line 8263
           $746 = $717 + 12 | 0; //@line 8264
           $747 = SAFE_HEAP_LOAD($746 | 0, 4, 0) | 0 | 0; //@line 8265
           $748 = $742 << 1; //@line 8266
           $749 = 6672 + ($748 << 2) | 0; //@line 8267
           $750 = ($745 | 0) == ($749 | 0); //@line 8268
           do {
            if (!$750) {
             $751 = $745 >>> 0 < $752 >>> 0; //@line 8271
             if ($751) {
              _abort(); //@line 8273
             }
             $753 = $745 + 12 | 0; //@line 8276
             $754 = SAFE_HEAP_LOAD($753 | 0, 4, 0) | 0 | 0; //@line 8277
             $755 = ($754 | 0) == ($717 | 0); //@line 8278
             if ($755) {
              break;
             }
             _abort(); //@line 8282
            }
           } while (0);
           $756 = ($747 | 0) == ($745 | 0); //@line 8286
           if ($756) {
            $757 = 1 << $742; //@line 8288
            $758 = $757 ^ -1; //@line 8289
            $759 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 8290
            $760 = $759 & $758; //@line 8291
            SAFE_HEAP_STORE(1658 * 4 | 0, $760 | 0, 4);
            break;
           }
           $761 = ($747 | 0) == ($749 | 0); //@line 8295
           do {
            if ($761) {
             $$pre10$i$i = $747 + 8 | 0; //@line 8298
             $$pre$phi11$i$iZ2D = $$pre10$i$i; //@line 8299
            } else {
             $762 = $747 >>> 0 < $752 >>> 0; //@line 8301
             if ($762) {
              _abort(); //@line 8303
             }
             $763 = $747 + 8 | 0; //@line 8306
             $764 = SAFE_HEAP_LOAD($763 | 0, 4, 0) | 0 | 0; //@line 8307
             $765 = ($764 | 0) == ($717 | 0); //@line 8308
             if ($765) {
              $$pre$phi11$i$iZ2D = $763; //@line 8310
              break;
             }
             _abort(); //@line 8313
            }
           } while (0);
           $766 = $745 + 12 | 0; //@line 8317
           SAFE_HEAP_STORE($766 | 0, $747 | 0, 4);
           SAFE_HEAP_STORE($$pre$phi11$i$iZ2D | 0, $745 | 0, 4);
          } else {
           $767 = $717 + 24 | 0; //@line 8321
           $768 = SAFE_HEAP_LOAD($767 | 0, 4, 0) | 0 | 0; //@line 8322
           $769 = $717 + 12 | 0; //@line 8323
           $770 = SAFE_HEAP_LOAD($769 | 0, 4, 0) | 0 | 0; //@line 8324
           $771 = ($770 | 0) == ($717 | 0); //@line 8325
           do {
            if ($771) {
             $781 = $717 + 16 | 0; //@line 8328
             $782 = $781 + 4 | 0; //@line 8329
             $783 = SAFE_HEAP_LOAD($782 | 0, 4, 0) | 0 | 0; //@line 8330
             $784 = ($783 | 0) == (0 | 0); //@line 8331
             if ($784) {
              $785 = SAFE_HEAP_LOAD($781 | 0, 4, 0) | 0 | 0; //@line 8333
              $786 = ($785 | 0) == (0 | 0); //@line 8334
              if ($786) {
               $$3$i$i = 0; //@line 8336
               break;
              } else {
               $$1291$i$i = $785; //@line 8339
               $$1293$i$i = $781; //@line 8339
              }
             } else {
              $$1291$i$i = $783; //@line 8342
              $$1293$i$i = $782; //@line 8342
             }
             while (1) {
              $787 = $$1291$i$i + 20 | 0; //@line 8345
              $788 = SAFE_HEAP_LOAD($787 | 0, 4, 0) | 0 | 0; //@line 8346
              $789 = ($788 | 0) == (0 | 0); //@line 8347
              if (!$789) {
               $$1291$i$i = $788; //@line 8349
               $$1293$i$i = $787; //@line 8349
               continue;
              }
              $790 = $$1291$i$i + 16 | 0; //@line 8352
              $791 = SAFE_HEAP_LOAD($790 | 0, 4, 0) | 0 | 0; //@line 8353
              $792 = ($791 | 0) == (0 | 0); //@line 8354
              if ($792) {
               break;
              } else {
               $$1291$i$i = $791; //@line 8358
               $$1293$i$i = $790; //@line 8358
              }
             }
             $793 = $$1293$i$i >>> 0 < $752 >>> 0; //@line 8361
             if ($793) {
              _abort(); //@line 8363
             } else {
              SAFE_HEAP_STORE($$1293$i$i | 0, 0 | 0, 4);
              $$3$i$i = $$1291$i$i; //@line 8367
              break;
             }
            } else {
             $772 = $717 + 8 | 0; //@line 8371
             $773 = SAFE_HEAP_LOAD($772 | 0, 4, 0) | 0 | 0; //@line 8372
             $774 = $773 >>> 0 < $752 >>> 0; //@line 8373
             if ($774) {
              _abort(); //@line 8375
             }
             $775 = $773 + 12 | 0; //@line 8378
             $776 = SAFE_HEAP_LOAD($775 | 0, 4, 0) | 0 | 0; //@line 8379
             $777 = ($776 | 0) == ($717 | 0); //@line 8380
             if (!$777) {
              _abort(); //@line 8382
             }
             $778 = $770 + 8 | 0; //@line 8385
             $779 = SAFE_HEAP_LOAD($778 | 0, 4, 0) | 0 | 0; //@line 8386
             $780 = ($779 | 0) == ($717 | 0); //@line 8387
             if ($780) {
              SAFE_HEAP_STORE($775 | 0, $770 | 0, 4);
              SAFE_HEAP_STORE($778 | 0, $773 | 0, 4);
              $$3$i$i = $770; //@line 8391
              break;
             } else {
              _abort(); //@line 8394
             }
            }
           } while (0);
           $794 = ($768 | 0) == (0 | 0); //@line 8399
           if ($794) {
            break;
           }
           $795 = $717 + 28 | 0; //@line 8403
           $796 = SAFE_HEAP_LOAD($795 | 0, 4, 0) | 0 | 0; //@line 8404
           $797 = 6936 + ($796 << 2) | 0; //@line 8405
           $798 = SAFE_HEAP_LOAD($797 | 0, 4, 0) | 0 | 0; //@line 8406
           $799 = ($717 | 0) == ($798 | 0); //@line 8407
           do {
            if ($799) {
             SAFE_HEAP_STORE($797 | 0, $$3$i$i | 0, 4);
             $cond$i$i = ($$3$i$i | 0) == (0 | 0); //@line 8411
             if (!$cond$i$i) {
              break;
             }
             $800 = 1 << $796; //@line 8415
             $801 = $800 ^ -1; //@line 8416
             $802 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 8417
             $803 = $802 & $801; //@line 8418
             SAFE_HEAP_STORE(6636 | 0, $803 | 0, 4);
             break L314;
            } else {
             $804 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8422
             $805 = $768 >>> 0 < $804 >>> 0; //@line 8423
             if ($805) {
              _abort(); //@line 8425
             } else {
              $806 = $768 + 16 | 0; //@line 8428
              $807 = SAFE_HEAP_LOAD($806 | 0, 4, 0) | 0 | 0; //@line 8429
              $not$$i17$i = ($807 | 0) != ($717 | 0); //@line 8430
              $$sink1$i$i = $not$$i17$i & 1; //@line 8431
              $808 = ($768 + 16 | 0) + ($$sink1$i$i << 2) | 0; //@line 8432
              SAFE_HEAP_STORE($808 | 0, $$3$i$i | 0, 4);
              $809 = ($$3$i$i | 0) == (0 | 0); //@line 8434
              if ($809) {
               break L314;
              } else {
               break;
              }
             }
            }
           } while (0);
           $810 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8443
           $811 = $$3$i$i >>> 0 < $810 >>> 0; //@line 8444
           if ($811) {
            _abort(); //@line 8446
           }
           $812 = $$3$i$i + 24 | 0; //@line 8449
           SAFE_HEAP_STORE($812 | 0, $768 | 0, 4);
           $813 = $717 + 16 | 0; //@line 8451
           $814 = SAFE_HEAP_LOAD($813 | 0, 4, 0) | 0 | 0; //@line 8452
           $815 = ($814 | 0) == (0 | 0); //@line 8453
           do {
            if (!$815) {
             $816 = $814 >>> 0 < $810 >>> 0; //@line 8456
             if ($816) {
              _abort(); //@line 8458
             } else {
              $817 = $$3$i$i + 16 | 0; //@line 8461
              SAFE_HEAP_STORE($817 | 0, $814 | 0, 4);
              $818 = $814 + 24 | 0; //@line 8463
              SAFE_HEAP_STORE($818 | 0, $$3$i$i | 0, 4);
              break;
             }
            }
           } while (0);
           $819 = $813 + 4 | 0; //@line 8469
           $820 = SAFE_HEAP_LOAD($819 | 0, 4, 0) | 0 | 0; //@line 8470
           $821 = ($820 | 0) == (0 | 0); //@line 8471
           if ($821) {
            break;
           }
           $822 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8475
           $823 = $820 >>> 0 < $822 >>> 0; //@line 8476
           if ($823) {
            _abort(); //@line 8478
           } else {
            $824 = $$3$i$i + 20 | 0; //@line 8481
            SAFE_HEAP_STORE($824 | 0, $820 | 0, 4);
            $825 = $820 + 24 | 0; //@line 8483
            SAFE_HEAP_STORE($825 | 0, $$3$i$i | 0, 4);
            break;
           }
          }
         } while (0);
         $826 = $717 + $741 | 0; //@line 8489
         $827 = $741 + $722 | 0; //@line 8490
         $$0$i18$i = $826; //@line 8491
         $$0287$i$i = $827; //@line 8491
        } else {
         $$0$i18$i = $717; //@line 8493
         $$0287$i$i = $722; //@line 8493
        }
        $828 = $$0$i18$i + 4 | 0; //@line 8495
        $829 = SAFE_HEAP_LOAD($828 | 0, 4, 0) | 0 | 0; //@line 8496
        $830 = $829 & -2; //@line 8497
        SAFE_HEAP_STORE($828 | 0, $830 | 0, 4);
        $831 = $$0287$i$i | 1; //@line 8499
        $832 = $721 + 4 | 0; //@line 8500
        SAFE_HEAP_STORE($832 | 0, $831 | 0, 4);
        $833 = $721 + $$0287$i$i | 0; //@line 8502
        SAFE_HEAP_STORE($833 | 0, $$0287$i$i | 0, 4);
        $834 = $$0287$i$i >>> 3; //@line 8504
        $835 = $$0287$i$i >>> 0 < 256; //@line 8505
        if ($835) {
         $836 = $834 << 1; //@line 8507
         $837 = 6672 + ($836 << 2) | 0; //@line 8508
         $838 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 8509
         $839 = 1 << $834; //@line 8510
         $840 = $838 & $839; //@line 8511
         $841 = ($840 | 0) == 0; //@line 8512
         do {
          if ($841) {
           $842 = $838 | $839; //@line 8515
           SAFE_HEAP_STORE(1658 * 4 | 0, $842 | 0, 4);
           $$pre$i19$i = $837 + 8 | 0; //@line 8517
           $$0295$i$i = $837; //@line 8518
           $$pre$phi$i20$iZ2D = $$pre$i19$i; //@line 8518
          } else {
           $843 = $837 + 8 | 0; //@line 8520
           $844 = SAFE_HEAP_LOAD($843 | 0, 4, 0) | 0 | 0; //@line 8521
           $845 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8522
           $846 = $844 >>> 0 < $845 >>> 0; //@line 8523
           if (!$846) {
            $$0295$i$i = $844; //@line 8525
            $$pre$phi$i20$iZ2D = $843; //@line 8525
            break;
           }
           _abort(); //@line 8528
          }
         } while (0);
         SAFE_HEAP_STORE($$pre$phi$i20$iZ2D | 0, $721 | 0, 4);
         $847 = $$0295$i$i + 12 | 0; //@line 8533
         SAFE_HEAP_STORE($847 | 0, $721 | 0, 4);
         $848 = $721 + 8 | 0; //@line 8535
         SAFE_HEAP_STORE($848 | 0, $$0295$i$i | 0, 4);
         $849 = $721 + 12 | 0; //@line 8537
         SAFE_HEAP_STORE($849 | 0, $837 | 0, 4);
         break;
        }
        $850 = $$0287$i$i >>> 8; //@line 8541
        $851 = ($850 | 0) == 0; //@line 8542
        do {
         if ($851) {
          $$0296$i$i = 0; //@line 8545
         } else {
          $852 = $$0287$i$i >>> 0 > 16777215; //@line 8547
          if ($852) {
           $$0296$i$i = 31; //@line 8549
           break;
          }
          $853 = $850 + 1048320 | 0; //@line 8552
          $854 = $853 >>> 16; //@line 8553
          $855 = $854 & 8; //@line 8554
          $856 = $850 << $855; //@line 8555
          $857 = $856 + 520192 | 0; //@line 8556
          $858 = $857 >>> 16; //@line 8557
          $859 = $858 & 4; //@line 8558
          $860 = $859 | $855; //@line 8559
          $861 = $856 << $859; //@line 8560
          $862 = $861 + 245760 | 0; //@line 8561
          $863 = $862 >>> 16; //@line 8562
          $864 = $863 & 2; //@line 8563
          $865 = $860 | $864; //@line 8564
          $866 = 14 - $865 | 0; //@line 8565
          $867 = $861 << $864; //@line 8566
          $868 = $867 >>> 15; //@line 8567
          $869 = $866 + $868 | 0; //@line 8568
          $870 = $869 << 1; //@line 8569
          $871 = $869 + 7 | 0; //@line 8570
          $872 = $$0287$i$i >>> $871; //@line 8571
          $873 = $872 & 1; //@line 8572
          $874 = $873 | $870; //@line 8573
          $$0296$i$i = $874; //@line 8574
         }
        } while (0);
        $875 = 6936 + ($$0296$i$i << 2) | 0; //@line 8577
        $876 = $721 + 28 | 0; //@line 8578
        SAFE_HEAP_STORE($876 | 0, $$0296$i$i | 0, 4);
        $877 = $721 + 16 | 0; //@line 8580
        $878 = $877 + 4 | 0; //@line 8581
        SAFE_HEAP_STORE($878 | 0, 0 | 0, 4);
        SAFE_HEAP_STORE($877 | 0, 0 | 0, 4);
        $879 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 8584
        $880 = 1 << $$0296$i$i; //@line 8585
        $881 = $879 & $880; //@line 8586
        $882 = ($881 | 0) == 0; //@line 8587
        if ($882) {
         $883 = $879 | $880; //@line 8589
         SAFE_HEAP_STORE(6636 | 0, $883 | 0, 4);
         SAFE_HEAP_STORE($875 | 0, $721 | 0, 4);
         $884 = $721 + 24 | 0; //@line 8592
         SAFE_HEAP_STORE($884 | 0, $875 | 0, 4);
         $885 = $721 + 12 | 0; //@line 8594
         SAFE_HEAP_STORE($885 | 0, $721 | 0, 4);
         $886 = $721 + 8 | 0; //@line 8596
         SAFE_HEAP_STORE($886 | 0, $721 | 0, 4);
         break;
        }
        $887 = SAFE_HEAP_LOAD($875 | 0, 4, 0) | 0 | 0; //@line 8600
        $888 = ($$0296$i$i | 0) == 31; //@line 8601
        $889 = $$0296$i$i >>> 1; //@line 8602
        $890 = 25 - $889 | 0; //@line 8603
        $891 = $888 ? 0 : $890; //@line 8604
        $892 = $$0287$i$i << $891; //@line 8605
        $$0288$i$i = $892; //@line 8606
        $$0289$i$i = $887; //@line 8606
        while (1) {
         $893 = $$0289$i$i + 4 | 0; //@line 8608
         $894 = SAFE_HEAP_LOAD($893 | 0, 4, 0) | 0 | 0; //@line 8609
         $895 = $894 & -8; //@line 8610
         $896 = ($895 | 0) == ($$0287$i$i | 0); //@line 8611
         if ($896) {
          label = 265; //@line 8613
          break;
         }
         $897 = $$0288$i$i >>> 31; //@line 8616
         $898 = ($$0289$i$i + 16 | 0) + ($897 << 2) | 0; //@line 8617
         $899 = $$0288$i$i << 1; //@line 8618
         $900 = SAFE_HEAP_LOAD($898 | 0, 4, 0) | 0 | 0; //@line 8619
         $901 = ($900 | 0) == (0 | 0); //@line 8620
         if ($901) {
          label = 262; //@line 8622
          break;
         } else {
          $$0288$i$i = $899; //@line 8625
          $$0289$i$i = $900; //@line 8625
         }
        }
        if ((label | 0) == 262) {
         $902 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8629
         $903 = $898 >>> 0 < $902 >>> 0; //@line 8630
         if ($903) {
          _abort(); //@line 8632
         } else {
          SAFE_HEAP_STORE($898 | 0, $721 | 0, 4);
          $904 = $721 + 24 | 0; //@line 8636
          SAFE_HEAP_STORE($904 | 0, $$0289$i$i | 0, 4);
          $905 = $721 + 12 | 0; //@line 8638
          SAFE_HEAP_STORE($905 | 0, $721 | 0, 4);
          $906 = $721 + 8 | 0; //@line 8640
          SAFE_HEAP_STORE($906 | 0, $721 | 0, 4);
          break;
         }
        } else if ((label | 0) == 265) {
         $907 = $$0289$i$i + 8 | 0; //@line 8646
         $908 = SAFE_HEAP_LOAD($907 | 0, 4, 0) | 0 | 0; //@line 8647
         $909 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8648
         $910 = $908 >>> 0 >= $909 >>> 0; //@line 8649
         $not$7$i$i = $$0289$i$i >>> 0 >= $909 >>> 0; //@line 8650
         $911 = $910 & $not$7$i$i; //@line 8651
         if ($911) {
          $912 = $908 + 12 | 0; //@line 8653
          SAFE_HEAP_STORE($912 | 0, $721 | 0, 4);
          SAFE_HEAP_STORE($907 | 0, $721 | 0, 4);
          $913 = $721 + 8 | 0; //@line 8656
          SAFE_HEAP_STORE($913 | 0, $908 | 0, 4);
          $914 = $721 + 12 | 0; //@line 8658
          SAFE_HEAP_STORE($914 | 0, $$0289$i$i | 0, 4);
          $915 = $721 + 24 | 0; //@line 8660
          SAFE_HEAP_STORE($915 | 0, 0 | 0, 4);
          break;
         } else {
          _abort(); //@line 8664
         }
        }
       }
      } while (0);
      $1047 = $709 + 8 | 0; //@line 8670
      $$0 = $1047; //@line 8671
      STACKTOP = sp; //@line 8672
      return $$0 | 0; //@line 8672
     }
    }
    $$0$i$i$i = 7080; //@line 8675
    while (1) {
     $916 = SAFE_HEAP_LOAD($$0$i$i$i | 0, 4, 0) | 0 | 0; //@line 8677
     $917 = $916 >>> 0 > $630 >>> 0; //@line 8678
     if (!$917) {
      $918 = $$0$i$i$i + 4 | 0; //@line 8680
      $919 = SAFE_HEAP_LOAD($918 | 0, 4, 0) | 0 | 0; //@line 8681
      $920 = $916 + $919 | 0; //@line 8682
      $921 = $920 >>> 0 > $630 >>> 0; //@line 8683
      if ($921) {
       break;
      }
     }
     $922 = $$0$i$i$i + 8 | 0; //@line 8688
     $923 = SAFE_HEAP_LOAD($922 | 0, 4, 0) | 0 | 0; //@line 8689
     $$0$i$i$i = $923; //@line 8690
    }
    $924 = $920 + -47 | 0; //@line 8692
    $925 = $924 + 8 | 0; //@line 8693
    $926 = $925; //@line 8694
    $927 = $926 & 7; //@line 8695
    $928 = ($927 | 0) == 0; //@line 8696
    $929 = 0 - $926 | 0; //@line 8697
    $930 = $929 & 7; //@line 8698
    $931 = $928 ? 0 : $930; //@line 8699
    $932 = $924 + $931 | 0; //@line 8700
    $933 = $630 + 16 | 0; //@line 8701
    $934 = $932 >>> 0 < $933 >>> 0; //@line 8702
    $935 = $934 ? $630 : $932; //@line 8703
    $936 = $935 + 8 | 0; //@line 8704
    $937 = $935 + 24 | 0; //@line 8705
    $938 = $$723948$i + -40 | 0; //@line 8706
    $939 = $$749$i + 8 | 0; //@line 8707
    $940 = $939; //@line 8708
    $941 = $940 & 7; //@line 8709
    $942 = ($941 | 0) == 0; //@line 8710
    $943 = 0 - $940 | 0; //@line 8711
    $944 = $943 & 7; //@line 8712
    $945 = $942 ? 0 : $944; //@line 8713
    $946 = $$749$i + $945 | 0; //@line 8714
    $947 = $938 - $945 | 0; //@line 8715
    SAFE_HEAP_STORE(6656 | 0, $946 | 0, 4);
    SAFE_HEAP_STORE(6644 | 0, $947 | 0, 4);
    $948 = $947 | 1; //@line 8718
    $949 = $946 + 4 | 0; //@line 8719
    SAFE_HEAP_STORE($949 | 0, $948 | 0, 4);
    $950 = $946 + $947 | 0; //@line 8721
    $951 = $950 + 4 | 0; //@line 8722
    SAFE_HEAP_STORE($951 | 0, 40 | 0, 4);
    $952 = SAFE_HEAP_LOAD(7120 | 0, 4, 0) | 0 | 0; //@line 8724
    SAFE_HEAP_STORE(6660 | 0, $952 | 0, 4);
    $953 = $935 + 4 | 0; //@line 8726
    SAFE_HEAP_STORE($953 | 0, 27 | 0, 4);
    SAFE_HEAP_STORE($936 | 0, SAFE_HEAP_LOAD(7080 | 0, 4, 0) | 0 | 0 | 0, 4);
    SAFE_HEAP_STORE($936 + 4 | 0, SAFE_HEAP_LOAD(7080 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
    SAFE_HEAP_STORE($936 + 8 | 0, SAFE_HEAP_LOAD(7080 + 8 | 0, 4, 0) | 0 | 0 | 0, 4);
    SAFE_HEAP_STORE($936 + 12 | 0, SAFE_HEAP_LOAD(7080 + 12 | 0, 4, 0) | 0 | 0 | 0, 4);
    SAFE_HEAP_STORE(7080 | 0, $$749$i | 0, 4);
    SAFE_HEAP_STORE(7084 | 0, $$723948$i | 0, 4);
    SAFE_HEAP_STORE(7092 | 0, 0 | 0, 4);
    SAFE_HEAP_STORE(7088 | 0, $936 | 0, 4);
    $955 = $937; //@line 8733
    while (1) {
     $954 = $955 + 4 | 0; //@line 8735
     SAFE_HEAP_STORE($954 | 0, 7 | 0, 4);
     $956 = $955 + 8 | 0; //@line 8737
     $957 = $956 >>> 0 < $920 >>> 0; //@line 8738
     if ($957) {
      $955 = $954; //@line 8740
     } else {
      break;
     }
    }
    $958 = ($935 | 0) == ($630 | 0); //@line 8745
    if (!$958) {
     $959 = $935; //@line 8747
     $960 = $630; //@line 8748
     $961 = $959 - $960 | 0; //@line 8749
     $962 = SAFE_HEAP_LOAD($953 | 0, 4, 0) | 0 | 0; //@line 8750
     $963 = $962 & -2; //@line 8751
     SAFE_HEAP_STORE($953 | 0, $963 | 0, 4);
     $964 = $961 | 1; //@line 8753
     $965 = $630 + 4 | 0; //@line 8754
     SAFE_HEAP_STORE($965 | 0, $964 | 0, 4);
     SAFE_HEAP_STORE($935 | 0, $961 | 0, 4);
     $966 = $961 >>> 3; //@line 8757
     $967 = $961 >>> 0 < 256; //@line 8758
     if ($967) {
      $968 = $966 << 1; //@line 8760
      $969 = 6672 + ($968 << 2) | 0; //@line 8761
      $970 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 8762
      $971 = 1 << $966; //@line 8763
      $972 = $970 & $971; //@line 8764
      $973 = ($972 | 0) == 0; //@line 8765
      if ($973) {
       $974 = $970 | $971; //@line 8767
       SAFE_HEAP_STORE(1658 * 4 | 0, $974 | 0, 4);
       $$pre$i$i = $969 + 8 | 0; //@line 8769
       $$0211$i$i = $969; //@line 8770
       $$pre$phi$i$iZ2D = $$pre$i$i; //@line 8770
      } else {
       $975 = $969 + 8 | 0; //@line 8772
       $976 = SAFE_HEAP_LOAD($975 | 0, 4, 0) | 0 | 0; //@line 8773
       $977 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8774
       $978 = $976 >>> 0 < $977 >>> 0; //@line 8775
       if ($978) {
        _abort(); //@line 8777
       } else {
        $$0211$i$i = $976; //@line 8780
        $$pre$phi$i$iZ2D = $975; //@line 8780
       }
      }
      SAFE_HEAP_STORE($$pre$phi$i$iZ2D | 0, $630 | 0, 4);
      $979 = $$0211$i$i + 12 | 0; //@line 8784
      SAFE_HEAP_STORE($979 | 0, $630 | 0, 4);
      $980 = $630 + 8 | 0; //@line 8786
      SAFE_HEAP_STORE($980 | 0, $$0211$i$i | 0, 4);
      $981 = $630 + 12 | 0; //@line 8788
      SAFE_HEAP_STORE($981 | 0, $969 | 0, 4);
      break;
     }
     $982 = $961 >>> 8; //@line 8792
     $983 = ($982 | 0) == 0; //@line 8793
     if ($983) {
      $$0212$i$i = 0; //@line 8795
     } else {
      $984 = $961 >>> 0 > 16777215; //@line 8797
      if ($984) {
       $$0212$i$i = 31; //@line 8799
      } else {
       $985 = $982 + 1048320 | 0; //@line 8801
       $986 = $985 >>> 16; //@line 8802
       $987 = $986 & 8; //@line 8803
       $988 = $982 << $987; //@line 8804
       $989 = $988 + 520192 | 0; //@line 8805
       $990 = $989 >>> 16; //@line 8806
       $991 = $990 & 4; //@line 8807
       $992 = $991 | $987; //@line 8808
       $993 = $988 << $991; //@line 8809
       $994 = $993 + 245760 | 0; //@line 8810
       $995 = $994 >>> 16; //@line 8811
       $996 = $995 & 2; //@line 8812
       $997 = $992 | $996; //@line 8813
       $998 = 14 - $997 | 0; //@line 8814
       $999 = $993 << $996; //@line 8815
       $1000 = $999 >>> 15; //@line 8816
       $1001 = $998 + $1000 | 0; //@line 8817
       $1002 = $1001 << 1; //@line 8818
       $1003 = $1001 + 7 | 0; //@line 8819
       $1004 = $961 >>> $1003; //@line 8820
       $1005 = $1004 & 1; //@line 8821
       $1006 = $1005 | $1002; //@line 8822
       $$0212$i$i = $1006; //@line 8823
      }
     }
     $1007 = 6936 + ($$0212$i$i << 2) | 0; //@line 8826
     $1008 = $630 + 28 | 0; //@line 8827
     SAFE_HEAP_STORE($1008 | 0, $$0212$i$i | 0, 4);
     $1009 = $630 + 20 | 0; //@line 8829
     SAFE_HEAP_STORE($1009 | 0, 0 | 0, 4);
     SAFE_HEAP_STORE($933 | 0, 0 | 0, 4);
     $1010 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 8832
     $1011 = 1 << $$0212$i$i; //@line 8833
     $1012 = $1010 & $1011; //@line 8834
     $1013 = ($1012 | 0) == 0; //@line 8835
     if ($1013) {
      $1014 = $1010 | $1011; //@line 8837
      SAFE_HEAP_STORE(6636 | 0, $1014 | 0, 4);
      SAFE_HEAP_STORE($1007 | 0, $630 | 0, 4);
      $1015 = $630 + 24 | 0; //@line 8840
      SAFE_HEAP_STORE($1015 | 0, $1007 | 0, 4);
      $1016 = $630 + 12 | 0; //@line 8842
      SAFE_HEAP_STORE($1016 | 0, $630 | 0, 4);
      $1017 = $630 + 8 | 0; //@line 8844
      SAFE_HEAP_STORE($1017 | 0, $630 | 0, 4);
      break;
     }
     $1018 = SAFE_HEAP_LOAD($1007 | 0, 4, 0) | 0 | 0; //@line 8848
     $1019 = ($$0212$i$i | 0) == 31; //@line 8849
     $1020 = $$0212$i$i >>> 1; //@line 8850
     $1021 = 25 - $1020 | 0; //@line 8851
     $1022 = $1019 ? 0 : $1021; //@line 8852
     $1023 = $961 << $1022; //@line 8853
     $$0206$i$i = $1023; //@line 8854
     $$0207$i$i = $1018; //@line 8854
     while (1) {
      $1024 = $$0207$i$i + 4 | 0; //@line 8856
      $1025 = SAFE_HEAP_LOAD($1024 | 0, 4, 0) | 0 | 0; //@line 8857
      $1026 = $1025 & -8; //@line 8858
      $1027 = ($1026 | 0) == ($961 | 0); //@line 8859
      if ($1027) {
       label = 292; //@line 8861
       break;
      }
      $1028 = $$0206$i$i >>> 31; //@line 8864
      $1029 = ($$0207$i$i + 16 | 0) + ($1028 << 2) | 0; //@line 8865
      $1030 = $$0206$i$i << 1; //@line 8866
      $1031 = SAFE_HEAP_LOAD($1029 | 0, 4, 0) | 0 | 0; //@line 8867
      $1032 = ($1031 | 0) == (0 | 0); //@line 8868
      if ($1032) {
       label = 289; //@line 8870
       break;
      } else {
       $$0206$i$i = $1030; //@line 8873
       $$0207$i$i = $1031; //@line 8873
      }
     }
     if ((label | 0) == 289) {
      $1033 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8877
      $1034 = $1029 >>> 0 < $1033 >>> 0; //@line 8878
      if ($1034) {
       _abort(); //@line 8880
      } else {
       SAFE_HEAP_STORE($1029 | 0, $630 | 0, 4);
       $1035 = $630 + 24 | 0; //@line 8884
       SAFE_HEAP_STORE($1035 | 0, $$0207$i$i | 0, 4);
       $1036 = $630 + 12 | 0; //@line 8886
       SAFE_HEAP_STORE($1036 | 0, $630 | 0, 4);
       $1037 = $630 + 8 | 0; //@line 8888
       SAFE_HEAP_STORE($1037 | 0, $630 | 0, 4);
       break;
      }
     } else if ((label | 0) == 292) {
      $1038 = $$0207$i$i + 8 | 0; //@line 8894
      $1039 = SAFE_HEAP_LOAD($1038 | 0, 4, 0) | 0 | 0; //@line 8895
      $1040 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8896
      $1041 = $1039 >>> 0 >= $1040 >>> 0; //@line 8897
      $not$$i$i = $$0207$i$i >>> 0 >= $1040 >>> 0; //@line 8898
      $1042 = $1041 & $not$$i$i; //@line 8899
      if ($1042) {
       $1043 = $1039 + 12 | 0; //@line 8901
       SAFE_HEAP_STORE($1043 | 0, $630 | 0, 4);
       SAFE_HEAP_STORE($1038 | 0, $630 | 0, 4);
       $1044 = $630 + 8 | 0; //@line 8904
       SAFE_HEAP_STORE($1044 | 0, $1039 | 0, 4);
       $1045 = $630 + 12 | 0; //@line 8906
       SAFE_HEAP_STORE($1045 | 0, $$0207$i$i | 0, 4);
       $1046 = $630 + 24 | 0; //@line 8908
       SAFE_HEAP_STORE($1046 | 0, 0 | 0, 4);
       break;
      } else {
       _abort(); //@line 8912
      }
     }
    }
   }
  } while (0);
  $1048 = SAFE_HEAP_LOAD(6644 | 0, 4, 0) | 0 | 0; //@line 8919
  $1049 = $1048 >>> 0 > $$0197 >>> 0; //@line 8920
  if ($1049) {
   $1050 = $1048 - $$0197 | 0; //@line 8922
   SAFE_HEAP_STORE(6644 | 0, $1050 | 0, 4);
   $1051 = SAFE_HEAP_LOAD(6656 | 0, 4, 0) | 0 | 0; //@line 8924
   $1052 = $1051 + $$0197 | 0; //@line 8925
   SAFE_HEAP_STORE(6656 | 0, $1052 | 0, 4);
   $1053 = $1050 | 1; //@line 8927
   $1054 = $1052 + 4 | 0; //@line 8928
   SAFE_HEAP_STORE($1054 | 0, $1053 | 0, 4);
   $1055 = $$0197 | 3; //@line 8930
   $1056 = $1051 + 4 | 0; //@line 8931
   SAFE_HEAP_STORE($1056 | 0, $1055 | 0, 4);
   $1057 = $1051 + 8 | 0; //@line 8933
   $$0 = $1057; //@line 8934
   STACKTOP = sp; //@line 8935
   return $$0 | 0; //@line 8935
  }
 }
 $1058 = ___errno_location() | 0; //@line 8938
 SAFE_HEAP_STORE($1058 | 0, 12 | 0, 4);
 $$0 = 0; //@line 8940
 STACKTOP = sp; //@line 8941
 return $$0 | 0; //@line 8941
}
function _fmt_fp($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0; //@line 4934
 $1 = +$1; //@line 4935
 $2 = $2 | 0; //@line 4936
 $3 = $3 | 0; //@line 4937
 $4 = $4 | 0; //@line 4938
 $5 = $5 | 0; //@line 4939
 var $$ = 0, $$$ = 0, $$$$559 = 0.0, $$$3484 = 0, $$$3484691 = 0, $$$3484692 = 0, $$$3501 = 0, $$$4502 = 0, $$$542 = 0.0, $$$559 = 0.0, $$0 = 0, $$0463$lcssa = 0, $$0463584 = 0, $$0464594 = 0, $$0471 = 0.0, $$0479 = 0, $$0487642 = 0, $$0488 = 0, $$0488653 = 0, $$0488655 = 0; //@line 4940
 var $$0496$$9 = 0, $$0497654 = 0, $$0498 = 0, $$0509582 = 0.0, $$0510 = 0, $$0511 = 0, $$0514637 = 0, $$0520 = 0, $$0521 = 0, $$0521$ = 0, $$0523 = 0, $$0525 = 0, $$0527 = 0, $$0527629 = 0, $$0527631 = 0, $$0530636 = 0, $$1465 = 0, $$1467 = 0.0, $$1469 = 0.0, $$1472 = 0.0; //@line 4941
 var $$1480 = 0, $$1482$lcssa = 0, $$1482661 = 0, $$1489641 = 0, $$1499$lcssa = 0, $$1499660 = 0, $$1508583 = 0, $$1512$lcssa = 0, $$1512607 = 0, $$1515 = 0, $$1524 = 0, $$1526 = 0, $$1528614 = 0, $$1531$lcssa = 0, $$1531630 = 0, $$1598 = 0, $$2 = 0, $$2473 = 0.0, $$2476 = 0, $$2476$$547 = 0; //@line 4942
 var $$2476$$549 = 0, $$2483$ph = 0, $$2500 = 0, $$2513 = 0, $$2516618 = 0, $$2529 = 0, $$2532617 = 0, $$3 = 0.0, $$3477 = 0, $$3484$lcssa = 0, $$3484648 = 0, $$3501$lcssa = 0, $$3501647 = 0, $$3533613 = 0, $$4 = 0.0, $$4478$lcssa = 0, $$4478590 = 0, $$4492 = 0, $$4502 = 0, $$4518 = 0; //@line 4943
 var $$5$lcssa = 0, $$534$ = 0, $$539 = 0, $$539$ = 0, $$542 = 0.0, $$546 = 0, $$548 = 0, $$5486$lcssa = 0, $$5486623 = 0, $$5493597 = 0, $$5519$ph = 0, $$555 = 0, $$556 = 0, $$559 = 0.0, $$5602 = 0, $$6 = 0, $$6494589 = 0, $$7495601 = 0, $$7505 = 0, $$7505$ = 0; //@line 4944
 var $$7505$ph = 0, $$8 = 0, $$9$ph = 0, $$lcssa673 = 0, $$neg = 0, $$neg567 = 0, $$pn = 0, $$pn566 = 0, $$pr = 0, $$pr564 = 0, $$pre = 0, $$pre$phi690Z2D = 0, $$pre689 = 0, $$sink545$lcssa = 0, $$sink545622 = 0, $$sink562 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0; //@line 4945
 var $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0.0, $117 = 0.0, $118 = 0.0, $119 = 0, $12 = 0, $120 = 0; //@line 4946
 var $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0; //@line 4947
 var $14 = 0.0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0;
 var $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0; //@line 4949
 var $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0; //@line 4950
 var $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0; //@line 4951
 var $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0.0, $229 = 0.0, $23 = 0; //@line 4952
 var $230 = 0, $231 = 0.0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0; //@line 4953
 var $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0; //@line 4954
 var $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0; //@line 4955
 var $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0; //@line 4956
 var $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0; //@line 4957
 var $321 = 0, $322 = 0, $323 = 0, $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $332 = 0, $333 = 0, $334 = 0, $335 = 0, $336 = 0, $337 = 0, $338 = 0, $339 = 0; //@line 4958
 var $34 = 0, $340 = 0, $341 = 0, $342 = 0, $343 = 0, $344 = 0, $345 = 0, $346 = 0, $347 = 0, $348 = 0, $349 = 0, $35 = 0.0, $350 = 0, $351 = 0, $352 = 0, $353 = 0, $354 = 0, $355 = 0, $356 = 0, $357 = 0; //@line 4959
 var $358 = 0, $359 = 0, $36 = 0.0, $360 = 0, $361 = 0, $362 = 0, $363 = 0, $364 = 0, $365 = 0, $366 = 0, $367 = 0, $368 = 0, $369 = 0, $37 = 0, $370 = 0, $371 = 0, $372 = 0, $373 = 0, $374 = 0, $375 = 0; //@line 4960
 var $376 = 0, $377 = 0, $378 = 0, $379 = 0, $38 = 0, $380 = 0, $381 = 0, $382 = 0, $383 = 0, $384 = 0, $385 = 0, $386 = 0, $387 = 0, $388 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0; //@line 4961
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $50 = 0, $51 = 0.0, $52 = 0, $53 = 0, $54 = 0, $55 = 0.0, $56 = 0.0, $57 = 0.0, $58 = 0.0, $59 = 0.0, $6 = 0, $60 = 0.0, $61 = 0, $62 = 0, $63 = 0; //@line 4962
 var $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0; //@line 4963
 var $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0.0, $88 = 0.0, $89 = 0.0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $exitcond = 0; //@line 4964
 var $narrow = 0, $not$ = 0, $notlhs = 0, $notrhs = 0, $or$cond = 0, $or$cond3$not = 0, $or$cond537 = 0, $or$cond541 = 0, $or$cond544 = 0, $or$cond554 = 0, $or$cond6 = 0, $scevgep684 = 0, $scevgep684685 = 0, label = 0, sp = 0; //@line 4965
 sp = STACKTOP; //@line 4966
 STACKTOP = STACKTOP + 560 | 0; //@line 4967
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(560 | 0); //@line 4967
 $6 = sp + 8 | 0; //@line 4968
 $7 = sp; //@line 4969
 $8 = sp + 524 | 0; //@line 4970
 $9 = $8; //@line 4971
 $10 = sp + 512 | 0; //@line 4972
 SAFE_HEAP_STORE($7 | 0, 0 | 0, 4);
 $11 = $10 + 12 | 0; //@line 4974
 ___DOUBLE_BITS_675($1) | 0; //@line 4975
 $12 = tempRet0; //@line 4976
 $13 = ($12 | 0) < 0; //@line 4977
 if ($13) {
  $14 = -$1; //@line 4979
  $$0471 = $14; //@line 4980
  $$0520 = 1; //@line 4980
  $$0521 = 3791; //@line 4980
 } else {
  $15 = $4 & 2048; //@line 4982
  $16 = ($15 | 0) == 0; //@line 4983
  $17 = $4 & 1; //@line 4984
  $18 = ($17 | 0) == 0; //@line 4985
  $$ = $18 ? 3792 : 3797; //@line 4986
  $$$ = $16 ? $$ : 3794; //@line 4987
  $19 = $4 & 2049; //@line 4988
  $narrow = ($19 | 0) != 0; //@line 4989
  $$534$ = $narrow & 1; //@line 4990
  $$0471 = $1; //@line 4991
  $$0520 = $$534$; //@line 4991
  $$0521 = $$$; //@line 4991
 }
 ___DOUBLE_BITS_675($$0471) | 0; //@line 4993
 $20 = tempRet0; //@line 4994
 $21 = $20 & 2146435072; //@line 4995
 $22 = $21 >>> 0 < 2146435072; //@line 4996
 $23 = 0 < 0; //@line 4997
 $24 = ($21 | 0) == 2146435072; //@line 4998
 $25 = $24 & $23; //@line 4999
 $26 = $22 | $25; //@line 5000
 do {
  if ($26) {
   $35 = +_frexpl($$0471, $7); //@line 5003
   $36 = $35 * 2.0; //@line 5004
   $37 = $36 != 0.0; //@line 5005
   if ($37) {
    $38 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5007
    $39 = $38 + -1 | 0; //@line 5008
    SAFE_HEAP_STORE($7 | 0, $39 | 0, 4);
   }
   $40 = $5 | 32; //@line 5011
   $41 = ($40 | 0) == 97; //@line 5012
   if ($41) {
    $42 = $5 & 32; //@line 5014
    $43 = ($42 | 0) == 0; //@line 5015
    $44 = $$0521 + 9 | 0; //@line 5016
    $$0521$ = $43 ? $$0521 : $44; //@line 5017
    $45 = $$0520 | 2; //@line 5018
    $46 = $3 >>> 0 > 11; //@line 5019
    $47 = 12 - $3 | 0; //@line 5020
    $48 = ($47 | 0) == 0; //@line 5021
    $49 = $46 | $48; //@line 5022
    do {
     if ($49) {
      $$1472 = $36; //@line 5025
     } else {
      $$0509582 = 8.0; //@line 5027
      $$1508583 = $47; //@line 5027
      while (1) {
       $50 = $$1508583 + -1 | 0; //@line 5029
       $51 = $$0509582 * 16.0; //@line 5030
       $52 = ($50 | 0) == 0; //@line 5031
       if ($52) {
        break;
       } else {
        $$0509582 = $51; //@line 5035
        $$1508583 = $50; //@line 5035
       }
      }
      $53 = SAFE_HEAP_LOAD($$0521$ >> 0 | 0, 1, 0) | 0 | 0; //@line 5038
      $54 = $53 << 24 >> 24 == 45; //@line 5039
      if ($54) {
       $55 = -$36; //@line 5041
       $56 = $55 - $51; //@line 5042
       $57 = $51 + $56; //@line 5043
       $58 = -$57; //@line 5044
       $$1472 = $58; //@line 5045
       break;
      } else {
       $59 = $36 + $51; //@line 5048
       $60 = $59 - $51; //@line 5049
       $$1472 = $60; //@line 5050
       break;
      }
     }
    } while (0);
    $61 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5055
    $62 = ($61 | 0) < 0; //@line 5056
    $63 = 0 - $61 | 0; //@line 5057
    $64 = $62 ? $63 : $61; //@line 5058
    $65 = ($64 | 0) < 0; //@line 5059
    $66 = $65 << 31 >> 31; //@line 5060
    $67 = _fmt_u($64, $66, $11) | 0; //@line 5061
    $68 = ($67 | 0) == ($11 | 0); //@line 5062
    if ($68) {
     $69 = $10 + 11 | 0; //@line 5064
     SAFE_HEAP_STORE($69 >> 0 | 0, 48 | 0, 1);
     $$0511 = $69; //@line 5066
    } else {
     $$0511 = $67; //@line 5068
    }
    $70 = $61 >> 31; //@line 5070
    $71 = $70 & 2; //@line 5071
    $72 = $71 + 43 | 0; //@line 5072
    $73 = $72 & 255; //@line 5073
    $74 = $$0511 + -1 | 0; //@line 5074
    SAFE_HEAP_STORE($74 >> 0 | 0, $73 | 0, 1);
    $75 = $5 + 15 | 0; //@line 5076
    $76 = $75 & 255; //@line 5077
    $77 = $$0511 + -2 | 0; //@line 5078
    SAFE_HEAP_STORE($77 >> 0 | 0, $76 | 0, 1);
    $notrhs = ($3 | 0) < 1; //@line 5080
    $78 = $4 & 8; //@line 5081
    $79 = ($78 | 0) == 0; //@line 5082
    $$0523 = $8; //@line 5083
    $$2473 = $$1472; //@line 5083
    while (1) {
     $80 = ~~$$2473; //@line 5085
     $81 = 3826 + $80 | 0; //@line 5086
     $82 = SAFE_HEAP_LOAD($81 >> 0 | 0, 1, 0) | 0 | 0; //@line 5087
     $83 = $82 & 255; //@line 5088
     $84 = $83 | $42; //@line 5089
     $85 = $84 & 255; //@line 5090
     $86 = $$0523 + 1 | 0; //@line 5091
     SAFE_HEAP_STORE($$0523 >> 0 | 0, $85 | 0, 1);
     $87 = +($80 | 0); //@line 5093
     $88 = $$2473 - $87; //@line 5094
     $89 = $88 * 16.0; //@line 5095
     $90 = $86; //@line 5096
     $91 = $90 - $9 | 0; //@line 5097
     $92 = ($91 | 0) == 1; //@line 5098
     if ($92) {
      $notlhs = $89 == 0.0; //@line 5100
      $or$cond3$not = $notrhs & $notlhs; //@line 5101
      $or$cond = $79 & $or$cond3$not; //@line 5102
      if ($or$cond) {
       $$1524 = $86; //@line 5104
      } else {
       $93 = $$0523 + 2 | 0; //@line 5106
       SAFE_HEAP_STORE($86 >> 0 | 0, 46 | 0, 1);
       $$1524 = $93; //@line 5108
      }
     } else {
      $$1524 = $86; //@line 5111
     }
     $94 = $89 != 0.0; //@line 5113
     if ($94) {
      $$0523 = $$1524; //@line 5115
      $$2473 = $89; //@line 5115
     } else {
      break;
     }
    }
    $95 = ($3 | 0) != 0; //@line 5120
    $96 = $77; //@line 5121
    $97 = $11; //@line 5122
    $98 = $$1524; //@line 5123
    $99 = $98 - $9 | 0; //@line 5124
    $100 = $97 - $96 | 0; //@line 5125
    $101 = $99 + -2 | 0; //@line 5126
    $102 = ($101 | 0) < ($3 | 0); //@line 5127
    $or$cond537 = $95 & $102; //@line 5128
    $103 = $3 + 2 | 0; //@line 5129
    $$pn = $or$cond537 ? $103 : $99; //@line 5130
    $$0525 = $100 + $45 | 0; //@line 5131
    $104 = $$0525 + $$pn | 0; //@line 5132
    _pad_674($0, 32, $2, $104, $4); //@line 5133
    _out($0, $$0521$, $45); //@line 5134
    $105 = $4 ^ 65536; //@line 5135
    _pad_674($0, 48, $2, $104, $105); //@line 5136
    _out($0, $8, $99); //@line 5137
    $106 = $$pn - $99 | 0; //@line 5138
    _pad_674($0, 48, $106, 0, 0); //@line 5139
    _out($0, $77, $100); //@line 5140
    $107 = $4 ^ 8192; //@line 5141
    _pad_674($0, 32, $2, $104, $107); //@line 5142
    $$sink562 = $104; //@line 5143
    break;
   }
   $108 = ($3 | 0) < 0; //@line 5146
   $$539 = $108 ? 6 : $3; //@line 5147
   if ($37) {
    $109 = $36 * 268435456.0; //@line 5149
    $110 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5150
    $111 = $110 + -28 | 0; //@line 5151
    SAFE_HEAP_STORE($7 | 0, $111 | 0, 4);
    $$3 = $109; //@line 5153
    $$pr = $111; //@line 5153
   } else {
    $$pre = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5155
    $$3 = $36; //@line 5156
    $$pr = $$pre; //@line 5156
   }
   $112 = ($$pr | 0) < 0; //@line 5158
   $113 = $6 + 288 | 0; //@line 5159
   $$556 = $112 ? $6 : $113; //@line 5160
   $$0498 = $$556; //@line 5161
   $$4 = $$3; //@line 5161
   while (1) {
    $114 = ~~$$4 >>> 0; //@line 5163
    SAFE_HEAP_STORE($$0498 | 0, $114 | 0, 4);
    $115 = $$0498 + 4 | 0; //@line 5165
    $116 = +($114 >>> 0); //@line 5166
    $117 = $$4 - $116; //@line 5167
    $118 = $117 * 1.0e9; //@line 5168
    $119 = $118 != 0.0; //@line 5169
    if ($119) {
     $$0498 = $115; //@line 5171
     $$4 = $118; //@line 5171
    } else {
     break;
    }
   }
   $120 = ($$pr | 0) > 0; //@line 5176
   if ($120) {
    $$1482661 = $$556; //@line 5178
    $$1499660 = $115; //@line 5178
    $122 = $$pr; //@line 5178
    while (1) {
     $121 = ($122 | 0) < 29; //@line 5180
     $123 = $121 ? $122 : 29; //@line 5181
     $$0488653 = $$1499660 + -4 | 0; //@line 5182
     $124 = $$0488653 >>> 0 < $$1482661 >>> 0; //@line 5183
     if ($124) {
      $$2483$ph = $$1482661; //@line 5185
     } else {
      $$0488655 = $$0488653; //@line 5187
      $$0497654 = 0; //@line 5187
      while (1) {
       $125 = SAFE_HEAP_LOAD($$0488655 | 0, 4, 0) | 0 | 0; //@line 5189
       $126 = _bitshift64Shl($125 | 0, 0, $123 | 0) | 0; //@line 5190
       $127 = tempRet0; //@line 5191
       $128 = _i64Add($126 | 0, $127 | 0, $$0497654 | 0, 0) | 0; //@line 5192
       $129 = tempRet0; //@line 5193
       $130 = ___uremdi3($128 | 0, $129 | 0, 1e9, 0) | 0; //@line 5194
       $131 = tempRet0; //@line 5195
       SAFE_HEAP_STORE($$0488655 | 0, $130 | 0, 4);
       $132 = ___udivdi3($128 | 0, $129 | 0, 1e9, 0) | 0; //@line 5197
       $133 = tempRet0; //@line 5198
       $$0488 = $$0488655 + -4 | 0; //@line 5199
       $134 = $$0488 >>> 0 < $$1482661 >>> 0; //@line 5200
       if ($134) {
        break;
       } else {
        $$0488655 = $$0488; //@line 5204
        $$0497654 = $132; //@line 5204
       }
      }
      $135 = ($132 | 0) == 0; //@line 5207
      if ($135) {
       $$2483$ph = $$1482661; //@line 5209
      } else {
       $136 = $$1482661 + -4 | 0; //@line 5211
       SAFE_HEAP_STORE($136 | 0, $132 | 0, 4);
       $$2483$ph = $136; //@line 5213
      }
     }
     $$2500 = $$1499660; //@line 5216
     while (1) {
      $137 = $$2500 >>> 0 > $$2483$ph >>> 0; //@line 5218
      if (!$137) {
       break;
      }
      $138 = $$2500 + -4 | 0; //@line 5222
      $139 = SAFE_HEAP_LOAD($138 | 0, 4, 0) | 0 | 0; //@line 5223
      $140 = ($139 | 0) == 0; //@line 5224
      if ($140) {
       $$2500 = $138; //@line 5226
      } else {
       break;
      }
     }
     $141 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5231
     $142 = $141 - $123 | 0; //@line 5232
     SAFE_HEAP_STORE($7 | 0, $142 | 0, 4);
     $143 = ($142 | 0) > 0; //@line 5234
     if ($143) {
      $$1482661 = $$2483$ph; //@line 5236
      $$1499660 = $$2500; //@line 5236
      $122 = $142; //@line 5236
     } else {
      $$1482$lcssa = $$2483$ph; //@line 5238
      $$1499$lcssa = $$2500; //@line 5238
      $$pr564 = $142; //@line 5238
      break;
     }
    }
   } else {
    $$1482$lcssa = $$556; //@line 5243
    $$1499$lcssa = $115; //@line 5243
    $$pr564 = $$pr; //@line 5243
   }
   $144 = ($$pr564 | 0) < 0; //@line 5245
   if ($144) {
    $145 = $$539 + 25 | 0; //@line 5247
    $146 = ($145 | 0) / 9 & -1; //@line 5248
    $147 = $146 + 1 | 0; //@line 5249
    $148 = ($40 | 0) == 102; //@line 5250
    $$3484648 = $$1482$lcssa; //@line 5251
    $$3501647 = $$1499$lcssa; //@line 5251
    $150 = $$pr564; //@line 5251
    while (1) {
     $149 = 0 - $150 | 0; //@line 5253
     $151 = ($149 | 0) < 9; //@line 5254
     $152 = $151 ? $149 : 9; //@line 5255
     $153 = $$3484648 >>> 0 < $$3501647 >>> 0; //@line 5256
     if ($153) {
      $157 = 1 << $152; //@line 5258
      $158 = $157 + -1 | 0; //@line 5259
      $159 = 1e9 >>> $152; //@line 5260
      $$0487642 = 0; //@line 5261
      $$1489641 = $$3484648; //@line 5261
      while (1) {
       $160 = SAFE_HEAP_LOAD($$1489641 | 0, 4, 0) | 0 | 0; //@line 5263
       $161 = $160 & $158; //@line 5264
       $162 = $160 >>> $152; //@line 5265
       $163 = $162 + $$0487642 | 0; //@line 5266
       SAFE_HEAP_STORE($$1489641 | 0, $163 | 0, 4);
       $164 = Math_imul($161, $159) | 0; //@line 5268
       $165 = $$1489641 + 4 | 0; //@line 5269
       $166 = $165 >>> 0 < $$3501647 >>> 0; //@line 5270
       if ($166) {
        $$0487642 = $164; //@line 5272
        $$1489641 = $165; //@line 5272
       } else {
        break;
       }
      }
      $167 = SAFE_HEAP_LOAD($$3484648 | 0, 4, 0) | 0 | 0; //@line 5277
      $168 = ($167 | 0) == 0; //@line 5278
      $169 = $$3484648 + 4 | 0; //@line 5279
      $$$3484 = $168 ? $169 : $$3484648; //@line 5280
      $170 = ($164 | 0) == 0; //@line 5281
      if ($170) {
       $$$3484692 = $$$3484; //@line 5283
       $$4502 = $$3501647; //@line 5283
      } else {
       $171 = $$3501647 + 4 | 0; //@line 5285
       SAFE_HEAP_STORE($$3501647 | 0, $164 | 0, 4);
       $$$3484692 = $$$3484; //@line 5287
       $$4502 = $171; //@line 5287
      }
     } else {
      $154 = SAFE_HEAP_LOAD($$3484648 | 0, 4, 0) | 0 | 0; //@line 5290
      $155 = ($154 | 0) == 0; //@line 5291
      $156 = $$3484648 + 4 | 0; //@line 5292
      $$$3484691 = $155 ? $156 : $$3484648; //@line 5293
      $$$3484692 = $$$3484691; //@line 5294
      $$4502 = $$3501647; //@line 5294
     }
     $172 = $148 ? $$556 : $$$3484692; //@line 5296
     $173 = $$4502; //@line 5297
     $174 = $172; //@line 5298
     $175 = $173 - $174 | 0; //@line 5299
     $176 = $175 >> 2; //@line 5300
     $177 = ($176 | 0) > ($147 | 0); //@line 5301
     $178 = $172 + ($147 << 2) | 0; //@line 5302
     $$$4502 = $177 ? $178 : $$4502; //@line 5303
     $179 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5304
     $180 = $179 + $152 | 0; //@line 5305
     SAFE_HEAP_STORE($7 | 0, $180 | 0, 4);
     $181 = ($180 | 0) < 0; //@line 5307
     if ($181) {
      $$3484648 = $$$3484692; //@line 5309
      $$3501647 = $$$4502; //@line 5309
      $150 = $180; //@line 5309
     } else {
      $$3484$lcssa = $$$3484692; //@line 5311
      $$3501$lcssa = $$$4502; //@line 5311
      break;
     }
    }
   } else {
    $$3484$lcssa = $$1482$lcssa; //@line 5316
    $$3501$lcssa = $$1499$lcssa; //@line 5316
   }
   $182 = $$3484$lcssa >>> 0 < $$3501$lcssa >>> 0; //@line 5318
   $183 = $$556; //@line 5319
   if ($182) {
    $184 = $$3484$lcssa; //@line 5321
    $185 = $183 - $184 | 0; //@line 5322
    $186 = $185 >> 2; //@line 5323
    $187 = $186 * 9 | 0; //@line 5324
    $188 = SAFE_HEAP_LOAD($$3484$lcssa | 0, 4, 0) | 0 | 0; //@line 5325
    $189 = $188 >>> 0 < 10; //@line 5326
    if ($189) {
     $$1515 = $187; //@line 5328
    } else {
     $$0514637 = $187; //@line 5330
     $$0530636 = 10; //@line 5330
     while (1) {
      $190 = $$0530636 * 10 | 0; //@line 5332
      $191 = $$0514637 + 1 | 0; //@line 5333
      $192 = $188 >>> 0 < $190 >>> 0; //@line 5334
      if ($192) {
       $$1515 = $191; //@line 5336
       break;
      } else {
       $$0514637 = $191; //@line 5339
       $$0530636 = $190; //@line 5339
      }
     }
    }
   } else {
    $$1515 = 0; //@line 5344
   }
   $193 = ($40 | 0) != 102; //@line 5346
   $194 = $193 ? $$1515 : 0; //@line 5347
   $195 = $$539 - $194 | 0; //@line 5348
   $196 = ($40 | 0) == 103; //@line 5349
   $197 = ($$539 | 0) != 0; //@line 5350
   $198 = $197 & $196; //@line 5351
   $$neg = $198 << 31 >> 31; //@line 5352
   $199 = $195 + $$neg | 0; //@line 5353
   $200 = $$3501$lcssa; //@line 5354
   $201 = $200 - $183 | 0; //@line 5355
   $202 = $201 >> 2; //@line 5356
   $203 = $202 * 9 | 0; //@line 5357
   $204 = $203 + -9 | 0; //@line 5358
   $205 = ($199 | 0) < ($204 | 0); //@line 5359
   if ($205) {
    $206 = $$556 + 4 | 0; //@line 5361
    $207 = $199 + 9216 | 0; //@line 5362
    $208 = ($207 | 0) / 9 & -1; //@line 5363
    $209 = $208 + -1024 | 0; //@line 5364
    $210 = $206 + ($209 << 2) | 0; //@line 5365
    $211 = ($207 | 0) % 9 & -1; //@line 5366
    $$0527629 = $211 + 1 | 0; //@line 5367
    $212 = ($$0527629 | 0) < 9; //@line 5368
    if ($212) {
     $$0527631 = $$0527629; //@line 5370
     $$1531630 = 10; //@line 5370
     while (1) {
      $213 = $$1531630 * 10 | 0; //@line 5372
      $$0527 = $$0527631 + 1 | 0; //@line 5373
      $exitcond = ($$0527 | 0) == 9; //@line 5374
      if ($exitcond) {
       $$1531$lcssa = $213; //@line 5376
       break;
      } else {
       $$0527631 = $$0527; //@line 5379
       $$1531630 = $213; //@line 5379
      }
     }
    } else {
     $$1531$lcssa = 10; //@line 5383
    }
    $214 = SAFE_HEAP_LOAD($210 | 0, 4, 0) | 0 | 0; //@line 5385
    $215 = ($214 >>> 0) % ($$1531$lcssa >>> 0) & -1; //@line 5386
    $216 = ($215 | 0) == 0; //@line 5387
    $217 = $210 + 4 | 0; //@line 5388
    $218 = ($217 | 0) == ($$3501$lcssa | 0); //@line 5389
    $or$cond541 = $218 & $216; //@line 5390
    if ($or$cond541) {
     $$4492 = $210; //@line 5392
     $$4518 = $$1515; //@line 5392
     $$8 = $$3484$lcssa; //@line 5392
    } else {
     $219 = ($214 >>> 0) / ($$1531$lcssa >>> 0) & -1; //@line 5394
     $220 = $219 & 1; //@line 5395
     $221 = ($220 | 0) == 0; //@line 5396
     $$542 = $221 ? 9007199254740992.0 : 9007199254740994.0; //@line 5397
     $222 = ($$1531$lcssa | 0) / 2 & -1; //@line 5398
     $223 = $215 >>> 0 < $222 >>> 0; //@line 5399
     $224 = ($215 | 0) == ($222 | 0); //@line 5400
     $or$cond544 = $218 & $224; //@line 5401
     $$559 = $or$cond544 ? 1.0 : 1.5; //@line 5402
     $$$559 = $223 ? .5 : $$559; //@line 5403
     $225 = ($$0520 | 0) == 0; //@line 5404
     if ($225) {
      $$1467 = $$$559; //@line 5406
      $$1469 = $$542; //@line 5406
     } else {
      $226 = SAFE_HEAP_LOAD($$0521 >> 0 | 0, 1, 0) | 0 | 0; //@line 5408
      $227 = $226 << 24 >> 24 == 45; //@line 5409
      $228 = -$$542; //@line 5410
      $229 = -$$$559; //@line 5411
      $$$542 = $227 ? $228 : $$542; //@line 5412
      $$$$559 = $227 ? $229 : $$$559; //@line 5413
      $$1467 = $$$$559; //@line 5414
      $$1469 = $$$542; //@line 5414
     }
     $230 = $214 - $215 | 0; //@line 5416
     SAFE_HEAP_STORE($210 | 0, $230 | 0, 4);
     $231 = $$1469 + $$1467; //@line 5418
     $232 = $231 != $$1469; //@line 5419
     if ($232) {
      $233 = $230 + $$1531$lcssa | 0; //@line 5421
      SAFE_HEAP_STORE($210 | 0, $233 | 0, 4);
      $234 = $233 >>> 0 > 999999999; //@line 5423
      if ($234) {
       $$5486623 = $$3484$lcssa; //@line 5425
       $$sink545622 = $210; //@line 5425
       while (1) {
        $235 = $$sink545622 + -4 | 0; //@line 5427
        SAFE_HEAP_STORE($$sink545622 | 0, 0 | 0, 4);
        $236 = $235 >>> 0 < $$5486623 >>> 0; //@line 5429
        if ($236) {
         $237 = $$5486623 + -4 | 0; //@line 5431
         SAFE_HEAP_STORE($237 | 0, 0 | 0, 4);
         $$6 = $237; //@line 5433
        } else {
         $$6 = $$5486623; //@line 5435
        }
        $238 = SAFE_HEAP_LOAD($235 | 0, 4, 0) | 0 | 0; //@line 5437
        $239 = $238 + 1 | 0; //@line 5438
        SAFE_HEAP_STORE($235 | 0, $239 | 0, 4);
        $240 = $239 >>> 0 > 999999999; //@line 5440
        if ($240) {
         $$5486623 = $$6; //@line 5442
         $$sink545622 = $235; //@line 5442
        } else {
         $$5486$lcssa = $$6; //@line 5444
         $$sink545$lcssa = $235; //@line 5444
         break;
        }
       }
      } else {
       $$5486$lcssa = $$3484$lcssa; //@line 5449
       $$sink545$lcssa = $210; //@line 5449
      }
      $241 = $$5486$lcssa; //@line 5451
      $242 = $183 - $241 | 0; //@line 5452
      $243 = $242 >> 2; //@line 5453
      $244 = $243 * 9 | 0; //@line 5454
      $245 = SAFE_HEAP_LOAD($$5486$lcssa | 0, 4, 0) | 0 | 0; //@line 5455
      $246 = $245 >>> 0 < 10; //@line 5456
      if ($246) {
       $$4492 = $$sink545$lcssa; //@line 5458
       $$4518 = $244; //@line 5458
       $$8 = $$5486$lcssa; //@line 5458
      } else {
       $$2516618 = $244; //@line 5460
       $$2532617 = 10; //@line 5460
       while (1) {
        $247 = $$2532617 * 10 | 0; //@line 5462
        $248 = $$2516618 + 1 | 0; //@line 5463
        $249 = $245 >>> 0 < $247 >>> 0; //@line 5464
        if ($249) {
         $$4492 = $$sink545$lcssa; //@line 5466
         $$4518 = $248; //@line 5466
         $$8 = $$5486$lcssa; //@line 5466
         break;
        } else {
         $$2516618 = $248; //@line 5469
         $$2532617 = $247; //@line 5469
        }
       }
      }
     } else {
      $$4492 = $210; //@line 5474
      $$4518 = $$1515; //@line 5474
      $$8 = $$3484$lcssa; //@line 5474
     }
    }
    $250 = $$4492 + 4 | 0; //@line 5477
    $251 = $$3501$lcssa >>> 0 > $250 >>> 0; //@line 5478
    $$$3501 = $251 ? $250 : $$3501$lcssa; //@line 5479
    $$5519$ph = $$4518; //@line 5480
    $$7505$ph = $$$3501; //@line 5480
    $$9$ph = $$8; //@line 5480
   } else {
    $$5519$ph = $$1515; //@line 5482
    $$7505$ph = $$3501$lcssa; //@line 5482
    $$9$ph = $$3484$lcssa; //@line 5482
   }
   $$7505 = $$7505$ph; //@line 5484
   while (1) {
    $252 = $$7505 >>> 0 > $$9$ph >>> 0; //@line 5486
    if (!$252) {
     $$lcssa673 = 0; //@line 5488
     break;
    }
    $253 = $$7505 + -4 | 0; //@line 5491
    $254 = SAFE_HEAP_LOAD($253 | 0, 4, 0) | 0 | 0; //@line 5492
    $255 = ($254 | 0) == 0; //@line 5493
    if ($255) {
     $$7505 = $253; //@line 5495
    } else {
     $$lcssa673 = 1; //@line 5497
     break;
    }
   }
   $256 = 0 - $$5519$ph | 0; //@line 5501
   do {
    if ($196) {
     $not$ = $197 ^ 1; //@line 5504
     $257 = $not$ & 1; //@line 5505
     $$539$ = $257 + $$539 | 0; //@line 5506
     $258 = ($$539$ | 0) > ($$5519$ph | 0); //@line 5507
     $259 = ($$5519$ph | 0) > -5; //@line 5508
     $or$cond6 = $258 & $259; //@line 5509
     if ($or$cond6) {
      $260 = $5 + -1 | 0; //@line 5511
      $$neg567 = $$539$ + -1 | 0; //@line 5512
      $261 = $$neg567 - $$5519$ph | 0; //@line 5513
      $$0479 = $260; //@line 5514
      $$2476 = $261; //@line 5514
     } else {
      $262 = $5 + -2 | 0; //@line 5516
      $263 = $$539$ + -1 | 0; //@line 5517
      $$0479 = $262; //@line 5518
      $$2476 = $263; //@line 5518
     }
     $264 = $4 & 8; //@line 5520
     $265 = ($264 | 0) == 0; //@line 5521
     if ($265) {
      if ($$lcssa673) {
       $266 = $$7505 + -4 | 0; //@line 5524
       $267 = SAFE_HEAP_LOAD($266 | 0, 4, 0) | 0 | 0; //@line 5525
       $268 = ($267 | 0) == 0; //@line 5526
       if ($268) {
        $$2529 = 9; //@line 5528
       } else {
        $269 = ($267 >>> 0) % 10 & -1; //@line 5530
        $270 = ($269 | 0) == 0; //@line 5531
        if ($270) {
         $$1528614 = 0; //@line 5533
         $$3533613 = 10; //@line 5533
         while (1) {
          $271 = $$3533613 * 10 | 0; //@line 5535
          $272 = $$1528614 + 1 | 0; //@line 5536
          $273 = ($267 >>> 0) % ($271 >>> 0) & -1; //@line 5537
          $274 = ($273 | 0) == 0; //@line 5538
          if ($274) {
           $$1528614 = $272; //@line 5540
           $$3533613 = $271; //@line 5540
          } else {
           $$2529 = $272; //@line 5542
           break;
          }
         }
        } else {
         $$2529 = 0; //@line 5547
        }
       }
      } else {
       $$2529 = 9; //@line 5551
      }
      $275 = $$0479 | 32; //@line 5553
      $276 = ($275 | 0) == 102; //@line 5554
      $277 = $$7505; //@line 5555
      $278 = $277 - $183 | 0; //@line 5556
      $279 = $278 >> 2; //@line 5557
      $280 = $279 * 9 | 0; //@line 5558
      $281 = $280 + -9 | 0; //@line 5559
      if ($276) {
       $282 = $281 - $$2529 | 0; //@line 5561
       $283 = ($282 | 0) > 0; //@line 5562
       $$546 = $283 ? $282 : 0; //@line 5563
       $284 = ($$2476 | 0) < ($$546 | 0); //@line 5564
       $$2476$$547 = $284 ? $$2476 : $$546; //@line 5565
       $$1480 = $$0479; //@line 5566
       $$3477 = $$2476$$547; //@line 5566
       $$pre$phi690Z2D = 0; //@line 5566
       break;
      } else {
       $285 = $281 + $$5519$ph | 0; //@line 5569
       $286 = $285 - $$2529 | 0; //@line 5570
       $287 = ($286 | 0) > 0; //@line 5571
       $$548 = $287 ? $286 : 0; //@line 5572
       $288 = ($$2476 | 0) < ($$548 | 0); //@line 5573
       $$2476$$549 = $288 ? $$2476 : $$548; //@line 5574
       $$1480 = $$0479; //@line 5575
       $$3477 = $$2476$$549; //@line 5575
       $$pre$phi690Z2D = 0; //@line 5575
       break;
      }
     } else {
      $$1480 = $$0479; //@line 5579
      $$3477 = $$2476; //@line 5579
      $$pre$phi690Z2D = $264; //@line 5579
     }
    } else {
     $$pre689 = $4 & 8; //@line 5582
     $$1480 = $5; //@line 5583
     $$3477 = $$539; //@line 5583
     $$pre$phi690Z2D = $$pre689; //@line 5583
    }
   } while (0);
   $289 = $$3477 | $$pre$phi690Z2D; //@line 5586
   $290 = ($289 | 0) != 0; //@line 5587
   $291 = $290 & 1; //@line 5588
   $292 = $$1480 | 32; //@line 5589
   $293 = ($292 | 0) == 102; //@line 5590
   if ($293) {
    $294 = ($$5519$ph | 0) > 0; //@line 5592
    $295 = $294 ? $$5519$ph : 0; //@line 5593
    $$2513 = 0; //@line 5594
    $$pn566 = $295; //@line 5594
   } else {
    $296 = ($$5519$ph | 0) < 0; //@line 5596
    $297 = $296 ? $256 : $$5519$ph; //@line 5597
    $298 = ($297 | 0) < 0; //@line 5598
    $299 = $298 << 31 >> 31; //@line 5599
    $300 = _fmt_u($297, $299, $11) | 0; //@line 5600
    $301 = $11; //@line 5601
    $302 = $300; //@line 5602
    $303 = $301 - $302 | 0; //@line 5603
    $304 = ($303 | 0) < 2; //@line 5604
    if ($304) {
     $$1512607 = $300; //@line 5606
     while (1) {
      $305 = $$1512607 + -1 | 0; //@line 5608
      SAFE_HEAP_STORE($305 >> 0 | 0, 48 | 0, 1);
      $306 = $305; //@line 5610
      $307 = $301 - $306 | 0; //@line 5611
      $308 = ($307 | 0) < 2; //@line 5612
      if ($308) {
       $$1512607 = $305; //@line 5614
      } else {
       $$1512$lcssa = $305; //@line 5616
       break;
      }
     }
    } else {
     $$1512$lcssa = $300; //@line 5621
    }
    $309 = $$5519$ph >> 31; //@line 5623
    $310 = $309 & 2; //@line 5624
    $311 = $310 + 43 | 0; //@line 5625
    $312 = $311 & 255; //@line 5626
    $313 = $$1512$lcssa + -1 | 0; //@line 5627
    SAFE_HEAP_STORE($313 >> 0 | 0, $312 | 0, 1);
    $314 = $$1480 & 255; //@line 5629
    $315 = $$1512$lcssa + -2 | 0; //@line 5630
    SAFE_HEAP_STORE($315 >> 0 | 0, $314 | 0, 1);
    $316 = $315; //@line 5632
    $317 = $301 - $316 | 0; //@line 5633
    $$2513 = $315; //@line 5634
    $$pn566 = $317; //@line 5634
   }
   $318 = $$0520 + 1 | 0; //@line 5636
   $319 = $318 + $$3477 | 0; //@line 5637
   $$1526 = $319 + $291 | 0; //@line 5638
   $320 = $$1526 + $$pn566 | 0; //@line 5639
   _pad_674($0, 32, $2, $320, $4); //@line 5640
   _out($0, $$0521, $$0520); //@line 5641
   $321 = $4 ^ 65536; //@line 5642
   _pad_674($0, 48, $2, $320, $321); //@line 5643
   if ($293) {
    $322 = $$9$ph >>> 0 > $$556 >>> 0; //@line 5645
    $$0496$$9 = $322 ? $$556 : $$9$ph; //@line 5646
    $323 = $8 + 9 | 0; //@line 5647
    $324 = $323; //@line 5648
    $325 = $8 + 8 | 0; //@line 5649
    $$5493597 = $$0496$$9; //@line 5650
    while (1) {
     $326 = SAFE_HEAP_LOAD($$5493597 | 0, 4, 0) | 0 | 0; //@line 5652
     $327 = _fmt_u($326, 0, $323) | 0; //@line 5653
     $328 = ($$5493597 | 0) == ($$0496$$9 | 0); //@line 5654
     if ($328) {
      $334 = ($327 | 0) == ($323 | 0); //@line 5656
      if ($334) {
       SAFE_HEAP_STORE($325 >> 0 | 0, 48 | 0, 1);
       $$1465 = $325; //@line 5659
      } else {
       $$1465 = $327; //@line 5661
      }
     } else {
      $329 = $327 >>> 0 > $8 >>> 0; //@line 5664
      if ($329) {
       $330 = $327; //@line 5666
       $331 = $330 - $9 | 0; //@line 5667
       _memset($8 | 0, 48, $331 | 0) | 0; //@line 5668
       $$0464594 = $327; //@line 5669
       while (1) {
        $332 = $$0464594 + -1 | 0; //@line 5671
        $333 = $332 >>> 0 > $8 >>> 0; //@line 5672
        if ($333) {
         $$0464594 = $332; //@line 5674
        } else {
         $$1465 = $332; //@line 5676
         break;
        }
       }
      } else {
       $$1465 = $327; //@line 5681
      }
     }
     $335 = $$1465; //@line 5684
     $336 = $324 - $335 | 0; //@line 5685
     _out($0, $$1465, $336); //@line 5686
     $337 = $$5493597 + 4 | 0; //@line 5687
     $338 = $337 >>> 0 > $$556 >>> 0; //@line 5688
     if ($338) {
      break;
     } else {
      $$5493597 = $337; //@line 5692
     }
    }
    $339 = ($289 | 0) == 0; //@line 5695
    if (!$339) {
     _out($0, 3842, 1); //@line 5697
    }
    $340 = $337 >>> 0 < $$7505 >>> 0; //@line 5699
    $341 = ($$3477 | 0) > 0; //@line 5700
    $342 = $340 & $341; //@line 5701
    if ($342) {
     $$4478590 = $$3477; //@line 5703
     $$6494589 = $337; //@line 5703
     while (1) {
      $343 = SAFE_HEAP_LOAD($$6494589 | 0, 4, 0) | 0 | 0; //@line 5705
      $344 = _fmt_u($343, 0, $323) | 0; //@line 5706
      $345 = $344 >>> 0 > $8 >>> 0; //@line 5707
      if ($345) {
       $346 = $344; //@line 5709
       $347 = $346 - $9 | 0; //@line 5710
       _memset($8 | 0, 48, $347 | 0) | 0; //@line 5711
       $$0463584 = $344; //@line 5712
       while (1) {
        $348 = $$0463584 + -1 | 0; //@line 5714
        $349 = $348 >>> 0 > $8 >>> 0; //@line 5715
        if ($349) {
         $$0463584 = $348; //@line 5717
        } else {
         $$0463$lcssa = $348; //@line 5719
         break;
        }
       }
      } else {
       $$0463$lcssa = $344; //@line 5724
      }
      $350 = ($$4478590 | 0) < 9; //@line 5726
      $351 = $350 ? $$4478590 : 9; //@line 5727
      _out($0, $$0463$lcssa, $351); //@line 5728
      $352 = $$6494589 + 4 | 0; //@line 5729
      $353 = $$4478590 + -9 | 0; //@line 5730
      $354 = $352 >>> 0 < $$7505 >>> 0; //@line 5731
      $355 = ($$4478590 | 0) > 9; //@line 5732
      $356 = $354 & $355; //@line 5733
      if ($356) {
       $$4478590 = $353; //@line 5735
       $$6494589 = $352; //@line 5735
      } else {
       $$4478$lcssa = $353; //@line 5737
       break;
      }
     }
    } else {
     $$4478$lcssa = $$3477; //@line 5742
    }
    $357 = $$4478$lcssa + 9 | 0; //@line 5744
    _pad_674($0, 48, $357, 9, 0); //@line 5745
   } else {
    $358 = $$9$ph + 4 | 0; //@line 5747
    $$7505$ = $$lcssa673 ? $$7505 : $358; //@line 5748
    $359 = ($$3477 | 0) > -1; //@line 5749
    if ($359) {
     $360 = $8 + 9 | 0; //@line 5751
     $361 = ($$pre$phi690Z2D | 0) == 0; //@line 5752
     $362 = $360; //@line 5753
     $363 = 0 - $9 | 0; //@line 5754
     $364 = $8 + 8 | 0; //@line 5755
     $$5602 = $$3477; //@line 5756
     $$7495601 = $$9$ph; //@line 5756
     while (1) {
      $365 = SAFE_HEAP_LOAD($$7495601 | 0, 4, 0) | 0 | 0; //@line 5758
      $366 = _fmt_u($365, 0, $360) | 0; //@line 5759
      $367 = ($366 | 0) == ($360 | 0); //@line 5760
      if ($367) {
       SAFE_HEAP_STORE($364 >> 0 | 0, 48 | 0, 1);
       $$0 = $364; //@line 5763
      } else {
       $$0 = $366; //@line 5765
      }
      $368 = ($$7495601 | 0) == ($$9$ph | 0); //@line 5767
      do {
       if ($368) {
        $372 = $$0 + 1 | 0; //@line 5770
        _out($0, $$0, 1); //@line 5771
        $373 = ($$5602 | 0) < 1; //@line 5772
        $or$cond554 = $361 & $373; //@line 5773
        if ($or$cond554) {
         $$2 = $372; //@line 5775
         break;
        }
        _out($0, 3842, 1); //@line 5778
        $$2 = $372; //@line 5779
       } else {
        $369 = $$0 >>> 0 > $8 >>> 0; //@line 5781
        if (!$369) {
         $$2 = $$0; //@line 5783
         break;
        }
        $scevgep684 = $$0 + $363 | 0; //@line 5786
        $scevgep684685 = $scevgep684; //@line 5787
        _memset($8 | 0, 48, $scevgep684685 | 0) | 0; //@line 5788
        $$1598 = $$0; //@line 5789
        while (1) {
         $370 = $$1598 + -1 | 0; //@line 5791
         $371 = $370 >>> 0 > $8 >>> 0; //@line 5792
         if ($371) {
          $$1598 = $370; //@line 5794
         } else {
          $$2 = $370; //@line 5796
          break;
         }
        }
       }
      } while (0);
      $374 = $$2; //@line 5802
      $375 = $362 - $374 | 0; //@line 5803
      $376 = ($$5602 | 0) > ($375 | 0); //@line 5804
      $377 = $376 ? $375 : $$5602; //@line 5805
      _out($0, $$2, $377); //@line 5806
      $378 = $$5602 - $375 | 0; //@line 5807
      $379 = $$7495601 + 4 | 0; //@line 5808
      $380 = $379 >>> 0 < $$7505$ >>> 0; //@line 5809
      $381 = ($378 | 0) > -1; //@line 5810
      $382 = $380 & $381; //@line 5811
      if ($382) {
       $$5602 = $378; //@line 5813
       $$7495601 = $379; //@line 5813
      } else {
       $$5$lcssa = $378; //@line 5815
       break;
      }
     }
    } else {
     $$5$lcssa = $$3477; //@line 5820
    }
    $383 = $$5$lcssa + 18 | 0; //@line 5822
    _pad_674($0, 48, $383, 18, 0); //@line 5823
    $384 = $11; //@line 5824
    $385 = $$2513; //@line 5825
    $386 = $384 - $385 | 0; //@line 5826
    _out($0, $$2513, $386); //@line 5827
   }
   $387 = $4 ^ 8192; //@line 5829
   _pad_674($0, 32, $2, $320, $387); //@line 5830
   $$sink562 = $320; //@line 5831
  } else {
   $27 = $5 & 32; //@line 5833
   $28 = ($27 | 0) != 0; //@line 5834
   $29 = $28 ? 3810 : 3814; //@line 5835
   $30 = $$0471 != $$0471 | 0.0 != 0.0; //@line 5836
   $31 = $28 ? 3818 : 3822; //@line 5837
   $$0510 = $30 ? $31 : $29; //@line 5838
   $32 = $$0520 + 3 | 0; //@line 5839
   $33 = $4 & -65537; //@line 5840
   _pad_674($0, 32, $2, $32, $33); //@line 5841
   _out($0, $$0521, $$0520); //@line 5842
   _out($0, $$0510, 3); //@line 5843
   $34 = $4 ^ 8192; //@line 5844
   _pad_674($0, 32, $2, $32, $34); //@line 5845
   $$sink562 = $32; //@line 5846
  }
 } while (0);
 $388 = ($$sink562 | 0) < ($2 | 0); //@line 5849
 $$555 = $388 ? $2 : $$sink562; //@line 5850
 STACKTOP = sp; //@line 5851
 return $$555 | 0; //@line 5851
}
function _printf_core($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 3412
 $1 = $1 | 0; //@line 3413
 $2 = $2 | 0; //@line 3414
 $3 = $3 | 0; //@line 3415
 $4 = $4 | 0; //@line 3416
 var $$ = 0, $$$ = 0, $$$0259 = 0, $$$0262 = 0, $$$0269 = 0, $$$4266 = 0, $$$5 = 0, $$0 = 0, $$0228 = 0, $$0228$ = 0, $$0229322 = 0, $$0232 = 0, $$0235 = 0, $$0237 = 0, $$0240$lcssa = 0, $$0240$lcssa357 = 0, $$0240321 = 0, $$0243 = 0, $$0247 = 0, $$0249$lcssa = 0; //@line 3417
 var $$0249306 = 0, $$0252 = 0, $$0253 = 0, $$0254 = 0, $$0254$$0254$ = 0, $$0259 = 0, $$0262$lcssa = 0, $$0262311 = 0, $$0269 = 0, $$0269$phi = 0, $$1 = 0, $$1230333 = 0, $$1233 = 0, $$1236 = 0, $$1238 = 0, $$1241332 = 0, $$1244320 = 0, $$1248 = 0, $$1250 = 0, $$1255 = 0; //@line 3418
 var $$1260 = 0, $$1263 = 0, $$1263$ = 0, $$1270 = 0, $$2 = 0, $$2234 = 0, $$2239 = 0, $$2242305 = 0, $$2245 = 0, $$2251 = 0, $$2256 = 0, $$2256$ = 0, $$2256$$$2256 = 0, $$2261 = 0, $$2271 = 0, $$284$ = 0, $$289 = 0, $$290 = 0, $$3257 = 0, $$3265 = 0; //@line 3419
 var $$3272 = 0, $$3303 = 0, $$377 = 0, $$4258355 = 0, $$4266 = 0, $$5 = 0, $$6268 = 0, $$lcssa295 = 0, $$pre = 0, $$pre346 = 0, $$pre347 = 0, $$pre347$pre = 0, $$pre349 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0; //@line 3420
 var $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0; //@line 3421
 var $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0; //@line 3422
 var $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0, $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0; //@line 3423
 var $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0, $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0; //@line 3424
 var $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0, $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0; //@line 3425
 var $197 = 0, $198 = 0, $199 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0, $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0; //@line 3426
 var $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0, $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0; //@line 3427
 var $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0, $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0; //@line 3428
 var $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0, $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0; //@line 3429
 var $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0, $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0; //@line 3430
 var $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0, $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0; //@line 3431
 var $306 = 0.0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0, $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $319 = 0, $32 = 0, $320 = 0, $321 = 0, $322 = 0, $323 = 0;
 var $324 = 0, $325 = 0, $326 = 0, $327 = 0, $328 = 0, $329 = 0, $33 = 0, $330 = 0, $331 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0; //@line 3433
 var $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0; //@line 3434
 var $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0; //@line 3435
 var $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0; //@line 3436
 var $arglist_current = 0, $arglist_current2 = 0, $arglist_next = 0, $arglist_next3 = 0, $expanded = 0, $expanded10 = 0, $expanded11 = 0, $expanded13 = 0, $expanded14 = 0, $expanded15 = 0, $expanded4 = 0, $expanded6 = 0, $expanded7 = 0, $expanded8 = 0, $isdigit = 0, $isdigit275 = 0, $isdigit277 = 0, $isdigittmp = 0, $isdigittmp$ = 0, $isdigittmp274 = 0; //@line 3437
 var $isdigittmp276 = 0, $narrow = 0, $or$cond = 0, $or$cond281 = 0, $or$cond283 = 0, $or$cond286 = 0, $storemerge = 0, $storemerge273310 = 0, $storemerge278 = 0, $trunc = 0, label = 0, sp = 0; //@line 3438
 sp = STACKTOP; //@line 3439
 STACKTOP = STACKTOP + 64 | 0; //@line 3440
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 3440
 $5 = sp + 16 | 0; //@line 3441
 $6 = sp; //@line 3442
 $7 = sp + 24 | 0; //@line 3443
 $8 = sp + 8 | 0; //@line 3444
 $9 = sp + 20 | 0; //@line 3445
 SAFE_HEAP_STORE($5 | 0, $1 | 0, 4);
 $10 = ($0 | 0) != (0 | 0); //@line 3447
 $11 = $7 + 40 | 0; //@line 3448
 $12 = $11; //@line 3449
 $13 = $7 + 39 | 0; //@line 3450
 $14 = $8 + 4 | 0; //@line 3451
 $$0243 = 0; //@line 3452
 $$0247 = 0; //@line 3452
 $$0269 = 0; //@line 3452
 $21 = $1; //@line 3452
 L1 : while (1) {
  $15 = ($$0247 | 0) > -1; //@line 3454
  do {
   if ($15) {
    $16 = 2147483647 - $$0247 | 0; //@line 3457
    $17 = ($$0243 | 0) > ($16 | 0); //@line 3458
    if ($17) {
     $18 = ___errno_location() | 0; //@line 3460
     SAFE_HEAP_STORE($18 | 0, 75 | 0, 4);
     $$1248 = -1; //@line 3462
     break;
    } else {
     $19 = $$0243 + $$0247 | 0; //@line 3465
     $$1248 = $19; //@line 3466
     break;
    }
   } else {
    $$1248 = $$0247; //@line 3470
   }
  } while (0);
  $20 = SAFE_HEAP_LOAD($21 >> 0 | 0, 1, 0) | 0 | 0; //@line 3473
  $22 = $20 << 24 >> 24 == 0; //@line 3474
  if ($22) {
   label = 87; //@line 3476
   break;
  } else {
   $23 = $20; //@line 3479
   $25 = $21; //@line 3479
  }
  L9 : while (1) {
   switch ($23 << 24 >> 24) {
   case 37:
    {
     $$0249306 = $25; //@line 3484
     $27 = $25; //@line 3484
     label = 9; //@line 3485
     break L9;
     break;
    }
   case 0:
    {
     $$0249$lcssa = $25; //@line 3490
     $39 = $25; //@line 3490
     break L9;
     break;
    }
   default:
    {}
   }
   $24 = $25 + 1 | 0; //@line 3497
   SAFE_HEAP_STORE($5 | 0, $24 | 0, 4);
   $$pre = SAFE_HEAP_LOAD($24 >> 0 | 0, 1, 0) | 0 | 0; //@line 3499
   $23 = $$pre; //@line 3500
   $25 = $24; //@line 3500
  }
  L12 : do {
   if ((label | 0) == 9) {
    while (1) {
     label = 0; //@line 3505
     $26 = $27 + 1 | 0; //@line 3506
     $28 = SAFE_HEAP_LOAD($26 >> 0 | 0, 1, 0) | 0 | 0; //@line 3507
     $29 = $28 << 24 >> 24 == 37; //@line 3508
     if (!$29) {
      $$0249$lcssa = $$0249306; //@line 3510
      $39 = $27; //@line 3510
      break L12;
     }
     $30 = $$0249306 + 1 | 0; //@line 3513
     $31 = $27 + 2 | 0; //@line 3514
     SAFE_HEAP_STORE($5 | 0, $31 | 0, 4);
     $32 = SAFE_HEAP_LOAD($31 >> 0 | 0, 1, 0) | 0 | 0; //@line 3516
     $33 = $32 << 24 >> 24 == 37; //@line 3517
     if ($33) {
      $$0249306 = $30; //@line 3519
      $27 = $31; //@line 3519
      label = 9; //@line 3520
     } else {
      $$0249$lcssa = $30; //@line 3522
      $39 = $31; //@line 3522
      break;
     }
    }
   }
  } while (0);
  $34 = $$0249$lcssa; //@line 3528
  $35 = $21; //@line 3529
  $36 = $34 - $35 | 0; //@line 3530
  if ($10) {
   _out($0, $21, $36); //@line 3532
  }
  $37 = ($36 | 0) == 0; //@line 3534
  if (!$37) {
   $$0269$phi = $$0269; //@line 3536
   $$0243 = $36; //@line 3536
   $$0247 = $$1248; //@line 3536
   $21 = $39; //@line 3536
   $$0269 = $$0269$phi; //@line 3536
   continue;
  }
  $38 = $39 + 1 | 0; //@line 3539
  $40 = SAFE_HEAP_LOAD($38 >> 0 | 0, 1, 0) | 0 | 0; //@line 3540
  $41 = $40 << 24 >> 24; //@line 3541
  $isdigittmp = $41 + -48 | 0; //@line 3542
  $isdigit = $isdigittmp >>> 0 < 10; //@line 3543
  if ($isdigit) {
   $42 = $39 + 2 | 0; //@line 3545
   $43 = SAFE_HEAP_LOAD($42 >> 0 | 0, 1, 0) | 0 | 0; //@line 3546
   $44 = $43 << 24 >> 24 == 36; //@line 3547
   $45 = $39 + 3 | 0; //@line 3548
   $$377 = $44 ? $45 : $38; //@line 3549
   $$$0269 = $44 ? 1 : $$0269; //@line 3550
   $isdigittmp$ = $44 ? $isdigittmp : -1; //@line 3551
   $$0253 = $isdigittmp$; //@line 3552
   $$1270 = $$$0269; //@line 3552
   $storemerge = $$377; //@line 3552
  } else {
   $$0253 = -1; //@line 3554
   $$1270 = $$0269; //@line 3554
   $storemerge = $38; //@line 3554
  }
  SAFE_HEAP_STORE($5 | 0, $storemerge | 0, 4);
  $46 = SAFE_HEAP_LOAD($storemerge >> 0 | 0, 1, 0) | 0 | 0; //@line 3557
  $47 = $46 << 24 >> 24; //@line 3558
  $48 = $47 + -32 | 0; //@line 3559
  $49 = $48 >>> 0 < 32; //@line 3560
  L24 : do {
   if ($49) {
    $$0262311 = 0; //@line 3563
    $329 = $46; //@line 3563
    $51 = $48; //@line 3563
    $storemerge273310 = $storemerge; //@line 3563
    while (1) {
     $50 = 1 << $51; //@line 3565
     $52 = $50 & 75913; //@line 3566
     $53 = ($52 | 0) == 0; //@line 3567
     if ($53) {
      $$0262$lcssa = $$0262311; //@line 3569
      $$lcssa295 = $329; //@line 3569
      $62 = $storemerge273310; //@line 3569
      break L24;
     }
     $54 = $50 | $$0262311; //@line 3572
     $55 = $storemerge273310 + 1 | 0; //@line 3573
     SAFE_HEAP_STORE($5 | 0, $55 | 0, 4);
     $56 = SAFE_HEAP_LOAD($55 >> 0 | 0, 1, 0) | 0 | 0; //@line 3575
     $57 = $56 << 24 >> 24; //@line 3576
     $58 = $57 + -32 | 0; //@line 3577
     $59 = $58 >>> 0 < 32; //@line 3578
     if ($59) {
      $$0262311 = $54; //@line 3580
      $329 = $56; //@line 3580
      $51 = $58; //@line 3580
      $storemerge273310 = $55; //@line 3580
     } else {
      $$0262$lcssa = $54; //@line 3582
      $$lcssa295 = $56; //@line 3582
      $62 = $55; //@line 3582
      break;
     }
    }
   } else {
    $$0262$lcssa = 0; //@line 3587
    $$lcssa295 = $46; //@line 3587
    $62 = $storemerge; //@line 3587
   }
  } while (0);
  $60 = $$lcssa295 << 24 >> 24 == 42; //@line 3590
  if ($60) {
   $61 = $62 + 1 | 0; //@line 3592
   $63 = SAFE_HEAP_LOAD($61 >> 0 | 0, 1, 0) | 0 | 0; //@line 3593
   $64 = $63 << 24 >> 24; //@line 3594
   $isdigittmp276 = $64 + -48 | 0; //@line 3595
   $isdigit277 = $isdigittmp276 >>> 0 < 10; //@line 3596
   if ($isdigit277) {
    $65 = $62 + 2 | 0; //@line 3598
    $66 = SAFE_HEAP_LOAD($65 >> 0 | 0, 1, 0) | 0 | 0; //@line 3599
    $67 = $66 << 24 >> 24 == 36; //@line 3600
    if ($67) {
     $68 = $4 + ($isdigittmp276 << 2) | 0; //@line 3602
     SAFE_HEAP_STORE($68 | 0, 10 | 0, 4);
     $69 = SAFE_HEAP_LOAD($61 >> 0 | 0, 1, 0) | 0 | 0; //@line 3604
     $70 = $69 << 24 >> 24; //@line 3605
     $71 = $70 + -48 | 0; //@line 3606
     $72 = $3 + ($71 << 3) | 0; //@line 3607
     $73 = $72; //@line 3608
     $74 = $73; //@line 3609
     $75 = SAFE_HEAP_LOAD($74 | 0, 4, 0) | 0 | 0; //@line 3610
     $76 = $73 + 4 | 0; //@line 3611
     $77 = $76; //@line 3612
     $78 = SAFE_HEAP_LOAD($77 | 0, 4, 0) | 0 | 0; //@line 3613
     $79 = $62 + 3 | 0; //@line 3614
     $$0259 = $75; //@line 3615
     $$2271 = 1; //@line 3615
     $storemerge278 = $79; //@line 3615
    } else {
     label = 23; //@line 3617
    }
   } else {
    label = 23; //@line 3620
   }
   if ((label | 0) == 23) {
    label = 0; //@line 3623
    $80 = ($$1270 | 0) == 0; //@line 3624
    if (!$80) {
     $$0 = -1; //@line 3626
     break;
    }
    if ($10) {
     $arglist_current = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 3630
     $81 = $arglist_current; //@line 3631
     $82 = 0 + 4 | 0; //@line 3632
     $expanded4 = $82; //@line 3633
     $expanded = $expanded4 - 1 | 0; //@line 3634
     $83 = $81 + $expanded | 0; //@line 3635
     $84 = 0 + 4 | 0; //@line 3636
     $expanded8 = $84; //@line 3637
     $expanded7 = $expanded8 - 1 | 0; //@line 3638
     $expanded6 = $expanded7 ^ -1; //@line 3639
     $85 = $83 & $expanded6; //@line 3640
     $86 = $85; //@line 3641
     $87 = SAFE_HEAP_LOAD($86 | 0, 4, 0) | 0 | 0; //@line 3642
     $arglist_next = $86 + 4 | 0; //@line 3643
     SAFE_HEAP_STORE($2 | 0, $arglist_next | 0, 4);
     $$0259 = $87; //@line 3645
     $$2271 = 0; //@line 3645
     $storemerge278 = $61; //@line 3645
    } else {
     $$0259 = 0; //@line 3647
     $$2271 = 0; //@line 3647
     $storemerge278 = $61; //@line 3647
    }
   }
   SAFE_HEAP_STORE($5 | 0, $storemerge278 | 0, 4);
   $88 = ($$0259 | 0) < 0; //@line 3651
   $89 = $$0262$lcssa | 8192; //@line 3652
   $90 = 0 - $$0259 | 0; //@line 3653
   $$$0262 = $88 ? $89 : $$0262$lcssa; //@line 3654
   $$$0259 = $88 ? $90 : $$0259; //@line 3655
   $$1260 = $$$0259; //@line 3656
   $$1263 = $$$0262; //@line 3656
   $$3272 = $$2271; //@line 3656
   $94 = $storemerge278; //@line 3656
  } else {
   $91 = _getint($5) | 0; //@line 3658
   $92 = ($91 | 0) < 0; //@line 3659
   if ($92) {
    $$0 = -1; //@line 3661
    break;
   }
   $$pre346 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 3664
   $$1260 = $91; //@line 3665
   $$1263 = $$0262$lcssa; //@line 3665
   $$3272 = $$1270; //@line 3665
   $94 = $$pre346; //@line 3665
  }
  $93 = SAFE_HEAP_LOAD($94 >> 0 | 0, 1, 0) | 0 | 0; //@line 3667
  $95 = $93 << 24 >> 24 == 46; //@line 3668
  do {
   if ($95) {
    $96 = $94 + 1 | 0; //@line 3671
    $97 = SAFE_HEAP_LOAD($96 >> 0 | 0, 1, 0) | 0 | 0; //@line 3672
    $98 = $97 << 24 >> 24 == 42; //@line 3673
    if (!$98) {
     $125 = $94 + 1 | 0; //@line 3675
     SAFE_HEAP_STORE($5 | 0, $125 | 0, 4);
     $126 = _getint($5) | 0; //@line 3677
     $$pre347$pre = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 3678
     $$0254 = $126; //@line 3679
     $$pre347 = $$pre347$pre; //@line 3679
     break;
    }
    $99 = $94 + 2 | 0; //@line 3682
    $100 = SAFE_HEAP_LOAD($99 >> 0 | 0, 1, 0) | 0 | 0; //@line 3683
    $101 = $100 << 24 >> 24; //@line 3684
    $isdigittmp274 = $101 + -48 | 0; //@line 3685
    $isdigit275 = $isdigittmp274 >>> 0 < 10; //@line 3686
    if ($isdigit275) {
     $102 = $94 + 3 | 0; //@line 3688
     $103 = SAFE_HEAP_LOAD($102 >> 0 | 0, 1, 0) | 0 | 0; //@line 3689
     $104 = $103 << 24 >> 24 == 36; //@line 3690
     if ($104) {
      $105 = $4 + ($isdigittmp274 << 2) | 0; //@line 3692
      SAFE_HEAP_STORE($105 | 0, 10 | 0, 4);
      $106 = SAFE_HEAP_LOAD($99 >> 0 | 0, 1, 0) | 0 | 0; //@line 3694
      $107 = $106 << 24 >> 24; //@line 3695
      $108 = $107 + -48 | 0; //@line 3696
      $109 = $3 + ($108 << 3) | 0; //@line 3697
      $110 = $109; //@line 3698
      $111 = $110; //@line 3699
      $112 = SAFE_HEAP_LOAD($111 | 0, 4, 0) | 0 | 0; //@line 3700
      $113 = $110 + 4 | 0; //@line 3701
      $114 = $113; //@line 3702
      $115 = SAFE_HEAP_LOAD($114 | 0, 4, 0) | 0 | 0; //@line 3703
      $116 = $94 + 4 | 0; //@line 3704
      SAFE_HEAP_STORE($5 | 0, $116 | 0, 4);
      $$0254 = $112; //@line 3706
      $$pre347 = $116; //@line 3706
      break;
     }
    }
    $117 = ($$3272 | 0) == 0; //@line 3710
    if (!$117) {
     $$0 = -1; //@line 3712
     break L1;
    }
    if ($10) {
     $arglist_current2 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 3716
     $118 = $arglist_current2; //@line 3717
     $119 = 0 + 4 | 0; //@line 3718
     $expanded11 = $119; //@line 3719
     $expanded10 = $expanded11 - 1 | 0; //@line 3720
     $120 = $118 + $expanded10 | 0; //@line 3721
     $121 = 0 + 4 | 0; //@line 3722
     $expanded15 = $121; //@line 3723
     $expanded14 = $expanded15 - 1 | 0; //@line 3724
     $expanded13 = $expanded14 ^ -1; //@line 3725
     $122 = $120 & $expanded13; //@line 3726
     $123 = $122; //@line 3727
     $124 = SAFE_HEAP_LOAD($123 | 0, 4, 0) | 0 | 0; //@line 3728
     $arglist_next3 = $123 + 4 | 0; //@line 3729
     SAFE_HEAP_STORE($2 | 0, $arglist_next3 | 0, 4);
     $330 = $124; //@line 3731
    } else {
     $330 = 0; //@line 3733
    }
    SAFE_HEAP_STORE($5 | 0, $99 | 0, 4);
    $$0254 = $330; //@line 3736
    $$pre347 = $99; //@line 3736
   } else {
    $$0254 = -1; //@line 3738
    $$pre347 = $94; //@line 3738
   }
  } while (0);
  $$0252 = 0; //@line 3741
  $128 = $$pre347; //@line 3741
  while (1) {
   $127 = SAFE_HEAP_LOAD($128 >> 0 | 0, 1, 0) | 0 | 0; //@line 3743
   $129 = $127 << 24 >> 24; //@line 3744
   $130 = $129 + -65 | 0; //@line 3745
   $131 = $130 >>> 0 > 57; //@line 3746
   if ($131) {
    $$0 = -1; //@line 3748
    break L1;
   }
   $132 = $128 + 1 | 0; //@line 3751
   SAFE_HEAP_STORE($5 | 0, $132 | 0, 4);
   $133 = SAFE_HEAP_LOAD($128 >> 0 | 0, 1, 0) | 0 | 0; //@line 3753
   $134 = $133 << 24 >> 24; //@line 3754
   $135 = $134 + -65 | 0; //@line 3755
   $136 = (3310 + ($$0252 * 58 | 0) | 0) + $135 | 0; //@line 3756
   $137 = SAFE_HEAP_LOAD($136 >> 0 | 0, 1, 0) | 0 | 0; //@line 3757
   $138 = $137 & 255; //@line 3758
   $139 = $138 + -1 | 0; //@line 3759
   $140 = $139 >>> 0 < 8; //@line 3760
   if ($140) {
    $$0252 = $138; //@line 3762
    $128 = $132; //@line 3762
   } else {
    break;
   }
  }
  $141 = $137 << 24 >> 24 == 0; //@line 3767
  if ($141) {
   $$0 = -1; //@line 3769
   break;
  }
  $142 = $137 << 24 >> 24 == 19; //@line 3772
  $143 = ($$0253 | 0) > -1; //@line 3773
  do {
   if ($142) {
    if ($143) {
     $$0 = -1; //@line 3777
     break L1;
    } else {
     label = 49; //@line 3780
    }
   } else {
    if ($143) {
     $144 = $4 + ($$0253 << 2) | 0; //@line 3784
     SAFE_HEAP_STORE($144 | 0, $138 | 0, 4);
     $145 = $3 + ($$0253 << 3) | 0; //@line 3786
     $146 = $145; //@line 3787
     $147 = $146; //@line 3788
     $148 = SAFE_HEAP_LOAD($147 | 0, 4, 0) | 0 | 0; //@line 3789
     $149 = $146 + 4 | 0; //@line 3790
     $150 = $149; //@line 3791
     $151 = SAFE_HEAP_LOAD($150 | 0, 4, 0) | 0 | 0; //@line 3792
     $152 = $6; //@line 3793
     $153 = $152; //@line 3794
     SAFE_HEAP_STORE($153 | 0, $148 | 0, 4);
     $154 = $152 + 4 | 0; //@line 3796
     $155 = $154; //@line 3797
     SAFE_HEAP_STORE($155 | 0, $151 | 0, 4);
     label = 49; //@line 3799
     break;
    }
    if (!$10) {
     $$0 = 0; //@line 3803
     break L1;
    }
    _pop_arg($6, $138, $2); //@line 3806
   }
  } while (0);
  if ((label | 0) == 49) {
   label = 0; //@line 3810
   if (!$10) {
    $$0243 = 0; //@line 3812
    $$0247 = $$1248; //@line 3812
    $$0269 = $$3272; //@line 3812
    $21 = $132; //@line 3812
    continue;
   }
  }
  $156 = SAFE_HEAP_LOAD($128 >> 0 | 0, 1, 0) | 0 | 0; //@line 3816
  $157 = $156 << 24 >> 24; //@line 3817
  $158 = ($$0252 | 0) != 0; //@line 3818
  $159 = $157 & 15; //@line 3819
  $160 = ($159 | 0) == 3; //@line 3820
  $or$cond281 = $158 & $160; //@line 3821
  $161 = $157 & -33; //@line 3822
  $$0235 = $or$cond281 ? $161 : $157; //@line 3823
  $162 = $$1263 & 8192; //@line 3824
  $163 = ($162 | 0) == 0; //@line 3825
  $164 = $$1263 & -65537; //@line 3826
  $$1263$ = $163 ? $$1263 : $164; //@line 3827
  L71 : do {
   switch ($$0235 | 0) {
   case 110:
    {
     $trunc = $$0252 & 255; //@line 3831
     switch ($trunc << 24 >> 24) {
     case 0:
      {
       $171 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3834
       SAFE_HEAP_STORE($171 | 0, $$1248 | 0, 4);
       $$0243 = 0; //@line 3836
       $$0247 = $$1248; //@line 3836
       $$0269 = $$3272; //@line 3836
       $21 = $132; //@line 3836
       continue L1;
       break;
      }
     case 1:
      {
       $172 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3841
       SAFE_HEAP_STORE($172 | 0, $$1248 | 0, 4);
       $$0243 = 0; //@line 3843
       $$0247 = $$1248; //@line 3843
       $$0269 = $$3272; //@line 3843
       $21 = $132; //@line 3843
       continue L1;
       break;
      }
     case 2:
      {
       $173 = ($$1248 | 0) < 0; //@line 3848
       $174 = $173 << 31 >> 31; //@line 3849
       $175 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3850
       $176 = $175; //@line 3851
       $177 = $176; //@line 3852
       SAFE_HEAP_STORE($177 | 0, $$1248 | 0, 4);
       $178 = $176 + 4 | 0; //@line 3854
       $179 = $178; //@line 3855
       SAFE_HEAP_STORE($179 | 0, $174 | 0, 4);
       $$0243 = 0; //@line 3857
       $$0247 = $$1248; //@line 3857
       $$0269 = $$3272; //@line 3857
       $21 = $132; //@line 3857
       continue L1;
       break;
      }
     case 3:
      {
       $180 = $$1248 & 65535; //@line 3862
       $181 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3863
       SAFE_HEAP_STORE($181 | 0, $180 | 0, 2);
       $$0243 = 0; //@line 3865
       $$0247 = $$1248; //@line 3865
       $$0269 = $$3272; //@line 3865
       $21 = $132; //@line 3865
       continue L1;
       break;
      }
     case 4:
      {
       $182 = $$1248 & 255; //@line 3870
       $183 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3871
       SAFE_HEAP_STORE($183 >> 0 | 0, $182 | 0, 1);
       $$0243 = 0; //@line 3873
       $$0247 = $$1248; //@line 3873
       $$0269 = $$3272; //@line 3873
       $21 = $132; //@line 3873
       continue L1;
       break;
      }
     case 6:
      {
       $184 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3878
       SAFE_HEAP_STORE($184 | 0, $$1248 | 0, 4);
       $$0243 = 0; //@line 3880
       $$0247 = $$1248; //@line 3880
       $$0269 = $$3272; //@line 3880
       $21 = $132; //@line 3880
       continue L1;
       break;
      }
     case 7:
      {
       $185 = ($$1248 | 0) < 0; //@line 3885
       $186 = $185 << 31 >> 31; //@line 3886
       $187 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 3887
       $188 = $187; //@line 3888
       $189 = $188; //@line 3889
       SAFE_HEAP_STORE($189 | 0, $$1248 | 0, 4);
       $190 = $188 + 4 | 0; //@line 3891
       $191 = $190; //@line 3892
       SAFE_HEAP_STORE($191 | 0, $186 | 0, 4);
       $$0243 = 0; //@line 3894
       $$0247 = $$1248; //@line 3894
       $$0269 = $$3272; //@line 3894
       $21 = $132; //@line 3894
       continue L1;
       break;
      }
     default:
      {
       $$0243 = 0; //@line 3899
       $$0247 = $$1248; //@line 3899
       $$0269 = $$3272; //@line 3899
       $21 = $132; //@line 3899
       continue L1;
      }
     }
     break;
    }
   case 112:
    {
     $192 = $$0254 >>> 0 > 8; //@line 3906
     $193 = $192 ? $$0254 : 8; //@line 3907
     $194 = $$1263$ | 8; //@line 3908
     $$1236 = 120; //@line 3909
     $$1255 = $193; //@line 3909
     $$3265 = $194; //@line 3909
     label = 61; //@line 3910
     break;
    }
   case 88:
   case 120:
    {
     $$1236 = $$0235; //@line 3914
     $$1255 = $$0254; //@line 3914
     $$3265 = $$1263$; //@line 3914
     label = 61; //@line 3915
     break;
    }
   case 111:
    {
     $210 = $6; //@line 3919
     $211 = $210; //@line 3920
     $212 = SAFE_HEAP_LOAD($211 | 0, 4, 0) | 0 | 0; //@line 3921
     $213 = $210 + 4 | 0; //@line 3922
     $214 = $213; //@line 3923
     $215 = SAFE_HEAP_LOAD($214 | 0, 4, 0) | 0 | 0; //@line 3924
     $216 = _fmt_o($212, $215, $11) | 0; //@line 3925
     $217 = $$1263$ & 8; //@line 3926
     $218 = ($217 | 0) == 0; //@line 3927
     $219 = $216; //@line 3928
     $220 = $12 - $219 | 0; //@line 3929
     $221 = ($$0254 | 0) > ($220 | 0); //@line 3930
     $222 = $220 + 1 | 0; //@line 3931
     $223 = $218 | $221; //@line 3932
     $$0254$$0254$ = $223 ? $$0254 : $222; //@line 3933
     $$0228 = $216; //@line 3934
     $$1233 = 0; //@line 3934
     $$1238 = 3774; //@line 3934
     $$2256 = $$0254$$0254$; //@line 3934
     $$4266 = $$1263$; //@line 3934
     $248 = $212; //@line 3934
     $250 = $215; //@line 3934
     label = 67; //@line 3935
     break;
    }
   case 105:
   case 100:
    {
     $224 = $6; //@line 3939
     $225 = $224; //@line 3940
     $226 = SAFE_HEAP_LOAD($225 | 0, 4, 0) | 0 | 0; //@line 3941
     $227 = $224 + 4 | 0; //@line 3942
     $228 = $227; //@line 3943
     $229 = SAFE_HEAP_LOAD($228 | 0, 4, 0) | 0 | 0; //@line 3944
     $230 = ($229 | 0) < 0; //@line 3945
     if ($230) {
      $231 = _i64Subtract(0, 0, $226 | 0, $229 | 0) | 0; //@line 3947
      $232 = tempRet0; //@line 3948
      $233 = $6; //@line 3949
      $234 = $233; //@line 3950
      SAFE_HEAP_STORE($234 | 0, $231 | 0, 4);
      $235 = $233 + 4 | 0; //@line 3952
      $236 = $235; //@line 3953
      SAFE_HEAP_STORE($236 | 0, $232 | 0, 4);
      $$0232 = 1; //@line 3955
      $$0237 = 3774; //@line 3955
      $242 = $231; //@line 3955
      $243 = $232; //@line 3955
      label = 66; //@line 3956
      break L71;
     } else {
      $237 = $$1263$ & 2048; //@line 3959
      $238 = ($237 | 0) == 0; //@line 3960
      $239 = $$1263$ & 1; //@line 3961
      $240 = ($239 | 0) == 0; //@line 3962
      $$ = $240 ? 3774 : 3776; //@line 3963
      $$$ = $238 ? $$ : 3775; //@line 3964
      $241 = $$1263$ & 2049; //@line 3965
      $narrow = ($241 | 0) != 0; //@line 3966
      $$284$ = $narrow & 1; //@line 3967
      $$0232 = $$284$; //@line 3968
      $$0237 = $$$; //@line 3968
      $242 = $226; //@line 3968
      $243 = $229; //@line 3968
      label = 66; //@line 3969
      break L71;
     }
     break;
    }
   case 117:
    {
     $165 = $6; //@line 3975
     $166 = $165; //@line 3976
     $167 = SAFE_HEAP_LOAD($166 | 0, 4, 0) | 0 | 0; //@line 3977
     $168 = $165 + 4 | 0; //@line 3978
     $169 = $168; //@line 3979
     $170 = SAFE_HEAP_LOAD($169 | 0, 4, 0) | 0 | 0; //@line 3980
     $$0232 = 0; //@line 3981
     $$0237 = 3774; //@line 3981
     $242 = $167; //@line 3981
     $243 = $170; //@line 3981
     label = 66; //@line 3982
     break;
    }
   case 99:
    {
     $259 = $6; //@line 3986
     $260 = $259; //@line 3987
     $261 = SAFE_HEAP_LOAD($260 | 0, 4, 0) | 0 | 0; //@line 3988
     $262 = $259 + 4 | 0; //@line 3989
     $263 = $262; //@line 3990
     $264 = SAFE_HEAP_LOAD($263 | 0, 4, 0) | 0 | 0; //@line 3991
     $265 = $261 & 255; //@line 3992
     SAFE_HEAP_STORE($13 >> 0 | 0, $265 | 0, 1);
     $$2 = $13; //@line 3994
     $$2234 = 0; //@line 3994
     $$2239 = 3774; //@line 3994
     $$2251 = $11; //@line 3994
     $$5 = 1; //@line 3994
     $$6268 = $164; //@line 3994
     break;
    }
   case 109:
    {
     $266 = ___errno_location() | 0; //@line 3998
     $267 = SAFE_HEAP_LOAD($266 | 0, 4, 0) | 0 | 0; //@line 3999
     $268 = _strerror($267) | 0; //@line 4000
     $$1 = $268; //@line 4001
     label = 71; //@line 4002
     break;
    }
   case 115:
    {
     $269 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 4006
     $270 = ($269 | 0) != (0 | 0); //@line 4007
     $271 = $270 ? $269 : 3784; //@line 4008
     $$1 = $271; //@line 4009
     label = 71; //@line 4010
     break;
    }
   case 67:
    {
     $278 = $6; //@line 4014
     $279 = $278; //@line 4015
     $280 = SAFE_HEAP_LOAD($279 | 0, 4, 0) | 0 | 0; //@line 4016
     $281 = $278 + 4 | 0; //@line 4017
     $282 = $281; //@line 4018
     $283 = SAFE_HEAP_LOAD($282 | 0, 4, 0) | 0 | 0; //@line 4019
     SAFE_HEAP_STORE($8 | 0, $280 | 0, 4);
     SAFE_HEAP_STORE($14 | 0, 0 | 0, 4);
     SAFE_HEAP_STORE($6 | 0, $8 | 0, 4);
     $$4258355 = -1; //@line 4023
     $331 = $8; //@line 4023
     label = 75; //@line 4024
     break;
    }
   case 83:
    {
     $$pre349 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 4028
     $284 = ($$0254 | 0) == 0; //@line 4029
     if ($284) {
      _pad_674($0, 32, $$1260, 0, $$1263$); //@line 4031
      $$0240$lcssa357 = 0; //@line 4032
      label = 84; //@line 4033
     } else {
      $$4258355 = $$0254; //@line 4035
      $331 = $$pre349; //@line 4035
      label = 75; //@line 4036
     }
     break;
    }
   case 65:
   case 71:
   case 70:
   case 69:
   case 97:
   case 103:
   case 102:
   case 101:
    {
     $306 = +(+SAFE_HEAP_LOAD_D($6 | 0, 8)); //@line 4041
     $307 = _fmt_fp($0, $306, $$1260, $$0254, $$1263$, $$0235) | 0; //@line 4042
     $$0243 = $307; //@line 4043
     $$0247 = $$1248; //@line 4043
     $$0269 = $$3272; //@line 4043
     $21 = $132; //@line 4043
     continue L1;
     break;
    }
   default:
    {
     $$2 = $21; //@line 4048
     $$2234 = 0; //@line 4048
     $$2239 = 3774; //@line 4048
     $$2251 = $11; //@line 4048
     $$5 = $$0254; //@line 4048
     $$6268 = $$1263$; //@line 4048
    }
   }
  } while (0);
  L95 : do {
   if ((label | 0) == 61) {
    label = 0; //@line 4054
    $195 = $6; //@line 4055
    $196 = $195; //@line 4056
    $197 = SAFE_HEAP_LOAD($196 | 0, 4, 0) | 0 | 0; //@line 4057
    $198 = $195 + 4 | 0; //@line 4058
    $199 = $198; //@line 4059
    $200 = SAFE_HEAP_LOAD($199 | 0, 4, 0) | 0 | 0; //@line 4060
    $201 = $$1236 & 32; //@line 4061
    $202 = _fmt_x($197, $200, $11, $201) | 0; //@line 4062
    $203 = ($197 | 0) == 0; //@line 4063
    $204 = ($200 | 0) == 0; //@line 4064
    $205 = $203 & $204; //@line 4065
    $206 = $$3265 & 8; //@line 4066
    $207 = ($206 | 0) == 0; //@line 4067
    $or$cond283 = $207 | $205; //@line 4068
    $208 = $$1236 >> 4; //@line 4069
    $209 = 3774 + $208 | 0; //@line 4070
    $$289 = $or$cond283 ? 3774 : $209; //@line 4071
    $$290 = $or$cond283 ? 0 : 2; //@line 4072
    $$0228 = $202; //@line 4073
    $$1233 = $$290; //@line 4073
    $$1238 = $$289; //@line 4073
    $$2256 = $$1255; //@line 4073
    $$4266 = $$3265; //@line 4073
    $248 = $197; //@line 4073
    $250 = $200; //@line 4073
    label = 67; //@line 4074
   } else if ((label | 0) == 66) {
    label = 0; //@line 4077
    $244 = _fmt_u($242, $243, $11) | 0; //@line 4078
    $$0228 = $244; //@line 4079
    $$1233 = $$0232; //@line 4079
    $$1238 = $$0237; //@line 4079
    $$2256 = $$0254; //@line 4079
    $$4266 = $$1263$; //@line 4079
    $248 = $242; //@line 4079
    $250 = $243; //@line 4079
    label = 67; //@line 4080
   } else if ((label | 0) == 71) {
    label = 0; //@line 4083
    $272 = _memchr($$1, 0, $$0254) | 0; //@line 4084
    $273 = ($272 | 0) == (0 | 0); //@line 4085
    $274 = $272; //@line 4086
    $275 = $$1; //@line 4087
    $276 = $274 - $275 | 0; //@line 4088
    $277 = $$1 + $$0254 | 0; //@line 4089
    $$3257 = $273 ? $$0254 : $276; //@line 4090
    $$1250 = $273 ? $277 : $272; //@line 4091
    $$2 = $$1; //@line 4092
    $$2234 = 0; //@line 4092
    $$2239 = 3774; //@line 4092
    $$2251 = $$1250; //@line 4092
    $$5 = $$3257; //@line 4092
    $$6268 = $164; //@line 4092
   } else if ((label | 0) == 75) {
    label = 0; //@line 4095
    $$0229322 = $331; //@line 4096
    $$0240321 = 0; //@line 4096
    $$1244320 = 0; //@line 4096
    while (1) {
     $285 = SAFE_HEAP_LOAD($$0229322 | 0, 4, 0) | 0 | 0; //@line 4098
     $286 = ($285 | 0) == 0; //@line 4099
     if ($286) {
      $$0240$lcssa = $$0240321; //@line 4101
      $$2245 = $$1244320; //@line 4101
      break;
     }
     $287 = _wctomb($9, $285) | 0; //@line 4104
     $288 = ($287 | 0) < 0; //@line 4105
     $289 = $$4258355 - $$0240321 | 0; //@line 4106
     $290 = $287 >>> 0 > $289 >>> 0; //@line 4107
     $or$cond286 = $288 | $290; //@line 4108
     if ($or$cond286) {
      $$0240$lcssa = $$0240321; //@line 4110
      $$2245 = $287; //@line 4110
      break;
     }
     $291 = $$0229322 + 4 | 0; //@line 4113
     $292 = $287 + $$0240321 | 0; //@line 4114
     $293 = $$4258355 >>> 0 > $292 >>> 0; //@line 4115
     if ($293) {
      $$0229322 = $291; //@line 4117
      $$0240321 = $292; //@line 4117
      $$1244320 = $287; //@line 4117
     } else {
      $$0240$lcssa = $292; //@line 4119
      $$2245 = $287; //@line 4119
      break;
     }
    }
    $294 = ($$2245 | 0) < 0; //@line 4123
    if ($294) {
     $$0 = -1; //@line 4125
     break L1;
    }
    _pad_674($0, 32, $$1260, $$0240$lcssa, $$1263$); //@line 4128
    $295 = ($$0240$lcssa | 0) == 0; //@line 4129
    if ($295) {
     $$0240$lcssa357 = 0; //@line 4131
     label = 84; //@line 4132
    } else {
     $$1230333 = $331; //@line 4134
     $$1241332 = 0; //@line 4134
     while (1) {
      $296 = SAFE_HEAP_LOAD($$1230333 | 0, 4, 0) | 0 | 0; //@line 4136
      $297 = ($296 | 0) == 0; //@line 4137
      if ($297) {
       $$0240$lcssa357 = $$0240$lcssa; //@line 4139
       label = 84; //@line 4140
       break L95;
      }
      $298 = _wctomb($9, $296) | 0; //@line 4143
      $299 = $298 + $$1241332 | 0; //@line 4144
      $300 = ($299 | 0) > ($$0240$lcssa | 0); //@line 4145
      if ($300) {
       $$0240$lcssa357 = $$0240$lcssa; //@line 4147
       label = 84; //@line 4148
       break L95;
      }
      $301 = $$1230333 + 4 | 0; //@line 4151
      _out($0, $9, $298); //@line 4152
      $302 = $299 >>> 0 < $$0240$lcssa >>> 0; //@line 4153
      if ($302) {
       $$1230333 = $301; //@line 4155
       $$1241332 = $299; //@line 4155
      } else {
       $$0240$lcssa357 = $$0240$lcssa; //@line 4157
       label = 84; //@line 4158
       break;
      }
     }
    }
   }
  } while (0);
  if ((label | 0) == 67) {
   label = 0; //@line 4166
   $245 = ($$2256 | 0) > -1; //@line 4167
   $246 = $$4266 & -65537; //@line 4168
   $$$4266 = $245 ? $246 : $$4266; //@line 4169
   $247 = ($248 | 0) != 0; //@line 4170
   $249 = ($250 | 0) != 0; //@line 4171
   $251 = $247 | $249; //@line 4172
   $252 = ($$2256 | 0) != 0; //@line 4173
   $or$cond = $252 | $251; //@line 4174
   $253 = $$0228; //@line 4175
   $254 = $12 - $253 | 0; //@line 4176
   $255 = $251 ^ 1; //@line 4177
   $256 = $255 & 1; //@line 4178
   $257 = $256 + $254 | 0; //@line 4179
   $258 = ($$2256 | 0) > ($257 | 0); //@line 4180
   $$2256$ = $258 ? $$2256 : $257; //@line 4181
   $$2256$$$2256 = $or$cond ? $$2256$ : $$2256; //@line 4182
   $$0228$ = $or$cond ? $$0228 : $11; //@line 4183
   $$2 = $$0228$; //@line 4184
   $$2234 = $$1233; //@line 4184
   $$2239 = $$1238; //@line 4184
   $$2251 = $11; //@line 4184
   $$5 = $$2256$$$2256; //@line 4184
   $$6268 = $$$4266; //@line 4184
  } else if ((label | 0) == 84) {
   label = 0; //@line 4187
   $303 = $$1263$ ^ 8192; //@line 4188
   _pad_674($0, 32, $$1260, $$0240$lcssa357, $303); //@line 4189
   $304 = ($$1260 | 0) > ($$0240$lcssa357 | 0); //@line 4190
   $305 = $304 ? $$1260 : $$0240$lcssa357; //@line 4191
   $$0243 = $305; //@line 4192
   $$0247 = $$1248; //@line 4192
   $$0269 = $$3272; //@line 4192
   $21 = $132; //@line 4192
   continue;
  }
  $308 = $$2251; //@line 4195
  $309 = $$2; //@line 4196
  $310 = $308 - $309 | 0; //@line 4197
  $311 = ($$5 | 0) < ($310 | 0); //@line 4198
  $$$5 = $311 ? $310 : $$5; //@line 4199
  $312 = $$$5 + $$2234 | 0; //@line 4200
  $313 = ($$1260 | 0) < ($312 | 0); //@line 4201
  $$2261 = $313 ? $312 : $$1260; //@line 4202
  _pad_674($0, 32, $$2261, $312, $$6268); //@line 4203
  _out($0, $$2239, $$2234); //@line 4204
  $314 = $$6268 ^ 65536; //@line 4205
  _pad_674($0, 48, $$2261, $312, $314); //@line 4206
  _pad_674($0, 48, $$$5, $310, 0); //@line 4207
  _out($0, $$2, $310); //@line 4208
  $315 = $$6268 ^ 8192; //@line 4209
  _pad_674($0, 32, $$2261, $312, $315); //@line 4210
  $$0243 = $$2261; //@line 4211
  $$0247 = $$1248; //@line 4211
  $$0269 = $$3272; //@line 4211
  $21 = $132; //@line 4211
 }
 L114 : do {
  if ((label | 0) == 87) {
   $316 = ($0 | 0) == (0 | 0); //@line 4215
   if ($316) {
    $317 = ($$0269 | 0) == 0; //@line 4217
    if ($317) {
     $$0 = 0; //@line 4219
    } else {
     $$2242305 = 1; //@line 4221
     while (1) {
      $318 = $4 + ($$2242305 << 2) | 0; //@line 4223
      $319 = SAFE_HEAP_LOAD($318 | 0, 4, 0) | 0 | 0; //@line 4224
      $320 = ($319 | 0) == 0; //@line 4225
      if ($320) {
       $$3303 = $$2242305; //@line 4227
       break;
      }
      $321 = $3 + ($$2242305 << 3) | 0; //@line 4230
      _pop_arg($321, $319, $2); //@line 4231
      $322 = $$2242305 + 1 | 0; //@line 4232
      $323 = ($322 | 0) < 10; //@line 4233
      if ($323) {
       $$2242305 = $322; //@line 4235
      } else {
       $$0 = 1; //@line 4237
       break L114;
      }
     }
     while (1) {
      $326 = $4 + ($$3303 << 2) | 0; //@line 4242
      $327 = SAFE_HEAP_LOAD($326 | 0, 4, 0) | 0 | 0; //@line 4243
      $328 = ($327 | 0) == 0; //@line 4244
      $325 = $$3303 + 1 | 0; //@line 4245
      if (!$328) {
       $$0 = -1; //@line 4247
       break L114;
      }
      $324 = ($325 | 0) < 10; //@line 4250
      if ($324) {
       $$3303 = $325; //@line 4252
      } else {
       $$0 = 1; //@line 4254
       break;
      }
     }
    }
   } else {
    $$0 = $$1248; //@line 4260
   }
  }
 } while (0);
 STACKTOP = sp; //@line 4264
 return $$0 | 0; //@line 4264
}
function _free($0) {
 $0 = $0 | 0; //@line 8944
 var $$0212$i = 0, $$0212$in$i = 0, $$0383 = 0, $$0384 = 0, $$0396 = 0, $$0403 = 0, $$1 = 0, $$1382 = 0, $$1387 = 0, $$1390 = 0, $$1398 = 0, $$1402 = 0, $$2 = 0, $$3 = 0, $$3400 = 0, $$pre = 0, $$pre$phi443Z2D = 0, $$pre$phi445Z2D = 0, $$pre$phiZ2D = 0, $$pre442 = 0; //@line 8945
 var $$pre444 = 0, $$sink3 = 0, $$sink5 = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0; //@line 8946
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0; //@line 8947
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0; //@line 8948
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0; //@line 8949
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0; //@line 8950
 var $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0; //@line 8951
 var $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0; //@line 8952
 var $222 = 0, $223 = 0, $224 = 0, $225 = 0, $226 = 0, $227 = 0, $228 = 0, $229 = 0, $23 = 0, $230 = 0, $231 = 0, $232 = 0, $233 = 0, $234 = 0, $235 = 0, $236 = 0, $237 = 0, $238 = 0, $239 = 0, $24 = 0; //@line 8953
 var $240 = 0, $241 = 0, $242 = 0, $243 = 0, $244 = 0, $245 = 0, $246 = 0, $247 = 0, $248 = 0, $249 = 0, $25 = 0, $250 = 0, $251 = 0, $252 = 0, $253 = 0, $254 = 0, $255 = 0, $256 = 0, $257 = 0, $258 = 0; //@line 8954
 var $259 = 0, $26 = 0, $260 = 0, $261 = 0, $262 = 0, $263 = 0, $264 = 0, $265 = 0, $266 = 0, $267 = 0, $268 = 0, $269 = 0, $27 = 0, $270 = 0, $271 = 0, $272 = 0, $273 = 0, $274 = 0, $275 = 0, $276 = 0; //@line 8955
 var $277 = 0, $278 = 0, $279 = 0, $28 = 0, $280 = 0, $281 = 0, $282 = 0, $283 = 0, $284 = 0, $285 = 0, $286 = 0, $287 = 0, $288 = 0, $289 = 0, $29 = 0, $290 = 0, $291 = 0, $292 = 0, $293 = 0, $294 = 0; //@line 8956
 var $295 = 0, $296 = 0, $297 = 0, $298 = 0, $299 = 0, $3 = 0, $30 = 0, $300 = 0, $301 = 0, $302 = 0, $303 = 0, $304 = 0, $305 = 0, $306 = 0, $307 = 0, $308 = 0, $309 = 0, $31 = 0, $310 = 0, $311 = 0; //@line 8957
 var $312 = 0, $313 = 0, $314 = 0, $315 = 0, $316 = 0, $317 = 0, $318 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0; //@line 8958
 var $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0; //@line 8959
 var $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0; //@line 8960
 var $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0; //@line 8961
 var $99 = 0, $cond421 = 0, $cond422 = 0, $not$ = 0, $not$405 = 0, $not$437 = 0, label = 0, sp = 0; //@line 8962
 sp = STACKTOP; //@line 8963
 $1 = ($0 | 0) == (0 | 0); //@line 8964
 if ($1) {
  return;
 }
 $2 = $0 + -8 | 0; //@line 8968
 $3 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 8969
 $4 = $2 >>> 0 < $3 >>> 0; //@line 8970
 if ($4) {
  _abort(); //@line 8972
 }
 $5 = $0 + -4 | 0; //@line 8975
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 8976
 $7 = $6 & 3; //@line 8977
 $8 = ($7 | 0) == 1; //@line 8978
 if ($8) {
  _abort(); //@line 8980
 }
 $9 = $6 & -8; //@line 8983
 $10 = $2 + $9 | 0; //@line 8984
 $11 = $6 & 1; //@line 8985
 $12 = ($11 | 0) == 0; //@line 8986
 L10 : do {
  if ($12) {
   $13 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 8989
   $14 = ($7 | 0) == 0; //@line 8990
   if ($14) {
    return;
   }
   $15 = 0 - $13 | 0; //@line 8994
   $16 = $2 + $15 | 0; //@line 8995
   $17 = $13 + $9 | 0; //@line 8996
   $18 = $16 >>> 0 < $3 >>> 0; //@line 8997
   if ($18) {
    _abort(); //@line 8999
   }
   $19 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 9002
   $20 = ($16 | 0) == ($19 | 0); //@line 9003
   if ($20) {
    $104 = $10 + 4 | 0; //@line 9005
    $105 = SAFE_HEAP_LOAD($104 | 0, 4, 0) | 0 | 0; //@line 9006
    $106 = $105 & 3; //@line 9007
    $107 = ($106 | 0) == 3; //@line 9008
    if (!$107) {
     $$1 = $16; //@line 9010
     $$1382 = $17; //@line 9010
     $113 = $16; //@line 9010
     break;
    }
    $108 = $16 + $17 | 0; //@line 9013
    $109 = $16 + 4 | 0; //@line 9014
    $110 = $17 | 1; //@line 9015
    $111 = $105 & -2; //@line 9016
    SAFE_HEAP_STORE(6640 | 0, $17 | 0, 4);
    SAFE_HEAP_STORE($104 | 0, $111 | 0, 4);
    SAFE_HEAP_STORE($109 | 0, $110 | 0, 4);
    SAFE_HEAP_STORE($108 | 0, $17 | 0, 4);
    return;
   }
   $21 = $13 >>> 3; //@line 9023
   $22 = $13 >>> 0 < 256; //@line 9024
   if ($22) {
    $23 = $16 + 8 | 0; //@line 9026
    $24 = SAFE_HEAP_LOAD($23 | 0, 4, 0) | 0 | 0; //@line 9027
    $25 = $16 + 12 | 0; //@line 9028
    $26 = SAFE_HEAP_LOAD($25 | 0, 4, 0) | 0 | 0; //@line 9029
    $27 = $21 << 1; //@line 9030
    $28 = 6672 + ($27 << 2) | 0; //@line 9031
    $29 = ($24 | 0) == ($28 | 0); //@line 9032
    if (!$29) {
     $30 = $24 >>> 0 < $3 >>> 0; //@line 9034
     if ($30) {
      _abort(); //@line 9036
     }
     $31 = $24 + 12 | 0; //@line 9039
     $32 = SAFE_HEAP_LOAD($31 | 0, 4, 0) | 0 | 0; //@line 9040
     $33 = ($32 | 0) == ($16 | 0); //@line 9041
     if (!$33) {
      _abort(); //@line 9043
     }
    }
    $34 = ($26 | 0) == ($24 | 0); //@line 9047
    if ($34) {
     $35 = 1 << $21; //@line 9049
     $36 = $35 ^ -1; //@line 9050
     $37 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 9051
     $38 = $37 & $36; //@line 9052
     SAFE_HEAP_STORE(1658 * 4 | 0, $38 | 0, 4);
     $$1 = $16; //@line 9054
     $$1382 = $17; //@line 9054
     $113 = $16; //@line 9054
     break;
    }
    $39 = ($26 | 0) == ($28 | 0); //@line 9057
    if ($39) {
     $$pre444 = $26 + 8 | 0; //@line 9059
     $$pre$phi445Z2D = $$pre444; //@line 9060
    } else {
     $40 = $26 >>> 0 < $3 >>> 0; //@line 9062
     if ($40) {
      _abort(); //@line 9064
     }
     $41 = $26 + 8 | 0; //@line 9067
     $42 = SAFE_HEAP_LOAD($41 | 0, 4, 0) | 0 | 0; //@line 9068
     $43 = ($42 | 0) == ($16 | 0); //@line 9069
     if ($43) {
      $$pre$phi445Z2D = $41; //@line 9071
     } else {
      _abort(); //@line 9073
     }
    }
    $44 = $24 + 12 | 0; //@line 9077
    SAFE_HEAP_STORE($44 | 0, $26 | 0, 4);
    SAFE_HEAP_STORE($$pre$phi445Z2D | 0, $24 | 0, 4);
    $$1 = $16; //@line 9080
    $$1382 = $17; //@line 9080
    $113 = $16; //@line 9080
    break;
   }
   $45 = $16 + 24 | 0; //@line 9083
   $46 = SAFE_HEAP_LOAD($45 | 0, 4, 0) | 0 | 0; //@line 9084
   $47 = $16 + 12 | 0; //@line 9085
   $48 = SAFE_HEAP_LOAD($47 | 0, 4, 0) | 0 | 0; //@line 9086
   $49 = ($48 | 0) == ($16 | 0); //@line 9087
   do {
    if ($49) {
     $59 = $16 + 16 | 0; //@line 9090
     $60 = $59 + 4 | 0; //@line 9091
     $61 = SAFE_HEAP_LOAD($60 | 0, 4, 0) | 0 | 0; //@line 9092
     $62 = ($61 | 0) == (0 | 0); //@line 9093
     if ($62) {
      $63 = SAFE_HEAP_LOAD($59 | 0, 4, 0) | 0 | 0; //@line 9095
      $64 = ($63 | 0) == (0 | 0); //@line 9096
      if ($64) {
       $$3 = 0; //@line 9098
       break;
      } else {
       $$1387 = $63; //@line 9101
       $$1390 = $59; //@line 9101
      }
     } else {
      $$1387 = $61; //@line 9104
      $$1390 = $60; //@line 9104
     }
     while (1) {
      $65 = $$1387 + 20 | 0; //@line 9107
      $66 = SAFE_HEAP_LOAD($65 | 0, 4, 0) | 0 | 0; //@line 9108
      $67 = ($66 | 0) == (0 | 0); //@line 9109
      if (!$67) {
       $$1387 = $66; //@line 9111
       $$1390 = $65; //@line 9111
       continue;
      }
      $68 = $$1387 + 16 | 0; //@line 9114
      $69 = SAFE_HEAP_LOAD($68 | 0, 4, 0) | 0 | 0; //@line 9115
      $70 = ($69 | 0) == (0 | 0); //@line 9116
      if ($70) {
       break;
      } else {
       $$1387 = $69; //@line 9120
       $$1390 = $68; //@line 9120
      }
     }
     $71 = $$1390 >>> 0 < $3 >>> 0; //@line 9123
     if ($71) {
      _abort(); //@line 9125
     } else {
      SAFE_HEAP_STORE($$1390 | 0, 0 | 0, 4);
      $$3 = $$1387; //@line 9129
      break;
     }
    } else {
     $50 = $16 + 8 | 0; //@line 9133
     $51 = SAFE_HEAP_LOAD($50 | 0, 4, 0) | 0 | 0; //@line 9134
     $52 = $51 >>> 0 < $3 >>> 0; //@line 9135
     if ($52) {
      _abort(); //@line 9137
     }
     $53 = $51 + 12 | 0; //@line 9140
     $54 = SAFE_HEAP_LOAD($53 | 0, 4, 0) | 0 | 0; //@line 9141
     $55 = ($54 | 0) == ($16 | 0); //@line 9142
     if (!$55) {
      _abort(); //@line 9144
     }
     $56 = $48 + 8 | 0; //@line 9147
     $57 = SAFE_HEAP_LOAD($56 | 0, 4, 0) | 0 | 0; //@line 9148
     $58 = ($57 | 0) == ($16 | 0); //@line 9149
     if ($58) {
      SAFE_HEAP_STORE($53 | 0, $48 | 0, 4);
      SAFE_HEAP_STORE($56 | 0, $51 | 0, 4);
      $$3 = $48; //@line 9153
      break;
     } else {
      _abort(); //@line 9156
     }
    }
   } while (0);
   $72 = ($46 | 0) == (0 | 0); //@line 9161
   if ($72) {
    $$1 = $16; //@line 9163
    $$1382 = $17; //@line 9163
    $113 = $16; //@line 9163
   } else {
    $73 = $16 + 28 | 0; //@line 9165
    $74 = SAFE_HEAP_LOAD($73 | 0, 4, 0) | 0 | 0; //@line 9166
    $75 = 6936 + ($74 << 2) | 0; //@line 9167
    $76 = SAFE_HEAP_LOAD($75 | 0, 4, 0) | 0 | 0; //@line 9168
    $77 = ($16 | 0) == ($76 | 0); //@line 9169
    do {
     if ($77) {
      SAFE_HEAP_STORE($75 | 0, $$3 | 0, 4);
      $cond421 = ($$3 | 0) == (0 | 0); //@line 9173
      if ($cond421) {
       $78 = 1 << $74; //@line 9175
       $79 = $78 ^ -1; //@line 9176
       $80 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 9177
       $81 = $80 & $79; //@line 9178
       SAFE_HEAP_STORE(6636 | 0, $81 | 0, 4);
       $$1 = $16; //@line 9180
       $$1382 = $17; //@line 9180
       $113 = $16; //@line 9180
       break L10;
      }
     } else {
      $82 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9184
      $83 = $46 >>> 0 < $82 >>> 0; //@line 9185
      if ($83) {
       _abort(); //@line 9187
      } else {
       $84 = $46 + 16 | 0; //@line 9190
       $85 = SAFE_HEAP_LOAD($84 | 0, 4, 0) | 0 | 0; //@line 9191
       $not$405 = ($85 | 0) != ($16 | 0); //@line 9192
       $$sink3 = $not$405 & 1; //@line 9193
       $86 = ($46 + 16 | 0) + ($$sink3 << 2) | 0; //@line 9194
       SAFE_HEAP_STORE($86 | 0, $$3 | 0, 4);
       $87 = ($$3 | 0) == (0 | 0); //@line 9196
       if ($87) {
        $$1 = $16; //@line 9198
        $$1382 = $17; //@line 9198
        $113 = $16; //@line 9198
        break L10;
       } else {
        break;
       }
      }
     }
    } while (0);
    $88 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9206
    $89 = $$3 >>> 0 < $88 >>> 0; //@line 9207
    if ($89) {
     _abort(); //@line 9209
    }
    $90 = $$3 + 24 | 0; //@line 9212
    SAFE_HEAP_STORE($90 | 0, $46 | 0, 4);
    $91 = $16 + 16 | 0; //@line 9214
    $92 = SAFE_HEAP_LOAD($91 | 0, 4, 0) | 0 | 0; //@line 9215
    $93 = ($92 | 0) == (0 | 0); //@line 9216
    do {
     if (!$93) {
      $94 = $92 >>> 0 < $88 >>> 0; //@line 9219
      if ($94) {
       _abort(); //@line 9221
      } else {
       $95 = $$3 + 16 | 0; //@line 9224
       SAFE_HEAP_STORE($95 | 0, $92 | 0, 4);
       $96 = $92 + 24 | 0; //@line 9226
       SAFE_HEAP_STORE($96 | 0, $$3 | 0, 4);
       break;
      }
     }
    } while (0);
    $97 = $91 + 4 | 0; //@line 9232
    $98 = SAFE_HEAP_LOAD($97 | 0, 4, 0) | 0 | 0; //@line 9233
    $99 = ($98 | 0) == (0 | 0); //@line 9234
    if ($99) {
     $$1 = $16; //@line 9236
     $$1382 = $17; //@line 9236
     $113 = $16; //@line 9236
    } else {
     $100 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9238
     $101 = $98 >>> 0 < $100 >>> 0; //@line 9239
     if ($101) {
      _abort(); //@line 9241
     } else {
      $102 = $$3 + 20 | 0; //@line 9244
      SAFE_HEAP_STORE($102 | 0, $98 | 0, 4);
      $103 = $98 + 24 | 0; //@line 9246
      SAFE_HEAP_STORE($103 | 0, $$3 | 0, 4);
      $$1 = $16; //@line 9248
      $$1382 = $17; //@line 9248
      $113 = $16; //@line 9248
      break;
     }
    }
   }
  } else {
   $$1 = $2; //@line 9254
   $$1382 = $9; //@line 9254
   $113 = $2; //@line 9254
  }
 } while (0);
 $112 = $113 >>> 0 < $10 >>> 0; //@line 9257
 if (!$112) {
  _abort(); //@line 9259
 }
 $114 = $10 + 4 | 0; //@line 9262
 $115 = SAFE_HEAP_LOAD($114 | 0, 4, 0) | 0 | 0; //@line 9263
 $116 = $115 & 1; //@line 9264
 $117 = ($116 | 0) == 0; //@line 9265
 if ($117) {
  _abort(); //@line 9267
 }
 $118 = $115 & 2; //@line 9270
 $119 = ($118 | 0) == 0; //@line 9271
 if ($119) {
  $120 = SAFE_HEAP_LOAD(6656 | 0, 4, 0) | 0 | 0; //@line 9273
  $121 = ($10 | 0) == ($120 | 0); //@line 9274
  $122 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 9275
  if ($121) {
   $123 = SAFE_HEAP_LOAD(6644 | 0, 4, 0) | 0 | 0; //@line 9277
   $124 = $123 + $$1382 | 0; //@line 9278
   SAFE_HEAP_STORE(6644 | 0, $124 | 0, 4);
   SAFE_HEAP_STORE(6656 | 0, $$1 | 0, 4);
   $125 = $124 | 1; //@line 9281
   $126 = $$1 + 4 | 0; //@line 9282
   SAFE_HEAP_STORE($126 | 0, $125 | 0, 4);
   $127 = ($$1 | 0) == ($122 | 0); //@line 9284
   if (!$127) {
    return;
   }
   SAFE_HEAP_STORE(6652 | 0, 0 | 0, 4);
   SAFE_HEAP_STORE(6640 | 0, 0 | 0, 4);
   return;
  }
  $128 = ($10 | 0) == ($122 | 0); //@line 9292
  if ($128) {
   $129 = SAFE_HEAP_LOAD(6640 | 0, 4, 0) | 0 | 0; //@line 9294
   $130 = $129 + $$1382 | 0; //@line 9295
   SAFE_HEAP_STORE(6640 | 0, $130 | 0, 4);
   SAFE_HEAP_STORE(6652 | 0, $113 | 0, 4);
   $131 = $130 | 1; //@line 9298
   $132 = $$1 + 4 | 0; //@line 9299
   SAFE_HEAP_STORE($132 | 0, $131 | 0, 4);
   $133 = $113 + $130 | 0; //@line 9301
   SAFE_HEAP_STORE($133 | 0, $130 | 0, 4);
   return;
  }
  $134 = $115 & -8; //@line 9305
  $135 = $134 + $$1382 | 0; //@line 9306
  $136 = $115 >>> 3; //@line 9307
  $137 = $115 >>> 0 < 256; //@line 9308
  L108 : do {
   if ($137) {
    $138 = $10 + 8 | 0; //@line 9311
    $139 = SAFE_HEAP_LOAD($138 | 0, 4, 0) | 0 | 0; //@line 9312
    $140 = $10 + 12 | 0; //@line 9313
    $141 = SAFE_HEAP_LOAD($140 | 0, 4, 0) | 0 | 0; //@line 9314
    $142 = $136 << 1; //@line 9315
    $143 = 6672 + ($142 << 2) | 0; //@line 9316
    $144 = ($139 | 0) == ($143 | 0); //@line 9317
    if (!$144) {
     $145 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9319
     $146 = $139 >>> 0 < $145 >>> 0; //@line 9320
     if ($146) {
      _abort(); //@line 9322
     }
     $147 = $139 + 12 | 0; //@line 9325
     $148 = SAFE_HEAP_LOAD($147 | 0, 4, 0) | 0 | 0; //@line 9326
     $149 = ($148 | 0) == ($10 | 0); //@line 9327
     if (!$149) {
      _abort(); //@line 9329
     }
    }
    $150 = ($141 | 0) == ($139 | 0); //@line 9333
    if ($150) {
     $151 = 1 << $136; //@line 9335
     $152 = $151 ^ -1; //@line 9336
     $153 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 9337
     $154 = $153 & $152; //@line 9338
     SAFE_HEAP_STORE(1658 * 4 | 0, $154 | 0, 4);
     break;
    }
    $155 = ($141 | 0) == ($143 | 0); //@line 9342
    if ($155) {
     $$pre442 = $141 + 8 | 0; //@line 9344
     $$pre$phi443Z2D = $$pre442; //@line 9345
    } else {
     $156 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9347
     $157 = $141 >>> 0 < $156 >>> 0; //@line 9348
     if ($157) {
      _abort(); //@line 9350
     }
     $158 = $141 + 8 | 0; //@line 9353
     $159 = SAFE_HEAP_LOAD($158 | 0, 4, 0) | 0 | 0; //@line 9354
     $160 = ($159 | 0) == ($10 | 0); //@line 9355
     if ($160) {
      $$pre$phi443Z2D = $158; //@line 9357
     } else {
      _abort(); //@line 9359
     }
    }
    $161 = $139 + 12 | 0; //@line 9363
    SAFE_HEAP_STORE($161 | 0, $141 | 0, 4);
    SAFE_HEAP_STORE($$pre$phi443Z2D | 0, $139 | 0, 4);
   } else {
    $162 = $10 + 24 | 0; //@line 9367
    $163 = SAFE_HEAP_LOAD($162 | 0, 4, 0) | 0 | 0; //@line 9368
    $164 = $10 + 12 | 0; //@line 9369
    $165 = SAFE_HEAP_LOAD($164 | 0, 4, 0) | 0 | 0; //@line 9370
    $166 = ($165 | 0) == ($10 | 0); //@line 9371
    do {
     if ($166) {
      $177 = $10 + 16 | 0; //@line 9374
      $178 = $177 + 4 | 0; //@line 9375
      $179 = SAFE_HEAP_LOAD($178 | 0, 4, 0) | 0 | 0; //@line 9376
      $180 = ($179 | 0) == (0 | 0); //@line 9377
      if ($180) {
       $181 = SAFE_HEAP_LOAD($177 | 0, 4, 0) | 0 | 0; //@line 9379
       $182 = ($181 | 0) == (0 | 0); //@line 9380
       if ($182) {
        $$3400 = 0; //@line 9382
        break;
       } else {
        $$1398 = $181; //@line 9385
        $$1402 = $177; //@line 9385
       }
      } else {
       $$1398 = $179; //@line 9388
       $$1402 = $178; //@line 9388
      }
      while (1) {
       $183 = $$1398 + 20 | 0; //@line 9391
       $184 = SAFE_HEAP_LOAD($183 | 0, 4, 0) | 0 | 0; //@line 9392
       $185 = ($184 | 0) == (0 | 0); //@line 9393
       if (!$185) {
        $$1398 = $184; //@line 9395
        $$1402 = $183; //@line 9395
        continue;
       }
       $186 = $$1398 + 16 | 0; //@line 9398
       $187 = SAFE_HEAP_LOAD($186 | 0, 4, 0) | 0 | 0; //@line 9399
       $188 = ($187 | 0) == (0 | 0); //@line 9400
       if ($188) {
        break;
       } else {
        $$1398 = $187; //@line 9404
        $$1402 = $186; //@line 9404
       }
      }
      $189 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9407
      $190 = $$1402 >>> 0 < $189 >>> 0; //@line 9408
      if ($190) {
       _abort(); //@line 9410
      } else {
       SAFE_HEAP_STORE($$1402 | 0, 0 | 0, 4);
       $$3400 = $$1398; //@line 9414
       break;
      }
     } else {
      $167 = $10 + 8 | 0; //@line 9418
      $168 = SAFE_HEAP_LOAD($167 | 0, 4, 0) | 0 | 0; //@line 9419
      $169 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9420
      $170 = $168 >>> 0 < $169 >>> 0; //@line 9421
      if ($170) {
       _abort(); //@line 9423
      }
      $171 = $168 + 12 | 0; //@line 9426
      $172 = SAFE_HEAP_LOAD($171 | 0, 4, 0) | 0 | 0; //@line 9427
      $173 = ($172 | 0) == ($10 | 0); //@line 9428
      if (!$173) {
       _abort(); //@line 9430
      }
      $174 = $165 + 8 | 0; //@line 9433
      $175 = SAFE_HEAP_LOAD($174 | 0, 4, 0) | 0 | 0; //@line 9434
      $176 = ($175 | 0) == ($10 | 0); //@line 9435
      if ($176) {
       SAFE_HEAP_STORE($171 | 0, $165 | 0, 4);
       SAFE_HEAP_STORE($174 | 0, $168 | 0, 4);
       $$3400 = $165; //@line 9439
       break;
      } else {
       _abort(); //@line 9442
      }
     }
    } while (0);
    $191 = ($163 | 0) == (0 | 0); //@line 9447
    if (!$191) {
     $192 = $10 + 28 | 0; //@line 9449
     $193 = SAFE_HEAP_LOAD($192 | 0, 4, 0) | 0 | 0; //@line 9450
     $194 = 6936 + ($193 << 2) | 0; //@line 9451
     $195 = SAFE_HEAP_LOAD($194 | 0, 4, 0) | 0 | 0; //@line 9452
     $196 = ($10 | 0) == ($195 | 0); //@line 9453
     do {
      if ($196) {
       SAFE_HEAP_STORE($194 | 0, $$3400 | 0, 4);
       $cond422 = ($$3400 | 0) == (0 | 0); //@line 9457
       if ($cond422) {
        $197 = 1 << $193; //@line 9459
        $198 = $197 ^ -1; //@line 9460
        $199 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 9461
        $200 = $199 & $198; //@line 9462
        SAFE_HEAP_STORE(6636 | 0, $200 | 0, 4);
        break L108;
       }
      } else {
       $201 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9467
       $202 = $163 >>> 0 < $201 >>> 0; //@line 9468
       if ($202) {
        _abort(); //@line 9470
       } else {
        $203 = $163 + 16 | 0; //@line 9473
        $204 = SAFE_HEAP_LOAD($203 | 0, 4, 0) | 0 | 0; //@line 9474
        $not$ = ($204 | 0) != ($10 | 0); //@line 9475
        $$sink5 = $not$ & 1; //@line 9476
        $205 = ($163 + 16 | 0) + ($$sink5 << 2) | 0; //@line 9477
        SAFE_HEAP_STORE($205 | 0, $$3400 | 0, 4);
        $206 = ($$3400 | 0) == (0 | 0); //@line 9479
        if ($206) {
         break L108;
        } else {
         break;
        }
       }
      }
     } while (0);
     $207 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9488
     $208 = $$3400 >>> 0 < $207 >>> 0; //@line 9489
     if ($208) {
      _abort(); //@line 9491
     }
     $209 = $$3400 + 24 | 0; //@line 9494
     SAFE_HEAP_STORE($209 | 0, $163 | 0, 4);
     $210 = $10 + 16 | 0; //@line 9496
     $211 = SAFE_HEAP_LOAD($210 | 0, 4, 0) | 0 | 0; //@line 9497
     $212 = ($211 | 0) == (0 | 0); //@line 9498
     do {
      if (!$212) {
       $213 = $211 >>> 0 < $207 >>> 0; //@line 9501
       if ($213) {
        _abort(); //@line 9503
       } else {
        $214 = $$3400 + 16 | 0; //@line 9506
        SAFE_HEAP_STORE($214 | 0, $211 | 0, 4);
        $215 = $211 + 24 | 0; //@line 9508
        SAFE_HEAP_STORE($215 | 0, $$3400 | 0, 4);
        break;
       }
      }
     } while (0);
     $216 = $210 + 4 | 0; //@line 9514
     $217 = SAFE_HEAP_LOAD($216 | 0, 4, 0) | 0 | 0; //@line 9515
     $218 = ($217 | 0) == (0 | 0); //@line 9516
     if (!$218) {
      $219 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9518
      $220 = $217 >>> 0 < $219 >>> 0; //@line 9519
      if ($220) {
       _abort(); //@line 9521
      } else {
       $221 = $$3400 + 20 | 0; //@line 9524
       SAFE_HEAP_STORE($221 | 0, $217 | 0, 4);
       $222 = $217 + 24 | 0; //@line 9526
       SAFE_HEAP_STORE($222 | 0, $$3400 | 0, 4);
       break;
      }
     }
    }
   }
  } while (0);
  $223 = $135 | 1; //@line 9534
  $224 = $$1 + 4 | 0; //@line 9535
  SAFE_HEAP_STORE($224 | 0, $223 | 0, 4);
  $225 = $113 + $135 | 0; //@line 9537
  SAFE_HEAP_STORE($225 | 0, $135 | 0, 4);
  $226 = SAFE_HEAP_LOAD(6652 | 0, 4, 0) | 0 | 0; //@line 9539
  $227 = ($$1 | 0) == ($226 | 0); //@line 9540
  if ($227) {
   SAFE_HEAP_STORE(6640 | 0, $135 | 0, 4);
   return;
  } else {
   $$2 = $135; //@line 9545
  }
 } else {
  $228 = $115 & -2; //@line 9548
  SAFE_HEAP_STORE($114 | 0, $228 | 0, 4);
  $229 = $$1382 | 1; //@line 9550
  $230 = $$1 + 4 | 0; //@line 9551
  SAFE_HEAP_STORE($230 | 0, $229 | 0, 4);
  $231 = $113 + $$1382 | 0; //@line 9553
  SAFE_HEAP_STORE($231 | 0, $$1382 | 0, 4);
  $$2 = $$1382; //@line 9555
 }
 $232 = $$2 >>> 3; //@line 9557
 $233 = $$2 >>> 0 < 256; //@line 9558
 if ($233) {
  $234 = $232 << 1; //@line 9560
  $235 = 6672 + ($234 << 2) | 0; //@line 9561
  $236 = SAFE_HEAP_LOAD(1658 * 4 | 0, 4, 0) | 0 | 0; //@line 9562
  $237 = 1 << $232; //@line 9563
  $238 = $236 & $237; //@line 9564
  $239 = ($238 | 0) == 0; //@line 9565
  if ($239) {
   $240 = $236 | $237; //@line 9567
   SAFE_HEAP_STORE(1658 * 4 | 0, $240 | 0, 4);
   $$pre = $235 + 8 | 0; //@line 9569
   $$0403 = $235; //@line 9570
   $$pre$phiZ2D = $$pre; //@line 9570
  } else {
   $241 = $235 + 8 | 0; //@line 9572
   $242 = SAFE_HEAP_LOAD($241 | 0, 4, 0) | 0 | 0; //@line 9573
   $243 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9574
   $244 = $242 >>> 0 < $243 >>> 0; //@line 9575
   if ($244) {
    _abort(); //@line 9577
   } else {
    $$0403 = $242; //@line 9580
    $$pre$phiZ2D = $241; //@line 9580
   }
  }
  SAFE_HEAP_STORE($$pre$phiZ2D | 0, $$1 | 0, 4);
  $245 = $$0403 + 12 | 0; //@line 9584
  SAFE_HEAP_STORE($245 | 0, $$1 | 0, 4);
  $246 = $$1 + 8 | 0; //@line 9586
  SAFE_HEAP_STORE($246 | 0, $$0403 | 0, 4);
  $247 = $$1 + 12 | 0; //@line 9588
  SAFE_HEAP_STORE($247 | 0, $235 | 0, 4);
  return;
 }
 $248 = $$2 >>> 8; //@line 9592
 $249 = ($248 | 0) == 0; //@line 9593
 if ($249) {
  $$0396 = 0; //@line 9595
 } else {
  $250 = $$2 >>> 0 > 16777215; //@line 9597
  if ($250) {
   $$0396 = 31; //@line 9599
  } else {
   $251 = $248 + 1048320 | 0; //@line 9601
   $252 = $251 >>> 16; //@line 9602
   $253 = $252 & 8; //@line 9603
   $254 = $248 << $253; //@line 9604
   $255 = $254 + 520192 | 0; //@line 9605
   $256 = $255 >>> 16; //@line 9606
   $257 = $256 & 4; //@line 9607
   $258 = $257 | $253; //@line 9608
   $259 = $254 << $257; //@line 9609
   $260 = $259 + 245760 | 0; //@line 9610
   $261 = $260 >>> 16; //@line 9611
   $262 = $261 & 2; //@line 9612
   $263 = $258 | $262; //@line 9613
   $264 = 14 - $263 | 0; //@line 9614
   $265 = $259 << $262; //@line 9615
   $266 = $265 >>> 15; //@line 9616
   $267 = $264 + $266 | 0; //@line 9617
   $268 = $267 << 1; //@line 9618
   $269 = $267 + 7 | 0; //@line 9619
   $270 = $$2 >>> $269; //@line 9620
   $271 = $270 & 1; //@line 9621
   $272 = $271 | $268; //@line 9622
   $$0396 = $272; //@line 9623
  }
 }
 $273 = 6936 + ($$0396 << 2) | 0; //@line 9626
 $274 = $$1 + 28 | 0; //@line 9627
 SAFE_HEAP_STORE($274 | 0, $$0396 | 0, 4);
 $275 = $$1 + 16 | 0; //@line 9629
 $276 = $$1 + 20 | 0; //@line 9630
 SAFE_HEAP_STORE($276 | 0, 0 | 0, 4);
 SAFE_HEAP_STORE($275 | 0, 0 | 0, 4);
 $277 = SAFE_HEAP_LOAD(6636 | 0, 4, 0) | 0 | 0; //@line 9633
 $278 = 1 << $$0396; //@line 9634
 $279 = $277 & $278; //@line 9635
 $280 = ($279 | 0) == 0; //@line 9636
 do {
  if ($280) {
   $281 = $277 | $278; //@line 9639
   SAFE_HEAP_STORE(6636 | 0, $281 | 0, 4);
   SAFE_HEAP_STORE($273 | 0, $$1 | 0, 4);
   $282 = $$1 + 24 | 0; //@line 9642
   SAFE_HEAP_STORE($282 | 0, $273 | 0, 4);
   $283 = $$1 + 12 | 0; //@line 9644
   SAFE_HEAP_STORE($283 | 0, $$1 | 0, 4);
   $284 = $$1 + 8 | 0; //@line 9646
   SAFE_HEAP_STORE($284 | 0, $$1 | 0, 4);
  } else {
   $285 = SAFE_HEAP_LOAD($273 | 0, 4, 0) | 0 | 0; //@line 9649
   $286 = ($$0396 | 0) == 31; //@line 9650
   $287 = $$0396 >>> 1; //@line 9651
   $288 = 25 - $287 | 0; //@line 9652
   $289 = $286 ? 0 : $288; //@line 9653
   $290 = $$2 << $289; //@line 9654
   $$0383 = $290; //@line 9655
   $$0384 = $285; //@line 9655
   while (1) {
    $291 = $$0384 + 4 | 0; //@line 9657
    $292 = SAFE_HEAP_LOAD($291 | 0, 4, 0) | 0 | 0; //@line 9658
    $293 = $292 & -8; //@line 9659
    $294 = ($293 | 0) == ($$2 | 0); //@line 9660
    if ($294) {
     label = 124; //@line 9662
     break;
    }
    $295 = $$0383 >>> 31; //@line 9665
    $296 = ($$0384 + 16 | 0) + ($295 << 2) | 0; //@line 9666
    $297 = $$0383 << 1; //@line 9667
    $298 = SAFE_HEAP_LOAD($296 | 0, 4, 0) | 0 | 0; //@line 9668
    $299 = ($298 | 0) == (0 | 0); //@line 9669
    if ($299) {
     label = 121; //@line 9671
     break;
    } else {
     $$0383 = $297; //@line 9674
     $$0384 = $298; //@line 9674
    }
   }
   if ((label | 0) == 121) {
    $300 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9678
    $301 = $296 >>> 0 < $300 >>> 0; //@line 9679
    if ($301) {
     _abort(); //@line 9681
    } else {
     SAFE_HEAP_STORE($296 | 0, $$1 | 0, 4);
     $302 = $$1 + 24 | 0; //@line 9685
     SAFE_HEAP_STORE($302 | 0, $$0384 | 0, 4);
     $303 = $$1 + 12 | 0; //@line 9687
     SAFE_HEAP_STORE($303 | 0, $$1 | 0, 4);
     $304 = $$1 + 8 | 0; //@line 9689
     SAFE_HEAP_STORE($304 | 0, $$1 | 0, 4);
     break;
    }
   } else if ((label | 0) == 124) {
    $305 = $$0384 + 8 | 0; //@line 9695
    $306 = SAFE_HEAP_LOAD($305 | 0, 4, 0) | 0 | 0; //@line 9696
    $307 = SAFE_HEAP_LOAD(6648 | 0, 4, 0) | 0 | 0; //@line 9697
    $308 = $306 >>> 0 >= $307 >>> 0; //@line 9698
    $not$437 = $$0384 >>> 0 >= $307 >>> 0; //@line 9699
    $309 = $308 & $not$437; //@line 9700
    if ($309) {
     $310 = $306 + 12 | 0; //@line 9702
     SAFE_HEAP_STORE($310 | 0, $$1 | 0, 4);
     SAFE_HEAP_STORE($305 | 0, $$1 | 0, 4);
     $311 = $$1 + 8 | 0; //@line 9705
     SAFE_HEAP_STORE($311 | 0, $306 | 0, 4);
     $312 = $$1 + 12 | 0; //@line 9707
     SAFE_HEAP_STORE($312 | 0, $$0384 | 0, 4);
     $313 = $$1 + 24 | 0; //@line 9709
     SAFE_HEAP_STORE($313 | 0, 0 | 0, 4);
     break;
    } else {
     _abort(); //@line 9713
    }
   }
  }
 } while (0);
 $314 = SAFE_HEAP_LOAD(6664 | 0, 4, 0) | 0 | 0; //@line 9719
 $315 = $314 + -1 | 0; //@line 9720
 SAFE_HEAP_STORE(6664 | 0, $315 | 0, 4);
 $316 = ($315 | 0) == 0; //@line 9722
 if ($316) {
  $$0212$in$i = 7088; //@line 9724
 } else {
  return;
 }
 while (1) {
  $$0212$i = SAFE_HEAP_LOAD($$0212$in$i | 0, 4, 0) | 0 | 0; //@line 9729
  $317 = ($$0212$i | 0) == (0 | 0); //@line 9730
  $318 = $$0212$i + 8 | 0; //@line 9731
  if ($317) {
   break;
  } else {
   $$0212$in$i = $318; //@line 9735
  }
 }
 SAFE_HEAP_STORE(6664 | 0, -1 | 0, 4);
 return;
}
function __ZNSt3__210shared_ptrI13StringFactoryE11make_sharedIJEEES2_DpOT_($0) {
 $0 = $0 | 0; //@line 1644
 var $$expand_i1_val = 0, $$expand_i1_val2 = 0, $$pre_trunc = 0, $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0; //@line 1645
 var $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0; //@line 1646
 var $132 = 0, $133 = 0, $134 = 0, $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $147 = 0, $148 = 0, $149 = 0, $15 = 0; //@line 1647
 var $150 = 0, $151 = 0, $152 = 0, $153 = 0, $154 = 0, $155 = 0, $156 = 0, $157 = 0, $158 = 0, $159 = 0, $16 = 0, $160 = 0, $161 = 0, $162 = 0, $163 = 0, $164 = 0, $165 = 0, $166 = 0, $167 = 0, $168 = 0; //@line 1648
 var $169 = 0, $17 = 0, $170 = 0, $171 = 0, $172 = 0, $173 = 0, $174 = 0, $175 = 0, $176 = 0, $177 = 0, $178 = 0, $179 = 0, $18 = 0, $180 = 0, $181 = 0, $182 = 0, $183 = 0, $184 = 0, $185 = 0, $186 = 0; //@line 1649
 var $187 = 0, $188 = 0, $189 = 0, $19 = 0, $190 = 0, $191 = 0, $192 = 0, $193 = 0, $194 = 0, $195 = 0, $196 = 0, $197 = 0, $198 = 0, $199 = 0, $2 = 0, $20 = 0, $200 = 0, $201 = 0, $202 = 0, $203 = 0; //@line 1650
 var $204 = 0, $205 = 0, $206 = 0, $207 = 0, $208 = 0, $209 = 0, $21 = 0, $210 = 0, $211 = 0, $212 = 0, $213 = 0, $214 = 0, $215 = 0, $216 = 0, $217 = 0, $218 = 0, $219 = 0, $22 = 0, $220 = 0, $221 = 0; //@line 1651
 var $222 = 0, $223 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0; //@line 1652
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0; //@line 1653
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0; //@line 1654
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0; //@line 1655
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0; //@line 1656
 sp = STACKTOP; //@line 1657
 STACKTOP = STACKTOP + 464 | 0; //@line 1658
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(464 | 0); //@line 1658
 $38 = sp + 32 | 0; //@line 1659
 $41 = sp + 456 | 0; //@line 1660
 $42 = sp + 24 | 0; //@line 1661
 $48 = sp + 455 | 0; //@line 1662
 $51 = sp + 16 | 0; //@line 1663
 $61 = sp + 228 | 0; //@line 1664
 $62 = sp + 8 | 0; //@line 1665
 $65 = sp + 216 | 0; //@line 1666
 $66 = sp + 208 | 0; //@line 1667
 $67 = sp; //@line 1668
 $72 = sp + 184 | 0; //@line 1669
 $101 = sp + 454 | 0; //@line 1670
 $102 = sp + 56 | 0; //@line 1671
 $103 = sp + 48 | 0; //@line 1672
 $104 = sp + 453 | 0; //@line 1673
 $107 = sp + 452 | 0; //@line 1674
 $100 = $101; //@line 1675
 $78 = $101; //@line 1676
 $79 = 1; //@line 1677
 $80 = 0; //@line 1678
 $108 = $78; //@line 1679
 $109 = $79; //@line 1680
 $77 = $108; //@line 1681
 $110 = $109 >>> 0 > 268435455; //@line 1682
 if ($110) {
  $111 = ___cxa_allocate_exception(4) | 0; //@line 1684
  __ZNSt9bad_allocC2Ev($111); //@line 1685
  ___cxa_throw($111 | 0, 376 | 0, 32 | 0); //@line 1686
 }
 $112 = $79; //@line 1689
 $113 = $112 << 4; //@line 1690
 $76 = $113; //@line 1691
 $114 = $76; //@line 1692
 $115 = __Znwj($114) | 0; //@line 1693
 $73 = $103; //@line 1694
 $74 = $101; //@line 1695
 $75 = 1; //@line 1696
 $116 = $73; //@line 1697
 $117 = $74; //@line 1698
 SAFE_HEAP_STORE($116 | 0, $117 | 0, 4);
 $118 = $116 + 4 | 0; //@line 1700
 $119 = $75; //@line 1701
 SAFE_HEAP_STORE($118 | 0, $119 | 0, 4);
 $69 = $102; //@line 1703
 $70 = $115; //@line 1704
 $71 = $103; //@line 1705
 $120 = $69; //@line 1706
 $121 = $70; //@line 1707
 $122 = $71; //@line 1708
 $68 = $122; //@line 1709
 $123 = $68; //@line 1710
 SAFE_HEAP_STORE($72 | 0, SAFE_HEAP_LOAD($123 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($72 + 4 | 0, SAFE_HEAP_LOAD($123 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($67 >> 0 | 0, SAFE_HEAP_LOAD($72 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 1 >> 0 | 0, SAFE_HEAP_LOAD($72 + 1 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 2 >> 0 | 0, SAFE_HEAP_LOAD($72 + 2 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 3 >> 0 | 0, SAFE_HEAP_LOAD($72 + 3 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 4 >> 0 | 0, SAFE_HEAP_LOAD($72 + 4 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 5 >> 0 | 0, SAFE_HEAP_LOAD($72 + 5 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 6 >> 0 | 0, SAFE_HEAP_LOAD($72 + 6 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($67 + 7 >> 0 | 0, SAFE_HEAP_LOAD($72 + 7 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $64 = $120; //@line 1713
 SAFE_HEAP_STORE($65 | 0, $121 | 0, 4);
 $124 = $64; //@line 1715
 $63 = $65; //@line 1716
 $125 = $63; //@line 1717
 $126 = SAFE_HEAP_LOAD($125 | 0, 4, 0) | 0 | 0; //@line 1718
 $57 = $67; //@line 1719
 $127 = $57; //@line 1720
 SAFE_HEAP_STORE($66 | 0, SAFE_HEAP_LOAD($127 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($66 + 4 | 0, SAFE_HEAP_LOAD($127 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($62 >> 0 | 0, SAFE_HEAP_LOAD($66 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 1 >> 0 | 0, SAFE_HEAP_LOAD($66 + 1 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 2 >> 0 | 0, SAFE_HEAP_LOAD($66 + 2 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 3 >> 0 | 0, SAFE_HEAP_LOAD($66 + 3 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 4 >> 0 | 0, SAFE_HEAP_LOAD($66 + 4 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 5 >> 0 | 0, SAFE_HEAP_LOAD($66 + 5 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 6 >> 0 | 0, SAFE_HEAP_LOAD($66 + 6 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($62 + 7 >> 0 | 0, SAFE_HEAP_LOAD($66 + 7 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $60 = $124; //@line 1723
 SAFE_HEAP_STORE($61 | 0, $126 | 0, 4);
 $128 = $60; //@line 1725
 $59 = $61; //@line 1726
 $129 = $59; //@line 1727
 $130 = SAFE_HEAP_LOAD($129 | 0, 4, 0) | 0 | 0; //@line 1728
 SAFE_HEAP_STORE($128 | 0, $130 | 0, 4);
 $131 = $128 + 4 | 0; //@line 1730
 $58 = $62; //@line 1731
 $132 = $58; //@line 1732
 SAFE_HEAP_STORE($131 | 0, SAFE_HEAP_LOAD($132 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($131 + 4 | 0, SAFE_HEAP_LOAD($132 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
 $56 = $102; //@line 1734
 $133 = $56; //@line 1735
 $55 = $133; //@line 1736
 $134 = $55; //@line 1737
 $54 = $134; //@line 1738
 $135 = $54; //@line 1739
 $136 = SAFE_HEAP_LOAD($135 | 0, 4, 0) | 0 | 0; //@line 1740
 $52 = $104; //@line 1741
 $53 = $101; //@line 1742
 SAFE_HEAP_STORE($51 >> 0 | 0, SAFE_HEAP_LOAD($104 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $47 = $136; //@line 1744
 $137 = $47; //@line 1745
 $45 = $137; //@line 1746
 $46 = 0; //@line 1747
 $138 = $45; //@line 1748
 $139 = $46; //@line 1749
 $43 = $138; //@line 1750
 $44 = $139; //@line 1751
 $140 = $43; //@line 1752
 SAFE_HEAP_STORE($140 | 0, 1172 | 0, 4);
 $141 = $140 + 4 | 0; //@line 1754
 $142 = $44; //@line 1755
 SAFE_HEAP_STORE($141 | 0, $142 | 0, 4);
 SAFE_HEAP_STORE($138 | 0, 1192 | 0, 4);
 $143 = $138 + 8 | 0; //@line 1758
 $144 = $46; //@line 1759
 SAFE_HEAP_STORE($143 | 0, $144 | 0, 4);
 SAFE_HEAP_STORE($137 | 0, 640 | 0, 4);
 $145 = $137 + 12 | 0; //@line 1762
 $35 = $51; //@line 1763
 SAFE_HEAP_STORE($42 >> 0 | 0, SAFE_HEAP_LOAD($48 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $40 = $145; //@line 1765
 $146 = $40; //@line 1766
 $39 = $42; //@line 1767
 SAFE_HEAP_STORE($38 >> 0 | 0, SAFE_HEAP_LOAD($41 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $37 = $146; //@line 1769
 $147 = $37; //@line 1770
 $36 = $38; //@line 1771
 __THREW__ = 0; //@line 1772
 invoke_vi(73, $147 | 0); //@line 1773
 $148 = __THREW__; //@line 1774
 __THREW__ = 0; //@line 1774
 $149 = $148 & 1; //@line 1775
 if ($149) {
  $150 = ___cxa_find_matching_catch_2() | 0; //@line 1777
  $151 = tempRet0; //@line 1778
  $49 = $150; //@line 1779
  $50 = $151; //@line 1780
  __ZNSt3__214__shared_countD2Ev($137); //@line 1781
  $152 = $49; //@line 1782
  $153 = $50; //@line 1783
  $105 = $152; //@line 1784
  $106 = $153; //@line 1785
  $30 = $102; //@line 1786
  $154 = $30; //@line 1787
  $27 = $154; //@line 1788
  $28 = 0; //@line 1789
  $155 = $27; //@line 1790
  $26 = $155; //@line 1791
  $156 = $26; //@line 1792
  $25 = $156; //@line 1793
  $157 = $25; //@line 1794
  $158 = SAFE_HEAP_LOAD($157 | 0, 4, 0) | 0 | 0; //@line 1795
  $29 = $158; //@line 1796
  $159 = $28; //@line 1797
  $15 = $155; //@line 1798
  $160 = $15; //@line 1799
  $14 = $160; //@line 1800
  $161 = $14; //@line 1801
  SAFE_HEAP_STORE($161 | 0, $159 | 0, 4);
  $162 = $29; //@line 1803
  $163 = ($162 | 0) != (0 | 0); //@line 1804
  if (!$163) {
   $222 = $105; //@line 1806
   $223 = $106; //@line 1807
   ___resumeException($222 | 0); //@line 1808
  }
  $13 = $155; //@line 1811
  $184 = $13; //@line 1812
  $12 = $184; //@line 1813
  $185 = $12; //@line 1814
  $186 = $185 + 4 | 0; //@line 1815
  $187 = $29; //@line 1816
  $23 = $186; //@line 1817
  $24 = $187; //@line 1818
  $188 = $23; //@line 1819
  $189 = SAFE_HEAP_LOAD($188 | 0, 4, 0) | 0 | 0; //@line 1820
  $190 = $24; //@line 1821
  $191 = $188 + 4 | 0; //@line 1822
  $192 = SAFE_HEAP_LOAD($191 | 0, 4, 0) | 0 | 0; //@line 1823
  $20 = $189; //@line 1824
  $21 = $190; //@line 1825
  $22 = $192; //@line 1826
  $193 = $20; //@line 1827
  $194 = $21; //@line 1828
  $195 = $22; //@line 1829
  $17 = $193; //@line 1830
  $18 = $194; //@line 1831
  $19 = $195; //@line 1832
  $196 = $18; //@line 1833
  $16 = $196; //@line 1834
  $197 = $16; //@line 1835
  __ZdlPv($197); //@line 1836
  $222 = $105; //@line 1837
  $223 = $106; //@line 1838
  ___resumeException($222 | 0); //@line 1839
 }
 $$expand_i1_val = 0; //@line 1842
 SAFE_HEAP_STORE($107 >> 0 | 0, $$expand_i1_val | 0, 1);
 $34 = $0; //@line 1844
 $164 = $34; //@line 1845
 SAFE_HEAP_STORE($164 | 0, 0 | 0, 4);
 $165 = $164 + 4 | 0; //@line 1847
 SAFE_HEAP_STORE($165 | 0, 0 | 0, 4);
 $33 = $102; //@line 1849
 $166 = $33; //@line 1850
 $32 = $166; //@line 1851
 $167 = $32; //@line 1852
 $31 = $167; //@line 1853
 $168 = $31; //@line 1854
 $169 = SAFE_HEAP_LOAD($168 | 0, 4, 0) | 0 | 0; //@line 1855
 $11 = $169; //@line 1856
 $170 = $11; //@line 1857
 $171 = $170 + 12 | 0; //@line 1858
 $10 = $171; //@line 1859
 $172 = $10; //@line 1860
 $9 = $172; //@line 1861
 $173 = $9; //@line 1862
 SAFE_HEAP_STORE($0 | 0, $173 | 0, 4);
 $5 = $102; //@line 1864
 $174 = $5; //@line 1865
 $4 = $174; //@line 1866
 $175 = $4; //@line 1867
 $3 = $175; //@line 1868
 $176 = $3; //@line 1869
 $177 = SAFE_HEAP_LOAD($176 | 0, 4, 0) | 0 | 0; //@line 1870
 $6 = $177; //@line 1871
 $2 = $174; //@line 1872
 $178 = $2; //@line 1873
 $1 = $178; //@line 1874
 $179 = $1; //@line 1875
 SAFE_HEAP_STORE($179 | 0, 0 | 0, 4);
 $180 = $6; //@line 1877
 $181 = $0 + 4 | 0; //@line 1878
 SAFE_HEAP_STORE($181 | 0, $180 | 0, 4);
 $182 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 1880
 $7 = $0; //@line 1881
 $8 = $182; //@line 1882
 $$expand_i1_val2 = 1; //@line 1883
 SAFE_HEAP_STORE($107 >> 0 | 0, $$expand_i1_val2 | 0, 1);
 $$pre_trunc = SAFE_HEAP_LOAD($107 >> 0 | 0, 1, 0) | 0 | 0; //@line 1885
 $183 = $$pre_trunc & 1; //@line 1886
 if (!$183) {
  __ZNSt3__210shared_ptrI13StringFactoryED2Ev($0); //@line 1888
 }
 $99 = $102; //@line 1890
 $198 = $99; //@line 1891
 $96 = $198; //@line 1892
 $97 = 0; //@line 1893
 $199 = $96; //@line 1894
 $95 = $199; //@line 1895
 $200 = $95; //@line 1896
 $94 = $200; //@line 1897
 $201 = $94; //@line 1898
 $202 = SAFE_HEAP_LOAD($201 | 0, 4, 0) | 0 | 0; //@line 1899
 $98 = $202; //@line 1900
 $203 = $97; //@line 1901
 $84 = $199; //@line 1902
 $204 = $84; //@line 1903
 $83 = $204; //@line 1904
 $205 = $83; //@line 1905
 SAFE_HEAP_STORE($205 | 0, $203 | 0, 4);
 $206 = $98; //@line 1907
 $207 = ($206 | 0) != (0 | 0); //@line 1908
 if (!$207) {
  STACKTOP = sp; //@line 1910
  return;
 }
 $82 = $199; //@line 1912
 $208 = $82; //@line 1913
 $81 = $208; //@line 1914
 $209 = $81; //@line 1915
 $210 = $209 + 4 | 0; //@line 1916
 $211 = $98; //@line 1917
 $92 = $210; //@line 1918
 $93 = $211; //@line 1919
 $212 = $92; //@line 1920
 $213 = SAFE_HEAP_LOAD($212 | 0, 4, 0) | 0 | 0; //@line 1921
 $214 = $93; //@line 1922
 $215 = $212 + 4 | 0; //@line 1923
 $216 = SAFE_HEAP_LOAD($215 | 0, 4, 0) | 0 | 0; //@line 1924
 $89 = $213; //@line 1925
 $90 = $214; //@line 1926
 $91 = $216; //@line 1927
 $217 = $89; //@line 1928
 $218 = $90; //@line 1929
 $219 = $91; //@line 1930
 $86 = $217; //@line 1931
 $87 = $218; //@line 1932
 $88 = $219; //@line 1933
 $220 = $87; //@line 1934
 $85 = $220; //@line 1935
 $221 = $85; //@line 1936
 __ZdlPv($221); //@line 1937
 STACKTOP = sp; //@line 1938
 return;
}
function _pop_arg($0, $1, $2) {
 $0 = $0 | 0; //@line 4325
 $1 = $1 | 0; //@line 4326
 $2 = $2 | 0; //@line 4327
 var $$mask = 0, $$mask31 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0.0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0; //@line 4328
 var $116 = 0.0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0;
 var $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0; //@line 4330
 var $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0; //@line 4331
 var $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0; //@line 4332
 var $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, $arglist_current = 0, $arglist_current11 = 0, $arglist_current14 = 0, $arglist_current17 = 0; //@line 4333
 var $arglist_current2 = 0, $arglist_current20 = 0, $arglist_current23 = 0, $arglist_current26 = 0, $arglist_current5 = 0, $arglist_current8 = 0, $arglist_next = 0, $arglist_next12 = 0, $arglist_next15 = 0, $arglist_next18 = 0, $arglist_next21 = 0, $arglist_next24 = 0, $arglist_next27 = 0, $arglist_next3 = 0, $arglist_next6 = 0, $arglist_next9 = 0, $expanded = 0, $expanded28 = 0, $expanded30 = 0, $expanded31 = 0; //@line 4334
 var $expanded32 = 0, $expanded34 = 0, $expanded35 = 0, $expanded37 = 0, $expanded38 = 0, $expanded39 = 0, $expanded41 = 0, $expanded42 = 0, $expanded44 = 0, $expanded45 = 0, $expanded46 = 0, $expanded48 = 0, $expanded49 = 0, $expanded51 = 0, $expanded52 = 0, $expanded53 = 0, $expanded55 = 0, $expanded56 = 0, $expanded58 = 0, $expanded59 = 0; //@line 4335
 var $expanded60 = 0, $expanded62 = 0, $expanded63 = 0, $expanded65 = 0, $expanded66 = 0, $expanded67 = 0, $expanded69 = 0, $expanded70 = 0, $expanded72 = 0, $expanded73 = 0, $expanded74 = 0, $expanded76 = 0, $expanded77 = 0, $expanded79 = 0, $expanded80 = 0, $expanded81 = 0, $expanded83 = 0, $expanded84 = 0, $expanded86 = 0, $expanded87 = 0; //@line 4336
 var $expanded88 = 0, $expanded90 = 0, $expanded91 = 0, $expanded93 = 0, $expanded94 = 0, $expanded95 = 0, label = 0, sp = 0; //@line 4337
 sp = STACKTOP; //@line 4338
 $3 = $1 >>> 0 > 20; //@line 4339
 L1 : do {
  if (!$3) {
   do {
    switch ($1 | 0) {
    case 9:
     {
      $arglist_current = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4345
      $4 = $arglist_current; //@line 4346
      $5 = 0 + 4 | 0; //@line 4347
      $expanded28 = $5; //@line 4348
      $expanded = $expanded28 - 1 | 0; //@line 4349
      $6 = $4 + $expanded | 0; //@line 4350
      $7 = 0 + 4 | 0; //@line 4351
      $expanded32 = $7; //@line 4352
      $expanded31 = $expanded32 - 1 | 0; //@line 4353
      $expanded30 = $expanded31 ^ -1; //@line 4354
      $8 = $6 & $expanded30; //@line 4355
      $9 = $8; //@line 4356
      $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 4357
      $arglist_next = $9 + 4 | 0; //@line 4358
      SAFE_HEAP_STORE($2 | 0, $arglist_next | 0, 4);
      SAFE_HEAP_STORE($0 | 0, $10 | 0, 4);
      break L1;
      break;
     }
    case 10:
     {
      $arglist_current2 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4365
      $11 = $arglist_current2; //@line 4366
      $12 = 0 + 4 | 0; //@line 4367
      $expanded35 = $12; //@line 4368
      $expanded34 = $expanded35 - 1 | 0; //@line 4369
      $13 = $11 + $expanded34 | 0; //@line 4370
      $14 = 0 + 4 | 0; //@line 4371
      $expanded39 = $14; //@line 4372
      $expanded38 = $expanded39 - 1 | 0; //@line 4373
      $expanded37 = $expanded38 ^ -1; //@line 4374
      $15 = $13 & $expanded37; //@line 4375
      $16 = $15; //@line 4376
      $17 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 4377
      $arglist_next3 = $16 + 4 | 0; //@line 4378
      SAFE_HEAP_STORE($2 | 0, $arglist_next3 | 0, 4);
      $18 = ($17 | 0) < 0; //@line 4380
      $19 = $18 << 31 >> 31; //@line 4381
      $20 = $0; //@line 4382
      $21 = $20; //@line 4383
      SAFE_HEAP_STORE($21 | 0, $17 | 0, 4);
      $22 = $20 + 4 | 0; //@line 4385
      $23 = $22; //@line 4386
      SAFE_HEAP_STORE($23 | 0, $19 | 0, 4);
      break L1;
      break;
     }
    case 11:
     {
      $arglist_current5 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4392
      $24 = $arglist_current5; //@line 4393
      $25 = 0 + 4 | 0; //@line 4394
      $expanded42 = $25; //@line 4395
      $expanded41 = $expanded42 - 1 | 0; //@line 4396
      $26 = $24 + $expanded41 | 0; //@line 4397
      $27 = 0 + 4 | 0; //@line 4398
      $expanded46 = $27; //@line 4399
      $expanded45 = $expanded46 - 1 | 0; //@line 4400
      $expanded44 = $expanded45 ^ -1; //@line 4401
      $28 = $26 & $expanded44; //@line 4402
      $29 = $28; //@line 4403
      $30 = SAFE_HEAP_LOAD($29 | 0, 4, 0) | 0 | 0; //@line 4404
      $arglist_next6 = $29 + 4 | 0; //@line 4405
      SAFE_HEAP_STORE($2 | 0, $arglist_next6 | 0, 4);
      $31 = $0; //@line 4407
      $32 = $31; //@line 4408
      SAFE_HEAP_STORE($32 | 0, $30 | 0, 4);
      $33 = $31 + 4 | 0; //@line 4410
      $34 = $33; //@line 4411
      SAFE_HEAP_STORE($34 | 0, 0 | 0, 4);
      break L1;
      break;
     }
    case 12:
     {
      $arglist_current8 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4417
      $35 = $arglist_current8; //@line 4418
      $36 = 0 + 8 | 0; //@line 4419
      $expanded49 = $36; //@line 4420
      $expanded48 = $expanded49 - 1 | 0; //@line 4421
      $37 = $35 + $expanded48 | 0; //@line 4422
      $38 = 0 + 8 | 0; //@line 4423
      $expanded53 = $38; //@line 4424
      $expanded52 = $expanded53 - 1 | 0; //@line 4425
      $expanded51 = $expanded52 ^ -1; //@line 4426
      $39 = $37 & $expanded51; //@line 4427
      $40 = $39; //@line 4428
      $41 = $40; //@line 4429
      $42 = $41; //@line 4430
      $43 = SAFE_HEAP_LOAD($42 | 0, 4, 0) | 0 | 0; //@line 4431
      $44 = $41 + 4 | 0; //@line 4432
      $45 = $44; //@line 4433
      $46 = SAFE_HEAP_LOAD($45 | 0, 4, 0) | 0 | 0; //@line 4434
      $arglist_next9 = $40 + 8 | 0; //@line 4435
      SAFE_HEAP_STORE($2 | 0, $arglist_next9 | 0, 4);
      $47 = $0; //@line 4437
      $48 = $47; //@line 4438
      SAFE_HEAP_STORE($48 | 0, $43 | 0, 4);
      $49 = $47 + 4 | 0; //@line 4440
      $50 = $49; //@line 4441
      SAFE_HEAP_STORE($50 | 0, $46 | 0, 4);
      break L1;
      break;
     }
    case 13:
     {
      $arglist_current11 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4447
      $51 = $arglist_current11; //@line 4448
      $52 = 0 + 4 | 0; //@line 4449
      $expanded56 = $52; //@line 4450
      $expanded55 = $expanded56 - 1 | 0; //@line 4451
      $53 = $51 + $expanded55 | 0; //@line 4452
      $54 = 0 + 4 | 0; //@line 4453
      $expanded60 = $54; //@line 4454
      $expanded59 = $expanded60 - 1 | 0; //@line 4455
      $expanded58 = $expanded59 ^ -1; //@line 4456
      $55 = $53 & $expanded58; //@line 4457
      $56 = $55; //@line 4458
      $57 = SAFE_HEAP_LOAD($56 | 0, 4, 0) | 0 | 0; //@line 4459
      $arglist_next12 = $56 + 4 | 0; //@line 4460
      SAFE_HEAP_STORE($2 | 0, $arglist_next12 | 0, 4);
      $58 = $57 & 65535; //@line 4462
      $59 = $58 << 16 >> 16; //@line 4463
      $60 = ($59 | 0) < 0; //@line 4464
      $61 = $60 << 31 >> 31; //@line 4465
      $62 = $0; //@line 4466
      $63 = $62; //@line 4467
      SAFE_HEAP_STORE($63 | 0, $59 | 0, 4);
      $64 = $62 + 4 | 0; //@line 4469
      $65 = $64; //@line 4470
      SAFE_HEAP_STORE($65 | 0, $61 | 0, 4);
      break L1;
      break;
     }
    case 14:
     {
      $arglist_current14 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4476
      $66 = $arglist_current14; //@line 4477
      $67 = 0 + 4 | 0; //@line 4478
      $expanded63 = $67; //@line 4479
      $expanded62 = $expanded63 - 1 | 0; //@line 4480
      $68 = $66 + $expanded62 | 0; //@line 4481
      $69 = 0 + 4 | 0; //@line 4482
      $expanded67 = $69; //@line 4483
      $expanded66 = $expanded67 - 1 | 0; //@line 4484
      $expanded65 = $expanded66 ^ -1; //@line 4485
      $70 = $68 & $expanded65; //@line 4486
      $71 = $70; //@line 4487
      $72 = SAFE_HEAP_LOAD($71 | 0, 4, 0) | 0 | 0; //@line 4488
      $arglist_next15 = $71 + 4 | 0; //@line 4489
      SAFE_HEAP_STORE($2 | 0, $arglist_next15 | 0, 4);
      $$mask31 = $72 & 65535; //@line 4491
      $73 = $0; //@line 4492
      $74 = $73; //@line 4493
      SAFE_HEAP_STORE($74 | 0, $$mask31 | 0, 4);
      $75 = $73 + 4 | 0; //@line 4495
      $76 = $75; //@line 4496
      SAFE_HEAP_STORE($76 | 0, 0 | 0, 4);
      break L1;
      break;
     }
    case 15:
     {
      $arglist_current17 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4502
      $77 = $arglist_current17; //@line 4503
      $78 = 0 + 4 | 0; //@line 4504
      $expanded70 = $78; //@line 4505
      $expanded69 = $expanded70 - 1 | 0; //@line 4506
      $79 = $77 + $expanded69 | 0; //@line 4507
      $80 = 0 + 4 | 0; //@line 4508
      $expanded74 = $80; //@line 4509
      $expanded73 = $expanded74 - 1 | 0; //@line 4510
      $expanded72 = $expanded73 ^ -1; //@line 4511
      $81 = $79 & $expanded72; //@line 4512
      $82 = $81; //@line 4513
      $83 = SAFE_HEAP_LOAD($82 | 0, 4, 0) | 0 | 0; //@line 4514
      $arglist_next18 = $82 + 4 | 0; //@line 4515
      SAFE_HEAP_STORE($2 | 0, $arglist_next18 | 0, 4);
      $84 = $83 & 255; //@line 4517
      $85 = $84 << 24 >> 24; //@line 4518
      $86 = ($85 | 0) < 0; //@line 4519
      $87 = $86 << 31 >> 31; //@line 4520
      $88 = $0; //@line 4521
      $89 = $88; //@line 4522
      SAFE_HEAP_STORE($89 | 0, $85 | 0, 4);
      $90 = $88 + 4 | 0; //@line 4524
      $91 = $90; //@line 4525
      SAFE_HEAP_STORE($91 | 0, $87 | 0, 4);
      break L1;
      break;
     }
    case 16:
     {
      $arglist_current20 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4531
      $92 = $arglist_current20; //@line 4532
      $93 = 0 + 4 | 0; //@line 4533
      $expanded77 = $93; //@line 4534
      $expanded76 = $expanded77 - 1 | 0; //@line 4535
      $94 = $92 + $expanded76 | 0; //@line 4536
      $95 = 0 + 4 | 0; //@line 4537
      $expanded81 = $95; //@line 4538
      $expanded80 = $expanded81 - 1 | 0; //@line 4539
      $expanded79 = $expanded80 ^ -1; //@line 4540
      $96 = $94 & $expanded79; //@line 4541
      $97 = $96; //@line 4542
      $98 = SAFE_HEAP_LOAD($97 | 0, 4, 0) | 0 | 0; //@line 4543
      $arglist_next21 = $97 + 4 | 0; //@line 4544
      SAFE_HEAP_STORE($2 | 0, $arglist_next21 | 0, 4);
      $$mask = $98 & 255; //@line 4546
      $99 = $0; //@line 4547
      $100 = $99; //@line 4548
      SAFE_HEAP_STORE($100 | 0, $$mask | 0, 4);
      $101 = $99 + 4 | 0; //@line 4550
      $102 = $101; //@line 4551
      SAFE_HEAP_STORE($102 | 0, 0 | 0, 4);
      break L1;
      break;
     }
    case 17:
     {
      $arglist_current23 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4557
      $103 = $arglist_current23; //@line 4558
      $104 = 0 + 8 | 0; //@line 4559
      $expanded84 = $104; //@line 4560
      $expanded83 = $expanded84 - 1 | 0; //@line 4561
      $105 = $103 + $expanded83 | 0; //@line 4562
      $106 = 0 + 8 | 0; //@line 4563
      $expanded88 = $106; //@line 4564
      $expanded87 = $expanded88 - 1 | 0; //@line 4565
      $expanded86 = $expanded87 ^ -1; //@line 4566
      $107 = $105 & $expanded86; //@line 4567
      $108 = $107; //@line 4568
      $109 = +(+SAFE_HEAP_LOAD_D($108 | 0, 8)); //@line 4569
      $arglist_next24 = $108 + 8 | 0; //@line 4570
      SAFE_HEAP_STORE($2 | 0, $arglist_next24 | 0, 4);
      SAFE_HEAP_STORE_D($0 | 0, +$109, 8);
      break L1;
      break;
     }
    case 18:
     {
      $arglist_current26 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4577
      $110 = $arglist_current26; //@line 4578
      $111 = 0 + 8 | 0; //@line 4579
      $expanded91 = $111; //@line 4580
      $expanded90 = $expanded91 - 1 | 0; //@line 4581
      $112 = $110 + $expanded90 | 0; //@line 4582
      $113 = 0 + 8 | 0; //@line 4583
      $expanded95 = $113; //@line 4584
      $expanded94 = $expanded95 - 1 | 0; //@line 4585
      $expanded93 = $expanded94 ^ -1; //@line 4586
      $114 = $112 & $expanded93; //@line 4587
      $115 = $114; //@line 4588
      $116 = +(+SAFE_HEAP_LOAD_D($115 | 0, 8)); //@line 4589
      $arglist_next27 = $115 + 8 | 0; //@line 4590
      SAFE_HEAP_STORE($2 | 0, $arglist_next27 | 0, 4);
      SAFE_HEAP_STORE_D($0 | 0, +$116, 8);
      break L1;
      break;
     }
    default:
     {
      break L1;
     }
    }
   } while (0);
  }
 } while (0);
 return;
}
function ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) {
 $a$0 = $a$0 | 0; //@line 12182
 $a$1 = $a$1 | 0; //@line 12183
 $b$0 = $b$0 | 0; //@line 12184
 $b$1 = $b$1 | 0; //@line 12185
 $rem = $rem | 0; //@line 12186
 var $n_sroa_0_0_extract_trunc = 0, $n_sroa_1_4_extract_shift$0 = 0, $n_sroa_1_4_extract_trunc = 0, $d_sroa_0_0_extract_trunc = 0, $d_sroa_1_4_extract_shift$0 = 0, $d_sroa_1_4_extract_trunc = 0, $4 = 0, $17 = 0, $37 = 0, $49 = 0, $51 = 0, $57 = 0, $58 = 0, $66 = 0, $78 = 0, $86 = 0, $88 = 0, $89 = 0, $91 = 0, $92 = 0, $95 = 0, $105 = 0, $117 = 0, $119 = 0, $125 = 0, $126 = 0, $130 = 0, $q_sroa_1_1_ph = 0, $q_sroa_0_1_ph = 0, $r_sroa_1_1_ph = 0, $r_sroa_0_1_ph = 0, $sr_1_ph = 0, $d_sroa_0_0_insert_insert99$0 = 0, $d_sroa_0_0_insert_insert99$1 = 0, $137$0 = 0, $137$1 = 0, $carry_0203 = 0, $sr_1202 = 0, $r_sroa_0_1201 = 0, $r_sroa_1_1200 = 0, $q_sroa_0_1199 = 0, $q_sroa_1_1198 = 0, $147 = 0, $149 = 0, $r_sroa_0_0_insert_insert42$0 = 0, $r_sroa_0_0_insert_insert42$1 = 0, $150$1 = 0, $151$0 = 0, $152 = 0, $154$0 = 0, $r_sroa_0_0_extract_trunc = 0, $r_sroa_1_4_extract_trunc = 0, $155 = 0, $carry_0_lcssa$0 = 0, $carry_0_lcssa$1 = 0, $r_sroa_0_1_lcssa = 0, $r_sroa_1_1_lcssa = 0, $q_sroa_0_1_lcssa = 0, $q_sroa_1_1_lcssa = 0, $q_sroa_0_0_insert_ext75$0 = 0, $q_sroa_0_0_insert_ext75$1 = 0, $q_sroa_0_0_insert_insert77$1 = 0, $_0$0 = 0, $_0$1 = 0; //@line 12187
 $n_sroa_0_0_extract_trunc = $a$0; //@line 12188
 $n_sroa_1_4_extract_shift$0 = $a$1; //@line 12189
 $n_sroa_1_4_extract_trunc = $n_sroa_1_4_extract_shift$0; //@line 12190
 $d_sroa_0_0_extract_trunc = $b$0; //@line 12191
 $d_sroa_1_4_extract_shift$0 = $b$1; //@line 12192
 $d_sroa_1_4_extract_trunc = $d_sroa_1_4_extract_shift$0; //@line 12193
 if (($n_sroa_1_4_extract_trunc | 0) == 0) {
  $4 = ($rem | 0) != 0; //@line 12195
  if (($d_sroa_1_4_extract_trunc | 0) == 0) {
   if ($4) {
    SAFE_HEAP_STORE($rem | 0, ($n_sroa_0_0_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0) | 0, 4);
    SAFE_HEAP_STORE($rem + 4 | 0, 0 | 0, 4);
   }
   $_0$1 = 0; //@line 12201
   $_0$0 = ($n_sroa_0_0_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0; //@line 12202
   return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12203
  } else {
   if (!$4) {
    $_0$1 = 0; //@line 12206
    $_0$0 = 0; //@line 12207
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12208
   }
   SAFE_HEAP_STORE($rem | 0, $a$0 & -1 | 0, 4);
   SAFE_HEAP_STORE($rem + 4 | 0, $a$1 & 0 | 0, 4);
   $_0$1 = 0; //@line 12212
   $_0$0 = 0; //@line 12213
   return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12214
  }
 }
 $17 = ($d_sroa_1_4_extract_trunc | 0) == 0; //@line 12217
 do {
  if (($d_sroa_0_0_extract_trunc | 0) == 0) {
   if ($17) {
    if (($rem | 0) != 0) {
     SAFE_HEAP_STORE($rem | 0, ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_0_0_extract_trunc >>> 0) | 0, 4);
     SAFE_HEAP_STORE($rem + 4 | 0, 0 | 0, 4);
    }
    $_0$1 = 0; //@line 12225
    $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_0_0_extract_trunc >>> 0) >>> 0; //@line 12226
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12227
   }
   if (($n_sroa_0_0_extract_trunc | 0) == 0) {
    if (($rem | 0) != 0) {
     SAFE_HEAP_STORE($rem | 0, 0 | 0, 4);
     SAFE_HEAP_STORE($rem + 4 | 0, ($n_sroa_1_4_extract_trunc >>> 0) % ($d_sroa_1_4_extract_trunc >>> 0) | 0, 4);
    }
    $_0$1 = 0; //@line 12234
    $_0$0 = ($n_sroa_1_4_extract_trunc >>> 0) / ($d_sroa_1_4_extract_trunc >>> 0) >>> 0; //@line 12235
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12236
   }
   $37 = $d_sroa_1_4_extract_trunc - 1 | 0; //@line 12238
   if (($37 & $d_sroa_1_4_extract_trunc | 0) == 0) {
    if (($rem | 0) != 0) {
     SAFE_HEAP_STORE($rem | 0, 0 | $a$0 & -1 | 0, 4);
     SAFE_HEAP_STORE($rem + 4 | 0, $37 & $n_sroa_1_4_extract_trunc | $a$1 & 0 | 0, 4);
    }
    $_0$1 = 0; //@line 12244
    $_0$0 = $n_sroa_1_4_extract_trunc >>> ((_llvm_cttz_i32($d_sroa_1_4_extract_trunc | 0) | 0) >>> 0); //@line 12245
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12246
   }
   $49 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0; //@line 12248
   $51 = $49 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0; //@line 12249
   if ($51 >>> 0 <= 30) {
    $57 = $51 + 1 | 0; //@line 12251
    $58 = 31 - $51 | 0; //@line 12252
    $sr_1_ph = $57; //@line 12253
    $r_sroa_0_1_ph = $n_sroa_1_4_extract_trunc << $58 | $n_sroa_0_0_extract_trunc >>> ($57 >>> 0); //@line 12254
    $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($57 >>> 0); //@line 12255
    $q_sroa_0_1_ph = 0; //@line 12256
    $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $58; //@line 12257
    break;
   }
   if (($rem | 0) == 0) {
    $_0$1 = 0; //@line 12261
    $_0$0 = 0; //@line 12262
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12263
   }
   SAFE_HEAP_STORE($rem | 0, 0 | $a$0 & -1 | 0, 4);
   SAFE_HEAP_STORE($rem + 4 | 0, $n_sroa_1_4_extract_shift$0 | $a$1 & 0 | 0, 4);
   $_0$1 = 0; //@line 12267
   $_0$0 = 0; //@line 12268
   return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12269
  } else {
   if (!$17) {
    $117 = Math_clz32($d_sroa_1_4_extract_trunc | 0) | 0; //@line 12272
    $119 = $117 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0; //@line 12273
    if ($119 >>> 0 <= 31) {
     $125 = $119 + 1 | 0; //@line 12275
     $126 = 31 - $119 | 0; //@line 12276
     $130 = $119 - 31 >> 31; //@line 12277
     $sr_1_ph = $125; //@line 12278
     $r_sroa_0_1_ph = $n_sroa_0_0_extract_trunc >>> ($125 >>> 0) & $130 | $n_sroa_1_4_extract_trunc << $126; //@line 12279
     $r_sroa_1_1_ph = $n_sroa_1_4_extract_trunc >>> ($125 >>> 0) & $130; //@line 12280
     $q_sroa_0_1_ph = 0; //@line 12281
     $q_sroa_1_1_ph = $n_sroa_0_0_extract_trunc << $126; //@line 12282
     break;
    }
    if (($rem | 0) == 0) {
     $_0$1 = 0; //@line 12286
     $_0$0 = 0; //@line 12287
     return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12288
    }
    SAFE_HEAP_STORE($rem | 0, 0 | $a$0 & -1 | 0, 4);
    SAFE_HEAP_STORE($rem + 4 | 0, $n_sroa_1_4_extract_shift$0 | $a$1 & 0 | 0, 4);
    $_0$1 = 0; //@line 12292
    $_0$0 = 0; //@line 12293
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12294
   }
   $66 = $d_sroa_0_0_extract_trunc - 1 | 0; //@line 12296
   if (($66 & $d_sroa_0_0_extract_trunc | 0) != 0) {
    $86 = (Math_clz32($d_sroa_0_0_extract_trunc | 0) | 0) + 33 | 0; //@line 12298
    $88 = $86 - (Math_clz32($n_sroa_1_4_extract_trunc | 0) | 0) | 0; //@line 12299
    $89 = 64 - $88 | 0; //@line 12300
    $91 = 32 - $88 | 0; //@line 12301
    $92 = $91 >> 31; //@line 12302
    $95 = $88 - 32 | 0; //@line 12303
    $105 = $95 >> 31; //@line 12304
    $sr_1_ph = $88; //@line 12305
    $r_sroa_0_1_ph = $91 - 1 >> 31 & $n_sroa_1_4_extract_trunc >>> ($95 >>> 0) | ($n_sroa_1_4_extract_trunc << $91 | $n_sroa_0_0_extract_trunc >>> ($88 >>> 0)) & $105; //@line 12306
    $r_sroa_1_1_ph = $105 & $n_sroa_1_4_extract_trunc >>> ($88 >>> 0); //@line 12307
    $q_sroa_0_1_ph = $n_sroa_0_0_extract_trunc << $89 & $92; //@line 12308
    $q_sroa_1_1_ph = ($n_sroa_1_4_extract_trunc << $89 | $n_sroa_0_0_extract_trunc >>> ($95 >>> 0)) & $92 | $n_sroa_0_0_extract_trunc << $91 & $88 - 33 >> 31; //@line 12309
    break;
   }
   if (($rem | 0) != 0) {
    SAFE_HEAP_STORE($rem | 0, $66 & $n_sroa_0_0_extract_trunc | 0, 4);
    SAFE_HEAP_STORE($rem + 4 | 0, 0 | 0, 4);
   }
   if (($d_sroa_0_0_extract_trunc | 0) == 1) {
    $_0$1 = $n_sroa_1_4_extract_shift$0 | $a$1 & 0; //@line 12317
    $_0$0 = 0 | $a$0 & -1; //@line 12318
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12319
   } else {
    $78 = _llvm_cttz_i32($d_sroa_0_0_extract_trunc | 0) | 0; //@line 12321
    $_0$1 = 0 | $n_sroa_1_4_extract_trunc >>> ($78 >>> 0); //@line 12322
    $_0$0 = $n_sroa_1_4_extract_trunc << 32 - $78 | $n_sroa_0_0_extract_trunc >>> ($78 >>> 0) | 0; //@line 12323
    return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12324
   }
  }
 } while (0);
 if (($sr_1_ph | 0) == 0) {
  $q_sroa_1_1_lcssa = $q_sroa_1_1_ph; //@line 12329
  $q_sroa_0_1_lcssa = $q_sroa_0_1_ph; //@line 12330
  $r_sroa_1_1_lcssa = $r_sroa_1_1_ph; //@line 12331
  $r_sroa_0_1_lcssa = $r_sroa_0_1_ph; //@line 12332
  $carry_0_lcssa$1 = 0; //@line 12333
  $carry_0_lcssa$0 = 0; //@line 12334
 } else {
  $d_sroa_0_0_insert_insert99$0 = 0 | $b$0 & -1; //@line 12336
  $d_sroa_0_0_insert_insert99$1 = $d_sroa_1_4_extract_shift$0 | $b$1 & 0; //@line 12337
  $137$0 = _i64Add($d_sroa_0_0_insert_insert99$0 | 0, $d_sroa_0_0_insert_insert99$1 | 0, -1, -1) | 0; //@line 12338
  $137$1 = tempRet0; //@line 12339
  $q_sroa_1_1198 = $q_sroa_1_1_ph; //@line 12340
  $q_sroa_0_1199 = $q_sroa_0_1_ph; //@line 12341
  $r_sroa_1_1200 = $r_sroa_1_1_ph; //@line 12342
  $r_sroa_0_1201 = $r_sroa_0_1_ph; //@line 12343
  $sr_1202 = $sr_1_ph; //@line 12344
  $carry_0203 = 0; //@line 12345
  while (1) {
   $147 = $q_sroa_0_1199 >>> 31 | $q_sroa_1_1198 << 1; //@line 12347
   $149 = $carry_0203 | $q_sroa_0_1199 << 1; //@line 12348
   $r_sroa_0_0_insert_insert42$0 = 0 | ($r_sroa_0_1201 << 1 | $q_sroa_1_1198 >>> 31); //@line 12349
   $r_sroa_0_0_insert_insert42$1 = $r_sroa_0_1201 >>> 31 | $r_sroa_1_1200 << 1 | 0; //@line 12350
   _i64Subtract($137$0 | 0, $137$1 | 0, $r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0) | 0; //@line 12351
   $150$1 = tempRet0; //@line 12352
   $151$0 = $150$1 >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1; //@line 12353
   $152 = $151$0 & 1; //@line 12354
   $154$0 = _i64Subtract($r_sroa_0_0_insert_insert42$0 | 0, $r_sroa_0_0_insert_insert42$1 | 0, $151$0 & $d_sroa_0_0_insert_insert99$0 | 0, ((($150$1 | 0) < 0 ? -1 : 0) >> 31 | (($150$1 | 0) < 0 ? -1 : 0) << 1) & $d_sroa_0_0_insert_insert99$1 | 0) | 0; //@line 12355
   $r_sroa_0_0_extract_trunc = $154$0; //@line 12356
   $r_sroa_1_4_extract_trunc = tempRet0; //@line 12357
   $155 = $sr_1202 - 1 | 0; //@line 12358
   if (($155 | 0) == 0) {
    break;
   } else {
    $q_sroa_1_1198 = $147; //@line 12362
    $q_sroa_0_1199 = $149; //@line 12363
    $r_sroa_1_1200 = $r_sroa_1_4_extract_trunc; //@line 12364
    $r_sroa_0_1201 = $r_sroa_0_0_extract_trunc; //@line 12365
    $sr_1202 = $155; //@line 12366
    $carry_0203 = $152; //@line 12367
   }
  }
  $q_sroa_1_1_lcssa = $147; //@line 12370
  $q_sroa_0_1_lcssa = $149; //@line 12371
  $r_sroa_1_1_lcssa = $r_sroa_1_4_extract_trunc; //@line 12372
  $r_sroa_0_1_lcssa = $r_sroa_0_0_extract_trunc; //@line 12373
  $carry_0_lcssa$1 = 0; //@line 12374
  $carry_0_lcssa$0 = $152; //@line 12375
 }
 $q_sroa_0_0_insert_ext75$0 = $q_sroa_0_1_lcssa; //@line 12377
 $q_sroa_0_0_insert_ext75$1 = 0; //@line 12378
 $q_sroa_0_0_insert_insert77$1 = $q_sroa_1_1_lcssa | $q_sroa_0_0_insert_ext75$1; //@line 12379
 if (($rem | 0) != 0) {
  SAFE_HEAP_STORE($rem | 0, 0 | $r_sroa_0_1_lcssa | 0, 4);
  SAFE_HEAP_STORE($rem + 4 | 0, $r_sroa_1_1_lcssa | 0 | 0, 4);
 }
 $_0$1 = (0 | $q_sroa_0_0_insert_ext75$0) >>> 31 | $q_sroa_0_0_insert_insert77$1 << 1 | ($q_sroa_0_0_insert_ext75$1 << 1 | $q_sroa_0_0_insert_ext75$0 >>> 31) & 0 | $carry_0_lcssa$1; //@line 12384
 $_0$0 = ($q_sroa_0_0_insert_ext75$0 << 1 | 0 >>> 31) & -2 | $carry_0_lcssa$0; //@line 12385
 return (tempRet0 = $_0$1, $_0$0) | 0; //@line 12386
}
function __ZNSt3__210shared_ptrI13StringFactoryEC2IS1_N10emscripten15smart_ptr_traitIS2_E11val_deleterEEEPT_T0_NS_9enable_ifIXsr14is_convertibleIS9_PS1_EE5valueENS2_5__natEE4typeE($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 741
 $1 = $1 | 0; //@line 742
 $2 = $2 | 0; //@line 743
 $3 = $3 | 0; //@line 744
 var $$expand_i1_val = 0, $$expand_i1_val6 = 0, $$pre_trunc = 0, $$sink1 = 0, $$sink2 = 0, $$sink3 = 0, $$sink4 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0; //@line 745
 var $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $13 = 0; //@line 746
 var $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0; //@line 747
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0; //@line 748
 var $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0; //@line 749
 var $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0; //@line 750
 var $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0; //@line 751
 sp = STACKTOP; //@line 752
 STACKTOP = STACKTOP + 208 | 0; //@line 753
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(208 | 0); //@line 753
 $9 = sp + 16 | 0; //@line 754
 $13 = sp + 152 | 0; //@line 755
 $14 = sp + 195 | 0; //@line 756
 $17 = sp + 8 | 0; //@line 757
 $22 = sp + 120 | 0; //@line 758
 $26 = sp + 104 | 0; //@line 759
 $27 = sp + 100 | 0; //@line 760
 $37 = sp + 56 | 0; //@line 761
 $38 = sp + 52 | 0; //@line 762
 $41 = sp + 194 | 0; //@line 763
 $42 = sp; //@line 764
 $48 = sp + 20 | 0; //@line 765
 $49 = sp + 193 | 0; //@line 766
 $50 = sp + 192 | 0; //@line 767
 $44 = $0; //@line 768
 $45 = $1; //@line 769
 $51 = $44; //@line 770
 $52 = $45; //@line 771
 SAFE_HEAP_STORE($51 | 0, $52 | 0, 4);
 __THREW__ = 0; //@line 773
 $53 = invoke_ii(63, 20) | 0; //@line 774
 $54 = __THREW__; //@line 775
 __THREW__ = 0; //@line 775
 $55 = $54 & 1; //@line 776
 if ($55) {
  $111 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 778
  $112 = tempRet0; //@line 779
  $46 = $111; //@line 780
  $47 = $112; //@line 781
 } else {
  $$expand_i1_val = 1; //@line 783
  SAFE_HEAP_STORE($50 >> 0 | 0, $$expand_i1_val | 0, 1);
  $56 = $45; //@line 785
  __THREW__ = 0; //@line 786
  invoke_vii(64, $48 | 0, $2 | 0); //@line 787
  $57 = __THREW__; //@line 788
  __THREW__ = 0; //@line 788
  $58 = $57 & 1; //@line 789
  if ($58) {
   $113 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 791
   $114 = tempRet0; //@line 792
   $46 = $113; //@line 793
   $47 = $114; //@line 794
  } else {
   $43 = $49; //@line 796
   SAFE_HEAP_STORE($42 >> 0 | 0, SAFE_HEAP_LOAD($49 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
   $35 = $53; //@line 798
   $36 = $56; //@line 799
   $59 = $35; //@line 800
   $33 = $59; //@line 801
   $34 = 0; //@line 802
   $60 = $33; //@line 803
   $61 = $34; //@line 804
   $31 = $60; //@line 805
   $32 = $61; //@line 806
   $62 = $31; //@line 807
   SAFE_HEAP_STORE($62 | 0, 1172 | 0, 4);
   $63 = $62 + 4 | 0; //@line 809
   $64 = $32; //@line 810
   SAFE_HEAP_STORE($63 | 0, $64 | 0, 4);
   SAFE_HEAP_STORE($60 | 0, 1192 | 0, 4);
   $65 = $60 + 8 | 0; //@line 813
   $66 = $34; //@line 814
   SAFE_HEAP_STORE($65 | 0, $66 | 0, 4);
   SAFE_HEAP_STORE($59 | 0, 608 | 0, 4);
   $67 = $59 + 12 | 0; //@line 817
   $68 = $36; //@line 818
   $30 = $48; //@line 819
   $69 = $30; //@line 820
   __THREW__ = 0; //@line 821
   invoke_vii(65, $38 | 0, $69 | 0); //@line 822
   $70 = __THREW__; //@line 823
   __THREW__ = 0; //@line 823
   $71 = $70 & 1; //@line 824
   if ($71) {
    $101 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 826
    $102 = tempRet0; //@line 827
    $39 = $101; //@line 828
    $40 = $102; //@line 829
   } else {
    $25 = $37; //@line 831
    SAFE_HEAP_STORE($26 | 0, $68 | 0, 4);
    $72 = $25; //@line 833
    $24 = $26; //@line 834
    $73 = $24; //@line 835
    $74 = SAFE_HEAP_LOAD($73 | 0, 4, 0) | 0 | 0; //@line 836
    $23 = $38; //@line 837
    $75 = $23; //@line 838
    __THREW__ = 0; //@line 839
    invoke_vii(65, $27 | 0, $75 | 0); //@line 840
    $76 = __THREW__; //@line 841
    __THREW__ = 0; //@line 841
    $77 = $76 & 1; //@line 842
    do {
     if ($77) {
      $103 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 845
      $104 = tempRet0; //@line 846
      $$sink1 = $104; //@line 847
      $$sink2 = $103; //@line 847
      label = 12; //@line 848
     } else {
      $21 = $72; //@line 850
      SAFE_HEAP_STORE($22 | 0, $74 | 0, 4);
      $78 = $21; //@line 852
      $20 = $22; //@line 853
      $79 = $20; //@line 854
      $80 = SAFE_HEAP_LOAD($79 | 0, 4, 0) | 0 | 0; //@line 855
      SAFE_HEAP_STORE($78 | 0, $80 | 0, 4);
      $81 = $78 + 4 | 0; //@line 857
      $19 = $27; //@line 858
      $82 = $19; //@line 859
      __THREW__ = 0; //@line 860
      invoke_vii(65, $81 | 0, $82 | 0); //@line 861
      $83 = __THREW__; //@line 862
      __THREW__ = 0; //@line 862
      $84 = $83 & 1; //@line 863
      if ($84) {
       $85 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 865
       $86 = tempRet0; //@line 866
       $28 = $85; //@line 867
       $29 = $86; //@line 868
       __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($27); //@line 869
       $87 = $28; //@line 870
       $88 = $29; //@line 871
       $$sink1 = $88; //@line 872
       $$sink2 = $87; //@line 872
       label = 12; //@line 873
       break;
      }
      __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($27); //@line 876
      $18 = $42; //@line 877
      SAFE_HEAP_STORE($17 >> 0 | 0, SAFE_HEAP_LOAD($41 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
      $12 = $67; //@line 879
      $89 = $12; //@line 880
      $11 = $37; //@line 881
      $90 = $11; //@line 882
      __THREW__ = 0; //@line 883
      invoke_vii(66, $13 | 0, $90 | 0); //@line 884
      $91 = __THREW__; //@line 885
      __THREW__ = 0; //@line 885
      $92 = $91 & 1; //@line 886
      do {
       if ($92) {
        $105 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 889
        $106 = tempRet0; //@line 890
        $$sink3 = $106; //@line 891
        $$sink4 = $105; //@line 891
       } else {
        $10 = $17; //@line 893
        SAFE_HEAP_STORE($9 >> 0 | 0, SAFE_HEAP_LOAD($14 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
        $8 = $89; //@line 895
        $93 = $8; //@line 896
        $7 = $9; //@line 897
        $6 = $13; //@line 898
        $94 = $6; //@line 899
        __THREW__ = 0; //@line 900
        invoke_vii(66, $93 | 0, $94 | 0); //@line 901
        $95 = __THREW__; //@line 902
        __THREW__ = 0; //@line 902
        $96 = $95 & 1; //@line 903
        if ($96) {
         $97 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 905
         $98 = tempRet0; //@line 906
         $15 = $97; //@line 907
         $16 = $98; //@line 908
         __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($13); //@line 909
         $99 = $15; //@line 910
         $100 = $16; //@line 911
         $$sink3 = $100; //@line 912
         $$sink4 = $99; //@line 912
         break;
        } else {
         __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($13); //@line 915
         __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($37); //@line 916
         __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($38); //@line 917
         $$expand_i1_val6 = 0; //@line 918
         SAFE_HEAP_STORE($50 >> 0 | 0, $$expand_i1_val6 | 0, 1);
         $109 = $51 + 4 | 0; //@line 920
         SAFE_HEAP_STORE($109 | 0, $53 | 0, 4);
         __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($48); //@line 922
         $110 = $45; //@line 923
         $4 = $51; //@line 924
         $5 = $110; //@line 925
         STACKTOP = sp; //@line 926
         return;
        }
       }
      } while (0);
      $39 = $$sink4; //@line 930
      $40 = $$sink3; //@line 931
      __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($37); //@line 932
     }
    } while (0);
    if ((label | 0) == 12) {
     $39 = $$sink2; //@line 936
     $40 = $$sink1; //@line 937
    }
    __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($38); //@line 939
   }
   __ZNSt3__214__shared_countD2Ev($59); //@line 941
   $107 = $39; //@line 942
   $108 = $40; //@line 943
   $46 = $107; //@line 944
   $47 = $108; //@line 945
   __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($48); //@line 946
  }
  $$pre_trunc = SAFE_HEAP_LOAD($50 >> 0 | 0, 1, 0) | 0 | 0; //@line 948
  $115 = $$pre_trunc & 1; //@line 949
  if ($115) {
   __ZdlPv($53); //@line 951
  }
 }
 $116 = $46; //@line 954
 ___cxa_begin_catch($116 | 0) | 0; //@line 955
 $117 = $45; //@line 956
 __THREW__ = 0; //@line 957
 invoke_vii(67, $2 | 0, $117 | 0); //@line 958
 $118 = __THREW__; //@line 959
 __THREW__ = 0; //@line 959
 $119 = $118 & 1; //@line 960
 if (!$119) {
  __THREW__ = 0; //@line 962
  invoke_v(68); //@line 963
  $120 = __THREW__; //@line 964
  __THREW__ = 0; //@line 964
 }
 $121 = ___cxa_find_matching_catch_2() | 0; //@line 966
 $122 = tempRet0; //@line 967
 $46 = $121; //@line 968
 $47 = $122; //@line 969
 __THREW__ = 0; //@line 970
 invoke_v(69); //@line 971
 $123 = __THREW__; //@line 972
 __THREW__ = 0; //@line 972
 $124 = $123 & 1; //@line 973
 if ($124) {
  $127 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 975
  $128 = tempRet0; //@line 976
  ___clang_call_terminate($127); //@line 977
 } else {
  $125 = $46; //@line 980
  $126 = $47; //@line 981
  ___resumeException($125 | 0); //@line 982
 }
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 11576
 $1 = $1 | 0; //@line 11577
 $2 = $2 | 0; //@line 11578
 $3 = $3 | 0; //@line 11579
 $4 = $4 | 0; //@line 11580
 var $$0 = 0, $$081$off0 = 0, $$084 = 0, $$085$off0 = 0, $$1 = 0, $$182$off0 = 0, $$186$off0 = 0, $$2 = 0, $$283$off0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0; //@line 11581
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0; //@line 11582
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0; //@line 11583
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0; //@line 11584
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $9 = 0, label = 0, sp = 0; //@line 11585
 sp = STACKTOP; //@line 11586
 $5 = $1 + 8 | 0; //@line 11587
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 11588
 $7 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $6, $4) | 0; //@line 11589
 L1 : do {
  if ($7) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0, $1, $2, $3); //@line 11592
  } else {
   $8 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 11594
   $9 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $8, $4) | 0; //@line 11595
   $10 = $0 + 12 | 0; //@line 11596
   $11 = $1 + 24 | 0; //@line 11597
   $12 = $1 + 36 | 0; //@line 11598
   $13 = $1 + 54 | 0; //@line 11599
   $14 = $0 + 8 | 0; //@line 11600
   $15 = $0 + 16 | 0; //@line 11601
   if (!$9) {
    $55 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11603
    $56 = ($0 + 16 | 0) + ($55 << 3) | 0; //@line 11604
    __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($15, $1, $2, $3, $4); //@line 11605
    $57 = $0 + 24 | 0; //@line 11606
    $58 = ($55 | 0) > 1; //@line 11607
    if (!$58) {
     break;
    }
    $59 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11611
    $60 = $59 & 2; //@line 11612
    $61 = ($60 | 0) == 0; //@line 11613
    if ($61) {
     $62 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11615
     $63 = ($62 | 0) == 1; //@line 11616
     if ($63) {
      $$0 = $57; //@line 11618
     } else {
      $68 = $59 & 1; //@line 11620
      $69 = ($68 | 0) == 0; //@line 11621
      if ($69) {
       $$2 = $57; //@line 11623
       while (1) {
        $78 = SAFE_HEAP_LOAD($13 >> 0 | 0, 1, 0) | 0 | 0; //@line 11625
        $79 = $78 << 24 >> 24 == 0; //@line 11626
        if (!$79) {
         break L1;
        }
        $80 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11630
        $81 = ($80 | 0) == 1; //@line 11631
        if ($81) {
         break L1;
        }
        __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$2, $1, $2, $3, $4); //@line 11635
        $82 = $$2 + 8 | 0; //@line 11636
        $83 = $82 >>> 0 < $56 >>> 0; //@line 11637
        if ($83) {
         $$2 = $82; //@line 11639
        } else {
         break L1;
        }
       }
      } else {
       $$1 = $57; //@line 11645
      }
      while (1) {
       $70 = SAFE_HEAP_LOAD($13 >> 0 | 0, 1, 0) | 0 | 0; //@line 11648
       $71 = $70 << 24 >> 24 == 0; //@line 11649
       if (!$71) {
        break L1;
       }
       $72 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11653
       $73 = ($72 | 0) == 1; //@line 11654
       if ($73) {
        $74 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11656
        $75 = ($74 | 0) == 1; //@line 11657
        if ($75) {
         break L1;
        }
       }
       __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$1, $1, $2, $3, $4); //@line 11662
       $76 = $$1 + 8 | 0; //@line 11663
       $77 = $76 >>> 0 < $56 >>> 0; //@line 11664
       if ($77) {
        $$1 = $76; //@line 11666
       } else {
        break L1;
       }
      }
     }
    } else {
     $$0 = $57; //@line 11673
    }
    while (1) {
     $64 = SAFE_HEAP_LOAD($13 >> 0 | 0, 1, 0) | 0 | 0; //@line 11676
     $65 = $64 << 24 >> 24 == 0; //@line 11677
     if (!$65) {
      break L1;
     }
     __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($$0, $1, $2, $3, $4); //@line 11681
     $66 = $$0 + 8 | 0; //@line 11682
     $67 = $66 >>> 0 < $56 >>> 0; //@line 11683
     if ($67) {
      $$0 = $66; //@line 11685
     } else {
      break L1;
     }
    }
   }
   $16 = $1 + 16 | 0; //@line 11691
   $17 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 11692
   $18 = ($17 | 0) == ($2 | 0); //@line 11693
   $19 = $1 + 32 | 0; //@line 11694
   if (!$18) {
    $20 = $1 + 20 | 0; //@line 11696
    $21 = SAFE_HEAP_LOAD($20 | 0, 4, 0) | 0 | 0; //@line 11697
    $22 = ($21 | 0) == ($2 | 0); //@line 11698
    if (!$22) {
     SAFE_HEAP_STORE($19 | 0, $3 | 0, 4);
     $24 = $1 + 44 | 0; //@line 11701
     $25 = SAFE_HEAP_LOAD($24 | 0, 4, 0) | 0 | 0; //@line 11702
     $26 = ($25 | 0) == 4; //@line 11703
     if ($26) {
      break;
     }
     $27 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11707
     $28 = ($0 + 16 | 0) + ($27 << 3) | 0; //@line 11708
     $29 = $1 + 52 | 0; //@line 11709
     $30 = $1 + 53 | 0; //@line 11710
     $$081$off0 = 0; //@line 11711
     $$084 = $15; //@line 11711
     $$085$off0 = 0; //@line 11711
     L29 : while (1) {
      $31 = $$084 >>> 0 < $28 >>> 0; //@line 11713
      if (!$31) {
       $$283$off0 = $$081$off0; //@line 11715
       label = 18; //@line 11716
       break;
      }
      SAFE_HEAP_STORE($29 >> 0 | 0, 0 | 0, 1);
      SAFE_HEAP_STORE($30 >> 0 | 0, 0 | 0, 1);
      __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$084, $1, $2, $2, 1, $4); //@line 11721
      $32 = SAFE_HEAP_LOAD($13 >> 0 | 0, 1, 0) | 0 | 0; //@line 11722
      $33 = $32 << 24 >> 24 == 0; //@line 11723
      if (!$33) {
       $$283$off0 = $$081$off0; //@line 11725
       label = 18; //@line 11726
       break;
      }
      $34 = SAFE_HEAP_LOAD($30 >> 0 | 0, 1, 0) | 0 | 0; //@line 11729
      $35 = $34 << 24 >> 24 == 0; //@line 11730
      do {
       if ($35) {
        $$182$off0 = $$081$off0; //@line 11733
        $$186$off0 = $$085$off0; //@line 11733
       } else {
        $36 = SAFE_HEAP_LOAD($29 >> 0 | 0, 1, 0) | 0 | 0; //@line 11735
        $37 = $36 << 24 >> 24 == 0; //@line 11736
        if ($37) {
         $43 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11738
         $44 = $43 & 1; //@line 11739
         $45 = ($44 | 0) == 0; //@line 11740
         if ($45) {
          $$283$off0 = 1; //@line 11742
          label = 18; //@line 11743
          break L29;
         } else {
          $$182$off0 = 1; //@line 11746
          $$186$off0 = $$085$off0; //@line 11746
          break;
         }
        }
        $38 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11750
        $39 = ($38 | 0) == 1; //@line 11751
        if ($39) {
         label = 23; //@line 11753
         break L29;
        }
        $40 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11756
        $41 = $40 & 2; //@line 11757
        $42 = ($41 | 0) == 0; //@line 11758
        if ($42) {
         label = 23; //@line 11760
         break L29;
        } else {
         $$182$off0 = 1; //@line 11763
         $$186$off0 = 1; //@line 11763
        }
       }
      } while (0);
      $46 = $$084 + 8 | 0; //@line 11767
      $$081$off0 = $$182$off0; //@line 11768
      $$084 = $46; //@line 11768
      $$085$off0 = $$186$off0; //@line 11768
     }
     do {
      if ((label | 0) == 18) {
       if (!$$085$off0) {
        SAFE_HEAP_STORE($20 | 0, $2 | 0, 4);
        $47 = $1 + 40 | 0; //@line 11774
        $48 = SAFE_HEAP_LOAD($47 | 0, 4, 0) | 0 | 0; //@line 11775
        $49 = $48 + 1 | 0; //@line 11776
        SAFE_HEAP_STORE($47 | 0, $49 | 0, 4);
        $50 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11778
        $51 = ($50 | 0) == 1; //@line 11779
        if ($51) {
         $52 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11781
         $53 = ($52 | 0) == 2; //@line 11782
         if ($53) {
          SAFE_HEAP_STORE($13 >> 0 | 0, 1 | 0, 1);
          if ($$283$off0) {
           label = 23; //@line 11786
           break;
          } else {
           $54 = 4; //@line 11789
           break;
          }
         }
        }
       }
       if ($$283$off0) {
        label = 23; //@line 11796
       } else {
        $54 = 4; //@line 11798
       }
      }
     } while (0);
     if ((label | 0) == 23) {
      $54 = 3; //@line 11803
     }
     SAFE_HEAP_STORE($24 | 0, $54 | 0, 4);
     break;
    }
   }
   $23 = ($3 | 0) == 1; //@line 11809
   if ($23) {
    SAFE_HEAP_STORE($19 | 0, 1 | 0, 4);
   }
  }
 } while (0);
 return;
}
function __ZN42EmscriptenBindingInitializer_StringFactoryC2Ev($0) {
 $0 = $0 | 0; //@line 317
 var $$field = 0, $$field4 = 0, $$index1 = 0, $$index3 = 0, $$index7 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0; //@line 318
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0; //@line 319
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0; //@line 320
 var $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0; //@line 321
 var $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, label = 0, sp = 0; //@line 322
 sp = STACKTOP; //@line 323
 STACKTOP = STACKTOP + 160 | 0; //@line 324
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(160 | 0); //@line 324
 $4 = sp + 128 | 0; //@line 325
 $6 = sp + 150 | 0; //@line 326
 $7 = sp; //@line 327
 $23 = sp + 149 | 0; //@line 328
 $36 = sp + 148 | 0; //@line 329
 $37 = sp + 8 | 0; //@line 330
 $35 = $0; //@line 331
 $29 = $36; //@line 332
 $30 = 1482; //@line 333
 __ZN10emscripten8internal11NoBaseClass6verifyI13StringFactoryEEvv(); //@line 334
 $31 = 49; //@line 335
 $38 = __ZN10emscripten8internal11NoBaseClass11getUpcasterI13StringFactoryEEPFvvEv() | 0; //@line 336
 $32 = $38; //@line 337
 $39 = __ZN10emscripten8internal11NoBaseClass13getDowncasterI13StringFactoryEEPFvvEv() | 0; //@line 338
 $33 = $39; //@line 339
 $34 = 50; //@line 340
 $40 = __ZN10emscripten8internal6TypeIDI13StringFactoryE3getEv() | 0; //@line 341
 $41 = __ZN10emscripten8internal6TypeIDINS0_17AllowedRawPointerI13StringFactoryEEE3getEv() | 0; //@line 342
 $42 = __ZN10emscripten8internal6TypeIDINS0_17AllowedRawPointerIK13StringFactoryEEE3getEv() | 0; //@line 343
 $43 = __ZN10emscripten8internal11NoBaseClass3getEv() | 0; //@line 344
 $44 = $31; //@line 345
 $28 = $44; //@line 346
 $45 = __ZN10emscripten8internal19getGenericSignatureIJiiEEEPKcv() | 0; //@line 347
 $46 = $31; //@line 348
 $47 = $32; //@line 349
 $27 = $47; //@line 350
 $48 = __ZN10emscripten8internal19getGenericSignatureIJvEEEPKcv() | 0; //@line 351
 $49 = $32; //@line 352
 $50 = $33; //@line 353
 $26 = $50; //@line 354
 $51 = __ZN10emscripten8internal19getGenericSignatureIJvEEEPKcv() | 0; //@line 355
 $52 = $33; //@line 356
 $53 = $30; //@line 357
 $54 = $34; //@line 358
 $25 = $54; //@line 359
 $55 = __ZN10emscripten8internal19getGenericSignatureIJviEEEPKcv() | 0; //@line 360
 $56 = $34; //@line 361
 __embind_register_class($40 | 0, $41 | 0, $42 | 0, $43 | 0, $45 | 0, $46 | 0, $48 | 0, $49 | 0, $51 | 0, $52 | 0, $53 | 0, $55 | 0, $56 | 0); //@line 362
 $19 = 51; //@line 363
 $57 = $19; //@line 364
 $20 = $36; //@line 365
 $21 = 1482; //@line 366
 $22 = $57; //@line 367
 $58 = $20; //@line 368
 $59 = $21; //@line 369
 $13 = $58; //@line 370
 $14 = $59; //@line 371
 $15 = 52; //@line 372
 $16 = 53; //@line 373
 $17 = 54; //@line 374
 $18 = 55; //@line 375
 $60 = __ZN10emscripten8internal6TypeIDINSt3__210shared_ptrI13StringFactoryEEE3getEv() | 0; //@line 376
 $61 = __ZN10emscripten8internal6TypeIDI13StringFactoryE3getEv() | 0; //@line 377
 $62 = $14; //@line 378
 $63 = __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE18get_sharing_policyEv() | 0; //@line 379
 $64 = $15; //@line 380
 $12 = $64; //@line 381
 $65 = __ZN10emscripten8internal19getGenericSignatureIJiiEEEPKcv() | 0; //@line 382
 $66 = $15; //@line 383
 $67 = $16; //@line 384
 $11 = $67; //@line 385
 $68 = __ZN10emscripten8internal19getGenericSignatureIJiEEEPKcv() | 0; //@line 386
 $69 = $16; //@line 387
 $70 = $17; //@line 388
 $10 = $70; //@line 389
 $71 = __ZN10emscripten8internal19getGenericSignatureIJiiiEEEPKcv() | 0; //@line 390
 $72 = $17; //@line 391
 $73 = $18; //@line 392
 $9 = $73; //@line 393
 $74 = __ZN10emscripten8internal19getGenericSignatureIJviEEEPKcv() | 0; //@line 394
 $75 = $18; //@line 395
 __embind_register_smart_ptr($60 | 0, $61 | 0, $62 | 0, $63 | 0, $65 | 0, $66 | 0, $68 | 0, $69 | 0, $71 | 0, $72 | 0, $74 | 0, $75 | 0); //@line 396
 $24 = 56; //@line 397
 $76 = __ZN10emscripten8internal6TypeIDI13StringFactoryE3getEv() | 0; //@line 398
 $77 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__210shared_ptrI13StringFactoryEEEE8getCountEv($23) | 0; //@line 399
 $78 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__210shared_ptrI13StringFactoryEEEE8getTypesEv($23) | 0; //@line 400
 $79 = $24; //@line 401
 $8 = $79; //@line 402
 $80 = __ZN10emscripten8internal19getGenericSignatureIJiiEEEPKcv() | 0; //@line 403
 $81 = $24; //@line 404
 $82 = $22; //@line 405
 __embind_register_class_constructor($76 | 0, $77 | 0, $78 | 0, $80 | 0, $81 | 0, $82 | 0); //@line 406
 SAFE_HEAP_STORE($37 | 0, 57 | 0, 4);
 $$index1 = $37 + 4 | 0; //@line 408
 SAFE_HEAP_STORE($$index1 | 0, 0 | 0, 4);
 SAFE_HEAP_STORE($7 >> 0 | 0, SAFE_HEAP_LOAD($37 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 1 >> 0 | 0, SAFE_HEAP_LOAD($37 + 1 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 2 >> 0 | 0, SAFE_HEAP_LOAD($37 + 2 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 3 >> 0 | 0, SAFE_HEAP_LOAD($37 + 3 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 4 >> 0 | 0, SAFE_HEAP_LOAD($37 + 4 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 5 >> 0 | 0, SAFE_HEAP_LOAD($37 + 5 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 6 >> 0 | 0, SAFE_HEAP_LOAD($37 + 6 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 SAFE_HEAP_STORE($7 + 7 >> 0 | 0, SAFE_HEAP_LOAD($37 + 7 >> 0 | 0, 1, 0) | 0 | 0 | 0, 1);
 $$field = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 411
 $$index3 = $7 + 4 | 0; //@line 412
 $$field4 = SAFE_HEAP_LOAD($$index3 | 0, 4, 0) | 0 | 0; //@line 413
 $2 = $58; //@line 414
 $3 = 1496; //@line 415
 SAFE_HEAP_STORE($4 | 0, $$field | 0, 4);
 $$index7 = $4 + 4 | 0; //@line 417
 SAFE_HEAP_STORE($$index7 | 0, $$field4 | 0, 4);
 $5 = 58; //@line 419
 $83 = __ZN10emscripten8internal6TypeIDI13StringFactoryE3getEv() | 0; //@line 420
 $84 = $3; //@line 421
 $85 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__212basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEE8getCountEv($6) | 0; //@line 422
 $86 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__212basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEE8getTypesEv($6) | 0; //@line 423
 $87 = $5; //@line 424
 $1 = $87; //@line 425
 $88 = __ZN10emscripten8internal19getGenericSignatureIJiiiEEEPKcv() | 0; //@line 426
 $89 = $5; //@line 427
 $90 = __ZN10emscripten8internal10getContextIM13StringFactoryFNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEvEEEPT_RKSC_($4) | 0; //@line 428
 __embind_register_class_function($83 | 0, $84 | 0, $85 | 0, $86 | 0, $88 | 0, $89 | 0, $90 | 0, 0); //@line 429
 STACKTOP = sp; //@line 430
 return;
}
function __ZN13StringFactory9getStringEv($0, $1) {
 $0 = $0 | 0; //@line 129
 $1 = $1 | 0; //@line 130
 var $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0, $117 = 0; //@line 131
 var $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0; //@line 132
 var $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0; //@line 133
 var $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0; //@line 134
 var $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0; //@line 135
 var $73 = 0, $74 = 0, $75 = 0, $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0; //@line 136
 var $91 = 0, $92 = 0, $93 = 0, $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0; //@line 137
 sp = STACKTOP; //@line 138
 STACKTOP = STACKTOP + 208 | 0; //@line 139
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(208 | 0); //@line 139
 $45 = sp + 20 | 0; //@line 140
 $46 = sp + 8 | 0; //@line 141
 $44 = $1; //@line 142
 $49 = $44; //@line 143
 $42 = $45; //@line 144
 $43 = 1452; //@line 145
 $50 = $42; //@line 146
 $41 = $50; //@line 147
 $51 = $41; //@line 148
 $40 = $51; //@line 149
 $52 = $40; //@line 150
 $39 = $52; //@line 151
 SAFE_HEAP_STORE($52 | 0, 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($52 + 4 | 0, 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($52 + 8 | 0, 0 | 0 | 0, 4);
 $53 = $43; //@line 153
 $54 = $43; //@line 154
 $55 = __ZNSt3__211char_traitsIcE6lengthEPKc($54) | 0; //@line 155
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($50, $53, $55); //@line 156
 $56 = SAFE_HEAP_LOAD($49 | 0, 4, 0) | 0 | 0; //@line 157
 $57 = $56 + 1 | 0; //@line 158
 SAFE_HEAP_STORE($49 | 0, $57 | 0, 4);
 __THREW__ = 0; //@line 160
 invoke_vii(47, $46 | 0, $56 | 0); //@line 161
 $58 = __THREW__; //@line 162
 __THREW__ = 0; //@line 162
 $59 = $58 & 1; //@line 163
 if ($59) {
  $125 = ___cxa_find_matching_catch_2() | 0; //@line 165
  $126 = tempRet0; //@line 166
  $47 = $125; //@line 167
  $48 = $126; //@line 168
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($45); //@line 169
  $129 = $47; //@line 170
  $130 = $48; //@line 171
  ___resumeException($129 | 0); //@line 172
 }
 $37 = $45; //@line 175
 $38 = $46; //@line 176
 $60 = $37; //@line 177
 $61 = $38; //@line 178
 $35 = $60; //@line 179
 $36 = $61; //@line 180
 $62 = $35; //@line 181
 $63 = $36; //@line 182
 $34 = $63; //@line 183
 $64 = $34; //@line 184
 $33 = $64; //@line 185
 $65 = $33; //@line 186
 $32 = $65; //@line 187
 $66 = $32; //@line 188
 $31 = $66; //@line 189
 $67 = $31; //@line 190
 $30 = $67; //@line 191
 $68 = $30; //@line 192
 $69 = $68 + 11 | 0; //@line 193
 $70 = SAFE_HEAP_LOAD($69 >> 0 | 0, 1, 0) | 0 | 0; //@line 194
 $71 = $70 & 255; //@line 195
 $72 = $71 & 128; //@line 196
 $73 = ($72 | 0) != 0; //@line 197
 if ($73) {
  $24 = $65; //@line 199
  $74 = $24; //@line 200
  $23 = $74; //@line 201
  $75 = $23; //@line 202
  $22 = $75; //@line 203
  $76 = $22; //@line 204
  $77 = SAFE_HEAP_LOAD($76 | 0, 4, 0) | 0 | 0; //@line 205
  $83 = $77; //@line 206
 } else {
  $29 = $65; //@line 208
  $78 = $29; //@line 209
  $28 = $78; //@line 210
  $79 = $28; //@line 211
  $27 = $79; //@line 212
  $80 = $27; //@line 213
  $26 = $80; //@line 214
  $81 = $26; //@line 215
  $25 = $81; //@line 216
  $82 = $25; //@line 217
  $83 = $82; //@line 218
 }
 $21 = $83; //@line 220
 $84 = $21; //@line 221
 $85 = $36; //@line 222
 $20 = $85; //@line 223
 $86 = $20; //@line 224
 $19 = $86; //@line 225
 $87 = $19; //@line 226
 $18 = $87; //@line 227
 $88 = $18; //@line 228
 $17 = $88; //@line 229
 $89 = $17; //@line 230
 $90 = $89 + 11 | 0; //@line 231
 $91 = SAFE_HEAP_LOAD($90 >> 0 | 0, 1, 0) | 0 | 0; //@line 232
 $92 = $91 & 255; //@line 233
 $93 = $92 & 128; //@line 234
 $94 = ($93 | 0) != 0; //@line 235
 if ($94) {
  $13 = $86; //@line 237
  $95 = $13; //@line 238
  $12 = $95; //@line 239
  $96 = $12; //@line 240
  $11 = $96; //@line 241
  $97 = $11; //@line 242
  $98 = $97 + 4 | 0; //@line 243
  $99 = SAFE_HEAP_LOAD($98 | 0, 4, 0) | 0 | 0; //@line 244
  $106 = $99; //@line 245
 } else {
  $16 = $86; //@line 247
  $100 = $16; //@line 248
  $15 = $100; //@line 249
  $101 = $15; //@line 250
  $14 = $101; //@line 251
  $102 = $14; //@line 252
  $103 = $102 + 11 | 0; //@line 253
  $104 = SAFE_HEAP_LOAD($103 >> 0 | 0, 1, 0) | 0 | 0; //@line 254
  $105 = $104 & 255; //@line 255
  $106 = $105; //@line 256
 }
 __THREW__ = 0; //@line 258
 $107 = invoke_iiii(48, $62 | 0, $84 | 0, $106 | 0) | 0; //@line 259
 $108 = __THREW__; //@line 260
 __THREW__ = 0; //@line 260
 $109 = $108 & 1; //@line 261
 if ($109) {
  $127 = ___cxa_find_matching_catch_2() | 0; //@line 263
  $128 = tempRet0; //@line 264
  $47 = $127; //@line 265
  $48 = $128; //@line 266
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($46); //@line 267
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($45); //@line 268
  $129 = $47; //@line 269
  $130 = $48; //@line 270
  ___resumeException($129 | 0); //@line 271
 }
 $10 = $107; //@line 274
 $110 = $10; //@line 275
 $8 = $0; //@line 276
 $9 = $110; //@line 277
 $111 = $8; //@line 278
 $112 = $9; //@line 279
 $7 = $112; //@line 280
 $113 = $7; //@line 281
 SAFE_HEAP_STORE($111 | 0, SAFE_HEAP_LOAD($113 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($111 + 4 | 0, SAFE_HEAP_LOAD($113 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($111 + 8 | 0, SAFE_HEAP_LOAD($113 + 8 | 0, 4, 0) | 0 | 0 | 0, 4);
 $114 = $9; //@line 283
 $4 = $114; //@line 284
 $115 = $4; //@line 285
 $3 = $115; //@line 286
 $116 = $3; //@line 287
 $2 = $116; //@line 288
 $117 = $2; //@line 289
 $5 = $117; //@line 290
 $6 = 0; //@line 291
 while (1) {
  $118 = $6; //@line 293
  $119 = $118 >>> 0 < 3; //@line 294
  if (!$119) {
   break;
  }
  $120 = $5; //@line 298
  $121 = $6; //@line 299
  $122 = $120 + ($121 << 2) | 0; //@line 300
  SAFE_HEAP_STORE($122 | 0, 0 | 0, 4);
  $123 = $6; //@line 302
  $124 = $123 + 1 | 0; //@line 303
  $6 = $124; //@line 304
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($46); //@line 306
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($45); //@line 307
 STACKTOP = sp; //@line 308
 return;
}
function __ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE10toWireTypeERKS8_($0) {
 $0 = $0 | 0; //@line 2091
 var $1 = 0, $10 = 0, $100 = 0, $101 = 0, $102 = 0, $103 = 0, $104 = 0, $105 = 0, $106 = 0, $107 = 0, $108 = 0, $109 = 0, $11 = 0, $110 = 0, $111 = 0, $112 = 0, $113 = 0, $114 = 0, $115 = 0, $116 = 0; //@line 2092
 var $117 = 0, $118 = 0, $119 = 0, $12 = 0, $120 = 0, $121 = 0, $122 = 0, $123 = 0, $124 = 0, $125 = 0, $126 = 0, $127 = 0, $128 = 0, $129 = 0, $13 = 0, $130 = 0, $131 = 0, $132 = 0, $133 = 0, $134 = 0; //@line 2093
 var $135 = 0, $136 = 0, $137 = 0, $138 = 0, $139 = 0, $14 = 0, $140 = 0, $141 = 0, $142 = 0, $143 = 0, $144 = 0, $145 = 0, $146 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0; //@line 2094
 var $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0; //@line 2095
 var $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0; //@line 2096
 var $58 = 0, $59 = 0, $6 = 0, $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $65 = 0, $66 = 0, $67 = 0, $68 = 0, $69 = 0, $7 = 0, $70 = 0, $71 = 0, $72 = 0, $73 = 0, $74 = 0, $75 = 0; //@line 2097
 var $76 = 0, $77 = 0, $78 = 0, $79 = 0, $8 = 0, $80 = 0, $81 = 0, $82 = 0, $83 = 0, $84 = 0, $85 = 0, $86 = 0, $87 = 0, $88 = 0, $89 = 0, $9 = 0, $90 = 0, $91 = 0, $92 = 0, $93 = 0; //@line 2098
 var $94 = 0, $95 = 0, $96 = 0, $97 = 0, $98 = 0, $99 = 0, label = 0, sp = 0; //@line 2099
 sp = STACKTOP; //@line 2100
 STACKTOP = STACKTOP + 208 | 0; //@line 2101
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(208 | 0); //@line 2101
 $48 = $0; //@line 2102
 $50 = $48; //@line 2103
 $47 = $50; //@line 2104
 $51 = $47; //@line 2105
 $46 = $51; //@line 2106
 $52 = $46; //@line 2107
 $45 = $52; //@line 2108
 $53 = $45; //@line 2109
 $44 = $53; //@line 2110
 $54 = $44; //@line 2111
 $43 = $54; //@line 2112
 $55 = $43; //@line 2113
 $56 = $55 + 11 | 0; //@line 2114
 $57 = SAFE_HEAP_LOAD($56 >> 0 | 0, 1, 0) | 0 | 0; //@line 2115
 $58 = $57 & 255; //@line 2116
 $59 = $58 & 128; //@line 2117
 $60 = ($59 | 0) != 0; //@line 2118
 if ($60) {
  $39 = $52; //@line 2120
  $61 = $39; //@line 2121
  $38 = $61; //@line 2122
  $62 = $38; //@line 2123
  $37 = $62; //@line 2124
  $63 = $37; //@line 2125
  $64 = $63 + 4 | 0; //@line 2126
  $65 = SAFE_HEAP_LOAD($64 | 0, 4, 0) | 0 | 0; //@line 2127
  $73 = $65; //@line 2128
 } else {
  $42 = $52; //@line 2130
  $66 = $42; //@line 2131
  $41 = $66; //@line 2132
  $67 = $41; //@line 2133
  $40 = $67; //@line 2134
  $68 = $40; //@line 2135
  $69 = $68 + 11 | 0; //@line 2136
  $70 = SAFE_HEAP_LOAD($69 >> 0 | 0, 1, 0) | 0 | 0; //@line 2137
  $71 = $70 & 255; //@line 2138
  $73 = $71; //@line 2139
 }
 $72 = 4 + $73 | 0; //@line 2141
 $74 = _malloc($72) | 0; //@line 2142
 $49 = $74; //@line 2143
 $75 = $48; //@line 2144
 $11 = $75; //@line 2145
 $76 = $11; //@line 2146
 $10 = $76; //@line 2147
 $77 = $10; //@line 2148
 $9 = $77; //@line 2149
 $78 = $9; //@line 2150
 $8 = $78; //@line 2151
 $79 = $8; //@line 2152
 $7 = $79; //@line 2153
 $80 = $7; //@line 2154
 $81 = $80 + 11 | 0; //@line 2155
 $82 = SAFE_HEAP_LOAD($81 >> 0 | 0, 1, 0) | 0 | 0; //@line 2156
 $83 = $82 & 255; //@line 2157
 $84 = $83 & 128; //@line 2158
 $85 = ($84 | 0) != 0; //@line 2159
 if ($85) {
  $3 = $77; //@line 2161
  $86 = $3; //@line 2162
  $2 = $86; //@line 2163
  $87 = $2; //@line 2164
  $1 = $87; //@line 2165
  $88 = $1; //@line 2166
  $89 = $88 + 4 | 0; //@line 2167
  $90 = SAFE_HEAP_LOAD($89 | 0, 4, 0) | 0 | 0; //@line 2168
  $98 = $90; //@line 2169
 } else {
  $6 = $77; //@line 2171
  $91 = $6; //@line 2172
  $5 = $91; //@line 2173
  $92 = $5; //@line 2174
  $4 = $92; //@line 2175
  $93 = $4; //@line 2176
  $94 = $93 + 11 | 0; //@line 2177
  $95 = SAFE_HEAP_LOAD($94 >> 0 | 0, 1, 0) | 0 | 0; //@line 2178
  $96 = $95 & 255; //@line 2179
  $98 = $96; //@line 2180
 }
 $97 = $49; //@line 2182
 SAFE_HEAP_STORE($97 | 0, $98 | 0, 4);
 $99 = $49; //@line 2184
 $100 = $99 + 4 | 0; //@line 2185
 $101 = $48; //@line 2186
 $25 = $101; //@line 2187
 $102 = $25; //@line 2188
 $24 = $102; //@line 2189
 $103 = $24; //@line 2190
 $23 = $103; //@line 2191
 $104 = $23; //@line 2192
 $22 = $104; //@line 2193
 $105 = $22; //@line 2194
 $21 = $105; //@line 2195
 $106 = $21; //@line 2196
 $107 = $106 + 11 | 0; //@line 2197
 $108 = SAFE_HEAP_LOAD($107 >> 0 | 0, 1, 0) | 0 | 0; //@line 2198
 $109 = $108 & 255; //@line 2199
 $110 = $109 & 128; //@line 2200
 $111 = ($110 | 0) != 0; //@line 2201
 if ($111) {
  $15 = $103; //@line 2203
  $112 = $15; //@line 2204
  $14 = $112; //@line 2205
  $113 = $14; //@line 2206
  $13 = $113; //@line 2207
  $114 = $13; //@line 2208
  $115 = SAFE_HEAP_LOAD($114 | 0, 4, 0) | 0 | 0; //@line 2209
  $121 = $115; //@line 2210
 } else {
  $20 = $103; //@line 2212
  $116 = $20; //@line 2213
  $19 = $116; //@line 2214
  $117 = $19; //@line 2215
  $18 = $117; //@line 2216
  $118 = $18; //@line 2217
  $17 = $118; //@line 2218
  $119 = $17; //@line 2219
  $16 = $119; //@line 2220
  $120 = $16; //@line 2221
  $121 = $120; //@line 2222
 }
 $12 = $121; //@line 2224
 $122 = $12; //@line 2225
 $123 = $48; //@line 2226
 $36 = $123; //@line 2227
 $124 = $36; //@line 2228
 $35 = $124; //@line 2229
 $125 = $35; //@line 2230
 $34 = $125; //@line 2231
 $126 = $34; //@line 2232
 $33 = $126; //@line 2233
 $127 = $33; //@line 2234
 $32 = $127; //@line 2235
 $128 = $32; //@line 2236
 $129 = $128 + 11 | 0; //@line 2237
 $130 = SAFE_HEAP_LOAD($129 >> 0 | 0, 1, 0) | 0 | 0; //@line 2238
 $131 = $130 & 255; //@line 2239
 $132 = $131 & 128; //@line 2240
 $133 = ($132 | 0) != 0; //@line 2241
 if ($133) {
  $28 = $125; //@line 2243
  $134 = $28; //@line 2244
  $27 = $134; //@line 2245
  $135 = $27; //@line 2246
  $26 = $135; //@line 2247
  $136 = $26; //@line 2248
  $137 = $136 + 4 | 0; //@line 2249
  $138 = SAFE_HEAP_LOAD($137 | 0, 4, 0) | 0 | 0; //@line 2250
  $145 = $138; //@line 2251
  _memcpy($100 | 0, $122 | 0, $145 | 0) | 0; //@line 2252
  $146 = $49; //@line 2253
  STACKTOP = sp; //@line 2254
  return $146 | 0; //@line 2254
 } else {
  $31 = $125; //@line 2256
  $139 = $31; //@line 2257
  $30 = $139; //@line 2258
  $140 = $30; //@line 2259
  $29 = $140; //@line 2260
  $141 = $29; //@line 2261
  $142 = $141 + 11 | 0; //@line 2262
  $143 = SAFE_HEAP_LOAD($142 >> 0 | 0, 1, 0) | 0 | 0; //@line 2263
  $144 = $143 & 255; //@line 2264
  $145 = $144; //@line 2265
  _memcpy($100 | 0, $122 | 0, $145 | 0) | 0; //@line 2266
  $146 = $49; //@line 2267
  STACKTOP = sp; //@line 2268
  return $146 | 0; //@line 2268
 }
 return 0 | 0; //@line 2270
}
function ___stdio_write($0, $1, $2) {
 $0 = $0 | 0; //@line 3041
 $1 = $1 | 0; //@line 3042
 $2 = $2 | 0; //@line 3043
 var $$0 = 0, $$04756 = 0, $$04855 = 0, $$04954 = 0, $$051 = 0, $$1 = 0, $$150 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0; //@line 3044
 var $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0; //@line 3045
 var $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer3 = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr6 = 0; //@line 3046
 var $vararg_ptr7 = 0, label = 0, sp = 0; //@line 3047
 sp = STACKTOP; //@line 3048
 STACKTOP = STACKTOP + 48 | 0; //@line 3049
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48 | 0); //@line 3049
 $vararg_buffer3 = sp + 16 | 0; //@line 3050
 $vararg_buffer = sp; //@line 3051
 $3 = sp + 32 | 0; //@line 3052
 $4 = $0 + 28 | 0; //@line 3053
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 3054
 SAFE_HEAP_STORE($3 | 0, $5 | 0, 4);
 $6 = $3 + 4 | 0; //@line 3056
 $7 = $0 + 20 | 0; //@line 3057
 $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 3058
 $9 = $8 - $5 | 0; //@line 3059
 SAFE_HEAP_STORE($6 | 0, $9 | 0, 4);
 $10 = $3 + 8 | 0; //@line 3061
 SAFE_HEAP_STORE($10 | 0, $1 | 0, 4);
 $11 = $3 + 12 | 0; //@line 3063
 SAFE_HEAP_STORE($11 | 0, $2 | 0, 4);
 $12 = $9 + $2 | 0; //@line 3065
 $13 = $0 + 60 | 0; //@line 3066
 $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 3067
 $15 = $3; //@line 3068
 SAFE_HEAP_STORE($vararg_buffer | 0, $14 | 0, 4);
 $vararg_ptr1 = $vararg_buffer + 4 | 0; //@line 3070
 SAFE_HEAP_STORE($vararg_ptr1 | 0, $15 | 0, 4);
 $vararg_ptr2 = $vararg_buffer + 8 | 0; //@line 3072
 SAFE_HEAP_STORE($vararg_ptr2 | 0, 2 | 0, 4);
 $16 = ___syscall146(146, $vararg_buffer | 0) | 0; //@line 3074
 $17 = ___syscall_ret($16) | 0; //@line 3075
 $18 = ($12 | 0) == ($17 | 0); //@line 3076
 L1 : do {
  if ($18) {
   label = 3; //@line 3079
  } else {
   $$04756 = 2; //@line 3081
   $$04855 = $12; //@line 3081
   $$04954 = $3; //@line 3081
   $26 = $17; //@line 3081
   while (1) {
    $25 = ($26 | 0) < 0; //@line 3083
    if ($25) {
     break;
    }
    $34 = $$04855 - $26 | 0; //@line 3087
    $35 = $$04954 + 4 | 0; //@line 3088
    $36 = SAFE_HEAP_LOAD($35 | 0, 4, 0) | 0 | 0; //@line 3089
    $37 = $26 >>> 0 > $36 >>> 0; //@line 3090
    $38 = $$04954 + 8 | 0; //@line 3091
    $$150 = $37 ? $38 : $$04954; //@line 3092
    $39 = $37 << 31 >> 31; //@line 3093
    $$1 = $39 + $$04756 | 0; //@line 3094
    $40 = $37 ? $36 : 0; //@line 3095
    $$0 = $26 - $40 | 0; //@line 3096
    $41 = SAFE_HEAP_LOAD($$150 | 0, 4, 0) | 0 | 0; //@line 3097
    $42 = $41 + $$0 | 0; //@line 3098
    SAFE_HEAP_STORE($$150 | 0, $42 | 0, 4);
    $43 = $$150 + 4 | 0; //@line 3100
    $44 = SAFE_HEAP_LOAD($43 | 0, 4, 0) | 0 | 0; //@line 3101
    $45 = $44 - $$0 | 0; //@line 3102
    SAFE_HEAP_STORE($43 | 0, $45 | 0, 4);
    $46 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 3104
    $47 = $$150; //@line 3105
    SAFE_HEAP_STORE($vararg_buffer3 | 0, $46 | 0, 4);
    $vararg_ptr6 = $vararg_buffer3 + 4 | 0; //@line 3107
    SAFE_HEAP_STORE($vararg_ptr6 | 0, $47 | 0, 4);
    $vararg_ptr7 = $vararg_buffer3 + 8 | 0; //@line 3109
    SAFE_HEAP_STORE($vararg_ptr7 | 0, $$1 | 0, 4);
    $48 = ___syscall146(146, $vararg_buffer3 | 0) | 0; //@line 3111
    $49 = ___syscall_ret($48) | 0; //@line 3112
    $50 = ($34 | 0) == ($49 | 0); //@line 3113
    if ($50) {
     label = 3; //@line 3115
     break L1;
    } else {
     $$04756 = $$1; //@line 3118
     $$04855 = $34; //@line 3118
     $$04954 = $$150; //@line 3118
     $26 = $49; //@line 3118
    }
   }
   $27 = $0 + 16 | 0; //@line 3121
   SAFE_HEAP_STORE($27 | 0, 0 | 0, 4);
   SAFE_HEAP_STORE($4 | 0, 0 | 0, 4);
   SAFE_HEAP_STORE($7 | 0, 0 | 0, 4);
   $28 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 3125
   $29 = $28 | 32; //@line 3126
   SAFE_HEAP_STORE($0 | 0, $29 | 0, 4);
   $30 = ($$04756 | 0) == 2; //@line 3128
   if ($30) {
    $$051 = 0; //@line 3130
   } else {
    $31 = $$04954 + 4 | 0; //@line 3132
    $32 = SAFE_HEAP_LOAD($31 | 0, 4, 0) | 0 | 0; //@line 3133
    $33 = $2 - $32 | 0; //@line 3134
    $$051 = $33; //@line 3135
   }
  }
 } while (0);
 if ((label | 0) == 3) {
  $19 = $0 + 44 | 0; //@line 3140
  $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 3141
  $21 = $0 + 48 | 0; //@line 3142
  $22 = SAFE_HEAP_LOAD($21 | 0, 4, 0) | 0 | 0; //@line 3143
  $23 = $20 + $22 | 0; //@line 3144
  $24 = $0 + 16 | 0; //@line 3145
  SAFE_HEAP_STORE($24 | 0, $23 | 0, 4);
  SAFE_HEAP_STORE($4 | 0, $20 | 0, 4);
  SAFE_HEAP_STORE($7 | 0, $20 | 0, 4);
  $$051 = $2; //@line 3149
 }
 STACKTOP = sp; //@line 3151
 return $$051 | 0; //@line 3151
}
function _memchr($0, $1, $2) {
 $0 = $0 | 0; //@line 4750
 $1 = $1 | 0; //@line 4751
 $2 = $2 | 0; //@line 4752
 var $$0$lcssa = 0, $$035$lcssa = 0, $$035$lcssa65 = 0, $$03555 = 0, $$036$lcssa = 0, $$036$lcssa64 = 0, $$03654 = 0, $$046 = 0, $$137$lcssa = 0, $$13745 = 0, $$140 = 0, $$2 = 0, $$23839 = 0, $$3 = 0, $$lcssa = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0; //@line 4753
 var $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0; //@line 4754
 var $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond53 = 0, label = 0, sp = 0; //@line 4755
 sp = STACKTOP; //@line 4756
 $3 = $1 & 255; //@line 4757
 $4 = $0; //@line 4758
 $5 = $4 & 3; //@line 4759
 $6 = ($5 | 0) != 0; //@line 4760
 $7 = ($2 | 0) != 0; //@line 4761
 $or$cond53 = $7 & $6; //@line 4762
 L1 : do {
  if ($or$cond53) {
   $8 = $1 & 255; //@line 4765
   $$03555 = $0; //@line 4766
   $$03654 = $2; //@line 4766
   while (1) {
    $9 = SAFE_HEAP_LOAD($$03555 >> 0 | 0, 1, 0) | 0 | 0; //@line 4768
    $10 = $9 << 24 >> 24 == $8 << 24 >> 24; //@line 4769
    if ($10) {
     $$035$lcssa65 = $$03555; //@line 4771
     $$036$lcssa64 = $$03654; //@line 4771
     label = 6; //@line 4772
     break L1;
    }
    $11 = $$03555 + 1 | 0; //@line 4775
    $12 = $$03654 + -1 | 0; //@line 4776
    $13 = $11; //@line 4777
    $14 = $13 & 3; //@line 4778
    $15 = ($14 | 0) != 0; //@line 4779
    $16 = ($12 | 0) != 0; //@line 4780
    $or$cond = $16 & $15; //@line 4781
    if ($or$cond) {
     $$03555 = $11; //@line 4783
     $$03654 = $12; //@line 4783
    } else {
     $$035$lcssa = $11; //@line 4785
     $$036$lcssa = $12; //@line 4785
     $$lcssa = $16; //@line 4785
     label = 5; //@line 4786
     break;
    }
   }
  } else {
   $$035$lcssa = $0; //@line 4791
   $$036$lcssa = $2; //@line 4791
   $$lcssa = $7; //@line 4791
   label = 5; //@line 4792
  }
 } while (0);
 if ((label | 0) == 5) {
  if ($$lcssa) {
   $$035$lcssa65 = $$035$lcssa; //@line 4797
   $$036$lcssa64 = $$036$lcssa; //@line 4797
   label = 6; //@line 4798
  } else {
   $$2 = $$035$lcssa; //@line 4800
   $$3 = 0; //@line 4800
  }
 }
 L8 : do {
  if ((label | 0) == 6) {
   $17 = SAFE_HEAP_LOAD($$035$lcssa65 >> 0 | 0, 1, 0) | 0 | 0; //@line 4805
   $18 = $1 & 255; //@line 4806
   $19 = $17 << 24 >> 24 == $18 << 24 >> 24; //@line 4807
   if ($19) {
    $$2 = $$035$lcssa65; //@line 4809
    $$3 = $$036$lcssa64; //@line 4809
   } else {
    $20 = Math_imul($3, 16843009) | 0; //@line 4811
    $21 = $$036$lcssa64 >>> 0 > 3; //@line 4812
    L11 : do {
     if ($21) {
      $$046 = $$035$lcssa65; //@line 4815
      $$13745 = $$036$lcssa64; //@line 4815
      while (1) {
       $22 = SAFE_HEAP_LOAD($$046 | 0, 4, 0) | 0 | 0; //@line 4817
       $23 = $22 ^ $20; //@line 4818
       $24 = $23 + -16843009 | 0; //@line 4819
       $25 = $23 & -2139062144; //@line 4820
       $26 = $25 ^ -2139062144; //@line 4821
       $27 = $26 & $24; //@line 4822
       $28 = ($27 | 0) == 0; //@line 4823
       if (!$28) {
        break;
       }
       $29 = $$046 + 4 | 0; //@line 4827
       $30 = $$13745 + -4 | 0; //@line 4828
       $31 = $30 >>> 0 > 3; //@line 4829
       if ($31) {
        $$046 = $29; //@line 4831
        $$13745 = $30; //@line 4831
       } else {
        $$0$lcssa = $29; //@line 4833
        $$137$lcssa = $30; //@line 4833
        label = 11; //@line 4834
        break L11;
       }
      }
      $$140 = $$046; //@line 4838
      $$23839 = $$13745; //@line 4838
     } else {
      $$0$lcssa = $$035$lcssa65; //@line 4840
      $$137$lcssa = $$036$lcssa64; //@line 4840
      label = 11; //@line 4841
     }
    } while (0);
    if ((label | 0) == 11) {
     $32 = ($$137$lcssa | 0) == 0; //@line 4845
     if ($32) {
      $$2 = $$0$lcssa; //@line 4847
      $$3 = 0; //@line 4847
      break;
     } else {
      $$140 = $$0$lcssa; //@line 4850
      $$23839 = $$137$lcssa; //@line 4850
     }
    }
    while (1) {
     $33 = SAFE_HEAP_LOAD($$140 >> 0 | 0, 1, 0) | 0 | 0; //@line 4854
     $34 = $33 << 24 >> 24 == $18 << 24 >> 24; //@line 4855
     if ($34) {
      $$2 = $$140; //@line 4857
      $$3 = $$23839; //@line 4857
      break L8;
     }
     $35 = $$140 + 1 | 0; //@line 4860
     $36 = $$23839 + -1 | 0; //@line 4861
     $37 = ($36 | 0) == 0; //@line 4862
     if ($37) {
      $$2 = $35; //@line 4864
      $$3 = 0; //@line 4864
      break;
     } else {
      $$140 = $35; //@line 4867
      $$23839 = $36; //@line 4867
     }
    }
   }
  }
 } while (0);
 $38 = ($$3 | 0) != 0; //@line 4873
 $39 = $38 ? $$2 : 0; //@line 4874
 return $39 | 0; //@line 4875
}
function __ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv($0, $1, $2) {
 $0 = $0 | 0; //@line 11361
 $1 = $1 | 0; //@line 11362
 $2 = $2 | 0; //@line 11363
 var $$0 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0; //@line 11364
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $5 = 0; //@line 11365
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, stop = 0; //@line 11366
 sp = STACKTOP; //@line 11367
 STACKTOP = STACKTOP + 64 | 0; //@line 11368
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 11368
 $3 = sp; //@line 11369
 $4 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 11370
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 11371
 SAFE_HEAP_STORE($2 | 0, $5 | 0, 4);
 $6 = __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($0, $1, 0) | 0; //@line 11373
 if ($6) {
  $$4 = 1; //@line 11375
 } else {
  $7 = ($1 | 0) == (0 | 0); //@line 11377
  if ($7) {
   $$4 = 0; //@line 11379
  } else {
   $8 = ___dynamic_cast($1, 336, 440, 0) | 0; //@line 11381
   $9 = ($8 | 0) == (0 | 0); //@line 11382
   if ($9) {
    $$4 = 0; //@line 11384
   } else {
    $10 = $8 + 8 | 0; //@line 11386
    $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11387
    $12 = $0 + 8 | 0; //@line 11388
    $13 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11389
    $14 = $13 ^ -1; //@line 11390
    $15 = $11 & $14; //@line 11391
    $16 = ($15 | 0) == 0; //@line 11392
    if ($16) {
     $17 = $0 + 12 | 0; //@line 11394
     $18 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 11395
     $19 = $8 + 12 | 0; //@line 11396
     $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 11397
     $21 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($18, $20, 0) | 0; //@line 11398
     if ($21) {
      $$4 = 1; //@line 11400
     } else {
      $22 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 11402
      $23 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($22, 472, 0) | 0; //@line 11403
      if ($23) {
       $$4 = 1; //@line 11405
      } else {
       $24 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 11407
       $25 = ($24 | 0) == (0 | 0); //@line 11408
       if ($25) {
        $$4 = 0; //@line 11410
       } else {
        $26 = ___dynamic_cast($24, 336, 320, 0) | 0; //@line 11412
        $27 = ($26 | 0) == (0 | 0); //@line 11413
        if ($27) {
         $$4 = 0; //@line 11415
        } else {
         $28 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 11417
         $29 = ($28 | 0) == (0 | 0); //@line 11418
         if ($29) {
          $$4 = 0; //@line 11420
         } else {
          $30 = ___dynamic_cast($28, 336, 320, 0) | 0; //@line 11422
          $31 = ($30 | 0) == (0 | 0); //@line 11423
          if ($31) {
           $$4 = 0; //@line 11425
          } else {
           $32 = $3 + 4 | 0; //@line 11427
           dest = $32; //@line 11428
           stop = dest + 52 | 0; //@line 11428
           do {
            SAFE_HEAP_STORE(dest | 0, 0 | 0 | 0, 4);
            dest = dest + 4 | 0; //@line 11428
           } while ((dest | 0) < (stop | 0));
           SAFE_HEAP_STORE($3 | 0, $30 | 0, 4);
           $33 = $3 + 8 | 0; //@line 11430
           SAFE_HEAP_STORE($33 | 0, $26 | 0, 4);
           $34 = $3 + 12 | 0; //@line 11432
           SAFE_HEAP_STORE($34 | 0, -1 | 0, 4);
           $35 = $3 + 48 | 0; //@line 11434
           SAFE_HEAP_STORE($35 | 0, 1 | 0, 4);
           $36 = SAFE_HEAP_LOAD($30 | 0, 4, 0) | 0 | 0; //@line 11436
           $37 = $36 + 28 | 0; //@line 11437
           $38 = SAFE_HEAP_LOAD($37 | 0, 4, 0) | 0 | 0; //@line 11438
           $39 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 11439
           FUNCTION_TABLE_viiii[(SAFE_FT_MASK($38 | 0, 63 | 0) | 0) & 63]($30, $3, $39, 1); //@line 11440
           $40 = $3 + 24 | 0; //@line 11441
           $41 = SAFE_HEAP_LOAD($40 | 0, 4, 0) | 0 | 0; //@line 11442
           $42 = ($41 | 0) == 1; //@line 11443
           if ($42) {
            $43 = $3 + 16 | 0; //@line 11445
            $44 = SAFE_HEAP_LOAD($43 | 0, 4, 0) | 0 | 0; //@line 11446
            SAFE_HEAP_STORE($2 | 0, $44 | 0, 4);
            $$0 = 1; //@line 11448
           } else {
            $$0 = 0; //@line 11450
           }
           $$4 = $$0; //@line 11452
          }
         }
        }
       }
      }
     }
    } else {
     $$4 = 0; //@line 11460
    }
   }
  }
 }
 STACKTOP = sp; //@line 11465
 return $$4 | 0; //@line 11465
}
function ___mo_lookup($0, $1, $2) {
 $0 = $0 | 0; //@line 6132
 $1 = $1 | 0; //@line 6133
 $2 = $2 | 0; //@line 6134
 var $$ = 0, $$090 = 0, $$094 = 0, $$191 = 0, $$195 = 0, $$4 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0; //@line 6135
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0; //@line 6136
 var $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0, $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $57 = 0, $58 = 0, $59 = 0, $6 = 0; //@line 6137
 var $60 = 0, $61 = 0, $62 = 0, $63 = 0, $64 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond102 = 0, $or$cond104 = 0, label = 0, sp = 0; //@line 6138
 sp = STACKTOP; //@line 6139
 $3 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 6140
 $4 = $3 + 1794895138 | 0; //@line 6141
 $5 = $0 + 8 | 0; //@line 6142
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 6143
 $7 = _swapc($6, $4) | 0; //@line 6144
 $8 = $0 + 12 | 0; //@line 6145
 $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 6146
 $10 = _swapc($9, $4) | 0; //@line 6147
 $11 = $0 + 16 | 0; //@line 6148
 $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 6149
 $13 = _swapc($12, $4) | 0; //@line 6150
 $14 = $1 >>> 2; //@line 6151
 $15 = $7 >>> 0 < $14 >>> 0; //@line 6152
 L1 : do {
  if ($15) {
   $16 = $7 << 2; //@line 6155
   $17 = $1 - $16 | 0; //@line 6156
   $18 = $10 >>> 0 < $17 >>> 0; //@line 6157
   $19 = $13 >>> 0 < $17 >>> 0; //@line 6158
   $or$cond = $18 & $19; //@line 6159
   if ($or$cond) {
    $20 = $13 | $10; //@line 6161
    $21 = $20 & 3; //@line 6162
    $22 = ($21 | 0) == 0; //@line 6163
    if ($22) {
     $23 = $10 >>> 2; //@line 6165
     $24 = $13 >>> 2; //@line 6166
     $$090 = 0; //@line 6167
     $$094 = $7; //@line 6167
     while (1) {
      $25 = $$094 >>> 1; //@line 6169
      $26 = $$090 + $25 | 0; //@line 6170
      $27 = $26 << 1; //@line 6171
      $28 = $27 + $23 | 0; //@line 6172
      $29 = $0 + ($28 << 2) | 0; //@line 6173
      $30 = SAFE_HEAP_LOAD($29 | 0, 4, 0) | 0 | 0; //@line 6174
      $31 = _swapc($30, $4) | 0; //@line 6175
      $32 = $28 + 1 | 0; //@line 6176
      $33 = $0 + ($32 << 2) | 0; //@line 6177
      $34 = SAFE_HEAP_LOAD($33 | 0, 4, 0) | 0 | 0; //@line 6178
      $35 = _swapc($34, $4) | 0; //@line 6179
      $36 = $35 >>> 0 < $1 >>> 0; //@line 6180
      $37 = $1 - $35 | 0; //@line 6181
      $38 = $31 >>> 0 < $37 >>> 0; //@line 6182
      $or$cond102 = $36 & $38; //@line 6183
      if (!$or$cond102) {
       $$4 = 0; //@line 6185
       break L1;
      }
      $39 = $35 + $31 | 0; //@line 6188
      $40 = $0 + $39 | 0; //@line 6189
      $41 = SAFE_HEAP_LOAD($40 >> 0 | 0, 1, 0) | 0 | 0; //@line 6190
      $42 = $41 << 24 >> 24 == 0; //@line 6191
      if (!$42) {
       $$4 = 0; //@line 6193
       break L1;
      }
      $43 = $0 + $35 | 0; //@line 6196
      $44 = _strcmp($2, $43) | 0; //@line 6197
      $45 = ($44 | 0) == 0; //@line 6198
      if ($45) {
       break;
      }
      $62 = ($$094 | 0) == 1; //@line 6202
      $63 = ($44 | 0) < 0; //@line 6203
      $64 = $$094 - $25 | 0; //@line 6204
      $$195 = $63 ? $25 : $64; //@line 6205
      $$191 = $63 ? $$090 : $26; //@line 6206
      if ($62) {
       $$4 = 0; //@line 6208
       break L1;
      } else {
       $$090 = $$191; //@line 6211
       $$094 = $$195; //@line 6211
      }
     }
     $46 = $27 + $24 | 0; //@line 6214
     $47 = $0 + ($46 << 2) | 0; //@line 6215
     $48 = SAFE_HEAP_LOAD($47 | 0, 4, 0) | 0 | 0; //@line 6216
     $49 = _swapc($48, $4) | 0; //@line 6217
     $50 = $46 + 1 | 0; //@line 6218
     $51 = $0 + ($50 << 2) | 0; //@line 6219
     $52 = SAFE_HEAP_LOAD($51 | 0, 4, 0) | 0 | 0; //@line 6220
     $53 = _swapc($52, $4) | 0; //@line 6221
     $54 = $53 >>> 0 < $1 >>> 0; //@line 6222
     $55 = $1 - $53 | 0; //@line 6223
     $56 = $49 >>> 0 < $55 >>> 0; //@line 6224
     $or$cond104 = $54 & $56; //@line 6225
     if ($or$cond104) {
      $57 = $0 + $53 | 0; //@line 6227
      $58 = $53 + $49 | 0; //@line 6228
      $59 = $0 + $58 | 0; //@line 6229
      $60 = SAFE_HEAP_LOAD($59 >> 0 | 0, 1, 0) | 0 | 0; //@line 6230
      $61 = $60 << 24 >> 24 == 0; //@line 6231
      $$ = $61 ? $57 : 0; //@line 6232
      $$4 = $$; //@line 6233
     } else {
      $$4 = 0; //@line 6235
     }
    } else {
     $$4 = 0; //@line 6238
    }
   } else {
    $$4 = 0; //@line 6241
   }
  } else {
   $$4 = 0; //@line 6244
  }
 } while (0);
 return $$4 | 0; //@line 6247
}
function ___dynamic_cast($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 10868
 $1 = $1 | 0; //@line 10869
 $2 = $2 | 0; //@line 10870
 $3 = $3 | 0; //@line 10871
 var $$ = 0, $$0 = 0, $$33 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0; //@line 10872
 var $27 = 0, $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0; //@line 10873
 var $46 = 0, $47 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond28 = 0, $or$cond30 = 0, $or$cond32 = 0, dest = 0, label = 0, sp = 0, stop = 0; //@line 10874
 sp = STACKTOP; //@line 10875
 STACKTOP = STACKTOP + 64 | 0; //@line 10876
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 10876
 $4 = sp; //@line 10877
 $5 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10878
 $6 = $5 + -8 | 0; //@line 10879
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10880
 $8 = $0 + $7 | 0; //@line 10881
 $9 = $5 + -4 | 0; //@line 10882
 $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 10883
 SAFE_HEAP_STORE($4 | 0, $2 | 0, 4);
 $11 = $4 + 4 | 0; //@line 10885
 SAFE_HEAP_STORE($11 | 0, $0 | 0, 4);
 $12 = $4 + 8 | 0; //@line 10887
 SAFE_HEAP_STORE($12 | 0, $1 | 0, 4);
 $13 = $4 + 12 | 0; //@line 10889
 SAFE_HEAP_STORE($13 | 0, $3 | 0, 4);
 $14 = $4 + 16 | 0; //@line 10891
 $15 = $4 + 20 | 0; //@line 10892
 $16 = $4 + 24 | 0; //@line 10893
 $17 = $4 + 28 | 0; //@line 10894
 $18 = $4 + 32 | 0; //@line 10895
 $19 = $4 + 40 | 0; //@line 10896
 dest = $14; //@line 10897
 stop = dest + 36 | 0; //@line 10897
 do {
  SAFE_HEAP_STORE(dest | 0, 0 | 0 | 0, 4);
  dest = dest + 4 | 0; //@line 10897
 } while ((dest | 0) < (stop | 0));
 SAFE_HEAP_STORE($14 + 36 | 0, 0 | 0 | 0, 2);
 SAFE_HEAP_STORE($14 + 38 >> 0 | 0, 0 | 0 | 0, 1);
 $20 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($10, $2, 0) | 0; //@line 10898
 L1 : do {
  if ($20) {
   $21 = $4 + 48 | 0; //@line 10901
   SAFE_HEAP_STORE($21 | 0, 1 | 0, 4);
   $22 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10903
   $23 = $22 + 20 | 0; //@line 10904
   $24 = SAFE_HEAP_LOAD($23 | 0, 4, 0) | 0 | 0; //@line 10905
   FUNCTION_TABLE_viiiiii[(SAFE_FT_MASK($24 | 0, 63 | 0) | 0) & 63]($10, $4, $8, $8, 1, 0); //@line 10906
   $25 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 10907
   $26 = ($25 | 0) == 1; //@line 10908
   $$ = $26 ? $8 : 0; //@line 10909
   $$0 = $$; //@line 10910
  } else {
   $27 = $4 + 36 | 0; //@line 10912
   $28 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10913
   $29 = $28 + 24 | 0; //@line 10914
   $30 = SAFE_HEAP_LOAD($29 | 0, 4, 0) | 0 | 0; //@line 10915
   FUNCTION_TABLE_viiiii[(SAFE_FT_MASK($30 | 0, 63 | 0) | 0) & 63]($10, $4, $8, 1, 0); //@line 10916
   $31 = SAFE_HEAP_LOAD($27 | 0, 4, 0) | 0 | 0; //@line 10917
   switch ($31 | 0) {
   case 0:
    {
     $32 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 10920
     $33 = ($32 | 0) == 1; //@line 10921
     $34 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 10922
     $35 = ($34 | 0) == 1; //@line 10923
     $or$cond = $33 & $35; //@line 10924
     $36 = SAFE_HEAP_LOAD($18 | 0, 4, 0) | 0 | 0; //@line 10925
     $37 = ($36 | 0) == 1; //@line 10926
     $or$cond28 = $or$cond & $37; //@line 10927
     $38 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 10928
     $$33 = $or$cond28 ? $38 : 0; //@line 10929
     $$0 = $$33; //@line 10930
     break L1;
     break;
    }
   case 1:
    {
     break;
    }
   default:
    {
     $$0 = 0; //@line 10938
     break L1;
    }
   }
   $39 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 10942
   $40 = ($39 | 0) == 1; //@line 10943
   if (!$40) {
    $41 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 10945
    $42 = ($41 | 0) == 0; //@line 10946
    $43 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 10947
    $44 = ($43 | 0) == 1; //@line 10948
    $or$cond30 = $42 & $44; //@line 10949
    $45 = SAFE_HEAP_LOAD($18 | 0, 4, 0) | 0 | 0; //@line 10950
    $46 = ($45 | 0) == 1; //@line 10951
    $or$cond32 = $or$cond30 & $46; //@line 10952
    if (!$or$cond32) {
     $$0 = 0; //@line 10954
     break;
    }
   }
   $47 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 10958
   $$0 = $47; //@line 10959
  }
 } while (0);
 STACKTOP = sp; //@line 10962
 return $$0 | 0; //@line 10962
}
function __ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 10997
 $1 = $1 | 0; //@line 10998
 $2 = $2 | 0; //@line 10999
 $3 = $3 | 0; //@line 11000
 $4 = $4 | 0; //@line 11001
 var $$037$off038 = 0, $$037$off039 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0; //@line 11002
 var $28 = 0, $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $5 = 0, $6 = 0, $7 = 0; //@line 11003
 var $8 = 0, $9 = 0, $not$ = 0, label = 0, sp = 0; //@line 11004
 sp = STACKTOP; //@line 11005
 $5 = $1 + 8 | 0; //@line 11006
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 11007
 $7 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $6, $4) | 0; //@line 11008
 do {
  if ($7) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0, $1, $2, $3); //@line 11011
  } else {
   $8 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 11013
   $9 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $8, $4) | 0; //@line 11014
   $10 = $0 + 8 | 0; //@line 11015
   if (!$9) {
    $41 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11017
    $42 = SAFE_HEAP_LOAD($41 | 0, 4, 0) | 0 | 0; //@line 11018
    $43 = $42 + 24 | 0; //@line 11019
    $44 = SAFE_HEAP_LOAD($43 | 0, 4, 0) | 0 | 0; //@line 11020
    FUNCTION_TABLE_viiiii[(SAFE_FT_MASK($44 | 0, 63 | 0) | 0) & 63]($41, $1, $2, $3, $4); //@line 11021
    break;
   }
   $11 = $1 + 16 | 0; //@line 11024
   $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11025
   $13 = ($12 | 0) == ($2 | 0); //@line 11026
   $14 = $1 + 32 | 0; //@line 11027
   if (!$13) {
    $15 = $1 + 20 | 0; //@line 11029
    $16 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 11030
    $17 = ($16 | 0) == ($2 | 0); //@line 11031
    if (!$17) {
     SAFE_HEAP_STORE($14 | 0, $3 | 0, 4);
     $19 = $1 + 44 | 0; //@line 11034
     $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 11035
     $21 = ($20 | 0) == 4; //@line 11036
     if ($21) {
      break;
     }
     $22 = $1 + 52 | 0; //@line 11040
     SAFE_HEAP_STORE($22 >> 0 | 0, 0 | 0, 1);
     $23 = $1 + 53 | 0; //@line 11042
     SAFE_HEAP_STORE($23 >> 0 | 0, 0 | 0, 1);
     $24 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11044
     $25 = SAFE_HEAP_LOAD($24 | 0, 4, 0) | 0 | 0; //@line 11045
     $26 = $25 + 20 | 0; //@line 11046
     $27 = SAFE_HEAP_LOAD($26 | 0, 4, 0) | 0 | 0; //@line 11047
     FUNCTION_TABLE_viiiiii[(SAFE_FT_MASK($27 | 0, 63 | 0) | 0) & 63]($24, $1, $2, $2, 1, $4); //@line 11048
     $28 = SAFE_HEAP_LOAD($23 >> 0 | 0, 1, 0) | 0 | 0; //@line 11049
     $29 = $28 << 24 >> 24 == 0; //@line 11050
     if ($29) {
      $$037$off038 = 4; //@line 11052
      label = 11; //@line 11053
     } else {
      $30 = SAFE_HEAP_LOAD($22 >> 0 | 0, 1, 0) | 0 | 0; //@line 11055
      $not$ = $30 << 24 >> 24 == 0; //@line 11056
      if ($not$) {
       $$037$off038 = 3; //@line 11058
       label = 11; //@line 11059
      } else {
       $$037$off039 = 3; //@line 11061
      }
     }
     if ((label | 0) == 11) {
      SAFE_HEAP_STORE($15 | 0, $2 | 0, 4);
      $31 = $1 + 40 | 0; //@line 11066
      $32 = SAFE_HEAP_LOAD($31 | 0, 4, 0) | 0 | 0; //@line 11067
      $33 = $32 + 1 | 0; //@line 11068
      SAFE_HEAP_STORE($31 | 0, $33 | 0, 4);
      $34 = $1 + 36 | 0; //@line 11070
      $35 = SAFE_HEAP_LOAD($34 | 0, 4, 0) | 0 | 0; //@line 11071
      $36 = ($35 | 0) == 1; //@line 11072
      if ($36) {
       $37 = $1 + 24 | 0; //@line 11074
       $38 = SAFE_HEAP_LOAD($37 | 0, 4, 0) | 0 | 0; //@line 11075
       $39 = ($38 | 0) == 2; //@line 11076
       if ($39) {
        $40 = $1 + 54 | 0; //@line 11078
        SAFE_HEAP_STORE($40 >> 0 | 0, 1 | 0, 1);
        $$037$off039 = $$037$off038; //@line 11080
       } else {
        $$037$off039 = $$037$off038; //@line 11082
       }
      } else {
       $$037$off039 = $$037$off038; //@line 11085
      }
     }
     SAFE_HEAP_STORE($19 | 0, $$037$off039 | 0, 4);
     break;
    }
   }
   $18 = ($3 | 0) == 1; //@line 11092
   if ($18) {
    SAFE_HEAP_STORE($14 | 0, 1 | 0, 4);
   }
  }
 } while (0);
 return;
}
function _wcrtomb($0, $1, $2) {
 $0 = $0 | 0; //@line 5915
 $1 = $1 | 0; //@line 5916
 $2 = $2 | 0; //@line 5917
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0; //@line 5918
 var $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $41 = 0, $42 = 0, $43 = 0, $44 = 0, $45 = 0, $46 = 0; //@line 5919
 var $47 = 0, $48 = 0, $49 = 0, $5 = 0, $50 = 0, $51 = 0, $52 = 0, $53 = 0, $54 = 0, $55 = 0, $56 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $not$ = 0, $or$cond = 0, label = 0, sp = 0; //@line 5920
 sp = STACKTOP; //@line 5921
 $3 = ($0 | 0) == (0 | 0); //@line 5922
 do {
  if ($3) {
   $$0 = 1; //@line 5925
  } else {
   $4 = $1 >>> 0 < 128; //@line 5927
   if ($4) {
    $5 = $1 & 255; //@line 5929
    SAFE_HEAP_STORE($0 >> 0 | 0, $5 | 0, 1);
    $$0 = 1; //@line 5931
    break;
   }
   $6 = ___pthread_self_448() | 0; //@line 5934
   $7 = $6 + 188 | 0; //@line 5935
   $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 5936
   $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 5937
   $not$ = ($9 | 0) == (0 | 0); //@line 5938
   if ($not$) {
    $10 = $1 & -128; //@line 5940
    $11 = ($10 | 0) == 57216; //@line 5941
    if ($11) {
     $13 = $1 & 255; //@line 5943
     SAFE_HEAP_STORE($0 >> 0 | 0, $13 | 0, 1);
     $$0 = 1; //@line 5945
     break;
    } else {
     $12 = ___errno_location() | 0; //@line 5948
     SAFE_HEAP_STORE($12 | 0, 84 | 0, 4);
     $$0 = -1; //@line 5950
     break;
    }
   }
   $14 = $1 >>> 0 < 2048; //@line 5954
   if ($14) {
    $15 = $1 >>> 6; //@line 5956
    $16 = $15 | 192; //@line 5957
    $17 = $16 & 255; //@line 5958
    $18 = $0 + 1 | 0; //@line 5959
    SAFE_HEAP_STORE($0 >> 0 | 0, $17 | 0, 1);
    $19 = $1 & 63; //@line 5961
    $20 = $19 | 128; //@line 5962
    $21 = $20 & 255; //@line 5963
    SAFE_HEAP_STORE($18 >> 0 | 0, $21 | 0, 1);
    $$0 = 2; //@line 5965
    break;
   }
   $22 = $1 >>> 0 < 55296; //@line 5968
   $23 = $1 & -8192; //@line 5969
   $24 = ($23 | 0) == 57344; //@line 5970
   $or$cond = $22 | $24; //@line 5971
   if ($or$cond) {
    $25 = $1 >>> 12; //@line 5973
    $26 = $25 | 224; //@line 5974
    $27 = $26 & 255; //@line 5975
    $28 = $0 + 1 | 0; //@line 5976
    SAFE_HEAP_STORE($0 >> 0 | 0, $27 | 0, 1);
    $29 = $1 >>> 6; //@line 5978
    $30 = $29 & 63; //@line 5979
    $31 = $30 | 128; //@line 5980
    $32 = $31 & 255; //@line 5981
    $33 = $0 + 2 | 0; //@line 5982
    SAFE_HEAP_STORE($28 >> 0 | 0, $32 | 0, 1);
    $34 = $1 & 63; //@line 5984
    $35 = $34 | 128; //@line 5985
    $36 = $35 & 255; //@line 5986
    SAFE_HEAP_STORE($33 >> 0 | 0, $36 | 0, 1);
    $$0 = 3; //@line 5988
    break;
   }
   $37 = $1 + -65536 | 0; //@line 5991
   $38 = $37 >>> 0 < 1048576; //@line 5992
   if ($38) {
    $39 = $1 >>> 18; //@line 5994
    $40 = $39 | 240; //@line 5995
    $41 = $40 & 255; //@line 5996
    $42 = $0 + 1 | 0; //@line 5997
    SAFE_HEAP_STORE($0 >> 0 | 0, $41 | 0, 1);
    $43 = $1 >>> 12; //@line 5999
    $44 = $43 & 63; //@line 6000
    $45 = $44 | 128; //@line 6001
    $46 = $45 & 255; //@line 6002
    $47 = $0 + 2 | 0; //@line 6003
    SAFE_HEAP_STORE($42 >> 0 | 0, $46 | 0, 1);
    $48 = $1 >>> 6; //@line 6005
    $49 = $48 & 63; //@line 6006
    $50 = $49 | 128; //@line 6007
    $51 = $50 & 255; //@line 6008
    $52 = $0 + 3 | 0; //@line 6009
    SAFE_HEAP_STORE($47 >> 0 | 0, $51 | 0, 1);
    $53 = $1 & 63; //@line 6011
    $54 = $53 | 128; //@line 6012
    $55 = $54 & 255; //@line 6013
    SAFE_HEAP_STORE($52 >> 0 | 0, $55 | 0, 1);
    $$0 = 4; //@line 6015
    break;
   } else {
    $56 = ___errno_location() | 0; //@line 6018
    SAFE_HEAP_STORE($56 | 0, 84 | 0, 4);
    $$0 = -1; //@line 6020
    break;
   }
  }
 } while (0);
 return $$0 | 0; //@line 6025
}
function _vfprintf($0, $1, $2) {
 $0 = $0 | 0; //@line 3322
 $1 = $1 | 0; //@line 3323
 $2 = $2 | 0; //@line 3324
 var $$ = 0, $$0 = 0, $$1 = 0, $$1$ = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0; //@line 3325
 var $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $4 = 0, $40 = 0, $5 = 0, $6 = 0, $7 = 0; //@line 3326
 var $8 = 0, $9 = 0, $vacopy_currentptr = 0, dest = 0, label = 0, sp = 0, stop = 0; //@line 3327
 sp = STACKTOP; //@line 3328
 STACKTOP = STACKTOP + 224 | 0; //@line 3329
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(224 | 0); //@line 3329
 $3 = sp + 120 | 0; //@line 3330
 $4 = sp + 80 | 0; //@line 3331
 $5 = sp; //@line 3332
 $6 = sp + 136 | 0; //@line 3333
 dest = $4; //@line 3334
 stop = dest + 40 | 0; //@line 3334
 do {
  SAFE_HEAP_STORE(dest | 0, 0 | 0 | 0, 4);
  dest = dest + 4 | 0; //@line 3334
 } while ((dest | 0) < (stop | 0));
 $vacopy_currentptr = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 3335
 SAFE_HEAP_STORE($3 | 0, $vacopy_currentptr | 0, 4);
 $7 = _printf_core(0, $1, $3, $5, $4) | 0; //@line 3337
 $8 = ($7 | 0) < 0; //@line 3338
 if ($8) {
  $$0 = -1; //@line 3340
 } else {
  $9 = $0 + 76 | 0; //@line 3342
  $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 3343
  $11 = ($10 | 0) > -1; //@line 3344
  if ($11) {
   $12 = ___lockfile($0) | 0; //@line 3346
   $40 = $12; //@line 3347
  } else {
   $40 = 0; //@line 3349
  }
  $13 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 3351
  $14 = $13 & 32; //@line 3352
  $15 = $0 + 74 | 0; //@line 3353
  $16 = SAFE_HEAP_LOAD($15 >> 0 | 0, 1, 0) | 0 | 0; //@line 3354
  $17 = $16 << 24 >> 24 < 1; //@line 3355
  if ($17) {
   $18 = $13 & -33; //@line 3357
   SAFE_HEAP_STORE($0 | 0, $18 | 0, 4);
  }
  $19 = $0 + 48 | 0; //@line 3360
  $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 3361
  $21 = ($20 | 0) == 0; //@line 3362
  if ($21) {
   $23 = $0 + 44 | 0; //@line 3364
   $24 = SAFE_HEAP_LOAD($23 | 0, 4, 0) | 0 | 0; //@line 3365
   SAFE_HEAP_STORE($23 | 0, $6 | 0, 4);
   $25 = $0 + 28 | 0; //@line 3367
   SAFE_HEAP_STORE($25 | 0, $6 | 0, 4);
   $26 = $0 + 20 | 0; //@line 3369
   SAFE_HEAP_STORE($26 | 0, $6 | 0, 4);
   SAFE_HEAP_STORE($19 | 0, 80 | 0, 4);
   $27 = $6 + 80 | 0; //@line 3372
   $28 = $0 + 16 | 0; //@line 3373
   SAFE_HEAP_STORE($28 | 0, $27 | 0, 4);
   $29 = _printf_core($0, $1, $3, $5, $4) | 0; //@line 3375
   $30 = ($24 | 0) == (0 | 0); //@line 3376
   if ($30) {
    $$1 = $29; //@line 3378
   } else {
    $31 = $0 + 36 | 0; //@line 3380
    $32 = SAFE_HEAP_LOAD($31 | 0, 4, 0) | 0 | 0; //@line 3381
    FUNCTION_TABLE_iiii[(SAFE_FT_MASK($32 | 0, 63 | 0) | 0) & 63]($0, 0, 0) | 0; //@line 3382
    $33 = SAFE_HEAP_LOAD($26 | 0, 4, 0) | 0 | 0; //@line 3383
    $34 = ($33 | 0) == (0 | 0); //@line 3384
    $$ = $34 ? -1 : $29; //@line 3385
    SAFE_HEAP_STORE($23 | 0, $24 | 0, 4);
    SAFE_HEAP_STORE($19 | 0, 0 | 0, 4);
    SAFE_HEAP_STORE($28 | 0, 0 | 0, 4);
    SAFE_HEAP_STORE($25 | 0, 0 | 0, 4);
    SAFE_HEAP_STORE($26 | 0, 0 | 0, 4);
    $$1 = $$; //@line 3391
   }
  } else {
   $22 = _printf_core($0, $1, $3, $5, $4) | 0; //@line 3394
   $$1 = $22; //@line 3395
  }
  $35 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 3397
  $36 = $35 & 32; //@line 3398
  $37 = ($36 | 0) == 0; //@line 3399
  $$1$ = $37 ? $$1 : -1; //@line 3400
  $38 = $35 | $14; //@line 3401
  SAFE_HEAP_STORE($0 | 0, $38 | 0, 4);
  $39 = ($40 | 0) == 0; //@line 3403
  if (!$39) {
   ___unlockfile($0); //@line 3405
  }
  $$0 = $$1$; //@line 3407
 }
 STACKTOP = sp; //@line 3409
 return $$0 | 0; //@line 3409
}
function _memcpy(dest, src, num) {
 dest = dest | 0; //@line 12100
 src = src | 0; //@line 12100
 num = num | 0; //@line 12100
 var ret = 0; //@line 12101
 var aligned_dest_end = 0; //@line 12102
 var block_aligned_dest_end = 0; //@line 12103
 var dest_end = 0; //@line 12104
 if ((num | 0) >= 8192) {
  return _emscripten_memcpy_big(dest | 0, src | 0, num | 0) | 0; //@line 12109
 }
 ret = dest | 0; //@line 12112
 dest_end = dest + num | 0; //@line 12113
 if ((dest & 3) == (src & 3)) {
  while (dest & 3) {
   if ((num | 0) == 0) return ret | 0; //@line 12117
   SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 1, 0) | 0 | 0, 1); //@line 12118
   dest = dest + 1 | 0; //@line 12119
   src = src + 1 | 0; //@line 12120
   num = num - 1 | 0; //@line 12121
  }
  aligned_dest_end = dest_end & -4 | 0; //@line 12123
  block_aligned_dest_end = aligned_dest_end - 64 | 0; //@line 12124
  while ((dest | 0) <= (block_aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 4, 0) | 0 | 0, 4); //@line 12126
   SAFE_HEAP_STORE(dest + 4 | 0, SAFE_HEAP_LOAD(src + 4 | 0, 4, 0) | 0 | 0, 4); //@line 12127
   SAFE_HEAP_STORE(dest + 8 | 0, SAFE_HEAP_LOAD(src + 8 | 0, 4, 0) | 0 | 0, 4); //@line 12128
   SAFE_HEAP_STORE(dest + 12 | 0, SAFE_HEAP_LOAD(src + 12 | 0, 4, 0) | 0 | 0, 4); //@line 12129
   SAFE_HEAP_STORE(dest + 16 | 0, SAFE_HEAP_LOAD(src + 16 | 0, 4, 0) | 0 | 0, 4); //@line 12130
   SAFE_HEAP_STORE(dest + 20 | 0, SAFE_HEAP_LOAD(src + 20 | 0, 4, 0) | 0 | 0, 4); //@line 12131
   SAFE_HEAP_STORE(dest + 24 | 0, SAFE_HEAP_LOAD(src + 24 | 0, 4, 0) | 0 | 0, 4); //@line 12132
   SAFE_HEAP_STORE(dest + 28 | 0, SAFE_HEAP_LOAD(src + 28 | 0, 4, 0) | 0 | 0, 4); //@line 12133
   SAFE_HEAP_STORE(dest + 32 | 0, SAFE_HEAP_LOAD(src + 32 | 0, 4, 0) | 0 | 0, 4); //@line 12134
   SAFE_HEAP_STORE(dest + 36 | 0, SAFE_HEAP_LOAD(src + 36 | 0, 4, 0) | 0 | 0, 4); //@line 12135
   SAFE_HEAP_STORE(dest + 40 | 0, SAFE_HEAP_LOAD(src + 40 | 0, 4, 0) | 0 | 0, 4); //@line 12136
   SAFE_HEAP_STORE(dest + 44 | 0, SAFE_HEAP_LOAD(src + 44 | 0, 4, 0) | 0 | 0, 4); //@line 12137
   SAFE_HEAP_STORE(dest + 48 | 0, SAFE_HEAP_LOAD(src + 48 | 0, 4, 0) | 0 | 0, 4); //@line 12138
   SAFE_HEAP_STORE(dest + 52 | 0, SAFE_HEAP_LOAD(src + 52 | 0, 4, 0) | 0 | 0, 4); //@line 12139
   SAFE_HEAP_STORE(dest + 56 | 0, SAFE_HEAP_LOAD(src + 56 | 0, 4, 0) | 0 | 0, 4); //@line 12140
   SAFE_HEAP_STORE(dest + 60 | 0, SAFE_HEAP_LOAD(src + 60 | 0, 4, 0) | 0 | 0, 4); //@line 12141
   dest = dest + 64 | 0; //@line 12142
   src = src + 64 | 0; //@line 12143
  }
  while ((dest | 0) < (aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 4, 0) | 0 | 0, 4); //@line 12146
   dest = dest + 4 | 0; //@line 12147
   src = src + 4 | 0; //@line 12148
  }
 } else {
  aligned_dest_end = dest_end - 4 | 0; //@line 12152
  while ((dest | 0) < (aligned_dest_end | 0)) {
   SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 1, 0) | 0 | 0, 1); //@line 12154
   SAFE_HEAP_STORE(dest + 1 | 0, SAFE_HEAP_LOAD(src + 1 | 0, 1, 0) | 0 | 0, 1); //@line 12155
   SAFE_HEAP_STORE(dest + 2 | 0, SAFE_HEAP_LOAD(src + 2 | 0, 1, 0) | 0 | 0, 1); //@line 12156
   SAFE_HEAP_STORE(dest + 3 | 0, SAFE_HEAP_LOAD(src + 3 | 0, 1, 0) | 0 | 0, 1); //@line 12157
   dest = dest + 4 | 0; //@line 12158
   src = src + 4 | 0; //@line 12159
  }
 }
 while ((dest | 0) < (dest_end | 0)) {
  SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 1, 0) | 0 | 0, 1); //@line 12164
  dest = dest + 1 | 0; //@line 12165
  src = src + 1 | 0; //@line 12166
 }
 return ret | 0; //@line 12168
}
function __ZL25default_terminate_handlerv() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0; //@line 10457
 var $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer10 = 0, $vararg_buffer3 = 0, $vararg_buffer7 = 0, $vararg_ptr1 = 0; //@line 10458
 var $vararg_ptr2 = 0, $vararg_ptr6 = 0, label = 0, sp = 0; //@line 10459
 sp = STACKTOP; //@line 10460
 STACKTOP = STACKTOP + 48 | 0; //@line 10461
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48 | 0); //@line 10461
 $vararg_buffer10 = sp + 32 | 0; //@line 10462
 $vararg_buffer7 = sp + 24 | 0; //@line 10463
 $vararg_buffer3 = sp + 16 | 0; //@line 10464
 $vararg_buffer = sp; //@line 10465
 $0 = sp + 36 | 0; //@line 10466
 $1 = ___cxa_get_globals_fast() | 0; //@line 10467
 $2 = ($1 | 0) == (0 | 0); //@line 10468
 if (!$2) {
  $3 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 10470
  $4 = ($3 | 0) == (0 | 0); //@line 10471
  if (!$4) {
   $5 = $3 + 80 | 0; //@line 10473
   $6 = $3 + 48 | 0; //@line 10474
   $7 = $6; //@line 10475
   $8 = $7; //@line 10476
   $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 10477
   $10 = $7 + 4 | 0; //@line 10478
   $11 = $10; //@line 10479
   $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 10480
   $13 = $9 & -256; //@line 10481
   $14 = ($13 | 0) == 1126902528; //@line 10482
   $15 = ($12 | 0) == 1129074247; //@line 10483
   $16 = $14 & $15; //@line 10484
   if (!$16) {
    SAFE_HEAP_STORE($vararg_buffer7 | 0, 5943 | 0, 4);
    _abort_message(5893, $vararg_buffer7); //@line 10487
   }
   $17 = ($9 | 0) == 1126902529; //@line 10490
   $18 = ($12 | 0) == 1129074247; //@line 10491
   $19 = $17 & $18; //@line 10492
   if ($19) {
    $20 = $3 + 44 | 0; //@line 10494
    $21 = SAFE_HEAP_LOAD($20 | 0, 4, 0) | 0 | 0; //@line 10495
    $22 = $21; //@line 10496
   } else {
    $22 = $5; //@line 10498
   }
   SAFE_HEAP_STORE($0 | 0, $22 | 0, 4);
   $23 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 10501
   $24 = $23 + 4 | 0; //@line 10502
   $25 = SAFE_HEAP_LOAD($24 | 0, 4, 0) | 0 | 0; //@line 10503
   $26 = SAFE_HEAP_LOAD(78 * 4 | 0, 4, 0) | 0 | 0; //@line 10504
   $27 = $26 + 16 | 0; //@line 10505
   $28 = SAFE_HEAP_LOAD($27 | 0, 4, 0) | 0 | 0; //@line 10506
   $29 = FUNCTION_TABLE_iiii[(SAFE_FT_MASK($28 | 0, 63 | 0) | 0) & 63](312, $23, $0) | 0; //@line 10507
   if ($29) {
    $30 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10509
    $31 = SAFE_HEAP_LOAD($30 | 0, 4, 0) | 0 | 0; //@line 10510
    $32 = $31 + 8 | 0; //@line 10511
    $33 = SAFE_HEAP_LOAD($32 | 0, 4, 0) | 0 | 0; //@line 10512
    $34 = FUNCTION_TABLE_ii[(SAFE_FT_MASK($33 | 0, 127 | 0) | 0) & 127]($30) | 0; //@line 10513
    SAFE_HEAP_STORE($vararg_buffer | 0, 5943 | 0, 4);
    $vararg_ptr1 = $vararg_buffer + 4 | 0; //@line 10515
    SAFE_HEAP_STORE($vararg_ptr1 | 0, $25 | 0, 4);
    $vararg_ptr2 = $vararg_buffer + 8 | 0; //@line 10517
    SAFE_HEAP_STORE($vararg_ptr2 | 0, $34 | 0, 4);
    _abort_message(5807, $vararg_buffer); //@line 10519
   } else {
    SAFE_HEAP_STORE($vararg_buffer3 | 0, 5943 | 0, 4);
    $vararg_ptr6 = $vararg_buffer3 + 4 | 0; //@line 10523
    SAFE_HEAP_STORE($vararg_ptr6 | 0, $25 | 0, 4);
    _abort_message(5852, $vararg_buffer3); //@line 10525
   }
  }
 }
 _abort_message(5931, $vararg_buffer10); //@line 10530
}
function __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev($0) {
 $0 = $0 | 0; //@line 2305
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 2306
 sp = STACKTOP; //@line 2307
 STACKTOP = STACKTOP + 16 | 0; //@line 2308
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2308
 $1 = $0; //@line 2309
 $2 = __ZN10emscripten8internal6TypeIDIvE3getEv() | 0; //@line 2310
 __embind_register_void($2 | 0, 2015 | 0); //@line 2311
 $3 = __ZN10emscripten8internal6TypeIDIbE3getEv() | 0; //@line 2312
 __embind_register_bool($3 | 0, 2020 | 0, 1, 1, 0); //@line 2313
 __ZN12_GLOBAL__N_1L16register_integerIcEEvPKc(2025); //@line 2314
 __ZN12_GLOBAL__N_1L16register_integerIaEEvPKc(2030); //@line 2315
 __ZN12_GLOBAL__N_1L16register_integerIhEEvPKc(2042); //@line 2316
 __ZN12_GLOBAL__N_1L16register_integerIsEEvPKc(2056); //@line 2317
 __ZN12_GLOBAL__N_1L16register_integerItEEvPKc(2062); //@line 2318
 __ZN12_GLOBAL__N_1L16register_integerIiEEvPKc(2077); //@line 2319
 __ZN12_GLOBAL__N_1L16register_integerIjEEvPKc(2081); //@line 2320
 __ZN12_GLOBAL__N_1L16register_integerIlEEvPKc(2094); //@line 2321
 __ZN12_GLOBAL__N_1L16register_integerImEEvPKc(2099); //@line 2322
 __ZN12_GLOBAL__N_1L14register_floatIfEEvPKc(2113); //@line 2323
 __ZN12_GLOBAL__N_1L14register_floatIdEEvPKc(2119); //@line 2324
 $4 = __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() | 0; //@line 2325
 __embind_register_std_string($4 | 0, 2126 | 0); //@line 2326
 $5 = __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() | 0; //@line 2327
 __embind_register_std_string($5 | 0, 2138 | 0); //@line 2328
 $6 = __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() | 0; //@line 2329
 __embind_register_std_wstring($6 | 0, 4, 2171 | 0); //@line 2330
 $7 = __ZN10emscripten8internal6TypeIDINS_3valEE3getEv() | 0; //@line 2331
 __embind_register_emval($7 | 0, 2184 | 0); //@line 2332
 __ZN12_GLOBAL__N_1L20register_memory_viewIcEEvPKc(2200); //@line 2333
 __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc(2230); //@line 2334
 __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc(2267); //@line 2335
 __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc(2306); //@line 2336
 __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc(2337); //@line 2337
 __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc(2377); //@line 2338
 __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc(2406); //@line 2339
 __ZN12_GLOBAL__N_1L20register_memory_viewIlEEvPKc(2444); //@line 2340
 __ZN12_GLOBAL__N_1L20register_memory_viewImEEvPKc(2474); //@line 2341
 __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc(2513); //@line 2342
 __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc(2545); //@line 2343
 __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc(2578); //@line 2344
 __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc(2611); //@line 2345
 __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc(2645); //@line 2346
 __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc(2678); //@line 2347
 __ZN12_GLOBAL__N_1L20register_memory_viewIfEEvPKc(2712); //@line 2348
 __ZN12_GLOBAL__N_1L20register_memory_viewIdEEvPKc(2743); //@line 2349
 __ZN12_GLOBAL__N_1L20register_memory_viewIeEEvPKc(2775); //@line 2350
 STACKTOP = sp; //@line 2351
 return;
}
function __ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0; //@line 11491
 $1 = $1 | 0; //@line 11492
 $2 = $2 | 0; //@line 11493
 $3 = $3 | 0; //@line 11494
 $4 = $4 | 0; //@line 11495
 $5 = $5 | 0; //@line 11496
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0; //@line 11497
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11498
 sp = STACKTOP; //@line 11499
 $6 = $1 + 8 | 0; //@line 11500
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 11501
 $8 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $7, $5) | 0; //@line 11502
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0, $1, $2, $3, $4); //@line 11504
 } else {
  $9 = $1 + 52 | 0; //@line 11506
  $10 = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 11507
  $11 = $1 + 53 | 0; //@line 11508
  $12 = SAFE_HEAP_LOAD($11 >> 0 | 0, 1, 0) | 0 | 0; //@line 11509
  $13 = $0 + 16 | 0; //@line 11510
  $14 = $0 + 12 | 0; //@line 11511
  $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11512
  $16 = ($0 + 16 | 0) + ($15 << 3) | 0; //@line 11513
  SAFE_HEAP_STORE($9 >> 0 | 0, 0 | 0, 1);
  SAFE_HEAP_STORE($11 >> 0 | 0, 0 | 0, 1);
  __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($13, $1, $2, $3, $4, $5); //@line 11516
  $17 = ($15 | 0) > 1; //@line 11517
  L4 : do {
   if ($17) {
    $18 = $0 + 24 | 0; //@line 11520
    $19 = $1 + 24 | 0; //@line 11521
    $20 = $1 + 54 | 0; //@line 11522
    $21 = $0 + 8 | 0; //@line 11523
    $$0 = $18; //@line 11524
    while (1) {
     $22 = SAFE_HEAP_LOAD($20 >> 0 | 0, 1, 0) | 0 | 0; //@line 11526
     $23 = $22 << 24 >> 24 == 0; //@line 11527
     if (!$23) {
      break L4;
     }
     $24 = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 11531
     $25 = $24 << 24 >> 24 == 0; //@line 11532
     if ($25) {
      $31 = SAFE_HEAP_LOAD($11 >> 0 | 0, 1, 0) | 0 | 0; //@line 11534
      $32 = $31 << 24 >> 24 == 0; //@line 11535
      if (!$32) {
       $33 = SAFE_HEAP_LOAD($21 | 0, 4, 0) | 0 | 0; //@line 11537
       $34 = $33 & 1; //@line 11538
       $35 = ($34 | 0) == 0; //@line 11539
       if ($35) {
        break L4;
       }
      }
     } else {
      $26 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 11545
      $27 = ($26 | 0) == 1; //@line 11546
      if ($27) {
       break L4;
      }
      $28 = SAFE_HEAP_LOAD($21 | 0, 4, 0) | 0 | 0; //@line 11550
      $29 = $28 & 2; //@line 11551
      $30 = ($29 | 0) == 0; //@line 11552
      if ($30) {
       break L4;
      }
     }
     SAFE_HEAP_STORE($9 >> 0 | 0, 0 | 0, 1);
     SAFE_HEAP_STORE($11 >> 0 | 0, 0 | 0, 1);
     __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($$0, $1, $2, $3, $4, $5); //@line 11559
     $36 = $$0 + 8 | 0; //@line 11560
     $37 = $36 >>> 0 < $16 >>> 0; //@line 11561
     if ($37) {
      $$0 = $36; //@line 11563
     } else {
      break;
     }
    }
   }
  } while (0);
  SAFE_HEAP_STORE($9 >> 0 | 0, $10 | 0, 1);
  SAFE_HEAP_STORE($11 >> 0 | 0, $12 | 0, 1);
 }
 return;
}
function ___fwritex($0, $1, $2) {
 $0 = $0 | 0; //@line 6260
 $1 = $1 | 0; //@line 6261
 $2 = $2 | 0; //@line 6262
 var $$038 = 0, $$042 = 0, $$1 = 0, $$139 = 0, $$141 = 0, $$143 = 0, $$pre = 0, $$pre47 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0; //@line 6263
 var $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0; //@line 6264
 var label = 0, sp = 0; //@line 6265
 sp = STACKTOP; //@line 6266
 $3 = $2 + 16 | 0; //@line 6267
 $4 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 6268
 $5 = ($4 | 0) == (0 | 0); //@line 6269
 if ($5) {
  $7 = ___towrite($2) | 0; //@line 6271
  $8 = ($7 | 0) == 0; //@line 6272
  if ($8) {
   $$pre = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 6274
   $12 = $$pre; //@line 6275
   label = 5; //@line 6276
  } else {
   $$1 = 0; //@line 6278
  }
 } else {
  $6 = $4; //@line 6281
  $12 = $6; //@line 6282
  label = 5; //@line 6283
 }
 L5 : do {
  if ((label | 0) == 5) {
   $9 = $2 + 20 | 0; //@line 6287
   $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 6288
   $11 = $12 - $10 | 0; //@line 6289
   $13 = $11 >>> 0 < $1 >>> 0; //@line 6290
   $14 = $10; //@line 6291
   if ($13) {
    $15 = $2 + 36 | 0; //@line 6293
    $16 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 6294
    $17 = FUNCTION_TABLE_iiii[(SAFE_FT_MASK($16 | 0, 63 | 0) | 0) & 63]($2, $0, $1) | 0; //@line 6295
    $$1 = $17; //@line 6296
    break;
   }
   $18 = $2 + 75 | 0; //@line 6299
   $19 = SAFE_HEAP_LOAD($18 >> 0 | 0, 1, 0) | 0 | 0; //@line 6300
   $20 = $19 << 24 >> 24 > -1; //@line 6301
   L10 : do {
    if ($20) {
     $$038 = $1; //@line 6304
     while (1) {
      $21 = ($$038 | 0) == 0; //@line 6306
      if ($21) {
       $$139 = 0; //@line 6308
       $$141 = $0; //@line 6308
       $$143 = $1; //@line 6308
       $31 = $14; //@line 6308
       break L10;
      }
      $22 = $$038 + -1 | 0; //@line 6311
      $23 = $0 + $22 | 0; //@line 6312
      $24 = SAFE_HEAP_LOAD($23 >> 0 | 0, 1, 0) | 0 | 0; //@line 6313
      $25 = $24 << 24 >> 24 == 10; //@line 6314
      if ($25) {
       break;
      } else {
       $$038 = $22; //@line 6318
      }
     }
     $26 = $2 + 36 | 0; //@line 6321
     $27 = SAFE_HEAP_LOAD($26 | 0, 4, 0) | 0 | 0; //@line 6322
     $28 = FUNCTION_TABLE_iiii[(SAFE_FT_MASK($27 | 0, 63 | 0) | 0) & 63]($2, $0, $$038) | 0; //@line 6323
     $29 = $28 >>> 0 < $$038 >>> 0; //@line 6324
     if ($29) {
      $$1 = $28; //@line 6326
      break L5;
     }
     $30 = $0 + $$038 | 0; //@line 6329
     $$042 = $1 - $$038 | 0; //@line 6330
     $$pre47 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 6331
     $$139 = $$038; //@line 6332
     $$141 = $30; //@line 6332
     $$143 = $$042; //@line 6332
     $31 = $$pre47; //@line 6332
    } else {
     $$139 = 0; //@line 6334
     $$141 = $0; //@line 6334
     $$143 = $1; //@line 6334
     $31 = $14; //@line 6334
    }
   } while (0);
   _memcpy($31 | 0, $$141 | 0, $$143 | 0) | 0; //@line 6337
   $32 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 6338
   $33 = $32 + $$143 | 0; //@line 6339
   SAFE_HEAP_STORE($9 | 0, $33 | 0, 4);
   $34 = $$139 + $$143 | 0; //@line 6341
   $$1 = $34; //@line 6342
  }
 } while (0);
 return $$1 | 0; //@line 6345
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE5shareEPS3_PNS_8internal7_EM_VALE($0, $1) {
 $0 = $0 | 0; //@line 612
 $1 = $1 | 0; //@line 613
 var $$byval_copy = 0, $$expand_i1_val = 0, $$expand_i1_val2 = 0, $$pre_trunc = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0; //@line 614
 var $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 615
 sp = STACKTOP; //@line 616
 STACKTOP = STACKTOP + 48 | 0; //@line 617
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48 | 0); //@line 617
 $$byval_copy = sp + 28 | 0; //@line 618
 $4 = sp + 16 | 0; //@line 619
 $5 = sp + 12 | 0; //@line 620
 $8 = sp; //@line 621
 $9 = sp + 32 | 0; //@line 622
 $2 = $0; //@line 623
 $3 = $1; //@line 624
 $10 = __Znwj(8) | 0; //@line 625
 $$expand_i1_val = 1; //@line 626
 SAFE_HEAP_STORE($9 >> 0 | 0, $$expand_i1_val | 0, 1);
 $11 = $2; //@line 628
 $12 = $3; //@line 629
 __THREW__ = 0; //@line 630
 $13 = invoke_ii(60, $12 | 0) | 0; //@line 631
 $14 = __THREW__; //@line 632
 __THREW__ = 0; //@line 632
 $15 = $14 & 1; //@line 633
 if ($15) {
  $20 = ___cxa_find_matching_catch_2() | 0; //@line 635
  $21 = tempRet0; //@line 636
  $6 = $20; //@line 637
  $7 = $21; //@line 638
 } else {
  SAFE_HEAP_STORE($5 | 0, $13 | 0, 4);
  __THREW__ = 0; //@line 641
  invoke_vii(61, $4 | 0, $5 | 0); //@line 642
  $16 = __THREW__; //@line 643
  __THREW__ = 0; //@line 643
  $17 = $16 & 1; //@line 644
  do {
   if ($17) {
    $22 = ___cxa_find_matching_catch_2() | 0; //@line 647
    $23 = tempRet0; //@line 648
    $6 = $22; //@line 649
    $7 = $23; //@line 650
   } else {
    SAFE_HEAP_STORE($8 | 0, 0 | 0 | 0, 4);
    __THREW__ = 0; //@line 653
    SAFE_HEAP_STORE($$byval_copy | 0, SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0 | 0, 4);
    invoke_viiii(62, $10 | 0, $11 | 0, $4 | 0, $$byval_copy | 0); //@line 655
    $18 = __THREW__; //@line 656
    __THREW__ = 0; //@line 656
    $19 = $18 & 1; //@line 657
    if ($19) {
     $24 = ___cxa_find_matching_catch_2() | 0; //@line 659
     $25 = tempRet0; //@line 660
     $6 = $24; //@line 661
     $7 = $25; //@line 662
     __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($4); //@line 663
     break;
    } else {
     $$expand_i1_val2 = 0; //@line 666
     SAFE_HEAP_STORE($9 >> 0 | 0, $$expand_i1_val2 | 0, 1);
     __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($4); //@line 668
     __ZN10emscripten3valD2Ev($5); //@line 669
     STACKTOP = sp; //@line 670
     return $10 | 0; //@line 670
    }
   }
  } while (0);
  __ZN10emscripten3valD2Ev($5); //@line 674
 }
 $$pre_trunc = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 676
 $26 = $$pre_trunc & 1; //@line 677
 if (!$26) {
  $27 = $6; //@line 679
  $28 = $7; //@line 680
  ___resumeException($27 | 0); //@line 681
 }
 __ZdlPv($10); //@line 684
 $27 = $6; //@line 685
 $28 = $7; //@line 686
 ___resumeException($27 | 0); //@line 687
 return 0 | 0; //@line 689
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($0, $1, $2, $3, $4, $5, $6, $7) {
 $0 = $0 | 0; //@line 9976
 $1 = $1 | 0; //@line 9977
 $2 = $2 | 0; //@line 9978
 $3 = $3 | 0; //@line 9979
 $4 = $4 | 0; //@line 9980
 $5 = $5 | 0; //@line 9981
 $6 = $6 | 0; //@line 9982
 $7 = $7 | 0; //@line 9983
 var $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0; //@line 9984
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $37 = 0, $38 = 0, $39 = 0, $40 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0; //@line 9985
 sp = STACKTOP; //@line 9986
 STACKTOP = STACKTOP + 16 | 0; //@line 9987
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 9987
 $8 = sp; //@line 9988
 $9 = -18 - $1 | 0; //@line 9989
 $10 = $9 >>> 0 < $2 >>> 0; //@line 9990
 if ($10) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0); //@line 9992
 }
 $11 = $0 + 11 | 0; //@line 9994
 $12 = SAFE_HEAP_LOAD($11 >> 0 | 0, 1, 0) | 0 | 0; //@line 9995
 $13 = $12 << 24 >> 24 < 0; //@line 9996
 if ($13) {
  $14 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 9998
  $25 = $14; //@line 9999
 } else {
  $25 = $0; //@line 10001
 }
 $15 = $1 >>> 0 < 2147483623; //@line 10003
 if ($15) {
  $16 = $2 + $1 | 0; //@line 10005
  $17 = $1 << 1; //@line 10006
  $18 = $16 >>> 0 < $17 >>> 0; //@line 10007
  $$sroa$speculated = $18 ? $17 : $16; //@line 10008
  $19 = $$sroa$speculated >>> 0 < 11; //@line 10009
  $20 = $$sroa$speculated + 16 | 0; //@line 10010
  $21 = $20 & -16; //@line 10011
  $phitmp = $19 ? 11 : $21; //@line 10012
  $22 = $phitmp; //@line 10013
 } else {
  $22 = -17; //@line 10015
 }
 $23 = __Znwj($22) | 0; //@line 10017
 $24 = ($4 | 0) == 0; //@line 10018
 if (!$24) {
  __ZNSt3__211char_traitsIcE4copyEPcPKcj($23, $25, $4) | 0; //@line 10020
 }
 $26 = ($6 | 0) == 0; //@line 10022
 if (!$26) {
  $27 = $23 + $4 | 0; //@line 10024
  __ZNSt3__211char_traitsIcE4copyEPcPKcj($27, $7, $6) | 0; //@line 10025
 }
 $28 = $3 - $5 | 0; //@line 10027
 $29 = $28 - $4 | 0; //@line 10028
 $30 = ($29 | 0) == 0; //@line 10029
 if (!$30) {
  $31 = $23 + $4 | 0; //@line 10031
  $32 = $31 + $6 | 0; //@line 10032
  $33 = $25 + $4 | 0; //@line 10033
  $34 = $33 + $5 | 0; //@line 10034
  __ZNSt3__211char_traitsIcE4copyEPcPKcj($32, $34, $29) | 0; //@line 10035
 }
 $35 = ($1 | 0) == 10; //@line 10037
 if (!$35) {
  __ZdlPv($25); //@line 10039
 }
 SAFE_HEAP_STORE($0 | 0, $23 | 0, 4);
 $36 = $22 | -2147483648; //@line 10042
 $37 = $0 + 8 | 0; //@line 10043
 SAFE_HEAP_STORE($37 | 0, $36 | 0, 4);
 $38 = $28 + $6 | 0; //@line 10045
 $39 = $0 + 4 | 0; //@line 10046
 SAFE_HEAP_STORE($39 | 0, $38 | 0, 4);
 $40 = $23 + $38 | 0; //@line 10048
 SAFE_HEAP_STORE($8 >> 0 | 0, 0 | 0, 1);
 __ZNSt3__211char_traitsIcE6assignERcRKc($40, $8); //@line 10050
 STACKTOP = sp; //@line 10051
 return;
}
function __ZNSt3__212_GLOBAL__N_19as_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPFiPcjPKczEjEET_T0_SD_PKNSD_10value_typeET1_($0, $1, $2) {
 $0 = $0 | 0; //@line 10347
 $1 = $1 | 0; //@line 10348
 $2 = $2 | 0; //@line 10349
 var $$0$i$i = 0, $$017 = 0, $$017$ph = 0, $$2 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0; //@line 10350
 var $7 = 0, $8 = 0, $9 = 0, $exitcond$i$i = 0, $vararg_buffer = 0, label = 0, sp = 0; //@line 10351
 sp = STACKTOP; //@line 10352
 STACKTOP = STACKTOP + 16 | 0; //@line 10353
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10353
 $vararg_buffer = sp; //@line 10354
 $3 = $1 + 11 | 0; //@line 10355
 $4 = SAFE_HEAP_LOAD($3 >> 0 | 0, 1, 0) | 0 | 0; //@line 10356
 $5 = $4 << 24 >> 24 < 0; //@line 10357
 if ($5) {
  $6 = $1 + 4 | 0; //@line 10359
  $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10360
  $$017$ph = $7; //@line 10361
 } else {
  $8 = $4 & 255; //@line 10363
  $$017$ph = $8; //@line 10364
 }
 $$017 = $$017$ph; //@line 10366
 $10 = $4; //@line 10366
 while (1) {
  $9 = $10 << 24 >> 24 < 0; //@line 10368
  if ($9) {
   $11 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 10370
   $13 = $11; //@line 10371
  } else {
   $13 = $1; //@line 10373
  }
  $12 = $$017 + 1 | 0; //@line 10375
  SAFE_HEAP_STORE($vararg_buffer | 0, $2 | 0, 4);
  $14 = _snprintf($13, $12, 5804, $vararg_buffer) | 0; //@line 10377
  $15 = ($14 | 0) > -1; //@line 10378
  if ($15) {
   $16 = $14 >>> 0 > $$017 >>> 0; //@line 10380
   if ($16) {
    $$2 = $14; //@line 10382
   } else {
    break;
   }
  } else {
   $17 = $$017 << 1; //@line 10387
   $18 = $17 | 1; //@line 10388
   $$2 = $18; //@line 10389
  }
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($1, $$2, 0); //@line 10391
  $$pre = SAFE_HEAP_LOAD($3 >> 0 | 0, 1, 0) | 0 | 0; //@line 10392
  $$017 = $$2; //@line 10393
  $10 = $$pre; //@line 10393
 }
 __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($1, $14, 0); //@line 10395
 SAFE_HEAP_STORE($0 | 0, SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($0 + 4 | 0, SAFE_HEAP_LOAD($1 + 4 | 0, 4, 0) | 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($0 + 8 | 0, SAFE_HEAP_LOAD($1 + 8 | 0, 4, 0) | 0 | 0 | 0, 4);
 $$0$i$i = 0; //@line 10397
 while (1) {
  $exitcond$i$i = ($$0$i$i | 0) == 3; //@line 10399
  if ($exitcond$i$i) {
   break;
  }
  $19 = $1 + ($$0$i$i << 2) | 0; //@line 10403
  SAFE_HEAP_STORE($19 | 0, 0 | 0, 4);
  $20 = $$0$i$i + 1 | 0; //@line 10405
  $$0$i$i = $20; //@line 10406
 }
 STACKTOP = sp; //@line 10408
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($0, $1, $2) {
 $0 = $0 | 0; //@line 10100
 $1 = $1 | 0; //@line 10101
 $2 = $2 | 0; //@line 10102
 var $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0; //@line 10103
 var $29 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i = 0, label = 0, sp = 0; //@line 10104
 sp = STACKTOP; //@line 10105
 STACKTOP = STACKTOP + 16 | 0; //@line 10106
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10106
 $3 = sp; //@line 10107
 $4 = ($1 | 0) == 0; //@line 10108
 if (!$4) {
  $5 = $0 + 11 | 0; //@line 10110
  $6 = SAFE_HEAP_LOAD($5 >> 0 | 0, 1, 0) | 0 | 0; //@line 10111
  $7 = $6 << 24 >> 24 < 0; //@line 10112
  if ($7) {
   $8 = $0 + 8 | 0; //@line 10114
   $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 10115
   $10 = $9 & 2147483647; //@line 10116
   $phitmp$i = $10 + -1 | 0; //@line 10117
   $11 = $0 + 4 | 0; //@line 10118
   $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 10119
   $15 = $12; //@line 10120
   $16 = $phitmp$i; //@line 10120
  } else {
   $13 = $6 & 255; //@line 10122
   $15 = $13; //@line 10123
   $16 = 10; //@line 10123
  }
  $14 = $16 - $15 | 0; //@line 10125
  $17 = $14 >>> 0 < $1 >>> 0; //@line 10126
  $18 = $15 + $1 | 0; //@line 10127
  if ($17) {
   $19 = $18 - $16 | 0; //@line 10129
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($0, $16, $19, $15, $15, 0, 0); //@line 10130
   $$pre = SAFE_HEAP_LOAD($5 >> 0 | 0, 1, 0) | 0 | 0; //@line 10131
   $21 = $$pre; //@line 10132
  } else {
   $21 = $6; //@line 10134
  }
  $20 = $21 << 24 >> 24 < 0; //@line 10136
  if ($20) {
   $22 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10138
   $24 = $22; //@line 10139
  } else {
   $24 = $0; //@line 10141
  }
  $23 = $24 + $15 | 0; //@line 10143
  __ZNSt3__211char_traitsIcE6assignEPcjc($23, $1, $2) | 0; //@line 10144
  $25 = SAFE_HEAP_LOAD($5 >> 0 | 0, 1, 0) | 0 | 0; //@line 10145
  $26 = $25 << 24 >> 24 < 0; //@line 10146
  if ($26) {
   $27 = $0 + 4 | 0; //@line 10148
   SAFE_HEAP_STORE($27 | 0, $18 | 0, 4);
  } else {
   $28 = $18 & 255; //@line 10151
   SAFE_HEAP_STORE($5 >> 0 | 0, $28 | 0, 1);
  }
  $29 = $24 + $18 | 0; //@line 10154
  SAFE_HEAP_STORE($3 >> 0 | 0, 0 | 0, 1);
  __ZNSt3__211char_traitsIcE6assignERcRKc($29, $3); //@line 10156
 }
 STACKTOP = sp; //@line 10158
 return $0 | 0; //@line 10158
}
function _vsnprintf($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 3262
 $1 = $1 | 0; //@line 3263
 $2 = $2 | 0; //@line 3264
 $3 = $3 | 0; //@line 3265
 var $$$015 = 0, $$0 = 0, $$014 = 0, $$015 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0; //@line 3266
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, dest = 0, label = 0, sp = 0, src = 0, stop = 0; //@line 3267
 sp = STACKTOP; //@line 3268
 STACKTOP = STACKTOP + 128 | 0; //@line 3269
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(128 | 0); //@line 3269
 $4 = sp + 124 | 0; //@line 3270
 $5 = sp; //@line 3271
 dest = $5; //@line 3272
 src = 1040; //@line 3272
 stop = dest + 124 | 0; //@line 3272
 do {
  SAFE_HEAP_STORE(dest | 0, SAFE_HEAP_LOAD(src | 0, 4, 0) | 0 | 0 | 0, 4);
  dest = dest + 4 | 0; //@line 3272
  src = src + 4 | 0; //@line 3272
 } while ((dest | 0) < (stop | 0));
 $6 = $1 + -1 | 0; //@line 3273
 $7 = $6 >>> 0 > 2147483646; //@line 3274
 if ($7) {
  $8 = ($1 | 0) == 0; //@line 3276
  if ($8) {
   $$014 = $4; //@line 3278
   $$015 = 1; //@line 3278
   label = 4; //@line 3279
  } else {
   $9 = ___errno_location() | 0; //@line 3281
   SAFE_HEAP_STORE($9 | 0, 75 | 0, 4);
   $$0 = -1; //@line 3283
  }
 } else {
  $$014 = $0; //@line 3286
  $$015 = $1; //@line 3286
  label = 4; //@line 3287
 }
 if ((label | 0) == 4) {
  $10 = $$014; //@line 3290
  $11 = -2 - $10 | 0; //@line 3291
  $12 = $$015 >>> 0 > $11 >>> 0; //@line 3292
  $$$015 = $12 ? $11 : $$015; //@line 3293
  $13 = $5 + 48 | 0; //@line 3294
  SAFE_HEAP_STORE($13 | 0, $$$015 | 0, 4);
  $14 = $5 + 20 | 0; //@line 3296
  SAFE_HEAP_STORE($14 | 0, $$014 | 0, 4);
  $15 = $5 + 44 | 0; //@line 3298
  SAFE_HEAP_STORE($15 | 0, $$014 | 0, 4);
  $16 = $$014 + $$$015 | 0; //@line 3300
  $17 = $5 + 16 | 0; //@line 3301
  SAFE_HEAP_STORE($17 | 0, $16 | 0, 4);
  $18 = $5 + 28 | 0; //@line 3303
  SAFE_HEAP_STORE($18 | 0, $16 | 0, 4);
  $19 = _vfprintf($5, $2, $3) | 0; //@line 3305
  $20 = ($$$015 | 0) == 0; //@line 3306
  if ($20) {
   $$0 = $19; //@line 3308
  } else {
   $21 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 3310
   $22 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 3311
   $23 = ($21 | 0) == ($22 | 0); //@line 3312
   $24 = $23 << 31 >> 31; //@line 3313
   $25 = $21 + $24 | 0; //@line 3314
   SAFE_HEAP_STORE($25 >> 0 | 0, 0 | 0, 1);
   $$0 = $19; //@line 3316
  }
 }
 STACKTOP = sp; //@line 3319
 return $$0 | 0; //@line 3319
}
function _fputc($0, $1) {
 $0 = $0 | 0; //@line 6572
 $1 = $1 | 0; //@line 6573
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0; //@line 6574
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 6575
 sp = STACKTOP; //@line 6576
 $2 = $1 + 76 | 0; //@line 6577
 $3 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 6578
 $4 = ($3 | 0) < 0; //@line 6579
 $5 = $0 & 255; //@line 6580
 $6 = $0 & 255; //@line 6581
 if ($4) {
  label = 3; //@line 6583
 } else {
  $7 = ___lockfile($1) | 0; //@line 6585
  $8 = ($7 | 0) == 0; //@line 6586
  if ($8) {
   label = 3; //@line 6588
  } else {
   $20 = $1 + 75 | 0; //@line 6590
   $21 = SAFE_HEAP_LOAD($20 >> 0 | 0, 1, 0) | 0 | 0; //@line 6591
   $22 = $21 << 24 >> 24; //@line 6592
   $23 = ($6 | 0) == ($22 | 0); //@line 6593
   if ($23) {
    label = 10; //@line 6595
   } else {
    $24 = $1 + 20 | 0; //@line 6597
    $25 = SAFE_HEAP_LOAD($24 | 0, 4, 0) | 0 | 0; //@line 6598
    $26 = $1 + 16 | 0; //@line 6599
    $27 = SAFE_HEAP_LOAD($26 | 0, 4, 0) | 0 | 0; //@line 6600
    $28 = $25 >>> 0 < $27 >>> 0; //@line 6601
    if ($28) {
     $29 = $25 + 1 | 0; //@line 6603
     SAFE_HEAP_STORE($24 | 0, $29 | 0, 4);
     SAFE_HEAP_STORE($25 >> 0 | 0, $5 | 0, 1);
     $31 = $6; //@line 6606
    } else {
     label = 10; //@line 6608
    }
   }
   if ((label | 0) == 10) {
    $30 = ___overflow($1, $0) | 0; //@line 6612
    $31 = $30; //@line 6613
   }
   ___unlockfile($1); //@line 6615
   $$0 = $31; //@line 6616
  }
 }
 do {
  if ((label | 0) == 3) {
   $9 = $1 + 75 | 0; //@line 6621
   $10 = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 6622
   $11 = $10 << 24 >> 24; //@line 6623
   $12 = ($6 | 0) == ($11 | 0); //@line 6624
   if (!$12) {
    $13 = $1 + 20 | 0; //@line 6626
    $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 6627
    $15 = $1 + 16 | 0; //@line 6628
    $16 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 6629
    $17 = $14 >>> 0 < $16 >>> 0; //@line 6630
    if ($17) {
     $18 = $14 + 1 | 0; //@line 6632
     SAFE_HEAP_STORE($13 | 0, $18 | 0, 4);
     SAFE_HEAP_STORE($14 >> 0 | 0, $5 | 0, 1);
     $$0 = $6; //@line 6635
     break;
    }
   }
   $19 = ___overflow($1, $0) | 0; //@line 6639
   $$0 = $19; //@line 6640
  }
 } while (0);
 return $$0 | 0; //@line 6643
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 10802
 $1 = $1 | 0; //@line 10803
 $2 = $2 | 0; //@line 10804
 $3 = $3 | 0; //@line 10805
 $4 = $4 | 0; //@line 10806
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $5 = 0; //@line 10807
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond22 = 0, label = 0, sp = 0; //@line 10808
 sp = STACKTOP; //@line 10809
 $5 = $1 + 53 | 0; //@line 10810
 SAFE_HEAP_STORE($5 >> 0 | 0, 1 | 0, 1);
 $6 = $1 + 4 | 0; //@line 10812
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10813
 $8 = ($7 | 0) == ($3 | 0); //@line 10814
 do {
  if ($8) {
   $9 = $1 + 52 | 0; //@line 10817
   SAFE_HEAP_STORE($9 >> 0 | 0, 1 | 0, 1);
   $10 = $1 + 16 | 0; //@line 10819
   $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10820
   $12 = ($11 | 0) == (0 | 0); //@line 10821
   $13 = $1 + 54 | 0; //@line 10822
   $14 = $1 + 48 | 0; //@line 10823
   $15 = $1 + 24 | 0; //@line 10824
   $16 = $1 + 36 | 0; //@line 10825
   if ($12) {
    SAFE_HEAP_STORE($10 | 0, $2 | 0, 4);
    SAFE_HEAP_STORE($15 | 0, $4 | 0, 4);
    SAFE_HEAP_STORE($16 | 0, 1 | 0, 4);
    $17 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 10830
    $18 = ($17 | 0) == 1; //@line 10831
    $19 = ($4 | 0) == 1; //@line 10832
    $or$cond = $18 & $19; //@line 10833
    if (!$or$cond) {
     break;
    }
    SAFE_HEAP_STORE($13 >> 0 | 0, 1 | 0, 1);
    break;
   }
   $20 = ($11 | 0) == ($2 | 0); //@line 10840
   if (!$20) {
    $27 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 10842
    $28 = $27 + 1 | 0; //@line 10843
    SAFE_HEAP_STORE($16 | 0, $28 | 0, 4);
    SAFE_HEAP_STORE($13 >> 0 | 0, 1 | 0, 1);
    break;
   }
   $21 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 10848
   $22 = ($21 | 0) == 2; //@line 10849
   if ($22) {
    SAFE_HEAP_STORE($15 | 0, $4 | 0, 4);
    $26 = $4; //@line 10852
   } else {
    $26 = $21; //@line 10854
   }
   $23 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 10856
   $24 = ($23 | 0) == 1; //@line 10857
   $25 = ($26 | 0) == 1; //@line 10858
   $or$cond22 = $24 & $25; //@line 10859
   if ($or$cond22) {
    SAFE_HEAP_STORE($13 >> 0 | 0, 1 | 0, 1);
   }
  }
 } while (0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj($0, $1, $2) {
 $0 = $0 | 0; //@line 10225
 $1 = $1 | 0; //@line 10226
 $2 = $2 | 0; //@line 10227
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0, $4 = 0; //@line 10228
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp$i = 0, label = 0, sp = 0; //@line 10229
 sp = STACKTOP; //@line 10230
 STACKTOP = STACKTOP + 16 | 0; //@line 10231
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10231
 $3 = sp; //@line 10232
 $4 = $0 + 11 | 0; //@line 10233
 $5 = SAFE_HEAP_LOAD($4 >> 0 | 0, 1, 0) | 0 | 0; //@line 10234
 $6 = $5 << 24 >> 24 < 0; //@line 10235
 if ($6) {
  $7 = $0 + 8 | 0; //@line 10237
  $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 10238
  $9 = $8 & 2147483647; //@line 10239
  $phitmp$i = $9 + -1 | 0; //@line 10240
  $10 = $0 + 4 | 0; //@line 10241
  $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10242
  $14 = $11; //@line 10243
  $15 = $phitmp$i; //@line 10243
 } else {
  $12 = $5 & 255; //@line 10245
  $14 = $12; //@line 10246
  $15 = 10; //@line 10246
 }
 $13 = $15 - $14 | 0; //@line 10248
 $16 = $13 >>> 0 < $2 >>> 0; //@line 10249
 $17 = $14 + $2 | 0; //@line 10250
 if ($16) {
  $27 = $17 - $15 | 0; //@line 10252
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE21__grow_by_and_replaceEjjjjjjPKc($0, $15, $27, $14, $14, 0, $2, $1); //@line 10253
 } else {
  $18 = ($2 | 0) == 0; //@line 10255
  if (!$18) {
   if ($6) {
    $19 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10258
    $21 = $19; //@line 10259
   } else {
    $21 = $0; //@line 10261
   }
   $20 = $21 + $14 | 0; //@line 10263
   __ZNSt3__211char_traitsIcE4copyEPcPKcj($20, $1, $2) | 0; //@line 10264
   $22 = SAFE_HEAP_LOAD($4 >> 0 | 0, 1, 0) | 0 | 0; //@line 10265
   $23 = $22 << 24 >> 24 < 0; //@line 10266
   if ($23) {
    $24 = $0 + 4 | 0; //@line 10268
    SAFE_HEAP_STORE($24 | 0, $17 | 0, 4);
   } else {
    $25 = $17 & 255; //@line 10271
    SAFE_HEAP_STORE($4 >> 0 | 0, $25 | 0, 1);
   }
   $26 = $21 + $17 | 0; //@line 10274
   SAFE_HEAP_STORE($3 >> 0 | 0, 0 | 0, 1);
   __ZNSt3__211char_traitsIcE6assignERcRKc($26, $3); //@line 10276
  }
 }
 STACKTOP = sp; //@line 10279
 return $0 | 0; //@line 10279
}
function __ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 10661
 $1 = $1 | 0; //@line 10662
 $2 = $2 | 0; //@line 10663
 $3 = $3 | 0; //@line 10664
 $4 = $4 | 0; //@line 10665
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $5 = 0; //@line 10666
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 10667
 sp = STACKTOP; //@line 10668
 $5 = $1 + 8 | 0; //@line 10669
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 10670
 $7 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $6, $4) | 0; //@line 10671
 do {
  if ($7) {
   __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi(0, $1, $2, $3); //@line 10674
  } else {
   $8 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 10676
   $9 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $8, $4) | 0; //@line 10677
   if ($9) {
    $10 = $1 + 16 | 0; //@line 10679
    $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10680
    $12 = ($11 | 0) == ($2 | 0); //@line 10681
    $13 = $1 + 32 | 0; //@line 10682
    if (!$12) {
     $14 = $1 + 20 | 0; //@line 10684
     $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 10685
     $16 = ($15 | 0) == ($2 | 0); //@line 10686
     if (!$16) {
      SAFE_HEAP_STORE($13 | 0, $3 | 0, 4);
      SAFE_HEAP_STORE($14 | 0, $2 | 0, 4);
      $18 = $1 + 40 | 0; //@line 10690
      $19 = SAFE_HEAP_LOAD($18 | 0, 4, 0) | 0 | 0; //@line 10691
      $20 = $19 + 1 | 0; //@line 10692
      SAFE_HEAP_STORE($18 | 0, $20 | 0, 4);
      $21 = $1 + 36 | 0; //@line 10694
      $22 = SAFE_HEAP_LOAD($21 | 0, 4, 0) | 0 | 0; //@line 10695
      $23 = ($22 | 0) == 1; //@line 10696
      if ($23) {
       $24 = $1 + 24 | 0; //@line 10698
       $25 = SAFE_HEAP_LOAD($24 | 0, 4, 0) | 0 | 0; //@line 10699
       $26 = ($25 | 0) == 2; //@line 10700
       if ($26) {
        $27 = $1 + 54 | 0; //@line 10702
        SAFE_HEAP_STORE($27 >> 0 | 0, 1 | 0, 1);
       }
      }
      $28 = $1 + 44 | 0; //@line 10706
      SAFE_HEAP_STORE($28 | 0, 4 | 0, 4);
      break;
     }
    }
    $17 = ($3 | 0) == 1; //@line 10711
    if ($17) {
     SAFE_HEAP_STORE($13 | 0, 1 | 0, 4);
    }
   }
  }
 } while (0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE9__grow_byEjjjjjj($0, $1, $2, $3, $4, $5, $6) {
 $0 = $0 | 0; //@line 10161
 $1 = $1 | 0; //@line 10162
 $2 = $2 | 0; //@line 10163
 $3 = $3 | 0; //@line 10164
 $4 = $4 | 0; //@line 10165
 $5 = $5 | 0; //@line 10166
 $6 = $6 | 0; //@line 10167
 var $$sroa$speculated = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0; //@line 10168
 var $29 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $7 = 0, $8 = 0, $9 = 0, $phitmp = 0, label = 0, sp = 0; //@line 10169
 sp = STACKTOP; //@line 10170
 $7 = -17 - $1 | 0; //@line 10171
 $8 = $7 >>> 0 < $2 >>> 0; //@line 10172
 if ($8) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0); //@line 10174
 }
 $9 = $0 + 11 | 0; //@line 10176
 $10 = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 10177
 $11 = $10 << 24 >> 24 < 0; //@line 10178
 if ($11) {
  $12 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10180
  $23 = $12; //@line 10181
 } else {
  $23 = $0; //@line 10183
 }
 $13 = $1 >>> 0 < 2147483623; //@line 10185
 if ($13) {
  $14 = $2 + $1 | 0; //@line 10187
  $15 = $1 << 1; //@line 10188
  $16 = $14 >>> 0 < $15 >>> 0; //@line 10189
  $$sroa$speculated = $16 ? $15 : $14; //@line 10190
  $17 = $$sroa$speculated >>> 0 < 11; //@line 10191
  $18 = $$sroa$speculated + 16 | 0; //@line 10192
  $19 = $18 & -16; //@line 10193
  $phitmp = $17 ? 11 : $19; //@line 10194
  $20 = $phitmp; //@line 10195
 } else {
  $20 = -17; //@line 10197
 }
 $21 = __Znwj($20) | 0; //@line 10199
 $22 = ($4 | 0) == 0; //@line 10200
 if (!$22) {
  __ZNSt3__211char_traitsIcE4copyEPcPKcj($21, $23, $4) | 0; //@line 10202
 }
 $24 = $3 - $5 | 0; //@line 10204
 $25 = $24 - $4 | 0; //@line 10205
 $26 = ($25 | 0) == 0; //@line 10206
 if (!$26) {
  $27 = $21 + $4 | 0; //@line 10208
  $28 = $27 + $6 | 0; //@line 10209
  $29 = $23 + $4 | 0; //@line 10210
  $30 = $29 + $5 | 0; //@line 10211
  __ZNSt3__211char_traitsIcE4copyEPcPKcj($28, $30, $25) | 0; //@line 10212
 }
 $31 = ($1 | 0) == 10; //@line 10214
 if (!$31) {
  __ZdlPv($23); //@line 10216
 }
 SAFE_HEAP_STORE($0 | 0, $21 | 0, 4);
 $32 = $20 | -2147483648; //@line 10219
 $33 = $0 + 8 | 0; //@line 10220
 SAFE_HEAP_STORE($33 | 0, $32 | 0, 4);
 return;
}
function __ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv($0, $1, $2) {
 $0 = $0 | 0; //@line 10591
 $1 = $1 | 0; //@line 10592
 $2 = $2 | 0; //@line 10593
 var $$0 = 0, $$2 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0; //@line 10594
 var dest = 0, label = 0, sp = 0, stop = 0; //@line 10595
 sp = STACKTOP; //@line 10596
 STACKTOP = STACKTOP + 64 | 0; //@line 10597
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 10597
 $3 = sp; //@line 10598
 $4 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $1, 0) | 0; //@line 10599
 if ($4) {
  $$2 = 1; //@line 10601
 } else {
  $5 = ($1 | 0) == (0 | 0); //@line 10603
  if ($5) {
   $$2 = 0; //@line 10605
  } else {
   $6 = ___dynamic_cast($1, 336, 320, 0) | 0; //@line 10607
   $7 = ($6 | 0) == (0 | 0); //@line 10608
   if ($7) {
    $$2 = 0; //@line 10610
   } else {
    $8 = $3 + 4 | 0; //@line 10612
    dest = $8; //@line 10613
    stop = dest + 52 | 0; //@line 10613
    do {
     SAFE_HEAP_STORE(dest | 0, 0 | 0 | 0, 4);
     dest = dest + 4 | 0; //@line 10613
    } while ((dest | 0) < (stop | 0));
    SAFE_HEAP_STORE($3 | 0, $6 | 0, 4);
    $9 = $3 + 8 | 0; //@line 10615
    SAFE_HEAP_STORE($9 | 0, $0 | 0, 4);
    $10 = $3 + 12 | 0; //@line 10617
    SAFE_HEAP_STORE($10 | 0, -1 | 0, 4);
    $11 = $3 + 48 | 0; //@line 10619
    SAFE_HEAP_STORE($11 | 0, 1 | 0, 4);
    $12 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10621
    $13 = $12 + 28 | 0; //@line 10622
    $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 10623
    $15 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 10624
    FUNCTION_TABLE_viiii[(SAFE_FT_MASK($14 | 0, 63 | 0) | 0) & 63]($6, $3, $15, 1); //@line 10625
    $16 = $3 + 24 | 0; //@line 10626
    $17 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 10627
    $18 = ($17 | 0) == 1; //@line 10628
    if ($18) {
     $19 = $3 + 16 | 0; //@line 10630
     $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 10631
     SAFE_HEAP_STORE($2 | 0, $20 | 0, 4);
     $$0 = 1; //@line 10633
    } else {
     $$0 = 0; //@line 10635
    }
    $$2 = $$0; //@line 10637
   }
  }
 }
 STACKTOP = sp; //@line 10641
 return $$2 | 0; //@line 10641
}
function __ZN10emscripten8internal13MethodInvokerIM13StringFactoryFNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEvES9_PS2_JEE6invokeERKSB_SC_($0, $1) {
 $0 = $0 | 0; //@line 2008
 $1 = $1 | 0; //@line 2009
 var $$field = 0, $$field2 = 0, $$index1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0; //@line 2010
 var $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 2011
 sp = STACKTOP; //@line 2012
 STACKTOP = STACKTOP + 32 | 0; //@line 2013
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 2013
 $4 = sp + 8 | 0; //@line 2014
 $2 = $0; //@line 2015
 $3 = $1; //@line 2016
 $7 = $3; //@line 2017
 $8 = __ZN10emscripten8internal11BindingTypeIP13StringFactoryE12fromWireTypeES3_($7) | 0; //@line 2018
 $9 = $2; //@line 2019
 $$field = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 2020
 $$index1 = $9 + 4 | 0; //@line 2021
 $$field2 = SAFE_HEAP_LOAD($$index1 | 0, 4, 0) | 0 | 0; //@line 2022
 $10 = $$field2 >> 1; //@line 2023
 $11 = $8 + $10 | 0; //@line 2024
 $12 = $$field2 & 1; //@line 2025
 $13 = ($12 | 0) != 0; //@line 2026
 if ($13) {
  $14 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 2028
  $15 = $14 + $$field | 0; //@line 2029
  $16 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 2030
  $18 = $16; //@line 2031
 } else {
  $17 = $$field; //@line 2033
  $18 = $17; //@line 2034
 }
 FUNCTION_TABLE_vii[(SAFE_FT_MASK($18 | 0, 127 | 0) | 0) & 127]($4, $11); //@line 2036
 __THREW__ = 0; //@line 2037
 $19 = invoke_ii(74, $4 | 0) | 0; //@line 2038
 $20 = __THREW__; //@line 2039
 __THREW__ = 0; //@line 2039
 $21 = $20 & 1; //@line 2040
 if ($21) {
  $22 = ___cxa_find_matching_catch_2() | 0; //@line 2042
  $23 = tempRet0; //@line 2043
  $5 = $22; //@line 2044
  $6 = $23; //@line 2045
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4); //@line 2046
  $24 = $5; //@line 2047
  $25 = $6; //@line 2048
  ___resumeException($24 | 0); //@line 2049
 } else {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($4); //@line 2052
  STACKTOP = sp; //@line 2053
  return $19 | 0; //@line 2053
 }
 return 0 | 0; //@line 2055
}
function _fmt_u($0, $1, $2) {
 $0 = $0 | 0; //@line 4679
 $1 = $1 | 0; //@line 4680
 $2 = $2 | 0; //@line 4681
 var $$010$lcssa$off0 = 0, $$012 = 0, $$09$lcssa = 0, $$0914 = 0, $$1$lcssa = 0, $$111 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0; //@line 4682
 var $24 = 0, $25 = 0, $26 = 0, $27 = 0, $28 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 4683
 sp = STACKTOP; //@line 4684
 $3 = $1 >>> 0 > 0; //@line 4685
 $4 = $0 >>> 0 > 4294967295; //@line 4686
 $5 = ($1 | 0) == 0; //@line 4687
 $6 = $5 & $4; //@line 4688
 $7 = $3 | $6; //@line 4689
 if ($7) {
  $$0914 = $2; //@line 4691
  $8 = $0; //@line 4691
  $9 = $1; //@line 4691
  while (1) {
   $10 = ___uremdi3($8 | 0, $9 | 0, 10, 0) | 0; //@line 4693
   $11 = tempRet0; //@line 4694
   $12 = $10 & 255; //@line 4695
   $13 = $12 | 48; //@line 4696
   $14 = $$0914 + -1 | 0; //@line 4697
   SAFE_HEAP_STORE($14 >> 0 | 0, $13 | 0, 1);
   $15 = ___udivdi3($8 | 0, $9 | 0, 10, 0) | 0; //@line 4699
   $16 = tempRet0; //@line 4700
   $17 = $9 >>> 0 > 9; //@line 4701
   $18 = $8 >>> 0 > 4294967295; //@line 4702
   $19 = ($9 | 0) == 9; //@line 4703
   $20 = $19 & $18; //@line 4704
   $21 = $17 | $20; //@line 4705
   if ($21) {
    $$0914 = $14; //@line 4707
    $8 = $15; //@line 4707
    $9 = $16; //@line 4707
   } else {
    break;
   }
  }
  $$010$lcssa$off0 = $15; //@line 4712
  $$09$lcssa = $14; //@line 4712
 } else {
  $$010$lcssa$off0 = $0; //@line 4714
  $$09$lcssa = $2; //@line 4714
 }
 $22 = ($$010$lcssa$off0 | 0) == 0; //@line 4716
 if ($22) {
  $$1$lcssa = $$09$lcssa; //@line 4718
 } else {
  $$012 = $$010$lcssa$off0; //@line 4720
  $$111 = $$09$lcssa; //@line 4720
  while (1) {
   $23 = ($$012 >>> 0) % 10 & -1; //@line 4722
   $24 = $23 | 48; //@line 4723
   $25 = $24 & 255; //@line 4724
   $26 = $$111 + -1 | 0; //@line 4725
   SAFE_HEAP_STORE($26 >> 0 | 0, $25 | 0, 1);
   $27 = ($$012 >>> 0) / 10 & -1; //@line 4727
   $28 = $$012 >>> 0 < 10; //@line 4728
   if ($28) {
    $$1$lcssa = $26; //@line 4730
    break;
   } else {
    $$012 = $27; //@line 4733
    $$111 = $26; //@line 4733
   }
  }
 }
 return $$1$lcssa | 0; //@line 4737
}
function _strlen($0) {
 $0 = $0 | 0; //@line 6407
 var $$0 = 0, $$015$lcssa = 0, $$01519 = 0, $$1$lcssa = 0, $$pn = 0, $$pre = 0, $$sink = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0; //@line 6408
 var $21 = 0, $22 = 0, $23 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 6409
 sp = STACKTOP; //@line 6410
 $1 = $0; //@line 6411
 $2 = $1 & 3; //@line 6412
 $3 = ($2 | 0) == 0; //@line 6413
 L1 : do {
  if ($3) {
   $$015$lcssa = $0; //@line 6416
   label = 4; //@line 6417
  } else {
   $$01519 = $0; //@line 6419
   $23 = $1; //@line 6419
   while (1) {
    $4 = SAFE_HEAP_LOAD($$01519 >> 0 | 0, 1, 0) | 0 | 0; //@line 6421
    $5 = $4 << 24 >> 24 == 0; //@line 6422
    if ($5) {
     $$sink = $23; //@line 6424
     break L1;
    }
    $6 = $$01519 + 1 | 0; //@line 6427
    $7 = $6; //@line 6428
    $8 = $7 & 3; //@line 6429
    $9 = ($8 | 0) == 0; //@line 6430
    if ($9) {
     $$015$lcssa = $6; //@line 6432
     label = 4; //@line 6433
     break;
    } else {
     $$01519 = $6; //@line 6436
     $23 = $7; //@line 6436
    }
   }
  }
 } while (0);
 if ((label | 0) == 4) {
  $$0 = $$015$lcssa; //@line 6442
  while (1) {
   $10 = SAFE_HEAP_LOAD($$0 | 0, 4, 0) | 0 | 0; //@line 6444
   $11 = $10 + -16843009 | 0; //@line 6445
   $12 = $10 & -2139062144; //@line 6446
   $13 = $12 ^ -2139062144; //@line 6447
   $14 = $13 & $11; //@line 6448
   $15 = ($14 | 0) == 0; //@line 6449
   $16 = $$0 + 4 | 0; //@line 6450
   if ($15) {
    $$0 = $16; //@line 6452
   } else {
    break;
   }
  }
  $17 = $10 & 255; //@line 6457
  $18 = $17 << 24 >> 24 == 0; //@line 6458
  if ($18) {
   $$1$lcssa = $$0; //@line 6460
  } else {
   $$pn = $$0; //@line 6462
   while (1) {
    $19 = $$pn + 1 | 0; //@line 6464
    $$pre = SAFE_HEAP_LOAD($19 >> 0 | 0, 1, 0) | 0 | 0; //@line 6465
    $20 = $$pre << 24 >> 24 == 0; //@line 6466
    if ($20) {
     $$1$lcssa = $19; //@line 6468
     break;
    } else {
     $$pn = $19; //@line 6471
    }
   }
  }
  $21 = $$1$lcssa; //@line 6475
  $$sink = $21; //@line 6476
 }
 $22 = $$sink - $1 | 0; //@line 6478
 return $22 | 0; //@line 6479
}
function ___overflow($0, $1) {
 $0 = $0 | 0; //@line 6495
 $1 = $1 | 0; //@line 6496
 var $$0 = 0, $$pre = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0; //@line 6497
 var $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 6498
 sp = STACKTOP; //@line 6499
 STACKTOP = STACKTOP + 16 | 0; //@line 6500
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 6500
 $2 = sp; //@line 6501
 $3 = $1 & 255; //@line 6502
 SAFE_HEAP_STORE($2 >> 0 | 0, $3 | 0, 1);
 $4 = $0 + 16 | 0; //@line 6504
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 6505
 $6 = ($5 | 0) == (0 | 0); //@line 6506
 if ($6) {
  $7 = ___towrite($0) | 0; //@line 6508
  $8 = ($7 | 0) == 0; //@line 6509
  if ($8) {
   $$pre = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 6511
   $12 = $$pre; //@line 6512
   label = 4; //@line 6513
  } else {
   $$0 = -1; //@line 6515
  }
 } else {
  $12 = $5; //@line 6518
  label = 4; //@line 6519
 }
 do {
  if ((label | 0) == 4) {
   $9 = $0 + 20 | 0; //@line 6523
   $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 6524
   $11 = $10 >>> 0 < $12 >>> 0; //@line 6525
   if ($11) {
    $13 = $1 & 255; //@line 6527
    $14 = $0 + 75 | 0; //@line 6528
    $15 = SAFE_HEAP_LOAD($14 >> 0 | 0, 1, 0) | 0 | 0; //@line 6529
    $16 = $15 << 24 >> 24; //@line 6530
    $17 = ($13 | 0) == ($16 | 0); //@line 6531
    if (!$17) {
     $18 = $10 + 1 | 0; //@line 6533
     SAFE_HEAP_STORE($9 | 0, $18 | 0, 4);
     SAFE_HEAP_STORE($10 >> 0 | 0, $3 | 0, 1);
     $$0 = $13; //@line 6536
     break;
    }
   }
   $19 = $0 + 36 | 0; //@line 6540
   $20 = SAFE_HEAP_LOAD($19 | 0, 4, 0) | 0 | 0; //@line 6541
   $21 = FUNCTION_TABLE_iiii[(SAFE_FT_MASK($20 | 0, 63 | 0) | 0) & 63]($0, $2, 1) | 0; //@line 6542
   $22 = ($21 | 0) == 1; //@line 6543
   if ($22) {
    $23 = SAFE_HEAP_LOAD($2 >> 0 | 0, 1, 0) | 0 | 0; //@line 6545
    $24 = $23 & 255; //@line 6546
    $$0 = $24; //@line 6547
   } else {
    $$0 = -1; //@line 6549
   }
  }
 } while (0);
 STACKTOP = sp; //@line 6553
 return $$0 | 0; //@line 6553
}
function __ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE16__on_zero_sharedEv($0) {
 $0 = $0 | 0; //@line 1259
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0; //@line 1260
 var $28 = 0, $29 = 0, $3 = 0, $30 = 0, $31 = 0, $32 = 0, $33 = 0, $34 = 0, $35 = 0, $36 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1261
 sp = STACKTOP; //@line 1262
 STACKTOP = STACKTOP + 64 | 0; //@line 1263
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 1263
 $13 = $0; //@line 1264
 $14 = $13; //@line 1265
 $15 = $14 + 12 | 0; //@line 1266
 $12 = $15; //@line 1267
 $16 = $12; //@line 1268
 $11 = $16; //@line 1269
 $17 = $11; //@line 1270
 $10 = $17; //@line 1271
 $18 = $10; //@line 1272
 $9 = $18; //@line 1273
 $19 = $9; //@line 1274
 $20 = $19 + 4 | 0; //@line 1275
 $21 = $14 + 12 | 0; //@line 1276
 $8 = $21; //@line 1277
 $22 = $8; //@line 1278
 $7 = $22; //@line 1279
 $23 = $7; //@line 1280
 $2 = $23; //@line 1281
 $24 = $2; //@line 1282
 $1 = $24; //@line 1283
 $25 = $1; //@line 1284
 $26 = SAFE_HEAP_LOAD($25 | 0, 4, 0) | 0 | 0; //@line 1285
 __THREW__ = 0; //@line 1286
 invoke_vii(67, $20 | 0, $26 | 0); //@line 1287
 $27 = __THREW__; //@line 1288
 __THREW__ = 0; //@line 1288
 $28 = $27 & 1; //@line 1289
 if ($28) {
  $35 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 1291
  $36 = tempRet0; //@line 1292
  ___clang_call_terminate($35); //@line 1293
 } else {
  $29 = $14 + 12 | 0; //@line 1296
  $4 = $29; //@line 1297
  $30 = $4; //@line 1298
  $3 = $30; //@line 1299
  $31 = $3; //@line 1300
  $6 = $31; //@line 1301
  $32 = $6; //@line 1302
  $5 = $32; //@line 1303
  $33 = $5; //@line 1304
  $34 = $33 + 4 | 0; //@line 1305
  __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($34); //@line 1306
  STACKTOP = sp; //@line 1307
  return;
 }
}
function _memset(ptr, value, num) {
 ptr = ptr | 0; //@line 12030
 value = value | 0; //@line 12030
 num = num | 0; //@line 12030
 var end = 0, aligned_end = 0, block_aligned_end = 0, value4 = 0; //@line 12031
 end = ptr + num | 0; //@line 12032
 value = value & 255; //@line 12034
 if ((num | 0) >= 67) {
  while ((ptr & 3) != 0) {
   SAFE_HEAP_STORE(ptr | 0, value | 0, 1); //@line 12037
   ptr = ptr + 1 | 0; //@line 12038
  }
  aligned_end = end & -4 | 0; //@line 12041
  block_aligned_end = aligned_end - 64 | 0; //@line 12042
  value4 = value | value << 8 | value << 16 | value << 24; //@line 12043
  while ((ptr | 0) <= (block_aligned_end | 0)) {
   SAFE_HEAP_STORE(ptr | 0, value4 | 0, 4); //@line 12046
   SAFE_HEAP_STORE(ptr + 4 | 0, value4 | 0, 4); //@line 12047
   SAFE_HEAP_STORE(ptr + 8 | 0, value4 | 0, 4); //@line 12048
   SAFE_HEAP_STORE(ptr + 12 | 0, value4 | 0, 4); //@line 12049
   SAFE_HEAP_STORE(ptr + 16 | 0, value4 | 0, 4); //@line 12050
   SAFE_HEAP_STORE(ptr + 20 | 0, value4 | 0, 4); //@line 12051
   SAFE_HEAP_STORE(ptr + 24 | 0, value4 | 0, 4); //@line 12052
   SAFE_HEAP_STORE(ptr + 28 | 0, value4 | 0, 4); //@line 12053
   SAFE_HEAP_STORE(ptr + 32 | 0, value4 | 0, 4); //@line 12054
   SAFE_HEAP_STORE(ptr + 36 | 0, value4 | 0, 4); //@line 12055
   SAFE_HEAP_STORE(ptr + 40 | 0, value4 | 0, 4); //@line 12056
   SAFE_HEAP_STORE(ptr + 44 | 0, value4 | 0, 4); //@line 12057
   SAFE_HEAP_STORE(ptr + 48 | 0, value4 | 0, 4); //@line 12058
   SAFE_HEAP_STORE(ptr + 52 | 0, value4 | 0, 4); //@line 12059
   SAFE_HEAP_STORE(ptr + 56 | 0, value4 | 0, 4); //@line 12060
   SAFE_HEAP_STORE(ptr + 60 | 0, value4 | 0, 4); //@line 12061
   ptr = ptr + 64 | 0; //@line 12062
  }
  while ((ptr | 0) < (aligned_end | 0)) {
   SAFE_HEAP_STORE(ptr | 0, value4 | 0, 4); //@line 12066
   ptr = ptr + 4 | 0; //@line 12067
  }
 }
 while ((ptr | 0) < (end | 0)) {
  SAFE_HEAP_STORE(ptr | 0, value | 0, 1); //@line 12072
  ptr = ptr + 1 | 0; //@line 12073
 }
 return end - num | 0; //@line 12075
}
function ___strerror_l($0, $1) {
 $0 = $0 | 0; //@line 6040
 $1 = $1 | 0; //@line 6041
 var $$012$lcssa = 0, $$01214 = 0, $$016 = 0, $$113 = 0, $$115 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0; //@line 6042
 var label = 0, sp = 0; //@line 6043
 sp = STACKTOP; //@line 6044
 $$016 = 0; //@line 6045
 while (1) {
  $3 = 3844 + $$016 | 0; //@line 6047
  $4 = SAFE_HEAP_LOAD($3 >> 0 | 0, 1, 0) | 0 | 0; //@line 6048
  $5 = $4 & 255; //@line 6049
  $6 = ($5 | 0) == ($0 | 0); //@line 6050
  if ($6) {
   label = 2; //@line 6052
   break;
  }
  $7 = $$016 + 1 | 0; //@line 6055
  $8 = ($7 | 0) == 87; //@line 6056
  if ($8) {
   $$01214 = 3932; //@line 6058
   $$115 = 87; //@line 6058
   label = 5; //@line 6059
   break;
  } else {
   $$016 = $7; //@line 6062
  }
 }
 if ((label | 0) == 2) {
  $2 = ($$016 | 0) == 0; //@line 6066
  if ($2) {
   $$012$lcssa = 3932; //@line 6068
  } else {
   $$01214 = 3932; //@line 6070
   $$115 = $$016; //@line 6070
   label = 5; //@line 6071
  }
 }
 if ((label | 0) == 5) {
  while (1) {
   label = 0; //@line 6076
   $$113 = $$01214; //@line 6077
   while (1) {
    $9 = SAFE_HEAP_LOAD($$113 >> 0 | 0, 1, 0) | 0 | 0; //@line 6079
    $10 = $9 << 24 >> 24 == 0; //@line 6080
    $11 = $$113 + 1 | 0; //@line 6081
    if ($10) {
     break;
    } else {
     $$113 = $11; //@line 6085
    }
   }
   $12 = $$115 + -1 | 0; //@line 6088
   $13 = ($12 | 0) == 0; //@line 6089
   if ($13) {
    $$012$lcssa = $11; //@line 6091
    break;
   } else {
    $$01214 = $11; //@line 6094
    $$115 = $12; //@line 6094
    label = 5; //@line 6095
   }
  }
 }
 $14 = $1 + 20 | 0; //@line 6099
 $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 6100
 $16 = ___lctrans($$012$lcssa, $15) | 0; //@line 6101
 return $16 | 0; //@line 6102
}
function __ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 11818
 $1 = $1 | 0; //@line 11819
 $2 = $2 | 0; //@line 11820
 $3 = $3 | 0; //@line 11821
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11822
 sp = STACKTOP; //@line 11823
 $4 = $1 + 8 | 0; //@line 11824
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 11825
 $6 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $5, 0) | 0; //@line 11826
 L1 : do {
  if ($6) {
   __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0, $1, $2, $3); //@line 11829
  } else {
   $7 = $0 + 16 | 0; //@line 11831
   $8 = $0 + 12 | 0; //@line 11832
   $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 11833
   $10 = ($0 + 16 | 0) + ($9 << 3) | 0; //@line 11834
   __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($7, $1, $2, $3); //@line 11835
   $11 = ($9 | 0) > 1; //@line 11836
   if ($11) {
    $12 = $0 + 24 | 0; //@line 11838
    $13 = $1 + 54 | 0; //@line 11839
    $$0 = $12; //@line 11840
    while (1) {
     __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($$0, $1, $2, $3); //@line 11842
     $14 = SAFE_HEAP_LOAD($13 >> 0 | 0, 1, 0) | 0 | 0; //@line 11843
     $15 = $14 << 24 >> 24 == 0; //@line 11844
     if (!$15) {
      break L1;
     }
     $16 = $$0 + 8 | 0; //@line 11848
     $17 = $16 >>> 0 < $10 >>> 0; //@line 11849
     if ($17) {
      $$0 = $16; //@line 11851
     } else {
      break;
     }
    }
   }
  }
 } while (0);
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc($0, $1, $2) {
 $0 = $0 | 0; //@line 10054
 $1 = $1 | 0; //@line 10055
 $2 = $2 | 0; //@line 10056
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 10057
 sp = STACKTOP; //@line 10058
 STACKTOP = STACKTOP + 16 | 0; //@line 10059
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10059
 $3 = sp + 1 | 0; //@line 10060
 $4 = sp; //@line 10061
 $5 = $0 + 11 | 0; //@line 10062
 $6 = SAFE_HEAP_LOAD($5 >> 0 | 0, 1, 0) | 0 | 0; //@line 10063
 $7 = $6 << 24 >> 24 < 0; //@line 10064
 if ($7) {
  $8 = $0 + 4 | 0; //@line 10066
  $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 10067
  $12 = $9; //@line 10068
 } else {
  $10 = $6 & 255; //@line 10070
  $12 = $10; //@line 10071
 }
 $11 = $12 >>> 0 < $1 >>> 0; //@line 10073
 do {
  if ($11) {
   $13 = $1 - $12 | 0; //@line 10076
   __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEjc($0, $13, $2) | 0; //@line 10077
  } else {
   if ($7) {
    $14 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 10080
    $15 = $14 + $1 | 0; //@line 10081
    SAFE_HEAP_STORE($3 >> 0 | 0, 0 | 0, 1);
    __ZNSt3__211char_traitsIcE6assignERcRKc($15, $3); //@line 10083
    $16 = $0 + 4 | 0; //@line 10084
    SAFE_HEAP_STORE($16 | 0, $1 | 0, 4);
    break;
   } else {
    $17 = $0 + $1 | 0; //@line 10088
    SAFE_HEAP_STORE($4 >> 0 | 0, 0 | 0, 1);
    __ZNSt3__211char_traitsIcE6assignERcRKc($17, $4); //@line 10090
    $18 = $1 & 255; //@line 10091
    SAFE_HEAP_STORE($5 >> 0 | 0, $18 | 0, 1);
    break;
   }
  }
 } while (0);
 STACKTOP = sp; //@line 10097
 return;
}
function _frexp($0, $1) {
 $0 = +$0; //@line 5871
 $1 = $1 | 0; //@line 5872
 var $$0 = 0.0, $$016 = 0.0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0.0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0.0, $9 = 0.0, $storemerge = 0, $trunc$clear = 0, label = 0;
 var sp = 0; //@line 5874
 sp = STACKTOP; //@line 5875
 SAFE_HEAP_STORE_D(tempDoublePtr | 0, +$0, 8);
 $2 = SAFE_HEAP_LOAD(tempDoublePtr | 0, 4, 0) | 0 | 0; //@line 5876
 $3 = SAFE_HEAP_LOAD(tempDoublePtr + 4 | 0, 4, 0) | 0 | 0; //@line 5877
 $4 = _bitshift64Lshr($2 | 0, $3 | 0, 52) | 0; //@line 5878
 $5 = tempRet0; //@line 5879
 $6 = $4 & 65535; //@line 5880
 $trunc$clear = $6 & 2047; //@line 5881
 switch ($trunc$clear << 16 >> 16) {
 case 0:
  {
   $7 = $0 != 0.0; //@line 5884
   if ($7) {
    $8 = $0 * 18446744073709552000.0; //@line 5886
    $9 = +_frexp($8, $1); //@line 5887
    $10 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 5888
    $11 = $10 + -64 | 0; //@line 5889
    $$016 = $9; //@line 5890
    $storemerge = $11; //@line 5890
   } else {
    $$016 = $0; //@line 5892
    $storemerge = 0; //@line 5892
   }
   SAFE_HEAP_STORE($1 | 0, $storemerge | 0, 4);
   $$0 = $$016; //@line 5895
   break;
  }
 case 2047:
  {
   $$0 = $0; //@line 5899
   break;
  }
 default:
  {
   $12 = $4 & 2047; //@line 5903
   $13 = $12 + -1022 | 0; //@line 5904
   SAFE_HEAP_STORE($1 | 0, $13 | 0, 4);
   $14 = $3 & -2146435073; //@line 5906
   $15 = $14 | 1071644672; //@line 5907
   SAFE_HEAP_STORE(tempDoublePtr | 0, $2 | 0, 4);
   SAFE_HEAP_STORE(tempDoublePtr + 4 | 0, $15 | 0, 4);
   $16 = +(+SAFE_HEAP_LOAD_D(tempDoublePtr | 0, 8)); //@line 5908
   $$0 = $16; //@line 5909
  }
 }
 return +$$0;
}
function __ZNKSt3__212_GLOBAL__N_114initial_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjLb0EEclEv($0) {
 $0 = $0 | 0; //@line 10305
 var $$0$i$i = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $exitcond$i$i = 0, $phitmp$i = 0, label = 0, sp = 0; //@line 10306
 sp = STACKTOP; //@line 10307
 SAFE_HEAP_STORE($0 | 0, 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($0 + 4 | 0, 0 | 0 | 0, 4);
 SAFE_HEAP_STORE($0 + 8 | 0, 0 | 0 | 0, 4);
 $$0$i$i = 0; //@line 10309
 while (1) {
  $exitcond$i$i = ($$0$i$i | 0) == 3; //@line 10311
  if ($exitcond$i$i) {
   break;
  }
  $1 = $0 + ($$0$i$i << 2) | 0; //@line 10315
  SAFE_HEAP_STORE($1 | 0, 0 | 0, 4);
  $2 = $$0$i$i + 1 | 0; //@line 10317
  $$0$i$i = $2; //@line 10318
 }
 $3 = $0 + 11 | 0; //@line 10320
 $4 = SAFE_HEAP_LOAD($3 >> 0 | 0, 1, 0) | 0 | 0; //@line 10321
 $5 = $4 << 24 >> 24 < 0; //@line 10322
 if ($5) {
  $6 = $0 + 8 | 0; //@line 10324
  $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10325
  $8 = $7 & 2147483647; //@line 10326
  $phitmp$i = $8 + -1 | 0; //@line 10327
  $9 = $phitmp$i; //@line 10328
 } else {
  $9 = 10; //@line 10330
 }
 __THREW__ = 0; //@line 10332
 invoke_viii(77, $0 | 0, $9 | 0, 0); //@line 10333
 $10 = __THREW__; //@line 10334
 __THREW__ = 0; //@line 10334
 $11 = $10 & 1; //@line 10335
 if ($11) {
  $12 = ___cxa_find_matching_catch_2() | 0; //@line 10337
  $13 = tempRet0; //@line 10338
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($0); //@line 10339
  ___resumeException($12 | 0); //@line 10340
 } else {
  return;
 }
}
function __ZNKSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE13__get_deleterERKSt9type_info($0, $1) {
 $0 = $0 | 0; //@line 1311
 $1 = $1 | 0; //@line 1312
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $25 = 0, $26 = 0, $27 = 0, $3 = 0; //@line 1313
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1314
 sp = STACKTOP; //@line 1315
 STACKTOP = STACKTOP + 48 | 0; //@line 1316
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(48 | 0); //@line 1316
 $9 = $0; //@line 1317
 $10 = $1; //@line 1318
 $11 = $9; //@line 1319
 $12 = $10; //@line 1320
 $7 = $12; //@line 1321
 $8 = 72; //@line 1322
 $13 = $7; //@line 1323
 $14 = $13 + 4 | 0; //@line 1324
 $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 1325
 $16 = $8; //@line 1326
 $17 = $16 + 4 | 0; //@line 1327
 $18 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 1328
 $19 = ($15 | 0) == ($18 | 0); //@line 1329
 if (!$19) {
  $27 = 0; //@line 1331
  STACKTOP = sp; //@line 1332
  return $27 | 0; //@line 1332
 }
 $20 = $11 + 12 | 0; //@line 1334
 $3 = $20; //@line 1335
 $21 = $3; //@line 1336
 $2 = $21; //@line 1337
 $22 = $2; //@line 1338
 $5 = $22; //@line 1339
 $23 = $5; //@line 1340
 $4 = $23; //@line 1341
 $24 = $4; //@line 1342
 $25 = $24 + 4 | 0; //@line 1343
 $6 = $25; //@line 1344
 $26 = $6; //@line 1345
 $27 = $26; //@line 1346
 STACKTOP = sp; //@line 1347
 return $27 | 0; //@line 1347
}
function __ZSt11__terminatePFvvE($0) {
 $0 = $0 | 0; //@line 11202
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_buffer1 = 0, label = 0, sp = 0; //@line 11203
 sp = STACKTOP; //@line 11204
 STACKTOP = STACKTOP + 16 | 0; //@line 11205
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 11205
 $vararg_buffer1 = sp + 8 | 0; //@line 11206
 $vararg_buffer = sp; //@line 11207
 __THREW__ = 0; //@line 11208
 invoke_v($0 | 0); //@line 11209
 $1 = __THREW__; //@line 11210
 __THREW__ = 0; //@line 11210
 $2 = $1 & 1; //@line 11211
 if (!$2) {
  __THREW__ = 0; //@line 11213
  invoke_vii(82, 6234 | 0, $vararg_buffer | 0); //@line 11214
  $3 = __THREW__; //@line 11215
  __THREW__ = 0; //@line 11215
 }
 $4 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 11217
 $5 = tempRet0; //@line 11218
 ___cxa_begin_catch($4 | 0) | 0; //@line 11219
 __THREW__ = 0; //@line 11220
 invoke_vii(82, 6274 | 0, $vararg_buffer1 | 0); //@line 11221
 $6 = __THREW__; //@line 11222
 __THREW__ = 0; //@line 11222
 $7 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 11223
 $8 = tempRet0; //@line 11224
 __THREW__ = 0; //@line 11225
 invoke_v(69); //@line 11226
 $9 = __THREW__; //@line 11227
 __THREW__ = 0; //@line 11227
 $10 = $9 & 1; //@line 11228
 if ($10) {
  $11 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 11230
  $12 = tempRet0; //@line 11231
  ___clang_call_terminate($11); //@line 11232
 } else {
  ___clang_call_terminate($7); //@line 11235
 }
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6__initEPKcj($0, $1, $2) {
 $0 = $0 | 0; //@line 9880
 $1 = $1 | 0; //@line 9881
 $2 = $2 | 0; //@line 9882
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 9883
 sp = STACKTOP; //@line 9884
 STACKTOP = STACKTOP + 16 | 0; //@line 9885
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 9885
 $3 = sp; //@line 9886
 $4 = $2 >>> 0 > 4294967279; //@line 9887
 if ($4) {
  __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0); //@line 9889
  label = 5; //@line 9890
 } else {
  $5 = $2 >>> 0 < 11; //@line 9892
  if ($5) {
   $6 = $2 & 255; //@line 9894
   $7 = $0 + 11 | 0; //@line 9895
   SAFE_HEAP_STORE($7 >> 0 | 0, $6 | 0, 1);
   $$0 = $0; //@line 9897
  } else {
   label = 5; //@line 9899
  }
 }
 if ((label | 0) == 5) {
  $8 = $2 + 16 | 0; //@line 9903
  $9 = $8 & -16; //@line 9904
  $10 = __Znwj($9) | 0; //@line 9905
  SAFE_HEAP_STORE($0 | 0, $10 | 0, 4);
  $11 = $9 | -2147483648; //@line 9907
  $12 = $0 + 8 | 0; //@line 9908
  SAFE_HEAP_STORE($12 | 0, $11 | 0, 4);
  $13 = $0 + 4 | 0; //@line 9910
  SAFE_HEAP_STORE($13 | 0, $2 | 0, 4);
  $$0 = $10; //@line 9912
 }
 __ZNSt3__211char_traitsIcE4copyEPcPKcj($$0, $1, $2) | 0; //@line 9914
 $14 = $$0 + $2 | 0; //@line 9915
 SAFE_HEAP_STORE($3 >> 0 | 0, 0 | 0, 1);
 __ZNSt3__211char_traitsIcE6assignERcRKc($14, $3); //@line 9917
 STACKTOP = sp; //@line 9918
 return;
}
function __ZSt9terminatev() {
 var $0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0; //@line 11160
 var $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11161
 sp = STACKTOP; //@line 11162
 __THREW__ = 0; //@line 11163
 $0 = invoke_i(81) | 0; //@line 11164
 $1 = __THREW__; //@line 11165
 __THREW__ = 0; //@line 11165
 $2 = $1 & 1; //@line 11166
 if ($2) {
  $20 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 11168
  $21 = tempRet0; //@line 11169
  ___clang_call_terminate($20); //@line 11170
 }
 $3 = ($0 | 0) == (0 | 0); //@line 11173
 if (!$3) {
  $4 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11175
  $5 = ($4 | 0) == (0 | 0); //@line 11176
  if (!$5) {
   $6 = $4 + 48 | 0; //@line 11178
   $7 = $6; //@line 11179
   $8 = $7; //@line 11180
   $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 11181
   $10 = $7 + 4 | 0; //@line 11182
   $11 = $10; //@line 11183
   $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11184
   $13 = $9 & -256; //@line 11185
   $14 = ($13 | 0) == 1126902528; //@line 11186
   $15 = ($12 | 0) == 1129074247; //@line 11187
   $16 = $14 & $15; //@line 11188
   if ($16) {
    $17 = $4 + 12 | 0; //@line 11190
    $18 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 11191
    __ZSt11__terminatePFvvE($18); //@line 11192
   }
  }
 }
 $19 = __ZSt13get_terminatev() | 0; //@line 11197
 __ZSt11__terminatePFvvE($19); //@line 11198
}
function ___stdio_seek($0, $1, $2) {
 $0 = $0 | 0; //@line 3154
 $1 = $1 | 0; //@line 3155
 $2 = $2 | 0; //@line 3156
 var $$pre = 0, $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $vararg_buffer = 0, $vararg_ptr1 = 0, $vararg_ptr2 = 0, $vararg_ptr3 = 0, $vararg_ptr4 = 0, label = 0, sp = 0; //@line 3157
 sp = STACKTOP; //@line 3158
 STACKTOP = STACKTOP + 32 | 0; //@line 3159
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 3159
 $vararg_buffer = sp; //@line 3160
 $3 = sp + 20 | 0; //@line 3161
 $4 = $0 + 60 | 0; //@line 3162
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 3163
 $6 = $3; //@line 3164
 SAFE_HEAP_STORE($vararg_buffer | 0, $5 | 0, 4);
 $vararg_ptr1 = $vararg_buffer + 4 | 0; //@line 3166
 SAFE_HEAP_STORE($vararg_ptr1 | 0, 0 | 0, 4);
 $vararg_ptr2 = $vararg_buffer + 8 | 0; //@line 3168
 SAFE_HEAP_STORE($vararg_ptr2 | 0, $1 | 0, 4);
 $vararg_ptr3 = $vararg_buffer + 12 | 0; //@line 3170
 SAFE_HEAP_STORE($vararg_ptr3 | 0, $6 | 0, 4);
 $vararg_ptr4 = $vararg_buffer + 16 | 0; //@line 3172
 SAFE_HEAP_STORE($vararg_ptr4 | 0, $2 | 0, 4);
 $7 = ___syscall140(140, $vararg_buffer | 0) | 0; //@line 3174
 $8 = ___syscall_ret($7) | 0; //@line 3175
 $9 = ($8 | 0) < 0; //@line 3176
 if ($9) {
  SAFE_HEAP_STORE($3 | 0, -1 | 0, 4);
  $10 = -1; //@line 3179
 } else {
  $$pre = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 3181
  $10 = $$pre; //@line 3182
 }
 STACKTOP = sp; //@line 3184
 return $10 | 0; //@line 3184
}
function ___towrite($0) {
 $0 = $0 | 0; //@line 6348
 var $$0 = 0, $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0; //@line 6349
 var $9 = 0, label = 0, sp = 0; //@line 6350
 sp = STACKTOP; //@line 6351
 $1 = $0 + 74 | 0; //@line 6352
 $2 = SAFE_HEAP_LOAD($1 >> 0 | 0, 1, 0) | 0 | 0; //@line 6353
 $3 = $2 << 24 >> 24; //@line 6354
 $4 = $3 + 255 | 0; //@line 6355
 $5 = $4 | $3; //@line 6356
 $6 = $5 & 255; //@line 6357
 SAFE_HEAP_STORE($1 >> 0 | 0, $6 | 0, 1);
 $7 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 6359
 $8 = $7 & 8; //@line 6360
 $9 = ($8 | 0) == 0; //@line 6361
 if ($9) {
  $11 = $0 + 8 | 0; //@line 6363
  SAFE_HEAP_STORE($11 | 0, 0 | 0, 4);
  $12 = $0 + 4 | 0; //@line 6365
  SAFE_HEAP_STORE($12 | 0, 0 | 0, 4);
  $13 = $0 + 44 | 0; //@line 6367
  $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 6368
  $15 = $0 + 28 | 0; //@line 6369
  SAFE_HEAP_STORE($15 | 0, $14 | 0, 4);
  $16 = $0 + 20 | 0; //@line 6371
  SAFE_HEAP_STORE($16 | 0, $14 | 0, 4);
  $17 = $0 + 48 | 0; //@line 6373
  $18 = SAFE_HEAP_LOAD($17 | 0, 4, 0) | 0 | 0; //@line 6374
  $19 = $14 + $18 | 0; //@line 6375
  $20 = $0 + 16 | 0; //@line 6376
  SAFE_HEAP_STORE($20 | 0, $19 | 0, 4);
  $$0 = 0; //@line 6378
 } else {
  $10 = $7 | 32; //@line 6380
  SAFE_HEAP_STORE($0 | 0, $10 | 0, 4);
  $$0 = -1; //@line 6382
 }
 return $$0 | 0; //@line 6384
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterclEPKv($0, $1) {
 $0 = $0 | 0; //@line 1153
 $1 = $1 | 0; //@line 1154
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1155
 sp = STACKTOP; //@line 1156
 STACKTOP = STACKTOP + 32 | 0; //@line 1157
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 1157
 $4 = sp + 12 | 0; //@line 1158
 $5 = sp + 8 | 0; //@line 1159
 $2 = $0; //@line 1160
 $3 = $1; //@line 1161
 $8 = $2; //@line 1162
 $9 = __ZN10emscripten3valclIJEEES0_DpOT_($8) | 0; //@line 1163
 SAFE_HEAP_STORE($4 | 0, $9 | 0, 4);
 __ZN10emscripten3valD2Ev($4); //@line 1165
 $10 = __ZN10emscripten3val9undefinedEv() | 0; //@line 1166
 SAFE_HEAP_STORE($5 | 0, $10 | 0, 4);
 __THREW__ = 0; //@line 1168
 invoke_iii(71, $8 | 0, $5 | 0) | 0; //@line 1169
 $11 = __THREW__; //@line 1170
 __THREW__ = 0; //@line 1170
 $12 = $11 & 1; //@line 1171
 if ($12) {
  $13 = ___cxa_find_matching_catch_2() | 0; //@line 1173
  $14 = tempRet0; //@line 1174
  $6 = $13; //@line 1175
  $7 = $14; //@line 1176
  __ZN10emscripten3valD2Ev($5); //@line 1177
  $15 = $6; //@line 1178
  $16 = $7; //@line 1179
  ___resumeException($15 | 0); //@line 1180
 } else {
  __ZN10emscripten3valD2Ev($5); //@line 1183
  STACKTOP = sp; //@line 1184
  return;
 }
}
function _strcmp($0, $1) {
 $0 = $0 | 0; //@line 3226
 $1 = $1 | 0; //@line 3227
 var $$011 = 0, $$0710 = 0, $$lcssa = 0, $$lcssa8 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, $or$cond9 = 0, label = 0; //@line 3228
 var sp = 0; //@line 3229
 sp = STACKTOP; //@line 3230
 $2 = SAFE_HEAP_LOAD($0 >> 0 | 0, 1, 0) | 0 | 0; //@line 3231
 $3 = SAFE_HEAP_LOAD($1 >> 0 | 0, 1, 0) | 0 | 0; //@line 3232
 $4 = $2 << 24 >> 24 != $3 << 24 >> 24; //@line 3233
 $5 = $2 << 24 >> 24 == 0; //@line 3234
 $or$cond9 = $5 | $4; //@line 3235
 if ($or$cond9) {
  $$lcssa = $3; //@line 3237
  $$lcssa8 = $2; //@line 3237
 } else {
  $$011 = $1; //@line 3239
  $$0710 = $0; //@line 3239
  while (1) {
   $6 = $$0710 + 1 | 0; //@line 3241
   $7 = $$011 + 1 | 0; //@line 3242
   $8 = SAFE_HEAP_LOAD($6 >> 0 | 0, 1, 0) | 0 | 0; //@line 3243
   $9 = SAFE_HEAP_LOAD($7 >> 0 | 0, 1, 0) | 0 | 0; //@line 3244
   $10 = $8 << 24 >> 24 != $9 << 24 >> 24; //@line 3245
   $11 = $8 << 24 >> 24 == 0; //@line 3246
   $or$cond = $11 | $10; //@line 3247
   if ($or$cond) {
    $$lcssa = $9; //@line 3249
    $$lcssa8 = $8; //@line 3249
    break;
   } else {
    $$011 = $7; //@line 3252
    $$0710 = $6; //@line 3252
   }
  }
 }
 $12 = $$lcssa8 & 255; //@line 3256
 $13 = $$lcssa & 255; //@line 3257
 $14 = $12 - $13 | 0; //@line 3258
 return $14 | 0; //@line 3259
}
function __ZNK10__cxxabiv122__base_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0; //@line 11893
 $1 = $1 | 0; //@line 11894
 $2 = $2 | 0; //@line 11895
 $3 = $3 | 0; //@line 11896
 $4 = $4 | 0; //@line 11897
 $5 = $5 | 0; //@line 11898
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $21 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11899
 sp = STACKTOP; //@line 11900
 $6 = $0 + 4 | 0; //@line 11901
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 11902
 $8 = $7 >> 8; //@line 11903
 $9 = $7 & 1; //@line 11904
 $10 = ($9 | 0) == 0; //@line 11905
 if ($10) {
  $$0 = $8; //@line 11907
 } else {
  $11 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 11909
  $12 = $11 + $8 | 0; //@line 11910
  $13 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11911
  $$0 = $13; //@line 11912
 }
 $14 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11914
 $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11915
 $16 = $15 + 20 | 0; //@line 11916
 $17 = SAFE_HEAP_LOAD($16 | 0, 4, 0) | 0 | 0; //@line 11917
 $18 = $3 + $$0 | 0; //@line 11918
 $19 = $7 & 2; //@line 11919
 $20 = ($19 | 0) != 0; //@line 11920
 $21 = $20 ? $4 : 2; //@line 11921
 FUNCTION_TABLE_viiiiii[(SAFE_FT_MASK($17 | 0, 63 | 0) | 0) & 63]($14, $1, $2, $18, $21, $5); //@line 11922
 return;
}
function _pad_674($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 4878
 $1 = $1 | 0; //@line 4879
 $2 = $2 | 0; //@line 4880
 $3 = $3 | 0; //@line 4881
 $4 = $4 | 0; //@line 4882
 var $$0$lcssa = 0, $$011 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $or$cond = 0, label = 0, sp = 0; //@line 4883
 sp = STACKTOP; //@line 4884
 STACKTOP = STACKTOP + 256 | 0; //@line 4885
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(256 | 0); //@line 4885
 $5 = sp; //@line 4886
 $6 = $4 & 73728; //@line 4887
 $7 = ($6 | 0) == 0; //@line 4888
 $8 = ($2 | 0) > ($3 | 0); //@line 4889
 $or$cond = $8 & $7; //@line 4890
 if ($or$cond) {
  $9 = $2 - $3 | 0; //@line 4892
  $10 = $9 >>> 0 < 256; //@line 4893
  $11 = $10 ? $9 : 256; //@line 4894
  _memset($5 | 0, $1 | 0, $11 | 0) | 0; //@line 4895
  $12 = $9 >>> 0 > 255; //@line 4896
  if ($12) {
   $13 = $2 - $3 | 0; //@line 4898
   $$011 = $9; //@line 4899
   while (1) {
    _out($0, $5, 256); //@line 4901
    $14 = $$011 + -256 | 0; //@line 4902
    $15 = $14 >>> 0 > 255; //@line 4903
    if ($15) {
     $$011 = $14; //@line 4905
    } else {
     break;
    }
   }
   $16 = $13 & 255; //@line 4910
   $$0$lcssa = $16; //@line 4911
  } else {
   $$0$lcssa = $9; //@line 4913
  }
  _out($0, $5, $$0$lcssa); //@line 4915
 }
 STACKTOP = sp; //@line 4917
 return;
}
function _fmt_x($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 4606
 $1 = $1 | 0; //@line 4607
 $2 = $2 | 0; //@line 4608
 $3 = $3 | 0; //@line 4609
 var $$05$lcssa = 0, $$056 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0; //@line 4610
 var sp = 0; //@line 4611
 sp = STACKTOP; //@line 4612
 $4 = ($0 | 0) == 0; //@line 4613
 $5 = ($1 | 0) == 0; //@line 4614
 $6 = $4 & $5; //@line 4615
 if ($6) {
  $$05$lcssa = $2; //@line 4617
 } else {
  $$056 = $2; //@line 4619
  $15 = $1; //@line 4619
  $8 = $0; //@line 4619
  while (1) {
   $7 = $8 & 15; //@line 4621
   $9 = 3826 + $7 | 0; //@line 4622
   $10 = SAFE_HEAP_LOAD($9 >> 0 | 0, 1, 0) | 0 | 0; //@line 4623
   $11 = $10 & 255; //@line 4624
   $12 = $11 | $3; //@line 4625
   $13 = $12 & 255; //@line 4626
   $14 = $$056 + -1 | 0; //@line 4627
   SAFE_HEAP_STORE($14 >> 0 | 0, $13 | 0, 1);
   $16 = _bitshift64Lshr($8 | 0, $15 | 0, 4) | 0; //@line 4629
   $17 = tempRet0; //@line 4630
   $18 = ($16 | 0) == 0; //@line 4631
   $19 = ($17 | 0) == 0; //@line 4632
   $20 = $18 & $19; //@line 4633
   if ($20) {
    $$05$lcssa = $14; //@line 4635
    break;
   } else {
    $$056 = $14; //@line 4638
    $15 = $17; //@line 4638
    $8 = $16; //@line 4638
   }
  }
 }
 return $$05$lcssa | 0; //@line 4642
}
function __ZNK10__cxxabiv122__base_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib($0, $1, $2, $3, $4) {
 $0 = $0 | 0; //@line 11926
 $1 = $1 | 0; //@line 11927
 $2 = $2 | 0; //@line 11928
 $3 = $3 | 0; //@line 11929
 $4 = $4 | 0; //@line 11930
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $20 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11931
 sp = STACKTOP; //@line 11932
 $5 = $0 + 4 | 0; //@line 11933
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 11934
 $7 = $6 >> 8; //@line 11935
 $8 = $6 & 1; //@line 11936
 $9 = ($8 | 0) == 0; //@line 11937
 if ($9) {
  $$0 = $7; //@line 11939
 } else {
  $10 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 11941
  $11 = $10 + $7 | 0; //@line 11942
  $12 = SAFE_HEAP_LOAD($11 | 0, 4, 0) | 0 | 0; //@line 11943
  $$0 = $12; //@line 11944
 }
 $13 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11946
 $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 11947
 $15 = $14 + 24 | 0; //@line 11948
 $16 = SAFE_HEAP_LOAD($15 | 0, 4, 0) | 0 | 0; //@line 11949
 $17 = $2 + $$0 | 0; //@line 11950
 $18 = $6 & 2; //@line 11951
 $19 = ($18 | 0) != 0; //@line 11952
 $20 = $19 ? $3 : 2; //@line 11953
 FUNCTION_TABLE_viiiii[(SAFE_FT_MASK($16 | 0, 63 | 0) | 0) & 63]($13, $1, $17, $20, $4); //@line 11954
 return;
}
function __ZNK10emscripten3val12internalCallIPFPNS_8internal7_EM_VALES4_jPKPKvS6_EJEEES0_T_DpOT0_($0, $1) {
 $0 = $0 | 0; //@line 1501
 $1 = $1 | 0; //@line 1502
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1503
 sp = STACKTOP; //@line 1504
 STACKTOP = STACKTOP + 32 | 0; //@line 1505
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 1505
 $2 = sp + 16 | 0; //@line 1506
 $5 = sp + 20 | 0; //@line 1507
 $6 = sp; //@line 1508
 $3 = $0; //@line 1509
 $4 = $1; //@line 1510
 $7 = $3; //@line 1511
 __ZN10emscripten8internal12WireTypePackIJEEC2Ev($6); //@line 1512
 $8 = $4; //@line 1513
 $9 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 1514
 $10 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJEE8getCountEv($5) | 0; //@line 1515
 $11 = __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJEE8getTypesEv($5) | 0; //@line 1516
 $12 = __ZNK10emscripten8internal12WireTypePackIJEEcvPKvEv($6) | 0; //@line 1517
 $13 = FUNCTION_TABLE_iiiii[(SAFE_FT_MASK($8 | 0, 127 | 0) | 0) & 127]($9, $10, $11, $12) | 0; //@line 1518
 __ZN10emscripten3valC2EPNS_8internal7_EM_VALE($2, $13); //@line 1519
 $14 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 1520
 STACKTOP = sp; //@line 1521
 return $14 | 0; //@line 1521
}
function __ZNK10__cxxabiv122__base_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 11862
 $1 = $1 | 0; //@line 11863
 $2 = $2 | 0; //@line 11864
 $3 = $3 | 0; //@line 11865
 var $$0 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11866
 sp = STACKTOP; //@line 11867
 $4 = $0 + 4 | 0; //@line 11868
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 11869
 $6 = $5 >> 8; //@line 11870
 $7 = $5 & 1; //@line 11871
 $8 = ($7 | 0) == 0; //@line 11872
 if ($8) {
  $$0 = $6; //@line 11874
 } else {
  $9 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 11876
  $10 = $9 + $6 | 0; //@line 11877
  $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11878
  $$0 = $11; //@line 11879
 }
 $12 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11881
 $13 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 11882
 $14 = $13 + 28 | 0; //@line 11883
 $15 = SAFE_HEAP_LOAD($14 | 0, 4, 0) | 0 | 0; //@line 11884
 $16 = $2 + $$0 | 0; //@line 11885
 $17 = $5 & 2; //@line 11886
 $18 = ($17 | 0) != 0; //@line 11887
 $19 = $18 ? $3 : 2; //@line 11888
 FUNCTION_TABLE_viiii[(SAFE_FT_MASK($15 | 0, 63 | 0) | 0) & 63]($12, $1, $16, $19); //@line 11889
 return;
}
function __ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE21__on_zero_shared_weakEv($0) {
 $0 = $0 | 0; //@line 1350
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0; //@line 1351
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1352
 sp = STACKTOP; //@line 1353
 STACKTOP = STACKTOP + 64 | 0; //@line 1354
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 1354
 $14 = sp + 52 | 0; //@line 1355
 $13 = $0; //@line 1356
 $15 = $13; //@line 1357
 $16 = $15 + 12 | 0; //@line 1358
 $12 = $16; //@line 1359
 $17 = $12; //@line 1360
 $11 = $17; //@line 1361
 $18 = $11; //@line 1362
 $5 = $14; //@line 1363
 $6 = $18; //@line 1364
 $19 = $15 + 12 | 0; //@line 1365
 $2 = $19; //@line 1366
 $20 = $2; //@line 1367
 $1 = $20; //@line 1368
 $4 = $15; //@line 1369
 $21 = $4; //@line 1370
 $3 = $21; //@line 1371
 $22 = $3; //@line 1372
 $8 = $14; //@line 1373
 $9 = $22; //@line 1374
 $10 = 1; //@line 1375
 $23 = $9; //@line 1376
 $7 = $23; //@line 1377
 $24 = $7; //@line 1378
 __ZdlPv($24); //@line 1379
 STACKTOP = sp; //@line 1380
 return;
}
function _getint($0) {
 $0 = $0 | 0; //@line 4293
 var $$0$lcssa = 0, $$06 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, $isdigit = 0, $isdigit5 = 0, $isdigittmp = 0, $isdigittmp4 = 0, $isdigittmp7 = 0, label = 0, sp = 0; //@line 4294
 sp = STACKTOP; //@line 4295
 $1 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 4296
 $2 = SAFE_HEAP_LOAD($1 >> 0 | 0, 1, 0) | 0 | 0; //@line 4297
 $3 = $2 << 24 >> 24; //@line 4298
 $isdigittmp4 = $3 + -48 | 0; //@line 4299
 $isdigit5 = $isdigittmp4 >>> 0 < 10; //@line 4300
 if ($isdigit5) {
  $$06 = 0; //@line 4302
  $7 = $1; //@line 4302
  $isdigittmp7 = $isdigittmp4; //@line 4302
  while (1) {
   $4 = $$06 * 10 | 0; //@line 4304
   $5 = $isdigittmp7 + $4 | 0; //@line 4305
   $6 = $7 + 1 | 0; //@line 4306
   SAFE_HEAP_STORE($0 | 0, $6 | 0, 4);
   $8 = SAFE_HEAP_LOAD($6 >> 0 | 0, 1, 0) | 0 | 0; //@line 4308
   $9 = $8 << 24 >> 24; //@line 4309
   $isdigittmp = $9 + -48 | 0; //@line 4310
   $isdigit = $isdigittmp >>> 0 < 10; //@line 4311
   if ($isdigit) {
    $$06 = $5; //@line 4313
    $7 = $6; //@line 4313
    $isdigittmp7 = $isdigittmp; //@line 4313
   } else {
    $$0$lcssa = $5; //@line 4315
    break;
   }
  }
 } else {
  $$0$lcssa = 0; //@line 4320
 }
 return $$0$lcssa | 0; //@line 4322
}
function __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 10745
 $1 = $1 | 0; //@line 10746
 $2 = $2 | 0; //@line 10747
 $3 = $3 | 0; //@line 10748
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 10749
 sp = STACKTOP; //@line 10750
 $4 = $1 + 16 | 0; //@line 10751
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 10752
 $6 = ($5 | 0) == (0 | 0); //@line 10753
 $7 = $1 + 36 | 0; //@line 10754
 $8 = $1 + 24 | 0; //@line 10755
 do {
  if ($6) {
   SAFE_HEAP_STORE($4 | 0, $2 | 0, 4);
   SAFE_HEAP_STORE($8 | 0, $3 | 0, 4);
   SAFE_HEAP_STORE($7 | 0, 1 | 0, 4);
  } else {
   $9 = ($5 | 0) == ($2 | 0); //@line 10762
   if (!$9) {
    $12 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 10764
    $13 = $12 + 1 | 0; //@line 10765
    SAFE_HEAP_STORE($7 | 0, $13 | 0, 4);
    SAFE_HEAP_STORE($8 | 0, 2 | 0, 4);
    $14 = $1 + 54 | 0; //@line 10768
    SAFE_HEAP_STORE($14 >> 0 | 0, 1 | 0, 1);
    break;
   }
   $10 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 10772
   $11 = ($10 | 0) == 2; //@line 10773
   if ($11) {
    SAFE_HEAP_STORE($8 | 0, $3 | 0, 4);
   }
  }
 } while (0);
 return;
}
function __ZN10emscripten8internal12WireTypePackIJRNS_3valEEEC2ES3_($0, $1) {
 $0 = $0 | 0; //@line 1051
 $1 = $1 | 0; //@line 1052
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1053
 sp = STACKTOP; //@line 1054
 STACKTOP = STACKTOP + 32 | 0; //@line 1055
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 1055
 $9 = sp; //@line 1056
 $7 = $0; //@line 1057
 $8 = $1; //@line 1058
 $10 = $7; //@line 1059
 $6 = $10; //@line 1060
 $11 = $6; //@line 1061
 SAFE_HEAP_STORE($9 | 0, $11 | 0, 4);
 $12 = $8; //@line 1063
 $2 = $12; //@line 1064
 $13 = $2; //@line 1065
 $4 = $9; //@line 1066
 $5 = $13; //@line 1067
 $14 = $4; //@line 1068
 $15 = $5; //@line 1069
 $3 = $15; //@line 1070
 $16 = $3; //@line 1071
 $17 = __ZN10emscripten8internal11BindingTypeINS_3valEE10toWireTypeERKS2_($16) | 0; //@line 1072
 __ZN10emscripten8internal20writeGenericWireTypeINS0_7_EM_VALEEEvRPNS0_15GenericWireTypeEPT_($14, $17); //@line 1073
 $18 = $4; //@line 1074
 __ZN10emscripten8internal21writeGenericWireTypesERPNS0_15GenericWireTypeE($18); //@line 1075
 STACKTOP = sp; //@line 1076
 return;
}
function __ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEE21__on_zero_shared_weakEv($0) {
 $0 = $0 | 0; //@line 1975
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $18 = 0, $19 = 0, $2 = 0, $20 = 0, $21 = 0, $22 = 0, $23 = 0, $24 = 0, $3 = 0, $4 = 0, $5 = 0; //@line 1976
 var $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1977
 sp = STACKTOP; //@line 1978
 STACKTOP = STACKTOP + 64 | 0; //@line 1979
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(64 | 0); //@line 1979
 $14 = sp + 52 | 0; //@line 1980
 $13 = $0; //@line 1981
 $15 = $13; //@line 1982
 $16 = $15 + 12 | 0; //@line 1983
 $12 = $16; //@line 1984
 $17 = $12; //@line 1985
 $11 = $17; //@line 1986
 $18 = $11; //@line 1987
 $5 = $14; //@line 1988
 $6 = $18; //@line 1989
 $19 = $15 + 12 | 0; //@line 1990
 $2 = $19; //@line 1991
 $20 = $2; //@line 1992
 $1 = $20; //@line 1993
 $4 = $15; //@line 1994
 $21 = $4; //@line 1995
 $3 = $21; //@line 1996
 $22 = $3; //@line 1997
 $8 = $14; //@line 1998
 $9 = $22; //@line 1999
 $10 = 1; //@line 2000
 $23 = $9; //@line 2001
 $7 = $23; //@line 2002
 $24 = $7; //@line 2003
 __ZdlPv($24); //@line 2004
 STACKTOP = sp; //@line 2005
 return;
}
function __ZN10emscripten8internal18GenericBindingTypeINSt3__210shared_ptrI13StringFactoryEEE10toWireTypeEOS5_($0) {
 $0 = $0 | 0; //@line 1604
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $17 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1605
 sp = STACKTOP; //@line 1606
 STACKTOP = STACKTOP + 16 | 0; //@line 1607
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1607
 $4 = $0; //@line 1608
 $5 = __Znwj(8) | 0; //@line 1609
 $6 = $4; //@line 1610
 $3 = $6; //@line 1611
 $7 = $3; //@line 1612
 $1 = $5; //@line 1613
 $2 = $7; //@line 1614
 $8 = $1; //@line 1615
 $9 = $2; //@line 1616
 $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 1617
 SAFE_HEAP_STORE($8 | 0, $10 | 0, 4);
 $11 = $8 + 4 | 0; //@line 1619
 $12 = $2; //@line 1620
 $13 = $12 + 4 | 0; //@line 1621
 $14 = SAFE_HEAP_LOAD($13 | 0, 4, 0) | 0 | 0; //@line 1622
 SAFE_HEAP_STORE($11 | 0, $14 | 0, 4);
 $15 = $2; //@line 1624
 SAFE_HEAP_STORE($15 | 0, 0 | 0, 4);
 $16 = $2; //@line 1626
 $17 = $16 + 4 | 0; //@line 1627
 SAFE_HEAP_STORE($17 | 0, 0 | 0, 4);
 STACKTOP = sp; //@line 1629
 return $5 | 0; //@line 1629
}
function __ZN10emscripten8internal7InvokerINSt3__210shared_ptrI13StringFactoryEEJEE6invokeEPFS5_vE($0) {
 $0 = $0 | 0; //@line 542
 var $1 = 0, $10 = 0, $11 = 0, $12 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 543
 sp = STACKTOP; //@line 544
 STACKTOP = STACKTOP + 32 | 0; //@line 545
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 545
 $2 = sp + 8 | 0; //@line 546
 $1 = $0; //@line 547
 $5 = $1; //@line 548
 FUNCTION_TABLE_vi[(SAFE_FT_MASK($5 | 0, 127 | 0) | 0) & 127]($2); //@line 549
 __THREW__ = 0; //@line 550
 $6 = invoke_ii(59, $2 | 0) | 0; //@line 551
 $7 = __THREW__; //@line 552
 __THREW__ = 0; //@line 552
 $8 = $7 & 1; //@line 553
 if ($8) {
  $9 = ___cxa_find_matching_catch_2() | 0; //@line 555
  $10 = tempRet0; //@line 556
  $3 = $9; //@line 557
  $4 = $10; //@line 558
  __ZNSt3__210shared_ptrI13StringFactoryED2Ev($2); //@line 559
  $11 = $3; //@line 560
  $12 = $4; //@line 561
  ___resumeException($11 | 0); //@line 562
 } else {
  __ZNSt3__210shared_ptrI13StringFactoryED2Ev($2); //@line 565
  STACKTOP = sp; //@line 566
  return $6 | 0; //@line 566
 }
 return 0 | 0; //@line 568
}
function _fmt_o($0, $1, $2) {
 $0 = $0 | 0; //@line 4645
 $1 = $1 | 0; //@line 4646
 $2 = $2 | 0; //@line 4647
 var $$0$lcssa = 0, $$06 = 0, $10 = 0, $11 = 0, $12 = 0, $13 = 0, $14 = 0, $15 = 0, $16 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 4648
 sp = STACKTOP; //@line 4649
 $3 = ($0 | 0) == 0; //@line 4650
 $4 = ($1 | 0) == 0; //@line 4651
 $5 = $3 & $4; //@line 4652
 if ($5) {
  $$0$lcssa = $2; //@line 4654
 } else {
  $$06 = $2; //@line 4656
  $11 = $1; //@line 4656
  $7 = $0; //@line 4656
  while (1) {
   $6 = $7 & 255; //@line 4658
   $8 = $6 & 7; //@line 4659
   $9 = $8 | 48; //@line 4660
   $10 = $$06 + -1 | 0; //@line 4661
   SAFE_HEAP_STORE($10 >> 0 | 0, $9 | 0, 1);
   $12 = _bitshift64Lshr($7 | 0, $11 | 0, 3) | 0; //@line 4663
   $13 = tempRet0; //@line 4664
   $14 = ($12 | 0) == 0; //@line 4665
   $15 = ($13 | 0) == 0; //@line 4666
   $16 = $14 & $15; //@line 4667
   if ($16) {
    $$0$lcssa = $10; //@line 4669
    break;
   } else {
    $$06 = $10; //@line 4672
    $11 = $13; //@line 4672
    $7 = $12; //@line 4672
   }
  }
 }
 return $$0$lcssa | 0; //@line 4676
}
function __ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0; //@line 10973
 $1 = $1 | 0; //@line 10974
 $2 = $2 | 0; //@line 10975
 $3 = $3 | 0; //@line 10976
 $4 = $4 | 0; //@line 10977
 $5 = $5 | 0; //@line 10978
 var $10 = 0, $11 = 0, $12 = 0, $13 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 10979
 sp = STACKTOP; //@line 10980
 $6 = $1 + 8 | 0; //@line 10981
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10982
 $8 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $7, $5) | 0; //@line 10983
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0, $1, $2, $3, $4); //@line 10985
 } else {
  $9 = $0 + 8 | 0; //@line 10987
  $10 = SAFE_HEAP_LOAD($9 | 0, 4, 0) | 0 | 0; //@line 10988
  $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 10989
  $12 = $11 + 20 | 0; //@line 10990
  $13 = SAFE_HEAP_LOAD($12 | 0, 4, 0) | 0 | 0; //@line 10991
  FUNCTION_TABLE_viiiiii[(SAFE_FT_MASK($13 | 0, 63 | 0) | 0) & 63]($10, $1, $2, $3, $4, $5); //@line 10992
 }
 return;
}
function __ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 11101
 $1 = $1 | 0; //@line 11102
 $2 = $2 | 0; //@line 11103
 $3 = $3 | 0; //@line 11104
 var $10 = 0, $11 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11105
 sp = STACKTOP; //@line 11106
 $4 = $1 + 8 | 0; //@line 11107
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 11108
 $6 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $5, 0) | 0; //@line 11109
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0, $1, $2, $3); //@line 11111
 } else {
  $7 = $0 + 8 | 0; //@line 11113
  $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 11114
  $9 = SAFE_HEAP_LOAD($8 | 0, 4, 0) | 0 | 0; //@line 11115
  $10 = $9 + 28 | 0; //@line 11116
  $11 = SAFE_HEAP_LOAD($10 | 0, 4, 0) | 0 | 0; //@line 11117
  FUNCTION_TABLE_viiii[(SAFE_FT_MASK($11 | 0, 63 | 0) | 0) & 63]($8, $1, $2, $3); //@line 11118
 }
 return;
}
function __ZNSt3__29to_stringEj($0, $1) {
 $0 = $0 | 0; //@line 10282
 $1 = $1 | 0; //@line 10283
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 10284
 sp = STACKTOP; //@line 10285
 STACKTOP = STACKTOP + 16 | 0; //@line 10286
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10286
 $2 = sp; //@line 10287
 __ZNKSt3__212_GLOBAL__N_114initial_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjLb0EEclEv($2); //@line 10288
 __THREW__ = 0; //@line 10289
 invoke_viii(76, $0 | 0, $2 | 0, $1 | 0); //@line 10290
 $3 = __THREW__; //@line 10291
 __THREW__ = 0; //@line 10291
 $4 = $3 & 1; //@line 10292
 if ($4) {
  $5 = ___cxa_find_matching_catch_2() | 0; //@line 10294
  $6 = tempRet0; //@line 10295
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2); //@line 10296
  ___resumeException($5 | 0); //@line 10297
 } else {
  __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($2); //@line 10300
  STACKTOP = sp; //@line 10301
  return;
 }
}
function _sbrk(increment) {
 increment = increment | 0; //@line 12398
 var oldDynamicTop = 0; //@line 12399
 var oldDynamicTopOnChange = 0; //@line 12400
 var newDynamicTop = 0; //@line 12401
 var totalMemory = 0; //@line 12402
 increment = increment + 15 & -16 | 0; //@line 12403
 oldDynamicTop = SAFE_HEAP_LOAD(DYNAMICTOP_PTR | 0, 4, 0) | 0 | 0; //@line 12404
 newDynamicTop = oldDynamicTop + increment | 0; //@line 12405
 if ((increment | 0) > 0 & (newDynamicTop | 0) < (oldDynamicTop | 0) | (newDynamicTop | 0) < 0) {
  abortOnCannotGrowMemory() | 0; //@line 12409
  ___setErrNo(12); //@line 12410
  return -1;
 }
 SAFE_HEAP_STORE(DYNAMICTOP_PTR | 0, newDynamicTop | 0, 4);
 totalMemory = getTotalMemory() | 0; //@line 12415
 if ((newDynamicTop | 0) > (totalMemory | 0)) {
  if ((enlargeMemory() | 0) == 0) {
   ___setErrNo(12); //@line 12418
   SAFE_HEAP_STORE(DYNAMICTOP_PTR | 0, oldDynamicTop | 0, 4);
   return -1;
  }
 }
 return oldDynamicTop | 0; //@line 12423
}
function ___cxa_can_catch($0, $1, $2) {
 $0 = $0 | 0; //@line 11972
 $1 = $1 | 0; //@line 11973
 $2 = $2 | 0; //@line 11974
 var $10 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 11975
 sp = STACKTOP; //@line 11976
 STACKTOP = STACKTOP + 16 | 0; //@line 11977
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 11977
 $3 = sp; //@line 11978
 $4 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 11979
 SAFE_HEAP_STORE($3 | 0, $4 | 0, 4);
 $5 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11981
 $6 = $5 + 16 | 0; //@line 11982
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 11983
 $8 = FUNCTION_TABLE_iiii[(SAFE_FT_MASK($7 | 0, 63 | 0) | 0) & 63]($0, $1, $3) | 0; //@line 11984
 $9 = $8 & 1; //@line 11985
 if ($8) {
  $10 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 11987
  SAFE_HEAP_STORE($2 | 0, $10 | 0, 4);
 }
 STACKTOP = sp; //@line 11990
 return $9 | 0; //@line 11990
}
function __ZN10emscripten3valC2IRS0_EEOT_($0, $1) {
 $0 = $0 | 0; //@line 1031
 $1 = $1 | 0; //@line 1032
 var $10 = 0, $11 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1033
 sp = STACKTOP; //@line 1034
 STACKTOP = STACKTOP + 32 | 0; //@line 1035
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(32 | 0); //@line 1035
 $5 = sp; //@line 1036
 $3 = $0; //@line 1037
 $4 = $1; //@line 1038
 $6 = $3; //@line 1039
 $7 = $4; //@line 1040
 $2 = $7; //@line 1041
 $8 = $2; //@line 1042
 __ZN10emscripten8internal12WireTypePackIJRNS_3valEEEC2ES3_($5, $8); //@line 1043
 $9 = __ZN10emscripten8internal6TypeIDIRNS_3valEE3getEv() | 0; //@line 1044
 $10 = __ZNK10emscripten8internal12WireTypePackIJRNS_3valEEEcvPKvEv($5) | 0; //@line 1045
 $11 = __emval_take_value($9 | 0, $10 | 0) | 0; //@line 1046
 SAFE_HEAP_STORE($6 | 0, $11 | 0, 4);
 STACKTOP = sp; //@line 1048
 return;
}
function __ZNSt3__228__libcpp_compressed_pair_impIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterELj0EEC2EOS9_($0, $1) {
 $0 = $0 | 0; //@line 1412
 $1 = $1 | 0; //@line 1413
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1414
 sp = STACKTOP; //@line 1415
 STACKTOP = STACKTOP + 16 | 0; //@line 1416
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1416
 $2 = $0; //@line 1417
 $3 = $1; //@line 1418
 $4 = $2; //@line 1419
 $5 = $3; //@line 1420
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 1421
 SAFE_HEAP_STORE($4 | 0, $6 | 0, 4);
 $7 = $4 + 4 | 0; //@line 1423
 $8 = $3; //@line 1424
 $9 = $8 + 4 | 0; //@line 1425
 __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2EOS6_($7, $9); //@line 1426
 STACKTOP = sp; //@line 1427
 return;
}
function __ZN10emscripten8internal10getContextIM13StringFactoryFNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEvEEEPT_RKSC_($0) {
 $0 = $0 | 0; //@line 2075
 var $$field = 0, $$field2 = 0, $$index1 = 0, $$index5 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2076
 sp = STACKTOP; //@line 2077
 STACKTOP = STACKTOP + 16 | 0; //@line 2078
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2078
 $1 = $0; //@line 2079
 $2 = __Znwj(8) | 0; //@line 2080
 $3 = $1; //@line 2081
 $$field = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 2082
 $$index1 = $3 + 4 | 0; //@line 2083
 $$field2 = SAFE_HEAP_LOAD($$index1 | 0, 4, 0) | 0 | 0; //@line 2084
 SAFE_HEAP_STORE($2 | 0, $$field | 0, 4);
 $$index5 = $2 + 4 | 0; //@line 2086
 SAFE_HEAP_STORE($$index5 | 0, $$field2 | 0, 4);
 STACKTOP = sp; //@line 2088
 return $2 | 0; //@line 2088
}
function __Znwj($0) {
 $0 = $0 | 0; //@line 9820
 var $$ = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 9821
 sp = STACKTOP; //@line 9822
 $1 = ($0 | 0) == 0; //@line 9823
 $$ = $1 ? 1 : $0; //@line 9824
 while (1) {
  $2 = _malloc($$) | 0; //@line 9826
  $3 = ($2 | 0) == (0 | 0); //@line 9827
  if (!$3) {
   label = 6; //@line 9829
   break;
  }
  $4 = __ZSt15get_new_handlerv() | 0; //@line 9832
  $5 = ($4 | 0) == (0 | 0); //@line 9833
  if ($5) {
   label = 5; //@line 9835
   break;
  }
  FUNCTION_TABLE_v[(SAFE_FT_MASK($4 | 0, 127 | 0) | 0) & 127](); //@line 9838
 }
 if ((label | 0) == 5) {
  $6 = ___cxa_allocate_exception(4) | 0; //@line 9841
  __ZNSt9bad_allocC2Ev($6); //@line 9842
  ___cxa_throw($6 | 0, 376 | 0, 32 | 0); //@line 9843
 } else if ((label | 0) == 6) {
  return $2 | 0; //@line 9847
 }
 return 0 | 0; //@line 9849
}
function __ZN10emscripten8internal20writeGenericWireTypeINS0_7_EM_VALEEEvRPNS0_15GenericWireTypeEPT_($0, $1) {
 $0 = $0 | 0; //@line 1096
 $1 = $1 | 0; //@line 1097
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 1098
 sp = STACKTOP; //@line 1099
 STACKTOP = STACKTOP + 16 | 0; //@line 1100
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1100
 $2 = $0; //@line 1101
 $3 = $1; //@line 1102
 $4 = $3; //@line 1103
 $5 = $2; //@line 1104
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 1105
 SAFE_HEAP_STORE($6 | 0, $4 | 0, 4);
 $7 = $2; //@line 1107
 $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 1108
 $9 = $8 + 8 | 0; //@line 1109
 SAFE_HEAP_STORE($7 | 0, $9 | 0, 4);
 STACKTOP = sp; //@line 1111
 return;
}
function _sn_write($0, $1, $2) {
 $0 = $0 | 0; //@line 6387
 $1 = $1 | 0; //@line 6388
 $2 = $2 | 0; //@line 6389
 var $$ = 0, $10 = 0, $11 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 6390
 sp = STACKTOP; //@line 6391
 $3 = $0 + 16 | 0; //@line 6392
 $4 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 6393
 $5 = $0 + 20 | 0; //@line 6394
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 6395
 $7 = $6; //@line 6396
 $8 = $4 - $7 | 0; //@line 6397
 $9 = $8 >>> 0 > $2 >>> 0; //@line 6398
 $$ = $9 ? $2 : $8; //@line 6399
 _memcpy($6 | 0, $1 | 0, $$ | 0) | 0; //@line 6400
 $10 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 6401
 $11 = $10 + $$ | 0; //@line 6402
 SAFE_HEAP_STORE($5 | 0, $11 | 0, 4);
 return $2 | 0; //@line 6404
}
function __ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEED2Ev($0) {
 $0 = $0 | 0; //@line 1235
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 1236
 sp = STACKTOP; //@line 1237
 STACKTOP = STACKTOP + 16 | 0; //@line 1238
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1238
 $1 = $0; //@line 1239
 $2 = $1; //@line 1240
 SAFE_HEAP_STORE($2 | 0, 608 | 0, 4);
 $3 = $2 + 12 | 0; //@line 1242
 __ZNSt3__217__compressed_pairINS0_IP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEEENS_9allocatorIS1_EEED2Ev($3); //@line 1243
 __ZNSt3__214__shared_countD2Ev($2); //@line 1244
 STACKTOP = sp; //@line 1245
 return;
}
function __ZN10emscripten3valD2Ev($0) {
 $0 = $0 | 0; //@line 997
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 998
 sp = STACKTOP; //@line 999
 STACKTOP = STACKTOP + 16 | 0; //@line 1000
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1000
 $1 = $0; //@line 1001
 $2 = $1; //@line 1002
 $3 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 1003
 __THREW__ = 0; //@line 1004
 invoke_vi(70, $3 | 0); //@line 1005
 $4 = __THREW__; //@line 1006
 __THREW__ = 0; //@line 1006
 $5 = $4 & 1; //@line 1007
 if ($5) {
  $6 = ___cxa_find_matching_catch_3(0 | 0) | 0; //@line 1009
  $7 = tempRet0; //@line 1010
  ___clang_call_terminate($6); //@line 1011
 } else {
  STACKTOP = sp; //@line 1014
  return;
 }
}
function __ZNSt3__210shared_ptrI13StringFactoryED2Ev($0) {
 $0 = $0 | 0; //@line 1571
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 1572
 sp = STACKTOP; //@line 1573
 STACKTOP = STACKTOP + 16 | 0; //@line 1574
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1574
 $1 = $0; //@line 1575
 $2 = $1; //@line 1576
 $3 = $2 + 4 | 0; //@line 1577
 $4 = SAFE_HEAP_LOAD($3 | 0, 4, 0) | 0 | 0; //@line 1578
 $5 = ($4 | 0) != (0 | 0); //@line 1579
 if (!$5) {
  STACKTOP = sp; //@line 1581
  return;
 }
 $6 = $2 + 4 | 0; //@line 1583
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 1584
 __ZNSt3__219__shared_weak_count16__release_sharedEv($7); //@line 1585
 STACKTOP = sp; //@line 1586
 return;
}
function __ZN10emscripten3valaSEOS0_($0, $1) {
 $0 = $0 | 0; //@line 1483
 $1 = $1 | 0; //@line 1484
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0; //@line 1485
 sp = STACKTOP; //@line 1486
 STACKTOP = STACKTOP + 16 | 0; //@line 1487
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1487
 $2 = $0; //@line 1488
 $3 = $1; //@line 1489
 $4 = $2; //@line 1490
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 1491
 __emval_decref($5 | 0); //@line 1492
 $6 = $3; //@line 1493
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 1494
 SAFE_HEAP_STORE($4 | 0, $7 | 0, 4);
 $8 = $3; //@line 1496
 SAFE_HEAP_STORE($8 | 0, 0 | 0, 4);
 STACKTOP = sp; //@line 1498
 return $4 | 0; //@line 1498
}
function __ZNSt3__218__libcpp_refstringC2EPKc($0, $1) {
 $0 = $0 | 0; //@line 10411
 $1 = $1 | 0; //@line 10412
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0; //@line 10413
 sp = STACKTOP; //@line 10414
 $2 = _strlen($1) | 0; //@line 10415
 $3 = $2 + 13 | 0; //@line 10416
 $4 = __Znwj($3) | 0; //@line 10417
 SAFE_HEAP_STORE($4 | 0, $2 | 0, 4);
 $5 = $4 + 4 | 0; //@line 10419
 SAFE_HEAP_STORE($5 | 0, $2 | 0, 4);
 $6 = $4 + 8 | 0; //@line 10421
 SAFE_HEAP_STORE($6 | 0, 0 | 0, 4);
 $7 = __ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($4) | 0; //@line 10423
 $8 = $2 + 1 | 0; //@line 10424
 _memcpy($7 | 0, $1 | 0, $8 | 0) | 0; //@line 10425
 SAFE_HEAP_STORE($0 | 0, $7 | 0, 4);
 return;
}
function __ZNKSt3__221__basic_string_commonILb1EE20__throw_length_errorEv($0) {
 $0 = $0 | 0; //@line 9859
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 9860
 sp = STACKTOP; //@line 9861
 $1 = ___cxa_allocate_exception(8) | 0; //@line 9862
 __THREW__ = 0; //@line 9863
 invoke_vii(75, $1 | 0, 5791 | 0); //@line 9864
 $2 = __THREW__; //@line 9865
 __THREW__ = 0; //@line 9865
 $3 = $2 & 1; //@line 9866
 if ($3) {
  $4 = ___cxa_find_matching_catch_2() | 0; //@line 9868
  $5 = tempRet0; //@line 9869
  ___cxa_free_exception($1 | 0); //@line 9870
  ___resumeException($4 | 0); //@line 9871
 } else {
  SAFE_HEAP_STORE($1 | 0, 1344 | 0, 4);
  ___cxa_throw($1 | 0, 408 | 0, 35 | 0); //@line 9875
 }
}
function __ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib($0, $1, $2, $3, $4, $5) {
 $0 = $0 | 0; //@line 10644
 $1 = $1 | 0; //@line 10645
 $2 = $2 | 0; //@line 10646
 $3 = $3 | 0; //@line 10647
 $4 = $4 | 0; //@line 10648
 $5 = $5 | 0; //@line 10649
 var $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0; //@line 10650
 sp = STACKTOP; //@line 10651
 $6 = $1 + 8 | 0; //@line 10652
 $7 = SAFE_HEAP_LOAD($6 | 0, 4, 0) | 0 | 0; //@line 10653
 $8 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $7, $5) | 0; //@line 10654
 if ($8) {
  __ZNK10__cxxabiv117__class_type_info29process_static_type_above_dstEPNS_19__dynamic_cast_infoEPKvS4_i(0, $1, $2, $3, $4); //@line 10656
 }
 return;
}
function __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEEC2EOS9_($0, $1) {
 $0 = $0 | 0; //@line 1399
 $1 = $1 | 0; //@line 1400
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1401
 sp = STACKTOP; //@line 1402
 STACKTOP = STACKTOP + 16 | 0; //@line 1403
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1403
 $2 = $0; //@line 1404
 $3 = $1; //@line 1405
 $4 = $2; //@line 1406
 $5 = $3; //@line 1407
 __ZNSt3__228__libcpp_compressed_pair_impIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterELj0EEC2EOS9_($4, $5); //@line 1408
 STACKTOP = sp; //@line 1409
 return;
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__212basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEE8getTypesEv($0) {
 $0 = $0 | 0; //@line 2066
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 2067
 sp = STACKTOP; //@line 2068
 STACKTOP = STACKTOP + 16 | 0; //@line 2069
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2069
 $1 = $0; //@line 2070
 $2 = __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEEEE3getEv() | 0; //@line 2071
 STACKTOP = sp; //@line 2072
 return $2 | 0; //@line 2072
}
function ___cxa_get_globals_fast() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0; //@line 10534
 sp = STACKTOP; //@line 10535
 STACKTOP = STACKTOP + 16 | 0; //@line 10536
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10536
 $vararg_buffer = sp; //@line 10537
 $0 = _pthread_once(7128 | 0, 79 | 0) | 0; //@line 10538
 $1 = ($0 | 0) == 0; //@line 10539
 if ($1) {
  $2 = SAFE_HEAP_LOAD(1783 * 4 | 0, 4, 0) | 0 | 0; //@line 10541
  $3 = _pthread_getspecific($2 | 0) | 0; //@line 10542
  STACKTOP = sp; //@line 10543
  return $3 | 0; //@line 10543
 } else {
  _abort_message(6082, $vararg_buffer); //@line 10545
 }
 return 0 | 0; //@line 10548
}
function __ZNK10__cxxabiv117__class_type_info29process_static_type_below_dstEPNS_19__dynamic_cast_infoEPKvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 10782
 $1 = $1 | 0; //@line 10783
 $2 = $2 | 0; //@line 10784
 $3 = $3 | 0; //@line 10785
 var $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, $9 = 0, label = 0, sp = 0; //@line 10786
 sp = STACKTOP; //@line 10787
 $4 = $1 + 4 | 0; //@line 10788
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 10789
 $6 = ($5 | 0) == ($2 | 0); //@line 10790
 if ($6) {
  $7 = $1 + 28 | 0; //@line 10792
  $8 = SAFE_HEAP_LOAD($7 | 0, 4, 0) | 0 | 0; //@line 10793
  $9 = ($8 | 0) == 1; //@line 10794
  if (!$9) {
   SAFE_HEAP_STORE($7 | 0, $3 | 0, 4);
  }
 }
 return;
}
function __ZNSt3__214__shared_count16__release_sharedEv($0) {
 $0 = $0 | 0; //@line 9769
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 9770
 sp = STACKTOP; //@line 9771
 $1 = $0 + 4 | 0; //@line 9772
 $2 = __ZNSt3__212_GLOBAL__N_19decrementIlEET_RS2_($1) | 0; //@line 9773
 $3 = ($2 | 0) == -1; //@line 9774
 if ($3) {
  $4 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 9776
  $5 = $4 + 8 | 0; //@line 9777
  $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 9778
  FUNCTION_TABLE_vi[(SAFE_FT_MASK($6 | 0, 127 | 0) | 0) & 127]($0); //@line 9779
  $$0 = 1; //@line 9780
 } else {
  $$0 = 0; //@line 9782
 }
 return $$0 | 0; //@line 9784
}
function ___stdio_close($0) {
 $0 = $0 | 0; //@line 3027
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $vararg_buffer = 0, label = 0, sp = 0; //@line 3028
 sp = STACKTOP; //@line 3029
 STACKTOP = STACKTOP + 16 | 0; //@line 3030
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 3030
 $vararg_buffer = sp; //@line 3031
 $1 = $0 + 60 | 0; //@line 3032
 $2 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 3033
 $3 = _dummy_738($2) | 0; //@line 3034
 SAFE_HEAP_STORE($vararg_buffer | 0, $3 | 0, 4);
 $4 = ___syscall6(6, $vararg_buffer | 0) | 0; //@line 3036
 $5 = ___syscall_ret($4) | 0; //@line 3037
 STACKTOP = sp; //@line 3038
 return $5 | 0; //@line 3038
}
function SAFE_HEAP_LOAD(dest, bytes, unsigned) {
 dest = dest | 0; //@line 70
 bytes = bytes | 0; //@line 71
 unsigned = unsigned | 0; //@line 72
 if ((dest | 0) <= 0) segfault(); //@line 73
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(); //@line 74
 if ((bytes | 0) == 4) {
  if (dest & 3) alignfault(); //@line 76
  return HEAP32[dest >> 2] | 0; //@line 77
 } else if ((bytes | 0) == 1) {
  if (unsigned) {
   return HEAPU8[dest >> 0] | 0; //@line 80
  } else {
   return HEAP8[dest >> 0] | 0; //@line 82
  }
 }
 if (dest & 1) alignfault(); //@line 85
 if (unsigned) return HEAPU16[dest >> 1] | 0; //@line 86
 return HEAP16[dest >> 1] | 0; //@line 87
}
function __ZNSt3__217__compressed_pairINS0_IP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEEENS_9allocatorIS1_EEED2Ev($0) {
 $0 = $0 | 0; //@line 1441
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1442
 sp = STACKTOP; //@line 1443
 STACKTOP = STACKTOP + 16 | 0; //@line 1444
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1444
 $1 = $0; //@line 1445
 $2 = $1; //@line 1446
 __ZNSt3__228__libcpp_compressed_pair_impINS_17__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS2_EEE11val_deleterEEENS_9allocatorIS2_EELj2EED2Ev($2); //@line 1447
 STACKTOP = sp; //@line 1448
 return;
}
function __ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv($0) {
 $0 = $0 | 0; //@line 11143
 var $1 = 0, $2 = 0, $3 = 0, $vararg_buffer = 0, label = 0, sp = 0; //@line 11144
 sp = STACKTOP; //@line 11145
 STACKTOP = STACKTOP + 16 | 0; //@line 11146
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 11146
 $vararg_buffer = sp; //@line 11147
 _free($0); //@line 11148
 $1 = SAFE_HEAP_LOAD(1783 * 4 | 0, 4, 0) | 0 | 0; //@line 11149
 $2 = _pthread_setspecific($1 | 0, 0 | 0) | 0; //@line 11150
 $3 = ($2 | 0) == 0; //@line 11151
 if ($3) {
  STACKTOP = sp; //@line 11153
  return;
 } else {
  _abort_message(6181, $vararg_buffer); //@line 11155
 }
}
function __ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEED0Ev($0) {
 $0 = $0 | 0; //@line 1248
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1249
 sp = STACKTOP; //@line 1250
 STACKTOP = STACKTOP + 16 | 0; //@line 1251
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1251
 $1 = $0; //@line 1252
 $2 = $1; //@line 1253
 __ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEED2Ev($2); //@line 1254
 __ZdlPv($2); //@line 1255
 STACKTOP = sp; //@line 1256
 return;
}
function __ZN10emscripten3valC2ERKS0_($0, $1) {
 $0 = $0 | 0; //@line 1196
 $1 = $1 | 0; //@line 1197
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 1198
 sp = STACKTOP; //@line 1199
 STACKTOP = STACKTOP + 16 | 0; //@line 1200
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1200
 $2 = $0; //@line 1201
 $3 = $1; //@line 1202
 $4 = $2; //@line 1203
 $5 = $3; //@line 1204
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 1205
 SAFE_HEAP_STORE($4 | 0, $6 | 0, 4);
 $7 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 1207
 __emval_incref($7 | 0); //@line 1208
 STACKTOP = sp; //@line 1209
 return;
}
function __ZN10emscripten3valclIJEEES0_DpOT_($0) {
 $0 = $0 | 0; //@line 1461
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1462
 sp = STACKTOP; //@line 1463
 STACKTOP = STACKTOP + 16 | 0; //@line 1464
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1464
 $1 = sp + 4 | 0; //@line 1465
 $2 = $0; //@line 1466
 $3 = $2; //@line 1467
 $4 = __ZNK10emscripten3val12internalCallIPFPNS_8internal7_EM_VALES4_jPKPKvS6_EJEEES0_T_DpOT0_($3, 72) | 0; //@line 1468
 SAFE_HEAP_STORE($1 | 0, $4 | 0, 4);
 $5 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 1470
 STACKTOP = sp; //@line 1471
 return $5 | 0; //@line 1471
}
function __ZNSt3__228__libcpp_compressed_pair_impINS_17__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS2_EEE11val_deleterEEENS_9allocatorIS2_EELj2EED2Ev($0) {
 $0 = $0 | 0; //@line 1451
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1452
 sp = STACKTOP; //@line 1453
 STACKTOP = STACKTOP + 16 | 0; //@line 1454
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1454
 $1 = $0; //@line 1455
 $2 = $1; //@line 1456
 __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($2); //@line 1457
 STACKTOP = sp; //@line 1458
 return;
}
function __ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi($0, $1, $2, $3) {
 $0 = $0 | 0; //@line 10721
 $1 = $1 | 0; //@line 10722
 $2 = $2 | 0; //@line 10723
 $3 = $3 | 0; //@line 10724
 var $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 10725
 sp = STACKTOP; //@line 10726
 $4 = $1 + 8 | 0; //@line 10727
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 10728
 $6 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $5, 0) | 0; //@line 10729
 if ($6) {
  __ZNK10__cxxabiv117__class_type_info24process_found_base_classEPNS_19__dynamic_cast_infoEPvi(0, $1, $2, $3); //@line 10731
 }
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewItEEvPKc($0) {
 $0 = $0 | 0; //@line 2569
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2570
 sp = STACKTOP; //@line 2571
 STACKTOP = STACKTOP + 16 | 0; //@line 2572
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2572
 $1 = $0; //@line 2573
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewItEEE3getEv() | 0; //@line 2574
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexItEENS_15TypedArrayIndexEv() | 0; //@line 2575
 $4 = $1; //@line 2576
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2577
 STACKTOP = sp; //@line 2578
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIsEEvPKc($0) {
 $0 = $0 | 0; //@line 2557
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2558
 sp = STACKTOP; //@line 2559
 STACKTOP = STACKTOP + 16 | 0; //@line 2560
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2560
 $1 = $0; //@line 2561
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIsEEE3getEv() | 0; //@line 2562
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIsEENS_15TypedArrayIndexEv() | 0; //@line 2563
 $4 = $1; //@line 2564
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2565
 STACKTOP = sp; //@line 2566
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewImEEvPKc($0) {
 $0 = $0 | 0; //@line 2617
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2618
 sp = STACKTOP; //@line 2619
 STACKTOP = STACKTOP + 16 | 0; //@line 2620
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2620
 $1 = $0; //@line 2621
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewImEEE3getEv() | 0; //@line 2622
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexImEENS_15TypedArrayIndexEv() | 0; //@line 2623
 $4 = $1; //@line 2624
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2625
 STACKTOP = sp; //@line 2626
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIlEEvPKc($0) {
 $0 = $0 | 0; //@line 2605
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2606
 sp = STACKTOP; //@line 2607
 STACKTOP = STACKTOP + 16 | 0; //@line 2608
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2608
 $1 = $0; //@line 2609
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIlEEE3getEv() | 0; //@line 2610
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIlEENS_15TypedArrayIndexEv() | 0; //@line 2611
 $4 = $1; //@line 2612
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2613
 STACKTOP = sp; //@line 2614
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIjEEvPKc($0) {
 $0 = $0 | 0; //@line 2593
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2594
 sp = STACKTOP; //@line 2595
 STACKTOP = STACKTOP + 16 | 0; //@line 2596
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2596
 $1 = $0; //@line 2597
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIjEEE3getEv() | 0; //@line 2598
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIjEENS_15TypedArrayIndexEv() | 0; //@line 2599
 $4 = $1; //@line 2600
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2601
 STACKTOP = sp; //@line 2602
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIiEEvPKc($0) {
 $0 = $0 | 0; //@line 2581
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2582
 sp = STACKTOP; //@line 2583
 STACKTOP = STACKTOP + 16 | 0; //@line 2584
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2584
 $1 = $0; //@line 2585
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIiEEE3getEv() | 0; //@line 2586
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIiEENS_15TypedArrayIndexEv() | 0; //@line 2587
 $4 = $1; //@line 2588
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2589
 STACKTOP = sp; //@line 2590
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIhEEvPKc($0) {
 $0 = $0 | 0; //@line 2545
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2546
 sp = STACKTOP; //@line 2547
 STACKTOP = STACKTOP + 16 | 0; //@line 2548
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2548
 $1 = $0; //@line 2549
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIhEEE3getEv() | 0; //@line 2550
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIhEENS_15TypedArrayIndexEv() | 0; //@line 2551
 $4 = $1; //@line 2552
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2553
 STACKTOP = sp; //@line 2554
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIfEEvPKc($0) {
 $0 = $0 | 0; //@line 2629
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2630
 sp = STACKTOP; //@line 2631
 STACKTOP = STACKTOP + 16 | 0; //@line 2632
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2632
 $1 = $0; //@line 2633
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIfEEE3getEv() | 0; //@line 2634
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIfEENS_15TypedArrayIndexEv() | 0; //@line 2635
 $4 = $1; //@line 2636
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2637
 STACKTOP = sp; //@line 2638
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIeEEvPKc($0) {
 $0 = $0 | 0; //@line 2653
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2654
 sp = STACKTOP; //@line 2655
 STACKTOP = STACKTOP + 16 | 0; //@line 2656
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2656
 $1 = $0; //@line 2657
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIeEEE3getEv() | 0; //@line 2658
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIeEENS_15TypedArrayIndexEv() | 0; //@line 2659
 $4 = $1; //@line 2660
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2661
 STACKTOP = sp; //@line 2662
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIdEEvPKc($0) {
 $0 = $0 | 0; //@line 2641
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2642
 sp = STACKTOP; //@line 2643
 STACKTOP = STACKTOP + 16 | 0; //@line 2644
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2644
 $1 = $0; //@line 2645
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIdEEE3getEv() | 0; //@line 2646
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIdEENS_15TypedArrayIndexEv() | 0; //@line 2647
 $4 = $1; //@line 2648
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2649
 STACKTOP = sp; //@line 2650
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIcEEvPKc($0) {
 $0 = $0 | 0; //@line 2521
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2522
 sp = STACKTOP; //@line 2523
 STACKTOP = STACKTOP + 16 | 0; //@line 2524
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2524
 $1 = $0; //@line 2525
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIcEEE3getEv() | 0; //@line 2526
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIcEENS_15TypedArrayIndexEv() | 0; //@line 2527
 $4 = $1; //@line 2528
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2529
 STACKTOP = sp; //@line 2530
 return;
}
function __ZN12_GLOBAL__N_1L20register_memory_viewIaEEvPKc($0) {
 $0 = $0 | 0; //@line 2533
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 2534
 sp = STACKTOP; //@line 2535
 STACKTOP = STACKTOP + 16 | 0; //@line 2536
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2536
 $1 = $0; //@line 2537
 $2 = __ZN10emscripten8internal6TypeIDINS_11memory_viewIaEEE3getEv() | 0; //@line 2538
 $3 = __ZN12_GLOBAL__N_118getTypedArrayIndexIaEENS_15TypedArrayIndexEv() | 0; //@line 2539
 $4 = $1; //@line 2540
 __embind_register_memory_view($2 | 0, $3 | 0, $4 | 0); //@line 2541
 STACKTOP = sp; //@line 2542
 return;
}
function ___lctrans_impl($0, $1) {
 $0 = $0 | 0; //@line 6113
 $1 = $1 | 0; //@line 6114
 var $$0 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, $8 = 0, label = 0, sp = 0; //@line 6115
 sp = STACKTOP; //@line 6116
 $2 = ($1 | 0) == (0 | 0); //@line 6117
 if ($2) {
  $$0 = 0; //@line 6119
 } else {
  $3 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 6121
  $4 = $1 + 4 | 0; //@line 6122
  $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 6123
  $6 = ___mo_lookup($3, $5, $0) | 0; //@line 6124
  $$0 = $6; //@line 6125
 }
 $7 = ($$0 | 0) != (0 | 0); //@line 6127
 $8 = $7 ? $$0 : $0; //@line 6128
 return $8 | 0; //@line 6129
}
function __ZN12_GLOBAL__N_1L16register_integerIsEEvPKc($0) {
 $0 = $0 | 0; //@line 2405
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 2406
 sp = STACKTOP; //@line 2407
 STACKTOP = STACKTOP + 16 | 0; //@line 2408
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2408
 $1 = $0; //@line 2409
 $2 = __ZN10emscripten8internal6TypeIDIsE3getEv() | 0; //@line 2410
 $3 = $1; //@line 2411
 $4 = -32768 << 16 >> 16; //@line 2412
 $5 = 32767 << 16 >> 16; //@line 2413
 __embind_register_integer($2 | 0, $3 | 0, 2, $4 | 0, $5 | 0); //@line 2414
 STACKTOP = sp; //@line 2415
 return;
}
function __ZN10emscripten3valC2EOS0_($0, $1) {
 $0 = $0 | 0; //@line 1383
 $1 = $1 | 0; //@line 1384
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 1385
 sp = STACKTOP; //@line 1386
 STACKTOP = STACKTOP + 16 | 0; //@line 1387
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1387
 $2 = $0; //@line 1388
 $3 = $1; //@line 1389
 $4 = $2; //@line 1390
 $5 = $3; //@line 1391
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 1392
 SAFE_HEAP_STORE($4 | 0, $6 | 0, 4);
 $7 = $3; //@line 1394
 SAFE_HEAP_STORE($7 | 0, 0 | 0, 4);
 STACKTOP = sp; //@line 1396
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerIcEEvPKc($0) {
 $0 = $0 | 0; //@line 2366
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 2367
 sp = STACKTOP; //@line 2368
 STACKTOP = STACKTOP + 16 | 0; //@line 2369
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2369
 $1 = $0; //@line 2370
 $2 = __ZN10emscripten8internal6TypeIDIcE3getEv() | 0; //@line 2371
 $3 = $1; //@line 2372
 $4 = -128 << 24 >> 24; //@line 2373
 $5 = 127 << 24 >> 24; //@line 2374
 __embind_register_integer($2 | 0, $3 | 0, 1, $4 | 0, $5 | 0); //@line 2375
 STACKTOP = sp; //@line 2376
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerIaEEvPKc($0) {
 $0 = $0 | 0; //@line 2379
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 2380
 sp = STACKTOP; //@line 2381
 STACKTOP = STACKTOP + 16 | 0; //@line 2382
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2382
 $1 = $0; //@line 2383
 $2 = __ZN10emscripten8internal6TypeIDIaE3getEv() | 0; //@line 2384
 $3 = $1; //@line 2385
 $4 = -128 << 24 >> 24; //@line 2386
 $5 = 127 << 24 >> 24; //@line 2387
 __embind_register_integer($2 | 0, $3 | 0, 1, $4 | 0, $5 | 0); //@line 2388
 STACKTOP = sp; //@line 2389
 return;
}
function __ZN10emscripten8internal11BindingTypeINS_3valEE10toWireTypeERKS2_($0) {
 $0 = $0 | 0; //@line 1114
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1115
 sp = STACKTOP; //@line 1116
 STACKTOP = STACKTOP + 16 | 0; //@line 1117
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1117
 $1 = $0; //@line 1118
 $2 = $1; //@line 1119
 $3 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 1120
 __emval_incref($3 | 0); //@line 1121
 $4 = $1; //@line 1122
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 1123
 STACKTOP = sp; //@line 1124
 return $5 | 0; //@line 1124
}
function __ZNSt3__228__libcpp_compressed_pair_impIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterELj0EED2Ev($0) {
 $0 = $0 | 0; //@line 1430
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 1431
 sp = STACKTOP; //@line 1432
 STACKTOP = STACKTOP + 16 | 0; //@line 1433
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1433
 $1 = $0; //@line 1434
 $2 = $1; //@line 1435
 $3 = $2 + 4 | 0; //@line 1436
 __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($3); //@line 1437
 STACKTOP = sp; //@line 1438
 return;
}
function __ZNSt11logic_errorC2EPKc($0, $1) {
 $0 = $0 | 0; //@line 10437
 $1 = $1 | 0; //@line 10438
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 10439
 sp = STACKTOP; //@line 10440
 SAFE_HEAP_STORE($0 | 0, 1324 | 0, 4);
 $2 = $0 + 4 | 0; //@line 10442
 __THREW__ = 0; //@line 10443
 invoke_vii(78, $2 | 0, $1 | 0); //@line 10444
 $3 = __THREW__; //@line 10445
 __THREW__ = 0; //@line 10445
 $4 = $3 & 1; //@line 10446
 if ($4) {
  $5 = ___cxa_find_matching_catch_2() | 0; //@line 10448
  $6 = tempRet0; //@line 10449
  ___resumeException($5 | 0); //@line 10450
 } else {
  return;
 }
}
function __ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEED2Ev($0) {
 $0 = $0 | 0; //@line 1225
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1226
 sp = STACKTOP; //@line 1227
 STACKTOP = STACKTOP + 16 | 0; //@line 1228
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1228
 $1 = $0; //@line 1229
 $2 = $1; //@line 1230
 __ZNSt3__228__libcpp_compressed_pair_impIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterELj0EED2Ev($2); //@line 1231
 STACKTOP = sp; //@line 1232
 return;
}
function __ZN10emscripten8internal12WireTypePackIJEEC2Ev($0) {
 $0 = $0 | 0; //@line 1524
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1525
 sp = STACKTOP; //@line 1526
 STACKTOP = STACKTOP + 16 | 0; //@line 1527
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1527
 $3 = sp; //@line 1528
 $2 = $0; //@line 1529
 $4 = $2; //@line 1530
 $1 = $4; //@line 1531
 $5 = $1; //@line 1532
 SAFE_HEAP_STORE($3 | 0, $5 | 0, 4);
 __ZN10emscripten8internal21writeGenericWireTypesERPNS0_15GenericWireTypeE($3); //@line 1534
 STACKTOP = sp; //@line 1535
 return;
}
function __ZN10emscripten8internal14raw_destructorINSt3__210shared_ptrI13StringFactoryEEEEvPT_($0) {
 $0 = $0 | 0; //@line 692
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 693
 sp = STACKTOP; //@line 694
 STACKTOP = STACKTOP + 16 | 0; //@line 695
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 695
 $1 = $0; //@line 696
 $2 = $1; //@line 697
 $3 = ($2 | 0) == (0 | 0); //@line 698
 if ($3) {
  STACKTOP = sp; //@line 700
  return;
 }
 __ZNSt3__210shared_ptrI13StringFactoryED2Ev($2); //@line 702
 __ZdlPv($2); //@line 703
 STACKTOP = sp; //@line 704
 return;
}
function __ZNSt3__219__shared_weak_count14__release_weakEv($0) {
 $0 = $0 | 0; //@line 9805
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 9806
 sp = STACKTOP; //@line 9807
 $1 = $0 + 8 | 0; //@line 9808
 $2 = __ZNSt3__212_GLOBAL__N_19decrementIlEET_RS2_($1) | 0; //@line 9809
 $3 = ($2 | 0) == -1; //@line 9810
 if ($3) {
  $4 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 9812
  $5 = $4 + 16 | 0; //@line 9813
  $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 9814
  FUNCTION_TABLE_vi[(SAFE_FT_MASK($6 | 0, 127 | 0) | 0) & 127]($0); //@line 9815
 }
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerItEEvPKc($0) {
 $0 = $0 | 0; //@line 2418
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 2419
 sp = STACKTOP; //@line 2420
 STACKTOP = STACKTOP + 16 | 0; //@line 2421
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2421
 $1 = $0; //@line 2422
 $2 = __ZN10emscripten8internal6TypeIDItE3getEv() | 0; //@line 2423
 $3 = $1; //@line 2424
 $4 = 0; //@line 2425
 $5 = 65535; //@line 2426
 __embind_register_integer($2 | 0, $3 | 0, 2, $4 | 0, $5 | 0); //@line 2427
 STACKTOP = sp; //@line 2428
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerIhEEvPKc($0) {
 $0 = $0 | 0; //@line 2392
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 2393
 sp = STACKTOP; //@line 2394
 STACKTOP = STACKTOP + 16 | 0; //@line 2395
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2395
 $1 = $0; //@line 2396
 $2 = __ZN10emscripten8internal6TypeIDIhE3getEv() | 0; //@line 2397
 $3 = $1; //@line 2398
 $4 = 0; //@line 2399
 $5 = 255; //@line 2400
 __embind_register_integer($2 | 0, $3 | 0, 1, $4 | 0, $5 | 0); //@line 2401
 STACKTOP = sp; //@line 2402
 return;
}
function __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($0) {
 $0 = $0 | 0; //@line 11305
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 11306
 sp = STACKTOP; //@line 11307
 $1 = __ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($0) | 0; //@line 11308
 $2 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 11309
 SAFE_HEAP_STORE($1 | 0, $2 + -1 | 0 | 0, 4);
 $3 = $2 + -1 | 0; //@line 11310
 $4 = ($3 | 0) < 0; //@line 11311
 if ($4) {
  $5 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11313
  $6 = $5 + -12 | 0; //@line 11314
  __ZdlPv($6); //@line 11315
 }
 return;
}
function ___getTypeName($0) {
 $0 = $0 | 0; //@line 3008
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, $7 = 0, label = 0, sp = 0; //@line 3009
 sp = STACKTOP; //@line 3010
 STACKTOP = STACKTOP + 16 | 0; //@line 3011
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 3011
 $2 = $0; //@line 3012
 $3 = $2; //@line 3013
 $1 = $3; //@line 3014
 $4 = $1; //@line 3015
 $5 = $4 + 4 | 0; //@line 3016
 $6 = SAFE_HEAP_LOAD($5 | 0, 4, 0) | 0 | 0; //@line 3017
 $7 = ___strdup($6) | 0; //@line 3018
 STACKTOP = sp; //@line 3019
 return $7 | 0; //@line 3019
}
function ___uremdi3($a$0, $a$1, $b$0, $b$1) {
 $a$0 = $a$0 | 0; //@line 12426
 $a$1 = $a$1 | 0; //@line 12427
 $b$0 = $b$0 | 0; //@line 12428
 $b$1 = $b$1 | 0; //@line 12429
 var $rem = 0, __stackBase__ = 0; //@line 12430
 __stackBase__ = STACKTOP; //@line 12431
 STACKTOP = STACKTOP + 16 | 0; //@line 12432
 $rem = __stackBase__ | 0; //@line 12433
 ___udivmoddi4($a$0, $a$1, $b$0, $b$1, $rem) | 0; //@line 12434
 STACKTOP = __stackBase__; //@line 12435
 return (tempRet0 = SAFE_HEAP_LOAD($rem + 4 | 0, 4, 0) | 0 | 0, SAFE_HEAP_LOAD($rem | 0, 4, 0) | 0 | 0) | 0; //@line 12436
}
function __ZN10emscripten3val14take_ownershipEPNS_8internal7_EM_VALE($0) {
 $0 = $0 | 0; //@line 718
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 719
 sp = STACKTOP; //@line 720
 STACKTOP = STACKTOP + 16 | 0; //@line 721
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 721
 $1 = sp + 4 | 0; //@line 722
 $2 = $0; //@line 723
 $3 = $2; //@line 724
 __ZN10emscripten3valC2EPNS_8internal7_EM_VALE($1, $3); //@line 725
 $4 = SAFE_HEAP_LOAD($1 | 0, 4, 0) | 0 | 0; //@line 726
 STACKTOP = sp; //@line 727
 return $4 | 0; //@line 727
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2ERKS6_($0, $1) {
 $0 = $0 | 0; //@line 1140
 $1 = $1 | 0; //@line 1141
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1142
 sp = STACKTOP; //@line 1143
 STACKTOP = STACKTOP + 16 | 0; //@line 1144
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1144
 $2 = $0; //@line 1145
 $3 = $1; //@line 1146
 $4 = $2; //@line 1147
 $5 = $3; //@line 1148
 __ZN10emscripten3valC2ERKS0_($4, $5); //@line 1149
 STACKTOP = sp; //@line 1150
 return;
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2EOS6_($0, $1) {
 $0 = $0 | 0; //@line 1212
 $1 = $1 | 0; //@line 1213
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1214
 sp = STACKTOP; //@line 1215
 STACKTOP = STACKTOP + 16 | 0; //@line 1216
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1216
 $2 = $0; //@line 1217
 $3 = $1; //@line 1218
 $4 = $2; //@line 1219
 $5 = $3; //@line 1220
 __ZN10emscripten3valC2EOS0_($4, $5); //@line 1221
 STACKTOP = sp; //@line 1222
 return;
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__210shared_ptrI13StringFactoryEEEE8getTypesEv($0) {
 $0 = $0 | 0; //@line 579
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 580
 sp = STACKTOP; //@line 581
 STACKTOP = STACKTOP + 16 | 0; //@line 582
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 582
 $1 = $0; //@line 583
 $2 = __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJNSt3__210shared_ptrI13StringFactoryEEEEEE3getEv() | 0; //@line 584
 STACKTOP = sp; //@line 585
 return $2 | 0; //@line 585
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE14construct_nullEv() {
 var $0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 600
 sp = STACKTOP; //@line 601
 STACKTOP = STACKTOP + 16 | 0; //@line 602
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 602
 $1 = __Znwj(8) | 0; //@line 603
 $0 = $1; //@line 604
 $2 = $0; //@line 605
 SAFE_HEAP_STORE($2 | 0, 0 | 0, 4);
 $3 = $2 + 4 | 0; //@line 607
 SAFE_HEAP_STORE($3 | 0, 0 | 0, 4);
 STACKTOP = sp; //@line 609
 return $1 | 0; //@line 609
}
function __ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEE16__on_zero_sharedEv($0) {
 $0 = $0 | 0; //@line 1962
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, $6 = 0, label = 0, sp = 0; //@line 1963
 sp = STACKTOP; //@line 1964
 STACKTOP = STACKTOP + 16 | 0; //@line 1965
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1965
 $3 = $0; //@line 1966
 $4 = $3; //@line 1967
 $5 = $4 + 12 | 0; //@line 1968
 $2 = $5; //@line 1969
 $6 = $2; //@line 1970
 $1 = $6; //@line 1971
 STACKTOP = sp; //@line 1972
 return;
}
function _llvm_cttz_i32(x) {
 x = x | 0; //@line 12171
 var ret = 0; //@line 12172
 ret = SAFE_HEAP_LOAD(cttz_i8 + (x & 255) | 0, 1, 0) | 0; //@line 12173
 if ((ret | 0) < 8) return ret | 0; //@line 12174
 ret = SAFE_HEAP_LOAD(cttz_i8 + (x >> 8 & 255) | 0, 1, 0) | 0; //@line 12175
 if ((ret | 0) < 8) return ret + 8 | 0; //@line 12176
 ret = SAFE_HEAP_LOAD(cttz_i8 + (x >> 16 & 255) | 0, 1, 0) | 0; //@line 12177
 if ((ret | 0) < 8) return ret + 16 | 0; //@line 12178
 return (SAFE_HEAP_LOAD(cttz_i8 + (x >>> 24) | 0, 1, 0) | 0) + 24 | 0; //@line 12179
}
function _abort_message($0, $varargs) {
 $0 = $0 | 0; //@line 10551
 $varargs = $varargs | 0; //@line 10552
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 10553
 sp = STACKTOP; //@line 10554
 STACKTOP = STACKTOP + 16 | 0; //@line 10555
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 10555
 $1 = sp; //@line 10556
 SAFE_HEAP_STORE($1 | 0, $varargs | 0, 4);
 $2 = SAFE_HEAP_LOAD(167 * 4 | 0, 4, 0) | 0 | 0; //@line 10558
 _vfprintf($2, $0, $1) | 0; //@line 10559
 _fputc(10, $2) | 0; //@line 10560
 _abort(); //@line 10561
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE3getERKS4_($0) {
 $0 = $0 | 0; //@line 588
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 589
 sp = STACKTOP; //@line 590
 STACKTOP = STACKTOP + 16 | 0; //@line 591
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 591
 $2 = $0; //@line 592
 $3 = $2; //@line 593
 $1 = $3; //@line 594
 $4 = $1; //@line 595
 $5 = SAFE_HEAP_LOAD($4 | 0, 4, 0) | 0 | 0; //@line 596
 STACKTOP = sp; //@line 597
 return $5 | 0; //@line 597
}
function _snprintf($0, $1, $2, $varargs) {
 $0 = $0 | 0; //@line 6482
 $1 = $1 | 0; //@line 6483
 $2 = $2 | 0; //@line 6484
 $varargs = $varargs | 0; //@line 6485
 var $3 = 0, $4 = 0, label = 0, sp = 0; //@line 6486
 sp = STACKTOP; //@line 6487
 STACKTOP = STACKTOP + 16 | 0; //@line 6488
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 6488
 $3 = sp; //@line 6489
 SAFE_HEAP_STORE($3 | 0, $varargs | 0, 4);
 $4 = _vsnprintf($0, $1, $2, $3) | 0; //@line 6491
 STACKTOP = sp; //@line 6492
 return $4 | 0; //@line 6492
}
function __ZNK10__cxxabiv117__pbase_type_info9can_catchEPKNS_16__shim_type_infoERPv($0, $1, $2) {
 $0 = $0 | 0; //@line 11468
 $1 = $1 | 0; //@line 11469
 $2 = $2 | 0; //@line 11470
 var $$0 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 11471
 sp = STACKTOP; //@line 11472
 $3 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $1, 0) | 0; //@line 11473
 if ($3) {
  $$0 = 1; //@line 11475
 } else {
  $4 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($1, 480, 0) | 0; //@line 11477
  $$0 = $4; //@line 11478
 }
 return $$0 | 0; //@line 11480
}
function __ZN10__cxxabiv112_GLOBAL__N_110construct_Ev() {
 var $0 = 0, $1 = 0, $vararg_buffer = 0, label = 0, sp = 0; //@line 11129
 sp = STACKTOP; //@line 11130
 STACKTOP = STACKTOP + 16 | 0; //@line 11131
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 11131
 $vararg_buffer = sp; //@line 11132
 $0 = _pthread_key_create(7132 | 0, 80 | 0) | 0; //@line 11133
 $1 = ($0 | 0) == 0; //@line 11134
 if ($1) {
  STACKTOP = sp; //@line 11136
  return;
 } else {
  _abort_message(6131, $vararg_buffer); //@line 11138
 }
}
function __ZN12_GLOBAL__N_1L16register_integerIlEEvPKc($0) {
 $0 = $0 | 0; //@line 2453
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2454
 sp = STACKTOP; //@line 2455
 STACKTOP = STACKTOP + 16 | 0; //@line 2456
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2456
 $1 = $0; //@line 2457
 $2 = __ZN10emscripten8internal6TypeIDIlE3getEv() | 0; //@line 2458
 $3 = $1; //@line 2459
 __embind_register_integer($2 | 0, $3 | 0, 4, -2147483648, 2147483647); //@line 2460
 STACKTOP = sp; //@line 2461
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerIiEEvPKc($0) {
 $0 = $0 | 0; //@line 2431
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2432
 sp = STACKTOP; //@line 2433
 STACKTOP = STACKTOP + 16 | 0; //@line 2434
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2434
 $1 = $0; //@line 2435
 $2 = __ZN10emscripten8internal6TypeIDIiE3getEv() | 0; //@line 2436
 $3 = $1; //@line 2437
 __embind_register_integer($2 | 0, $3 | 0, 4, -2147483648, 2147483647); //@line 2438
 STACKTOP = sp; //@line 2439
 return;
}
function SAFE_HEAP_STORE(dest, value, bytes) {
 dest = dest | 0; //@line 40
 value = value | 0; //@line 41
 bytes = bytes | 0; //@line 42
 if ((dest | 0) <= 0) segfault(); //@line 43
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(); //@line 44
 if ((bytes | 0) == 4) {
  if (dest & 3) alignfault(); //@line 46
  HEAP32[dest >> 2] = value; //@line 47
 } else if ((bytes | 0) == 1) {
  HEAP8[dest >> 0] = value; //@line 49
 } else {
  if (dest & 1) alignfault(); //@line 51
  HEAP16[dest >> 1] = value; //@line 52
 }
}
function __ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEED0Ev($0) {
 $0 = $0 | 0; //@line 1951
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1952
 sp = STACKTOP; //@line 1953
 STACKTOP = STACKTOP + 16 | 0; //@line 1954
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1954
 $1 = $0; //@line 1955
 $2 = $1; //@line 1956
 __ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEED2Ev($2); //@line 1957
 __ZdlPv($2); //@line 1958
 STACKTOP = sp; //@line 1959
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerImEEvPKc($0) {
 $0 = $0 | 0; //@line 2464
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2465
 sp = STACKTOP; //@line 2466
 STACKTOP = STACKTOP + 16 | 0; //@line 2467
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2467
 $1 = $0; //@line 2468
 $2 = __ZN10emscripten8internal6TypeIDImE3getEv() | 0; //@line 2469
 $3 = $1; //@line 2470
 __embind_register_integer($2 | 0, $3 | 0, 4, 0, -1); //@line 2471
 STACKTOP = sp; //@line 2472
 return;
}
function __ZN12_GLOBAL__N_1L16register_integerIjEEvPKc($0) {
 $0 = $0 | 0; //@line 2442
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2443
 sp = STACKTOP; //@line 2444
 STACKTOP = STACKTOP + 16 | 0; //@line 2445
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2445
 $1 = $0; //@line 2446
 $2 = __ZN10emscripten8internal6TypeIDIjE3getEv() | 0; //@line 2447
 $3 = $1; //@line 2448
 __embind_register_integer($2 | 0, $3 | 0, 4, 0, -1); //@line 2449
 STACKTOP = sp; //@line 2450
 return;
}
function __ZN12_GLOBAL__N_1L14register_floatIfEEvPKc($0) {
 $0 = $0 | 0; //@line 2475
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2476
 sp = STACKTOP; //@line 2477
 STACKTOP = STACKTOP + 16 | 0; //@line 2478
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2478
 $1 = $0; //@line 2479
 $2 = __ZN10emscripten8internal6TypeIDIfE3getEv() | 0; //@line 2480
 $3 = $1; //@line 2481
 __embind_register_float($2 | 0, $3 | 0, 4); //@line 2482
 STACKTOP = sp; //@line 2483
 return;
}
function __ZN12_GLOBAL__N_1L14register_floatIdEEvPKc($0) {
 $0 = $0 | 0; //@line 2486
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 2487
 sp = STACKTOP; //@line 2488
 STACKTOP = STACKTOP + 16 | 0; //@line 2489
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2489
 $1 = $0; //@line 2490
 $2 = __ZN10emscripten8internal6TypeIDIdE3getEv() | 0; //@line 2491
 $3 = $1; //@line 2492
 __embind_register_float($2 | 0, $3 | 0, 8); //@line 2493
 STACKTOP = sp; //@line 2494
 return;
}
function __ZN10emscripten8internal13getActualTypeI13StringFactoryEEPKvPT_($0) {
 $0 = $0 | 0; //@line 448
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 449
 sp = STACKTOP; //@line 450
 STACKTOP = STACKTOP + 16 | 0; //@line 451
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 451
 $1 = $0; //@line 452
 $2 = $1; //@line 453
 $3 = __ZN10emscripten8internal14getLightTypeIDI13StringFactoryEEPKvRKT_($2) | 0; //@line 454
 STACKTOP = sp; //@line 455
 return $3 | 0; //@line 455
}
function __ZN10emscripten3valC2EPNS_8internal7_EM_VALE($0, $1) {
 $0 = $0 | 0; //@line 1018
 $1 = $1 | 0; //@line 1019
 var $2 = 0, $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 1020
 sp = STACKTOP; //@line 1021
 STACKTOP = STACKTOP + 16 | 0; //@line 1022
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1022
 $2 = $0; //@line 1023
 $3 = $1; //@line 1024
 $4 = $2; //@line 1025
 $5 = $3; //@line 1026
 SAFE_HEAP_STORE($4 | 0, $5 | 0, 4);
 STACKTOP = sp; //@line 1028
 return;
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2ENS_3valE($0, $1) {
 $0 = $0 | 0; //@line 730
 $1 = $1 | 0; //@line 731
 var $2 = 0, $3 = 0, label = 0, sp = 0; //@line 732
 sp = STACKTOP; //@line 733
 STACKTOP = STACKTOP + 16 | 0; //@line 734
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 734
 $2 = $0; //@line 735
 $3 = $2; //@line 736
 __ZN10emscripten3valC2IRS0_EEOT_($3, $1); //@line 737
 STACKTOP = sp; //@line 738
 return;
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJEE8getTypesEv($0) {
 $0 = $0 | 0; //@line 1546
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1547
 sp = STACKTOP; //@line 1548
 STACKTOP = STACKTOP + 16 | 0; //@line 1549
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1549
 $1 = $0; //@line 1550
 $2 = __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJEEEE3getEv() | 0; //@line 1551
 STACKTOP = sp; //@line 1552
 return $2 | 0; //@line 1552
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__212basic_stringIcNS4_11char_traitsIcEENS4_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEE8getCountEv($0) {
 $0 = $0 | 0; //@line 2058
 var $1 = 0, label = 0, sp = 0; //@line 2059
 sp = STACKTOP; //@line 2060
 STACKTOP = STACKTOP + 16 | 0; //@line 2061
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2061
 $1 = $0; //@line 2062
 STACKTOP = sp; //@line 2063
 return 2; //@line 2063
}
function __ZN10emscripten8internal14raw_destructorI13StringFactoryEEvPT_($0) {
 $0 = $0 | 0; //@line 468
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 469
 sp = STACKTOP; //@line 470
 STACKTOP = STACKTOP + 16 | 0; //@line 471
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 471
 $1 = $0; //@line 472
 $2 = $1; //@line 473
 $3 = ($2 | 0) == (0 | 0); //@line 474
 if (!$3) {
  __ZdlPv($2); //@line 476
 }
 STACKTOP = sp; //@line 478
 return;
}
function __ZNK10emscripten8internal12WireTypePackIJRNS_3valEEEcvPKvEv($0) {
 $0 = $0 | 0; //@line 1085
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 1086
 sp = STACKTOP; //@line 1087
 STACKTOP = STACKTOP + 16 | 0; //@line 1088
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1088
 $2 = $0; //@line 1089
 $3 = $2; //@line 1090
 $1 = $3; //@line 1091
 $4 = $1; //@line 1092
 STACKTOP = sp; //@line 1093
 return $4 | 0; //@line 1093
}
function SAFE_HEAP_STORE_D(dest, value, bytes) {
 dest = dest | 0; //@line 56
 value = +value; //@line 57
 bytes = bytes | 0; //@line 58
 if ((dest | 0) <= 0) segfault(); //@line 59
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(); //@line 60
 if ((bytes | 0) == 8) {
  if (dest & 7) alignfault(); //@line 62
  HEAPF64[dest >> 3] = value; //@line 63
 } else {
  if (dest & 3) alignfault(); //@line 65
  HEAPF32[dest >> 2] = value; //@line 66
 }
}
function __ZNK10emscripten8internal12WireTypePackIJEEcvPKvEv($0) {
 $0 = $0 | 0; //@line 1555
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 1556
 sp = STACKTOP; //@line 1557
 STACKTOP = STACKTOP + 16 | 0; //@line 1558
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1558
 $2 = $0; //@line 1559
 $3 = $2; //@line 1560
 $1 = $3; //@line 1561
 $4 = $1; //@line 1562
 STACKTOP = sp; //@line 1563
 return $4 | 0; //@line 1563
}
function __ZNSt3__211char_traitsIcE6assignEPcjc($0, $1, $2) {
 $0 = $0 | 0; //@line 9942
 $1 = $1 | 0; //@line 9943
 $2 = $2 | 0; //@line 9944
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 9945
 sp = STACKTOP; //@line 9946
 $3 = ($1 | 0) == 0; //@line 9947
 if (!$3) {
  $4 = __ZNSt3__211char_traitsIcE11to_int_typeEc($2) | 0; //@line 9949
  $5 = $4 & 255; //@line 9950
  _memset($0 | 0, $5 | 0, $1 | 0) | 0; //@line 9951
 }
 return $0 | 0; //@line 9953
}
function ___cxa_is_pointer_type($0) {
 $0 = $0 | 0; //@line 11993
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, $phitmp = 0, label = 0, sp = 0; //@line 11994
 sp = STACKTOP; //@line 11995
 $1 = ($0 | 0) == (0 | 0); //@line 11996
 if ($1) {
  $4 = 0; //@line 11998
 } else {
  $2 = ___dynamic_cast($0, 336, 440, 0) | 0; //@line 12000
  $phitmp = ($2 | 0) != (0 | 0); //@line 12001
  $4 = $phitmp; //@line 12002
 }
 $3 = $4 & 1; //@line 12004
 return $3 | 0; //@line 12005
}
function __ZN10emscripten3val9undefinedEv() {
 var $0 = 0, $1 = 0, label = 0, sp = 0; //@line 1474
 sp = STACKTOP; //@line 1475
 STACKTOP = STACKTOP + 16 | 0; //@line 1476
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1476
 $0 = sp; //@line 1477
 __ZN10emscripten3valC2EPNS_8internal7_EM_VALE($0, 1); //@line 1478
 $1 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 1479
 STACKTOP = sp; //@line 1480
 return $1 | 0; //@line 1480
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterD2Ev($0) {
 $0 = $0 | 0; //@line 987
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 988
 sp = STACKTOP; //@line 989
 STACKTOP = STACKTOP + 16 | 0; //@line 990
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 990
 $1 = $0; //@line 991
 $2 = $1; //@line 992
 __ZN10emscripten3valD2Ev($2); //@line 993
 STACKTOP = sp; //@line 994
 return;
}
function ___strdup($0) {
 $0 = $0 | 0; //@line 6556
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 6557
 sp = STACKTOP; //@line 6558
 $1 = _strlen($0) | 0; //@line 6559
 $2 = $1 + 1 | 0; //@line 6560
 $3 = _malloc($2) | 0; //@line 6561
 $4 = ($3 | 0) == (0 | 0); //@line 6562
 if ($4) {
  $$0 = 0; //@line 6564
 } else {
  _memcpy($3 | 0, $0 | 0, $2 | 0) | 0; //@line 6566
  $$0 = $3; //@line 6567
 }
 return $$0 | 0; //@line 6569
}
function __ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEED2Ev($0) {
 $0 = $0 | 0; //@line 1941
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 1942
 sp = STACKTOP; //@line 1943
 STACKTOP = STACKTOP + 16 | 0; //@line 1944
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1944
 $1 = $0; //@line 1945
 $2 = $1; //@line 1946
 __ZNSt3__214__shared_countD2Ev($2); //@line 1947
 STACKTOP = sp; //@line 1948
 return;
}
function __ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEED2Ev($0) {
 $0 = $0 | 0; //@line 9963
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 9964
 sp = STACKTOP; //@line 9965
 $1 = $0 + 11 | 0; //@line 9966
 $2 = SAFE_HEAP_LOAD($1 >> 0 | 0, 1, 0) | 0 | 0; //@line 9967
 $3 = $2 << 24 >> 24 < 0; //@line 9968
 if ($3) {
  $4 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 9970
  __ZdlPv($4); //@line 9971
 }
 return;
}
function _bitshift64Shl(low, high, bits) {
 low = low | 0; //@line 12078
 high = high | 0; //@line 12078
 bits = bits | 0; //@line 12078
 var ander = 0; //@line 12079
 if ((bits | 0) < 32) {
  ander = (1 << bits) - 1 | 0; //@line 12081
  tempRet0 = high << bits | (low & ander << 32 - bits) >>> 32 - bits; //@line 12082
  return low << bits; //@line 12083
 }
 tempRet0 = low << bits - 32; //@line 12085
 return 0; //@line 12086
}
function __ZN10emscripten8internal11BindingTypeIP13StringFactoryE12fromWireTypeES3_($0) {
 $0 = $0 | 0; //@line 2273
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 2274
 sp = STACKTOP; //@line 2275
 STACKTOP = STACKTOP + 16 | 0; //@line 2276
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 2276
 $1 = $0; //@line 2277
 $2 = $1; //@line 2278
 STACKTOP = sp; //@line 2279
 return $2 | 0; //@line 2279
}
function __ZNSt3__211char_traitsIcE6lengthEPKc($0) {
 $0 = $0 | 0; //@line 433
 var $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 434
 sp = STACKTOP; //@line 435
 STACKTOP = STACKTOP + 16 | 0; //@line 436
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 436
 $1 = $0; //@line 437
 $2 = $1; //@line 438
 $3 = _strlen($2) | 0; //@line 439
 STACKTOP = sp; //@line 440
 return $3 | 0; //@line 440
}
function _bitshift64Lshr(low, high, bits) {
 low = low | 0; //@line 12089
 high = high | 0; //@line 12089
 bits = bits | 0; //@line 12089
 var ander = 0; //@line 12090
 if ((bits | 0) < 32) {
  ander = (1 << bits) - 1 | 0; //@line 12092
  tempRet0 = high >>> bits; //@line 12093
  return low >>> bits | (high & ander) << 32 - bits; //@line 12094
 }
 tempRet0 = 0; //@line 12096
 return high >>> bits - 32 | 0; //@line 12097
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJNSt3__210shared_ptrI13StringFactoryEEEE8getCountEv($0) {
 $0 = $0 | 0; //@line 571
 var $1 = 0, label = 0, sp = 0; //@line 572
 sp = STACKTOP; //@line 573
 STACKTOP = STACKTOP + 16 | 0; //@line 574
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 574
 $1 = $0; //@line 575
 STACKTOP = sp; //@line 576
 return 1; //@line 576
}
function ___syscall_ret($0) {
 $0 = $0 | 0; //@line 3187
 var $$0 = 0, $1 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 3188
 sp = STACKTOP; //@line 3189
 $1 = $0 >>> 0 > 4294963200; //@line 3190
 if ($1) {
  $2 = 0 - $0 | 0; //@line 3192
  $3 = ___errno_location() | 0; //@line 3193
  SAFE_HEAP_STORE($3 | 0, $2 | 0, 4);
  $$0 = -1; //@line 3195
 } else {
  $$0 = $0; //@line 3197
 }
 return $$0 | 0; //@line 3199
}
function SAFE_HEAP_LOAD_D(dest, bytes) {
 dest = dest | 0; //@line 90
 bytes = bytes | 0; //@line 91
 if ((dest | 0) <= 0) segfault(); //@line 92
 if ((dest + bytes | 0) > (HEAP32[DYNAMICTOP_PTR >> 2] | 0)) segfault(); //@line 93
 if ((bytes | 0) == 8) {
  if (dest & 7) alignfault(); //@line 95
  return +HEAPF64[dest >> 3];
 }
 if (dest & 3) alignfault(); //@line 98
 return +HEAPF32[dest >> 2];
}
function dynCall_viiiiii(index, a1, a2, a3, a4, a5, a6) {
 index = index | 0; //@line 12508
 a1 = a1 | 0; //@line 12509
 a2 = a2 | 0; //@line 12509
 a3 = a3 | 0; //@line 12509
 a4 = a4 | 0; //@line 12509
 a5 = a5 | 0; //@line 12509
 a6 = a6 | 0; //@line 12509
 FUNCTION_TABLE_viiiiii[(SAFE_FT_MASK(index | 0, 63 | 0) | 0) & 63](a1 | 0, a2 | 0, a3 | 0, a4 | 0, a5 | 0, a6 | 0); //@line 12510
}
function __ZNK10emscripten8internal12WithPoliciesIJEE11ArgTypeListIJEE8getCountEv($0) {
 $0 = $0 | 0; //@line 1538
 var $1 = 0, label = 0, sp = 0; //@line 1539
 sp = STACKTOP; //@line 1540
 STACKTOP = STACKTOP + 16 | 0; //@line 1541
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1541
 $1 = $0; //@line 1542
 STACKTOP = sp; //@line 1543
 return 0; //@line 1543
}
function ___DOUBLE_BITS_675($0) {
 $0 = +$0; //@line 5854
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 5855
 sp = STACKTOP; //@line 5856
 SAFE_HEAP_STORE_D(tempDoublePtr | 0, +$0, 8);
 $1 = SAFE_HEAP_LOAD(tempDoublePtr | 0, 4, 0) | 0 | 0; //@line 5857
 $2 = SAFE_HEAP_LOAD(tempDoublePtr + 4 | 0, 4, 0) | 0 | 0; //@line 5858
 tempRet0 = $2; //@line 5859
 return $1 | 0; //@line 5860
}
function __ZN13StringFactoryC2Ev($0) {
 $0 = $0 | 0; //@line 119
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 120
 sp = STACKTOP; //@line 121
 STACKTOP = STACKTOP + 16 | 0; //@line 122
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 122
 $1 = $0; //@line 123
 $2 = $1; //@line 124
 SAFE_HEAP_STORE($2 | 0, 0 | 0, 4);
 STACKTOP = sp; //@line 126
 return;
}
function _out($0, $1, $2) {
 $0 = $0 | 0; //@line 4279
 $1 = $1 | 0; //@line 4280
 $2 = $2 | 0; //@line 4281
 var $3 = 0, $4 = 0, $5 = 0, label = 0, sp = 0; //@line 4282
 sp = STACKTOP; //@line 4283
 $3 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 4284
 $4 = $3 & 32; //@line 4285
 $5 = ($4 | 0) == 0; //@line 4286
 if ($5) {
  ___fwritex($1, $2, $0) | 0; //@line 4288
 }
 return;
}
function __ZN10emscripten8internal14getLightTypeIDI13StringFactoryEEPKvRKT_($0) {
 $0 = $0 | 0; //@line 504
 var $1 = 0, label = 0, sp = 0; //@line 505
 sp = STACKTOP; //@line 506
 STACKTOP = STACKTOP + 16 | 0; //@line 507
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 507
 $1 = $0; //@line 508
 STACKTOP = sp; //@line 509
 return 8 | 0; //@line 509
}
function __ZN10emscripten8internal21writeGenericWireTypesERPNS0_15GenericWireTypeE($0) {
 $0 = $0 | 0; //@line 1127
 var $1 = 0, label = 0, sp = 0; //@line 1128
 sp = STACKTOP; //@line 1129
 STACKTOP = STACKTOP + 16 | 0; //@line 1130
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(16 | 0); //@line 1130
 $1 = $0; //@line 1131
 STACKTOP = sp; //@line 1132
 return;
}
function __ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv($0, $1, $2) {
 $0 = $0 | 0; //@line 11344
 $1 = $1 | 0; //@line 11345
 $2 = $2 | 0; //@line 11346
 var $3 = 0, label = 0, sp = 0; //@line 11347
 sp = STACKTOP; //@line 11348
 $3 = __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $1, 0) | 0; //@line 11349
 return $3 | 0; //@line 11350
}
function runPostSets() {}
function _i64Subtract(a, b, c, d) {
 a = a | 0; //@line 12010
 b = b | 0; //@line 12010
 c = c | 0; //@line 12010
 d = d | 0; //@line 12010
 var l = 0, h = 0; //@line 12011
 l = a - c >>> 0; //@line 12012
 h = b - d >>> 0; //@line 12013
 h = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0; //@line 12014
 return (tempRet0 = h, l | 0) | 0; //@line 12015
}
function _strerror($0) {
 $0 = $0 | 0; //@line 4740
 var $1 = 0, $2 = 0, $3 = 0, $4 = 0, label = 0, sp = 0; //@line 4741
 sp = STACKTOP; //@line 4742
 $1 = ___pthread_self_105() | 0; //@line 4743
 $2 = $1 + 188 | 0; //@line 4744
 $3 = SAFE_HEAP_LOAD($2 | 0, 4, 0) | 0 | 0; //@line 4745
 $4 = ___strerror_l($0, $3) | 0; //@line 4746
 return $4 | 0; //@line 4747
}
function _wctomb($0, $1) {
 $0 = $0 | 0; //@line 4920
 $1 = $1 | 0; //@line 4921
 var $$0 = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 4922
 sp = STACKTOP; //@line 4923
 $2 = ($0 | 0) == (0 | 0); //@line 4924
 if ($2) {
  $$0 = 0; //@line 4926
 } else {
  $3 = _wcrtomb($0, $1, 0) | 0; //@line 4928
  $$0 = $3; //@line 4929
 }
 return $$0 | 0; //@line 4931
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2509
 sp = STACKTOP; //@line 2510
 $0 = __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() | 0; //@line 2511
 return $0 | 0; //@line 2512
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2503
 sp = STACKTOP; //@line 2504
 $0 = __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() | 0; //@line 2505
 return $0 | 0; //@line 2506
}
function __ZN10emscripten8internal6TypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2497
 sp = STACKTOP; //@line 2498
 $0 = __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() | 0; //@line 2499
 return $0 | 0; //@line 2500
}
function dynCall_viiiii(index, a1, a2, a3, a4, a5) {
 index = index | 0; //@line 12452
 a1 = a1 | 0; //@line 12453
 a2 = a2 | 0; //@line 12453
 a3 = a3 | 0; //@line 12453
 a4 = a4 | 0; //@line 12453
 a5 = a5 | 0; //@line 12453
 FUNCTION_TABLE_viiiii[(SAFE_FT_MASK(index | 0, 63 | 0) | 0) & 63](a1 | 0, a2 | 0, a3 | 0, a4 | 0, a5 | 0); //@line 12454
}
function __ZNSt3__211char_traitsIcE4copyEPcPKcj($0, $1, $2) {
 $0 = $0 | 0; //@line 9921
 $1 = $1 | 0; //@line 9922
 $2 = $2 | 0; //@line 9923
 var $3 = 0, label = 0, sp = 0; //@line 9924
 sp = STACKTOP; //@line 9925
 $3 = ($2 | 0) == 0; //@line 9926
 if (!$3) {
  _memcpy($0 | 0, $1 | 0, $2 | 0) | 0; //@line 9928
 }
 return $0 | 0; //@line 9930
}
function __ZNSt3__212_GLOBAL__N_19decrementIlEET_RS2_($0) {
 $0 = $0 | 0; //@line 9787
 var $$0$i = 0, $1 = 0, label = 0, sp = 0; //@line 9788
 sp = STACKTOP; //@line 9789
 $1 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 9790
 SAFE_HEAP_STORE($0 | 0, $1 + -1 | 0 | 0, 4);
 $$0$i = $1 + -1 | 0; //@line 9791
 return $$0$i | 0; //@line 9792
}
function __ZNSt3__219__shared_weak_count16__release_sharedEv($0) {
 $0 = $0 | 0; //@line 9795
 var $1 = 0, label = 0, sp = 0; //@line 9796
 sp = STACKTOP; //@line 9797
 $1 = __ZNSt3__214__shared_count16__release_sharedEv($0) | 0; //@line 9798
 if ($1) {
  __ZNSt3__219__shared_weak_count14__release_weakEv($0); //@line 9800
 }
 return;
}
function dynCall_iiiii(index, a1, a2, a3, a4) {
 index = index | 0; //@line 12501
 a1 = a1 | 0; //@line 12502
 a2 = a2 | 0; //@line 12502
 a3 = a3 | 0; //@line 12502
 a4 = a4 | 0; //@line 12502
 return FUNCTION_TABLE_iiiii[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0, a2 | 0, a3 | 0, a4 | 0) | 0; //@line 12503
}
function __ZNSt3__211make_sharedI13StringFactoryJEEENS_9enable_ifIXntsr8is_arrayIT_EE5valueENS_10shared_ptrIS3_EEE4typeEDpOT0_($0) {
 $0 = $0 | 0; //@line 1637
 var label = 0, sp = 0; //@line 1638
 sp = STACKTOP; //@line 1639
 __ZNSt3__210shared_ptrI13StringFactoryE11make_sharedIJEEES2_DpOT_($0); //@line 1640
 return;
}
function _swapc($0, $1) {
 $0 = $0 | 0; //@line 6250
 $1 = $1 | 0; //@line 6251
 var $$ = 0, $2 = 0, $3 = 0, label = 0, sp = 0; //@line 6252
 sp = STACKTOP; //@line 6253
 $2 = ($1 | 0) == 0; //@line 6254
 $3 = _llvm_bswap_i32($0 | 0) | 0; //@line 6255
 $$ = $2 ? $0 : $3; //@line 6256
 return $$ | 0; //@line 6257
}
function dynCall_viiii(index, a1, a2, a3, a4) {
 index = index | 0; //@line 12522
 a1 = a1 | 0; //@line 12523
 a2 = a2 | 0; //@line 12523
 a3 = a3 | 0; //@line 12523
 a4 = a4 | 0; //@line 12523
 FUNCTION_TABLE_viiii[(SAFE_FT_MASK(index | 0, 63 | 0) | 0) & 63](a1 | 0, a2 | 0, a3 | 0, a4 | 0); //@line 12524
}
function _i64Add(a, b, c, d) {
 a = a | 0; //@line 12023
 b = b | 0; //@line 12023
 c = c | 0; //@line 12023
 d = d | 0; //@line 12023
 var l = 0, h = 0; //@line 12024
 l = a + c >>> 0; //@line 12025
 h = b + d + (l >>> 0 < a >>> 0 | 0) >>> 0; //@line 12026
 return (tempRet0 = h, l | 0) | 0; //@line 12027
}
function ___udivdi3($a$0, $a$1, $b$0, $b$1) {
 $a$0 = $a$0 | 0; //@line 12389
 $a$1 = $a$1 | 0; //@line 12390
 $b$0 = $b$0 | 0; //@line 12391
 $b$1 = $b$1 | 0; //@line 12392
 var $1$0 = 0; //@line 12393
 $1$0 = ___udivmoddi4($a$0, $a$1, $b$0, $b$1, 0) | 0; //@line 12394
 return $1$0 | 0; //@line 12395
}
function stackAlloc(size) {
 size = size | 0; //@line 2
 var ret = 0; //@line 3
 ret = STACKTOP; //@line 4
 STACKTOP = STACKTOP + size | 0; //@line 5
 STACKTOP = STACKTOP + 15 & -16; //@line 6
 if ((STACKTOP | 0) >= (STACK_MAX | 0)) abortStackOverflow(size | 0); //@line 7
 return ret | 0; //@line 9
}
function __ZNSt3__211char_traitsIcE6assignERcRKc($0, $1) {
 $0 = $0 | 0; //@line 9933
 $1 = $1 | 0; //@line 9934
 var $2 = 0, label = 0, sp = 0; //@line 9935
 sp = STACKTOP; //@line 9936
 $2 = SAFE_HEAP_LOAD($1 >> 0 | 0, 1, 0) | 0 | 0; //@line 9937
 SAFE_HEAP_STORE($0 >> 0 | 0, $2 | 0, 1);
 return;
}
function __ZN10emscripten8internal6TypeIDINSt3__210shared_ptrI13StringFactoryEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 707
 sp = STACKTOP; //@line 708
 $0 = __ZN10emscripten8internal11LightTypeIDINSt3__210shared_ptrI13StringFactoryEEE3getEv() | 0; //@line 709
 return $0 | 0; //@line 710
}
function __ZN10__cxxabiv18is_equalEPKSt9type_infoS2_b($0, $1, $2) {
 $0 = $0 | 0; //@line 10736
 $1 = $1 | 0; //@line 10737
 $2 = $2 | 0; //@line 10738
 var $3 = 0, label = 0, sp = 0; //@line 10739
 sp = STACKTOP; //@line 10740
 $3 = ($0 | 0) == ($1 | 0); //@line 10741
 return $3 | 0; //@line 10742
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5countEv($0) {
 $0 = $0 | 0; //@line 11320
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 11321
 sp = STACKTOP; //@line 11322
 $1 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11323
 $2 = $1 + -4 | 0; //@line 11324
 return $2 | 0; //@line 11325
}
function __ZSt15get_new_handlerv() {
 var $0 = 0, $1 = 0, label = 0, sp = 0; //@line 11965
 sp = STACKTOP; //@line 11966
 $0 = SAFE_HEAP_LOAD(1784 * 4 | 0, 4, 0) | 0 | 0; //@line 11967
 SAFE_HEAP_STORE(1784 * 4 | 0, $0 + 0 | 0 | 0, 4);
 $1 = $0; //@line 11968
 return $1 | 0; //@line 11969
}
function __ZNKSt11logic_error4whatEv($0) {
 $0 = $0 | 0; //@line 11290
 var $1 = 0, $2 = 0, label = 0, sp = 0; //@line 11291
 sp = STACKTOP; //@line 11292
 $1 = $0 + 4 | 0; //@line 11293
 $2 = __ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($1) | 0; //@line 11294
 return $2 | 0; //@line 11295
}
function __ZSt13get_terminatev() {
 var $0 = 0, $1 = 0, label = 0, sp = 0; //@line 11240
 sp = STACKTOP; //@line 11241
 $0 = SAFE_HEAP_LOAD(303 * 4 | 0, 4, 0) | 0 | 0; //@line 11242
 SAFE_HEAP_STORE(303 * 4 | 0, $0 + 0 | 0 | 0, 4);
 $1 = $0; //@line 11243
 return $1 | 0; //@line 11244
}
function __ZN10emscripten8internal6TypeIDINS0_17AllowedRawPointerIK13StringFactoryEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 493
 sp = STACKTOP; //@line 494
 $0 = __ZN10emscripten8internal11LightTypeIDIPK13StringFactoryE3getEv() | 0; //@line 495
 return $0 | 0; //@line 496
}
function __ZN10emscripten8internal6TypeIDINS0_17AllowedRawPointerI13StringFactoryEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 487
 sp = STACKTOP; //@line 488
 $0 = __ZN10emscripten8internal11LightTypeIDIP13StringFactoryE3getEv() | 0; //@line 489
 return $0 | 0; //@line 490
}
function __ZNSt11logic_errorD2Ev($0) {
 $0 = $0 | 0; //@line 11273
 var $1 = 0, label = 0, sp = 0; //@line 11274
 sp = STACKTOP; //@line 11275
 SAFE_HEAP_STORE($0 | 0, 1324 | 0, 4);
 $1 = $0 + 4 | 0; //@line 11277
 __ZN12_GLOBAL__N_114__libcpp_nmstrD2Ev($1); //@line 11278
 return;
}
function __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEENS0_17AllowedRawPointerI13StringFactoryEEEEEE3getEv() {
 var label = 0, sp = 0; //@line 2282
 sp = STACKTOP; //@line 2283
 return 660 | 0; //@line 2284
}
function dynCall_iiii(index, a1, a2, a3) {
 index = index | 0; //@line 12445
 a1 = a1 | 0; //@line 12446
 a2 = a2 | 0; //@line 12446
 a3 = a3 | 0; //@line 12446
 return FUNCTION_TABLE_iiii[(SAFE_FT_MASK(index | 0, 63 | 0) | 0) & 63](a1 | 0, a2 | 0, a3 | 0) | 0; //@line 12447
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewItEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2777
 sp = STACKTOP; //@line 2778
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewItEEE3getEv() | 0; //@line 2779
 return $0 | 0; //@line 2780
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIsEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2793
 sp = STACKTOP; //@line 2794
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIsEEE3getEv() | 0; //@line 2795
 return $0 | 0; //@line 2796
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewImEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2713
 sp = STACKTOP; //@line 2714
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewImEEE3getEv() | 0; //@line 2715
 return $0 | 0; //@line 2716
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIlEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2729
 sp = STACKTOP; //@line 2730
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIlEEE3getEv() | 0; //@line 2731
 return $0 | 0; //@line 2732
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIjEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2745
 sp = STACKTOP; //@line 2746
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIjEEE3getEv() | 0; //@line 2747
 return $0 | 0; //@line 2748
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIiEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2761
 sp = STACKTOP; //@line 2762
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIiEEE3getEv() | 0; //@line 2763
 return $0 | 0; //@line 2764
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIhEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2809
 sp = STACKTOP; //@line 2810
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIhEEE3getEv() | 0; //@line 2811
 return $0 | 0; //@line 2812
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIfEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2697
 sp = STACKTOP; //@line 2698
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIfEEE3getEv() | 0; //@line 2699
 return $0 | 0; //@line 2700
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIeEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2665
 sp = STACKTOP; //@line 2666
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIeEEE3getEv() | 0; //@line 2667
 return $0 | 0; //@line 2668
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIdEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2681
 sp = STACKTOP; //@line 2682
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIdEEE3getEv() | 0; //@line 2683
 return $0 | 0; //@line 2684
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIcEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2841
 sp = STACKTOP; //@line 2842
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIcEEE3getEv() | 0; //@line 2843
 return $0 | 0; //@line 2844
}
function __ZN10emscripten8internal6TypeIDINS_11memory_viewIaEEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2825
 sp = STACKTOP; //@line 2826
 $0 = __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIaEEE3getEv() | 0; //@line 2827
 return $0 | 0; //@line 2828
}
function dynCall_viii(index, a1, a2, a3) {
 index = index | 0; //@line 12487
 a1 = a1 | 0; //@line 12488
 a2 = a2 | 0; //@line 12488
 a3 = a3 | 0; //@line 12488
 FUNCTION_TABLE_viii[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0, a2 | 0, a3 | 0); //@line 12489
}
function __ZN10emscripten8internal6TypeIDI13StringFactoryE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 481
 sp = STACKTOP; //@line 482
 $0 = __ZN10emscripten8internal11LightTypeIDI13StringFactoryE3getEv() | 0; //@line 483
 return $0 | 0; //@line 484
}
function __ZN10__cxxabiv123__fundamental_type_infoD0Ev($0) {
 $0 = $0 | 0; //@line 11336
 var label = 0, sp = 0; //@line 11337
 sp = STACKTOP; //@line 11338
 __ZN10__cxxabiv116__shim_type_infoD2Ev($0); //@line 11339
 __ZdlPv($0); //@line 11340
 return;
}
function __ZNK12_GLOBAL__N_114__libcpp_nmstr5c_strEv($0) {
 $0 = $0 | 0; //@line 11298
 var $1 = 0, label = 0, sp = 0; //@line 11299
 sp = STACKTOP; //@line 11300
 $1 = SAFE_HEAP_LOAD($0 | 0, 4, 0) | 0 | 0; //@line 11301
 return $1 | 0; //@line 11302
}
function __ZN10__cxxabiv121__vmi_class_type_infoD0Ev($0) {
 $0 = $0 | 0; //@line 11483
 var label = 0, sp = 0; //@line 11484
 sp = STACKTOP; //@line 11485
 __ZN10__cxxabiv116__shim_type_infoD2Ev($0); //@line 11486
 __ZdlPv($0); //@line 11487
 return;
}
function __ZN10__cxxabiv120__si_class_type_infoD0Ev($0) {
 $0 = $0 | 0; //@line 10965
 var label = 0, sp = 0; //@line 10966
 sp = STACKTOP; //@line 10967
 __ZN10__cxxabiv116__shim_type_infoD2Ev($0); //@line 10968
 __ZdlPv($0); //@line 10969
 return;
}
function __ZN10__cxxabiv119__pointer_type_infoD0Ev($0) {
 $0 = $0 | 0; //@line 11353
 var label = 0, sp = 0; //@line 11354
 sp = STACKTOP; //@line 11355
 __ZN10__cxxabiv116__shim_type_infoD2Ev($0); //@line 11356
 __ZdlPv($0); //@line 11357
 return;
}
function __ZN10emscripten8internal6TypeIDIRNS_3valEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 1079
 sp = STACKTOP; //@line 1080
 $0 = __ZN10emscripten8internal11LightTypeIDIRNS_3valEE3getEv() | 0; //@line 1081
 return $0 | 0; //@line 1082
}
function __ZN10__cxxabiv117__class_type_infoD0Ev($0) {
 $0 = $0 | 0; //@line 10571
 var label = 0, sp = 0; //@line 10572
 sp = STACKTOP; //@line 10573
 __ZN10__cxxabiv116__shim_type_infoD2Ev($0); //@line 10574
 __ZdlPv($0); //@line 10575
 return;
}
function __ZN10emscripten8internal6TypeIDINS_3valEE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2515
 sp = STACKTOP; //@line 2516
 $0 = __ZN10emscripten8internal11LightTypeIDINS_3valEE3getEv() | 0; //@line 2517
 return $0 | 0; //@line 2518
}
function __ZNSt3__218__libcpp_refstring13data_from_repEPNS0_9_Rep_baseE($0) {
 $0 = $0 | 0; //@line 10430
 var $1 = 0, label = 0, sp = 0; //@line 10431
 sp = STACKTOP; //@line 10432
 $1 = $0 + 12 | 0; //@line 10433
 return $1 | 0; //@line 10434
}
function b9(p0, p1, p2, p3, p4, p5) {
 p0 = p0 | 0; //@line 12570
 p1 = p1 | 0; //@line 12570
 p2 = p2 | 0; //@line 12570
 p3 = p3 | 0; //@line 12570
 p4 = p4 | 0; //@line 12570
 p5 = p5 | 0; //@line 12570
 nullFunc_viiiiii(9); //@line 12570
}
function SAFE_FT_MASK(value, mask) {
 value = value | 0; //@line 102
 mask = mask | 0; //@line 103
 var ret = 0; //@line 104
 ret = value & mask; //@line 105
 if ((ret | 0) != (value | 0)) ftfault(); //@line 106
 return ret | 0; //@line 107
}
function dynCall_iii(index, a1, a2) {
 index = index | 0; //@line 12515
 a1 = a1 | 0; //@line 12516
 a2 = a2 | 0; //@line 12516
 return FUNCTION_TABLE_iii[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0, a2 | 0) | 0; //@line 12517
}
function ___lctrans($0, $1) {
 $0 = $0 | 0; //@line 6105
 $1 = $1 | 0; //@line 6106
 var $2 = 0, label = 0, sp = 0; //@line 6107
 sp = STACKTOP; //@line 6108
 $2 = ___lctrans_impl($0, $1) | 0; //@line 6109
 return $2 | 0; //@line 6110
}
function __emval_call__wrapper(p0, p1, p2, p3) {
 p0 = p0 | 0; //@line 12567
 p1 = p1 | 0; //@line 12567
 p2 = p2 | 0; //@line 12567
 p3 = p3 | 0; //@line 12567
 return __emval_call(p0 | 0, p1 | 0, p2 | 0, p3 | 0) | 0; //@line 12567
}
function __ZN10emscripten8internal6TypeIDIvE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2354
 sp = STACKTOP; //@line 2355
 $0 = __ZN10emscripten8internal11LightTypeIDIvE3getEv() | 0; //@line 2356
 return $0 | 0; //@line 2357
}
function __ZN10emscripten8internal6TypeIDItE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2943
 sp = STACKTOP; //@line 2944
 $0 = __ZN10emscripten8internal11LightTypeIDItE3getEv() | 0; //@line 2945
 return $0 | 0; //@line 2946
}
function __ZN10emscripten8internal6TypeIDIsE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2954
 sp = STACKTOP; //@line 2955
 $0 = __ZN10emscripten8internal11LightTypeIDIsE3getEv() | 0; //@line 2956
 return $0 | 0; //@line 2957
}
function __ZN10emscripten8internal6TypeIDImE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2899
 sp = STACKTOP; //@line 2900
 $0 = __ZN10emscripten8internal11LightTypeIDImE3getEv() | 0; //@line 2901
 return $0 | 0; //@line 2902
}
function __ZN10emscripten8internal6TypeIDIlE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2910
 sp = STACKTOP; //@line 2911
 $0 = __ZN10emscripten8internal11LightTypeIDIlE3getEv() | 0; //@line 2912
 return $0 | 0; //@line 2913
}
function __ZN10emscripten8internal6TypeIDIjE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2921
 sp = STACKTOP; //@line 2922
 $0 = __ZN10emscripten8internal11LightTypeIDIjE3getEv() | 0; //@line 2923
 return $0 | 0; //@line 2924
}
function __ZN10emscripten8internal6TypeIDIiE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2932
 sp = STACKTOP; //@line 2933
 $0 = __ZN10emscripten8internal11LightTypeIDIiE3getEv() | 0; //@line 2934
 return $0 | 0; //@line 2935
}
function __ZN10emscripten8internal6TypeIDIhE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2965
 sp = STACKTOP; //@line 2966
 $0 = __ZN10emscripten8internal11LightTypeIDIhE3getEv() | 0; //@line 2967
 return $0 | 0; //@line 2968
}
function __ZN10emscripten8internal6TypeIDIfE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2888
 sp = STACKTOP; //@line 2889
 $0 = __ZN10emscripten8internal11LightTypeIDIfE3getEv() | 0; //@line 2890
 return $0 | 0; //@line 2891
}
function __ZN10emscripten8internal6TypeIDIdE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2877
 sp = STACKTOP; //@line 2878
 $0 = __ZN10emscripten8internal11LightTypeIDIdE3getEv() | 0; //@line 2879
 return $0 | 0; //@line 2880
}
function __ZN10emscripten8internal6TypeIDIcE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2987
 sp = STACKTOP; //@line 2988
 $0 = __ZN10emscripten8internal11LightTypeIDIcE3getEv() | 0; //@line 2989
 return $0 | 0; //@line 2990
}
function __ZN10emscripten8internal6TypeIDIbE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2360
 sp = STACKTOP; //@line 2361
 $0 = __ZN10emscripten8internal11LightTypeIDIbE3getEv() | 0; //@line 2362
 return $0 | 0; //@line 2363
}
function __ZN10emscripten8internal6TypeIDIaE3getEv() {
 var $0 = 0, label = 0, sp = 0; //@line 2976
 sp = STACKTOP; //@line 2977
 $0 = __ZN10emscripten8internal11LightTypeIDIaE3getEv() | 0; //@line 2978
 return $0 | 0; //@line 2979
}
function __ZNKSt3__219__shared_weak_count13__get_deleterERKSt9type_info($0, $1) {
 $0 = $0 | 0; //@line 9762
 $1 = $1 | 0; //@line 9763
 var label = 0, sp = 0; //@line 9764
 sp = STACKTOP; //@line 9765
 return 0 | 0; //@line 9766
}
function dynCall_vii(index, a1, a2) {
 index = index | 0; //@line 12473
 a1 = a1 | 0; //@line 12474
 a2 = a2 | 0; //@line 12474
 FUNCTION_TABLE_vii[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0, a2 | 0); //@line 12475
}
function ___errno_location() {
 var $0 = 0, $1 = 0, label = 0, sp = 0; //@line 3202
 sp = STACKTOP; //@line 3203
 $0 = ___pthread_self_108() | 0; //@line 3204
 $1 = $0 + 64 | 0; //@line 3205
 return $1 | 0; //@line 3206
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIwNS2_11char_traitsIwEENS2_9allocatorIwEEEEE3getEv() {
 var label = 0, sp = 0; //@line 2862
 sp = STACKTOP; //@line 2863
 return 232 | 0; //@line 2864
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIhNS2_11char_traitsIhEENS2_9allocatorIhEEEEE3getEv() {
 var label = 0, sp = 0; //@line 2867
 sp = STACKTOP; //@line 2868
 return 256 | 0; //@line 2869
}
function __ZN10emscripten8internal11LightTypeIDINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE3getEv() {
 var label = 0, sp = 0; //@line 2872
 sp = STACKTOP; //@line 2873
 return 112 | 0; //@line 2874
}
function __ZNSt12length_errorD0Ev($0) {
 $0 = $0 | 0; //@line 11328
 var label = 0, sp = 0; //@line 11329
 sp = STACKTOP; //@line 11330
 __ZNSt11logic_errorD2Ev($0); //@line 11331
 __ZdlPv($0); //@line 11332
 return;
}
function __ZNSt3__211char_traitsIcE11to_int_typeEc($0) {
 $0 = $0 | 0; //@line 9956
 var $1 = 0, label = 0, sp = 0; //@line 9957
 sp = STACKTOP; //@line 9958
 $1 = $0 & 255; //@line 9959
 return $1 | 0; //@line 9960
}
function __ZNSt11logic_errorD0Ev($0) {
 $0 = $0 | 0; //@line 11282
 var label = 0, sp = 0; //@line 11283
 sp = STACKTOP; //@line 11284
 __ZNSt11logic_errorD2Ev($0); //@line 11285
 __ZdlPv($0); //@line 11286
 return;
}
function __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJNSt3__210shared_ptrI13StringFactoryEEEEEE3getEv() {
 var label = 0, sp = 0; //@line 1632
 sp = STACKTOP; //@line 1633
 return 628 | 0; //@line 1634
}
function ___clang_call_terminate($0) {
 $0 = $0 | 0; //@line 1188
 var label = 0, sp = 0; //@line 1189
 sp = STACKTOP; //@line 1190
 ___cxa_begin_catch($0 | 0) | 0; //@line 1191
 __ZSt9terminatev(); //@line 1192
}
function __ZNSt9bad_allocD0Ev($0) {
 $0 = $0 | 0; //@line 11253
 var label = 0, sp = 0; //@line 11254
 sp = STACKTOP; //@line 11255
 __ZNSt9bad_allocD2Ev($0); //@line 11256
 __ZdlPv($0); //@line 11257
 return;
}
function b1(p0, p1, p2, p3, p4) {
 p0 = p0 | 0; //@line 12531
 p1 = p1 | 0; //@line 12531
 p2 = p2 | 0; //@line 12531
 p3 = p3 | 0; //@line 12531
 p4 = p4 | 0; //@line 12531
 nullFunc_viiiii(1); //@line 12531
}
function b8(p0, p1, p2, p3) {
 p0 = p0 | 0; //@line 12564
 p1 = p1 | 0; //@line 12564
 p2 = p2 | 0; //@line 12564
 p3 = p3 | 0; //@line 12564
 nullFunc_iiiii(8); //@line 12564
 return 0; //@line 12564
}
function ___cxx_global_var_init_2() {
 var label = 0, sp = 0; //@line 2299
 sp = STACKTOP; //@line 2300
 __ZN53EmscriptenBindingInitializer_native_and_builtin_typesC2Ev(7141); //@line 2301
 return;
}
function establishStackSpace(stackBase, stackMax) {
 stackBase = stackBase | 0; //@line 19
 stackMax = stackMax | 0; //@line 20
 STACKTOP = stackBase; //@line 21
 STACK_MAX = stackMax; //@line 22
}
function __ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE18get_sharing_policyEv() {
 var label = 0, sp = 0; //@line 713
 sp = STACKTOP; //@line 714
 return 2; //@line 715
}
function dynCall_ii(index, a1) {
 index = index | 0; //@line 12480
 a1 = a1 | 0; //@line 12481
 return FUNCTION_TABLE_ii[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0) | 0; //@line 12482
}
function setThrew(threw, value) {
 threw = threw | 0; //@line 26
 value = value | 0; //@line 27
 if ((__THREW__ | 0) == 0) {
  __THREW__ = threw; //@line 29
  threwValue = value; //@line 30
 }
}
function __ZN10emscripten8internal11LightTypeIDINSt3__210shared_ptrI13StringFactoryEEE3getEv() {
 var label = 0, sp = 0; //@line 1589
 sp = STACKTOP; //@line 1590
 return 80 | 0; //@line 1591
}
function _frexpl($0, $1) {
 $0 = +$0; //@line 5863
 $1 = $1 | 0; //@line 5864
 var $2 = 0.0, label = 0, sp = 0;
 sp = STACKTOP; //@line 5866
 $2 = +_frexp($0, $1); //@line 5867
 return +$2;
}
function dynCall_vi(index, a1) {
 index = index | 0; //@line 12466
 a1 = a1 | 0; //@line 12467
 FUNCTION_TABLE_vi[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](a1 | 0); //@line 12468
}
function ___cxx_global_var_init() {
 var label = 0, sp = 0; //@line 311
 sp = STACKTOP; //@line 312
 __ZN42EmscriptenBindingInitializer_StringFactoryC2Ev(7140); //@line 313
 return;
}
function __ZN10emscripten8internal11NoBaseClass13getDowncasterI13StringFactoryEEPFvvEv() {
 var label = 0, sp = 0; //@line 463
 sp = STACKTOP; //@line 464
 return 0 | 0; //@line 465
}
function __ZNSt9bad_allocC2Ev($0) {
 $0 = $0 | 0; //@line 11958
 var label = 0, sp = 0; //@line 11959
 sp = STACKTOP; //@line 11960
 SAFE_HEAP_STORE($0 | 0, 1304 | 0, 4);
 return;
}
function __ZNSt3__219__shared_weak_countD0Ev($0) {
 $0 = $0 | 0; //@line 9755
 var label = 0, sp = 0; //@line 9756
 sp = STACKTOP; //@line 9757
 __ZdlPv($0); //@line 9758
 return;
}
function __ZN10emscripten8internal11NoBaseClass11getUpcasterI13StringFactoryEEPFvvEv() {
 var label = 0, sp = 0; //@line 458
 sp = STACKTOP; //@line 459
 return 0 | 0; //@line 460
}
function b11(p0, p1, p2, p3) {
 p0 = p0 | 0; //@line 12576
 p1 = p1 | 0; //@line 12576
 p2 = p2 | 0; //@line 12576
 p3 = p3 | 0; //@line 12576
 nullFunc_viiii(11); //@line 12576
}
function __ZN10emscripten8internal14ArgArrayGetterINS0_8TypeListIJEEEE3getEv() {
 var label = 0, sp = 0; //@line 1566
 sp = STACKTOP; //@line 1567
 return 6568 | 0; //@line 1568
}
function ___pthread_self_448() {
 var $0 = 0, label = 0, sp = 0; //@line 6028
 sp = STACKTOP; //@line 6029
 $0 = _pthread_self() | 0; //@line 6030
 return $0 | 0; //@line 6031
}
function ___pthread_self_108() {
 var $0 = 0, label = 0, sp = 0; //@line 3209
 sp = STACKTOP; //@line 3210
 $0 = _pthread_self() | 0; //@line 3211
 return $0 | 0; //@line 3212
}
function ___pthread_self_105() {
 var $0 = 0, label = 0, sp = 0; //@line 6034
 sp = STACKTOP; //@line 6035
 $0 = _pthread_self() | 0; //@line 6036
 return $0 | 0; //@line 6037
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewItEEE3getEv() {
 var label = 0, sp = 0; //@line 2788
 sp = STACKTOP; //@line 2789
 return 192 | 0; //@line 2790
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIsEEE3getEv() {
 var label = 0, sp = 0; //@line 2804
 sp = STACKTOP; //@line 2805
 return 200 | 0; //@line 2806
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewImEEE3getEv() {
 var label = 0, sp = 0; //@line 2724
 sp = STACKTOP; //@line 2725
 return 160 | 0; //@line 2726
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIlEEE3getEv() {
 var label = 0, sp = 0; //@line 2740
 sp = STACKTOP; //@line 2741
 return 168 | 0; //@line 2742
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIjEEE3getEv() {
 var label = 0, sp = 0; //@line 2756
 sp = STACKTOP; //@line 2757
 return 176 | 0; //@line 2758
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIiEEE3getEv() {
 var label = 0, sp = 0; //@line 2772
 sp = STACKTOP; //@line 2773
 return 184 | 0; //@line 2774
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIhEEE3getEv() {
 var label = 0, sp = 0; //@line 2820
 sp = STACKTOP; //@line 2821
 return 208 | 0; //@line 2822
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIfEEE3getEv() {
 var label = 0, sp = 0; //@line 2708
 sp = STACKTOP; //@line 2709
 return 152 | 0; //@line 2710
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIeEEE3getEv() {
 var label = 0, sp = 0; //@line 2676
 sp = STACKTOP; //@line 2677
 return 136 | 0; //@line 2678
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIdEEE3getEv() {
 var label = 0, sp = 0; //@line 2692
 sp = STACKTOP; //@line 2693
 return 144 | 0; //@line 2694
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIcEEE3getEv() {
 var label = 0, sp = 0; //@line 2852
 sp = STACKTOP; //@line 2853
 return 224 | 0; //@line 2854
}
function __ZN10emscripten8internal11LightTypeIDINS_11memory_viewIaEEE3getEv() {
 var label = 0, sp = 0; //@line 2836
 sp = STACKTOP; //@line 2837
 return 216 | 0; //@line 2838
}
function __ZNSt3__214__shared_countD0Ev($0) {
 $0 = $0 | 0; //@line 9748
 var label = 0, sp = 0; //@line 9749
 sp = STACKTOP; //@line 9750
 __ZdlPv($0); //@line 9751
 return;
}
function __ZN10emscripten8internal19getGenericSignatureIJiiiEEEPKcv() {
 var label = 0, sp = 0; //@line 1599
 sp = STACKTOP; //@line 1600
 return 1843 | 0; //@line 1601
}
function __ZN10emscripten8internal11LightTypeIDIPK13StringFactoryE3getEv() {
 var label = 0, sp = 0; //@line 522
 sp = STACKTOP; //@line 523
 return 32 | 0; //@line 524
}
function b0(p0, p1, p2) {
 p0 = p0 | 0; //@line 12528
 p1 = p1 | 0; //@line 12528
 p2 = p2 | 0; //@line 12528
 nullFunc_iiii(0); //@line 12528
 return 0; //@line 12528
}
function __ZNKSt9bad_alloc4whatEv($0) {
 $0 = $0 | 0; //@line 11261
 var label = 0, sp = 0; //@line 11262
 sp = STACKTOP; //@line 11263
 return 6324 | 0; //@line 11264
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexItEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2783
 sp = STACKTOP; //@line 2784
 return 3; //@line 2785
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIsEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2799
 sp = STACKTOP; //@line 2800
 return 2; //@line 2801
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexImEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2719
 sp = STACKTOP; //@line 2720
 return 5; //@line 2721
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIlEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2735
 sp = STACKTOP; //@line 2736
 return 4; //@line 2737
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIjEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2751
 sp = STACKTOP; //@line 2752
 return 5; //@line 2753
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIiEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2767
 sp = STACKTOP; //@line 2768
 return 4; //@line 2769
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIhEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2815
 sp = STACKTOP; //@line 2816
 return 1; //@line 2817
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIfEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2703
 sp = STACKTOP; //@line 2704
 return 6; //@line 2705
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIeEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2671
 sp = STACKTOP; //@line 2672
 return 7; //@line 2673
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIdEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2687
 sp = STACKTOP; //@line 2688
 return 7; //@line 2689
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIcEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2847
 sp = STACKTOP; //@line 2848
 return 0; //@line 2849
}
function __ZN12_GLOBAL__N_118getTypedArrayIndexIaEENS_15TypedArrayIndexEv() {
 var label = 0, sp = 0; //@line 2831
 sp = STACKTOP; //@line 2832
 return 0; //@line 2833
}
function __ZN10emscripten8internal11LightTypeIDIP13StringFactoryE3getEv() {
 var label = 0, sp = 0; //@line 517
 sp = STACKTOP; //@line 518
 return 16 | 0; //@line 519
}
function __ZN10emscripten8internal19getGenericSignatureIJiEEEPKcv() {
 var label = 0, sp = 0; //@line 1594
 sp = STACKTOP; //@line 1595
 return 1841 | 0; //@line 1596
}
function __ZN10emscripten8internal11LightTypeIDI13StringFactoryE3getEv() {
 var label = 0, sp = 0; //@line 512
 sp = STACKTOP; //@line 513
 return 8 | 0; //@line 514
}
function __ZN10emscripten8internal19getGenericSignatureIJviEEEPKcv() {
 var label = 0, sp = 0; //@line 537
 sp = STACKTOP; //@line 538
 return 1562 | 0; //@line 539
}
function __ZN10emscripten8internal19getGenericSignatureIJiiEEEPKcv() {
 var label = 0, sp = 0; //@line 527
 sp = STACKTOP; //@line 528
 return 1557 | 0; //@line 529
}
function __ZNK10__cxxabiv116__shim_type_info5noop2Ev($0) {
 $0 = $0 | 0; //@line 10585
 var label = 0, sp = 0; //@line 10586
 sp = STACKTOP; //@line 10587
 return;
}
function __ZNK10__cxxabiv116__shim_type_info5noop1Ev($0) {
 $0 = $0 | 0; //@line 10579
 var label = 0, sp = 0; //@line 10580
 sp = STACKTOP; //@line 10581
 return;
}
function __ZN10emscripten8internal19getGenericSignatureIJvEEEPKcv() {
 var label = 0, sp = 0; //@line 532
 sp = STACKTOP; //@line 533
 return 1560 | 0; //@line 534
}
function __ZN10emscripten8internal11LightTypeIDIRNS_3valEE3getEv() {
 var label = 0, sp = 0; //@line 1135
 sp = STACKTOP; //@line 1136
 return 48 | 0; //@line 1137
}
function __ZN10emscripten8internal11LightTypeIDINS_3valEE3getEv() {
 var label = 0, sp = 0; //@line 2857
 sp = STACKTOP; //@line 2858
 return 48 | 0; //@line 2859
}
function __GLOBAL__sub_I_StringFactory_cpp() {
 var label = 0, sp = 0; //@line 2287
 sp = STACKTOP; //@line 2288
 ___cxx_global_var_init(); //@line 2289
 return;
}
function __ZN10__cxxabiv116__shim_type_infoD2Ev($0) {
 $0 = $0 | 0; //@line 10565
 var label = 0, sp = 0; //@line 10566
 sp = STACKTOP; //@line 10567
 return;
}
function __ZN10emscripten8internal11LightTypeIDIvE3getEv() {
 var label = 0, sp = 0; //@line 3003
 sp = STACKTOP; //@line 3004
 return 472 | 0; //@line 3005
}
function __ZN10emscripten8internal11LightTypeIDItE3getEv() {
 var label = 0, sp = 0; //@line 2949
 sp = STACKTOP; //@line 2950
 return 528 | 0; //@line 2951
}
function __ZN10emscripten8internal11LightTypeIDIsE3getEv() {
 var label = 0, sp = 0; //@line 2960
 sp = STACKTOP; //@line 2961
 return 520 | 0; //@line 2962
}
function __ZN10emscripten8internal11LightTypeIDImE3getEv() {
 var label = 0, sp = 0; //@line 2905
 sp = STACKTOP; //@line 2906
 return 560 | 0; //@line 2907
}
function __ZN10emscripten8internal11LightTypeIDIlE3getEv() {
 var label = 0, sp = 0; //@line 2916
 sp = STACKTOP; //@line 2917
 return 552 | 0; //@line 2918
}
function __ZN10emscripten8internal11LightTypeIDIjE3getEv() {
 var label = 0, sp = 0; //@line 2927
 sp = STACKTOP; //@line 2928
 return 544 | 0; //@line 2929
}
function __ZN10emscripten8internal11LightTypeIDIiE3getEv() {
 var label = 0, sp = 0; //@line 2938
 sp = STACKTOP; //@line 2939
 return 536 | 0; //@line 2940
}
function __ZN10emscripten8internal11LightTypeIDIhE3getEv() {
 var label = 0, sp = 0; //@line 2971
 sp = STACKTOP; //@line 2972
 return 504 | 0; //@line 2973
}
function __ZN10emscripten8internal11LightTypeIDIfE3getEv() {
 var label = 0, sp = 0; //@line 2894
 sp = STACKTOP; //@line 2895
 return 568 | 0; //@line 2896
}
function __ZN10emscripten8internal11LightTypeIDIdE3getEv() {
 var label = 0, sp = 0; //@line 2883
 sp = STACKTOP; //@line 2884
 return 576 | 0; //@line 2885
}
function __ZN10emscripten8internal11LightTypeIDIcE3getEv() {
 var label = 0, sp = 0; //@line 2993
 sp = STACKTOP; //@line 2994
 return 496 | 0; //@line 2995
}
function __ZN10emscripten8internal11LightTypeIDIbE3getEv() {
 var label = 0, sp = 0; //@line 2998
 sp = STACKTOP; //@line 2999
 return 488 | 0; //@line 3000
}
function __ZN10emscripten8internal11LightTypeIDIaE3getEv() {
 var label = 0, sp = 0; //@line 2982
 sp = STACKTOP; //@line 2983
 return 512 | 0; //@line 2984
}
function _llvm_bswap_i32(x) {
 x = x | 0; //@line 12439
 return (x & 255) << 24 | (x >> 8 & 255) << 16 | (x >> 16 & 255) << 8 | x >>> 24 | 0; //@line 12440
}
function __GLOBAL__sub_I_bind_cpp() {
 var label = 0, sp = 0; //@line 2293
 sp = STACKTOP; //@line 2294
 ___cxx_global_var_init_2(); //@line 2295
 return;
}
function dynCall_i(index) {
 index = index | 0; //@line 12459
 return FUNCTION_TABLE_i[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127]() | 0; //@line 12461
}
function __ZN10emscripten8internal11NoBaseClass6verifyI13StringFactoryEEvv() {
 var label = 0, sp = 0; //@line 443
 sp = STACKTOP; //@line 444
 return;
}
function __ZdlPv($0) {
 $0 = $0 | 0; //@line 9852
 var label = 0, sp = 0; //@line 9853
 sp = STACKTOP; //@line 9854
 _free($0); //@line 9855
 return;
}
function __ZN10emscripten8internal11NoBaseClass3getEv() {
 var label = 0, sp = 0; //@line 499
 sp = STACKTOP; //@line 500
 return 0 | 0; //@line 501
}
function _dummy_738($0) {
 $0 = $0 | 0; //@line 3220
 var label = 0, sp = 0; //@line 3221
 sp = STACKTOP; //@line 3222
 return $0 | 0; //@line 3223
}
function __ZNSt3__214__shared_countD2Ev($0) {
 $0 = $0 | 0; //@line 9742
 var label = 0, sp = 0; //@line 9743
 sp = STACKTOP; //@line 9744
 return;
}
function ___lockfile($0) {
 $0 = $0 | 0; //@line 4267
 var label = 0, sp = 0; //@line 4268
 sp = STACKTOP; //@line 4269
 return 0; //@line 4270
}
function dynCall_v(index) {
 index = index | 0; //@line 12494
 FUNCTION_TABLE_v[(SAFE_FT_MASK(index | 0, 127 | 0) | 0) & 127](); //@line 12496
}
function b6(p0, p1, p2) {
 p0 = p0 | 0; //@line 12549
 p1 = p1 | 0; //@line 12549
 p2 = p2 | 0; //@line 12549
 nullFunc_viii(6); //@line 12549
}
function __ZNSt9type_infoD2Ev($0) {
 $0 = $0 | 0; //@line 11123
 var label = 0, sp = 0; //@line 11124
 sp = STACKTOP; //@line 11125
 return;
}
function __ZNSt9exceptionD2Ev($0) {
 $0 = $0 | 0; //@line 11267
 var label = 0, sp = 0; //@line 11268
 sp = STACKTOP; //@line 11269
 return;
}
function __ZNSt9bad_allocD2Ev($0) {
 $0 = $0 | 0; //@line 11247
 var label = 0, sp = 0; //@line 11248
 sp = STACKTOP; //@line 11249
 return;
}
function _emscripten_get_global_libc() {
 var label = 0, sp = 0; //@line 3022
 sp = STACKTOP; //@line 3023
 return 6568 | 0; //@line 3024
}
function b10(p0, p1) {
 p0 = p0 | 0; //@line 12573
 p1 = p1 | 0; //@line 12573
 nullFunc_iii(10); //@line 12573
 return 0; //@line 12573
}
function ___unlockfile($0) {
 $0 = $0 | 0; //@line 4273
 var label = 0, sp = 0; //@line 4274
 sp = STACKTOP; //@line 4275
 return;
}
function _pthread_self() {
 var label = 0, sp = 0; //@line 3215
 sp = STACKTOP; //@line 3216
 return 796 | 0; //@line 3217
}
function setDynamicTop(value) {
 value = value | 0; //@line 35
 SAFE_HEAP_STORE(DYNAMICTOP_PTR | 0, value | 0, 4);
}
function b4(p0, p1) {
 p0 = p0 | 0; //@line 12543
 p1 = p1 | 0; //@line 12543
 nullFunc_vii(4); //@line 12543
}
function __emval_decref__wrapper(p0) {
 p0 = p0 | 0; //@line 12540
 __emval_decref(p0 | 0); //@line 12540
}
function b5(p0) {
 p0 = p0 | 0; //@line 12546
 nullFunc_ii(5); //@line 12546
 return 0; //@line 12546
}
function setTempRet0(value) {
 value = value | 0; //@line 111
 tempRet0 = value; //@line 112
}
function stackRestore(top) {
 top = top | 0; //@line 15
 STACKTOP = top; //@line 16
}
function ___cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual(); //@line 12555
}
function b3(p0) {
 p0 = p0 | 0; //@line 12537
 nullFunc_vi(3); //@line 12537
}
function ___cxa_end_catch__wrapper() {
 ___cxa_end_catch(); //@line 12561
}
function b2() {
 nullFunc_i(2); //@line 12534
 return 0; //@line 12534
}
function ___cxa_rethrow__wrapper() {
 ___cxa_rethrow(); //@line 12558
}
function getTempRet0() {
 return tempRet0 | 0; //@line 115
}
function stackSave() {
 return STACKTOP | 0; //@line 12
}
function b7() {
 nullFunc_v(7); //@line 12552
}

// EMSCRIPTEN_END_FUNCS
var FUNCTION_TABLE_iiii = [b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,___stdio_write,___stdio_seek,_sn_write,b0,b0,b0,b0,b0,b0,b0,b0,b0,__ZNK10__cxxabiv117__class_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0,b0
,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,__ZNK10__cxxabiv123__fundamental_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,__ZNK10__cxxabiv119__pointer_type_info9can_catchEPKNS_16__shim_type_infoERPv,b0,b0,b0,b0,b0,__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6appendEPKcj,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
,b0,b0,b0,b0,b0];
var FUNCTION_TABLE_viiiii = [b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,__ZNK10__cxxabiv117__class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1
,b1,__ZNK10__cxxabiv120__si_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,__ZNK10__cxxabiv121__vmi_class_type_info16search_below_dstEPNS_19__dynamic_cast_infoEPKvib,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
,b1,b1,b1,b1,b1];
var FUNCTION_TABLE_i = [b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE14construct_nullEv,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,___cxa_get_globals_fast,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
,b2,b2,b2,b2,b2,b2,b2,b2,b2];
var FUNCTION_TABLE_vi = [b3,__ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEED2Ev,__ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEED0Ev,__ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE16__on_zero_sharedEv,b3,__ZNSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE21__on_zero_shared_weakEv,__ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEED2Ev,__ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEED0Ev,__ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEE16__on_zero_sharedEv,b3,__ZNSt3__220__shared_ptr_emplaceI13StringFactoryNS_9allocatorIS1_EEE21__on_zero_shared_weakEv,b3,b3,b3,b3,__ZNSt3__214__shared_countD2Ev,__ZNSt3__214__shared_countD0Ev,b3,__ZNSt3__219__shared_weak_countD0Ev,b3,__ZN10__cxxabiv116__shim_type_infoD2Ev,__ZN10__cxxabiv117__class_type_infoD0Ev,__ZNK10__cxxabiv116__shim_type_info5noop1Ev,__ZNK10__cxxabiv116__shim_type_info5noop2Ev,b3,b3,b3,b3,__ZN10__cxxabiv120__si_class_type_infoD0Ev
,b3,b3,b3,__ZNSt9bad_allocD2Ev,__ZNSt9bad_allocD0Ev,b3,__ZNSt11logic_errorD2Ev,__ZNSt11logic_errorD0Ev,b3,__ZNSt12length_errorD0Ev,__ZN10__cxxabiv123__fundamental_type_infoD0Ev,b3,__ZN10__cxxabiv119__pointer_type_infoD0Ev,b3,__ZN10__cxxabiv121__vmi_class_type_infoD0Ev,b3,b3,b3,b3,b3,b3,__ZN10emscripten8internal14raw_destructorI13StringFactoryEEvPT_,__ZNSt3__211make_sharedI13StringFactoryJEEENS_9enable_ifIXntsr8is_arrayIT_EE5valueENS_10shared_ptrIS3_EEE4typeEDpOT0_,b3,b3,b3,__ZN10emscripten8internal14raw_destructorINSt3__210shared_ptrI13StringFactoryEEEEvPT_,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,__emval_decref__wrapper,b3,b3,__ZN13StringFactoryC2Ev,b3,b3,b3,b3,b3,b3,__ZN10__cxxabiv112_GLOBAL__N_19destruct_EPv,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
,b3,b3,b3,b3,b3,b3,b3,b3,b3];
var FUNCTION_TABLE_vii = [b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,__ZNSt3__29to_stringEj,b4,b4,b4,b4,b4,b4,b4,b4,b4,__ZN13StringFactory9getStringEv,b4
,b4,b4,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2ENS_3valE,b4,b4,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2ERKS6_,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterC2EOS6_,__ZNSt3__217__compressed_pairIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterEEC2EOS9_,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE11val_deleterclEPKv,b4,b4,b4,b4,b4,b4,b4,__ZNSt11logic_errorC2EPKc,b4,b4,__ZNSt3__218__libcpp_refstringC2EPKc,b4,b4,b4,_abort_message,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
,b4,b4,b4,b4,b4,b4,b4,b4,b4];
var FUNCTION_TABLE_ii = [b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,___stdio_close,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5,b5,b5,__ZNKSt9bad_alloc4whatEv,b5,b5,__ZNKSt11logic_error4whatEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,__ZN10emscripten8internal13getActualTypeI13StringFactoryEEPKvPT_,b5,b5,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE3getERKS4_,b5,b5,b5,__ZN10emscripten8internal7InvokerINSt3__210shared_ptrI13StringFactoryEEJEE6invokeEPFS5_vE,b5,b5
,__ZN10emscripten8internal18GenericBindingTypeINSt3__210shared_ptrI13StringFactoryEEE10toWireTypeEOS5_,__ZN10emscripten3val14take_ownershipEPNS_8internal7_EM_VALE,b5,b5,__Znwj,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,__ZN10emscripten8internal11BindingTypeINSt3__212basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEE10toWireTypeERKS8_,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
,b5,b5,b5,b5,b5,b5,b5,b5,b5];
var FUNCTION_TABLE_viii = [b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,__ZNSt3__212_GLOBAL__N_19as_stringINS_12basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEPFiPcjPKczEjEET_T0_SD_PKNSD_10value_typeET1_,__ZNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEE6resizeEjc,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
,b6,b6,b6,b6,b6,b6,b6,b6,b6];
var FUNCTION_TABLE_v = [b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,___cxa_pure_virtual__wrapper,b7,__ZL25default_terminate_handlerv,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7,b7,b7,b7,b7,___cxa_rethrow__wrapper,___cxa_end_catch__wrapper,b7,b7,b7,b7,b7,b7,b7,b7,b7,__ZN10__cxxabiv112_GLOBAL__N_110construct_Ev,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7,b7
,b7,b7,b7,b7,b7,b7,b7,b7,b7];
var FUNCTION_TABLE_iiiii = [b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,__emval_call__wrapper,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
,b8,b8,b8,b8,b8,b8,b8,b8,b8];
var FUNCTION_TABLE_viiiiii = [b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,__ZNK10__cxxabiv117__class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b9,b9,b9
,__ZNK10__cxxabiv120__si_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,__ZNK10__cxxabiv121__vmi_class_type_info16search_above_dstEPNS_19__dynamic_cast_infoEPKvS4_ib,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9,b9
,b9,b9,b9,b9,b9];
var FUNCTION_TABLE_iii = [b10,b10,b10,b10,__ZNKSt3__220__shared_ptr_pointerIP13StringFactoryN10emscripten15smart_ptr_traitINS_10shared_ptrIS1_EEE11val_deleterENS_9allocatorIS1_EEE13__get_deleterERKSt9type_info,b10,b10,b10,b10,__ZNKSt3__219__shared_weak_count13__get_deleterERKSt9type_info,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,__ZN10emscripten15smart_ptr_traitINSt3__210shared_ptrI13StringFactoryEEE5shareEPS3_PNS_8internal7_EM_VALE,b10,b10,b10,__ZN10emscripten8internal13MethodInvokerIM13StringFactoryFNSt3__212basic_stringIcNS3_11char_traitsIcEENS3_9allocatorIcEEEEvES9_PS2_JEE6invokeERKSB_SC_
,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,__ZN10emscripten3valaSEOS0_,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10,b10
,b10,b10,b10,b10,b10,b10,b10,b10,b10];
var FUNCTION_TABLE_viiii = [b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,__ZNK10__cxxabiv117__class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11
,b11,b11,__ZNK10__cxxabiv120__si_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,__ZNK10__cxxabiv121__vmi_class_type_info27has_unambiguous_public_baseEPNS_19__dynamic_cast_infoEPvi,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11,b11
,b11,b11,b11,__ZNSt3__210shared_ptrI13StringFactoryEC2IS1_N10emscripten15smart_ptr_traitIS2_E11val_deleterEEEPT_T0_NS_9enable_ifIXsr14is_convertibleIS9_PS1_EE5valueENS2_5__natEE4typeE,b11];

  return { _llvm_cttz_i32: _llvm_cttz_i32, ___cxa_can_catch: ___cxa_can_catch, _free: _free, ___udivmoddi4: ___udivmoddi4, ___cxa_is_pointer_type: ___cxa_is_pointer_type, _i64Add: _i64Add, _i64Subtract: _i64Subtract, _memset: _memset, _malloc: _malloc, _emscripten_get_global_libc: _emscripten_get_global_libc, _memcpy: _memcpy, ___getTypeName: ___getTypeName, _llvm_bswap_i32: _llvm_bswap_i32, _sbrk: _sbrk, _bitshift64Lshr: _bitshift64Lshr, ___udivdi3: ___udivdi3, ___uremdi3: ___uremdi3, ___errno_location: ___errno_location, _bitshift64Shl: _bitshift64Shl, __GLOBAL__sub_I_StringFactory_cpp: __GLOBAL__sub_I_StringFactory_cpp, __GLOBAL__sub_I_bind_cpp: __GLOBAL__sub_I_bind_cpp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setDynamicTop: setDynamicTop, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setThrew: setThrew, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, establishStackSpace: establishStackSpace, setThrew: setThrew, setTempRet0: setTempRet0, getTempRet0: getTempRet0, setDynamicTop: setDynamicTop, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_i: dynCall_i, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
(Module.asmGlobalArg, Module.asmLibraryArg, buffer);

var real_stackSave = asm["stackSave"]; asm["stackSave"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackSave.apply(null, arguments);
};

var real_setDynamicTop = asm["setDynamicTop"]; asm["setDynamicTop"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setDynamicTop.apply(null, arguments);
};

var real_getTempRet0 = asm["getTempRet0"]; asm["getTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_getTempRet0.apply(null, arguments);
};

var real__bitshift64Lshr = asm["_bitshift64Lshr"]; asm["_bitshift64Lshr"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Lshr.apply(null, arguments);
};

var real__bitshift64Shl = asm["_bitshift64Shl"]; asm["_bitshift64Shl"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__bitshift64Shl.apply(null, arguments);
};

var real____cxa_is_pointer_type = asm["___cxa_is_pointer_type"]; asm["___cxa_is_pointer_type"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____cxa_is_pointer_type.apply(null, arguments);
};

var real__llvm_cttz_i32 = asm["_llvm_cttz_i32"]; asm["_llvm_cttz_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_cttz_i32.apply(null, arguments);
};

var real__sbrk = asm["_sbrk"]; asm["_sbrk"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__sbrk.apply(null, arguments);
};

var real__llvm_bswap_i32 = asm["_llvm_bswap_i32"]; asm["_llvm_bswap_i32"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__llvm_bswap_i32.apply(null, arguments);
};

var real____uremdi3 = asm["___uremdi3"]; asm["___uremdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____uremdi3.apply(null, arguments);
};

var real_stackAlloc = asm["stackAlloc"]; asm["stackAlloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackAlloc.apply(null, arguments);
};

var real__i64Subtract = asm["_i64Subtract"]; asm["_i64Subtract"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Subtract.apply(null, arguments);
};

var real___GLOBAL__sub_I_bind_cpp = asm["__GLOBAL__sub_I_bind_cpp"]; asm["__GLOBAL__sub_I_bind_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_bind_cpp.apply(null, arguments);
};

var real____udivmoddi4 = asm["___udivmoddi4"]; asm["___udivmoddi4"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivmoddi4.apply(null, arguments);
};

var real_setTempRet0 = asm["setTempRet0"]; asm["setTempRet0"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setTempRet0.apply(null, arguments);
};

var real__i64Add = asm["_i64Add"]; asm["_i64Add"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__i64Add.apply(null, arguments);
};

var real__emscripten_get_global_libc = asm["_emscripten_get_global_libc"]; asm["_emscripten_get_global_libc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__emscripten_get_global_libc.apply(null, arguments);
};

var real____getTypeName = asm["___getTypeName"]; asm["___getTypeName"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____getTypeName.apply(null, arguments);
};

var real____udivdi3 = asm["___udivdi3"]; asm["___udivdi3"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____udivdi3.apply(null, arguments);
};

var real____errno_location = asm["___errno_location"]; asm["___errno_location"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____errno_location.apply(null, arguments);
};

var real____cxa_can_catch = asm["___cxa_can_catch"]; asm["___cxa_can_catch"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real____cxa_can_catch.apply(null, arguments);
};

var real__free = asm["_free"]; asm["_free"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__free.apply(null, arguments);
};

var real_setThrew = asm["setThrew"]; asm["setThrew"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_setThrew.apply(null, arguments);
};

var real_establishStackSpace = asm["establishStackSpace"]; asm["establishStackSpace"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_establishStackSpace.apply(null, arguments);
};

var real_stackRestore = asm["stackRestore"]; asm["stackRestore"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real_stackRestore.apply(null, arguments);
};

var real__malloc = asm["_malloc"]; asm["_malloc"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real__malloc.apply(null, arguments);
};

var real___GLOBAL__sub_I_StringFactory_cpp = asm["__GLOBAL__sub_I_StringFactory_cpp"]; asm["__GLOBAL__sub_I_StringFactory_cpp"] = function() {
assert(runtimeInitialized, 'you need to wait for the runtime to be ready (e.g. wait for main() to be called)');
assert(!runtimeExited, 'the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)');
return real___GLOBAL__sub_I_StringFactory_cpp.apply(null, arguments);
};
var stackSave = Module["stackSave"] = asm["stackSave"];
var setDynamicTop = Module["setDynamicTop"] = asm["setDynamicTop"];
var _memset = Module["_memset"] = asm["_memset"];
var getTempRet0 = Module["getTempRet0"] = asm["getTempRet0"];
var _bitshift64Lshr = Module["_bitshift64Lshr"] = asm["_bitshift64Lshr"];
var _bitshift64Shl = Module["_bitshift64Shl"] = asm["_bitshift64Shl"];
var ___cxa_is_pointer_type = Module["___cxa_is_pointer_type"] = asm["___cxa_is_pointer_type"];
var _llvm_cttz_i32 = Module["_llvm_cttz_i32"] = asm["_llvm_cttz_i32"];
var _sbrk = Module["_sbrk"] = asm["_sbrk"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _llvm_bswap_i32 = Module["_llvm_bswap_i32"] = asm["_llvm_bswap_i32"];
var ___uremdi3 = Module["___uremdi3"] = asm["___uremdi3"];
var stackAlloc = Module["stackAlloc"] = asm["stackAlloc"];
var _i64Subtract = Module["_i64Subtract"] = asm["_i64Subtract"];
var __GLOBAL__sub_I_bind_cpp = Module["__GLOBAL__sub_I_bind_cpp"] = asm["__GLOBAL__sub_I_bind_cpp"];
var ___udivmoddi4 = Module["___udivmoddi4"] = asm["___udivmoddi4"];
var setTempRet0 = Module["setTempRet0"] = asm["setTempRet0"];
var _i64Add = Module["_i64Add"] = asm["_i64Add"];
var _emscripten_get_global_libc = Module["_emscripten_get_global_libc"] = asm["_emscripten_get_global_libc"];
var ___getTypeName = Module["___getTypeName"] = asm["___getTypeName"];
var ___udivdi3 = Module["___udivdi3"] = asm["___udivdi3"];
var ___errno_location = Module["___errno_location"] = asm["___errno_location"];
var ___cxa_can_catch = Module["___cxa_can_catch"] = asm["___cxa_can_catch"];
var _free = Module["_free"] = asm["_free"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var setThrew = Module["setThrew"] = asm["setThrew"];
var establishStackSpace = Module["establishStackSpace"] = asm["establishStackSpace"];
var stackRestore = Module["stackRestore"] = asm["stackRestore"];
var _malloc = Module["_malloc"] = asm["_malloc"];
var __GLOBAL__sub_I_StringFactory_cpp = Module["__GLOBAL__sub_I_StringFactory_cpp"] = asm["__GLOBAL__sub_I_StringFactory_cpp"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_i = Module["dynCall_i"] = asm["dynCall_i"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
;

Runtime.stackAlloc = Module['stackAlloc'];
Runtime.stackSave = Module['stackSave'];
Runtime.stackRestore = Module['stackRestore'];
Runtime.establishStackSpace = Module['establishStackSpace'];

Runtime.setDynamicTop = Module['setDynamicTop'];

Runtime.setTempRet0 = Module['setTempRet0'];
Runtime.getTempRet0 = Module['getTempRet0'];



// === Auto-generated postamble setup entry stuff ===

Module['asm'] = asm;





function ExitStatus(status) {
  this.name = "ExitStatus";
  this.message = "Program terminated with exit(" + status + ")";
  this.status = status;
};
ExitStatus.prototype = new Error();
ExitStatus.prototype.constructor = ExitStatus;

var initialStackTop;
var preloadStartTime = null;
var calledMain = false;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!Module['calledRun']) run();
  if (!Module['calledRun']) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
}

Module['callMain'] = Module.callMain = function callMain(args) {
  assert(runDependencies == 0, 'cannot call main when async dependencies remain! (listen on __ATMAIN__)');
  assert(__ATPRERUN__.length == 0, 'cannot call main when preRun functions remain to be called');

  args = args || [];

  ensureInitRuntime();

  var argc = args.length+1;
  function pad() {
    for (var i = 0; i < 4-1; i++) {
      argv.push(0);
    }
  }
  var argv = [allocate(intArrayFromString(Module['thisProgram']), 'i8', ALLOC_NORMAL) ];
  pad();
  for (var i = 0; i < argc-1; i = i + 1) {
    argv.push(allocate(intArrayFromString(args[i]), 'i8', ALLOC_NORMAL));
    pad();
  }
  argv.push(0);
  argv = allocate(argv, 'i32', ALLOC_NORMAL);


  try {

    var ret = Module['_main'](argc, argv, 0);


    // if we're not running an evented main loop, it's time to exit
    exit(ret, /* implicit = */ true);
  }
  catch(e) {
    if (e instanceof ExitStatus) {
      // exit() throws this once it's done to make sure execution
      // has been stopped completely
      return;
    } else if (e == 'SimulateInfiniteLoop') {
      // running an evented main loop, don't immediately exit
      Module['noExitRuntime'] = true;
      return;
    } else {
      var toLog = e;
      if (e && typeof e === 'object' && e.stack) {
        toLog = [e, e.stack];
      }
      Module.printErr('exception thrown: ' + toLog);
      Module['quit'](1, e);
    }
  } finally {
    calledMain = true;
  }
}




function run(args) {
  args = args || Module['arguments'];

  if (preloadStartTime === null) preloadStartTime = Date.now();

  if (runDependencies > 0) {
    Module.printErr('run() called, but dependencies remain, so not running');
    return;
  }

  writeStackCookie();

  preRun();

  if (runDependencies > 0) return; // a preRun added a dependency, run will be called later
  if (Module['calledRun']) return; // run may have just been called through dependencies being fulfilled just in this very frame

  function doRun() {
    if (Module['calledRun']) return; // run may have just been called while the async setStatus time below was happening
    Module['calledRun'] = true;

    if (ABORT) return;

    ensureInitRuntime();

    preMain();

    if (ENVIRONMENT_IS_WEB && preloadStartTime !== null) {
      Module.printErr('pre-main prep time: ' + (Date.now() - preloadStartTime) + ' ms');
    }

    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    if (Module['_main'] && shouldRunNow) Module['callMain'](args);

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else {
    doRun();
  }
  checkStackCookie();
}
Module['run'] = Module.run = run;

function exit(status, implicit) {
  if (implicit && Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') implicitly called by end of main(), but noExitRuntime, so not exiting the runtime (you can use emscripten_force_exit, if you want to force a true shutdown)');
    return;
  }

  if (Module['noExitRuntime']) {
    Module.printErr('exit(' + status + ') called, but noExitRuntime, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)');
  } else {

    ABORT = true;
    EXITSTATUS = status;
    STACKTOP = initialStackTop;

    exitRuntime();

    if (Module['onExit']) Module['onExit'](status);
  }

  if (ENVIRONMENT_IS_NODE) {
    process['exit'](status);
  }
  Module['quit'](status, new ExitStatus(status));
}
Module['exit'] = Module.exit = exit;

var abortDecorators = [];

function abort(what) {
  if (what !== undefined) {
    Module.print(what);
    Module.printErr(what);
    what = JSON.stringify(what)
  } else {
    what = '';
  }

  ABORT = true;
  EXITSTATUS = 1;

  var extra = '';

  var output = 'abort(' + what + ') at ' + stackTrace() + extra;
  if (abortDecorators) {
    abortDecorators.forEach(function(decorator) {
      output = decorator(output, what);
    });
  }
  throw output;
}
Module['abort'] = Module.abort = abort;

// {{PRE_RUN_ADDITIONS}}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

// shouldRunNow refers to calling main(), not run().
var shouldRunNow = true;
if (Module['noInitialRun']) {
  shouldRunNow = false;
}

Module["noExitRuntime"] = true;

run();

// {{POST_RUN_ADDITIONS}}





// {{MODULE_ADDITIONS}}





  return Module;
};
  return Module;
});


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(12)))

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 11;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })

});
//# sourceMappingURL=0.js.map