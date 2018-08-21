$("#send_contacto_empresa").click(function(e){
  e.preventDefault();
  var form = $('form#form_peq_empresa');
  if ($(form).valid()) {
    console.log('valido');
    send(form);
  }else{
    console.log('no es valido');
  }
});

$( document ).ready(function() {
  $("form#form_peq_empresa").validate({
    errorElement: "div",
    rules: {
      "nombres":     {
        required :true
      },
      "correo":     {
        required :true,
        email: true
      }
    },
    messages: {
      "nombres":     {
        required :"Este campo es obligatorio."
      },
      "correo":     {
        required :"Este campo es obligatorio.",
        email :"El Email no es valido."
      }
    }
  });
});


function send(form){
  var formData = new FormData($(form)[0]);
  $.ajax({
      url: window.base_url+'assets/library/EnviarCorreoPeqEmpresa.php',
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
