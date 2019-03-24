const path = require('path')

// HtmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // 应用程序执行的文件
    entry: {
        // 打包多个文件
        main: "./src/index.js",
    },
    // 关于模块配置
    module: {
        // 模块规则（配置 loader、解析器等选项）
        rules: [
            {
                // loader的执行顺序是从下到上，从右到左的执行顺序
                test: /\.(css)$/,
                // 打包sass文件
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader'
                ]
            },
            {
                test: /\.js$/,
                // 如果你的文件在/node_modules/中，就不使用babel-loader
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    // 使用插件
    // plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
    plugins: [
        new HtmlWebpackPlugin({
            // 模板
            template: 'src/index.html'
        }),
        // 清空整个dist目录
        new CleanWebpackPlugin({
            options: '../dist'
        })
    ],
    optimization: {
        // Code Splitting 使用webpack进行代码分割
        splitChunks: {
            chunks: 'all'
        }
    },
    output: {
        // 所有打包文件的之间的引用都加一个根路径
        // publicPath: '/',
        // 输出的文件名
        filename: "[name].js", // 占位符输出多个文件
        // 输出文件的目录
        path: path.resolve(__dirname, '../dist')
    }
}