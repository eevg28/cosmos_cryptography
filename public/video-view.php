<?php
$videosLink = "./json-data/videos.json";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $content = trim(file_get_contents("php://input"));
    $array = json_decode($content, true);

    $id = trim($array["id"]);

    $json = file_get_contents($GLOBALS['videosLink']);
    $videos = json_decode($json, true);

    $videos[$id]["view"] = $videos[$id]["view"] + 1;

    echo json_encode($videos);
    file_put_contents($GLOBALS['videosLink'], json_encode($videos));
} 