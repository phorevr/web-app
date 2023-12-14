async function resizeImageFallback(imageBase64, oWidth, oHeight, contentType) {
  const resizeRatio = 1000 / oWidth;
  const resizeWidth = parseInt(oWidth * resizeRatio);
  if (resizeWidth >= oWidth) {
    return imageBase64;
  }
  const resizeHeight = parseInt(oHeight * resizeRatio);
  const base64Response = await fetch(`data:${contentType};base64,${imageBase64}`);
  const blob = await base64Response.blob();
  const bitmap = await createImageBitmap(blob, { resizeWidth, resizeHeight, resizeQuality: 'medium' });
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext('bitmaprenderer');
  ctx.transferFromImageBitmap(bitmap);
  const resizedBase64 = canvas.toDataURL(contentType);
  return resizedBase64.split(',')[1];
}