


$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > $("#seccion").offset().top) {
            $('.negro').addClass("azul");
        } else {
            $(".negro").removeClass("azul");
        }
    });
});