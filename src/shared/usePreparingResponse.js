import { useEffect } from "react";
import { beerRatingApi } from "./beerRatingApi";

export const usePreparingResponse = (setState, request, id) => {
  useEffect(() => {
    beerRatingApi(request, id)
      .then((response) => {
        setState(response);
      })
      .catch((error) => {
        console.error(error);
        setState(error.response)
      });
  }, [id, request,setState]);
};
