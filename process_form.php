<?php
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Simple validation
    if (empty($email) || empty($subject) || empty($message)) {
        http_response_code(400); // Bad Request
        echo json_encode(array('error' => 'All fields are required.'));
        exit;
    }

    // Configure your email settings
    $to = "tcmbonani@gmail.com";  // Replace with your actual email address
    $headers = "From: $email";

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200); // OK
        echo json_encode(array('message' => 'Email sent successfully!'));
    } else {
        http_response_code(500); // Internal Server Error
        echo json_encode(array('error' => 'Error sending email.'));
    }
} else {
    http_response_code(400); // Bad Request
    echo json_encode(array('error' => 'Invalid request.'));
}
?>
