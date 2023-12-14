async function resizeImageFallback(imageBase64, oWidth, oHeight, contentType) {
  const resizeRatio = 1000 / oWidth;
  const resizeWidth = parseInt(oWidth * resizeRatio);
  if (resizeWidth >= oWidth) {
    return imageBase64;
  }
  const resizeHeight = parseInt(oHeight * resizeRatio);
  const base64Response = await fetch(`data:${contentType};base64,${imageBase64}`);
  let imgData = await base64Response.blob();
  imgData = await blobToImg(imgData, oWidth, oHeight);
  const bitmap = await createImageBitmap(imgData, { resizeWidth, resizeHeight, resizeQuality: 'pixelated' });
  const canvas = document.createElement("canvas");
  canvas.width = resizeWidth;
  canvas.height = resizeHeight;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(bitmap, 0, 0);
  const resizedBase64 = canvas.toDataURL(contentType, 0.2);
  return resizedBase64.split(',')[1];
}

async function blobToImg(file, width, height) {
  const url = URL.createObjectURL(file);
  const img = new Image(width, height);
  img.decoding = "async";
  img.src = url;
  const loaded = new Promise((resolve, reject) => {
    img.onload = () => resolve();
    img.onerror = () => reject(Error("Image loading error"));
  });
  if (img.decode) {
    await img.decode().catch(() => null);
  }
  await loaded;
  return img;
}