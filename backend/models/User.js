const mongoose = require("mongoose");
const technologies = require(__dirname +'/technologies.js').schema;

const userSchema = new mongoose.Schema(
    {
        email: {type: String, required:true, unique:true},
        password: {type: String, required:true},
        iWant: {type: [technologies], required: false, unique: false},
        iKnow: {type: [technologies], required: false, unique: false},
        feedback: {type: [String], required: false, default: null},
        startDate: {type: Date, required: false},
        endDate: {type: Date, required: false},
        isStudent: {type: Boolean, default: false},
        isCompany: {type: Boolean, default: false},

    },
    {timestamps:true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("User", userSchema);