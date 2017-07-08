$(function(){

	$('#slide-submenu').on('click',function() {			        
        $(this).closest('.list-group').fadeOut('slide',function(){
        	$('.mini-submenu').fadeIn();	
        });
        
      });

	$('.mini-submenu').on('click',function(){		
        $(this).next('.list-group').toggle('slide');
        $('.mini-submenu').hide();
	})
})


$(document).ready(function($){
	$.ajax({
		url: 'http://pokeapi.co/api/v2/pokemon',
		type: 'GET',
		dataType: 'JSON',
		data: {"limit": '20'},
	})

	.done(function(respuesta){
		console.log(respuesta);
		pokemon("resultado");
	})

	.fail(function(){
		console.log("error");
	})

	.always(function(){
		console.log("complete");
	});

	var pokemon = function(datos){
		var detalles = "";
		datos.forEach(function(elementos, img){
			var nombre = elementos.nombre;
			var img = img + 1;
			var detalles = 'http://pokeapi.co/api/v2/pokemon';
		})
	}
});


