import { useState, useEffect } from "react";
import { beerRatingApi } from "../../shared/beerRatingApi";
import { RatingUI } from "./ui/RatingUI";
import { ratingItems } from "./lib/ratingItems";

export const Rating = () => {
  const [ratingItemsObject, setRatingItemsObject] = useState(null);

  useEffect(() => {
      const asyncGetRatingItemsApi = async () => {
      try {
        const response = await beerRatingApi("ratingItems");
        setRatingItemsObject(response.data);
      } catch (e) {
        console.error(e);
      }
    }

    asyncGetRatingItemsApi();
  }, []);

  return <RatingUI>{ratingItems(ratingItemsObject)}</RatingUI>;
};
