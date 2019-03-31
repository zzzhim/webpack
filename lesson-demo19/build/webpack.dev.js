const webpack = require('webpack')

const devConfig = {
    // 打包后是否压缩
    mode: "development", // "production" | "development" | "none"
    // 智能错误提示
    devtool: 'cheap-module-eval-source-map',
    // 使用插件
    // plugin 可以在webpack运行到某个时刻的时候，帮你做一些事情
    plugins: [
        // 热模块替换
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
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
            }
        ]
    },
    // 启动一个服务器
    devServer: {
        contentBase: '../dist',
        // 在启动devServer的时候，自动帮助我们启动浏览器
        open: true,
        // 启动热模块替换
        hot: true,
        // 即使HMR不生效也不自动刷新页面
        hotOnly: true
    },
    output: {
        // 输出的文件名
        filename: "[name].js", // 占位符输出多个文件
        // chunk输出的文件名
        chunkFilename: "[name].js",
    }
}

module.exports = devConfig