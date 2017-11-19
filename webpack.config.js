const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};

module.exports = config;