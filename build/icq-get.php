<?php
$icqLink = "./json-data/icq.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);


    $json = file_get_contents($GLOBALS['icqLink']);
    $icq = json_decode($json, true);

    echo json_encode($icq);
} 