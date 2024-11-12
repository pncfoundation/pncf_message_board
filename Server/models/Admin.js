const { DataTypes } = require("sequelize");
const { MessageBoard } = require("../databases");

const Admin = MessageBoard.define("Admin",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        superUser: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },

        commits: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },

    {
        timestamps: false,
        modelName: "Admin",
    }
);

module.exports = Admin;