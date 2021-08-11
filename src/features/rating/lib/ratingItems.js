import { RatingItem } from "../../../shared/ratingItem/ui/RatingItem";

export const ratingItems = (ratingItemsObject) => {
  return ratingItemsObject
    ? ratingItemsObject.map((ratingItem, id) => (
        <RatingItem
          key={id}
          place={id}
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
