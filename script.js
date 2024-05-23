document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.querySelector('.slideshow-container'); // get container outside fetch call 

    // Slideshow Functionality
    fetch('images/')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const imageFiles = Array.from(doc.querySelectorAll('a'))
                .filter(link => link.href.endsWith('.jpg') || link.href.endsWith('.png') || link.href.endsWith('.jpeg') || link.href.endsWith('.gif'))
                .map(link => link.href);
            imageFiles.forEach((imageFile, index) => {
                const slide = document.createElement('div');
                slide.classList.add('slide', 'fade');
                if (index === 0) {
                    slide.classList.add('active'); 
                }
                const img = document.createElement('img');
                img.src = imageFile;
                img.alt = "Cybersecurity Image";
                img.onerror = function() { this.style.display = 'none'; };
                slide.appendChild(img);
                slideshowContainer.appendChild(slide);
            });

            // Slideshow logic (AFTER images are loaded)
            const slides = document.querySelectorAll('.slide'); // Re-fetch slides after they're created
            let slideIndex = 0;
            showSlides(); 

            function showSlides() {
                slides.forEach(slide => slide.style.display = "none"); 
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 } 
                slides[slideIndex - 1].style.display = "block";     
                setTimeout(showSlides, 3000); 
            }

            // ... (slideshow functionality from previous code) ...
        })
        .then(() => {
            // Typing Effect (Start after slideshow setup)
            const mainTextElement = document.getElementById('mainText');
            const subTextElement = document.getElementById('subText');
            const mainTexts = ["Tushar Santosh Patil", "CyberArmorKnight"];
            const subTexts = ["Cyber Security Analyst", "Security Consultant", "Cyber Security Instructor"];
            let mainTextIndex = 0;
            let subTextIndex = 0;
            let isDeleting = false;
            let currentText = '';
            let currentSubText = '';
          
            function type() {
                const mainText = mainTexts[mainTextIndex];
                const subText = subTexts[subTextIndex];

                if (!isDeleting) {
                    currentText = mainText.substring(0, currentText.length + 1);
                    currentSubText = subText.substring(0, currentSubText.length + 1);
                } else {
                    currentText = mainText.substring(0, currentText.length - 1);
                    currentSubText = subText.substring(0, currentSubText.length - 1);
                }

                mainTextElement.innerHTML = currentText;
                subTextElement.innerHTML = currentSubText;

                let typeSpeed = isDeleting ? 50 : 100;
                if (!isDeleting && currentText === mainText && currentSubText === subText) {
                    typeSpeed = 2000; // Pause before deleting
                    isDeleting = true;
                } else if (isDeleting && currentText === '' && currentSubText === '') {
                    isDeleting = false;
                    mainTextIndex = (mainTextIndex + 1) % mainTexts.length;
                    subTextIndex = (subTextIndex + 1) % subTexts.length;
                    typeSpeed = 500; // Pause before typing the next text
                }

                setTimeout(type, typeSpeed);
            }
            type();
        });


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
        document.querySelectorAll('.contact-tab-content').forEach(tab => {
            tab.style.display = (tab.id === tabName + '-tab') ? 'block' : 'none';
        });

        document.querySelectorAll('.contact-tabs button').forEach(btn => {
            btn.classList.toggle('active', btn.onclick.toString().includes(`'${tabName}'`));
        });
    }

    // Function to show the selected achievement category
    function showAchievements(category) {
        document.querySelectorAll('#achievements-menu a.menu-button').forEach(btn => {
            btn.classList.toggle('active', btn.href.endsWith(category + '.html'));
        });
    }

    // Scroll to Top Button
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
});













