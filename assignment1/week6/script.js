function checkGrade() {
  const a1 = document.querySelector("#answer1");
  console.log(a1.value);
  const a2 = document.querySelector("#answer2");
  console.log(a2.value);
  let a1value = parseFloat(a1.value);
  let a2value = parseFloat(a2.value);
  let total = calculateTotal(a1value, a2value);
  //   let total = parseFloat(a1.value) + parseFloat(a2.value);
  //   let total = calculateTotal(parseFloat(a1.value),parseFloat(a2.value))
  console.log(total);
  giveReport(total);
}

function calculateTotal(a, b) {
  let sum = a + b;
  return sum;
}

function giveReport(score) {
  const report = document.querySelector("#report");
  if (score > 30) {
    console.log("you got HD");
    report.textContent = "you got HD";
  } else if (score > 20 && score <= 30) {
    console.log("you got D");
    report.textContent = "you got D";
  }
}

const myCat = document.querySelector("#my-cat");
console.log(myCat);
// myCat.classList.add("round");

function toggleMe() {
  myCat.classList.toggle("round");
}

const header = document.querySelector("header");
console.log(header.innerHTML);
let personality = "cutest";
header.innerHTML += `<p class="red-heading"> is the ${personality}!`;
header.innerHTML += `<p class="red-heading">abcd</p>`;

// const para = document.querySelector("p");
// console.log(para);

// const allPara = document.querySelectorAll("p");
// console.log(allPara);

// const heading = document.querySelector("h1");
// console.log (heading);

// const abcd = document.querySelector(".abcd");
// console.log(abcd);

// const heading = document.querySelector("h1");
// console.log(heading.textContent);

// heading.textContent = "My Cat";

// const question2 = document.querySelector("#question2");
// console.log(question2.textContent);

// question2.textContent = "How much did you score in the assignment 2?";

// heading.classList.add("red-heading");
// heading.classList.add("blue-heading");
// para.classList.add("red-heading");
