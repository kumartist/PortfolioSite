// Initialize EmailJS with your user ID
emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS user ID

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const statusDiv = document.getElementById('formStatus');
    const submitButton = this.querySelector('button[type="submit"]');
    
    // Disable the submit button and show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending...';
    
    // Get form data
    const formData = {
        name: this.name.value,
        email: this.email.value,
        subject: this.subject.value,
        message: this.message.value
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function() {
            statusDiv.className = 'success';
            statusDiv.textContent = 'Message sent successfully!';
            statusDiv.style.display = 'block';
            document.getElementById('contactForm').reset();
        })
        .catch(function(error) {
            statusDiv.className = 'error';
            statusDiv.textContent = 'Failed to send message. Please try again.';
            statusDiv.style.display = 'block';
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            submitButton.disabled = false;
            submitButton.innerHTML = 'Send Message';
        });
}); 