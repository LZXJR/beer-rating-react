export const getUserIpAddress = (req) => {
    return (
      (req.headers["x-forwarded-for"] || "").split(",")[0] ||
      req.connection.remoteAddress
    );
  };