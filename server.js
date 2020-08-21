import express from 'express';
import bodyParser from 'body-parser';

import db from './config/dbConnect';
import schoolRouter from './src/components/school/schoolRouter'

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

db.sequelize.sync();

app.use('/api/school', schoolRouter);

app.listen(3000, (req, res) =>{
    console.log('RUNNING...')
})
