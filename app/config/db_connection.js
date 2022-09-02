const mongoose = require('mongoose');
const config = require('../config/config');
const username = config.db.user;
const password = config.db.password;
const dbname = config.db.db;
const port = config.db.port;

mongoose.connect(
    `mongodb://dm_db:27017/dm_db?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });

  module.exports = db;