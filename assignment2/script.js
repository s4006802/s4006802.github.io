const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
const volImg = document.querySelector("#vol-img");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");

// Volume Button

// This code intends to count the number of times the volume button is clicked, so it can cycle through the functions of low volume, mute, and full volume.
// This functionality is crucial as some users may wish to solely use the timer as they study, or lower the music's volume to minimise distraction.
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

let startingMinutes = 25;
let time = startingMinutes * 60;

let inputTime = document.querySelector("#input-time").value;
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", submitPressed);
function submitPressed() {
  inputTime = document.querySelector("#input-time").value;
  time = inputTime * 60;
  updateTimer();
  console.log(inputTime);
  console.log("submit");
}

const timer = document.querySelector("#timer");

const startTimerBtn = document.querySelector("#start-timer-btn");
const stopTimerBtn = document.querySelector("#stop-timer-btn");
const resetTimerBtn = document.querySelector("#reset-timer-btn");

stopTimerBtn.disabled = true;

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
function resetTimer() {
  clearInterval(timerID);
  time = inputTime * 60;
  startTimerBtn.disabled = false;
  stopTimerBtn.disabled = true;
  updateTimer();
  console.log("reset timer");
}

function updateTimer() {
  if (time === 0) {
    timer.innerHTML = `0:00`;
    console.log("Done!");
    updateTimerProg(); 
    clearInterval(timerID);
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

const timerProg = document.querySelector("#timer-prog-fill")

function updateTimerProg() {
  const timevalue = (time / (inputTime * 60)) * 100;
  timerProg.style.width = timevalue + "%";
  console.log(timevalue);
}