const { Router } = require("express");
const { getPostsHandler, createPostHandler } = require("../handlers/posts");

const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.post("/create", createPostHandler);

module.exports = postRouter;
