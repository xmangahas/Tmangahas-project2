const express = require("express")
const router = express.Router()

const Project = require("../db/models/Project");

router.get("/", (req, res) => {
    Project.find({}).then(projects => res.json(projects));
})

router.get("/:name", (req, res) => {
    User.find({ name: req.params.name }).then(names =>
      res.json(names)
    );
});


router.post("/", (req, res) => {
    let newProject = req.body;
  
    Project.create(newProject).then(created => res.json(created));
});

router.post("/new", (req, res) => {
    Project.create(req.body.user).then(newProject => {
      Part.create(req.body.part).then(newPart => {
        newProject.partInc.push(newPart._id);
        newPart.projInc.push(newProject._id);
  
        newProject.save();
        newPart.save();
  
        res.json(newProject);
      });
    });
});

router.put("/:name", (req, res) => {
  
    Project.findOneAndUpdate({ name: req.params.name }, req.body, {
      new: true
    }).then(bookmark => res.json(bookmark));
});

router.delete("/:title", (req, res) => {
    
    Bookmark.findOneAndDelete({ title: req.params.title }).then(bookmark => {
      res.json(bookmark);
    });
});


module.exports = router