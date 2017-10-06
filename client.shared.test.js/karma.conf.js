// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: "",
        frameworks: ["karma-typescript", "mocha", "chai"],
        files: [
            { pattern: "src/**/*.ts", included: true, watches: false }
        ],
        preprocessors: { "src/**/*.ts": ["karma-typescript"] },
        port: 8081,
        typescriptPreprocessor: {
            options: {
                sourceMap: true,
                noResolve: false
            },
            transformPath: function (path) {
                return path.replace(/\.ts$/, ".js");
            }
        },
        browsers: ["PhantomJS"],
        reporters: ["mocha", "karma-typescript"],
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity,
        plugins: [
            require("karma-typescript"),
            require("karma-sourcemap-writer"),
            require("karma-mocha-reporter"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-phantomjs-launcher")
        ],
        // reporter options
        mochaReporter: {
            output: 'full'
        },
        karmaTypescriptConfig: {
            coverageOptions:  {
                instrumentation:  true,
                exclude:  /\.(d|spec|test)\.ts/i,
                threshold:  {
                    file:  {
                        statements:  -10,
                        branches:  100,
                        functions:  100,
                        lines:  100,
                    }
                }
            }
        }
    })
}