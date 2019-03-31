// npm小技巧
// npm adduser 会提示输入npm的账户密码
// npm publish 填写完账户密码之后，会发布到npm上去

const path = require('path')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    // 打包过程中遇到lodash这个库，就会忽略这个库，不对这个库进行打包
    // externals: [ 'lodash' ],
    externals: {
        lodash: {
            // 如果我们的库在commonjs被使用，我们要求lodash被加载的时候必须取名lodash
            commonjs: 'lodash',
            // 如果是通过script,必须要在全局注入一个 _ 的全局变量
            root: '_'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'library.js',
        // umd: 不管是 AMD || ES Module || CommonJS 都可以使用
        // this: 挂载到this上
        // window: 挂载到window上
        // global: Node下会挂载到global
        libraryTarget: 'umd',
        // 支持script标签的引入方式
        library: 'library'
    }
}