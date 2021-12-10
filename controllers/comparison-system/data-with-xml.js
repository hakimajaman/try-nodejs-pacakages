const fs = require("fs");
const parser = require("xml2json");

const fileXML = "./public/assets/output-2.xml";

const compareDataWithXML = (req, res) => {
  fs.readFile(fileXML, (err, data) => {
    let json = parser.toJson(data);
    console.log(json.document);
    return res.json(json.document);
  });
};

module.exports = {
  compareDataWithXML,
};
