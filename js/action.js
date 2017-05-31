$(document).ready(function () {

    // прогресс бар горизонтальный
    $('.skillbar').skillBars();

    //animation block
    $("#more-skills .text-skills ul li").animated("zoomIn");
    $("#portfolio-block .col3").animated("zoomInUp");
    $(".zoomInUp").animated("zoomInUp");
    $(".bounceInLeft").animated("bounceInLeft");
    $(".bounceInRight").animated("bounceInRight");

    $(".animate-scroll").on("click", function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    //	accordion
    $(function($) {
        var allDrop = $(".skills-row .skills-data");
        var allDropLink  = $('.skills-row .h5');
        allDropLink.on('click', function(e) {
            e.preventDefault();
            if($(this).hasClass('open'))
            {
                $(this).removeClass('open');
                $(this).siblings().slideUp('300');
            }
            else
            {
                allDrop.hide('300');
                allDropLink.removeClass('open');
                $(this).addClass('open');
                $(this).siblings('.skills-row .skills-data').slideDown('300');
                return false;
            }
        });
    });

});
