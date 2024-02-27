import {
  getBeatMaps,
  getBeatMap,
  getMedia,
  uploadBeatmap,
  getUserBeatMaps,
  saveBeatMap,
  deleteMap,
  editMedia,
  publishRequest,
} from "../api/kareoke";

import {
  getLocalMap,
  saveLocalMap,
  deleteLocalMap,
} from "../utility.js/storage";

export default function beatMapManager() {
  let audioUrl;
  let backgroundUrl;
  let selectedMap;
  let controller = new AbortController();
  let searchController = new AbortController();

  const getBackgroundUrl = () => backgroundUrl;
  const getAudioUrl = () => audioUrl;
  const getSelectedMap = () => selectedMap;

  const setSelectedMap = (map) => {
    selectedMap = map;
    localStorage.setItem("selectedMap", map.id);
    const localMap = getLocalMap(selectedMap.id);

    if (localMap) {
      selectedMap.beatMap = localMap;
    }
    if (!localMap) {
      const remoteMap = JSON.parse(selectedMap.beatMap);
      selectedMap.beatMap = remoteMap;
      saveLocalMap({
        id: selectedMap.id,
        beatMap: remoteMap,
        name: selectedMap.name,
      });
    }
  };

  const clearSelectedMap = () => {
    localStorage.removeItem("selectedMap");
    selectedMap = null;
  };

  const abortSelection = () => {
    controller.abort();
    controller = new AbortController();
  };
  const abortSearch = () => {
    searchController.abort();
    searchController = new AbortController();
  };

  const generateBlobUrl = async ({ audio, background }) => {
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    const [audioBlob, backgroundBloB] = await Promise.all([
      getMedia(audio, controller.signal),
      getMedia(background, controller.signal),
    ]);
    audioUrl = URL.createObjectURL(audioBlob);
    backgroundUrl = URL.createObjectURL(backgroundBloB);
  };
  const getExtension = (name) => name.split(".").pop();

  const checkSelectedSong = async () => {
    const mapID = localStorage.getItem("selectedMap");
    if (mapID) {
      const getMap = await getBeatMap(mapID, controller.signal);
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
  const changeMedia = async (type, file) => {
    // check if changing media will exceed maximum file size
    if (!selectedMap) {
      throw new Error("No map selected");
    }
    const currentMap = selectedMap;
    const formData = new FormData();
    formData.append("type", type);
    formData.append("media", file);
    formData.append("mapID", selectedMap.id);
    const newURL = await editMedia(formData);
    selectedMap[type] = newURL;
    return {
      newURL,
      reload: selectedMap === currentMap,
      extension: getExtension(newURL),
    };
  };
  const deleteBeatMap = async (id) => {
    const response = await deleteMap(id);
    URL.revokeObjectURL(backgroundUrl);
    URL.revokeObjectURL(audioUrl);
    if (id === selectedMap?.id) {
      clearSelectedMap();
    }
    deleteLocalMap(id);

    return response;
  };
  const publishMap = async (mapID) => {
    const response = await publishRequest(mapID);
    return response;
  };

  const saveMapRemote = async (id) => {
    const response = await saveBeatMap({
      id,
      column: "beatMap",
      value: getLocalMap(id) || [],
    });

    return response;
  };

  const saveMapName = async (value) => {
    if (!selectedMap) {
      throw new Error("No map selected");
    }
    const currentMap = selectedMap;
    const response = await saveBeatMap({
      id: selectedMap.id,
      column: "name",
      value,
    });
    currentMap.name = value;
    // fix this so that updating the selected map(dom) doesnt need the extension
    return {
      response,
      reload: currentMap === selectedMap,
      extension: getExtension(currentMap.background),
    };
  };
  const handleGetUserBeatMaps = async () => {
    const beatMaps = await getUserBeatMaps();
    return beatMaps;
  };
  const handleGetBeatMaps = async (page, search) => {
    const searchKeys = search
      .split(" ")
      .filter((key) => key !== "")
      .join(",");
    abortSearch();
    const response = await getBeatMaps(
      page,
      searchKeys,
      searchController.signal
    );
    return response;
  };
  const loadMap = async (id) => {
    const mapInfo = await getBeatMap(id);
    await generateBlobUrl(mapInfo);

    return {
      mapInfo,
      audioUrl,
      backgroundUrl,
      extension: getExtension(mapInfo.background),
    };
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
    getExtension,
    abortSelection,
    clearSelectedMap,
    loadMap,
    deleteBeatMap,
    publishMap,
    saveMapName,
    changeMedia,
  };
}
