const path = require('path')

module.exports = {
    // 应用程序执行的文件
    entry: "./src/index.js",
    output: {
        // 输出的文件名
        filename: "bundle.js",
        // 输出文件的目录
        path: path.resolve(__dirname, 'dist')
    }
}

// global

// webpack index.js

// local

// npx webpack index.js

// npm scripts

// npm run bundle -> webpack