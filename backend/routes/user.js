const Internship = require("../models/Internship");
const User = require("../models/User");
const session = require('express-session');
const router = require("express").Router();

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname + "/../../client/user/user.html"));
});

router.get("/profile-data", async (req, res) => {
    /*
    if(!req.session.email) {
        res.status(401).send();
        return;
    }
    */
   console.log(req.session);

    const profileData = await user.findOne(
        {
            _id: req.session._id
        }
    );

    res.status(200).send(profileData);
});

router.put("/:id/update", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        if(!updatedUser)
        console.log("nu i");
        else
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/get", async (req, res) =>{
    let id = req.session._id;
    console.log(id);
    try {
        const findUser = await User.findById(id);
        res.status(200).json(findUser);
    } catch (error) {
        res.status(400).json(err);
    }

});

module.exports = router;