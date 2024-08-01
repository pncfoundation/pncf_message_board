/*
    This file contains all the url paths the server can respond to. It uses the functions/methods defined in each models'
    controller file. It then exports it to server.js to be used with the app.
*/

const adminController = require('./controllers/AdminController');
const logController = require('./controllers/LogController');
const messageController = require('./controllers/MessageController');
const submissionController = require('./controllers/SubmissionController');

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

    app.post('/logs/create', logController.create);
    app.post('/logs/getGroup', logController.getGroup);
    app.get('/logs/count', logController.getCount)
    // app.get('/logs/getAll', logController.getAll);

    app.post('/messages/create', messageController.createMessage);
    app.post('/messages/modify', messageController.modifyMessage);
    app.post('/messages/getByGroup', messageController.getMessageGroup);
    app.delete('/messages/delete', messageController.deleteMessage);
    app.get('/messages/getAll', messageController.getAllMessages);

    app.post('/submissions/create', submissionController.createSubmission);
    app.delete('/submissions/delete', submissionController.deleteSubmission);
    app.get('/submissions/getAll', submissionController.getAllSubmissions);
}