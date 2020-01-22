"use strict";
// TODO: use uuid version 1 to create id's for all the tasks entered to be stored in mongoose
// const uuidv1 = require('uuid/v1');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  task: {
    type: String,
    required: true
  },
  done: Boolean,
  id_: {
    type: String,
    required: true
  }
});

const TODO = mongoose.model("todo", todoSchema);
module.exports = TODO;
