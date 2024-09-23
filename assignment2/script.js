const audio = document.querySelector("#custom-audio-player");
const playPauseBtn = document.querySelector("#play-pause-btn");
// const muteBtn = document.querySelector("#mute-btn");
// const muteImg = document.querySelector("#mute-img");
const volImg = document.querySelector("#vol-img");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
audio.removeAttribute("controls");

var volClicks = 0;
function vol() {
  volClicks++;
  console.log("click");
  if ((volClicks = 1)) {
    audio.volume = 0.3;
    volImg.src = "https://img.icons8.com/ios-glyphs/30/low-volume.png";
    console.log("audio low");
    console.log(volClicks);
    s;
  } else if ((volClicks = 2)) {
    audio.muted = true;
    volImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
    console.log("audio muted");
    console.log(volClicks);
  } else if ((volClicks = 3)) {
    audio.muted = false;
    muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
    console.log("audio unmuted");
    console.log(volClicks);
    var volClicks = 0;
  }
}

// playPauseBtn.addEventListener("click", togglePlayPause);
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

// function toggleMute() {
//   if (audio.muted) {
//     audio.muted = false;
//     muteImg.src = "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
//     console.log("audio unmuted");
//   } else {
//     audio.muted = true;
//     muteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
//     console.log("audio muted")
//   }
//   console.log(audio.muted);
// }

function updateProgressBar() {
  const value = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = value + "%";
}

const startingMinutes = 25;
let time = startingMinutes * 60;

const timer = document.querySelector("#timer");

var timerClick = 0;
function startTimer() {
  if ((timerClick = "0")) {
    setInterval(updateTimer, 1000);
    timerClick = 1;
  } else {
  clearInterval()
timerClick = 0
}
}

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  timer.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time; 
}
// Add other functionalities here
