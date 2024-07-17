// Carrusel
// $(".carousel").on('slide.bs.carousel', function () {
//     alert('No sea ansioso');
// });


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
interval: 500,
touch: false
})