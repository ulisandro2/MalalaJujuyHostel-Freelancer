const enlaces  = document.querySelectorAll('.ul .a');
const lightbox = document.querySelector('.lightbox');
const grande   = document.querySelector('.grande');
const cerrar   = document.querySelector('.cerrar');

enlaces.forEach(( cadaEnlace , i )=>{
    enlaces[i].addEventListener('click', ( e )=>{
        e.preventDefault()
        let ruta = cadaEnlace.querySelector('.img').src
        console.log( ruta ) 

        lightbox.classList.add('activo')
        grande.setAttribute('src', ruta)

    });
});

cerrar.addEventListener('click', ()=>{
    lightbox.classList.remove('activo');
});



// slider 

// let indice = 1;

// muestraSlides(indice);

// function avanzaSlide(n){
//     muestraSlides(indice += n);

// }

// function posicionSlide(){
//     muestraSlides(indice = n);
// }

// function muestraSlides(n){
//     let i;
//     let slides = document.querySelector('.slider-imagen');
//     let barras = document.querySelector('.barra');

//     if(n > slides.length){
//         indice = 1;

//     }
//     if(n < 1){
//         indice =slides.length();
//     }
//    for(i = 0; i < slides.length; i++){
//         slides[i].style.display= 'none'
//       }
//       for(i = 0; i < barras.length; i++){
//         barras[i].className = barras[i].className.replace(' active', "")
//       }
//       slides[indice-1].style.display = 'block';
//       barras[inidice-1].className += ' active'
//    }