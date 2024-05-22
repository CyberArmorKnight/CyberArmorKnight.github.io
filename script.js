// Smooth scrolling for navigation linksconst navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

// Achievements menu and content interactions (if dynamic)
// ... 

// Contact form submission handling
// ... 
