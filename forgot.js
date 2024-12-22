document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const email = document.getElementById("forgotEmail").value;

    // Simulate the form submission to Formspree
    fetch('https://formspree.io/f/yourFormId', {
        method: 'POST',
        body: new FormData(this)
    })
    .then(response => {
        if (response.ok) {
            document.getElementById("message").innerText = "Password reset link has been sent to your email!";
            document.getElementById("message").style.display = "block";
        } else {
            document.getElementById("message").innerText = "Something went wrong. Please try again.";
            document.getElementById("message").style.display = "block";
        }
    })
    .catch(error => {
        document.getElementById("message").innerText = "Error submitting form. Please try again later.";
        document.getElementById("message").style.display = "block";
    });
});
