import NavBar from "@/components/NavBar";
import Books from "@/components/books";
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
      <NavBar />
      <div>
        <Books books={books} />
      </div>
    </>
  );
};

export default BooksPage;
