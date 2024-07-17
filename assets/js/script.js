// Smooth scroll
$(document).ready(function() {
	$("a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function(){
				window.location.hash = hash;
			});
		}
	});
});

// Carrusel
const myCarouselElement = document.querySelector('.carousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 3000,
  keyboard: false,
});

// Si le damos click a uno de los iconos todos los parrafos desapareceran hasta que quitemos el cursor del icono.

$(document).ready(function(){
    $(".iconos").click(function(){
        $(".desaparece").fadeOut();
    });

    $(".iconos").mouseleave(function(){
        $(".desaparece").fadeIn();
    });
});

//  Mensaje cuando uno le da click a boton enviar 

$(document).ready(function(){
    $("#boton").click(function(){
    alert("Gracias por contactarte con nosotros");
    });
});  


