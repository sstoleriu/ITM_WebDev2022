const Internship = require("../models/Internship");
const user = require("../models/User");

const router = require("express").Router();
const path = require('path');

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
            userEmail: req.session.email
        }
    );

    res.status(200).send(profileData);
});

module.exports = router;