const express = require("express");

const router = express.Router();

const Part = require("../db/models/Part");

// router.get('/', (req, res) => {
//     Part.find({}).then(parts => {
//       res.json(parts);
//     })
// })

// delete a part
router.delete("/:id", (req, res) => {
    Part.findOneAndDelete({ _id: req.params.id}).then(() => {
        res.redirect("/");
    });
});

// For creating new, grab the new part
router.post("/", (req, res) =>  {
    Part.create(req.body).then(part => {
        if(part.totalPartPrice == null || 0) {
            part.totalPartPrice = partSum(part.quantity,part.pricePer);
        }
        res.redirect("/");
    })
})

//Grabbing Updated part
router.put("/:id", (req, res) => {
    if (req.body.installed === "on") {
        req.body.installed = true;
    } else {
        req.body.installed = false;
    }
    req.body.totalPartPrice = partSum(req.body.quantity,req.body.pricePer);
    Part.findOneAndUpdate({_id: req.params.id}, req.body).then((part => {
        res.redirect(`/${part.id}`);
    }));
});

// rendering the home page
router.get("/", (req, res) => {
    Part.find({}).then(parts => {
        res.render("index", { parts });
    })
    .catch(err => console.error(err));
});

// go to edit page
router.get("/edit/:id", (req, res) => {
    Part.findOne({ _id: req.params.id }).then(part => {
        part.totalPartPrice = partSum(part.quantity,part.pricePer);
        res.render("edit", part);
    });
});

// go to create page
router.get("/new", (req, res) => {
    res.render("new");
});

// Go to individual part
router.get("/:id", (req, res) => {
    Part.findOne({_id: req.params.id}).then(part => {
        part.totalPartPrice = partSum(part.quantity,part.pricePer);
        res.render("show", part);
    });
});

// function
function partSum (num1, num2) {
    let total;
    total = num1 * num2;
    return total;
}


module.exports =  router;