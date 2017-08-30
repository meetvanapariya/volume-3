
<?php
$path =$_GET["x1"];
$files = array_slice(scandir($path), 2);
$jdata = json_encode($files);
print_r($jdata);

?>
