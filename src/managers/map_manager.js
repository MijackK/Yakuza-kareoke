import {
  getBeatMaps,
  getBeatMap,
  getMedia,
  getSongs,
  uploadBeatmap,
  getUserBeatMaps,
} from "../api/kareoke";
import config from "../config";

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
    console.log(background);

    const [audioBlob, backgroundBloB] = await Promise.all([
      getMedia(`http://${config.objectServer}/${audio}`, controller.signal),
      getMedia(
        `http://${config.objectServer}/${background}`,
        controller.signal
      ),
    ]);

    audioUrl = URL.createObjectURL(audioBlob);
    backgroundUrl = URL.createObjectURL(backgroundBloB);
    console.log("audio", audioUrl);
  };
  const getExtension = (name) => name.split(".").pop();

  const checkSelectedSong = async () => {
    const map = JSON.parse(localStorage.getItem("selectedMap"));
    if (map) {
      selectedMap = await getBeatMap(map.id, controller.signal);
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

  const saveMapLocal = () => {};
  const saveMapRemote = async (id) => {};
  const getMap = async () => {};
  const handleGetUserBeatMaps = async () => {
    const beatMaps = await getUserBeatMaps();
    return beatMaps;
  };
  const handleGetBeatMaps = async () => {
    const response = await getBeatMaps();
    return response;
  };
  const getSongsList = async () => {
    const songs = await getSongs();

    return songs;
  };

  return {
    saveMapLocal,
    saveMapRemote,
    handleGetUserBeatMaps,
    handleGetBeatMaps,
    getSongsList,
    getMap,
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
