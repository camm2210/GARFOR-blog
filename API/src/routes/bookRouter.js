const { Router } = require("express");
const { getBooksHandler, postBookHandler } = require("../handlers/books");

const bookRouter = Router();

bookRouter.get("/", getBooksHandler);
bookRouter.post("/create", postBookHandler);

module.exports = bookRouter;
