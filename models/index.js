const user = require("./user/index.js");
const interview = require("./interview/index.js");
const sequelize = require("../initializer/db.js");
const { DataTypes } = require("sequelize");

const db = {};

function connectModels() {
  db.User = user(sequelize, DataTypes);
  db.Interview = interview(sequelize, DataTypes);
  associateModels();
}

function associateModels() {
  db.User.associate(db);
  db.Interview.associate(db);
}
connectModels();
db.sequelize = sequelize;

module.exports = db;
