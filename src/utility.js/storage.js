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

export function saveLocalMap({ id, beatMap, name }) {
  const maps = getMaps();
  // find the map

  const target = maps.find((map) => map.id === id);
  if (target) {
    target.beatMap = beatMap;
    target.name = name;
  } else {
    maps.push({ id, beatMap, name });
  }
  localStorage.setItem("maps", JSON.stringify(maps));
}
export function deleteLocalMap(id) {
  const maps = getMaps();
  const filtered = maps.filter((map) => map.id !== id);
  localStorage.setItem("maps", JSON.stringify(filtered));
}
export function updateSettings(property, value) {
  let settings = JSON.parse(localStorage.getItem("settings"));
  if (!settings) {
    localStorage.setItem(
      "settings",
      JSON.stringify({
        music: 0.5,
        hit: 0.5,
        offset: 0,
        opacity: 0.7,
      })
    );
    settings = JSON.parse(localStorage.getItem("settings"));
  }
  settings[property] = value;
  localStorage.setItem("settings", JSON.stringify(settings));
}

export function getSettings() {
  const defaultSettings = {
    music: 0.5,
    hit: 0.7,
    offset: 0,
    opacity: 1,
  };

  const settings = JSON.parse(localStorage.getItem("settings"));
  return settings || defaultSettings;
}
