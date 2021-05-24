<?php
$icqLink = "./json-data/icq.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);
    
    $value = trim($array["value"]);

    $json = file_get_contents($GLOBALS['icqLink']);
    $icq = json_decode($json, true);

    $icq["value"] = $value;

    file_put_contents($GLOBALS['icqLink'], json_encode($icq));
} 