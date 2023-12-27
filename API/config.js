require("dotenv").config();
const { PORT, DB_CONNECTION } = process.env;

module.exports = {
  PORT,
  DB_CONNECTION,
};
