/*// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

var navbar;
var sticky;

window.onload = function(){
	// Get the navbar
	navbar = document.getElementById("navbar");

	// Get the offset position of the navbar
	sticky = navbar.offsetTop;
};






// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    console.log("adding stick");
  } else {
    navbar.classList.remove("sticky");
    console.log("remove stick");
  }
}	 */

window.onload = function(){


$(window).scroll(function(){
  if ($(window).scrollTop() < $(window).height()-50) {
    $('#hey').show();
  }
});

$( "body" ).mousemove(function( event ) {
  if (!($(window).scrollTop() < $(window).height()-50)) {
    if (event.pageY - $(window).scrollTop() > 50) {
     $('#hey').hide();
    }else {
      $('#hey').show();
    }
  }
  
});

};