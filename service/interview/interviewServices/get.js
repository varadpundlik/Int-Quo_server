const db = require("../../../models/index");

const all = async () => {
  return await db.Interview.findAll({ include: { all: true } });
};

const byId = async (id) => {
  return await db.Interview.findAll({ where: { id } });
};

const byEmail = async (email) => {
  return await db.Interview.findOne({ where: { email } });
};

module.exports = {
  all,
  byId,
  byEmail,
};
