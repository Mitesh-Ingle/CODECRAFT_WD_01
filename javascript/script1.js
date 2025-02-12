const swiper = new Swiper('.swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    loopAdditionalSlides: 1, // Ensures smooth looping without gaps
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
swiper.on('slideChangeTransitionEnd', function () {
    swiper.update();
});
swiper.on('transitionEnd', function () {
    swiper.update();
});