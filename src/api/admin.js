import apiRequest from "./main";

export async function publishMap(beatMapID, resolution) {
  const options = {
    method: "post",
    body: JSON.stringify({ beatMapID, resolution }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/publish_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function deleteMapAdmin(id) {
  const options = {
    method: "delete",
    body: JSON.stringify({ id }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/delete_map_admin`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function getUsers() {
  const options = {
    method: "get",
  };
  const response = await apiRequest({
    url: `auth/get_users`,
    options,
  });
  const data = await response.json();
  return data;
}

export async function ban(user, reason) {
  const options = {
    method: "post",
    body: JSON.stringify({ user, reason }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `auth/ban`,
    options,
    headers,
  });
  const data = await response.text();
  return data;
}

export async function unban(user) {
  const options = {
    method: "post",
    body: JSON.stringify({ user }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `auth/unban`,
    options,
    headers,
  });
  const data = await response.text();
  return data;
}
