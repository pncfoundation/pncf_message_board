/*
    This file contains all the url paths the server can respond to. It uses the functions/methods defined in each models'
    controller file. It then exports it to server.js to be used with the app.
*/

module.exports = (app) => {
    // Test Route
    app.get('/test', (req, res) => {
        res.send("Hello!");
    });


}