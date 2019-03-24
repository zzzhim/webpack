// 异步引入代码 //需要引入babel-plugin-dynamic-import-webpack
async function getComponent() {
    // 魔法注释, 对代码分割的文件进行命名
    const { default: _ } = await import(/* webpackChunkName: "loadsh" */ 'lodash')
    const element = document.createElement('div')
    element.innerHTML = _.join(['zzz', 'him'], '-')

    return element
}

// 点击加载
document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element)
    })
})