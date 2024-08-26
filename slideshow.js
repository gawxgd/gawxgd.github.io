let slideIndex = 1;
let slideInterval = setInterval(showSlides, 10000); // Start automatic slideshow
let isPaused = false;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n) {
        slideIndex = n;
    } else {
        slideIndex++;
    }

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
    showSlides(slideIndex + n);
}

function currentSlide(n) {
    showSlides(n);
}

function togglePause() {
    if (isPaused) {
        slideInterval = setInterval(showSlides, 10000);
        document.getElementById("pause-button").innerHTML = "&#10074;&#10074;"; // Pause symbol
    } else {
        clearInterval(slideInterval);
        document.getElementById("pause-button").innerHTML = "&#9658;"; // Play symbol
    }
    isPaused = !isPaused;
}

// Initialize slideshow
showSlides(slideIndex);
