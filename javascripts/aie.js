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
  
  // subitems
  $('.menu ul li').click(function(e) {
    if ($(this).children("ul.subitems").length) {
      $(this).toggleClass("expanded");
      var width = $(window).width();
      if (width < 768) {
        $(this).children("ul.subitems").toggle();
      } else {
        // find the link that was clicked
        var item = $(this).find("a").data("item");
        
        // find the submenu that is currently opened
        var currentlyVisible = $("section.submenus .submenu:visible");
        var dataTarget = currentlyVisible.data("target");
        if (dataTarget !== undefined && dataTarget !== null) {
	        if (item != dataTarget) {
	          currentlyVisible.hide();
            $('.menu ul li a').removeClass('active');
	        } 
        }
        
        // toggle the submenu itself
        var selector = "section.submenus .submenu." + item;
        $(selector).toggle();
        $(this).find("a").toggleClass("active");
        // make columns equally height
        var highestDiv = 0;
        $(selector).children('.column').each(function() {
          if ($(this).height() > highestDiv) {
            highestDiv = $(this).height();
          }
        });        
        var columnSelector = selector + " .column";
        $(columnSelector).height(highestDiv);
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