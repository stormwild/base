const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        base: './src/scss/main.scss'
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.(css|sass|scss)$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new ExtractTextPlugin({
            filename: "[name].min.css", 
            allChunks: true
        })
    ]
};

module.exports = config;