const { DataTypes } = require("sequelize");
const { localMessageBoard } = require("../databases");
const Admin = require("./Admin");

const Log = localMessageBoard.define("Log",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        action: {
            type: DataTypes.STRING,
            allowNull: false
        },

        adminId: {
            type: DataTypes.INTEGER,
            references: {
                model: Admin,
                key: 'id',
            }
        }
    },

    {
        timestamps: false,
        modelName: "Log",
    }
);

module.exports = Log;