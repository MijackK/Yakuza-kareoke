import { getBeatMaps } from "../api/kareoke";

export default function beatMapManager() {
  let selectedMap;
  const setSelectedMap = (id) => {
    selectedMap = id;
  };
  const getSelectedMap = () => selectedMap;

  const saveMapLocal = () => {};
  const saveMapRemote = async () => {};
  const getMap = async () => {};
  const getSongs = async () => {
    const response = await getBeatMaps();
    return response;
  };
  const getUserSongs = async () => {};

  return {
    saveMapLocal,
    saveMapRemote,
    getSongs,
    getUserSongs,
    getMap,
    setSelectedMap,
    getSelectedMap,
  };
}
