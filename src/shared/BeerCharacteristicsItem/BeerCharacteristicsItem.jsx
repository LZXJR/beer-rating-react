import { useCallback, useState } from "react";
import { BeerCharacteristicsItemUI } from "./ui/BeerCharacteristicsItemUI";
import {changeState} from "../../shared/changeState"

export const BeerCharacteristicsItem = ({
  characteristicTitle,
  characteristicTag,
  characteristicGrade,
  characteristicIcon,
}) => {
  const [estimateProcessStatus, setEstimateProcessStatus] = useState(false);
  const [hoverScaleGrade, setHoverScaleGrade] = useState(null);
  const [selectedScaleGrade, setSelectedScaleGrade] = useState(null);

 
  const changeEstimateStates = {
    setEstimateProcessStatus:changeState(setEstimateProcessStatus),
    setHoverScaleGrade:changeState(setHoverScaleGrade),
    setSelectedScaleGrade:changeState(setSelectedScaleGrade)
  }

  const classNameForScaleItem = useCallback(
    (scaleValue, grade = selectedScaleGrade || characteristicGrade) => {
      const defaultClassName = "beer_characteristics_item_scale_item ";

      if (estimateProcessStatus && !hoverScaleGrade) return defaultClassName;

      return grade >= scaleValue
        ? defaultClassName + characteristicTag
        : defaultClassName;
    },
    [selectedScaleGrade]
  );

  const classNameForScaleItemWithSelectingOfScaleGrade = (scaleItemGrade) =>
    hoverScaleGrade
      ? classNameForScaleItem(scaleItemGrade, hoverScaleGrade)
      : classNameForScaleItem(scaleItemGrade);

  return (
    <BeerCharacteristicsItemUI
      characteristicTitle={characteristicTitle}
      characteristicTag={characteristicTag}
      characteristicIcon={characteristicIcon}

      classNameForScaleItemWithSelectingOfScaleGrade={classNameForScaleItemWithSelectingOfScaleGrade}
      hoverScaleGrade={hoverScaleGrade}
      changeEstimateStates={changeEstimateStates}
    />
  );
};
