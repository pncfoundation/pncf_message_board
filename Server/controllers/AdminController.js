const { Admin } = require('../models');
const { handleError } = require('./errorHandler');

module.exports = {
    async create(req, res) {
        try {
            const newAdmin = await Admin.create(req.body);
            res.status(200).send({ message: `${newAdmin.name} has been added as an admin.` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async delete(req, res) {
        try {
            const { id } = req.body;

            if(id === 1) {
                throw { type: 'unauthorized', message: 'Dr.Butcher cannot be deleted.' };
            }

            const deleted = await Admin.destroy({
                where: {
                    id: id
                }
            });

            if(!deleted || deleted === 0) {
                throw { type: 'notFound', message: 'Admin does not exist.' };
            }

            res.status(200).send({ message: `Admin has been deleted` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async authenticate(req, res) {
        try {
            const { username, password } = req.body;

            const admin = await Admin.findOne({
                where: {
                    username: username
                }
            });

            if (!admin) {
                throw { type: 'notFound', message: 'No such user exists.' };
            }

            if(admin.password !== password) {
                throw { type: 'unauthorized', message: 'Password is incorrect.' };
            }

            res.status(200).send({ message: "Authentication Successful." });
        } catch (error) {
            handleError(res, error);
        }
    },

    async grantSuper(req, res) {
        try {
            const { username, password, id } = req.body;

            const user = await Admin.findOne({
                where: {
                    username: username
                }
            });
            if (!user || user.password !== password || user.superUser !== true) {
                throw { type: 'unauthorized', message: 'Could not grant super user privileges.' };
            }


            const admin = await Admin.findByPk(id);
            if(!admin) {
                throw { type: 'notFound', message: 'Could not get admin.' };
            }

            await admin.update({
                superUser: true
            });

            res.status(200).send({ message: `${admin.name} has been elevated to super user!` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async revokeSuper(req, res) {
        try {
            const { username, password, id } = req.body;

            const user = await Admin.findOne({
                where: {
                    username: username
                }
            });
            if (!user || user.password !== password || user.superUser !== true) {
                throw { type: 'unauthorized', message: 'Could not revoke super user privileges.' };
            }

            const admin = await Admin.findByPk(id);

            if(!admin  || id === 1) {
                throw { type: 'notFound', message: 'Could not get admin.' };
            }

            await admin.update({
                superUser: false
            });

            res.status(200).send({ message: `${admin.name}'s super user privileges have been revoked!` });
        } catch (error) {
            handleError(res, error);
        }
    },

    async getAll(req, res) {
        try {
            const admins = await Admin.findAll({
                attributes: { exclude: ['username', 'password'] }
            });
            res.status(200).send({ adminList: admins });
        } catch (error) {
            handleError(res, error);
        }
    }
}