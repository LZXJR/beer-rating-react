import axios from "axios";

const IP = "localhost";
const PORT = 5000;

const homePageUrl = `http://${IP}:${PORT}`;

export const beerRatingApi = (path, id, method = "GET", data) => {

  switch (method) {
    case "GET":
      const resultPath = id ? `${path}?id=${id}` : path;
      return axios.get(homePageUrl + resultPath).then((response) => response);

    case "POST":
      return axios
        .post(homePageUrl + path, data)
        .then((response) => response)
        .catch((error) => {
          console.error(error);
          return error.response;
        });
    default:console.error("Method didn't found :c")
  }
};
