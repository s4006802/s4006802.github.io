const painting = document.querySelectorAll(".painting");
const artTag = document.querySelectorAll("#artTag");

// Astrobottle Artwork Code

const astroBottle = document.querySelector("#astrobottle");
console.log(astroBottle);
const astroInfo = document.querySelector("#astrobottle-info");
console.log(astroInfo);
const astroButton = document.querySelector("#astro-button");
console.log(astroButton);
const astroTag = document.querySelector("#astro-tag");
console.log(astroTag);

const astroTL = document.querySelector("#astro-timelapse");

astroBottle.addEventListener("mouseenter", showAstroInfo);
astroBottle.addEventListener("mouseleave", hideAstroInfo);

function showAstroInfo() {
  astroTL.currentTime = 0;
  // This additional time revert along with the one in displayAstroTL() is necessary to prevent display glitches
  astroTag.classList.add("show");
  astroButton.classList.add("show");
  astroTag.classList.add("show");
  TLTimeout = setTimeout(displayAstroTL, 300);
  // After 0.3 seconds of hover, the art piece changes into a timelapse of the art piece. A short amount of time is chosen so that the user is able to discover this functionalilty, and accounts for the added time from preview of the final piece at the start of the timelapse. The timelapse does not begin immediately to allow the user to view the artwork briefly.
  console.log("show astro");
}

function displayAstroTL() {
  astroTL.currentTime = 0;
  // It is necessary to revert the time back to 0 as the timelapse starts playing whilst the video is still hidden.
  astroTL.classList.add("show");
}

function hideAstroInfo() {
  astroTag.classList.remove("show");
  astroButton.classList.remove("show");
  astroTag.classList.remove("show");
  console.log("hide astro");
  clearTimeout(TLTimeout);
  astroTL.classList.remove("show");
  astroTL.currentTime = 0;
}

// Salmon Egg Artwork Code

const salmonTag = document.querySelector("#salmon-tag");

const salmonEgg = document.querySelector("#salmon-egg");

salmonEgg.addEventListener("mouseenter", showSalmonInfo);
salmonEgg.addEventListener("mouseleave", hideSalmonInfo);
const salmonImg = document.querySelector("#salmon-img");
const salmonTL = document.querySelector("#salmon-timelapse");

function showSalmonInfo() {
  salmonTL.currentTime = 0;
  salmonTag.classList.add("show");
  console.log("show salmon");
  TLTimeout = setTimeout(dispalySalmonTL, 300);
}

function hideSalmonInfo() {
  salmonTag.classList.remove("show");
  console.log("hide salmon");
  console.log(salmonImg);
  clearTimeout(TLTimeout);
  salmonTL.classList.remove("show");
}

function dispalySalmonTL() {
  salmonTL.currentTime = 0;
  salmonTL.classList.add("show");
  console.log(salmonImg);
}

// King Artwork Code

const king = document.querySelector("#king");
const kingTag = document.querySelector("#king-tag");
const kingTL = document.querySelector("#king-timelapse");

king.addEventListener("mouseenter", showKingInfo);
king.addEventListener("mouseleave", hideKingInfo);

function showKingInfo() {
  kingTL.currentTime = 0;
  kingTag.classList.add("show");
  console.log("show king");
  TLTimeout = setTimeout(displayKingTL, 300);
  console.log(kingTL);
}

function hideKingInfo() {
  kingTag.classList.remove("show");
  console.log("hide king");
  kingTL.classList.remove("show");
  clearTimeout(TLTimeout);
}

function displayKingTL() {
  kingTL.currentTime = 0;
  kingTL.classList.add("show");
}

// Duck Artwork Code

const duck = document.querySelector("#duck");
const duckTag = document.querySelector("#duck-tag");
const duckTL = document.querySelector("#duck-timelapse");

duck.addEventListener("mouseenter", showDuckInfo);
duck.addEventListener("mouseleave", hideDuckInfo);

function showDuckInfo() {
  duckTL.currentTime = 0;
  duckTag.classList.add("show");
  console.log("show duck");
  TLTimeout = setTimeout(displayDuckTL, 300);
}

function hideDuckInfo() {
  duckTag.classList.remove("show");
  console.log("hide duck");
  duckTL.classList.remove("show");
  clearTimeout(TLTimeout);
}

function displayDuckTL() {
  duckTL.currentTime = 0;
  duckTL.classList.add("show");
}

// Tuna Sushi Artwork Code

const sushi = document.querySelector("#tuna-sushi");
const sushiTag = document.querySelector("#sushi-tag");
const sushiTL = document.querySelector("#sushi-timelapse");

sushi.addEventListener("mouseenter", showSushiInfo);
sushi.addEventListener("mouseleave", hideSushiInfo);

function showSushiInfo() {
  sushiTag.classList.add("show");
  console.log("show sushi");
  TLTimeout = setTimeout(displaySushiTL, 300);
  sushiTL.currentTime = 0;
}

function hideSushiInfo() {
  sushiTag.classList.remove("show");
  console.log("hide sushi");
  sushiTL.classList.remove("show");
  clearTimeout(TLTimeout);
}

function displaySushiTL() {
  sushiTL.currentTime = 0;
  sushiTL.classList.add("show");
}

// Bull Artwork Code

const bull = document.querySelector("#bull");
const bullTag = document.querySelector("#bull-tag");
const bullTL = document.querySelector("#bull-timelapse");

bull.addEventListener("mouseenter", showBullInfo);
bull.addEventListener("mouseleave", hideBullInfo);

function showBullInfo() {
  bullTag.classList.add("show");
  console.log("show bull");
  TLTimeout = setTimeout(displayBullTL, 300);
  bullTL.currentTime = 0;
}

function hideBullInfo() {
  bullTag.classList.remove("show");
  console.log("hide bull");
  bullTL.classList.remove("show");
  clearTimeout(TLTimeout);
}

function displayBullTL() {
  bullTL.currentTime = 0;
  bullTL.classList.add("show");
}

// Pop Up Window Code

// The navigation buttons within the pop up windows allow the user to explore each of the artworks without having to click off of the artwork, streamlining the experience.

const nextButton = document.querySelectorAll(".next");
console.log(nextButton);
let popUpIndex = 0;

nextButton.forEach((nextButton) => {
  nextButton.addEventListener("click", goNext);
});

function goNext() {
  console.log("goNext");
  console.log(popUpIndex);
  if (popUpIndex === 1) {
    showSalmonPop();
    hideAstroPop();
    popUpIndex = 2;
  } else if (popUpIndex === 2) {
    showKingPop();
    hideSalmonPop();
    popUpIndex = 3;
  } else if (popUpIndex === 3) {
    showDuckPop();
    hideKingPop();
    popUpIndex = 4;
  } else if (popUpIndex === 4) {
    showSushiPop();
    hideDuckPop();
    popUpIndex = 5;
  } else if (popUpIndex === 5) {
    showBullPop();
    hideSushiPop();
    popUpIndex = 6;
  }
}

const backButton = document.querySelectorAll(".back");

backButton.forEach((backButton) => {
  backButton.addEventListener("click", goBack);
});

function goBack() {
  console.log(popUpIndex);
  if (popUpIndex === 6) {
    showSushiPop();
    hideBullPop();
    popUpIndex = 5;
  } else if (popUpIndex === 5) {
    showDuckPop();
    hideSushiPop();
    popUpIndex = 4;
  } else if (popUpIndex === 4) {
    showKingPop();
    hideDuckPop();
    popUpIndex = 3;
  } else if (popUpIndex === 3) {
    showSalmonPop();
    hideKingPop();
    popUpIndex = 2;
  } else if (popUpIndex === 2) {
    showAstroPop();
    hideSalmonPop();
    popUpIndex = 1;
  }
}

const playTL = document.querySelectorAll(".play-TL");
const salmonPopTL = document.querySelector("#salmon-pop-TL");
const astroPopTL = document.querySelector("#astro-pop-TL");
const kingPopTL = document.querySelector("#king-pop-TL");
const duckPopTL = document.querySelector("#duck-pop-TL");
const sushiPopTL = document.querySelector("#sushi-pop-TL");
const bullPopTL = document.querySelector("#bull-pop-TL");

playTL.forEach((playTL) => {
  playTL.addEventListener("click", playVideo);
});

function playVideo() {
  console.log("play video");
  if (popUpIndex === 1 && astroPopTL.paused) {
    astroPopTL.currentTime = 0;
    astroPopTL.classList.add("show");
    astroPopTL.play();
  } else if (popUpIndex === 1 && astroPopTL.play) {
    astroPopTL.currentTime = 0;
    astroPopTL.classList.remove("show");
    astroPopTL.pause();
  } else if (popUpIndex === 2 && salmonPopTL.paused) {
    salmonPopTL.currentTime = 0;
    salmonPopTL.classList.add("show");
    salmonPopTL.play();
  } else if (popUpIndex === 2 && salmonPopTL.play) {
    salmonPopTL.currentTime = 0;
    salmonPopTL.classList.remove("show");
    salmonPopTL.pause();
  } else if (popUpIndex === 3 && kingPopTL.paused) {
    kingPopTL.currentTime = 0;
    kingPopTL.classList.add("show");
    kingPopTL.play();
  } else if (popUpIndex === 3 && kingPopTL.play) {
    kingPopTL.currentTime = 0;
    kingPopTL.classList.remove("show");
    kingPopTL.pause();
  } else if (popUpIndex === 4 && duckPopTL.paused) {
    duckPopTL.currentTime = 0;
    duckPopTL.classList.add("show");
    duckPopTL.play();
  } else if (popUpIndex === 4 && duckPopTL.play) {
    duckPopTL.currentTime = 0;
    duckPopTL.classList.remove("show");
    duckPopTL.pause();
  } else if (popUpIndex === 5 && sushiPopTL.paused) {
    sushiPopTL.currentTime = 0;
    sushiPopTL.classList.add("show");
    sushiPopTL.play();
  } else if (popUpIndex === 5 && sushiPopTL.play) {
    sushiPopTL.currentTime = 0;
    sushiPopTL.classList.remove("show");
    sushiPopTL.pause();
  } else if (popUpIndex === 6 && bullPopTL.paused) {
    bullPopTL.currentTime = 0;
    bullPopTL.classList.add("show");
    bullPopTL.play();
  } else if (popUpIndex === 6 && bullPopTL.play) {
    bullPopTL.currentTime = 0;
    bullPopTL.classList.remove("show");
    bullPopTL.pause();
  }
}

// I chose not to disable the timelapse once the user clicks off the artwork, as the user may do this by accident and have to rewatch the timelapse from the start.

// Astrobottle Pop Up Code

const astroPop = document.querySelector("#astro-pop-container");
const astroPopBack = document.querySelector("#astro-pop-back");
const astroCloseButton = document.querySelector("#astro-close-btn");
const popContainer = document.querySelectorAll("#pop-container");

function showAstroPop() {
  astroPop.classList.add("show");
  console.log("astro click");
  popUpIndex = 1;
}

astroButton.addEventListener("click", showAstroPop);
astroPopBack.addEventListener("click", hideAstroPop);
// This adds the ability to close the window by clicking on the background, which is an intuitive action standard in most websites. A close button is still present to prevent any confusion if the user does not know to click on the background to exit.
astroCloseButton.addEventListener("click", hideAstroPop);

function hideAstroPop() {
  astroPop.classList.remove("show");
}

// Salmon Egg Pop Up Code

const salmonPop = document.querySelector("#salmon-pop-container");
const salmonButton = document.querySelector("#salmon-button");
const salmonPopBack = document.querySelector("#salmon-pop-back");
const salmonCloseButton = document.querySelector("#salmon-close-btn");

salmonButton.addEventListener("click", showSalmonPop);
salmonPopBack.addEventListener("click", hideSalmonPop);
salmonCloseButton.addEventListener("click", hideSalmonPop);

function showSalmonPop() {
  salmonPop.classList.add("show");
  console.log(salmonPop);
  console.log("salmon click");
  popUpIndex = 2;
}

function hideSalmonPop() {
  salmonPop.classList.remove("show");
  console.log("hide salmon");
}

// King Pop Up Code

const kingPop = document.querySelector("#king-pop-container");
const kingButton = document.querySelector("#king-button");
const kingPopBack = document.querySelector("#king-pop-back");
const kingCloseButton = document.querySelector("#king-close-btn");

kingButton.addEventListener("click", showKingPop);
kingPopBack.addEventListener("click", hideKingPop);
kingCloseButton.addEventListener("click", hideKingPop);

function showKingPop() {
  kingPop.classList.add("show");
  console.log(kingPop);
  console.log("king click");
  popUpIndex = 3;
}

function hideKingPop() {
  kingPop.classList.remove("show");
  console.log("hide king");
}

// Duck Pop Up Code

const duckPop = document.querySelector("#duck-pop-container");
const duckButton = document.querySelector("#duck-button");
const duckPopBack = document.querySelector("#duck-pop-back");
const duckCloseButton = document.querySelector("#duck-close-btn");

duckButton.addEventListener("click", showDuckPop);
duckPopBack.addEventListener("click", hideDuckPop);
duckCloseButton.addEventListener("click", hideDuckPop);

function showDuckPop() {
  duckPop.classList.add("show");
  console.log(duckPop);
  console.log("duck click");
  popUpIndex = 4;
}

function hideDuckPop() {
  duckPop.classList.remove("show");
  console.log("hide duck");
}

// Tuna Sushi Pop Up Code

const sushiPop = document.querySelector("#sushi-pop-container");
const sushiButton = document.querySelector("#sushi-button");
const sushiPopBack = document.querySelector("#sushi-pop-back");
const sushiCloseButton = document.querySelector("#sushi-close-btn");

sushiButton.addEventListener("click", showSushiPop);
sushiPopBack.addEventListener("click", hideSushiPop);
sushiCloseButton.addEventListener("click", hideSushiPop);

function showSushiPop() {
  sushiPop.classList.add("show");
  console.log(sushiPop);
  console.log("sushi click");
  popUpIndex = 5;
}

function hideSushiPop() {
  sushiPop.classList.remove("show");
  console.log("hide sushi");
}

// Bull Pop Up Code

const bullPop = document.querySelector("#bull-pop-container");
const bullButton = document.querySelector("#bull-button");
const bullPopBack = document.querySelector("#bull-pop-back");
const bullCloseButton = document.querySelector("#bull-close-btn");

bullButton.addEventListener("click", showBullPop);
bullPopBack.addEventListener("click", hideBullPop);
bullCloseButton.addEventListener("click", hideBullPop);

function showBullPop() {
  bullPop.classList.add("show");
  console.log(bullPop);
  console.log("bull click");
  popUpIndex = 6;
}

function hideBullPop() {
  bullPop.classList.remove("show");
  console.log("hide bull");
}

// An improvement for next time would be to figure out how to optimise the code as to not contintually repeating the same code for different artworks, and to more easily implement more artworks within a larger project.
