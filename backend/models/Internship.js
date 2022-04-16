const mongoose = require("mongoose");
const technologies = require(__dirname +'/technologies.js').schema;

const internshipSchema = new mongoose.Schema(
    {
        name: {type: String, required:true,default: null},
        Description: {type: String, required: false, unique:false},
        startDate: {type: Date, required: false, unique:false},
        endDate: {type: Date, required: false, unique:false},
        salary: {type: Number, default: 0, required: false, default: 0},
        technologies: {type: [], required: true, default: null}

    },
    {timestamps:true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("Internship", internshipSchema);