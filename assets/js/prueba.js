$( document ).ready(function() {
  $('#slider_pruebas').slick({
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

$("section#pruebas div.control_slide_pruebas>a").click(function(e){
  e.preventDefault();
  if (!$(this).hasClass('active')) {
    $("section#pruebas div.control_slide_pruebas>a").removeClass('active');
    var number=$(this).index();
    console.log(number);
    $('#slider_pruebas').slick('slickGoTo', number);
    $(this).addClass('active');
  }
});