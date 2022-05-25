const getInput = require("./src/inputData");
const generateHTML = require("./src/generateHTML");
const writeToFile = require("./src/writeToFile");

async function init() {
  try {
    const data = await getInput();
    const html = generateHTML(data);
    const filePath = writeToFile(html);

    console.log(`HTML generated at ${filePath}`);
  } catch (err) {
    console.error(err);
  }
}

init();
