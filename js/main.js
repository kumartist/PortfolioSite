// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in animation to elements
document.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('fade-in');
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        document.querySelector('.navbar').style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
}); 