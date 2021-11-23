export const connect= connection =>
new Promise((resolve, reject) => {
  connection.connect((err) => {
    err ? reject(err) : console.log("Database:Connected");
  });

  resolve();
});