"use strict";

const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
const dbConfig = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
  );
  mongoose.set('useCreateIndex',true);

  mongoose.connection.once("open", () => {
    console.log("Connected to Database(MLAB)");
  });
};

module.exports = {
  dbConfig
};
