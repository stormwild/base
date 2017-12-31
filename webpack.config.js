const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
<<<<<<< HEAD
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        base: './src/scss/main.scss'
=======

const config = {
    entry: {
        app: './src/js/index.js'
>>>>>>> 7bea11a97c69fcdcd42ee8eec2b4fd4db4790326
    },
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
<<<<<<< HEAD
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
=======
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html'
>>>>>>> 7bea11a97c69fcdcd42ee8eec2b4fd4db4790326
        })
    ]
};

module.exports = config;