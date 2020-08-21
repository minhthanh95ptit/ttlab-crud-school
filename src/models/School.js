'use strict';
const db = require('../../config/dbConnect')
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

let School = sequelize.define('Schools', {
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING,
    description: Sequelize.STRING
});

export default School;