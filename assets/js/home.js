$( document ).ready(function() {
  $('.parallax_dev').parallax();
  $('#slide_testimonios').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true
  });
  /*
  $('#slide_logos').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  */
});

$(document).scroll(function() {
  if ($(document).scrollTop() > 200) {
      $('div.div_down').slideUp();
  } else {
      $('div.div_down').slideDown();
  }
});




$(".skype").click(function(e){
  e.preventDefault();
  console.log('clicked');
  SkypeButton.tryAnalyzeSkypeUri('call', '0');
  SkypeButton.trySkypeUri_Generic('skype:yinblack?call', '_detectSkypeClient_1528864555918', '0');
  return false;
});
