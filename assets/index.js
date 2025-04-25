//JS FOR CURRENT DATE IN FOOTER

    document.getElementById("current-date").textContent = new Date().toLocaleDateString();

//JS CONSOLE LOG

console.log('Page loaded successfully!');

// JS FOR FORM VALIDATION
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form"); // Select the form
    form.addEventListener("submit", (event) => {
        // Prevent form submission
        event.preventDefault();

        // Get form fields
        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const companyName = document.getElementById("companyName").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phoneNumber").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (!firstName || !lastName || !companyName || !email || !phone || !message) {
            alert("Please complete all fields.");
            return;
        }

        // If all fields are valid
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
    });
});
