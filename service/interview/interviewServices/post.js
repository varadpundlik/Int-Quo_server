const db = require("../../../models/index");

const create = async (user) => {
  return await db.Interview.create(user);
};

module.exports = {
  create,
};
