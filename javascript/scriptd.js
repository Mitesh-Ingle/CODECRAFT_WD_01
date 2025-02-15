var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // Show 3 slides at a time
    spaceBetween: 30, // Add spacing between slides
    loop: true, // Enable infinite loop
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // autoplay: {
    //     delay: 3000, // Auto-slide every 3 seconds
    //     disableOnInteraction: false, // Keeps autoplay after user interaction
    // },
});
