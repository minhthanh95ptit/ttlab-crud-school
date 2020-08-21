const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const School = require('./models/School')

const db = require('./config/dbConnect');

const schoolRouter = require('./src/components/school/schoolRouter')

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

db.sequelize.sync();

app.use('/api/school', schoolRouter);

app.listen(3000, (req, res) =>{
    console.log('RUNNING...')
})
