const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div>
          <li>{post.title}</li>
          <h5>{post.author}</h5>
          <h5>{post.content}</h5>
          <h5>{post.description}</h5>
        </div>
      ))}
    </div>
  );
};

export default Posts;
