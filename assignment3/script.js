const astroBottle = document.querySelector("#astrobottle");
console.log(astroBottle);
const astroInfo = document.querySelector("#astrobottle-info");
console.log(astroInfo);
const astroButton = document.querySelector("#astro-button");
console.log(astroButton);
const painting = document.querySelectorAll(".painting");
const astroTag = document.querySelector("#astro-tag");
console.log(astroTag);
const artTag = document.querySelectorAll("#artTag");
const salmonTag = document.querySelector("#salmon-tag");

astroBottle.addEventListener("mouseenter", showAstroInfo);
astroBottle.addEventListener("mouseleave", hideAstroInfo);

function showAstroInfo() {
  astroTag.classList.add("show");
  //   astroButton.classList.add("scale");
  astroButton.classList.add("show");
  astroTag.classList.add("show");
  console.log("show astro");
}

function hideAstroInfo() {
  astroTag.classList.remove("show");
  astroButton.classList.remove("show");
  astroTag.classList.remove("show");
  //   astroButton.classList.add("scale-out");
  console.log("hide astro");
}

const salmonEgg = document.querySelector("#salmon-egg");

salmonEgg.addEventListener("mouseenter", showSalmonInfo);
salmonEgg.addEventListener("mouseleave", hideSalmonInfo);

function showSalmonInfo() {
  salmonTag.classList.add("show");
  console.log("show salmon");
  salmonTimeout = setTimeout(dispalySalmonTL, 300);
  // After 0.3 seconds of hover, the art piece changes into a timelapse of the art piece. A short amount of time is chosen so that the user is able to discover this functionalilty, and accounts for the added tiem from preview of the final piece at the start of the timelapse.
}

function hideSalmonInfo() {
  salmonTag.classList.remove("show");
  console.log("hide salmon");
  clearTimeout(salmonTimeout);
  salmonImg.src = "salmon-egg.png";
}

const salmonImg = document.querySelector("#salmon-img");

function dispalySalmonTL() {
  salmonImg.src = "salmon-egg.gif";
  console.log(salmonImg);
}

const king = document.querySelector("#king");
const kingTag = document.querySelector("#king-tag");

king.addEventListener("mouseenter", showKingInfo);
king.addEventListener("mouseleave", hideKingInfo);

function showKingInfo() {
  kingTag.classList.add("show");
  console.log("show king");
}

function hideKingInfo() {
  kingTag.classList.remove("show");
  console.log("hide king");
}

const duck = document.querySelector("#duck");
const duckTag = document.querySelector("#duck-tag");

duck.addEventListener("mouseenter", showDuckInfo);
duck.addEventListener("mouseleave", hideDuckInfo);

function showDuckInfo() {
  duckTag.classList.add("show");
  console.log("show duck");
}

function hideDuckInfo() {
  duckTag.classList.remove("show");
  console.log("hide duck");
}

const sushi = document.querySelector("#tuna-sushi");
const sushiTag = document.querySelector("#sushi-tag");

sushi.addEventListener("mouseenter", showSushiInfo);
sushi.addEventListener("mouseleave", hideSushiInfo);

function showSushiInfo() {
  sushiTag.classList.add("show");
  console.log("show sushi");
}

function hideSushiInfo() {
  sushiTag.classList.remove("show");
  console.log("hide sushi");
}

const bull = document.querySelector("#bull");
const bullTag = document.querySelector("#bull-tag");

bull.addEventListener("mouseenter", showBullInfo);
bull.addEventListener("mouseleave", hideBullInfo);

function showBullInfo() {
  bullTag.classList.add("show");
  console.log("show bull");
}

function hideBullInfo() {
  bullTag.classList.remove("show");
  console.log("hide bull");
}

astroButton.addEventListener("click", showAstroPop);
const astroPop = document.querySelector("#astro-pop-container");
const astroPopBack = document.querySelector("#astro-pop-back");

function showAstroPop() {
  astroPop.classList.add("show");
  console.log("astro click");
}

astroPopBack.addEventListener("click", hideAstroPop);

function hideAstroPop() {
  astroPop.classList.remove("show");
}

// This adds the ability to close the window by clicking on the background, which is an intuitive action standard in most websites.
