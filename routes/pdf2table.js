const pdf2table = require("pdf2table");
const fs = require("fs");

const runPdf2Table = (req, res, next) => {
  fs.readFile("./public/assets/table.pdf", function (err, buffer) {
    if (err) return console.log(err);

    pdf2table.parse(buffer, function (err, rows, rowsdebug) {
      if (err) return console.log(err);
      console.log(rows);
      return res.send(rows);
    });
  });
};

module.exports = {
  runPdf2Table,
};
