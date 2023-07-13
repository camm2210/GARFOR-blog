const { getPosts } = require("../controllers/getPost");

const getPostsHandler = async (req, res) => {
  try {
    const allPosts = await getPosts();
    res.send(allPosts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { getPostsHandler };
