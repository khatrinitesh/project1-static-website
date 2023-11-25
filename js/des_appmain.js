/* Img loading */
$(function () {
    function e(e, t) { var n = new Image, r = e.getAttribute("lsrc"); n.onload = function () { e.parent ? e.parent.replaceChild(n, e) : e.src = r, t && t() }, n.src = r } for (var t = new Array, n = function (e, t) { if (document.querySelectorAll) t = document.querySelectorAll(e); else { var n = document, r = n.styleSheets[0] || n.createStyleSheet(); r.addRule(e, "f:b"); for (var o = n.all, l = 0, c = [], i = o.length; l < i; l++)o[l].currentStyle.f && c.push(o[l]); r.removeRule(0), t = c } return t }("img.lazy"), r = function () { for (var n = 0; n < t.length; n++)(r = t[n].getBoundingClientRect()).top >= 0 && r.left >= 0 && r.top <= (window.innerHeight || document.documentElement.clientHeight) && e(t[n], function () { t.splice(n, n) }); var r }, o = 0; o < n.length; o++)t.push(n[o]); r(), function (e, t) { window.addEventListener ? this.addEventListener(e, t, !1) : window.attachEvent ? this.attachEvent("on" + e, t) : this["on" + e] = t }("scroll", r);
}); /* End Img loading */

$(document).ready(function () {


    $(function () {

        /* 1. Visualizing things on Hover - See next part for action on click */
        $('#stars li').on('mouseover', function () {
            var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

            // Now highlight all the stars that's not after the current hovered star
            $(this).parent().children('li.star').each(function (e) {
                if (e < onStar) {
                    $(this).addClass('hover');
                }
                else {
                    $(this).removeClass('hover');
                }
            });

        }).on('mouseout', function () {
            $(this).parent().children('li.star').each(function (e) {
                $(this).removeClass('hover');
            });
        });


        /* 2. Action to perform on click */
        $('#stars li').on('click', function () {
            var onStar = parseInt($(this).data('value'), 10); // The star currently selected
            var stars = $(this).parent().children('li.star');

            for (i = 0; i < stars.length; i++) {
                $(stars[i]).removeClass('selected');
            }

            for (i = 0; i < onStar; i++) {
                $(stars[i]).addClass('selected');
            }

            // JUST RESPONSE (Not needed)
            var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
            var msg = "";
            if (ratingValue > 1) {
                msg = "Thanks! You rated this " + ratingValue + " stars.";
            }
            else {
                msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
            }
            responseMessage(msg);

        });


    });

    $(function () {
       if ($(window).width() >992 ) {
         $(window).on("load", function () {
            $(".custom_content_scrollbar").mCustomScrollbar();
        });
       }
       
    });

    $(function () {
        $('.acc_head:first').add('active');
        $('.acc_head:first .icon').addClass('la-angle-up');
        $('.acc_body:first').show();

        $('.acc_head').click(function () {
            if ($(this).is(":visible")) {
                $('.acc_head').removeClass('active');
                $('.acc_head .icon').addClass('la-angle-down').removeClass('la-angle-up');
                $('.acc_body').slideUp(300);
            }
            if ($(this).next(".acc_body").is(":visible")) {
                $('.acc_head').removeClass('active');
                $(this).next('.acc_body').slideUp(300);
                $(this).children('.acc_head .icon').addClass('la-angle-down').removeClass('la-angle-up');
            }
            else {
                $(this).addClass('active');
                $(this).next('.acc_body').slideDown(300);
                $(this).children('.acc_head .icon').addClass('la-angle-up').removeClass('la-angle-down');
            }
        });
    });

    $(function () {
        $(".nls_formControl :input").focusin(function () {
            $(this).parent().addClass('field-lbl-active');
        });
        $(".nls_formControl :input").focusout(function () {
            if ($(this).val() === "")
                $(this).parent().removeClass('field-lbl-active');
        });
    });

    $(function () {
        $(".search_box :input").focusin(function () {
            $(this).parent().addClass('field-lbl-active');
        });
        $(".search_box :input").focusout(function () {
            if ($(this).val() === "")
                $(this).parent().removeClass('field-lbl-active');
        });
    });



    $(window).resize(function () {
        $(".slide-active #header").css("height", $(window).height());
        if ($(window).width() > 1279) {
            $('#header ul li,#header ul').removeClass('open');
            $('#header ul li,#header ul').removeAttr("style");
            $('#header ul li,#header ul').removeClass('hovered');
            $('#header a.navbar-nav-li-a').removeClass('open');
            $('#header li.vcategory-menu li.section-entity-li').removeClass('open');
            $("#header li.vcategory-menu").show();
            $("#header ul.left-submenu").removeAttr("style");
            $("#header ul.left-submenu .mega-sub-menu").removeAttr("style");
            $("#header ul.left-submenu .mega-sub-sub-menu").removeAttr("style");
            $("ul.left-submenu#category-menu li.vcategory-menu:first").addClass('hovered');
        }
    });

    $("ul.left-submenu li.vcategory-menu").hover(function () {
        $("ul.left-submenu li.vcategory-menu").removeClass("hovered");
        if ($(this).hasClass('browse-li'))
            $(this).parents('.allmenu').addClass('full-radious');
        else
            $(this).parents('.allmenu').removeClass('full-radious');

        $(this).addClass("hovered")
    });

    $("ul.left-submenu.sotwarelinks li.vcategory-menu").hover(function () {
        $("ul.left-submenu#category-menu li.vcategory-menu:first").addClass('hovered');
    });

    $(".course-menu-section li.vcategory-menu").hover(function () {
        $(this).parents('.allmenu').addClass('mltwo');
    },
        function () {
            $(this).parents('.allmenu').removeClass('mltwo');
        });

    $(".course-menu-section li.vcategory-sub-menu").hover(function () {
        $("li.vcategory-sub-menu").removeClass("hovered");
        $(this).addClass("hovered");
        $(this).parents('.allmenu').addClass('mlthr');
    },
        function () {
            $(this).parents('.allmenu').removeClass('mlthr');
            $("li.vcategory-sub-menu").removeClass("hovered");
        });

    var h = ".navbar-toggle";
    $("#slide-nav").on("click", h, function (l) {
        var k = $(this).hasClass("slide-active");
        $("#header").height(k ? "0px" : $(window).height());
        $(this).toggleClass("slide-active", !k);
        $("#header").toggleClass("slide-active");
        $("body").toggleClass("ohidden");
        $("#page-content, .navbar, body, .navbar-header").toggleClass("slide-active");
        $('#header ul li,#header ul').removeClass('open');
        $('#header ul li,#header ul').removeAttr("style");
        $('#header ul li,#header ul').removeClass('hovered');
        $('#header a.navbar-nav-li-a').removeClass('open');
        $('#header li.vcategory-menu li.section-entity-li').removeClass('open');
        $("#header ul.left-submenu").removeAttr("style");
        $("#header ul.left-submenu .mega-sub-menu").removeAttr("style");
        $("#header ul.left-submenu .mega-sub-sub-menu").removeAttr("style");
        // $("#header ul.left-submenu .mega-sub-menu li").removeAttr("style");
        var search_len = $(".right-heder-search-input").val().length;
        if (search_len > 0) {
            $("input.right-heder-search-input").val("");
            hideSearch()
        }
    });

    var e = "#header, #page-content, body, .navbar, .navbar-header,.navbar-toggle";
    $(window).resize(function () {
        if ($(window).width() > 1279 && $(".navbar-toggle").is(":hidden")) {
            $(e).removeClass("slide-active");
            $('body').removeClass('ohidden');
            $("#header").css("height", "auto")
        } else {
            $(e).removeClass("slide-active");
            $('body').removeClass('ohidden');
            $("#header").css("height", "0px");
        }
    });

    window.onscroll = function () { myFunction() }; var header = document.getElementById("site_header"); var sticky = header.offsetTop; function myFunction() { if (window.pageYOffset > sticky) { header.classList.add("sticky"); } else { header.classList.remove("sticky"); } }

});

function fireclosesearch() {
    var a = $(".global-search-input .right-heder-search-input").val().length;
    if (a == 0) {
        hideSearch()
    }
}
function hideSearch() {
    $(".right-heder-search-input").val();
    $(".right-heder-search-input").removeClass('open');
    $("#site_header").removeClass('search_open');
    $(".global-search-input").removeClass("border-dark");
    $(".search-cross-dark").addClass("hide");
    $("ul.navbar-nav").removeClass("hide");
    $('.menu-container').removeClass('searched');
    $('#header').removeClass("hide");
    if ($(window).width() <= 1024) {
        $(".header-right").removeClass("hide");
        $('.navbar-header').removeClass("hide");
        $('.signin-signup-process').removeClass("hide");
    }
}

function setSearch() {
    //$(".right-heder-search-input").val($(".right-heder-search-input").attr('svalue'));
    //$(".global-search-input").addClass("border-dark");
    //$(".search-cross-dark").removeClass("hide");
    //$("ul.navbar-nav").addClass("hide");
    //$('#header').addClass("hide");
    //$(".right-heder-search-input").addClass('open');
    //$(".search-btn-light").addClass("hide");
    //$("#site_header").addClass('search_open');
    //$('.menu-container').addClass('searched');
    //$(".global-search-input .right-heder-search-input").show();
    //if ($(window).width() <= 1024) {
    //    $(".header-right").addClass("hide");
    //    $('.navbar-header').addClass("hide");
    //    $('.signin-signup-process').addClass("hide");
    //}
}

function addDefaultSrc(type, target) {
    if (type == 'topic')
        target.src = 'react-app-icons/no-topic.png';
    if (type == 'profile')
        target.src = 'react-app-icons/default.png';
    if (type == 'company')
        target.src = 'react-app-icons/default-company.jpg';
    if (type == 'software')
        target.src = 'react-app-icons/default-software.jpg';
}

// company callback called on each query
function cCallback(err, content) {
    if (err) {
        return;
    }
    if (content.query != $('.right-heder-search-input').val()) {
        return;
    }
    var html = c_Result(content);
}

// software callback called on each query
function sCallback(err, content) {
    if (err) {
        return;
    }
    if (content.query != $('.right-heder-search-input').val()) {
        return;
    }
    var html = s_Result(content);
}

// menu callback called on each query
function mCallback(err, content) {
    if (err) {
        return;
    }
    if (content.query != $('.right-heder-search-input').val()) {
        return;
    }
    var html = m_Result(content);
}

$(document).ready(function () {
    $(document).on("click", ".navbar-nav-li-a", function (k) {
        if ($(window).width() < 1279) {
            $(".navbar-nav-li-a").removeClass('open');
            k.preventDefault();
            $div = $("ul.left-submenu", $(this).parents("li"));
            if ($div.length <= 0) {
                $div = $("ul.extra-sub-menu-ul", $(this).parents("li"));
            }
            else {
                $("#header ul.extra-sub-menu-ul").hide();
            }
            $div.toggle();
            if ($div.is(":visible")) {
                $(this).addClass('open');
            } else {
                $('#header ul li.vcategory-menu').removeClass('open');
                $('#header li.vcategory-menu li.section-entity-li').removeClass('open');
                $('#header li.vcategory-menu').show();
                $("#header ul .mega-sub-menu").hide();

            }
            $("ul.left-submenu").not($div).hide();
            return false
        }
    });

    $(document).on("click", ".vcategory-inner-arrow", function (k) {
        if ($(window).width() < 1279) {
            k.preventDefault();
            if ($(this).parents("ul#category-menu").length > 0) {
                $('ul#category-menu li.vcategory-menu').removeClass('open');
                $div = $(this).parents("li.vcategory-menu").find(".mega-sub-menu");
                $div.toggle();
                if ($div.is(":hidden")) {
                    $('ul#category-menu li.vcategory-menu').show();
                } else {
                    $(this).parents("li.vcategory-menu").addClass('open');
                    $('ul#category-menu li.vcategory-menu').not($(this).parents("li.vcategory-menu")).hide();
                }
                $("ul#category-menu .mega-sub-menu").not($div).hide();
                $("ul#category-menu .mega-sub-menu").find('ul li').hide();
                $("ul#category-menu .mega-sub-menu").find('ul li.section-entity-li').show();
            }
            else {
                $('.course-menu-section ul.left-submenu li.vcategory-menu').removeClass('open');
                $div = $(this).parents("li.vcategory-menu").find(".mega-sub-menu");
                $div.toggle();
                if ($div.is(":hidden")) {
                    $('.course-menu-section ul.left-submenu li.vcategory-menu').show();
                } else {
                    $(this).parents("li.vcategory-menu").addClass('open');
                    $('.course-menu-section ul.left-submenu li.vcategory-menu').not($(this).parents("li.vcategory-menu")).hide();
                }
                $(".course-menu-section ul.left-submenu .mega-sub-menu").not($div).hide();
                //$(".course-menu-section ul.left-submenu .mega-sub-menu").find('ul li').hide();
                $(".course-menu-section ul.left-submenu .mega-sub-menu").find('ul li.vcategory-sub-menu').show();
            }
            return false
        }
    });

    $(document).on("click", ".vcategory-sub-sub-arrow", function (k) {
        if ($(window).width() < 1279) {
            k.preventDefault();
            $div = $(this).parents("li.vcategory-sub-menu").find(".mega-sub-sub-menu");
            $div.toggle();
            if ($div.is(":hidden")) {
                $(this).parents("li.vcategory-sub-menu").removeClass('open');
                $('.course-menu-section ul.left-submenu li.vcategory-sub-menu').show();
            } else {
                $(this).parents("li.vcategory-sub-menu").addClass('open');
                $('.course-menu-section ul.left-submenu li.vcategory-sub-menu').not($(this).parents("li.vcategory-sub-menu")).hide();
            }
            return false
        }
    });

    $(document).on("click", ".tab-content-list-title", function (k) {
        if ($(window).width() < 1279) {
            k.preventDefault();
            if ($(this).parents("ul#category-menu").length > 0) {
                /* Hide all other section entity  */
                $('ul#category-menu li.vcategory-menu li.section-entity-li').removeClass('open');
                $(this).parents('.mega-sub-menu').find('ul li').not($(this).closest('ul').find('li')).hide();
                $(this).parents('.mega-sub-menu').find('ul li.section-entity-li').not($(this).closest('ul').find('li')).show();

                $otherli = $(this).closest('ul').find('li');
                $li = $(this).parent();
                $otherli.not($li).toggle();
                if ($otherli.not($li).is(":visible")) {
                    $(this).parent("li").addClass('open');
                }
            }
            return false
        }
    });

    $(document).on("click", ".company-result-section a.detail_page", function () {
        gtag("event", "Detail View - Compnay Title", {
            event_category: "Search List - Detail",
            event_label: $(this).attr('title')
        })
    })
    $(document).on("click", ".software-result-section a.detail_page", function () {
        gtag("event", "Detail View - Software Title", {
            event_category: "Search List - Detail",
            event_label: $(this).attr('title')
        })
    })

    $(".global-search-input input").on("click", function (k) {
        setSearch();
        k.stopPropagation();
        return false
    });

    $(".search-btn-light").on("click", function (k) {
        setSearch();
        $(".right-heder-search-input").focus();
        k.stopPropagation();
        return false
    });

    $(".right-heder-search-input").on("focus", function () {
        setSearch();
        if ($('.navbar-toggle.slide-active').length)
            $("#slide-nav .navbar-toggle").trigger("click");
    });

    $(".right-heder-search-input").on("blur", function (k) {
        fireclosesearch()
    });
    $(".search-cross-dark").on("click", function (k) {
        $("input.right-heder-search-input").val("");
        hideSearch()
    });
    $(document).keyup(function (k) {
        if (k.keyCode === 27) {
            $(".right-heder-search-input").blur()
        }
    });


    $(window).resize(function () {
        var search_len = $(".right-heder-search-input").val().length;
        if (search_len > 0)
            $('.menu-container').addClass('searched');
    });
});

$(document).click(function () {
    fireclosesearch()
});
$(".search-cross-dark").on("click", function (k) {
    $("input.right-heder-search-input").val("");
    hideSearch()
});

$(document).ready(function () {
    if ($(window).width() <= 767) {
        $('.mobile.show').removeClass("hide");
    } else {
        $('.mobile.show').addClass("hide");
    }
});




$("li.navbar-nav-li.market").mouseenter(function (e) {
    $("ul.left-submenu li.vcategory-menu").removeClass("hovered");
    var first_leftmenu = $("ul.left-submenu li.vcategory-menu")[0];
    $("ul.left-submenu li.vcategory-menu").removeClass("hovered");
    if ($(first_leftmenu).hasClass('browse-li'))
        $(first_leftmenu).parents('.allmenu').addClass('full-radious');
    else
        $(first_leftmenu).parents('.allmenu').removeClass('full-radious');

    $(first_leftmenu).addClass("hovered")

    e.preventDefault();
});