const { Settings } = require("../models");
const { handleError } = require('./errorHandler');

module.exports = {
    async createSetting(req, res) {
        try {
            const setting = await Settings.create(req.body);
            res.status(200).send({ message: `New Setting: Board Status: ${setting.messageBoardActive}` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async getSettings(req, res) {
        try {
            const setting = await Settings.findOne({
                order: [['id', 'DESC']] // Most recent
            });
            // const setting = await Settings.findByPk(1);

            if(!setting) return res.status(404).send('No such settings found');

            return res.status(200).send(setting);
        } catch (error) {
            handleError(res, error);
        }
    },

    async updateBoardStatus(req, res) {
        try {
            const settings = await Settings.findOne({
                order: [['id', 'DESC']] // Most recent
            });

            if(!settings) return res.status(404).send('No such settings found');

            const { boardSetting } = req.body;

            await settings.update({
                messageBoardActive: boardSetting
            });

            res.status(200).send({
                message: boardSetting ? 'Message Board Active' : 'Message Board Disabled',
            });
        } catch (error) {
            handleError(res, error);
        }
    }
}