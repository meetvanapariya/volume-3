<?php
include 'config.php';
$id = $_GET['id'];
mysqli_query($con,"DELETE FROM `forms` WHERE main_id=$id");
?>