const Book = require("../models/Book");

const getBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

module.exports = { getBooks };
