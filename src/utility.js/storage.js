export function saveUserInfo(info) {
  console.log(info);
  localStorage.setItem("info", JSON.stringify(info));
}
export function getUserInfo() {
  const info = localStorage.getItem("info");
  return JSON.parse(info);
}
const getMaps = () => {
  let maps = JSON.parse(localStorage.getItem("maps"));
  if (!maps) {
    localStorage.setItem("maps", JSON.stringify([]));
    maps = JSON.parse(localStorage.getItem("maps"));
  }
  return maps;
};
export function getLocalMap(id) {
  const maps = getMaps();
  const found = maps.find((map) => map.id === id);
  return found?.beatMap;
}

export function saveLocalMap({ id, beatMap }) {
  const maps = getMaps();
  // find the map
  const target = maps.find((map) => map.id === id);
  if (target) {
    target.beatMap = beatMap;
  } else {
    maps.push({ id, beatMap });
  }
  localStorage.setItem("maps", JSON.stringify(maps));
}
export function deleteLocalMap(id) {
  const maps = getMaps();
  const filtered = maps.filter((map) => map.id !== id);
  localStorage.setItem("maps", JSON.stringify(filtered));
}
