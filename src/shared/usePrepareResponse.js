import { useEffect } from "react";
import { beerRatingApi } from "./beerRatingApi";

export const usePrepareResponse = (setState, path, id, choosedFilter) => {
  useEffect(() => {
    beerRatingApi(path, id)
      .then((response) => {
        setState(response);
      })
      .catch((error) => {
        console.error(error);
        setState(error.response);
      });
  }, [id, path, setState,choosedFilter]);
};
