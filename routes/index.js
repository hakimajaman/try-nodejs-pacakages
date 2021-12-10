var express = require("express");
var router = express.Router();

const { runAbbyy } = require("../controllers/abbyy-ocr-cloud/test");
const {
  compareDataWithXML,
} = require("../controllers/comparison-system/data-with-xml");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/abbyy-ocr-cloud", runAbbyy);
router.get("/comparison-system/data-with-xml", compareDataWithXML);

module.exports = router;
