/*
    This file contains the objects for the databases. The databases themselves are created in MySQL. The server utilizes
    Sequelize to parse and handle requests for MySQL databases. It also helps simplify the process for creating database
    models and controllers for which to make requests with.

    *-- Ultimately, this file is used only to log in and connect to the databases. Ensure you properly export the database
    object at the end so that server.js can use them to make requests. --*

    This comment "noinspection JSUnusedLocalSymbols" is used to stop the IDE from checking if the const or variable is
    utilized or not. EX: The localMessageBoard is not used by server.js as it is just an example or can be used in the
    future for development testing, but it is annoying for the IDE to warn us about it each time we want to commit or push
    this file.
*/
const Sequelize = require('sequelize');

// The username & password are environment variables either in a .env or in the DigitalOcean droplet settings.
const localMessageBoardUsername = process.env.localMessageBoardUsername;
const localMessageBoardPassword = process.env.localMessageBoardPassword;
const messageBoardUsername = process.env.messageBoardUsername;
const messageBoardPassword = process.env.messageBoardPassword;
// ----------------------------------------------------------------------------------------------------------
/*
    This is how to create a database object the server will use to connect to.
    This one uses the localhost server if you are testing and have the database on your computer.
*/
// noinspection JSUnusedLocalSymbols
const localMessageBoard = new Sequelize('messageBoard', localMessageBoardUsername, localMessageBoardPassword, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: false,
            rejectUnauthorized: false,
        }
    },
    logging: false
});
// ----------------------------------------------------------------------------------------------------------
/*
    This is for the actual database.
    Create the database connection object
*/
const MessageBoard = new Sequelize('PNCF_Board', messageBoardUsername, messageBoardPassword, {
    host: 'pncf-wellness-board-db-do-user-17268507-0.m.db.ondigitalocean.com',
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    },
    logging: false,
    port: 25060
});
// ----------------------------------------------------------------------------------------------------------
/*
    Functions to check the connection to the databases. Ideally, handle the errors in a way so that the user on the
    web application is notified that the servers are down and so that PNCF can have someone take a look as to why its down.

    database.sync() : Uses all the controllers and models to ensure that they database objects matches what we have here.
        If something is missing the database, it will automatically update it.
        ** Warning: This causes 1 extra query for each controller/model which will rack up as monetary costs on Digital Ocean**

    database.authenticate() : Use this one for production. It simply checks if the server can connect and utilize the db.
*/

const dbFunctions = {
    async initLocalMessageBoard() {
        try {
            await localMessageBoard.sync();
            console.log("Local database is synced.");
        } catch (error) {
            console.error("--------------- Unable to connect to local database ---------------\n", error);
        }
    },

    async initMessageBoard() {
        try {
            await MessageBoard.authenticate()
                .then(() => console.log("Database Authenticated"))
                .catch(error => console.log("Unable to authenticate:", error));
            await MessageBoard.sync()
                .then(() => console.log("Database Synced"))
                .catch(error => console.log("Unable to sync:", error));
        } catch (error) {
            console.error("--------------- Unable to connect to message board database ---------------\n", error);
            // Change this error handler
        }
    }
}
// ----------------------------------------------------------------------------------------------------------

/*
    - Properly export databases objects or functions here.
    - localMessageBoard & messageBoard are used in models/controllers
    - dbFunctions is used in server.js to sync or check connection to the databases
*/
module.exports = {
    localMessageBoard,
    MessageBoard,
    dbFunctions
}