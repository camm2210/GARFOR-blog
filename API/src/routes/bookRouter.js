const { Router } = require("express");
const {
  getBooksHandler,
  postBookHandler,
  deleteBookHandler,
} = require("../handlers/books");

const bookRouter = Router();

bookRouter.get("/", getBooksHandler);
bookRouter.post("/create", postBookHandler);
bookRouter.delete("/:id", deleteBookHandler);

module.exports = bookRouter;
