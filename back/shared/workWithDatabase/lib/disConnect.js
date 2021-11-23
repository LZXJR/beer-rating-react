export const disConnect = (connection) =>
  new Promise((resolve, reject) => {
    connection.end((err) => {
      err ? reject(err) : console.log("Database:disConnected");
    });
    resolve();
  });
