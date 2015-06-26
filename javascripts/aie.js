jQuery(document).ready(function($) {

  // slider for carousel
  $('.flexslider').flexslider({
    slideshowSpeed: 5000,
    directionNav: false
  });
  
  // slider for partners
  var width = $(window).width();
  if (width < 400) {
    var newWidth = width * 0.95;
  } else {
    if (width < 1025) {
      var newWidth = (width * 0.8) / 4;
    } else {
      var newWidth = 200;    
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
  $('nav.menu .trigger').click(function(e) {
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
  $('nav.menu .resp-close a').click(function(e) {
    $('nav.menu ul.items').animate({
      left: "100%"
    }, 500, 'easeOutCubic');
  });
  
  // subitems on responsive menu
  $('.menu ul li').click(function(e) {
    if ($(this).children("ul.subitems").length) {
      $(this).toggleClass("expanded");
      var width = $(window).width();
      if (width >= 768) {
        var menuwidth = $('.container-large').css('width');
/*
        alert(menuwidth);
        
        var menuwidth = $('nav.menu ul.items').css('width');
*/
        $(this).children("ul.subitems").css("width", menuwidth).toggle();
      } else {
        $(this).children("ul.subitems").toggle();      
      }
    } 
  });
  
  // toggle scroll to top button
  $(window).scroll(function() {
    var offset = $(document).scrollTop();
    if (offset > 250) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
  });  
  
  // scroll to top
  $('.scroll-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});  
});