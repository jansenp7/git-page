<?php

if(isset($_POST['email']) && !empty($_POST['email']))  {

$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['email']);
$mensagem = addslashes($_POST['mensagem']);

$to = "jansen.drope@gmail.com";
$subject = "Contato - 1..2 Court";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From:jansen.drope@gmail.com"."\r\n".
            "Reply-to:".$email."\r\n".
            "X=mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {

    echo("Email enviado com sucesso!");

}else {
    echo("O Email não pode ser enviado");
}


}

?>