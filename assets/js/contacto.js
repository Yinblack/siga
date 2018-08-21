$("#btnEnviar").click(function(e){
  e.preventDefault();
  var form = $('form#Contacto');
  if ($(form).valid()) {
    console.log('valido');
    send(form);
  }else{
    console.log('no es valido');
  }
});

$( document ).ready(function() {
  $("form#Contacto").validate({
    rules: {
      "nombre":     {
        required :true
      },
      "email":     {
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
      "email":     {
        required :"Este campo es obligatorio.",
        email :"El Email no es valido."
      },
      "telefono":     {
        required :"Este campo es obligatorio."
      }
    }
  });
});


function send(form){
  var formData = new FormData($(form)[0]);
  $.ajax({
      url: window.base_url+'assets/library/EnviarCorreo.php',
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
