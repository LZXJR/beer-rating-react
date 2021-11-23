import fs from "fs";
import { toBase64 } from "./lib/toBase64.js";

export const beerPhotoResponse = (res, url, id) => {
  const beerPhotoWay = `./back/app/server/img/beerPhotos/${url + id}.png`;
  res.setHeader("content-type", "image/png");
  fs.readFile(beerPhotoWay, (err, image) => {
    if (!err) {
      const contentType = "image/png";
      const base64 = toBase64(contentType, image);
      res.end(base64);
    } else console.error(err);
  });
};
