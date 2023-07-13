const { Router } = require("express");
const { getPostsHandler } = require("../handlers/posts");

const postRouter = Router();

postRouter.get("/", getPostsHandler);

module.exports = postRouter;
