// Predefined username and password for testing
const validUsername = "AWAIS";
const validPassword = "AWAISKING";

// Add event listener to the form
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Get the entered username and password
    const username = document.querySelector("[name='username']").value;
    const password = document.querySelector("[name='password']").value;
    const errorMessage = document.getElementById("error-message");

    // Validate username and password
    if (username === validUsername && password === validPassword) {
        // Clear any error message
        errorMessage.style.display = "none";

        // Redirect to another page or show success message
        window.location.href = "login.html"; // Replace with your desired page
    } else {
        // Display error message
        errorMessage.style.display = "block";
        errorMessage.textContent = "Invalid username or password!";
    }
});

document.addEventListener('click', function (event) {
    if (!event.target.matches('input')) {
        const inputs = document.querySelectorAll('input');
        if (inputs.length > 0) {
            inputs[0].focus(); // Focus on the first input field
        }
    }
});

document.addEventListener('copy', (event) => {
    event.preventDefault();
    alert("Content copying is disabled on this site!");
});
