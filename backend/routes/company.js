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

router.put("/:id/update", async (req, res) => {
    console.log("iid com",req.params.id);
    try {
        const updatedCom = await company.findByIdAndUpdate(
            req.params.id,
            {
                $add: req.body.internships,
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCom);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;