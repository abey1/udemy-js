let playStatus = true;
const playPauseButton = document.getElementById("play-pause-outer");
const playPauseOverlay = document.getElementById("play-pause-overlay");
const myVideo = document.getElementById("myVideo");
const controler = document.getElementById("controler");
const textDisplayer = document.getElementById("text-displayer");
const overlay = document.getElementById("overlay");

playPauseButton.addEventListener("click", () => {
  if (playStatus) {
    playPauseOverlay.style.animation = "pause 0.2s linear both";
    myVideo.pause();
    controler.style.display = "flex";
    textDisplayer.style.display = "flex";
    overlay.style.display = "flex";
    playStatus = false;
  } else {
    playPauseOverlay.style.animation = "play 0.2s linear both";
    myVideo.play();
    controler.style.display = "none";
    textDisplayer.style.display = "none";
    overlay.style.display = "none";
    playStatus = true;
  }
});
