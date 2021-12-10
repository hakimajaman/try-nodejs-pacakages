var express = require("express");
var router = express.Router();

const { runAbbyy } = require("../controllers/abbyy-ocr-cloud/test");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/abbyy-ocr-cloud", runAbbyy);

module.exports = router;
