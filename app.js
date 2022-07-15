var mongoose = require("mongoose");
require("dotenv").config();
var express = require("express");
const cookies = require("cookie-session");
var cors = require("cors");
var app = express();

const corsOptions = {
  origin: "*",
};
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cors(corsOptions));
// connect to db
const username = process.env.WP_USERNAME;
const password = process.env.WP_PASSWORD;
const cluster = process.env.WP_CLUSTER;
const dbname = process.env.WP_DATABASE;

const uri = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((err) => console.log(err));
//end

const membershipRoute = require("./routes/membership");
const facilitiesRoute = require("./routes/facilities");
const reservationsRoute = require("./routes/reservations");
const userRoute = require("./routes/user");
app.use(membershipRoute);
app.use("/facility", facilitiesRoute);
app.use("/reservation", reservationsRoute);
app.use(userRoute);

app.use("/test", (req, res) => {
  res.send("It works!'");
});

module.exports = app;
