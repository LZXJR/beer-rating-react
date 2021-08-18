import { useEffect } from "react";
import { beerRatingApi } from "./beerRatingApi";

export const usePreparingResponse = (setState, request, id) => {
  useEffect(() => {
    beerRatingApi(request, id)
      .then((response) => {setState(response.data)})
      .catch((e) => console.error(e));
  }, [id,request]);
};
