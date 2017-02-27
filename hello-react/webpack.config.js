var webpack = require('webpack');
module.exports = {
    entry: ['./app/main.js'],
    output: {
        path: __dirname + '/dist',
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader'
        }]
    }
}