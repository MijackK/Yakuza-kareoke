export default function compressImage({
  url,
  name = "default",
  type = "image/webp",
  quality = 0.8,
}) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(
        (blob) => {
          const fileType = blob.type.split("/")[1];

          URL.revokeObjectURL(url);
          const compresedUrl = URL.createObjectURL(blob);

          resolve({
            url: compresedUrl,
            file: new File([blob], `${name}.${fileType}`),
          });
        },
        type,
        quality
      );
    };
    img.onerror = reject;
  });
}
