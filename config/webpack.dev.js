const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    },

    plugins: [
        new ExtractTextPlugin({filename:'app.bundle.css'}),

        new CopyWebpackPlugin([{
            from: 'src/assets',
            to: 'assets',
        }]),

        new webpack.DefinePlugin({
            'process.env': {
                API_URL: JSON.stringify('http://localhost:5000/api/')
            }
        }),

        new webpack.NamedModulesPlugin()
    ]
});