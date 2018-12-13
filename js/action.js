$(document).ready(function () {
    $('.skillbar').skillBars();
    $("#more-skills .text-skills ul li").animated("zoomIn");
    $(".zoomInUp").animated("zoomInUp");
    $(".bounceInLeft").animated("bounceInLeft");
    $(".bounceInRight").animated("bounceInRight");
    $(".animate-scroll").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'), top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});