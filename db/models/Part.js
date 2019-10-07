const mongoose = require("../connection");

const PartSchema = mongoose.Schema({
    partName: String,
    partNo: String,
    quantity: Number,
    pricePer: Number,
    totalPartPrice: Number,
    linkToPart: String,
    refLink: String,
    notes: String,
    installed: Boolean,
});

const Part = mongoose.model("part", PartSchema);

module.exports = Part;