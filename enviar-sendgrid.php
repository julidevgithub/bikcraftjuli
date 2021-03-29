<?php

require("./sendgrid-php/sendgrid-php.php");

$email_site = "julidev.tk@gmail.com";
$nome_site = "bikcraftjuli";

$email_user = $_POST["email"];
$nome_user = $_POST["nome"];

$body_content = "";
foreach( $_POST as $field => $value) {
  if( $field !== "leaveblank" && $field !== "dontchange" && $field !== "enviar") {
    $sanitize_value = filter_var($value, FILTER_SANITIZE_STRING);
    $body_content .= "$field: $value \n";
  }
}

$email = new \SendGrid\Mail\Mail(); 
$email->setFrom($email_site, $nome_site);
$email->addTo($email_site, $nome_site);

$email->setReplyTo($email_user, $nome_user);

$email->setSubject("Formulário bikcraftjuli");
$email->addContent("text/plain", $body_content);

$sendgrid = new \SendGrid("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");
try {
    $response = $sendgrid->send($email);
    print $response->statusCode() . "\n";
    print_r($response->headers());
    print $response->body() . "\n";
} catch (Exception $e) {
    echo "Caught exception: ". $e->getMessage() ."\n";
}