import config from "../config";
import responseText from "../utility.js/responseText";

const { apiDomain } = config;

export default async function apiRequest({ url, options, headers }) {
  const location = ["localhost", "127.0.0.1"].includes(window.location.hostname)
    ? apiDomain.development
    : apiDomain.production;
  const response = await fetch(`http://${location}/${url}`, {
    mode: "cors",
    credentials: "include",
    headers: {
      CSRF_TOKEN: sessionStorage.getItem("csrfToken"),
      ...headers,
    },
    ...options,
  });

  if (response.ok === false) {
    const message = await response.text();
    throw new Error(responseText(message));
  }

  if (response.status === 401) {
    // delete session data and storage, and logout from front end
  }
  return response;
}
