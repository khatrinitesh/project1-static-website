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
            arrows: true
          });
    });
    // END SECTION >> BANNER
});