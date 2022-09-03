const express  = require('express');
const router = express.Router();
const config = require('./app/config/config');
const mongoose = require('mongoose');
const db = require('./app/config/db_connection');
db

const port = config.app.port;
const app = express()
app.use(express.json());
app.use(router);
require('./app/routes/index')(app);

app.get('/', (req, res)=>{
    return res.status(200).json("Data mapping is live")
})
app.listen(port, ()=>{
    console.log(`Port running on ${port}`);
})