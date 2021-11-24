import { useTranslation } from "react-i18next";

export const useSumUpMessage = (click, validity) => {
  const { t } = useTranslation();

  return () =>
    click.value && !validity ? (
      <p className="sum_up_explaining">{t("SumUp.explaining")}</p>
    ) : click.value ? (
      <p className="sum_up_gratitude">{t("SumUp.gratitude")}</p>
    ) : (
      <></>
    );
};
