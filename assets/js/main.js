$(document).ready(function($){
	$.ajax({
		url: "http://pokeapi.co/api/v2/pokemon/",
		type: "GET",
		dataType: "JSON",
		data: ("limit": "100"),
	})
	.done(finction(respuesta){
		console.log(respuesta);
		console.log("success");
	})
	.fail(function(){
		console.log("error");
	})
	.always(function(){
		console.log("complete");
	});
});