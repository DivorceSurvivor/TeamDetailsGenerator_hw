const fs = require("fs");

function writeToFile(data) {
  const filename = `./dist/TeamDetails.html`;
  fs.writeFileSync(filename, data);
  return filename;
}

module.exports = writeToFile;
