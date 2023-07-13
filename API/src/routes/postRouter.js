const { Router } = require("express");
const { getPostsHandler, newPostHandler } = require("../handlers/posts");

const postRouter = Router();

postRouter.get("/", getPostsHandler);
postRouter.post("/post", newPostHandler);

module.exports = postRouter;
