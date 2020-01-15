const express = require("express");
const PORT = process.env.PORT || 4000;
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
// Define middleware here
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};
// connect to Mongo DB
mongoose.connect(
  // TODO- set up mlab on heroku and replace credentials below
  process.env.MONGODB_URI || "mongodb://user:password1@ds035310.mlab.com:35310/heroku_mmkdvd75",
  { useNewUrlParser: true }
);
// to let us know database connection established
connection.once('open', () => {
  console.log("----MongoDB database connection established successfully!----")
});
// connect and use router
const routes = require('./Routes/routes');
app.use('/', routes);
//PORT listening on 
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
