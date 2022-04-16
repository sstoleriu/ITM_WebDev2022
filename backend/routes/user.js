const router = require("express").Router();
const path = require('path');

router.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname + "/../../client/user/user.html"));
});

module.exports = router;