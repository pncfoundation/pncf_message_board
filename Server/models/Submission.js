const { DataTypes } = require("sequelize");
const { MessageBoard } = require("../databases");

const Submission = MessageBoard.define("Submission",
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
            allowNull: false
        },

        message: {
            type: DataTypes.TEXT("medium"),
            allowNull: false
        }
    },

    {
        timestamps: false,
        modelName: "Message",
    }
);

module.exports = Submission;