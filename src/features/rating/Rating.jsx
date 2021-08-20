import { useState } from "react";
import { RatingUI } from "./ui/RatingUI";
import { ratingItems } from "./lib/ratingItems";
import { usePreparingResponse } from "../../shared/usePreparingResponse";
import { Loading } from "../../shared/loading/ui/Loading";

export const Rating = () => {
  const [ratingItemsResponse, setRatingItemsResponse] = useState(null);

  usePreparingResponse(setRatingItemsResponse, "ratingItems");

  return <RatingUI>{ratingItemsResponse?ratingItems(ratingItemsResponse.data):<Loading/>}</RatingUI>;
};
