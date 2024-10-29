document.querySelector('form').addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get form values
    const name = document.getElementById("frm-name").value.trim();
    const email = document.getElementById("frm-email").value.trim();
    const message = document.getElementById("frm-msg").value.trim();
    
    // Email pattern for validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation checks
    if (!name) {
        alert("Please enter your name.");
        return;
    }
    if (!email || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }
    if (!message) {
        alert("Please enter your message.");
        return;
    }
    
    // If all checks pass, show popup
    alert("Mail Sent");
});