import greatImg from "../images/great.png";
import missImg from "../images/miss.png";
import badImg from "../images/bad.png";
import goodImg from "../images/good.png";

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
  const scoreMenu = document.querySelector("#calculate-score");
  scoreMenu.style.display = "none";
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
  song.volume = 0.1;
  song.volume = 1;
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
  const highScoreName = document.querySelector("#highscore-name");
  const mapAutor = document.querySelector("#map-author");
  songName.textContent = name;
  highScoreName.textContent = name;
  mapAutor.textContent = `Mapped by ${author}`;
}
export function openFinalScore(score, scoreSummary, highscore, rankInfo) {
  // decrease volume
  const song = document.querySelector("#song");
  song.volume = 0.1;

  const total = Object.keys(scoreSummary).reduce(
    (acc, cur) => acc + scoreSummary[cur],
    0
  );
  // show highscore
  const highscoreElement = document.querySelector("#high-score");
  highscoreElement.style.display = highscore ? "block" : "none";

  const scoreMenu = document.querySelector("#calculate-score");
  scoreMenu.style.display = "flex";
  // add the score
  const finalScore = document.querySelector("#final-score");
  finalScore.textContent = `Scored: ${score}`;
  // add the score letter
  const scoreLetter = document.querySelector("#score-letter");
  scoreLetter.src = rankInfo.image;
  scoreLetter.alt = rankInfo.rank;
  scoreLetter.style.color = rankInfo.color;
  scoreLetter.style.textShadow = `5px 3px 1px ${rankInfo.shadow}`;
  // clean this up later
  // update great
  const great = document.querySelector("#great-hits");
  great.innerHTML = `
  <div style="display:flex; align-items:center" >
    <img style="width:117px; height:35px"  src=${greatImg} alt="Great" > 
    <span>: ${scoreSummary.great}</span> 
  </div>
  <span>${((scoreSummary.great / total) * 100).toFixed(1) || "0"}%</span>`;
  // update good
  const good = document.querySelector("#good-hits");
  good.innerHTML = `
  <div align-items:center>

    <img style="width:117px; height:35px" src=${goodImg} alt="Good" /> 
    <span>: ${scoreSummary.good}</span> 
  </div>
  <span>${((scoreSummary.good / total) * 100).toFixed(1) || "0"}%</span>`;

  // update bad
  const bad = document.querySelector("#bad-hits");
  bad.innerHTML = `
  <div  style="display:flex;align-items:center" >
    <img style="width:117px; height:35px"  src=${badImg} alt="Bad" /> 
    <span>: ${scoreSummary.bad}</span> 
  </div>
  <span>${((scoreSummary.bad / total) * 100).toFixed(1) || "0"}%</span>`;
  // update miss
  const miss = document.querySelector("#miss-hits");
  miss.innerHTML = `
  <div style="display:flex;align-items:center" >
    <img style="width:117px; height:35px"  src=${missImg} alt="Miss" /> 
    <span>: ${scoreSummary.miss}</span> 
  </div>
  <span>${((scoreSummary.miss / total) * 100).toFixed(1) || "0"}%</span>`;
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

export function initialize() {}
