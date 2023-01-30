import apiRequest from "./main";
import { saveUserInfo } from "../utility.js/storage";

export async function login({ email, password }) {
  const options = {
    body: JSON.stringify({ email, password }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({ url: "auth/login", options, headers });
  if (response.ok === false) {
    throw new Error("Problem Authentication, please try again");
  }

  const userInfo = await response.json();

  saveUserInfo(userInfo);
}

export async function logout() {}

export async function register() {}

export async function verifyEmail() {}

export async function forgotPassword() {}

export async function resetPassword() {}

export async function startEmailVerification() {}
