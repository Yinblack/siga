$( document ).ready(function() {
  $('#carousel_slide').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false
  });
});

$("#send_contact_prueba").click(function(e){
  e.preventDefault();
  var form = $('form#contact_prueba');
  if ($(form).valid()) {
    console.log('valido');
    send_form_prueba(form);
  }else{
    console.log('no es valido');
  }
});

$( document ).ready(function() {
  $("form#contact_prueba").validate({
    rules: {
      "nombre":     {
        required :true
      },
      "correo":     {
        required :true,
        email: true
      },
      "telefono":     {
        required :true
      },
    },
    messages: {
      "nombre":     {
        required :"Este campo es obligatorio."
      },
      "correo":     {
        required :"Este campo es obligatorio.",
        email :"El Email no es valido."
      },
      "telefono":     {
        required :"Este campo es obligatorio."
      }
    }
  });
});


function send_form_prueba(form){
  var formData = new FormData($(form)[0]);
  $.ajax({
      url: window.base_url+'assets/library/EnviarCorreoPrueba.php',
      type: 'POST',
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      beforeSend: function(){
        swal({
          title: 'ENVIANDO',
          onOpen: () => {
            swal.showLoading()
          }
        })
      },
      success: function(data){
        if (data=='success') {
          $(form)[0].reset();
          swal(
            'Mensaje enviado',
            'Pronto nos pondremos en contacto',
            'success'
          )
        }
        console.log(data);
      },
      error: function(data){
        console.log('error ajax');
        console.log(data);
      }
  });
}
