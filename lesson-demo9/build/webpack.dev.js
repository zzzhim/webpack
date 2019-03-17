const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')


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
    optimization: {
        usedExports: true
    },
    // 启动一个服务器
    devServer: {
        contentBase: './dist',
        // 在启动devServer的时候，自动帮助我们启动浏览器
        open: true,
        // 启动热模块替换
        hot: true,
        // 即使HMR不生效也不自动刷新页面
        hotOnly: true
    }
}

module.exports = merge(commonConfig, devConfig)