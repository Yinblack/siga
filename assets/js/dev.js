var base_url;
window.base_url = "https://siga.com.pe/";



$( document ).ready(function() {
  window.sr = ScrollReveal();
  sr.reveal('.reveal', { duration: 2000, delay: 500 }, 500);

  $(".inputContent>input").val("");
  $(".input-effect input").focusout(function(){
    if($(this).val()!=""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  });
  $(".input-effect textarea").focusout(function(){
    if($(this).val()!=""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  });
  $(".input-effect select").focusout(function(){
    if($(this).val()!=""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  });
    checkMenuType();
});

$('.scrollTo').click(function(e){
	e.preventDefault();
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
   	  	var target = $(this.hash);
   	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
   	  	if (target.length) {
   	  	  	$('html, body').animate({
   	  	  	  scrollTop: target.offset().top-71.8
   	  	  	}, 800);
   	  	  	return false;
   	  	}
   	}
});

$('section#Menu ul>li>a').click(function(e){
  e.preventDefault();
  var attr=$(this).attr('href');
  if ($(this).parent('li').hasClass('sub')) {
    console.log('1');
    if ($(this).parent('li').hasClass('active_mov')) {
      $(this).next('ul').removeClass('showed');
      $(this).parent('li').removeClass('active_mov');
      console.log('2');
    }else{
      $(this).next('ul').addClass('showed');
      $(this).parent('li').addClass('active_mov');
      console.log('3');
    }
  }else if ($(this).hasClass('extern')) {
    window.location.href = attr;
  } else {
    var idSection = attr.replace('#', '');
    if ($('#'+idSection).length==0) {
      if ($(this).hasClass('direct')) {
        window.location.href = window.base_url+attr;
      }else{
        window.location.href = window.base_url+'index'+attr;
      }
    }else{
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
       	  	var target = $(this.hash);
       	  	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       	  	if (target.length) {
       	  	  	$('html, body').animate({
       	  	  	  scrollTop: target.offset().top-71.8
       	  	  	}, 800);
                $('section#Menu ul>li>a').removeClass('active');
                $(this).addClass('active');
       	  	  	return false;
       	  	}
       	}
    }
  }
});



window.addEventListener("load", function () {
    window.loaded = true;
});
(function listen () {
    if (window.loaded) {
      $('div.loaderPage').hide();
       checkMenuType();
    } else {
      window.setTimeout(listen, 50);
    }
})();

$(window).resize(function(){
	checkMenuType();
});
function checkMenuType(){
	if ($(window).width() < 768) {
    hideMenu();
	}else{
    displayMenu();
	}
}
$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
    if ($( this ).hasClass( "is-active" )) {
    	$("section#Menu").slideDown(500);
    }else{
    	$("section#Menu").slideUp(500);
    }
});

function displayMenu(){
  $('section#Menu').slideDown(500);
  $(".hamburger").addClass('is-active');
}
function hideMenu(){
  $('section#Menu').slideUp(500);
  $(".hamburger").removeClass('is-active');
}

/*FUNCTIONS ON READY*/
$( document ).ready(function() {
});

$(".show_modal_contacto").click(function(e){
  e.preventDefault();
  $('#modal_contacto').modal('show');
  $('#modal_contacto').css('display','-ms-flexbox');
  $('#modal_contacto').css('display','-webkit-flex');
  $('#modal_contacto').css('display','flex');
});
