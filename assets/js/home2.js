$( document ).ready(function() {
  $('#slideTips').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});
$("section#beneficios div.containerItemSlide>div.content_arrows>div.arrows>a:nth-child(1)").click(function(e){
  e.preventDefault();
  $('#slideTips').slick('slickPrev');
});
$("section#beneficios div.containerItemSlide>div.content_arrows>div.arrows>a:nth-child(2)").click(function(e){
  e.preventDefault();
  $('#slideTips').slick('slickNext');
});

$( document ).ready(function() {
  $('#slideTestimonios').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: false,
    draggable: false,
    swipe: true,
    touchMove: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});


$("section#testimonios div.controls a.item").click(function(e){
  e.preventDefault();
  if (!$(this).hasClass('active')) {
    $("section#testimonios div.controls a.item").removeClass('active');
    var number=$(this).index();
    $('#slideTestimonios').slick('slickGoTo', number);
    $(this).addClass('active');
  }
});


$( document ).ready(function() {
  $('#slideIconClientes').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    autoplay: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
  $('input.range').rangeslider({
    polyfill: false,
    fillClass: 'rangeslider__fill'
  })
  $('input.range').on('input', function () {
    var value=$(this).val();
    console.log(value);
    $(this).next('div').next('div').children('span').removeClass('active');
    $(this).next('div').next('div').children('span.'+value).addClass('active');
  });
});


$( document ).ready(function() {
  $('#slide_precios').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplay: false,
    draggable: false,
    swipe: true,
    touchMove: false
  });
});

$("section#precios div.control_precios>a").click(function(e){
  e.preventDefault();
  if (!$(this).hasClass('active')) {
    $("section#precios div.control_precios>a").removeClass('active');
    var number=$(this).parent().index();
    console.log(number);
    $('#slide_precios').slick('slickGoTo', number);
    $(this).addClass('active');
  }
});