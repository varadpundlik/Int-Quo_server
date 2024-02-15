const root=require("./root/index.js");
const user=require("./user/index.js");

const routes = (app) => {
  app.use("/", root);
  app.use("/user", user);
};

module.exports = routes;
