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
                res.status(401).send();
                return;
            }

            const admin = await Admin.findByPk(id);

            const deleted = await Admin.destroy({
                where: {
                    id: id
                }
            });

            if(!deleted || deleted === 0) {
                res.status(404).send();
                return;
            }

            res.status(200).send({
                message: `Admin has been deleted`,
                admin_name: admin.name
            });
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
                res.status(404).send();
                return;
            }

            if(admin.password !== password) {
                res.status(401).send();
                return;
            }

            res.status(200).send({
                message: "Authentication Successful.",
                superUser: admin.superUser,
                name: admin.name,
                admin_id: admin.id
            });
        } catch (error) {
            handleError(res, error);
        }
    },

    async grantSuper(req, res) {
        try {
            const { id } = req.body;

            if(id === 1) {
                res.status(401).send();
            }

            const admin = await Admin.findByPk(id);
            if(!admin) {
                res.status(404).send();
                return;
            }

            await admin.update({
                superUser: true
            });

            res.status(200).send({
                message: `${admin.name} has been elevated to super user!`,
                admin_name: admin.name
            });
        } catch (error) {
            handleError(res, error);
        }
    },

    async revokeSuper(req, res) {
        try {
            const { id } = req.body;

            if (id === 1) {
                res.status(401).send();
                return;
            }

            const admin = await Admin.findByPk(id);

            if(!admin) {
                res.status(404).send();
                return;
            }

            await admin.update({
                superUser: false
            });

            res.status(200).send({
                message: `${admin.name}'s super user privileges have been revoked!`,
                admin_name: admin.name
            });
        } catch (error) {
            handleError(res, error);
        }
    },

    async addCommit(req, res) {
      try {
          const { id } = req.body;
          const admin = await Admin.findByPk(id);

          if(!admin) {
              res.status(404).send();
              return;
          }

          await admin.update({
              commits: admin.commits + 1
          })

          res.status(200).send({ message: `${admin.name} has ${admin.commits} commits` });
      } catch (error) {
        handleError(res, error);
      }
    },

    async getAll(req, res) {
        try {
            console.log("Attempting");
            const admins = await Admin.findAll({
                attributes: { exclude: ['username', 'password'] }
            });
            console.log("Retrieved");
            res.status(200).send({ adminList: admins });
            console.log("Sent");
        } catch (error) {
            console.log("Error Occurred");
            console.error("Database Error: ", error);
            handleError(res, error);
        }
    }
}