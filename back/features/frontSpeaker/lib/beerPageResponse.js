import { workWithDatabase } from "../../../shared/workWithDatabase/workWithDatabase.js";

export const beerPageResponse = async (res,url,id) => {
  const ERROR_CODE_NOT_FOUND = 404;
  const response = await workWithDatabase(url, id);

  if (response[0]) {
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify(response));
    return;
  }
  res.statusCode = ERROR_CODE_NOT_FOUND;
  res.end();
};
