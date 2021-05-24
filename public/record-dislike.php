<?php
$recordsLink = "./json-data/records.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);

    $id = trim($array["id"]);

    $json = file_get_contents($GLOBALS['recordsLink']);
    $records = json_decode($json, true);

    $records[$id]["dislike"] = $records[$id]["dislike"] + 1;

    echo json_encode($records);
    file_put_contents($GLOBALS['recordsLink'], json_encode($records));
} 