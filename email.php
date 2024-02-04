<?php

$userName = $_POST['name'];
$userMobile = $_POST['mobile'];
$userCity = $_POST['city'];
$userPackage = $_POST['packages'];


$toEmail = "amoghhealthcare0@gmail.com";

$txt = "Name: " . $userName .
	"\r\n Mobile: ". $userMobile  . 
	"\r\n City: ". $userCity  . 
	"\r\n Package: " . $userPackage . "\r\n";


	if($userMobile!=NULL){

		mail($toEmail, $txt);

	}

	//redirect
	header("Location: thankyou.php");
?>
