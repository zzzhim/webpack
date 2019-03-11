const app = document.querySelector('#app')

// const verse = require('./assets/verse.jpg')

import verse from './assets/verse.jpg'
import './index.scss'

app.innerHTML = "<p>我是一个文本</p>"

const img = new Image()

img.src = verse
img.classList.add('avatar')

app.append(img)
