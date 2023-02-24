import "./style.css";
import initialize from "./utility.js/home-dom";
import user from "./managers/user-manager";

user.isLogin().then(() => {
  console.log(user.getUserData());
  initialize(user);
});
