import apiRequest from "./main";

export async function uploadBeatmap(formData) {
  // upload map, audio, background.
  const options = {
    method: "put",
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
export async function getBeatmap() {
  // get audio, map, background.
  // a promise.all to get both the audio and background.
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

export async function getBeatMap(id) {
  const options = {
    method: "get",
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
export async function getMedia(url) {
  const response = await fetch(url, {
    method: "get",
  });

  if (response.ok === false) {
    throw new Error("media doesnt exist");
  }
  const data = await response.blob();

  return data;
}

export async function getSongs() {
  const options = {
    method: "get",
  };
  const headers = {};
  const response = await apiRequest({
    url: `kareoke/get_songs`,
    options,
    headers,
  });
  const data = await response.json();
  return data;
}
