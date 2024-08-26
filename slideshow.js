let slideIndex = 0;
let slideInterval = setInterval(showSlides, 10000); // Start automatic slideshow
let isPaused = false;

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    slideIndex += n - 1;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    showSlides();
}

function togglePause() {
    const pauseButton = document.getElementById("pause-button");
    if (isPaused) {
        slideInterval = setInterval(showSlides, 10000);
        pauseButton.innerHTML = "&#10074;&#10074;"; // Pause symbol
    } else {
        clearInterval(slideInterval);
        pauseButton.innerHTML = "&#9658;"; // Play symbol
    }
    isPaused = !isPaused;
}

// Initialize slideshow
showSlides();
