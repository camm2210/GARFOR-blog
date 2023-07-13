const { getPosts, createPost } = require("../controllers/getPost");

const getPostsHandler = async (req, res) => {
  try {
    const allPosts = await getPosts();
    res.send(allPosts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const newPostHandler = async (req, res) => {
  try {
    const newPost = await createPost(req.body);
    res.send(newPost);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
module.exports = { getPostsHandler, newPostHandler };
