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

// Function to initially hide the additional content
function hideAdditionalContent() {
  var moreText = document.getElementById("moreText");
  moreText.style.display = "none";
}

// Call the hideAdditionalContent function when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  hideAdditionalContent();
});