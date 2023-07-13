const { getPosts, createPost } = require("../controllers/post");

const getPostsHandler = async (req, res) => {
  try {
    const allPosts = await getPosts();
    res.status(200).send(allPosts);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const createPostHandler = async (req, res) => {
  try {
    const postToCreate = req.body;
    const newPost = await createPost(postToCreate);
    res.status(201).send(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = { getPostsHandler, createPostHandler };
