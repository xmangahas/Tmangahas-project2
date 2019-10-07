const express = require("express");

const router = express.Router();

const Part = require("../db/models/Part");

// router.get('/', (req, res) => {
//     Part.find({}).then(parts => {
//       res.json(parts);
//     })
// })

//rendering the home page
router.get("/", (req, res) => {
    Part.find({}).then(parts => {
        res.render("index", { parts });
    })
    .catch(err => console.error(err));
});


// Go to individual part
router.get("/:id", (req, res) => {
    Part.findOne({_id: req.params.id}).then(part => {
        res.render("show", part);
    });
});







module.exports =  router;