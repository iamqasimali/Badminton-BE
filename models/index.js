const sequelize = require("../bin/dbConnection");

const users = require("./definitions/users");
// const tasks = require("./definitions/tasks");
// const products = require("./definitions/products");
// const sessions = require("./definations/sessions");

const models = { users};

// Relations
// users.hasMany(tasks, { foreignKey: "userID" });
// tasks.belongsTo(users, { foreignKey: "userID" });

// users.hasOne(sessions, { foreignKey: "userID" });
// sessions.belongsTo(users, { foreignKey: "userID" });

const db = {};

db.sequelize = sequelize;
sequelize.models = models;

module.exports = { db, models };
