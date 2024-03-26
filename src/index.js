import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { toggleReadMore } from "./scripts/utils"; // Import the toggle function

// Initialize your features
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Setup listeners or call functions that should run after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Assuming your Read More button has the ID 'readMoreBtn'
document.getElementById('readMoreBtn').addEventListener('click', toggleReadMore);
});



function toggleReadMore() {
    var moreText = document.getElementById("moreText");
    var readMoreBtn = document.getElementById("readMoreBtn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      readMoreBtn.textContent = "Read less";
    } else {
      moreText.style.display = "none";
      readMoreBtn.textContent = "Read more";
    }
  }