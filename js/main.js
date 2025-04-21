"use strict";
jQuery(document).ready(function ($) {

    //==========================================
    // FIX: Loading Screen Issue (Ensure it Fades Out)
    //==========================================
    $(window).on("load", function () { 
        $("#loading").fadeOut(500, function() {
            $('body').css('overflow', 'auto'); // Allow scrolling
        });

        // ✅ Ensure Bootstrap 5 Carousel Auto-Slides
        var myCarousel = new bootstrap.Carousel(document.getElementById('carousel'), {
            interval: 4000, // Change slide every 4 seconds
            ride: "carousel"
        });
    });

    //==========================================
    // MOBILE MENU
    //==========================================
    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({ scrollTop: (target.offset().top - 0) }, 1000);
                if ($('.navbar-toggle').css('display') !== 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });

    //==========================================
    // ScrollUp Button (Fix)
    //==========================================
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });

    //==========================================
    // Fancybox Activation
    //==========================================
    $('.fancybox').fancybox();

});
