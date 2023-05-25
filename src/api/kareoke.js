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

export async function getBeatMaps() {
  const options = {
    method: "get",
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/get_maps`,
    options,
    headers,
  });

  if (response.ok === false) {
    throw new Error("Problem getting user beat maps, please try again");
  }

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
  if (response.ok === false) {
    throw new Error("Problem getting user beat map, please try again");
  }
  const data = await response.json();

  return data;
}
export async function getMedia(url, signal) {
  const response = await fetch(url, {
    method: "get",
    signal,
  });

  if (response.ok === false) {
    throw new Error("media doesnt exist");
  }
  const data = await response.blob();

  return data;
}

export async function saveBeatMap(id) {
  const options = {
    method: "put",
    body: JSON.stringify({ id }),
  };
  const headers = { "Content-Type": "application/json" };
  const response = await apiRequest({
    url: `kareoke/save_map`,
    options,
    headers,
  });
  if (response.ok === false) {
    throw new Error("Could not update Beat Map");
  }
  const data = await response.text();

  return data;
}

export async function saveMedia(id) {}
