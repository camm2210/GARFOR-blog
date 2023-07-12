require("dotenv").config();
const { FRONT, PORT, DB_CONNECTION } = process.env;

module.exports = {
  FRONT,
  PORT,
  DB_CONNECTION,
};
