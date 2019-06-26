/*
* Fixed Navbar Scrolling
* Github: https://github.com/ts-de/bootstrap4-fixed-navbar
*/

// init nav object from dom
var nav = $('nav');
// get heigth of the nav
var navHeight = nav.outerHeight();

// click-trigger
$('.nav-link').click(function(event) {
  scrollToSection(this);
  event.preventDefault();
});


// get target position and scrolls to it
function scrollToSection(self) {
  // get the target href
  var href = $(self).attr('href');

  // get the target position
  var targetPos = $(href).offset().top - navHeight + 5;

  // scroll to target
  $('html, body').animate({
    scrollTop: targetPos
  }, 1000);
}

/*
* Updates active section on scroll
*/
// scroll-trigger
