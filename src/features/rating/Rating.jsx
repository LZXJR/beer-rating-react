import { useState } from "react";
import { RatingUI } from "./ui/RatingUI";
import { ratingItems } from "./lib/ratingItems";
import { usePrepareResponse } from "../../shared/usePrepareResponse";
import { Loading } from "../../shared/loading/";

import PropsTypes from "prop-types";

export const Rating = ({ choosedFilter }) => {
  const [ratingItemsResponse, setRatingItemsResponse] = useState(null);
  usePrepareResponse(setRatingItemsResponse, `/ratingItems`,choosedFilter);

  return (
    <RatingUI>
      {ratingItemsResponse ? (
        ratingItems(ratingItemsResponse.data)
      ) : (
        <Loading />
      )}
    </RatingUI>
  );
};

Rating.propsTypes = {
  choosedFilter: PropsTypes.string.isRequired,
};
