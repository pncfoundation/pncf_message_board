/*
    The server.js file runs the server (obviously). This handles connecting to the database and any requests the web application makes to it.
    It also, however, helps run the web application itself.
*/


/*
    require database objects : Use "const 'dbName'" for single databases. If you add another,
    create a seperate object for that database in the databases.js file. Then use "const {'dbName1', 'dbName2'} to import them.
    Ensure you also properly export the database objects within the database.js file as well.
*/


// Import server dependencies
const { localMessageBoard } = require('./databases');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Use the dependencies
app.use(bodyParser.json());
app.use(cors());

// Require routes.js for url paths
require('./routes')(app);

// Dist is the directory within client where the built web app is
app.use(express.static(path.join(__dirname, 'dist')));

// Use cors to allow web application to use https requests/methods
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type');
    next();
});

/*
    Vue.js creates a single page application (SPA). This means that the whole web application runs off a single HTML file. Instead, VueJS
    uses JavaScript to render the content on the page. This dramatically reduces the lag between fetching and loading a new html file.
    This also means we need our server to only the one index.html file for whatever link the user requests.
*/
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Main function to connect databases and start server
async function main() {
    try {
        await localMessageBoard.sync();

        app.listen(8081, () => {
            console.log(`Server is running at http://localhost:8081`);
        });
    } catch (error) {
        console.log("----------- Unable to connect to databases -----------\n, error");
    }
}

main().then(() => {
    console.log("Server and Databases Connected");
})