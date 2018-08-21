$(document).scroll(function() {
  if ($(document).scrollTop() > 0) {
      $('div.bar_empresa').slideUp('150');
      $('section#Menu a.logo>img').addClass('fixed');
  } else {
    $('div.bar_empresa').slideDown('150');
    $('section#Menu a.logo>img').removeClass('fixed');
  }
});
