const db = require("../../../models/index");

const create = async (user) => {
  return await db.User.create(user);
};

module.exports = {
  create,
};
