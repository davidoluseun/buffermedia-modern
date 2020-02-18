// DOM elements
const slides = bodyElem.querySelectorAll(".slide"),
      prevBtn = bodyElem.querySelector(".prev"),
      nextBtn = bodyElem.querySelector(".next");

// Globals
var slideIndex = 0;


// Slideshow

function showSlides(position) {

    // Grab the length of slides
    let slidesLength = slides.length;

    // Loop through all slides images
    for (var i = 0; i < slidesLength; i++) {

        // Hide all slides images
        slides[i].style.display = "none";

    }

    // Display the current image
    slides[position].style.display = "block";

}

// Next control function

function slideNext() {

    // Grab the length of slides
    let slidesLength = slides.length;
    
    // Increment slideIndex by one 
    slideIndex++;

    // If slideIndex is equal to the length of slides
    if (slideIndex == slidesLength) {

        // Set slideIndex to zero to target the first image
        slideIndex = 0;

    }

    // Call showSlides function
    showSlides(slideIndex);
  
}

// Previous control function

function slidePrev() {

    // Grab the length of slides
    let slidesLength = slides.length;

    // Decrement slideIndex by one
    slideIndex--;
      
    // If slideIndex is equal to -1
    if (slideIndex == -1) {

        // Set slideIndex to target the last image
        slideIndex = slidesLength - 1;

    }

    // Call showSlides function
    showSlides(slideIndex);

}

// Next control button
nextBtn.onclick = (e) => {

    // Prevent the link default behaviour, call slideNext function
    e.preventDefault();
    slideNext();

};

// Previous control button handler
prevBtn.onclick = (e) => {

    // Prevent the link default behaviour, call slidePrev function
    e.preventDefault();
    slidePrev();

};

// Call slideNext function every 4000ms
setInterval(slideNext, 4000);
