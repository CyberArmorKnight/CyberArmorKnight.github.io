// Smooth scrolling for navigation links (Combined)
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Function to show the selected contact tab
function showContactTab(tabName) {
    document.querySelectorAll('.contact-tab-content').forEach(tab => {
        tab.style.display = (tab.id === tabName + '-tab') ? 'block' : 'none'; // Show/hide based on id
    });

    document.querySelectorAll('.contact-tabs button').forEach(btn => {
        btn.classList.toggle('active', btn.onclick.toString().includes(`'${tabName}'`)); // Toggle 'active' class
    });
}

// Function to show the selected achievement category
function showAchievements(category) {
    document.querySelectorAll('#achievements-menu a.menu-button').forEach(btn => {
        btn.classList.toggle('active', btn.href.endsWith(category + '.html')); // Toggle 'active' class
    });

    // (Here you would typically fetch and display content for the selected category)
}

// Scroll to Top Button (Fixed and optimized)
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

