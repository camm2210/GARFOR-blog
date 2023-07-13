const { Router } = require("express");
const postRouter = require("./postRouter");
const bookRouter = require("./bookRouter");

const router = Router();

router.use("/posts", postRouter);
router.use("/books", bookRouter);

module.exports = router;
