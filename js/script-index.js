$(document).ready( function(){
  // Ocultando boton flecha
  $('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
  printNews();
  renderActivities(activities);
});
 // Definiendo funcion printNews
    function printNews () {
    $('#print-news').text('Nuevas Recetas');
  }
/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
  for (var i = 0; i<recipesArray.length; i++){
    if (recipesArray[i].hasOwnProperty('highlighted') === true){
      renderRecipe(recipesArray[i])
    }
  }
	//console.log('Recipes: ', recipesArray);
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
  var title = recipe.title;
  var name = recipe.source.name;
  var url = recipe.source.url;
  $('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe>"'+ title +'</span><span class="metadara-recipe"><span class="author-recipe">' + name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark"></span></span></span></span><img src="' + url + '"/></a>');
	//console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
  for(i = 0; i<activities.length; i++){
    if(activities.length > 0){
      $('.wrapper-message').hide();
    }
    renderActivity(activities[i]);
  }
	console.log('Activities: ', activities);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	var userImg = recipe.userAvatar;
  var author = recipe.userName;
  var recipeName = recipe.recipeName;
  var txtRecipe = recipe.text;
  var place = recipe.place;
  var imgRecipe = recipe.image;
    $('.list-activities').append("<a href='#' class='item-activity'>"+
  "<span class='attribution'>"+
  "<span class='avatar'>"+
      "<img src='"+ recipe.userAvatar+"' class='image-avatar'>"+
  "</span>"+
  "<span class='meta'>"+
  "<span class='author'>"+recipe.userName+" </span> made"+
  "<span class='recipe'>"+recipe.recipeName+"</span>: "+recipe.text+""+
    "<span class='location'>&mdash;"+recipe.place+"</span>"+
  "</span>"+
  
 "</span>"+

 "<div class='bg-image' style='background-image: url('"+recipe.image+"')'></div>"+

"</a>");
}


