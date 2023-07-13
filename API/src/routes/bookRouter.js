const { Router } = require("express");
const { getBooksHandler } = require("../handlers/books");

const bookRouter = Router();

bookRouter.get("/", getBooksHandler);

module.exports = bookRouter;
