<?php
	
	$base = fopen("base.txt", r+)

	$name = $_GET["name"]
	$email = $_GET["email"]
	$message = $_GET["message"]

	$name_w = fwrite($base, $name);
	$email_w = fwrite($base, $email);
	$message_w = fwrite($base, $message);


	if($name_w and $email_w and $message_w) {

	} else {

	}
?>