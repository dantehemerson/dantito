// Hide Navbar on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();
var scroll;

$('#navbarNav').on('show.bs.collapse', function() {
    $('nav').addClass('navbar-open');
});

$('#navbarNav').on('hidden.bs.collapse', function() {
    $('nav').removeClass('navbar-open');
});

$(window).scroll(function(event){
    hasScrolled();   

  //  didScroll = true;
});

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);




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