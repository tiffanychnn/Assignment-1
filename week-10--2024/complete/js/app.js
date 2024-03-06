$(document).ready(function(){

    $('.banner-video').bgVideo({
        showPausePlay: false,
        pauseAfter: 0,
        fadeIn: 0
    });

    $('.main-carousel').flickity({
        contain: true,
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false,
        autoPlay: true,

    });


    $('.statement').parallax({
        imageSrc: '../assets/images/win.jpg'
    });

    $(window).trigger('resize').trigger('scroll');

});