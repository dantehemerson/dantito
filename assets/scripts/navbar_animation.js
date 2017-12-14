$('.navbar-custom')
	.addClass('shrink');

// Animación de la navbar cuando se hace scroll 
// en el index.html solo.
$(function() {	
	$(window).scroll(function() {
		$('.navbar-custom').css('transition', '0.5s');
		var scroll = getCurrentScroll();
		if(scroll >= 100) {
			$('.navbar-custom').removeClass('shrink');
		}
		else {
			$('.navbar-custom').addClass('shrink');
		} 

	});

	function getCurrentScroll()  {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});