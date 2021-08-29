import axios from "axios";

const IP = "localhost";
const PORT = 5000;

export const beerRatingApi = (path, id) =>
  axios
    .get(`http://${IP}:${PORT}/${id ? `${path}-${id}` : path}`)
    .then((response) => response);
