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
                    'sass-loader'
                    // 'postcss-loader'
                ]
            }
        ]
    }
}