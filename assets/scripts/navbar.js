var stateManager = (function () {  
    var resizePage = function () {
        if (window.innerWidth < 576) {           
           $('#navbarNav').addClass('xs');                                 
        }
        else {
           $('nav').removeClass('navbar-open');           
           $('#navbarNav').removeClass('xs');           
        }
    }; 

  return {
    init: function () {
      resizePage();
      $(window).on('resize', resizePage);
    }
  };
} ());
stateManager.init();


let navbarNav = $('#navbarNav');


var lastScrollTop = 0;
var navbarHeight = $('nav').outerHeight();

$('#navbarToggler').on('click', function() {
    $('nav').toggleClass('navbar-open');
    
    if($('nav').hasClass('navbar-open')) {
        navbarNav.removeClass('hide');        
    }
    else {
        setTimeout(function() {
            navbarNav.addClass('hide');
        }, 400);
    }
});


$(window).scroll(function(event){
    hasScrolled();   
});



function hasScrolled() {
    var st = $(this).scrollTop();

    if(st >= 70) {
        $('nav').addClass('no-topbar');
    }else {
        $('nav').removeClass('no-topbar').removeClass('nav-up');
    }

    if(st >= 200) {        
        // // Make sure they scroll more than delta
        // if(Math.abs(lastScrollTop - st) <= delta)
        //     return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up');
            }
        }
    }
    
    lastScrollTop = st;
}