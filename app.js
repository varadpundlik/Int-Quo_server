const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());

routes(app);

try {
  app.listen(3000, () => {
    console.log("server is running at port 3000");
  });
} catch (err) {
  console.log(err);
}
