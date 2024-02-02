
// https://github.com/github/fetch
fetch("https://formsubmit.co/f00f82cc40d840aad602d4354cd354fb", {
    method: "POST",
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: "FormSubmit",
        sunject: "",
        message: "I'm from Devro LABS"
    })
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

