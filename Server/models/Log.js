const { DataTypes } = require("sequelize");
const { localMessageBoard } = require("../databases");

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
            defaultValue: DataTypes.NOW,
        },

        action: {
            type: DataTypes.STRING,
            allowNull: false
        },

        admin: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "Log",
    }
);

module.exports = Log;