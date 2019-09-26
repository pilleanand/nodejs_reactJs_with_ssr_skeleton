"use strict";
const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
  name: { type: String },
  details: { type: String }
},
  {
    timestamps: true
  });

const About = mongoose.model('about', aboutSchema);
module.exports = About;