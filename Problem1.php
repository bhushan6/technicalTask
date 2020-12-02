<?php

$server = 2;
$loadPerMin = array(10, 60, 50, 15, 20);
$serverRunIntervalInM = 60000;
$index = 0;

function checkLoad($load){
global $server;
    if($load < 50){
        $server = $server/2;
    } else{
        $server = 2*$server + 1;
    }
    $server = floor($server);
    echo $server;
}

for ($x = 0; $x <= 4; $x++){
    checkLoad($loadPerMin[$x]);
}

?>
?>