const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
// css代码分割
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
// 压缩css的插件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const prodConfig = {
    // 打包后是否压缩
    mode: "production", // "production" | "development" | "none"
    // 智能错误提示
    devtool: 'cheap-module-source-map',
    plugins: [
        // css代码分割
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    // 关于模块配置
    module: {
        // 模块规则（配置 loader、解析器等选项）
        rules: [
            {
                // loader的执行顺序是从下到上，从右到左的执行顺序
                test: /\.(css)$/,
                // 打包sass文件
                use: [
                    MiniCssExtractPlugin.loader,
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
    optimization: {
        // 压缩css代码
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    }
}

module.exports = merge(commonConfig, prodConfig)