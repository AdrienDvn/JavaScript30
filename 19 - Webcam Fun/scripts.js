const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      // console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error('you denied acces to your cam thus it is not working, reloard the page please', err);
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  // console.log(width, height);
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
  }, 60);
}

function takePhoto() {
  //play the sound
  snap.currentTime = 0;
  snap.play();

  //take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  console.log(data
    );
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
