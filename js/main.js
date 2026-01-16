
jQuery(document).ready(function() {
  "use strict";

    /*==============================
        sticky header js
    ==============================*/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > lastScrollTop) {
            $('.header-area').addClass('sticky-down');
            $('.header-area').removeClass('sticky-up');
        } 
        else {
            if (lastScrollTop <= 100) {
                $('.header-area').removeClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').removeClass('sticky-up');
            } else {
                $('.header-area').addClass('sticky');
                $('.header-area').removeClass('sticky-down');
                $('.header-area').addClass('sticky-up');
            }
        }
        lastScrollTop = scroll;
    });

    $('.pricing-table-more a.view-btn').on('click', function() {
        $('.pricing-table').addClass('show-full');
    });
    $('.land-template').on('click', function() {
        var url = $(this).attr('data-url');
        $('.password-view-demo a').attr('href', url);
    });

    $('.section-ul').imagesLoaded(function () {
        $('.section-ul').isotope({
          itemSelector: 'li',
          layoutMode: 'masonry'
        });
    });

    /*====================================
       video popup js
    ====================================*/
    $('.play-button').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', 
                    id: function(url) {        
                        var match = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        return match && match[1] ? match[1] : null;
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });

    /*==============================
        tab js
    ==============================*/
    var $nav_active = $(".nav");
    $nav_active.onePageNav({
        navItems: "a",
        currentClass: "active",
        changeHash: false,
        easing: "swing",
        filter: "",
        scrollSpeed: 100,
        scrollThreshold: 0.5,
        begin: false,
        end: false,
        scrollChange: false
    });

    /*==================================
        mobile look js
    ====================================*/
    var swiper = new Swiper('.swiper#mobile-look-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 3,
        grid: {
            rows: 2,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-testi3',
            nextEl: '.swiper-next-testi3'
        },
        pagination: {
            el: ".swiper-pagination-mobile-look",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        features js
    ==============================*/
    // features js
    var swiper = new Swiper('.swiper#feature-slide', {
        slidesPerView: 2,
        spaceBetween: 30,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        observer: true,
        observerParents: true,   
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            360: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        other page slider js
    ==============================*/
    // features js
    var swiper = new Swiper('.swiper#other-page', {
        slidesPerView: 4,
        rewind: true,
        loop: true,
        // centeredSlides: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        },
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        observer: true,
        observerParents: true,    
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-other-page',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 3,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 4,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==============================
        other theme slider js
    ==============================*/
    // features js
    var swiper = new Swiper('.swiper#other-theme', {
        slidesPerView: 2,
        rewind: true,
        loop: true,
        // centeredSlides: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        observer: true,
        observerParents: true,    
        navigation: {
            prevEl: '.new-swiper-prev',
            nextEl: '.new-swiper-next'
        },
        pagination: {
            el: '.swiper-pagination-new',
            clickable: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            320: {
                slidesPerView: 1,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            540: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            640: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 12
            },
            768: {
                slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1024: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            },
            1199: {
               slidesPerView: 2,
                grid: {
                    rows: 1,
                    fill: 'row' | 'column'
                },
                spaceBetween: 30
            }
        }
    });

    /*==================================
        testimonial js
    ====================================*/
    var swiper = new Swiper('.swiper#testi-slider', {
        loop: false,
        rewind: true,
        slidesPerView: 1,
        grid: {
            rows: 1,
            fill: 'row' | 'column'
        },
        spaceBetween: 30,
        observer: true,
        observeParents: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: '.swiper-prev-testi3',
            nextEl: '.swiper-next-testi3'
        },
        pagination: {
            el: ".swiper-pagination-testimonial",
            clickable: true
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
        }
    });

    /*==============================
        back-to-top js
    ==============================*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('#top').addClass('show');
        } else {
            $('#top').removeClass('show');
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});