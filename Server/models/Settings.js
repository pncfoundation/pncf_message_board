const { DataTypes } = require("sequelize");
const { MessageBoard } = require("../databases");

const Settings = MessageBoard.define("Settings",
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        messageBoardActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    },

    {
        timestamps: false,
        modelName: "Settings",
    }
);

module.exports = Settings;