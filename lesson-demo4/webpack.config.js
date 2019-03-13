const path = require('path')

// HtmlWebpackPlugin 会在打包结束后，自动生成一个html文件，并把打包生成的js自动引入到这个html文件中
const HtmlWebpackPlugin = require('html-webpack-plugin')

const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    // 打包后是否压缩
    mode: "development", // "production" | "development" | "none"
    // 应用程序执行的文件
    entry: {
        // 打包多个文件
        main: "./src/index.js",
        sub: "./src/index.js"
    },
    output: {
        // 输出的文件名
        filename: "[name].js", // 占位符输出多个文件
        // 输出文件的目录
        path: path.resolve(__dirname, 'dist')
    },
    // 关于模块配置
    module: {
        // 模块规则（配置 loader、解析器等选项）
        rules: [
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                }
            },
            {
                // loader的执行顺序是从下到上，从右到左的执行顺序
                test: /\.(scss)$/ig,
                // 打包sass文件
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
            options: 'dist'
        })
    ]
}