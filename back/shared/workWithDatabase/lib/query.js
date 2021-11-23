import { sqlRequests } from "../../../entities/sqlRequests.js";
import { deleteSlash } from "./deleteSlash.js";

export const query = (connection, path, id, data) => {
  const key = deleteSlash(path);
  const request =
    typeof sqlRequests[key] === "function"
      ? sqlRequests[key](id || data)
      : sqlRequests[key];

  return new Promise((resolve, reject) => {
    connection.query(request, (err, res) => (err ? reject(err) : resolve(res)));
  });
};
