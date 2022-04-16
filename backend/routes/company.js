const router = require("express").Router();
const company = require("../models/company");

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

module.exports = router;