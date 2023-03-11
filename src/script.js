import "./style.css";
import initialize from "./utility.js/home-dom";
import user from "./managers/user-manager";
import map from "./managers/map_manager";

const userManager = user();
const mapManager = map();

userManager.isLogin().then(() => {
  console.log(userManager.getUserData());
  initialize(userManager, mapManager);
});
