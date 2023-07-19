import { API } from "../../../config";
import axios from "axios";

const getbook = async (id) => {
  const data = await axios.get(`${API}books/${id}`);

  return data.data;
};
const BookPage = async ({ params }) => {
  const book = await getbook(params.id); //! objeto libro

  return (
    <div>
      <h1>Book detail</h1>
      <h1>{book.title}</h1>
    </div>
  );
};

export default BookPage;
