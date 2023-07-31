import Books from "../../components/Books";
import axios from "axios";
import { API } from "../../config";

const data = async () => {
  const booksData = await axios.get(`${API}books`);
  return booksData.data;
};

const BooksPage = async () => {
  const books = await data();
  return (
    <>
      <div>
        <Books books={books} />
      </div>
    </>
  );
};

export default BooksPage;
