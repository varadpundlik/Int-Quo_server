const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

module.exports = {
  url: process.env.POSTGRES_URL_NO_SSL,
  host: process.env.POSTGRES_HOST || "localhost",
  user: process.env.POSTGRES_USER || "postgres",
  password: process.env.POSTGRES_PASSWORD || "postgres",
  database: process.env.POSTGRES_DATABASE || "intQuo",
  dialect: process.env.dialect || "postgres",
  port: process.env.port || "5432",
  secret: process.env.secret || "jayshreeram",
};
