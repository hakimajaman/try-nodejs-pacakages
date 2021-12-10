const fs = require("fs");
const parser = require("xml2json");

const fileXML = "./public/assets/output-2.xml";

const compareDataWithXML = async (req, res) => {
  const callFile = fs.readFileSync(fileXML, "utf8");
  const json = JSON.parse(parser.toJson(callFile));

  const getBlock = json.document.page.block;

  let textParagraph = [];

  for (let i = 0; i < getBlock.length; i++) {
    if (
      getBlock[i].text &&
      getBlock[i].text.par &&
      getBlock[i].text.par.line &&
      getBlock[i].text.par.line.formatting &&
      getBlock[i].text.par.line.formatting.charParams
    ) {
      let charParams = getBlock[i].text.par.line.formatting.charParams;
      textParagraph.push("");
      for (let j = 0; j < charParams.length; j++) {
        if (charParams[j].$t.length < 1) {
          textParagraph[i] += " ";
        } else {
          textParagraph[i] += charParams[j].$t.toLowerCase();
        }
      }
    }
  }

  return res.json(textParagraph);
};

module.exports = {
  compareDataWithXML,
};
