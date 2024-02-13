const user = require("./user/index.js");
const sequelize = require("../initializer/db.js");
const { DataTypes } = require("sequelize");

const db = {};

function connectModels() {
  db.user = user(sequelize, DataTypes);
}

connectModels();
db.sequelize = sequelize;

module.exports = db;
