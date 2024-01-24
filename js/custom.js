$(document).ready(function(){
    'use strict';

    // START SECTION >> TRENDING SLIDER
    $(function(){
        var swiper = new Swiper(".trending_slider", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                  slidesPerView: 1
                },
                991: {
                  slidesPerView: 2
                },
                992: {
                  slidesPerView: 4
                }
              }
        });
    });

    // $(function(){
                // const sliderThumbs = new Swiper('.slider__thumbs .swiper-container', { // ищем слайдер превью по селектору
                    // // задаем параметры
                    // direction: 'vertical', // вертикальная прокрутка
                    // slidesPerView: 3, // показывать по 3 превью
                    // spaceBetween: 24, // расстояние между слайдами
                    // navigation: { // задаем кнопки навигации
                        // nextEl: '.slider__next', // кнопка Next
                        // prevEl: '.slider__prev' // кнопка Prev
                    // },
                    // freeMode: true, // при перетаскивании превью ведет себя как при скролле
                    // breakpoints: { // условия для разных размеров окна браузера
                        // 0: { // при 0px и выше
                            // direction: 'horizontal', // горизонтальная прокрутка
                        // },
                        // 768: { // при 768px и выше
                            // direction: 'vertical', // вертикальная прокрутка
                        // }
                    // }
                // });
                // // Инициализация слайдера изображений
                // const sliderImages = new Swiper('.slider__images .swiper-container', { // ищем слайдер превью по селектору
                    // // задаем параметры
                    // direction: 'vertical', // вертикальная прокрутка
                    // slidesPerView: 1, // показывать по 1 изображению
                    // spaceBetween: 32, // расстояние между слайдами
                    // mousewheel: true, // можно прокручивать изображения колёсиком мыши
                    // navigation: { // задаем кнопки навигации
                        // nextEl: '.slider__next', // кнопка Next
                        // prevEl: '.slider__prev' // кнопка Prev
                    // },
                    // grabCursor: true, // менять иконку курсора
                    // thumbs: { // указываем на превью слайдер
                        // swiper: sliderThumbs // указываем имя превью слайдера
                    // },
                    // breakpoints: { // условия для разных размеров окна браузера
                        // 0: { // при 0px и выше
                            // direction: 'horizontal', // горизонтальная прокрутка
                        // },
                        // 768: { // при 768px и выше
                            // direction: 'vertical', // вертикальная прокрутка
                        // }
                    // }
                // });
            // });

    // END SECTION >> TRENDING SLIDER

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
            autoplay: false
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

    // START SECTION >> TRENDING
    $(function(){
        $('#slideshowTrends').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            adaptiveHeight: true,
            arrows: true,
            autoplaySpeed: 5000,
            autoplay: true,
            responsive: [
                { 
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                { 
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        arrow:false,
                        dots:true
                    },
                },
                { 
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                        arrow:false,
                        dots:true
                    },
                }
            ]
        });
    });
    // END SECTION >> TRENDING
});