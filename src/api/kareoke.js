import apiRequest from "./main";

export async function uploadBeatmap() {
  // upload map, audio, background.
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
    url: "kareoke/get_maps",
    options,
    headers,
  });

  if (response.ok === false) {
    throw new Error("Problem getting user beat maps, please try again");
  }

  const data = await response.json();

  return data;
}
