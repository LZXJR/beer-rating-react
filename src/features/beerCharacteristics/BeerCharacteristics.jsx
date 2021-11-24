import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { BeerCharacteristicsUI } from "./ui/BeerCharacteristicsUI";
import { beerRatingApi } from "../../shared/beerRatingApi";
import { useSumUpMessage } from "./lib/useSumUpMessage";

import PropTypes from "prop-types";

export const BeerCharacteristics = ({ beerPageData }) => {
  const { id } = beerPageData;
  const [resultUserGradesData, setResultUserGradesData] = useState({ id: id });
  const [isGradeValidity, setIsGradeValidity] = useState(false);
  const [clickOnTheSumUpButton, setClickOnTheSumUpButton] = useState({value:false});

  const userGrades = useSelector((state) => state);

  const message = useMemo(useSumUpMessage(clickOnTheSumUpButton, isGradeValidity),
    [clickOnTheSumUpButton]
  );

  if (!isGradeValidity)
    Object.entries(userGrades).forEach(([key, value]) =>
      value ? setIsGradeValidity(true) : null
    );

  const sumUpBeer = () => {
    if (isGradeValidity) {
      const {
        cost_grade,
        taste_grade,
        look_grade,
        smell_grade,
        alcohol_grade,
      } = beerPageData;
      const globalGrades = {
        cost_grade,
        taste_grade,
        look_grade,
        smell_grade,
        alcohol_grade,
      };

      Object.entries(globalGrades).forEach(([key, value]) =>
        userGrades[key]
          ? setResultUserGradesData((prevState) => {
              return {
                ...prevState,
                [key]: Math.round((value + userGrades[key]) / 2),
              };
            })
          : setResultUserGradesData((prevState) => {
              return {
                ...prevState,
                [key]: value,
              };
            })
      );

      setResultUserGradesData((prevState) => {
        beerRatingApi("/resultUserGrades", null, "POST", prevState);
        return prevState;
      });
      setClickOnTheSumUpButton({value:true});
      return;
    }

    setClickOnTheSumUpButton({value:true});
  };

  return (
    <BeerCharacteristicsUI beerPageData={beerPageData} sumUpBeer={sumUpBeer}>
      {message}
    </BeerCharacteristicsUI>
  );
};

BeerCharacteristics.propTypes = {
  beerPageData: PropTypes.object.isRequired,
};
