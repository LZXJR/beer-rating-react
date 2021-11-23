import { createConnection } from "./lib/createConnection.js";
import { connect } from "./lib/connect.js";
import { query } from "./lib/query.js";
import { disConnect } from "./lib/disConnect.js";

export const workWithDatabase = async (path, id, data) => {
  try {
    const connection = createConnection();

    await connect(connection);
    const response = await query(connection, path, id, data);
    await disConnect(connection);
    return response;
  } catch (e) {
    console.error(e);
  }
};
