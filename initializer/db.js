const Sequelize = require("sequelize");
const config = require("../config");

console.log(config);

const sequelize = new Sequelize(config.database, config.user, config.password, {
  host: config.host,
  dialect: config.dialect,
  port: config.port,
  logging: console.log,
});

module.exports = sequelize;
