const Posts = require("../models/Post");

getPosts = async () => {
  const allPosts = await Posts.find();
  return allPosts;
};

createPost = async ({ title, author, description, content, image }) => {
  const newPost = await Posts.create({
    title,
    author,
    description,
    content,
    image,
  });

  return newPost;
};

deletePost = async (id) => {
  const deletedPost = await Posts.findByIdAndDelete(id);

  return deletedPost;
};
module.exports = { getPosts, createPost, deletePost };
