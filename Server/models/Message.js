const { DataTypes } = require("sequelize");
const { MessageBoard } = require("../databases");

const Message = MessageBoard.define("Message",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
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

module.exports = Message;