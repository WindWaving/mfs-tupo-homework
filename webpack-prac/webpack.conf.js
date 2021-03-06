var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
var webpack=require('webpack')

module.exports = {
    entry: 'src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            { test: /\.txt$/, use: 'raw-loader' },
            {
                test: /\.css$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.styl$/, use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'stylus-loader' }
                ]
            }
        ]
    },
    resolve: {
        //  第一项空字符串必不可少，否则报模块错误
        extensions: ['', '.es6']
    },
    // //自动刷新插件webpack-dev-server
    // devServer: {
    //     contentBase: 'src'
    // },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
}