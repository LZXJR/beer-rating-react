import ratingStar from "./img/star.svg";
import "./style.css";

export const RatingItemUI=({place,name,producer,country,grade})=>{
return(
    <div className="rating_item">
    <div className="rating_item_inner place">{place}</div>
    <div className="rating_item_inner name">{name}</div>
    <div className="rating_item_inner producer">{producer}</div>
    <div className="rating_item_inner country">{country}</div>
    
    <div className="rating_item_inner grade">
      {Math.round(grade)>=1?<img src={ratingStar} alt="star" className="rating_star"/>:null}
      {Math.round(grade)>=2?<img src={ratingStar} alt="star" className="rating_star"/>:null}
      {Math.round(grade)>=3?<img src={ratingStar} alt="star" className="rating_star"/>:null}
      {Math.round(grade)>=4?<img src={ratingStar} alt="star" className="rating_star"/>:null}
      {Math.round(grade)===5?<img src={ratingStar} alt="star" className="rating_star"/>:null}
    </div>
  </div>
)
} 