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
  let selectedSong;

  const getBackgroundUrl = () => backgroundUrl;
  const getAudioUrl = () => audioUrl;
  const getSelectedSong = () => selectedSong;
  const setSelectedSong = (id) => {
    selectedSong = id;
    localStorage.setItem("selectedSong", id);
  };
  const addBeatMap = (formData) => {
    const response = uploadBeatmap(formData);
    return response;
  };

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

  const generateBlobUrl = async ({ audio, background }) => {
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    console.log(background);

    const [audioBlob, backgroundBloB] = await Promise.all([
      getMedia(`http://${config.objectServer}/${audio}`),
      getMedia(`http://${config.objectServer}/${background}`),
    ]);

    audioUrl = URL.createObjectURL(audioBlob);
    backgroundUrl = URL.createObjectURL(backgroundBloB);
    console.log(backgroundUrl);
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
    getSelectedSong,
    setSelectedSong,
    addBeatMap,
  };
}
