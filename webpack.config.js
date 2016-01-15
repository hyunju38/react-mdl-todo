// For info about this file refer to webpack and webpack-hot-middleware documentation
// Rather than having hard coded webpack.config.js for each environment, this
// file generates a webpack config for the environment passed to the getConfig method.
var webpack = require('webpack');
var path = require('path');

module.exports = function(env){
    return {
        entry: {
            main: ['webpack-hot-middleware/client', './src/index']
        },
        output: {
            path: path.join(__dirname + '/dist'),
            publicPath: '/dist/',
            filename: '[name].js'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                { test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel', 'eslint'] },
                { test: /\.scss$/, include: path.join(__dirname, 'src'), loaders: ['style', 'css', 'sass'] }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    };
};
