const router = require("express").Router();
const company = require("../models/company");
const session = require('express-session');
const path = require("path");

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname + "/../../client/com/com.html"));
});

router.post("/create", async(req, res) => {
    const newCom = new company({
        name: req.body.name,
        internships: req.body.internships,
    });


    try {
        const savedCom = await newCom.save();
        res.status(201).json(savedCom)
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
});

router.put("/update", async (req, res) => {
    let id = req.session._id;
    try {
        const updatedCom = await company.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCom);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put("/add-internship", async (req, res) => {
    let id = req.session._id;
    try {
        const addCom = await company.findByIdAndUpdate(
            id,
            {
                $push: {internships: req.body.internships}
            },
            { new: true }
        );
        res.status(200).json(addCom);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;