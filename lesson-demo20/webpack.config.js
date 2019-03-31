const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    devServer: { // 开发环境以下配置才会生效
        contentBase: './dist',
        open: true,
        port: 8080,
        hot: true,
        hotOnly: true,
        // 请求转发
        proxy: {
            // 对 / 根目录代理需要为空
            index: '',
            '/react/api': {
                // 访问多路径都会代理到这个地址
                context: ["/auth", "/api"],
                // 请求这个路径，就代理到这个地址
                target: 'http://www.dell-lee.com',
                // 路径重写,请求的是header.json 实际会拿到demo.json
                pathRewrite: {
                    'header.json': 'demo.json'
                },
                // 实现对https的代理
                secure: false,
                // 如果请求的是html,就会直接返回index.html
                bypass: function (req, res, proxyOptions) {
                    if (req.headers.accept.indexOf("html") !== -1) {
                        console.log("Skipping proxy for browser request.");
                        return "/index.html";
                    }
                },
                // 突破对Origin的限制,建议配置代理一定要加上
                changeOrigin: true
            }
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.(jpg|png|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'images/',
                    limit: 10240
                }
            }
        }, {
            test: /\.(eot|ttf|svg)$/,
            use: {
                loader: 'file-loader'
            }
        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
                },
                'sass-loader',
                'postcss-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
}