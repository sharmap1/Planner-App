const express = require("express");
const PORT = process.env.PORT || 4000;
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// Define middleware here
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// connect to Mongo DB
mongoose.connect(
  // TODO- set up mlab on heroku and replace credentials below
  process.env.MONGODB_URI ||
  // set up connection to local mongodb
  "mongodb://localhost/todo" ||
  // set up connection to mlab database on heroku
  "mongodb://project3:password1@ds263808.mlab.com:63808/heroku_zk6k9vvd",
  { useNewUrlParser: true }
);
// connect and use router
const routes = require("./Routes/routes");
app.use("/", routes);
//PORT listening on
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
