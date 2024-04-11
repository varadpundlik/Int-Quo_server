const {
  getInterviewService,
  postInterviewService,
  putInterviewService,
  deleteInterviewService,
} = require("../../service/interview/index");

const {
  getQestionService,
  postQuestionService,
} = require("../../service/question/index");

const getAllInterview = async (req, res) => {
  try {
    const result = await getInterviewService.all();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getInterviewById = async (req, res) => {
  try {
    const result = await getInterviewService.byId(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const createInterview = async (req, res) => {
  try {
    const interview = { ...req.body };
    interview.candidate_id = req.user.id;
    const result = await postInterviewService.create(interview);
    const questions = interview.questions;
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      question.interview_id = result.id;
      await postQuestionService.create(question);
    }
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const putInterview = async (req, res) => {
  try {
    const result = await putInterviewService.byId(req.params.id, req.body);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteInterview = async (req, res) => {
  try {
    const result = await deleteInterviewService.byId(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllInterview,
  getInterviewById,
  createInterview,
  putInterview,
  deleteInterview,
};
