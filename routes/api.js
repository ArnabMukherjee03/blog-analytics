const express = require("express");
const { blogStats, blogSearch } = require("../controller/api");
const { blogData } = require("../middleware/blogData");

const router = express.Router();

router.get("/blog-stats",blogData,blogStats)
      .get("/blog-search",blogData,blogSearch);


exports.router = router;