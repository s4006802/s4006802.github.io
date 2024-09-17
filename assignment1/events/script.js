// const myButton = document.querySelector("#my-button");
// console.log(myButton);

// const count = document.querySelector("#count");
// console.log(count);

// let buttonCount = 0;
// myButton.addEventListener("click", myFunction);

// function myFunction() {
//   buttonCount = buttonCount + 1;
//   // buttonCount++;
//   console.log("hey did you just click me?");
//   count.textContent = buttonCount;
// }

const toggleButton = document.querySelector("#toggle-button");
console.log(toggleButton);

const boxContainer = document.querySelector(".box-container");
console.log(boxContainer);

toggleButton.addEventListener("click", toggleMe);

function toggleMe() {
  console.log("toggle button is clicked");
  boxContainer.classList.toggle("row-reverse");
}

const addButton = document.querySelector("#add-button");
console.log(addButton);

addButton.addEventListener("click", addMe);
let count = 0;
function addMe() {
  console.log("add button is clicked");
  //   boxContainer.innerHTML += `<div class="box purple-box"></div>
  //         <div class="box coral-box"></div>`;
  if (count % 2 === 0) {
    boxContainer.innerHTML += `<div class="box purple-box">`;
  } else {
    boxContainer.innerHTML += `<div class="box coral-box"></div>`;
  }
  count++;
}

boxContainer.addEventListener("mouseenter", dropMe);
function dropMe() {
  boxContainer.classList.add("drop");
}
boxContainer.addEventListener("mouseleave", pickMe);
function pickMe() {
  boxContainer.classList.remove("drop");
}

// addButton.addEventListener("mouseenter", colorMe);
// addButton.addEventListener("mouseleave", decolorMe);
// function colorMe () {
//     addButton.classList.add("purple-box")
// }
