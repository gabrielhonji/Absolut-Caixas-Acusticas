$(function () {
    $(document).scroll(function () {
        var $scroll = $(".change-on-scroll");
        $scroll.toggleClass('scrolled', $(this).scrollTop() > $scroll.height() * 2);
    });
});