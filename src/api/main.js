import config from "../config";

const { domain } = config;

export default async function apiRequest({ url, options, headers, token }) {
  const response = await fetch(`http://${domain}/${url}`, {
    mode: "cors",
    credentials: "include",
    headers: {
      CSRF_TOKEN: token,
      ...headers,
    },
    ...options,
  });

  if (response.status === 401) {
    // delete session data and storage, and logout from front end
  }
  return response;
}
