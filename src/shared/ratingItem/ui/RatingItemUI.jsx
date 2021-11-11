import ratingStar from "./img/star.svg";
import "./style.css";

import PropTypes from "prop-types";

export const RatingItemUI = ({
  place,
  name,
  color,
  filtration,
  grade,
  fortress,
  id,
}) => {
  return (
    <a className="rating_item" href={`/beerPage${id}/${name}`}>
      <div className="rating_item_inner place">{place}</div>
      <div className="rating_item_inner name">{name}</div>
      <div className="rating_item_inner color">{color}</div>
      <div className="rating_item_inner filtration">{filtration}</div>
      <div className="rating_item_inner fortress">{fortress}</div>

      <div className="rating_item_inner grade">
        <img src={ratingStar} alt="star" className="rating_star" />
        <span>{grade}/5</span>
      </div>
    </a>
  );
};

RatingItemUI.propTypes = {
  place: PropTypes.number.isRequired,
  name: PropTypes.string,
  color: PropTypes.string.isRequired,
  filtration: PropTypes.string.isRequired,
  grade: PropTypes.number.isRequired,
  fortress: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
