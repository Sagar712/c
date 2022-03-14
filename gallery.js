const localstorage_name = 'Camera app photos'

function LoadImages() {
    try {
        let Gallery = document.querySelector('.photos')

        let i=1
        let obj = JSON.parse(localStorage.getItem(localstorage_name))
        while(obj[i]!=null){
            let node = document.createElement('img')
            node.setAttribute('src', obj[i])
            node.setAttribute('id', i)
            node.setAttribute('onclick', 'ImageClicked(id)')
            Gallery.appendChild(node)
            i++
        }
    } catch (error) {
        console.log('Gallery yet to be loaded...');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    LoadImages()
})

function ImageClicked(id) {
    let obj = JSON.parse(localStorage.getItem(localstorage_name))
    console.log(id);
    let Photo = document.querySelector('.opened')
    let node = document.createElement('img')
    node.setAttribute('src', obj[id])
    Photo.appendChild(node)
    document.querySelector('.opened').classList.add('active')
    document.querySelector('.Opacitor').classList.add('active')
}

function ImgClosed() {
    document.querySelector('.opened').classList.remove('active')
    document.querySelector('.Opacitor').classList.remove('active')
    let node = document.querySelector('.opened img')
    let Photo = document.querySelector('.opened')
    Photo.removeChild(node)
}