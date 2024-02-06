const root=require("./root/index.js");

const routes = (app) => {
  app.use("/", root);
};

module.exports = routes;
