const router = require("express").Router();
const user = require("../models/User");
const com = require("../models/company");
const path = require('path');
const session = require('express-session');
var sess;

//REGISTER

router.get("/register", (req, res)=>{
    res.sendFile(path.join(__dirname+'/../../client/register/register.html'));
});

router.get("/login", (req, res)=>{
    sess = req.session._id;
    if(!sess)
        res.sendFile(path.join(__dirname+'/../../client/login/login.html'));
    else
        res.redirect('/user/profile');  
});

router.post("/register", async (req, res) => {
    console.log("Request:", req.body);

    if (req.body.isCompany){
        const newCom = new com({
            name: req.body.username,
            password: req.body.password,
            isCompany: req.body.isCompany
            });

    } else {
        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            isStudent: !req.body.isCompany
            });
    }

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
                email: req.body.email
            }
        );

        console.log("User gasit:", newUser);

        inputPassword = req.body.password;
        if (!newUser){
            res.status(401).json("Wrong Email");
            console.log("we")
        } else if(newUser.password != inputPassword) {
            res.status(401).json("Wrong Password");
            console.log("wp")
        } else {
            req.session._id = newUser._id;
            req.session.isCompany = newUser.isCompany;
            res.status(201).send("OK");
            console.log("ok")
        }

        console.log("Ajuns la final");

    } catch(err){
        console.log(err);
        res.status(500).json(err);
        //res.send(err);
    }
});

module.exports = router;