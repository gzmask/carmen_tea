$(document).ready(function() {
    $('#home, #tea, #accessories, #craft, #ceremony, #about').hide();

    $('#home').data('div_bg', 'url(/images/home.jpg)');
    $('#home').data('body_bg', 'url(/images/home_bg.jpg)');
    $('#tea').data('div_bg', 'url(/images/home_bg.jpg)');
    $('#tea').data('body_bg', 'url(/images/home.jpg)');
    $('#accessories').data('div_bg', 'url(/images/accessories.jpg)');
    $('#accessories').data('div_bg', 'url(/images/accessories_bg.jpg)');
    $('#craft').data('div_bg', 'url(/images/craft.jpg)');
    $('#craft').data('div_bg', 'url(/images/craft_bg.jpg)');
    $('#ceremony').data('div_bg', 'url(/images/ceremony.jpg)');
    $('#ceremony').data('div_bg', 'url(/images/ceremony_bg.jpg)');
    $('#about').data('div_bg', 'url(/images/about.jpg)');
    $('#about').data('div_bg', 'url(/images/about_bg.jpg)');


    $('.nav a').click(function(e) {
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
