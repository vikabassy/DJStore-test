<?php
if(isset($_POST['userName'])) $name = $_POST['userName']; else $name = $_POST['userNameMobile'];
if(isset($_POST['userPhone'])) $phone = $_POST['userPhone']; else $phone = $_POST['userPhoneMobile'];

$f = fopen('data.txt', 'a+');
fwrite($f, "Имя клиента: " .$name."; Телефон клиента: " .$phone."\r\n");
fclose($f);
?>