const Posts = require("../models/Post");

getPosts = async () => {
  const allPosts = await Posts.find();
  console.log(allPosts);
  return allPosts;
};

module.exports = { getPosts };
