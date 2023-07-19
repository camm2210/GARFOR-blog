"use client";
import { useRouter } from "next/navigation";

const Books = ({ books }) => {
  const router = useRouter();
  return (
    <ul>
      {books.map((book) => (
        <li key={book._id} onClick={() => router.push(`/libros/${book._id}`)}>
          <div>
            <h5>{book.title}</h5>
            <h5>{book.author}</h5>
            <h5>{book.content}</h5>
            <h5>{book.description}</h5>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Books;
