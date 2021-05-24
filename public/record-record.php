<?php
$recordsLink = "./json-data/records.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);

    $json = file_get_contents($GLOBALS['recordsLink']);
    $records = json_decode($json, true);

    $id = trim($array["id"]);
    echo json_encode($records[$id]);
} 