(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
      var v = factory(require, exports);
      if (v !== undefined) {
        module.exports = {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      }
    }
    else if (typeof define === "function" && define.amd) {
      define(["require", "exports"], function (require, exports) {
        var v = factory(require, exports);
        return {
          createInstance: function (moduleParams) {
            return v(moduleParams);
        }};
      });
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