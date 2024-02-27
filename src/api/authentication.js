import apiRequest from "./main";

export async function login({ email, password }) {
  const options = {
    body: JSON.stringify({ email, password }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({ url: "auth/login", options, headers });

  const data = await response.json();

  return data;
}
export async function check() {
  const options = { method: "get" };
  const headers = {
    "Content-Type": "application/json",
  };
  const response = await apiRequest({ url: "auth/check", options, headers });
  return response;
}
export async function logout() {
  const options = { method: "post" };
  const headers = {};
  const response = await apiRequest({ url: "auth/logout", options, headers });
  const data = await response.text();

  return data;
}

export async function register({ email, password, userName }) {
  const options = {
    body: JSON.stringify({ email, password, userName }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({ url: "auth/register", options, headers });

  const data = await response.text();

  return data;
}
export async function editAccountInfo(password, email, column, value) {
  const options = {
    body: JSON.stringify({ email, password, column, value }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({
    url: "auth/change_acount_info",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function generateEmailVerifyToken() {
  const options = {
    method: "post",
  };

  const response = await apiRequest({
    url: "auth/generate_verify_url",
    options,
  });

  const data = await response.text();

  return data;
}
export async function verifyEmail(token) {
  const options = {
    body: JSON.stringify({ token }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({
    url: "auth/verify_email",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function forgotPassword(form) {
  const options = {
    body: form,
    method: "post",
  };

  const response = await apiRequest({
    url: "auth/generate_reset_url",
    options,
  });

  const data = await response.text();
  return data;
}

export async function recoverPassword(form) {
  const options = {
    body: form,
    method: "post",
  };

  const response = await apiRequest({
    url: "auth/recover_password",
    options,
  });

  const data = await response.text();
  return data;
}
export async function changePassword(email, currentPassword, newPassword) {
  const options = {
    body: JSON.stringify({ email, currentPassword, newPassword }),
    method: "post",
  };
  const headers = {
    "Content-Type": "application/json",
  };

  const response = await apiRequest({
    url: "auth/change_password",
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
