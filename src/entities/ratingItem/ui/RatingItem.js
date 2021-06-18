import ratingStart from "./img/star.svg";
import "./style.css";

export const RatingItem=({place,name,producer,country,grade})=>{
return(
    <div className="rating_item">
    <div className="rating_item_inner place">{place}</div>
    <div className="rating_item_inner name">{name}</div>
    <div className="rating_item_inner producer">{producer}</div>
    <div className="rating_item_inner country">{country}</div>
    
    <div className="rating_item_inner grade">
      <img src={ratingStart} alt="star" className="rating_star"/>
      <img src={ratingStart} alt="star" className="rating_star"/>
      <img src={ratingStart} alt="star" className="rating_star"/>
      <img src={ratingStart} alt="star" className="rating_star"/>
      <img src={ratingStart} alt="star" className="rating_star"/>
    </div>
  </div>
)
} 