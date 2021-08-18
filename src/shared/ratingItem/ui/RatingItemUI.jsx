import ratingStar from "./img/star.svg";
import { setIdInLocalStorage } from "../lib/setIdInLocalStorage";
import "./style.css";



export const RatingItemUI = ({
  place,
  name,
  color,
  filtration,
  grade,
  fortress,
  id
}) => {
  return (
    <a className="rating_item" href="/beerPage" onClick={()=>setIdInLocalStorage(id)}>
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

