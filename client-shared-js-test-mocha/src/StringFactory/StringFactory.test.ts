import { expect } from "chai";

import Module, { ClientShared } from "client-shared-js";

describe("StringFactory", () => {
    let instance: ClientShared;
    beforeEach((done) => {
        instance = (Module as any)({
            onRuntimeInitialized: () => {
                done();
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