/*
 * Project Name:      CC Killer
 * Plugin URI:       https://github.com/creativealt
 * Description:      Credit Card Killer Script
 * Version:          1.0.1
 * Author:           Ashish Saini
 * Author URI:       https://creativealt.in
 * License:          Creative ALT Media Group
 */
document.getElementById("killButton").addEventListener("click", function () {
    // Get the entered card details
    const cardDetails = document.getElementById("cardInput").value;

    // Basic validation for card format (e.g., 1234-xxxx-xxxx-xxxx)
    const cardRegex = /^\d{4}-\w{4}-\w{4}-\w{4}$/;
    if (!cardRegex.test(cardDetails)) {
        alert("Invalid card details format. Please use the format: 1234-xxxx-xxxx-xxxx.");
        return;
    }

    // API endpoint to send card details
    const apiUrl = "https://example.com/api/process-card"; // Replace with your API endpoint

    // Send the card details via POST request
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cardDetails: cardDetails }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json(); // Assuming the server returns JSON
            } else {
                throw new Error("Failed to send card details to the server.");
            }
        })
        .then((data) => {
            // Handle success response
            alert("Card processed successfully!");
            console.log(data); // Debug the response if needed
        })
        .catch((error) => {
            // Handle error
            alert("Error: " + error.message);
        });
});
