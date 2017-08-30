<?php
	include 'config.php';
	$data = file_get_contents("php://input");
	$data = json_decode($data,true);
	$name = $data['firstname'];
	$surname = $data['surname'];
	$age = $data['age'];
	mysqli_query($con,"INSERT INTO `forms`(`name`, `surname`, `age`) VALUES ('".$name."','".$surname."','".$age."')")or die(mysqli_error($con));
?>