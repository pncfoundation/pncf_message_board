const { DataTypes } = require("sequelize");
const { localMessageBoard } = require("../databases");

const Message = localMessageBoard.define("Message",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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

module.exports = Message;