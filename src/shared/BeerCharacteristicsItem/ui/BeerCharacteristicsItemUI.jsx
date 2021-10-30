import "./style.css";
import { useDispatch } from "react-redux";
import { scaleItemsGrades } from "../lib/scaleItemsGrades";

export const BeerCharacteristicsItemUI = ({
  characteristicTitle,
  characteristicIcon,
  characteristicTag,

  classNameForScaleItemWithSelectingOfScaleGrade,
  hoverScaleGrade,
  changeEstimateStates,
}) => {
  const dispatch = useDispatch();

  const {
    setEstimateProcessStatus,
    setHoverScaleGrade,
    setSelectedScaleGrade,
  } = changeEstimateStates;

  return (
    <div className="beer_characteristics_item">
      <img
        className="beer_characteristics_item_icon"
        src={characteristicIcon}
        alt="beer_characteristic"
      />
      <div className="beer_characteristics_items_scale_and_title">
        <p>{characteristicTitle}</p>
        <div
          className="beer_characteristics_item_scale"
          onMouseEnter={() => {
            setEstimateProcessStatus(true);
          }}
          onMouseLeave={() => {
            setEstimateProcessStatus(false);
            setHoverScaleGrade(null);
          }}
        >
          <div
            className={classNameForScaleItemWithSelectingOfScaleGrade(
              scaleItemsGrades.firstItem
            )}
            onMouseEnter={() => setHoverScaleGrade(scaleItemsGrades.firstItem)}
            onClick={() => {
              setSelectedScaleGrade(hoverScaleGrade);
              dispatch({
                type: `set_${characteristicTag}`,
                payload: scaleItemsGrades.firstItem,
              });
            }}
          />
          <div
            className={classNameForScaleItemWithSelectingOfScaleGrade(
              scaleItemsGrades.secondItem
            )}
            onMouseEnter={() => setHoverScaleGrade(scaleItemsGrades.secondItem)}
            onClick={() => {
              setSelectedScaleGrade(hoverScaleGrade);
              dispatch({
                type: `set_${characteristicTag}`,
                payload: scaleItemsGrades.secondItem,
              });
            }}
          />
          <div
            className={classNameForScaleItemWithSelectingOfScaleGrade(
              scaleItemsGrades.thirdItem
            )}
            onMouseEnter={() => setHoverScaleGrade(scaleItemsGrades.thirdItem)}
            onClick={() => {
              setSelectedScaleGrade(hoverScaleGrade);
              dispatch({
                type: `set_${characteristicTag}`,
                payload: scaleItemsGrades.thirdItem,
              });
            }}
          />
          <div
            className={classNameForScaleItemWithSelectingOfScaleGrade(
              scaleItemsGrades.fourthItem
            )}
            onMouseEnter={() => setHoverScaleGrade(scaleItemsGrades.fourthItem)}
            onClick={() => {
              setSelectedScaleGrade(hoverScaleGrade);
              dispatch({
                type: `set_${characteristicTag}`,
                payload: scaleItemsGrades.fourthItem,
              });
            }}
          />
          <div
            className={classNameForScaleItemWithSelectingOfScaleGrade(
              scaleItemsGrades.fifthItem
            )}
            onMouseEnter={() => setHoverScaleGrade(scaleItemsGrades.fifthItem)}
            onClick={() => {
              setSelectedScaleGrade(hoverScaleGrade);
              dispatch({
                type: `set_${characteristicTag}`,
                payload: scaleItemsGrades.fifthItem,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};
