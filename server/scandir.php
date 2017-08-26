<?php

$dir = "../client/assets/images/";
$a = scandir($dir);
$images = array();
$lengtha =  count($a);
unset($a[0]);
unset($a[1]);
for ($i=0; $i < $lengtha; $i++) {
	if (isset($a[$i])) {
		array_push($images,$a[$i]);
	} 
}
echo json_encode($images);
/*$x = "assets/images/collage.jpg";
echo $x;*/
?>