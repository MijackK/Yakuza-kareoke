export default function youtube({ width = "640", height = "390", url, id }) {
  let ytplayer;
  const onYouTubeIframeAPIReady = () => {
    ytplayer = new window.YT.Player(id, {
      height: "390",
      width: "640",
      videoId: url,
      playerVars: {
        playsinline: 1,
      },
    });
  };
}
