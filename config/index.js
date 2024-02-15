const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  host: process.env.host || "localhost",
  user: process.env.user || "postgres",
  password: process.env.password || "postgres",
  database: process.env.database || "intQuo",
  dialect: process.env.dialect || "postgres",
  port: process.env.port || "5432",
  secret: process.env.secret || "jayshreeram",
};
