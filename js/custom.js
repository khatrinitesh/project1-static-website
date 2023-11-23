$(document).ready(function(){
    'use strict';

    // START SECTION >> BANNER
    $(function(){
        $('#bannerSlideshow').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true,
            arrows: true,
            autoplaySpeed: 5000,
            autoplay: true
        });
    });
    // END SECTION >> BANNER

    // START SECTION >> CUSTOMER TESTIMONIALS
    $(function(){
        $('#slideshowTestimonials').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 2,
            adaptiveHeight: true,
            arrows: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [
                { 
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                { 
                    breakpoint: 776,
                    settings: {
                        slidesToShow: 1,
                        arrow:false,
                        dots:true
                    }
            }]
        });
    });
    // END SECTION >> CUSTOMER TESTIMONIALS
});