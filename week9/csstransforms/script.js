const ball = document.querySelector(".ball");
console.log(ball);

const outer = document.querySelector(".outer");
console.log(outer);

const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 50;
let outerWidth = outer.clientWidth / 2;

function moveBall() {
  if (distance < outerWidth) {
    // ball.style.transform = `translateX(${distance}px)`;
    transformBall();
    distance += 50;
  }
}

const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let rDeg = 45;

function rotateBall() {
  //   ball.style.transform = `rotate(${rDeg}deg)`;
  transformBall();
  rDeg += 45;
}

const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
scaleButton.addEventListener("click", scaleBall);

let scaleValue = 0.9;

function scaleBall() {
  if (scaleValue > 0.2) {
    // ball.style.transform = `scale(${scaleValue})`;
    transformBall();
    scaleValue -= 0.1;
  }
}

const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBall);

function resetBall() {
  scaleValue = 0.9;
  distance = 30;
  rDeg = 45;
}

function transformBall() {
  ball.style.transform = `scale(${scaleValue}) rotate(${rDeg}deg) translateX(${distance}px)`;
}
