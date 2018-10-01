declare module "client-shared-js" {
    export interface StringFactory {
        new(): StringFactory;
        getString(): string;
    }

    export interface ClientShared {
        StringFactory: StringFactory;
    }

    export default function Module(emscriptenArgs: any): ClientShared;
}