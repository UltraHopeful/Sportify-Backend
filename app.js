var mongoose = require('mongoose');
require('dotenv').config();
var express = require('express');
var app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())


// connect to db
const username = process.env.WP_USERNAME;
const password = process.env.WP_PASSWORD;
const cluster = process.env.WP_CLUSTER;
const dbname = process.env.WP_DATABASE;

const uri= `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri, {
    serverSelectionTimeoutMS: 5000
  }).catch(err => console.log(err));
//end


const membershipRoute = require("./routes/membership");
app.use(membershipRoute);

app.use("/test",(req,res) => {
    res.send("It works!'")
})

module.exports = app;
