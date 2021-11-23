import { workWithDatabase } from "../../../shared/workWithDatabase/workWithDatabase.js";

export const setUserGrades = (req, res, url) => {
  req.on("data", (data) => {
    const preparedData = JSON.parse(data.toString());
    const { id } = preparedData;
    const sumOfGrades =
      Object.entries(preparedData).reduce((sum, current) => {
        return sum + current[1];
      }, 0) - id;
    const numberOfGrades = 5;
    const resultData = { ...preparedData, grade: sumOfGrades / numberOfGrades };

    workWithDatabase(url, null, resultData);
  });
  res.end();
};
