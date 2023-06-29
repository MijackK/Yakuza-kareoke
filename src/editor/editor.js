import "../kareoke_player/player.css";
import "./editor.css";
import "../general.css";
// import gamePlayerLogic from "../player-parts/map-visualizer";
import { validPrompts, init } from "../canvas/canvas";
import { initMap, drawMap } from "../canvas/time-map";
import { autoThumbMovement } from "../player-parts/display-parts";

import editorFactory from "../managers/editor_manager";
import { initialize, updateDomTime } from "../utility.js/editor-dom";
import beatMapManager from "../managers/map_manager";
import userFactory from "../managers/user-manager";

const editor = editorFactory();
const mapManager = beatMapManager();
const userManager = userFactory();
init();
initMap("#time-map");

let editorLoop;
let animationID;

const timeController = () => {
  const elapsedTime = editor.getElapsedTime();
  const Play = editor.getPlay();
  const audioDuration = editor.getAudioDuration();

  const timeOffset = editor.getTimeOffset();
  const previousTime = editor.getPreviousTime();
  const playRate = editor.getPlayRate();
  const AudioCurrentTime = editor.getAudioCurrentTime();

  if (elapsedTime > audioDuration) {
    // clearInterval(editorLoop);
    if (Play === true) {
      editor.setPlay(false);
      const playBtn = document.querySelector(".tool-bar").children[0];
      playBtn.id = "play";
      playBtn.textContent = "Play";
    }
    return;
  }
  if (Play === false) {
    return;
  }
  if (!editor.getStartTime()) {
    editor.setStartTime(Date.now());
  }

  let currentTime = Number((Date.now() - editor.getStartTime()) / 1000);

  if (Math.abs(elapsedTime - currentTime * playRate - timeOffset) > 0.1) {
    const startIncrease = currentTime - previousTime;

    editor.setStartTime(editor.getStartTime() + startIncrease * 1000);
    currentTime = Number((Date.now() - editor.getStartTime()) / 1000);
  }

  // elapsedTime += currentTime - previousTime;
  editor.setElapsedTime(previousTime * playRate + timeOffset);
  editor.setPreviousTime(currentTime);
  autoThumbMovement(
    (AudioCurrentTime - timeOffset) / (audioDuration - timeOffset)
  );

  updateDomTime(elapsedTime);
  drawMap(editor.getBeatMap(), elapsedTime);
};
const AnimatePrompts = () => {
  timeController();

  // enable this when computer player is working is working
  // gamePlayerLogic(elapsedTime);
  // drawMap(editor.getBeatMap(), editor.getElapsedTime());
  validPrompts(
    editor.getPreviousTime() * editor.getPlayRate() + editor.getTimeOffset(),
    editor.getBeatMap(), // repl;ace with beatmap
    editor.getPlay()
  );
  requestAnimationFrame(AnimatePrompts);
};
userManager
  .isLogin()
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    initialize({ user: userManager, map: mapManager, editor });
    requestAnimationFrame(AnimatePrompts);
    editorLoop = setInterval(timeController, 0);
  });
