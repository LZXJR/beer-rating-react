import { RatingItemUI } from "../../../shared/ratingItem/ui/RatingItemUI";
import { Download } from "../../../shared/download/ui/Download";

export const ratingItems = (ratingItemsObject) => {
  return ratingItemsObject
    ? ratingItemsObject.map((ratingItem, id) => (
        <RatingItemUI
          key={id}
          place={id+1}
          name={ratingItem.name}
          color={ratingItem.color}
          filtration={ratingItem.filtration}
          fortress={ratingItem.fortress}
          grade={ratingItem.grade}
        />
      ))
    : <Download/>;
};


