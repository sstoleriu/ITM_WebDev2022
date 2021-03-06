const router = require("express").Router();
const path = require('path');

var sess;
// router.get("/", (req, res) => {
//     sess = req.session;
//     if(sess._id){
//         res.redirect("/");
//     }
//     else
//         res.redirect("/auth/login");
// });


router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname+'/../../client/index.html'));
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