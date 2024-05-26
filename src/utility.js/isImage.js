export default function isImage(type) {
  const mediaType = type.split("/")[0];
  return mediaType === "image";
}
