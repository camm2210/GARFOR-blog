const Posts = require("../models/Post");

getPosts = async () => {
  const allPosts = await Posts.find();
  return allPosts;
};

createPost = async ({ title, author, description, content }) => {
  const newPost = await Posts.create({ title, author, description, content });

  return newPost;
};

module.exports = { getPosts, createPost };
