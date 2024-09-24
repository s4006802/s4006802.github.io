const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");

playPauseBtn.addEventListener("click", togglePlay);

muteUnmuteBtn.addEventListener("click", toggleSound);

const muteUnmuteImg = document.querySelector("#mute-unmute-img");
console.log(muteUnmuteImg);

const playPauseImg = document.querySelector("#play-pause-img");
console.log(playPauseImg);

function togglePlay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteBtn.style.backgroundColor = "red";
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v2.png";
  } else {
    myVideo.muted = true;
    muteUnmuteBtn.style.backgroundColor = "blue";
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeupdate", fillProgress);

function fillProgress() {
  const currentTime = myVideo.currentTime;
  console.log("current time", currentTime.toFixed(2));
  const progress = (currentTime / myVideo.duration) * 100;
  console.log("progress", progress);
  progressBar.style.width = progress + "%";
}

const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);

step1Btn.addEventListener("click", gotoStep1);
function gotoStep1() {
  myVideo.currentTime = 18.4;
}

let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

const likeBtn = document.querySelector("#like-btn");
console.log(likeBtn);

likeBtn.addEventListener("click", addLikes);
function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

myVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
  // event.preventDefault();
  console.log("video is double clicked");
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen;
  }
}

const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },
  {
    name: "stardust",
    src: "stardust.mp4",
  },
];

let currentIndex = 0;
const videoName = document.querySelector("#video-name");

const firstBtn = document.querySelector("#first-video-btn");
console.log(firstBtn);
firstBtn.addEventListener("click", function () {
  chooseVideo(0); // 0 - first video, have to do inline function because we are parsing a value
});

const secondBtn = document.querySelector("#second-video-btn");
console.log(secondBtn);
secondBtn.addEventListener("click", function () {
  chooseVideo(1); // have to do inline function because we are parsing a value
});

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textContent = videos[no].name;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
