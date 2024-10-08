const slides = document.querySelectorAll(".slides");
console.log(slides);
let slideIndex = 0;
console.log(slideIndex);
let distance = 0;

const prevButton = document.querySelector("#prev-button");
console.log(prevButton);
prevButton.addEventListener("click", gotoPrevious);
function gotoPrevious() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  distance = slides[slideIndex].offsetLeft;
  //   use offsetTop to scroll vertically
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
  //   use top instead of left to scroll vertically
}

const nextButton = document.querySelector("#next-button");
console.log(nextButton);
prevButton.addEventListener("click", gotoNext);
function gotoNext() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  distance = slides[slideIndex].offsetLeft;
  console.log(distance);
  window.scrollTo({ left: distance, behavior: "smooth" });
}
