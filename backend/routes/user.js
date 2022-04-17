const Internship = require("../models/Internship");
const User = require("../models/User");
const session = require('express-session');
const router = require("express").Router();
const path = require('path');

var sess;
router.get("/profile", (req, res) => {
    sess = req.session.isCompany;

    if(!sess)
        res.sendFile(path.join(__dirname + "/../../client/user/user.html"));
    else
        res.sendFile(path.join(__dirname+'/../../client/com/com.html'));
});

router.get("/profile-data", async (req, res) => {
    // if(!req.session._id) {
    //     res.status(401).send();
    //     return;
    // }
   console.log(req.session);

    const profileData = await User.findOne(
        {
            _id: req.session._id
        }
    );

    res.send(profileData);
});

router.put("/update", async (req, res) => {
    let id = req.session._id;
    console.log(id);
    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            //req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        if(!updatedUser)
        console.log("A aparut o eroare");
        else
        res.status(200).json("Profilul a fost actualizat cu succes!");
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