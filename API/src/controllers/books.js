const Book = require("../models/Book");
const { post } = require("../routes/postRouter");

const getBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

const postBook = async (req, res) => {
  try {
    const newBook = await Book.create(req.body);
    res.send(newBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getBooks, postBook };
