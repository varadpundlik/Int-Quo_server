const db = require("../../../models/index");

const create = async (question) => {
    return await db.Question.create(question);
};

module.exports = {
    create
};