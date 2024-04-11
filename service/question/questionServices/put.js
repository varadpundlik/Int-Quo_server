const db = require("../../../models/index");

const update = async (id, question) => {
    return await db.Question.update(question, { where: { id } });
}

module.exports = {
    update
};