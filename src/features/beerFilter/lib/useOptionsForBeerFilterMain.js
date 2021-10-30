import { useTranslation } from "react-i18next";

export const useOptionsForBeerFilterMain = () => {
  const { t } = useTranslation();
  const optionsForBeerFilterMain = [
    {
      value: "decreaseInEstimate",
      name: t("OptionsForBeerFilterMain.decreaseInEstimate"),
    },
    { value: "growthIsEstimated", 
      name: t("OptionsForBeerFilterMain.growthIsEstimated") },
  ];

  return optionsForBeerFilterMain;
};