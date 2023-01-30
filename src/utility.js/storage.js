export function saveUserInfo(info) {
  console.log(info);
  localStorage.setItem("info", JSON.stringify(info));
}
export function getUserInfo() {
  const info = localStorage.getItem("info");
  return JSON.parse(info);
}

export function getBeatMap({ name, getBeatMaps }) {
  const getBeatMap = JSON.parse(localStorage.getItem("beatmaps"));
}
