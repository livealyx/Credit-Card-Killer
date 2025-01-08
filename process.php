/*
 * Project Name:      CC Killer
 * Plugin URI:       https://github.com/creativealt
 * Description:      Credit Card Killer Script
 * Version:          1.0.1
 * Author:           Ashish Saini
 * Author URI:       https://creativealt.in
 * License:          Creative ALT Media Group
 */
<?php
/* Disabling the code due to api file modifcation.

// Allow only POST requests
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $inputData = file_get_contents('php://input');
    $data = json_decode($inputData, true);

    // Extract card details from the request
    $cardDetails = isset($data['cardDetails']) ? $data['cardDetails'] : '';

    // Validate card details format
    if (!empty($cardDetails) && preg_match('/^\d{4}-\w{4}-\w{4}-\w{4}$/', $cardDetails)) {
        // Process the card details (example: save to a file or database)
        file_put_contents('card_log.txt', $cardDetails . PHP_EOL, FILE_APPEND);

        // Respond with success message
        echo json_encode(['status' => 'success', 'message' => 'Card processed successfully!']);
    } else {
        // Respond with error message
        echo json_encode(['status' => 'error', 'message' => 'Invalid card details format.']);
    }
} else {
    // Respond with error if accessed via other methods
    http_response_code(405); // Method Not Allowed
    echo json_encode(['status' => 'error', 'message' => 'Only POST requests are allowed.']);
}
    */
?>
