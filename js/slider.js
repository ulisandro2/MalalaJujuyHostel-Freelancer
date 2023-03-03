const imgArray =[
    './imagenes/plazaBelgrano.jpg',
    './imagenes/Parque lineal xibi xibi.jpg',
    './imagenes/Catedral de jujuy.jpg',
    './imagenes/anuar shopping jujuy.jpg',
    './imagenes/jardin botanico.jpg',
    './imagenes/Parque san martin.jpg'

]



const img = document.querySelector('#slide')

let i = 0

const slideShow = () => {
        img.src = imgArray[i]
        i = (i < imgArray.length -1) ? i+1 : 0
}

const interval = () => {
    setInterval( slideShow, 4500)
}


