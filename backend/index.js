const { Console } = require('console');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const homeRoute = require("./routes/home");
const comRoute = require("./routes/company");
const matchingRoute = require("./routes/match");

const session = require('express-session');
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Baza de date s-a conectat!"))
    .catch((err) => {
        console.log(err);
    });

    app.use(session({
        secret: 'papuc',
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    }));
    app.use(cors());
    app.use(express.json());
    app.use("/com", comRoute); 
    app.use("/user", userRoute); 
    app.use("/auth", authRoute);
    app.use("/matching", matchingRoute);
    app.use("/", homeRoute);
    app.use(express.static('client'));

app.listen(process.env.PORT || 5000, () => {
    console.log("Serverul de backend ruleaza")
});