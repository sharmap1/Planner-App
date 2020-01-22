// Importing Modules
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
//Define Global Variables
const app = express();
const PORT = process.env.PORT || 4000;
//Importing Files
const routes = require("./Routes");

// connect to Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/todo", {
  useNewUrlParser: true
});
// Configuration
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", routes);
// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "Client", "build", "index.html")); //relative path
  });
}

//PORT list ening on
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
