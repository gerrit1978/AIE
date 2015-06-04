jQuery(document).ready(function($) {
  $('.flexslider').flexslider({
    slideshowSpeed: 3000,
    directionNav: false
  });
  
  $('.flexslider-partners').flexslider({
    animation: "slide",
    controlNav: false
  });
  
  // subitems on menu
  $('.menu ul li').click(function(e) {
    if ($(this).children("ul.subitems").length) {
      $(this).toggleClass("expanded");
      $(this).children("ul.subitems").toggle();
    } 
  });
});