const { getBooks } = require("../controllers/getBooks");

const getBooksHandler = async (req, res) => {
  try {
    const allBooks = await getBooks();
    res.send(allBooks);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getBooksHandler };
