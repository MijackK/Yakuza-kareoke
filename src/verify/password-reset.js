import "../general.css";
import { forgotPassword, recoverPassword } from "../api/authentication";

const params = new URLSearchParams(window.location.search);
const token = params.get("token");

const resetForm = document.querySelector("#password-reset");
const changeForm = document.querySelector("#change-form");
if (token) {
  resetForm.style.display = "none";
  changeForm.style.display = "flex";
}
console.log(resetForm);

resetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(resetForm);
  const submitButton = resetForm.querySelector("button");
  submitButton.disabled = true;
  forgotPassword(formData)
    .then((res) => {
      resetForm.innerHTML = `<label> ${res} </label>`;
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      resetForm.querySelector("p").style.display = "block";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});

changeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitButton = changeForm.querySelector("button");
  const formData = new FormData(changeForm);
  formData.set("token", token);
  const errorMessage = changeForm.querySelector("p");
  recoverPassword(formData)
    .then((res) => {
      changeForm.innerHTML = `<label> ${res} </label>`;
      setTimeout(() => {
        window.location.pathname = "";
      }, 1000);
    })
    .catch((err) => {
      console.log(err);
      errorMessage.style.display = "block";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
