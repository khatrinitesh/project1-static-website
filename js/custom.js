$(document).ready(function(){
    'use strict';

    // START SECTION >> BANNER
    $(function(){
        $('#bannerSlideshow').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
          });
    });
    // END SECTION >> BANNER
});