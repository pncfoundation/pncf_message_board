/*
    This file contains all the url paths the server can respond to. It uses the functions/methods defined in each models'
    controller file. It then exports it to server.js to be used with the app.
*/

const adminController = require('./controllers/AdminController');

module.exports = (app) => {
    // Test Route
    app.get('/test', (req, res) => {
        res.send("Hello!");
    });

    app.post('/admins/create', adminController.create);
    app.post('/admins/authenticate', adminController.authenticate);
    app.put('/admins/super', adminController.grantSuper);
    app.put('/admins/revoke', adminController.revokeSuper);
    app.get('/admins/getAll', adminController.getAll);
    app.delete('/admins/delete', adminController.delete);
}