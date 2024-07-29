const Sequelize = require('sequelize');

const Admin = require('./Admin');
const Log = require('./Log');
const Message = require('./Message');
const Submission = require('./Submission');

Admin.hasMany(Log, { foreignKey: "adminId" });
Log.belongsTo(Admin, { foreignKey: "adminId" });

const index = {
    Admin,
    Log,
    Message,
    Submission
}

index.sequelize = Sequelize;

module.exports = index;

/*
    I used Sequelize to define each model in their respective JavaScript file. I provided their type and
    other optional parameters. I then imported them into this one index.js file to put them together.

    I defined the relationship between Admin and Log because Log has a field that will be a reference to
    the Admin table. I put them all into an object called Index and used sequelize to compile them. This
    is what I will be exporting to use in my controllers.
*/