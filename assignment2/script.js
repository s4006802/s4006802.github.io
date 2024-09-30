const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const volImg = document.querySelector("#vol-img");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");
const background = document.querySelector("#timer-back");
const muteTimerBtn = document.querySelector("#mute-timer-btn");

// Volume Button

let volClicks = 0;
function vol() {
  volClicks++;
  console.log("click");
  if (volClicks === 1) {
    audio.volume = 0.2;
    volImg.src = "https://img.icons8.com/ios-glyphs/30/low-volume.png";
    console.log("audio low");
    console.log(volClicks);
  } else if (volClicks === 2) {
    audio.muted = true;
    volImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    console.log("audio muted");
    console.log(volClicks);
  } else if (volClicks === 3) {
    audio.muted = false;
    volImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    console.log("audio unmuted");
    console.log(volClicks);
    volClicks = 0;
  }
}
// This code intends to count the number of times the volume button is clicked, so it can cycle through the functions of low volume, mute, and full volume.
// This functionality is crucial as some users may wish to solely use the timer as they study, or lower the music's volume to minimise distraction.

// Progress Bar

audio.addEventListener("timeupdate", updateProgressBar);

function togglePlayPause() {
  if (audio.paused || audio.ended) {
    audio.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    audio.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}

// Timer Code
let inputTime = document.querySelector("#input-time").value;
const submitBtn = document.querySelector("#submit");

inputTime = 25;
let time = inputTime * 60;
// The default time is set to 25 minutes, which is the standard length of a Pomodoro study block.
// Input time is multiplied by 60 to convert it into the seconds

submitBtn.addEventListener("click", submitPressed);
function submitPressed() {
  inputTime = document.querySelector("#input-time").value;
  if (inputTime > 0 && inputTime < 60) {
    time = inputTime * 60;
    updateTimer();
    console.log(inputTime);
    console.log("submit");
    console.log("suitable duration");
    resetTimer();
  } else {
    alert("Please input a timer duration under 60 minutes.");
  }
}
// The submit button adds tactile interactivity for the user as they enter the timer duration.
// Upon pressing submit, the input time is defined, and the timer is updated to reflect it.
// The if statement code ensures that the user inputs a time within the parameters, alerting the user if otherwise.

const timer = document.querySelector("#timer");
const startTimerBtn = document.querySelector("#start-timer-btn");
const stopTimerBtn = document.querySelector("#stop-timer-btn");
const resetTimerBtn = document.querySelector("#reset-timer-btn");

stopTimerBtn.disabled = true;
// The pause button is disabled by default as it cannot be used before the timer starts

var timerID;
function startTimer() {
  timerID = setInterval(updateTimer, 1000);
  startTimerBtn.disabled = true;
  stopTimerBtn.disabled = false;
  console.log("start timer");
  console.log(inputTime);
}
function stopTimer() {
  clearInterval(timerID);
  startTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
  console.log("stop timer");
}
// The timer start and stop buttons disable themselves and enable the opposing button. This prevents the user from starting the timer multiple times, causing the timer to run faster than normal.

function resetTimer() {
  clearInterval(timerID);
  time = inputTime * 60;
  startTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
  updateTimer();
  console.log("reset timer");
}
// The reset button not only returns the time to the input, but also enables the start and disables the pause button.

const alertSound = new Audio("531031__creeeeak__bell8.wav");

function updateTimer() {
  if (time === 0) {
    timer.innerHTML = `0:00`;
    console.log("Done!");
    updateTimerProg();
    clearInterval(timerID);
    playAlertSound();
  } else {
    updateTimerProg();
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timer.innerHTML = `${minutes}: ${seconds}`;
    time--;
    time = time < 0 ? 0 : time;
  }
}
// Timer code was created based on code by FlorinPop, sourced from https://www.youtube.com/watch?v=x7WJEmxNlEs&ab_channel=FlorinPop
// Code was changed to integreate more user interactivity, with start, stop and reset buttons, as well as user input timer duration.

let muteTimerClicks = false;

function playAlertSound() {
  if (muteTimerClicks === false) {
    alertSound.play();
  }
}
// An alert sound was implemented to alert the user at the end of the timer, as the user may not have the timer window open when studying.

function muteTimer() {
  if (muteTimerClicks === false) {
    muteTimerClicks = true;
    console.log(muteTimerClicks);
    muteTimerBtn.textContent = "Timer Muted";
  } else {
    muteTimerClicks = false;
    console.log(muteTimerClicks);
    muteTimerBtn.textContent = "Timer Unmuted";
  }
}
// A mute timer button was implemented as some users may find the alert sound irritating, and wish to just rely on the visuals as indication.

const timerProg = document.querySelector("#timer-prog-fill");

function updateTimerProg() {
  const timevalue = (time / (inputTime * 60)) * 100;
  timerProg.style.width = timevalue + "%";
  console.log(timevalue);
}
// This code borrows the function from the music progress bar, using the time remaining instead of the music remaining
// The progress update is tied to each second interval, with the updateTimer function executing this function as it also updates the remaining seconds.
