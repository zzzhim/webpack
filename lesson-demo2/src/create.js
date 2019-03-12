import verse from './assets/verse.jpg'
import style from './index.scss'

function create() {
    const app = document.querySelector('#app')

    const img = new Image()

    img.src = verse
    img.classList.add(style.avatar)

    app.append(img)
}

export default create