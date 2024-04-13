const Sequelize = require("sequelize");
const config = require("../config");

console.log(config);

const sequelize = new Sequelize(config.url, {
  dialect: config.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
  port: config.port,
  logging: false,
});


module.exports = sequelize;
