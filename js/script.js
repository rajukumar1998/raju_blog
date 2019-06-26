
// $(document).ready(function() {
// //Preloader
// $(window).on("load", function() {
// preloaderFadeOutTime = 500;
// function hidePreloader() {
// var preloader = $('#preloader');
// preloader.fadeOut(preloaderFadeOutTime);
// }
// hidePreloader();
// });
// });


var typed = new Typed(".example", {
  strings: ["hi,", "welcome","to my","home","Have a great day!"],
  
  loop:true,
  typeSpeed:100,
  showCursor:false
});


$(document).ready(function() {

	$(".progress-element").waypoint(function(){
		var progressBar = $(".progress-bar");
      progressBar.each(function(){
          $(this).animate({width: $(this).attr("aria-valuenow") + "%"},2000)
      });
  
		this.destroy();
	},{
		offset:'bottom-in-view'
	});
	
      
  });
  $(document).ready(function() {

	$(".progress-element").waypoint(function(){
		var progressBar = $(".progress-bar2");
      progressBar.each(function(){
          $(this).animate({width: $(this).attr("aria-valuenow") + "%"},2000)
      });
  
		this.destroy();
	},{
		offset:'bottom-in-view'
	});
	
      
  });
	

$(document).ready(function() {
	$('#projecttabs').responsiveTabs({
    animation:"slide"
});
});
 


 $(document).ready(function() {
 	$("nav-link").click(function(event) {
 		event.preventDefault();
 		var sectionid=$(this).attr("href");
 		$('html,body').animate({
            scrollTop:$(sectionid).offset().top},12500 );

 		});
 	
 });






$(document).ready(function() {
	new WOW().init();
});


$(window).on("load",function(){

$('.anim').addClass('animated swing');



});