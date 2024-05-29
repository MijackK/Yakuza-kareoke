import apiRequest from "./main";

export async function uploadBeatmap(formData) {
  // upload map, audio, background.
  const options = {
    method: "post",
    body: formData,
  };
  // make sure to add csrf toekn here
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/add_map`,
    options,
    headers,
  });
  const data = await response.json();

  return data;
}
export async function editMedia(formData) {
  const options = {
    method: "put",
    body: formData,
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/change_media`,
    options,
    headers,
  });
  const data = await response.text();
  return data;
}

export async function getBeatMaps(page, search, signal) {
  const options = {
    method: "get",
    signal,
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/get_published?page=${page}&search=${search}`,
    options,
    headers,
  });

  const data = await response.json();

  return data;
}
export async function getUserBeatMaps() {
  const options = {
    method: "get",
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/get_user_maps`,
    options,
    headers,
  });
  const data = await response.json();
  return data;
}

export async function getBeatMap(id, signal) {
  const options = {
    method: "get",
    signal,
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/get_map?mapID=${id}`,
    options,
    headers,
  });

  const data = await response.json();

  return data;
}
export async function getMedia(url, signal) {
  const response = await fetch(`${url}?dummy`, {
    method: "get",
    signal,
  });

  const data = await response.blob();

  return data;
}

export async function saveBeatMap(mapData) {
  const options = {
    method: "put",
    body: JSON.stringify(mapData),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/save_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
export async function deleteMap(id) {
  const options = {
    method: "delete",
    body: JSON.stringify({ id }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/delete_map`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function saveHighScore(score, beatMapID) {
  const options = {
    method: "put",
    body: JSON.stringify({ score, beatMapID }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/highscore`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}

export async function getMaps() {
  const options = {
    method: "get",
  };
  const headers = { "Content-Type": "application/json" };

  const response = await apiRequest({
    url: `kareoke/get_maps`,
    options,
    headers,
  });

  const data = await response.json();

  return data;
}
export async function publishRequest(beatMapID) {
  const options = {
    method: "post",
    body: JSON.stringify({ beatMapID }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/publish_request`,
    options,
    headers,
  });

  const data = await response.text();

  return data;
}
