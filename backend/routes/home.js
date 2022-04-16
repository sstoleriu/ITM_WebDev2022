const router = require("express").Router();
const path = require('path');

var sess;
router.get("/", (req, res) => {
    sess = req.session;
    if(sess._id){
        res.redirect("/user/profile");
    }
    else
        res.redirect("/auth/login");
});

router.get("/logout", (req,res) => {
    req.session.destroy((err) => {
        if(err){
            res.send(err)
        }
    });
    res.redirect("/")
});

module.exports = router;