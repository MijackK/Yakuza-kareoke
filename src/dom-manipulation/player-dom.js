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
export function resetMap() {
  const song = document.querySelector("#song");
  const backgroundVideo = document.querySelector("#background-video");
  const comboContainer = document.querySelector(".combo-container");
  const score = document.querySelector("#score");
  score.textContent = "";
  comboContainer.style.opacity = "0";
  song.currentTime = 0;
  backgroundVideo.currentTime = 0;
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
  const pauseBtn = document.querySelector("#pause-btn");
  pauseBtn.style.display = "none";
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "flex";
}
export function closeMenu() {
  const pauseBtn = document.querySelector("#pause-btn");
  pauseBtn.style.display = "block";
  const menu = document.querySelector("#menu-dialog");
  menu.style.display = "none";
}
export function addMapInfo(name, author) {
  const songName = document.querySelector("#menu-name");
  const mapAutor = document.querySelector("#map-author");
  songName.textContent = name;
  mapAutor.textContent = `Mapped by ${author}`;
}
export function openFinalScore(score, rank = "A") {
  const scoreMenu = document.querySelector("#calculate-score");
  scoreMenu.style.display = "flex";
  // add the score
  const finalScore = document.querySelector("#final-score");
  finalScore.textContent = `Scored: ${score}`;
  // add the score letter
  const scoreLetter = document.querySelector("#score-letter");
  scoreLetter.textContent = rank;
}
export function updateScore(score, combo) {
  const comboContainer = document.querySelector(".combo-container");
  const scoreText = document.querySelector("#score");
  const comboText = document.querySelector("#combo-score");
  scoreText.textContent = score;
  comboText.textContent = combo;

  if (combo === 0) {
    comboContainer.style.opacity = "0";
    document.body.className = "cold-mode";
    return;
  }
  if (combo === 1) {
    comboContainer.style.opacity = 1;
  }
  if (combo === 20) {
    document.body.className = "heat-mode";
  }

  comboContainer.classList.toggle("jump-animation");
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      comboContainer.classList.toggle("jump-animation");
    });
  });
}
export function closeFinalScore() {}

export function initialize() {}
