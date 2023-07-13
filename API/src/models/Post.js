const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: String,
  author: String,
  content: String,
});

const Posts = mongoose.model("Post", postSchema);

module.exports = Posts;
