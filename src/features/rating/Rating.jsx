import { useState } from "react";
import { RatingUI } from "./ui/RatingUI";
import { ratingItems } from "./lib/ratingItems";
import { usePreparingResponse } from "../../shared/usePreparingResponse";

export const Rating = () => {
  const [ratingItemsObject, setRatingItemsObject] = useState(null);

  usePreparingResponse(setRatingItemsObject, "ratingItems");

  return <RatingUI>{ratingItems(ratingItemsObject)}</RatingUI>;
};
