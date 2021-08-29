import { useTranslation } from "react-i18next";

export const useOptionsForBeerFilterMain = () => {
  const { t } = useTranslation();
  const optionsForBeerFilterMain = [
    {
      value: "decrease",
      name: t("OptionsForBeerFilterMain.decreaseInEstimate"),
    },
    { value: "growth", 
      name: t("OptionsForBeerFilterMain.growthIsEstimated") },
  ];

  return optionsForBeerFilterMain;
};
