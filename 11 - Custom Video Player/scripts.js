// get our elements
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");

const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");

const ranges = player.querySelectorAll(".player__slider");

// build out functions
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method](); // on accède à l'intérieur de la méthode

  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log("ok");
  toggle.textContent = icon;

  // console.log('update the button');
}

function skip() {
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  // console.log(this.value);
  // console.log(this.name);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
  console.log(percent);
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(e);
}

// hook up the event listeners

video.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

video.addEventListener("timeupdate", handleProgress); // listen to the time of the video player !

toggle.addEventListener("click", togglePlay);

skipButtons.forEach((button) => button.addEventListener("click", skip));

ranges.forEach(range => range.addEventListener("change", handleRangeUpdate));
ranges.forEach(range => range.addEventListener("mousemove", handleRangeUpdate));


let mousedown = false;
progress.addEventListener('click', scrub);

progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

// further exercise, add a fullscreen button and make it work
// make the spacebar up and down work like the play and pause button !
