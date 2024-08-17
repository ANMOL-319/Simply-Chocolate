const video = document.querySelector('.video'),
  playBtn = document.querySelector('.controls_play'),
  playBtnImg = document.querySelector('.play_btn');

// Play and pause

function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    playBtnImg.src = 'img/How_its_made/stop.svg';
  } else {
    video.pause();
    playBtnImg.src = 'img/How_its_made/play.svg';
  }
}
playBtn.addEventListener('click', toggleVideoStatus);
video.addEventListener('click', toggleVideoStatus);
