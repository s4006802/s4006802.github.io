console.log("my name is markiplier");

let step = 4;
console.log("Taking step no:", step);

// let name = prompt("What is your name");
// console.log("Welcome", name);

{
  let b = 10;
  console.log(b);
}

let isItMorningClass = true;
let IsItAfternoonClass = false;

let myStudentRecord = {
  name: "Dylan",
  id: 1234,
  class: "0ART1013",
  isItScience: false,
  isItDesign: true,
};

console.log("Hello everyone, my name is", myStudentRecord.name);
console.log("my id is,", myStudentRecord.id);

let myName = "alice";
let myCity = "melbourne";
console.log(`${myName} lives in 
    ${myCity}`);

const waArray = ["wa", "wo", "we", "wu"];
console.log(waArray[0]);

if (myStudentRecord.isItScience === true) {
  console.log("Sorry you are in the wrong class");
} else {
  console.log("Welcome to", myStudentRecord.class);
}

let myScore = 73;
if (myScore >= 90) {
  console.log("You scored a HD");
} else if (myScore < 90 && myScore >= 70) {
  console.log("You scored a D");
} else if (myScore < 70 && myScore >= 50) {
  console.log("You scored a C");
} else {
  console.log("You scored a P");
}

console.log("Hello Sarah");
console.log("Hello Red");
console.log("Hello Vercingetorix");
console.log("Hello Roe");
console.log("Hello Oek");

const names = ["Momo", "Popo", "Tinky Winky", "Oepidus", "Jenny"];
console.log(names.length);
for (let i = 0; i < names.length; i++) {
  console.log("hello", names[i]);
}

let shoppingCart = [
  { name: "T-shirt", price: 20 },
  { name: "Jeans", price: 50 },
  { name: "Water", price: 400 },
];

let total = shoppingCart[0].price + shoppingCart[1].price;

console.log(total);

let sum = 0;
for (let i = 0; i < 3; i++) {
  sum = sum + shoppingCart[i].price;
}
console.log(sum);
