<?php
include("config.php");
$x = mysqli_query($con,'SELECT * FROM casualshoes');
$shoes = array();
while ($z = mysqli_fetch_assoc($x)) {
	array_push($shoes, $z);
}
$images = $shoes;
print_r(json_encode($images));

?>