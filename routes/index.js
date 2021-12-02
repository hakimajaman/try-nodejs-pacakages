var express = require("express");
var router = express.Router();

const { runTesseract } = require("./tesseract");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/tesseract", runTesseract);

module.exports = router;
