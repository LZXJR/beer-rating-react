export const checkCORS = (res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://beer-rating.surge.sh");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
};
