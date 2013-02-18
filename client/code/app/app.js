$('#tea, #accessories, #craft, #ceremony, #about').hide();

/*
$('#home').data('body_bg', 'url(/images/home_bg.jpg)');
$('#tea').data('body_bg', 'url(/images/home_bg.jpg)');
$('#accessories').data('body_bg', 'url(/images/home_bg.jpg)');
$('#craft').data('body_bg', 'url(/images/home_bg.jpg)');
$('#ceremony').data('body_bg', 'url(/images/home_bg.jpg)');
$('#about').data('body_bg', 'url(/images/home_bg.jpg)');
*/

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

$('#bt_box').hide();
$('#dt_box').hide();
$('#pt_box').hide();
$('#bt_c').hover(function(e) {
  $('#bt_box').toggle('fast');
});
$('#dt_c').hover(function(e) {
  $('#dt_box').toggle('fast');
});
$('#pt_c').hover(function(e) {
  $('#pt_box').toggle('fast');
});
