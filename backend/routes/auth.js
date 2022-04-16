const router = require("express").Router();
const user = require("../models/User");
const path = require('path');
const CryptoJS = require("crypto-js");
//REGISTER

router.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname+'/../../client/register/register.html'));
});

router.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname+'/../../client/login/login.html'));
});

router.post("/register", async (req, res) => {
    const newUser = new user({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
          ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json(err);
        console.log("aoleu")
    }
});


//LOGIN
router.post('/login', async (req, res) => {
    try{
        const user = await User.findOne(
            {
                userEmail: req.body.email
            }
        );

        !user && res.status(401).json("Wrong Email");

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;
        
        originalPassword != inputPassword && 
            res.status(401).json("Wrong Password");


    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;