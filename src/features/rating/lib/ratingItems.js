import { RatingItemUI } from "../../../shared/ratingItem/ui/RatingItemUI";

export const ratingItems = (ratingItemsObject) => ratingItemsObject.map((ratingItem, id) => (
        <RatingItemUI
          key={id}
          place={id+1}
          name={ratingItem.name}
          color={ratingItem.color}
          filtration={ratingItem.filtration}
          fortress={ratingItem.fortress}
          grade={ratingItem.grade}
          id={ratingItem.id}
        />
))


