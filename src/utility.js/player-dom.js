export function addAudio(songSrc, backgroundSRC, clickSrc, extension) {
  const song = document.querySelector("#song");
  const click = document.querySelector("#click-audio");
  const backgroundVideo = document.querySelector("#background-video");
  const backgroundImage = document.querySelector("#background-image");
  song.src = songSrc;
  click.src = clickSrc;
  song.currentTime = 0;
  if (extension === "mp4") {
    backgroundVideo.src = backgroundSRC;
    backgroundVideo.currentTime = 0;

    return;
  }
  backgroundImage.style.backgroundImage = `url(${backgroundSRC})`;
}

export function pauseMap() {
  const song = document.querySelector("#song");
  const backgroundVideo = document.querySelector("#background-video");
  song.pause();
  backgroundVideo.pause();
}
export function playMap() {
  const song = document.querySelector("#song");
  const backgroundVideo = document.querySelector("#background-video");
  song.play();
  backgroundVideo.play();
}
export function playClick() {
  const click = document.querySelector("#click-audio");
  click.currentTime = 0;
  click.play();
}
export function startLoading() {
  const loading = document.querySelector("#loading-map");
  loading.style.display = "flex";
}
export function stopLoading() {
  const loading = document.querySelector("#loading-map");
  loading.style.display = "none";
}
export function openMenu() {
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "flex";
}
export function closeMenu() {
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "none";
}
export function openFinalScore() {}
export function closeFinalScore() {}
