const mongoose = require("mongoose");
const { param } = require("../routes/match");
const internship = require(__dirname +'/Internship.js').schema;
const router = require("express").Router();

const companySchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
        isCompany: {type: Boolean, default: false},
        internships: {type: [], required: true}
    },
    {timestamps:true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("Company", companySchema);