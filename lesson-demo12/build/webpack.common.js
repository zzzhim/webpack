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
            // chunks: async | initial | all
            // async: 在我做代码分割的时候只对异步代码进行分割
            // initial: 在我做代码分割的时候只对同步代码进行分割
            // all: 不管是同步代码还是异步代码都会进行代码分割 cacheGroups需要配置
            chunks: 'all',
            // 引入的模块大于 30kb的话才会进行代码分割
            minSize: 30000,
            maxSize: 0,
            // 当一个模块被用了多少次后才会进行代码分割
            // 只有当打包生成的chunk引用的次数达到，才会进行代码分割
            minChunks: 1,
            // 同时加载的模块数，最多为5个
            maxAsyncRequests: 5,
            // 整个入口文件引入的库最多3个，超过三个将不会进行代码分割
            maxInitialRequests: 3,
            // 文件生成的时候，文件之间的连接符
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    // 值越大，优先级越高，代码分割会默认打包到优先级高的文件中
                    priority: -10
                },
                default: {
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
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