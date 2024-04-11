const db = require("../../../models/index");

const byId = async (id) => {
    return await db.Question.destroy({ where: { id } });
};

module.exports = {
    byId
};