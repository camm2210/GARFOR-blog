const Posts = require("../models/Post");

getPosts = async () => {
  const allPosts = await Posts.find();
  return allPosts;
};

createPost = async () => {
  const newPost = await Posts.create();
  return newPost;
};

module.exports = { getPosts };
