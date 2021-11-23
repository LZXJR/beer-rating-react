import http from "http";
import { checkCORS } from "../../features/checkCORS.js";
import { frontSpeaker } from "../../features/frontSpeaker/frontSpeaker.js";

export const server = () => {
  const PORT = process.env.PORT || 5000;

  console.log("Server working");

  const server = http.createServer((req, res) => {
    checkCORS(res);
    frontSpeaker(req, res);
  });

  server.listen(PORT, "0.0.0.0", (err) =>
    err ? console.error(err) : console.log(`Listening port ${PORT}`)
  );
};
