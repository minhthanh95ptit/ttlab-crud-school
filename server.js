const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const School = require('./models/School')

const db = require('./config/dbConnect');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

db.sequelize.sync();

School.findAll({})
.then(data =>{
    console.log(data);
})
.catch(err =>{
    console.log(err);
})

app.listen(3000, (req, res) =>{
    console.log('RUNNING...')
})
