const root = require("./root/index.js");
const user = require("./user/index.js");
const auth = require("./auth/index.js");
const interview = require("./interview/index.js");

const routes = (app) => {
  app.use("/", root);
  app.use("/auth", auth);
  app.use("/user", user);
  app.use("/interview", interview);
};

module.exports = routes;
