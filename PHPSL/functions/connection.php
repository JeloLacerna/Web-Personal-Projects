<?php

$db = new mysqli("localhost", "root", "", "chatdb");
if($db->connect_error){
    die("Connection failed " . $db->connect_error);
}
