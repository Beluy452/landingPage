$(document).ready(function () {
    
  $('a[href^="#"]').on('click', function(event){
    event.preventDefault();
    var anchor = this.hash;
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 110
    }, 1500);
    });//scroll якорів

    // Header Scroll
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 250) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });

   // Mobile Navigation
   $('.nav-bar').click(function () {
    $('menu').slideToggle('Open');
    });
   $('menu a').click(function () {
    if($(document).width() <676){
        $('menu').slideToggle('Open');
    }
    });

    // Desktop navigation
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 676) {
            $("menu").css({"display": "block"});
        }
        else {
            $("menu").css({"display": "none"});
        }
    });


});