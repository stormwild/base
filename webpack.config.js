const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        app: './src/js/index.js',
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
        new ExtractTextPlugin({
            filename: "css/[name].min.css",
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/html/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8080,
        public: 'https://base-stormwild.c9users.io',
        https: true
    }
};

module.exports = config;
