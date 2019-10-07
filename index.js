const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");

const projectsController = require("./controllers/projects");
const partsController = require("./controllers/parts");

const app = express();

app.set("view engine", "hbs");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json())
app.use(methodOverride("_method"));

app.use("/api/projects", projectsController);
app.use("/api/parts", partsController);

app.get('/',(req,res) => {
    res.redirect('/api/projects');
});

app.listen(3000, () => {
    console.log("running on port 3000");
});