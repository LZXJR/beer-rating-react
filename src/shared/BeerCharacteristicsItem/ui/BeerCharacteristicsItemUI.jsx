import "./style.css";

export const BeerCharacteristicsItem = ({
  characteristicTitle,
  characteristicTag,
  characteristicGrade,
  characteristicIcon,
}) => {
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
          <div
            className={
              characteristicGrade >= 1
                ? "beer_characteristics_item_scale_item " + characteristicTag
                : "beer_characteristics_item_scale_item "
            }
          />
          <div
            className={
              characteristicGrade >= 2
                ? "beer_characteristics_item_scale_item " + characteristicTag
                : "beer_characteristics_item_scale_item "
            }
          />
          <div
            className={
              characteristicGrade >= 3
                ? "beer_characteristics_item_scale_item " + characteristicTag
                : "beer_characteristics_item_scale_item "
            }
          />
          <div
            className={
              characteristicGrade >= 4
                ? "beer_characteristics_item_scale_item " + characteristicTag
                : "beer_characteristics_item_scale_item "
            }
          />
          <div
            className={
              characteristicGrade >= 5
                ? "beer_characteristics_item_scale_item " + characteristicTag
                : "beer_characteristics_item_scale_item "
            }
          />
        </div>
      </div>
    </div>
  );
};
