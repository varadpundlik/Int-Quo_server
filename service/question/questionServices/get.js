const db = require("../../../models/index");

const all = async () => {
    return await db.Question.findAll();
};

const byId = async (id) => {
    return await db.Question.findByPk(id);
};

const byTopic = async (topic) => {
    return await db.Question.findAll({ where: { topic } });
};

const byCompany = async (company) => {
    return await db.Question.findAll({ where: { company } });
};

const byCollege = async (college) => {
    return await db.Question.findAll({ where: { college } });
};

module.exports = {
    all,
    byId,
    byTopic,
    byCompany,
    byCollege
};