const astroBottle = document.querySelector("#astrobottle");
console.log(astroBottle);
const astroInfo = document.querySelector("#astrobottle-info");
console.log(astroInfo);
const astroButton = document.querySelector("#astro-button");
console.log(astroButton);
const painting = document.querySelectorAll(".painting");
const astroTag = document.querySelector("#astro-tag")
console.log(astroTag)

astroBottle.addEventListener("mouseenter", showAstroInfo);
astroBottle.addEventListener("mouseleave", hideAstroInfo);

function showAstroInfo() {
  astroInfo.classList.add("show");
//   astroButton.classList.add("scale");
  astroButton.classList.add("show");
  astroTag.classList.add("show");
  console.log("show astro");
}

function hideAstroInfo() {
  astroInfo.classList.remove("show");
  astroButton.classList.remove("show");
  astroTag.classList.remove("show");
//   astroButton.classList.add("scale-out");
  console.log("hide astro");
}

const salmonEgg = document.querySelector("#salmon-egg");

salmonEgg.addEventListener("mouseenter", showSalmonInfo);
salmonEgg.addEventListener("mouseleave", hideSalmonInfo);

function showSalmonInfo() {
  console.log("show salmon");
}

function hideSalmonInfo() {
  console.log("hide salmon");
}
