import config from "../config";

const { domain, options } = config;

export async function login({ email, password }) {
  console.log(email);
  console.log(`${domain}/auth/login`);
  const getInfo = await fetch(`http://${domain}/auth/login`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    contentType: "application/json",
    body: JSON.stringify({ email, password }),
  });
  const userInfo = await getInfo.json();
  console.log(userInfo);
}

export async function logout() {}

export async function register() {}

export async function verifyEmail() {}

export async function forgotPassword() {}

export async function resetPassword() {}

export async function startEmailVerification() {}

console.log(config);
