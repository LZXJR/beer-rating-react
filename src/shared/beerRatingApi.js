import axios from "axios";

export const beerRatingApi = (way, id) => {
  switch (way) {
    case "ratingItems":
      return axios
        .get("http://localhost:5000/ratingItems")
        .then((response) => response);
    case "beerPage":
      return axios
        .get(`http://localhost:5000/beerPage-${id}`)
        .then((response) => response);
    default:
      console.error("There is no such way");
  }
};
