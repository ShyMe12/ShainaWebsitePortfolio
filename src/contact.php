<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

$host = "localhost";
$dbname = "contact_db";
$username = "root";
$password = "";

$data = json_decode(file_get_contents("php://input"), true);

$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
  echo json_encode(["code" => 500, "message" => "Connection Failed"]);
  exit;
}

$firstName = $conn->real_escape_string($data['firstName']);
$lastName = $conn->real_escape_string($data['lastName']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);
$message = $conn->real_escape_string($data['message']);

$sql = "INSERT INTO contacts (first_name, last_name, email, phone, message) 
        VALUES ('$firstName', '$lastName', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(["code" => 200, "message" => "Message sent"]);
} else {
  echo json_encode(["code" => 500, "message" => "Database error"]);
}

$conn->close();
?>
