(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./ship/client.shared"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client_shared_1 = require("./ship/client.shared");
    exports.createInstance = client_shared_1.createInstance;
});
//# sourceMappingURL=blah.js.map