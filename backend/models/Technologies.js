const mongoose = require("mongoose");

const technologiesSchema = new mongoose.Schema(
    {
        name: {type: String, required:true, unique:true},
    },
    {timestamps: true},
    {collection: 'itm_dev_web'}
);

module.exports = mongoose.model("technologies", technologiesSchema);