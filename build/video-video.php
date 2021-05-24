<?php
$videosLink = "./json-data/videos.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);

    $json = file_get_contents($GLOBALS['videosLink']);
    $videos = json_decode($json, true);

    $id = trim($array["id"]);
    echo json_encode($videos[$id]);
} 