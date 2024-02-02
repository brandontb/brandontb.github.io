$(document).ready(function() {

//Sticky navigation
$('.js--sticky-nav').waypoint(function(direction) {
	if (direction == "down") {
		$('nav').addClass('sticky animated fadeIn');
	} else {
		$('nav').removeClass('sticky')
	}
	}, {
		offset: '60px'
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

//Contact Me
$('#button-two').mouseenter(function() {
	$('#button-two').text('Email: bobbitttbrandon@gmail.com Phone: 919-801-2665')
})

$('#button-two').mouseleave(function() {
	$('#button-two').text('Contact Info')
})


//Buttons fade in
$('.js--fade-in').addClass('animated fadeInUp');

//Icons fade in on scrolling
$('.js--wp-1').waypoint(function(direction) {
	$('.js--wp-1').addClass('animated fadeIn'); 
}, {
	offset: '50%'
});

$('.js--wp-2').waypoint(function(direction) {
	$('.js--wp-2').addClass('animated fadeIn'); 
}, {
	offset: '100%'
});

//ECU color scheme when button clicked
$('#button-ecu').click(function() {
	if ($('.js--purple-yellow').hasClass('purple-yellow')) {
		$('.js--purple-yellow').removeClass('purple-yellow');
		$('#button-ecu').text('Go Pirates');
	} else {
		$('.js--purple-yellow').addClass('purple-yellow');
		$('#button-ecu').text('Back In Black');
	}
});

//Image fades in on hover for interests
$('.coding').mouseenter(function() {
	$('.js--background').addClass('coding-background');
	$('.learning').css('opacity', '0');
	$('.reading').css('opacity', '0');
	$('.surfing').css('opacity', '0');
});

$('.coding').mouseleave(function() {
	$('.js--background').removeClass('coding-background');
	$('.learning').css('opacity', '1');
	$('.reading').css('opacity', '1');
	$('.surfing').css('opacity', '1');
});

$('.learning').mouseenter(function() {
	$('.js--background').addClass('learning-background');
	$('.coding').css('opacity', '0');
	$('.reading').css('opacity', '0');
	$('.surfing').css('opacity', '0');
});

$('.learning').mouseleave(function() {
	$('.js--background').removeClass('learning-background');
	$('.coding').css('opacity', '1');
	$('.reading').css('opacity', '1');
	$('.surfing').css('opacity', '1');
});

$('.reading').mouseenter(function() {
	$('.js--background').addClass('reading-background');
	$('.learning').css('opacity', '0');
	$('.coding').css('opacity', '0');
	$('.surfing').css('opacity', '0');
});

$('.reading').mouseleave(function() {
	$('.js--background').removeClass('reading-background');
	$('.learning').css('opacity', '1');
	$('.coding').css('opacity', '1');
	$('.surfing').css('opacity', '1');
});

$('.surfing').mouseenter(function() {
	$('.js--background').addClass('surfing-background');
	$('.learning').css('opacity', '0');
	$('.reading').css('opacity', '0');
	$('.coding').css('opacity', '0');
});

$('.surfing').mouseleave(function() {
	$('.js--background').removeClass('surfing-background');
	$('.learning').css('opacity', '1');
	$('.reading').css('opacity', '1');
	$('.coding').css('opacity', '1');
});


//Mobile nav
$('.js--mobile-nav').click(function() {
	var nav = $('.js--main-nav');
	nav.slideToggle(200);
});




});