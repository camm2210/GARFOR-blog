const Book = require("../models/Book");

const getBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

const postBook = async ({ title, author, description, content }) => {
  const newBook = await Book.create({ title, author, description, content });

  return newBook;
};

const deleteBook = async (id) => {
  const deletedBook = await Book.findByIdAndDelete(id);
  return deletedBook;
};

module.exports = { getBooks, postBook, deleteBook };