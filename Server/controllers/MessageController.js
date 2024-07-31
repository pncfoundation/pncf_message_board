const { Message} = require('../models');
const { handleError } = require('./errorHandler');

module.exports = {
    // Create a new message using json body
    async createMessage(req, res) {
        try {
            await Message.create(req.body);
            res.status(200).send({ message: "Message added to message board." });
        } catch (error) {
            handleError(res, error);
        }
    },

    // Find message by id and delete
    async deleteMessage(req, res) {
        try {
            const deletedCount = await Message.destroy({
                where: {
                    id: req.body.id
                }
            });

            // If no message are deleted, throw a notFound error
            if(!deletedCount || deletedCount === 0) {
                throw { type: 'notFound', message: 'No message found to delete.' };
            }

            res.status(200).send({ message: `Deleted: ${deletedCount} messages.` });
        } catch (error) {
            handleError(res, error);
        }
    },

    // Find message by id and modify
    async modifyMessage(req, res) {
        try {
            const { id, message } = req.body;
            const messageDB = await Message.findByPk(id);
            // If message does not exist, throw a not found error
            if (!messageDB) {
                throw { type: 'notFound', message: 'No message found.' };
            }

            await messageDB.update({
                message: message
            });

            res.status(200).send({ message: `Message has been updated.` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async getMessageGroup(req, res) {
        try {
            const { group } = req.body;
            const limit = 20;
            const offset = (group - 1) * limit;

            const messages = await Message.findAll({
                limit: limit,
                offset: offset,
                order: [['id', 'DESC']]
            });

            res.status(200).send({ messages: messages });
        } catch(error) {
            handleError(res, error);
        }
    },

    /* Don't use this one ever. This was for early testing */
    async getAllMessages(req, res) {
        const messages = await Message.findAll({
            order: [['id', 'DESC']]
        });

        res.status(200).send({ messages: messages });
    }
}