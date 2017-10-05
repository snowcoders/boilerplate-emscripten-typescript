import { expect } from "chai";

import * as createInstance from "client.shared.javascript/debug/client.shared";

describe("StringFactory", () => {
    it("Make sure StringFactory exists", () => {
        let instance = createInstance({
            onRuntimeInitialized: () => {
            }
        });

        expect(instance).to.exist;
        expect(instance.StringFactory).to.exist;
    });
    it("GetString", () => {
        let instance = createInstance({
            onRuntimeInitialized: () => {
            }
        });

        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).to.exist;
        let string_0 = stringFactory.getString();
        expect(string_0).to.not.be.empty;
        expect(string_0).to.contain(0);
    });
    it("GetString twice returns different strings", () => {
        let instance = createInstance({
            onRuntimeInitialized: () => {
            }
        });

        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).to.exist;
        let string_0 = stringFactory.getString();
        let string_1 = stringFactory.getString();
        expect(string_1).to.not.be.empty;
        expect(string_1).to.contain(1);
        expect(string_0).to.not.equal(string_1);
    });
});