import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { BeerCharacteristicsUI } from "./ui/BeerCharacteristicsUI";
import { beerRatingApi } from "../../shared/beerRatingApi";

export const BeerCharacteristics = ({ beerPageData }) => {
  const { id } = beerPageData;
  const { t } = useTranslation();

  const [resultUserGradesData, setResultUserGradesData] = useState({ id: id });
  const [isGradeValidity, setIsGradeValidity] = useState(false);
  const [clickOnTheSumUpButton, setClickOnTheSumUpButton] = useState(false);

  const userGrades = useSelector((state) => state);

  if (!isGradeValidity)
    Object.entries(userGrades).forEach(([key, value]) =>
      value ? setIsGradeValidity(true) : null
    );


  const sumUpBeer = () => {
    if (isGradeValidity) {
      const { cost_grade,taste_grade,look_grade,smell_grade,alcohol_grade} = beerPageData;
      const globalGrades = {cost_grade,taste_grade,look_grade,smell_grade,alcohol_grade};
     
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
        beerRatingApi("resultUserGrades", null, "POST", prevState);
        return prevState;
      });
      // !!!!
      return;
    }

    setClickOnTheSumUpButton(true);
  };

  return (
    <BeerCharacteristicsUI beerPageData={beerPageData} sumUpBeer={sumUpBeer}>
      {clickOnTheSumUpButton && !isGradeValidity ? (
        <p className="sum_up_explaining">*{t("SumUpExplaining")}</p>
      ) : (
        <></>
      )}
    </BeerCharacteristicsUI>
  );
};
