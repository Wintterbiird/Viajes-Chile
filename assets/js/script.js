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
// $(".carousel").on('slide.bs.carousel', function () {
//     alert('No sea ansioso');
// });

// $('.carousel').carousel({
//     interval: 2000
// });
// const carousel = new bootstrap.Carousel('.Carousel')

// Si uno pasa el mouse por uno de los iconos, todos los parrafos desaparecerán y si
// uno quita el mouse de algún icono, los parrafos volverán a aparecer.

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

// Tooltip
  $(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip();   
  });  

