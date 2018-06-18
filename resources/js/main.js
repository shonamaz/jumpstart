$(document).ready(function(){

// Jumbotron Image Carousel
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    draggable: false,
    speed: 2000,
    pauseOnHover: false,
    pauseOnFocus: false,

  });

//Scroll Function

  var scrollTopV = 0

$(window).scroll (function(){
  var currentScrollPosition = $(this).scrollTop();
  if (currentScrollPosition - scrollTopV > 50) {
  var navBarHeight = $('.navbar').css('height');
  $( ".navbar" ).animate({top: '-' + navBarHeight}, 150);
  scrollTopV = currentScrollPosition;
} else if (scrollTopV - currentScrollPosition > 50) {
  $(".navbar").animate({top: '0px'}, 150);
  scrollTopV = currentScrollPosition;
}
  });








});
