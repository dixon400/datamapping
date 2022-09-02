const express  = require('express');
const router = express.Router();
const config = require('./app/config/config');
const mongoose = require('mongoose');
const db = require('./app/config/db_connection');
db

const port = config.app.port;
const app = express()
app.use(router);





app.listen(port, ()=>{
    console.log(`Port running on ${port}`);
})