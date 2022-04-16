const { Console } = require('console');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const session = require('express-session');
dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Baza de date s-a conectat!"))
    .catch((err) => {
        console.log(err);
    });

    app.use(session({secret: 'papuc'}));
    app.use(cors());
    app.use(express.json());
    app.use("/api/user", userRoute); 
    app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Serverul de backend ruleaza")
});