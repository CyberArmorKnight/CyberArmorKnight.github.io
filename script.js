//---------- Navbar ----------//

window.addEventListener('scroll', function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed', this.window.scrollY > 0)
})

// Portfolio Gallery

let filterContainer = document.querySelector(".gallery-filter");
let galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("filter-item")){
        // deactivates existing active filter item
        filterContainer.querySelector(".active").classList.remove("active");
        // activates new filter item
        event.target.classList.add("active");
        let filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }

});

// Review Carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1200:{
            items:2
        }
    }
})


//SubText

const subTextElement = document.getElementById("subText");
const subTextOptions = ["Cyber Security Analyst", "Security Consultant", "Cyber Security Instructor"];
let currentSubTextIndex = 0;

function updateSubText() {
    subTextElement.classList.add("fade-out"); // Start fade-out

    setTimeout(() => {
        subTextElement.textContent = subTextOptions[currentSubTextIndex];
        currentSubTextIndex = (currentSubTextIndex + 1) % subTextOptions.length;
        subTextElement.classList.remove("fade-out"); // Fade back in
    }, 500); // Wait for fade-out (half of transition duration)
}

// Initial display
updateSubText();
setInterval(updateSubText, 3000); 



// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
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
