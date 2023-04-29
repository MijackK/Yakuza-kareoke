import {
  getBeatMaps,
  getBeatMap,
  getMedia,
  uploadBeatmap,
  getUserBeatMaps,
} from "../api/kareoke";
import config from "../config";
import { getLocalMap, saveLocalMap } from "../utility.js/storage";

export default function beatMapManager() {
  let audioUrl;
  let backgroundUrl;
  let selectedMap;
  let controller = new AbortController();

  const getBackgroundUrl = () => backgroundUrl;
  const getAudioUrl = () => audioUrl;
  const getSelectedMap = () => selectedMap;

  const setSelectedMap = (map) => {
    selectedMap = map;
    localStorage.setItem("selectedMap", JSON.stringify(map));
    const localMap = getLocalMap(selectedMap.id);
    console.log(localMap);
    if (localMap) {
      selectedMap.beatMap = localMap;
    }
    if (!localMap) {
      const remoteMap = JSON.parse(selectedMap.beatMap);
      saveLocalMap({ id: selectedMap.id, beatMap: remoteMap });
    }
  };

  const clearSelectedMap = () => {
    localStorage.removeItem("selectedMap");
  };
  const abortSelection = () => {
    console.log("aborted");
    controller.abort();
    controller = new AbortController();
  };

  const generateBlobUrl = async ({ audio, background }) => {
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    const [audioBlob, backgroundBloB] = await Promise.all([
      getMedia(`http://${config.objectServer}/${audio}`, controller.signal),
      getMedia(
        `http://${config.objectServer}/${background}`,
        controller.signal
      ),
    ]);
    audioUrl = URL.createObjectURL(audioBlob);
    backgroundUrl = URL.createObjectURL(backgroundBloB);
  };
  const getExtension = (name) => {
    console.log(name);
    return name.split(".").pop();
  };

  const checkSelectedSong = async () => {
    const map = JSON.parse(localStorage.getItem("selectedMap"));
    if (map) {
      const getMap = await getBeatMap(map.id, controller.signal);
      setSelectedMap(getMap);
      await generateBlobUrl(selectedMap);
      return true;
    }
    return false;
  };
  const addBeatMap = (formData) => {
    const response = uploadBeatmap(formData);
    return response;
  };
  const directUrl = (path) => `http://${config.objectServer}/${path}`;

  const saveMapRemote = async (id) => {};
  const handleGetUserBeatMaps = async () => {
    const beatMaps = await getUserBeatMaps();
    return beatMaps;
  };
  const handleGetBeatMaps = async () => {
    const response = await getBeatMaps();
    return response;
  };

  return {
    saveMapRemote,
    handleGetUserBeatMaps,
    handleGetBeatMaps,
    getBackgroundUrl,
    getAudioUrl,
    generateBlobUrl,
    getSelectedMap,
    setSelectedMap,
    addBeatMap,
    checkSelectedSong,
    directUrl,
    getExtension,
    abortSelection,
    clearSelectedMap,
  };
}
