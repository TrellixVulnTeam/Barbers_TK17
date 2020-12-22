bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    pagination: false,
    autoplay: true,
    breakpoints:
        [{
            changePoint: 480,
            slidesToShow: 1,
            slidesToScroll: 1
        }, {
            changePoint: 640,
            slidesToShow: 1,
            slidesToScroll: 1
        }, {
            changePoint: 768,
            slidesToShow: 1,
            slidesToScroll: 1
        }]

});
