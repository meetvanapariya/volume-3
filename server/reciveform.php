<?php
include 'config.php';
$ara = array();
$result = mysqli_query($con,"SELECT * FROM `forms`");
 while($x = mysqli_fetch_assoc($result)){
 	array_push($ara,$x);
 }
echo json_encode($ara);
?>