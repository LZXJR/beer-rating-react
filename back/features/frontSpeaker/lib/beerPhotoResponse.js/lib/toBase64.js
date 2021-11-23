export const toBase64 = (contentType, image) => {
  let result = Buffer.from(image).toString("base64");
  result = `data:${contentType};base64,` + result;
  return result;
};
