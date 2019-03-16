const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')
// 在node中使用webpack
const complier = webpack(config)

const app = express()

// 只要文件发生改变，complier就会重新运行
app.use(webpackDevMiddleware(complier, {
    publicPath: config.output.publicPath
}))

app.listen(3000, () => {
    console.log('server is runing')
})