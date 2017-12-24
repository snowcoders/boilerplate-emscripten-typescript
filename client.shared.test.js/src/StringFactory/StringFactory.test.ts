﻿import { expect } from "chai";

// If moduleResolution is node
import { ClientShared } from "client.shared";
import { createInstance } from "client.shared/debug/client.shared"; // Seems if you get createInstance from client.shared, there are issues loading the mem file
// If moduleResolution is classic
// import { createInstance } from "../../node_modules/client.shared/client.shared";

describe("StringFactory", () => {
    let instance: ClientShared;
    beforeEach(() => {
        instance = createInstance({
            ENVIRONMENT:"WEB",
            onRuntimeInitialized: () => {
            },
            locateFile: function(filename) {
                if (filename === 'client.shared.js.mem') {
                    return "node_modules/client.shared/ship/client.shared.js.mem"
                }                
            },
        });
    });

    it("Make sure StringFactory exists", () => {
        expect(instance).to.exist;
        expect(instance.StringFactory).to.exist;
    });

    it("GetString", () => {
        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).to.exist;
        let string_0 = stringFactory.getString();
        expect(string_0).to.not.be.empty;
        expect(string_0).to.contain(0);
    });

    it("GetString twice returns different strings", () => {
        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).to.exist;
        let string_0 = stringFactory.getString();
        let string_1 = stringFactory.getString();
        expect(string_1).to.not.be.empty;
        expect(string_1).to.contain(1);
        expect(string_0).to.not.equal(string_1);
    });
});