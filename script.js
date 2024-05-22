// Smooth scrolling for navigation links
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
    document.querySelectorAll('.contact-tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName + '-tab').style.display = 'block';

    document.querySelectorAll('.contact-tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.contact-tabs button[onclick="showContactTab('${tabName}')"]`).classList.add('active');
}


// Function to show the selected achievement category
function showAchievements(category) {
    document.querySelectorAll('#achievements-menu a.menu-button').forEach(btn => btn.classList.remove('active'));


    

    // Add 'active' class to the clicked button using its category parameter
    document.querySelector(`#achievements-menu a.menu-button[href="${category}.html"]`).classList.add('active');
}


// Smooth scrolling for navigation links
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
    document.querySelectorAll('.contact-tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName + '-tab').style.display = 'block';

    document.querySelectorAll('.contact-tabs button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.contact-tabs button[onclick="showContactTab('${tabName}')"]`).classList.add('active');
}


// Function to show the selected achievement category
function showAchievements(category) {
    document.querySelectorAll('#achievements-menu a.menu-button').forEach(btn => btn.classList.remove('active'));

    // Add 'active' class to the clicked button using its category parameter
    document.querySelector(`#achievements-menu a.menu-button[href="${category}.html"]`).classList.add('active');
}

// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.body.classList.add("showButton");
  } else {
    document.body.classList.remove("showButton");
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}
