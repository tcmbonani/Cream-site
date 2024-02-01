document.getElementById("contactForm").addEventListener("POST", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var emailInput = document.getElementById("email");
    var subjectInput = document.getElementById("subject");
    var messageInput = document.getElementById("message");

    var formData = new FormData();
    formData.append("email", emailInput.value);
    formData.append("subject", subjectInput.value);
    formData.append("message", messageInput.value);

    // Use fetch to send form data via POST
    fetch("process_form.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Handle the server response (if needed)
        console.log(data);
        alert("Form submitted successfully!");

        // Clear input fields
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Failed to submit form. Please try again later.");
    });
});

