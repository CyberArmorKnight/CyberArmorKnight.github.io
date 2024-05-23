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


document.addEventListener('DOMContentLoaded', () => {
    const mainTextElement = document.getElementById('mainText');
    const subTextElement = document.getElementById('subText');
    const mainTexts = ["Tushar Santosh Patil", "CyberArmorKnight"];
    const subTexts = ["Cyber Security Analyst", "Security Consultant", "Cyber Security Instructor"];
    let mainTextIndex = 0;
    let subTextIndex = 0;
    let mainCharIndex = 0;
    let subCharIndex = 0;
  
    function typeMainText() {
      if (mainCharIndex < mainTexts[mainTextIndex].length) {
        mainTextElement.innerHTML += mainTexts[mainTextIndex].charAt(mainCharIndex);
        mainCharIndex++;
        setTimeout(typeMainText, 100); // Adjust typing speed (ms)
      } else {
        setTimeout(eraseMainText, 1000); // Wait before erasing (ms)
      }
    }
  
    function eraseMainText() {
      if (mainCharIndex > 0) {
        mainTextElement.innerHTML = mainTexts[mainTextIndex].substring(0, mainCharIndex - 1);
        mainCharIndex--;
        setTimeout(eraseMainText, 50); // Adjust erasing speed (ms)
      } else {
        mainTextIndex = (mainTextIndex + 1) % mainTexts.length;
        setTimeout(typeMainText, 500); // Wait before typing next text (ms)
      }
    }
  
    function typeSubText() {
      if (subCharIndex < subTexts[subTextIndex].length) {
        subTextElement.innerHTML += subTexts[subTextIndex].charAt(subCharIndex);
        subCharIndex++;
        setTimeout(typeSubText, 100); // Adjust typing speed (ms)
      } else {
        setTimeout(eraseSubText, 1000); // Wait before erasing (ms)
      }
    }
  
    function eraseSubText() {
      if (subCharIndex > 0) {
        subTextElement.innerHTML = subTexts[subTextIndex].substring(0, subCharIndex - 1);
        subCharIndex--;
        setTimeout(eraseSubText, 50); // Adjust erasing speed (ms)
      } else {
        subTextIndex = (subTextIndex + 1) % subTexts.length;
        setTimeout(typeSubText, 500); // Wait before typing next text (ms)
      }
    }
  
    // Initial calls to start the typing effects
    typeMainText();
    typeSubText();
  });
