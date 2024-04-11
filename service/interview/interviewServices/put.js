const db = require("../../../models/index");

const byId = async (id, user) => {
  return await db.Interview.update(user, { where: { id } });
};

module.exports = {
  byId,
};
