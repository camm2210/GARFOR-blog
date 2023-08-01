import Link from "next/link";
import Image from "next/image";

const Posts = ({ posts }) => {
  return (
    <div className="list p-4">
      {posts.map((post) => (
        <div className=" d-flex mt-5 mb-5 justify-content-between">
          <img src={post.image} alt="imagen relacionada" width="30%" className="mw-30 mw-30" />
          <li
            key={post._id}
            className="list-group-item d-flex justify-content-between p-3"
          >
            <div>
              <h1>{post.title}</h1>
              <h5 className="fst-italic fs-6 fw-light">{post.author}</h5>
              <h6 className="fw-normal">{post.description}</h6>
              <Link
                className="text-dark text-decoration-none "
                key={post._id}
                href={`${post.content}`}
              >
                <button className="mt-3 btn btn-dark">Artículo completo</button>
              </Link>
            </div>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Posts;
