import test from './test'

console.log(test)

// 同步代码
// import _ from "lodash"

// console.log(_.join(['a', 'b', 'c'], '***'))

// // Code Splitting 对代码进行拆分


// 异步引入代码 //需要引入babel-plugin-dynamic-import-webpack
// function getComponent() {
//     // 魔法注释, 对代码分割的文件进行命名
//     return import(/* webpackChunkName: "loadsh" */ 'lodash').then(({ default: _ }) => {
//         var element = document.createElement('div')
//         element.innerHTML = _.join(['zzz', 'him'], '-');
//         return element
//     })
// }

// getComponent().then(element => {
//     document.body.appendChild(element)
// })

// 代码分割和webpack无关
// webpack中实现代码分割，两种方式
// 1.同步代码：只需要在webpack.common.js中做optimization的配置即可
// 2.异步代码(import): 异步代码，无需做任何配置，会自动进行代码分割,放置到新的文件中
