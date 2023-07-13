const { getPosts, createPost } = require("../controllers/post");

const getPostsHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const allPosts = await getPosts();
    if (name) {
      const postName = allPosts.filter((post) =>
        post.title.toLowerCase().includes(name.toLowerCase())
      );
      if (postName.length) res.status(200).send(postName);
      else {
        res.status(200).send("Post not found");
      }
    } else {
      res.status(200).send(allPosts);
    }
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
