const express = require('express');
const router = express.Router();

const questionController = require('../../controllers/question/index');
const auth = require('../../middleware/auth');

router.get('/', questionController.getAllQuestion);
router.get('/company/:company', questionController.getQuestionByCompanyId);
router.get('/topic/:topic', questionController.getQuestionByTopicId);
router.get('/college/:college', questionController.getQuestionByCollegeId);  
router.get('/:id', questionController.getQuestionById);

module.exports = router;