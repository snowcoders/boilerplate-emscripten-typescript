declare module 'client-shared' {
    interface StringFactory {
        new(): StringFactory;
        getString(): string;
    }
    interface ClientShared {
        StringFactory: StringFactory;
    }
    export function createInstance(emscriptenArgs: any): ClientShared;
}