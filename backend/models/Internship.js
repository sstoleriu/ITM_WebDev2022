const mongoose = require("mongoose");
const technologies = require(__dirname +'/technologies.js').schema;

const internshipSchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
        Description: {type: String, required: false},
        startDate: {type: Date, required: false},
        endDate: {type: Date, required: false},
        salary: {type: Number, default: 0, required: false},
        technologies: {type: [technologies], required: true}

    },
    {timestamps:true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("Internship", internshipSchema);