var path = require('path');

module.exports = {
    context: path.join(__dirname, './app'),
    entry: {
        bundle: './src/app.js',
    },
    output: {
        path: path.join(__dirname, './app', './build'),
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json']
    },
    devServer: {
        contentBase: './app',
        hot: true
    }
};
