const tesseract = require("tesseract.js");
const fs = require("fs");

const runTesseract = (req, res, next) => {
  const file = fs.readFile("./public/assets/table-1.jpg", (err, buffer) => {
    if (err) {
      console.log(err);
      return res.send(err);
    }

    console.log("buffernya");
    console.log(buffer);

    tesseract
      // .recognize(
      //   "https://tesseract.projectnaptha.com/img/eng_bw.png",
      //   "eng",
      //   {
      .recognize(buffer, "eng", {
        logger: (m) => console.log(m),
      })
      .then(({ data: { text } }) => {
        console.log(text);
        return res.send(text);
      })
      .catch((err) => {
        return res.send(err);
      });
  });
};

module.exports = {
  runTesseract,
};
