
const Part = require('./models/Part');

const seeds = require("./seeds.json");

Part.remove({})
  .then(() => {
    console.log("HI");
    return Part.collection.insertMany(seeds);
  })
  .then(() => {
    console.log("WE GOT DATA!");
    process.exit();  // kill the current node script
  });
