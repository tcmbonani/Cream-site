function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_oo26orp","template_2y41jk8",parms).then(alert("Email Sent!!"))
}

