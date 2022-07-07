//import sequelize constructor
const Sequelize = require('sequelize');

// create connection to the database, pass info for username and password
const sequelize = new Sequelize('music_soundscape_db', 'username', 'password',{
host: 'localhost',
dialect: 'mysql',
port: 3306
});
module.exports = sequelize;