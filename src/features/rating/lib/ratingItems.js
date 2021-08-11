import { RatingItemUI } from "../../../shared/ratingItem/ui/RatingItemUI";

export const ratingItems = (ratingItemsObject) => {
  return ratingItemsObject
    ? ratingItemsObject.map((ratingItem, id) => (
        <RatingItemUI
          key={id}
          place={id+1}
          name={ratingItem.name}
          producer={ratingItem.producer}
          country={ratingItem.country}
          grade={ratingItem.grade}
        />
      ))
    : null;
};

//    /\
//    ||
// Here will be download component
