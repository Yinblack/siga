<?php
if(isset($_POST['captcha'])){
              $nombres     = $_POST['nombres'];
              $apellidos   = $_POST['apellidos'];
              $correo      = $_POST['correo'];
              $telefono    = $_POST['telefono'];
              $empresa     = $_POST['empresa'];
              $almacenes   = $_POST['almacenes'];
              $comentarios = $_POST['comentarios'];

              $html = '
                  <!DOCTYPE html>
                  <html lang="en">
                  <head>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <title></title>
                  </head>
                  <body>
                  <table width="100%" height="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                      <td>
                      <table border="0" cellspacing="0" cellpadding="0" width="600" align="center">
                    <tr style="background:#2770b5; height:21px;">
                      <td colspan="5" style="font-family:Arial, Helvetica, sans-serif; font-size:16px; font-weight: 500; color: #2770b5;"></td>
                    </tr>
                        <tr>
                          <td width="17"></td>
                          <td width="569" colspan="3" valign="top" style="font-family:Arial, Helvetica, sans-serif; font-size:14px;">
                          SIGA | SOLICITUD DE DEMO EXCLUSIVO GRATIS
                            <p style ="margin:5px 0;"><strong>Nombres:</strong> '.$nombres.'</p>
                            <p style ="margin:5px 0;"><strong>Apellidos:</strong> '.$apellidos.'</p>
                            <p style ="margin:5px 0;"><strong>Correo:</strong> '.$correo.'</p>
                            <p style ="margin:5px 0;"><strong>Telefono:</strong> '.$telefono.'</p>
                            <p style ="margin:5px 0;"><strong>Empresa:</strong> '.$empresa.'</p>
                            <p style ="margin:5px 0;"><strong>Almacenes:</strong> '.$almacenes.'</p>
                            <p style ="margin:5px 0;"><strong>Comentarios:</strong> '.$comentarios.'</p>
                            </td>
                          <td width="14"></td>
                        </tr>
                    <tr style="background:#2770b5; height:21px;">
                      <td colspan="5"></td>
                    </tr>
                  </table></td>
                    </tr>
                  </table>
                  </body>
                  </html>';

                  $Subject = iconv('UTF-8', 'windows-1252', 'Formulario de contacto SIGA');
                  require 'phpmailer/PHPMailerAutoload.php';
                  $mail = new PHPMailer;
                  $mail->isSMTP();
                  $mail->Host = 'in-v3.mailjet.com';
                  $mail->SMTPAuth = true;
                  $mail->Username = 'db46465ce8ff74cc06ef2b85098c2dce';
                  $mail->Password = '8763c2321d10d0f61f884bd8d3a8a508';
                  $mail->SMTPSecure = 'TLS';
                  $mail->Port = 25;
                  $mail->setFrom('noreply@siga.com.pe','No Reply');
                  $mail->addAddress('ventas@siga.com.pe', 'Ventas');
                  $mail->AddBCC('daniel.m.arvizu@gmail.com', 'Daniel');
                  $mail->isHTML(true);
                  $mail->Subject = $Subject;
                  $mail->Body=$html;
                  $mail->AltBody = '';
                  if(!$mail->send()) {
                    echo 'Message could not be sent.<br>'; echo 'Mailer Error: ' . $mail->ErrorInfo;
                  }else{
                    echo "success";
                  }

}else{
  echo"Spam attempt, I'm sorry, you can´t do this";
  print_r($_POST);
}
?>
