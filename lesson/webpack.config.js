const path = require('path')

module.exports = {
    // 打包后是否压缩
    mode: "development", // "production" | "development" | "none"
    // 应用程序执行的文件
    entry: "./src/index.js",
    output: {
        // 输出的文件名
        filename: "bundle.js",
        // 输出文件的目录
        path: path.resolve(__dirname, 'dist')
    },
    // 关于模块配置
    module: {
        // 模块规则（配置 loader、解析器等选项）
        rules: [
            {
                test: /\.(png|jpg|gif)$/ig,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于189kb 将转化为base64格式
                            limit: 189 * 1024,
                            // 指定资源的输出路径
                            outputPath: '/assets',
                            // 把指定的路径加到要访问的静态资源路径前面
                            publicPath: 'assets'
                        }
                    },
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         // 指定资源的输出路径
                    //         outputPath: '/assets',
                    //         // 把指定的路径加到要访问的静态资源路径前面
                    //         publicPath: 'assets'
                    //     }
                    // }
                ],
            }
        ]
    }
}

// global

// webpack index.js

// local

// npx webpack index.js

// npm scripts

// npm run bundle -> webpack