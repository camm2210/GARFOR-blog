const { Router } = require("express");
const {
  getPostsHandler,
  createPostHandler,
  deletePostHandler,
} = require("../handlers/posts");

const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.post("/create", createPostHandler);
postRouter.delete("/:id", deletePostHandler);

module.exports = postRouter;
