const express = require("express");
const routes = require("./routes");
const db = require("./models");

const app = express();

app.use(express.json());

routes(app);

async function createDBConnection() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

createDBConnection();
app.listen(5000, () => console.log("Server is running on port 5000"));
