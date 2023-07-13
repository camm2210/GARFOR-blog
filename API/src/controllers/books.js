const Book = require("../models/Book");

const getBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

const postBook = async ({ title, author, description, content }) => {
  const newBook = await Book.create({ title, author, description, content });

  return newBook;
};

module.exports = { getBooks, postBook };
