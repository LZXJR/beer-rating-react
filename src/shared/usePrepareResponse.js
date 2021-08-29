import { useEffect } from "react";
import { beerRatingApi } from "./beerRatingApi";

export const usePrepareResponse = (setState, request, id, choosedFilter) => {
  useEffect(() => {
    beerRatingApi(request, id)
      .then((response) => {
        setState(response);
      })
      .catch((error) => {
        console.error(error);
        setState(error.response);
      });
  }, [id, request, setState,choosedFilter]);
};
