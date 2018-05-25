window.onload = () => {

var $window = $(window);
var $body = $('body');

load_screen = () => {
  $(".loading").fadeOut(500);
  $(".to-animate").addClass("animated fadeInUp");     
}

setTimeout(load_screen, 1);    

//nav bar stuff
$window.scroll(function(){
  if ($window.scrollTop() < $window.height() /2 ) {
    $('nav').fadeIn('fast');
  }else{
    $('nav').fadeOut('fast');
  }
});

$body.mousemove( event => {
  if (!($window.scrollTop() < $window.height()-50)) {
    if (event.pageY - $window.scrollTop() > 50) {
     $('nav').fadeOut('fast');
    }else {
      $('nav').fadeIn('fast');
    }
  }  
});

// nav bar navigation
$body.scrollspy({target: ".navbar", offset: 50});   
// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }  
});


//fadeing in elements on scroll
isScrolledIntoView = ($elem, $window)  =>{
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(document).on("scroll", function () {
    if (isScrolledIntoView($('#letstalk'), $window)) {
      $('#letstalk').addClass("animated fadeInUp");
    }
    if (isScrolledIntoView($('#techcool'), $window)) {
      $('#techcool').addClass("animated fadeInUp");
    }
    if (isScrolledIntoView($('#extras'), $window)) {
      $('#extras').addClass("animated fadeInUp");
    }
    if (isScrolledIntoView($('#workimg'), $window)) {
      $('#workimg').addClass("animated fadeInUp");
    }
});


};

$(window).resize(function () {
  console.log(window.innerWidth);
  console.log($('#contact').innerWidth);
});