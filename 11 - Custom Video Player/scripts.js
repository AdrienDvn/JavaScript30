// get our elements
const player = document.querySelector('.player');
const video =player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
const ranges = player.querySelector('.player__slider');

// build out functions
function togglePlay() {

  const method = video.paused ? 'play' : 'pause' ;
  video[method](); // on accède à l'intérieur de la méthode

  // if(video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log('ok');
  toggle.textContent = icon;

  // console.log('update the button');
}

function skip() {
  console.log('skipping');

}
// hook up the event listeners

video.addEventListener('click',togglePlay);

video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click',skip));
