// Dependencies
const express = require("express");
const expressHandlebars = require("express-handlebars");

//missing dependencies err
const path = requir("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./config/connection");
const controllers = require("./controllers");
// Import the custom helper methods
const helpers = require("./utils/helpers");
// Incorporate the custom helper methods: ./utils/helpers.js
const handlebars = expressHandlebars.creat({ helpers });

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
    secret: ...,
    cookie: {
        //Note: in milliseconds (86,400,000 === 1 day)
        //57600000 = 16 hours
    

//setup handlebars with express


//allow api to use json and url encoding
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//set public folder

// Sets up the routes
app.use(controllers);


// begin listening with sequelize for db connection
//Note: "force start should be false if using 'npm run seed' to populate and create db as it will recreate tables each server reload"
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now listening: " + PORT));
});
