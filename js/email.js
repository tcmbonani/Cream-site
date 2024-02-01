// Get form values
var email = document.getElementById("email").value;
var subject = document.getElementById("subject").value;
var message = document.getElementById("message").value;

// Make a POST request with Fetch API
fetch("https://formsubmit.co/ajax/tcmbonani@gmail.com", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: email,
        subject: subject,
        message: message
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));