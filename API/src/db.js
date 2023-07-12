const mongoose = require("mongoose");
const { DB_CONNECTION } = require("../config");

mongoose
  .connect(DB_CONNECTION)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));
