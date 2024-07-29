const { DataTypes } = require("sequelize");
const { localMessageBoard } = require("../databases");

const Submission = localMessageBoard.define("Submission",
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

        message: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "Message",
    }
);

module.exports = Submission;