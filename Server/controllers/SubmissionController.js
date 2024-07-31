const { Submission } = require("../models");
const { handleError } = require('./errorHandler');

module.exports = {
    async createSubmission(req, res) {
        try {
            await Submission.create(req.body);
            res.status(200).send("Thank you. The PNCF will review your submission soon.");
        } catch (error) {
            handleError(res, error);
        }
    },

    async deleteSubmission(req, res) {
        try {
            const deletedSubmissions = await Submission.destroy({
                where: {
                    id: req.body.id
                }
            });

            if (!deletedSubmissions || deletedSubmissions === 0) {
                throw { type: 'notFound', message: 'No Submission found to delete.' };
            }

            res.status(200).send(`Deleted ${deletedSubmissions} submission`);
        } catch (error) {
            handleError(res, error);
        }
    },

    async getAllSubmissions(req, res) {
        try {
            const submissions = await Submission.findAll();

            if (!submissions) {
                throw { type: 'notFound', message: 'No submissions found.' };
            }

            res.status(200).send(submissions);
        } catch (error) {
            handleError(res, error);
        }
    }
}