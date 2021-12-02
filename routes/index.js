var express = require("express");
var router = express.Router();

const { runPdf2Table } = require("./pdf2table");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/pdf2table", runPdf2Table);

module.exports = router;
