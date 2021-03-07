$('.job').slice(0, 3).show();
$('.load-button').on('click', function () {
  $('.job:hidden').slice(0, 3).slideDown();
  if ($('.job:hidden').length === 0) {
    $('.load-button').fadeOut('slow');
  }
});