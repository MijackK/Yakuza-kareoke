import { verifyEmail } from "../api/authentication";

const params = new URLSearchParams(window.location.search);
const token = params.get("token");
console.log(params);
const message = document.querySelector("#message");

if (token) {
  verifyEmail(token)
    .then((res) => {
      console.log(res);
      message.textContent =
        "Email succesfully verified, redirecting to home page..";
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      message.textContent = err;
    });
}
