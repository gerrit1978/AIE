jQuery(document).ready(function($) {

  // slider for carousel
  $('.flexslider').flexslider({
    slideshowSpeed: 3000,
    directionNav: false
  });
  
  // slider for partners
  var width = $(window).width();
  if (width < 400) {
    var newWidth = width * 0.95;
  } else {
    if (width > 1024) {
      var newWidth = 160;
    }
  }
  $('.flexslider-partners').flexslider({
    animation: "slide",
    controlNav: false,
    itemWidth: newWidth,
    minItems: 1,
    maxItems: 6,
    move: 1
  });
  
  // responsive menu
  $('section.menu .trigger').click(function(e) {
    var menu = $(this).parent().find('ul.items');
    var left = menu.css('left').replace('px', '');
    if (left > 300) {
      menu.animate({
        left: "5%"
      }, 800, 'easeInOutQuart');
    } else {
      // rudimentaire close functie
      menu.animate({
        left: "100%"
      }, 500, 'easeOutCubic');
    }
  });
  
  // subitems on menu
  $('.menu ul li').click(function(e) {
    if ($(this).children("ul.subitems").length) {
      $(this).toggleClass("expanded");
      $(this).children("ul.subitems").toggle();
    } 
  });
});