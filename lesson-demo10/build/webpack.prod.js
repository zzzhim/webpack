const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')

const prodConfig = {
    // 打包后是否压缩
    mode: "production", // "production" | "development" | "none"
    // 智能错误提示
    devtool: 'cheap-module-source-map',
}

module.exports = merge(commonConfig, prodConfig)