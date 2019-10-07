const mongoose = require("../connection");

const ProjectSchema = mongoose.Schema({
  name: String,
  description: String,
  totalProjectPrice: Number,
  partInc: [
      {
          ref: "Part",
          type: mongoose.Schema.Types.ObjectId
      }
  ]
  
});

const Project = mongoose.model("project", ProjectSchema);

module.exports = Project;