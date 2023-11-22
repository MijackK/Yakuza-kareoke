import config from "../config";
import responseText from "../utility.js/responseText";

const { domain } = config;

export default async function apiRequest({ url, options, headers }) {
  const response = await fetch(`http://${domain}/${url}`, {
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
