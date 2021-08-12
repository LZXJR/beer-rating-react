import ratingStar from "./img/star.svg";
import "./style.css";

export const RatingItemUI=({place,name,color,filtration,grade,fortress})=>{
return(
    <div className="rating_item">
    <div className="rating_item_inner place">{place}</div>
    <div className="rating_item_inner name">{name}</div>
    <div className="rating_item_inner color">{color}</div>
    <div className="rating_item_inner filtration">{filtration}</div>
    <div className="rating_item_inner fortress">{fortress}</div>

    
    <div className="rating_item_inner grade">
      <img src={ratingStar} alt="star" className="rating_star"/>
      <span>{grade}/5</span>
     
    </div>
  </div>
)
} 