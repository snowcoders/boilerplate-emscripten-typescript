import * as webpack from "webpack";

const config: webpack.Configuration = {
    entry: {
        knockout: "./knockout/index.ts",
        react: "./react/index.tsx"
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
        publicPath: "/dist/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json", ".html", ".js.mem"],
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

            // All scss files
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },

            // Knockout Only
            // HTML files for knockout templates
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader?exportAsEs6Default"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        // Knockout Only
        "knockout": "knockout",
        // React Only
        "react": "React",
        "react-dom": "ReactDOM"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};

export default config;