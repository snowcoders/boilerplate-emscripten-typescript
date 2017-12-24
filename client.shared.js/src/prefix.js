(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      var v = factory(null, exports);
      if (v !== undefined) {
        module.exports = {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      }
    }
    else if (typeof define === "function" && define.amd) {
      // AMD. Register as an anonymous module.
      define(["require", "exports"], function (require, exports) {
        var v = factory(require, exports);
        return {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      });
    }
    else {
      // Browser globals (root is window)
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