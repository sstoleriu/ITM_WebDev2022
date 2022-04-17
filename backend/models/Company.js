const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
        password: {type: String, required:true},
        isCompany: {type: Boolean, default: false},
        internships: {type: [], required: true}
    },
    {timestamps:true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("Company", companySchema);