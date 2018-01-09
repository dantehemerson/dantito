// Animación de la navbar cuando se hace scroll 
// en el index.html solo.

$navbar = $('.navbar-custom');
$(function() {	
	$(window).scroll(function() {
		$navbar.css('transition', '0.5s');
		var scroll = getCurrentScroll();
		if(scroll >= 50) {
			$navbar.removeClass('shrink ligth');			
		}
		else {
			$navbar.addClass('shrink ligth');
		} 

	});

	function getCurrentScroll()  {
		return window.pageYOffset || document.documentElement.scrollTop;
	}
});
