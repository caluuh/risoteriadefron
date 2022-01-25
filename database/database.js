const sequelize = require("sequelize");

const connection = new sequelize('risoteria','root','calU*2803', { 
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;