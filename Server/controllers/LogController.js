const { Log, Admin} = require('../models');
const { handleError } = require('./errorHandler');

module.exports = {
    async create(req, res) {
        try {
            const { adminId } = req.body;
            const admin = await Admin.findByPk(adminId);

            if(!admin) {
                req.body.adminId = null;
            }

            const log = await Log.create(req.body);
            res.status(200).send(log);
        } catch(error) {
            handleError(res, error);
        }
    },

    async getGroup(req, res) {
        try {
            const { group } = req.body;
            const limit = 20;
            const offset = (group - 1) * limit;

            const logs = await Log.findAll({
                include: [{
                    model: Admin,
                    attributes: ["name"]
                }],

                limit: limit,
                offset: offset,
                order: [['id', 'DESC']]
            });

            const formattedLogs = logs.map(log => {
                const logData = log.toJSON();
                logData.adminName = logData.Admin ? logData.Admin.name : "Unknown";
                delete logData.Admin;
                return logData;
            });

            res.status(200).send(formattedLogs);
        } catch(error) {
            handleError(res, error);
        }
    },

    /* Don't use this one ever. This was for early testing
    async getAll(req, res) {
        const logs = await Log.findAll({
            include: [{
                model: Admin,
                attributes: ["name"]
            }],
            attributes: {
                exclude: ["adminId"]
            },
            order: [['id', 'DESC']]
        });

        const formattedLogs = logs.map(log => {
            const logData = log.toJSON();
            logData.name = logData.Admin.name;
            delete logData.Admin;
            return logData;
        });

        res.status(200).send(formattedLogs);
    }
    */
}