const { Router } = require("express");
const {
  getBooksHandler,
  postBookHandler,
  deleteBookHandler,
  getBookByIdHandler,
} = require("../handlers/books");

const bookRouter = Router();

bookRouter.get("/", getBooksHandler);
bookRouter.get("/:id", getBookByIdHandler);
bookRouter.post("/create", postBookHandler);
bookRouter.delete("/:id", deleteBookHandler);

module.exports = bookRouter;
