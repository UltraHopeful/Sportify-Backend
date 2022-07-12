var mongoose = require('mongoose');
require('dotenv').config();
var express = require('express');
var app = express();
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json({limit: '10mb'}))
// app.use(express.bodyParser({limit: '10mb'}));


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
const facilitiesRoute = require("./routes/facilities");
const reservationsRoute = require("./routes/reservations");
app.use(membershipRoute);
app.use('/facility', facilitiesRoute);
app.use('/reservation', reservationsRoute);

app.use("/test",(req,res) => {
    res.send("It works!'")
})

module.exports = app;
