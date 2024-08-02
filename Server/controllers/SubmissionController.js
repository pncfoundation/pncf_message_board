const { Submission } = require("../models");
const { handleError } = require('./errorHandler');

module.exports = {
    async createSubmission(req, res) {
        try {
            await Submission.create(req.body);
            res.status(200).send({ message: "Thank you. The PNCF will review your submission soon." });
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
                res.status(404).send();
                return;
            }

            res.status(200).send({ message: "Submission was deleted." });
        } catch (error) {
            handleError(res, error);
        }
    },

    async getAllSubmissions(req, res) {
        try {
            const submissions = await Submission.findAll();

            if (!submissions) {
                res.status(404).send();
                return;
            }

            res.status(200).send({ submissions: submissions });
        } catch (error) {
            handleError(res, error);
        }
    }
}