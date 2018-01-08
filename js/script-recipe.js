$(document).ready( function(){
  console.log('El documento esta listo');
  // Ocultando boton menu
  $('.js-menu').hide();
});
  $('.js-show-recipe').click(function(){
    $('.page').removeClass('make');
  })
  $('.js-show-make').click(function(){
    $('.page').addClass('make');
  })