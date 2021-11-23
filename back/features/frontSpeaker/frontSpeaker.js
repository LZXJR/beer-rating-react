import url from "url";

import { workWithDatabase } from "../../shared/workWithDatabase/workWithDatabase.js";
import { beerPageResponse } from "./lib/beerPageResponse.js";
import { beerPhotoResponse } from "./lib/beerPhotoResponse.js/beerPhotoResponse.js";
import { setUserGrades } from "./lib/setUserGrades.js";

export const frontSpeaker = async (req, res) => {
  const urlRequest = url.parse(req.url, true);

  const { pathname, query } = urlRequest;
  const { id } = query;

  switch (pathname) {
    case "/ratingItems": {
      const response = await workWithDatabase(pathname, id);
      res.setHeader("Content-type", "application/json");
      res.end(JSON.stringify(response));
      break;
    }

    case "/beerPage": {
      beerPageResponse(res, pathname, id);
      break;
    }
    case "/beerPhoto": {
      beerPhotoResponse(res, pathname, id);
      break;
    }
    case "/resultUserGrades": {
      setUserGrades(req, res, pathname);
      break;
    }

    default: {
      console.log("Error: Path not found !");
      const ERROR_CODE_NOT_FOUND = 404;
      res.statusCode = ERROR_CODE_NOT_FOUND;
      res.end();
    }
  }
};
