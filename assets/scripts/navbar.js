var stateManager = (function () {  
    let state = null;
    var resizePage = function () {
        if (window.innerWidth < 576) {           
           $('#navbarNav').addClass('xs'); 
           if(state !== "mobile") { 
                // Entra por por primera vez en mobile
                state = "mobile";        

           }                                 
        }
        else {
           $('nav').removeClass('navbar-open');           
           $('#navbarNav').removeClass('xs');  
            $('#navbarNav').addClass('hide'); 
           if(state !== "no-mobile") {
                // Ya no esta en monbile
                state = "no-mobile";
           }
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
       // $('#mainWrapper').addClass('blur');
    }
    else {
      //  $('#mainWrapper').removeClass('blur');
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