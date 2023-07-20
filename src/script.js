import "./style.css";
import "./general.css";
import initialize from "./dom-manipulation/home-dom";
import user from "./managers/user-manager";
import map from "./managers/map_manager";

const userManager = user();
const mapManager = map();

userManager.isLogin().then(() => {
  initialize(userManager, mapManager);
});
