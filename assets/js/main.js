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



'use strict';

$(function(){
  //If the overlay is clicked, then we close the menu bars.
  $('.overlay').on('click', function(){
    $(this).fadeOut(300);
    $('.menu-bar').removeClass('is-active');
    $('.menu-button').removeClass('is-clicked');
  });
  
  $('.menu-button').on('click', function(){
    var side = $(this).data('menu');
    //If this has is-clicked, then we close the menu.
    if($(this).hasClass('is-clicked')){
      //Since we created the code for overlay already.
      $('.overlay').click();
    }
    //Otherwise, we open it.
    else{
      $('.overlay').fadeIn(300);
      $(this).addClass('is-clicked');
      $('.menu-bar.'+side).addClass('is-active');
    }
  });
});