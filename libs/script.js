$(document).ready(function() {
    $('#tea, #accessories, #craft, #ceremony, #about').hide();

    $('#home').data('div_bg', 'url(/images/home.jpg)');
    $('#home').data('body_bg', 'url(/images/home_bg.jpg)');
    $('#tea').data('div_bg', 'url(/images/teas.jpg)');
    $('#tea').data('body_bg', 'url(/images/teas_bg.jpg)');
    $('#accessories').data('div_bg', 'url(/images/home.jpg)');
    $('#accessories').data('body_bg', 'url(/images/home_bg.jpg)');
    $('#craft').data('div_bg', 'url(/images/home.jpg)');
    $('#craft').data('body_bg', 'url(/images/home_bg.jpg)');
    $('#ceremony').data('div_bg', 'url(/images/home.jpg)');
    $('#ceremony').data('body_bg', 'url(/images/home_bg.jpg)');
    $('#about').data('div_bg', 'url(/images/home.jpg)');
    $('#about').data('body_bg', 'url(/images/home_bg.jpg)');

    $('.image').css('background-image', $('#home').data('div_bg'));
    $('body').css('background-image', $('#home').data('body_bg'));

    $('.logo').click(function(e) {
        e.preventDefault();
        $('#tea, #accessories, #craft, #ceremony, #about').hide();
        $('#home').show();
        $('.image').css('background-image', $('#home').data('div_bg'));
        $('body').css('background-image', $('#home').data('body_bg'));
        $('.active').removeClass('active');
    });

    $('.nav a').click(function(e) {
        $('#home').hide();
        e.preventDefault();
        $($('.active a').attr('href')).hide();
        $('.active').removeClass('active');
        section = $(this).attr('href');
        $(section).show();
        $('.image').css('background-image', $(section).data('div_bg'));
        $('body').css('background-image', $(section).data('body_bg'));
        $(this).parent().addClass('active');
    });
});
