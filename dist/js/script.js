$(function () {
    $(document).scroll(function () {
        var $scroll = $(".change-on-scroll");
        $scroll.toggleClass('scrolled', $(this).scrollTop() > $scroll.height() * 2);
    });
});

// Carousel element js
const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})