const router = require("express").Router();
const user = require("../models/User");
const path = require('path');
const session = require('express-session');
const CryptoJS = require("crypto-js");
//REGISTER

router.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname+'/../../client/register/register.html'));
});

router.get("/login", (req, res)=>{
    res.sendFile(path.join(__dirname+'/../../client/login/login.html'));
});

router.post("/register", async (req, res) => {
    console.log("Request:", req.body);
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
        console.log(err)
    }
});


//LOGIN
router.post('/login', async (req, res) => {
    try{
        
        console.log("Request body", req.body);

        const newUser = await user.findOne(
            {
                userEmail: req.body.username
            }
        );
        

        const hashedPassword = CryptoJS.AES.decrypt(
            newUser.password,
            process.env.PASS_SEC
        );


        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        const inputPassword = req.body.password;    
        
        if (!newUser){
            res.status(401).json("Wrong Email");
        } else if(originalPassword != inputPassword) {
            res.status(401).json("Wrong Password");
        } else {
            res.status(201).send("OK");
        }

        console.log("Ajuns la final");

    }catch(err){
        console.log(err);
        res.status(500).json(err);
        //res.send(err);
    }

});

module.exports = router;