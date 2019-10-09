const express = require("express");
const hbs = require('hbs');
const parser = require("body-parser");
const methodOverride = require("method-override");

const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
// app.use(parser.json())
app.use(methodOverride("_method"));

// app.get('/',(req,res) => {
//     res.redirect('/parts');
// });

const partsController = require("./controllers/parts");
app.use("/", partsController);


app.use('/assets', express.static('public'))


app.listen(3000, () => {
    console.log("running on port 3000");
});

// app.set("port", process.env.PORT || 8080);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });