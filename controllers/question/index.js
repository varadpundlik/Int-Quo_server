const {getQuestionService, postQuestionService} = require("../../service/question/index");

const getAllQuestion = async (req, res) => {
  try {
    const result = await getQuestionService.all();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

const getQuestionById = async (req, res) => {
  try {
    const result = await getQuestionService.byId(req.params.id);
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

const getQuestionByCompanyId = async (req, res) => {
  try {
    const result = await getQuestionService.byCompany(req.params.company);
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

const getQuestionByTopicId = async (req, res) => {
  try {
    const result = await getQuestionService.byTopic(req.params.topic);
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

const getQuestionByCollegeId = async (req, res) => {
  try {
    const result = await getQuestionService.byCollege(req.params.college);
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = {
  getAllQuestion,
  getQuestionById,
  getQuestionByCompanyId,
  getQuestionByTopicId,
  getQuestionByCollegeId
};