const { getBooks, postBook } = require("../controllers/books");

const getBooksHandler = async (req, res) => {
  try {
    const allBooks = await getBooks();
    res.send(allBooks);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const postBookHandler = async (req, res) => {
  try {
    const bookToCreate = req.body;
    const newBook = await postBook(bookToCreate);
    res.send(newBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getBooksHandler, postBookHandler };
