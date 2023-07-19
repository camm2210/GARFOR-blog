import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div className="list p-4">
      {posts.map((post) => (
        <li key={post._id} className="list-group-item d-flex m-5">
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
      ))}
    </div>
  );
};

export default Posts;
