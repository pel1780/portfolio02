$(function () {

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainSlide').on('init afterChange', function (event, slick, currentSlide) {
        var current = $('.mainSlide .slick-current');
        current.addClass('on').siblings().removeClass('on');
    })

})