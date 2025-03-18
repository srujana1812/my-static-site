// Log message when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');
});

// Show alert on button click
function showAlert() {
    alert('Button clicked!');
}

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Form submitted successfully!');
});
