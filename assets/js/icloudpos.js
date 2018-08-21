$( document ).ready(function() {
  $('#slide_icloudpos').slick({
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

$("section#icloudpos_slide div.item>a").click(function(e){
  e.preventDefault();
  if (!$(this).parent().hasClass('active')) {
    $("section#icloudpos_slide div.item").removeClass('active');
    var number=$(this).parent().index();
    console.log(number);
    $('#slide_icloudpos').slick('slickGoTo', number);
    $(this).parent().addClass('active');
  }
});