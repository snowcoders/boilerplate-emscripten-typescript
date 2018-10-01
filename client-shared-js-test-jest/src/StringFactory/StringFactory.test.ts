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
        expect(instance).toBeDefined();
        expect(instance.StringFactory).toBeDefined;
    });

    it("GetString", () => {
        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).toBeDefined;
        let string_0 = stringFactory.getString();
        expect(string_0).not.toHaveLength(0);
        expect(string_0).toContain(0);
    });

    it("GetString twice returns different strings", () => {
        let stringFactory = new instance.StringFactory();
        expect(stringFactory.getString).toBeDefined;
        let string_0 = stringFactory.getString();
        let string_1 = stringFactory.getString();
        expect(string_1).not.toHaveLength(0);
        expect(string_1).toContain(1);
        expect(string_0).not.toEqual(string_1);
    });
});