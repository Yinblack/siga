<?php
if(isset($_POST['captcha'])){
              $nombre  = $_POST['nombre'];
              $telefono = $_POST['telefono'];
              $email   = $_POST['email'];
              $mensaje   = $_POST['mensaje'];
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
                          SIGA CONTACTO - Sistema de Inventarios y Ventas
                            <p style ="margin:5px 0;"><strong>Nombre:</strong> '.$nombre.'</p>
                            <p style ="margin:5px 0;"><strong>Email:</strong> '.$email.'</p>
                            <p style ="margin:5px 0;"><strong>Telefono:</strong> '.$telefono.'</p>
                            <p style ="margin:5px 0;"><strong>Mensaje:</strong> '.$mensaje.'</p>
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
