(function ($) {

    // header
    // var wind = $(window);
    // var sticky = $('.header-wrap');
    // wind.on('scroll', function () {
    //     var scroll = wind.scrollTop();
    //     if (scroll < 100) {
    //         sticky.removeClass('sticky');
    //     } else {
    //         sticky.addClass('sticky');
    //     }
    // });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

     

    

})(jQuery);