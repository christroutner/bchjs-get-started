/*
  This is a simple example app for exploring bch-js endpoints.
*/

const BCHJS = require("@chris.troutner/bch-js");
const bchjs = new BCHJS({ restURL: `http://decatur.hopto.org:12400/v3/` });

async function explore() {
  try {
    const result = await bchjs.Control.getNetworkInfo();

    console.log(`result: ${JSON.stringify(result, null, 2)}`);
  } catch (err) {
    console.error(`Error: `, err);
  }
}

// Run the function above.
explore();
