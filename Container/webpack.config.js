const glob = require("glob");
const path = require( "path" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );
const OptimizeCSSAssetsPlugin = require( "optimize-css-assets-webpack-plugin" );
const FileManagerPlugin = require('filemanager-webpack-plugin');
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const configuration = require("./config");
const packageJson = require ("./package.json");

const _moduleAliases = packageJson._moduleAliases;
let absolutedAliases = {};

for (let alias in _moduleAliases) {
    if(_moduleAliases.hasOwnProperty(alias)){
        absolutedAliases[alias] = path.resolve(__dirname, _moduleAliases[alias])
    }
}

// Method to extract all files of sourcePath and compile them to distPath (with minified version and exclusion of files)
const getEntryFiles = (sourcePath, distPath, minified = true) => {
    let entryFiles = {};
    for (let file of glob.sync(sourcePath)) {
        entryFiles [distPath + path.parse (file).name] = file;
        if (minified) {
            entryFiles [distPath + path.parse (file).name + ".min"] = file;
        }
    }
    return entryFiles;
};

// - - - - - - - - - - - - - - - -
// Starting with Webpack functions
// - - - - - - - - - - - - - - - -

// generate object of all files to be processed
const entry = {
    // Theme files
    ...configuration.Themes.map (theme => ({
        ...getEntryFiles ("./themes/" + theme + "/scss/!(_)*.scss", "./dist/" + theme + "/css/"),
    })).reduce ((accumulator, currentValue) => ({ ...accumulator, ...currentValue})),
};

// resolve all aliases in the entry files (eg @develop)
const resolve = {
    modules: [
        path.resolve( "./" ),
        "node_modules"
    ],
    alias: absolutedAliases
};

// main processing of all entry files
// configuration of scss processor and bable js processor (ES6 -> ES5)
const generateFiles = {
    rules: [
        {
            test: /\.scss$/,
            use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            {
                loader: "css-loader", // translates CSS into CommonJS
                options: {
                    url: false
                }
            },
            {
                loader: "postcss-loader",
                options: {
                    plugins: () => [
                        require('postcss-inline-svg')({
                            removeFill: true,
                            xmlns: true,
                            path: process.cwd () + '/'
                        }),
                        require('autoprefixer'),
                    ]
                }
            },
            {
                loader: "sass-loader", // compiles Sass to CSS, using Dart-Sass by default
                options: {
                    implementation: require('sass'),
                },
            }
            ],
        }
    ],
};

// post precessing of all entry files after main processing
const optimization = {
    minimize: true,
    minimizer: [
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.min\.css$/g,
        }),
    ]
};

// start tools if processing of all entry files is done
const plugins = [
    new FriendlyErrorsWebpackPlugin({
        compilationSuccessInfo: {
            messages: ['Compilation was successful! We watch file changes and generate new distributed files.'],
        },
        clearConsole: true,
    }),
    new MiniCssExtractPlugin(),
    new FileManagerPlugin ({
        onEnd: {
            copy: [
                // copy logo and fonts
                ...configuration.Themes.map (theme => ({ source: './node_modules/@cake-hub/web-css_framework/themes/' + theme + '/assets/!(icons)**/*', destination: path.resolve(__dirname, './dist/' + theme) })).values (),
                // copy runtime.js
                ...configuration.Themes.map (theme => ({ source: './js/', destination: path.resolve(__dirname, './docs/_assets/js/') })).values (),

                { source: './dist/', destination: path.resolve(__dirname, './docs/_assets/themes/')},
                { source: './node_modules/@scw/sit-chat-widget/public/dist/chat-widget-legacy.min.js', destination: path.resolve(__dirname, './docs/_assets/js/chat-widget-legacy.min.js') },
                { source: './node_modules/@scw/sit-chat-widget/public/dist/chat-widget.css', destination: path.resolve(__dirname, './docs/_assets/css/chat-widget.min.css') },
            ],
        }
    }),
    new FixStyleOnlyEntriesPlugin (),
];

module.exports = {
    mode: 'development',
    output: {
      path: path.resolve(__dirname, './'),
    },
    context: path.join( __dirname, "./" ),
    entry: entry,
    resolve: resolve,
    module: generateFiles,
    optimization: optimization,
    plugins,
    stats: 'errors-warnings', // 'errors-warnings', 'verbose'
};
