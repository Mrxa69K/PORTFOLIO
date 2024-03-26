export function toggleReadMore() {
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