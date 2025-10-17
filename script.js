//Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved preference
if (localStorage.getItem('darkMode') == 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Update icon
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', null);
    }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});