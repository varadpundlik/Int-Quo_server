const db = require("../../../models/index");

const all = async () => {
    console.log(db.User);
  return await db.User.findAll({ include: { all: true } });
};

const byId = async (id) => {
  return await db.User.findAll({ where: { id } });
};

const byEmail = async (email) => {
  return await db.User.findOne({ where: { email } });
};

module.exports = {
  all,
  byId,
  byEmail,
};
