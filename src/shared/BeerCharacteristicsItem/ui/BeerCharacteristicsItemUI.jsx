import "./style.css";
import characteristicIcon from "./img/look.svg" 

export const BeerCharacteristicsItem = ({characteristicTitle,characteristicTag,characteristicGrade}) => {
  return (
    <div className="beer_characteristics_item">
      <img
        className="beer_characteristics_item_icon"
        src={characteristicIcon}
        alt="beer_characteristic"
      />
      <div className="beer_characteristics_item_scale_and_title">
      <p>{characteristicTitle}</p>
      <div className="beer_characteristics_item_scale">
        <div className={"beer_characteristics_item_scale_item " + characteristicTag}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTag}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTag}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTag}  />
        <div className={"beer_characteristics_item_scale_item " + characteristicTag}  />
      </div>
      </div>
    </div>
  );
};