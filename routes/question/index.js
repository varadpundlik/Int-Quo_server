const express = require('express');
const router = express.Router();

const questionController = require('../../controllers/question/index');
const auth = require('../../middleware/auth');

router.get('/', questionController.getAllQuestion);
router.get('/company/:id', questionController.getQuestionByCompanyId);
router.get('/topic/:id', questionController.getQuestionByTopicId);
router.get('/college/:id', questionController.getQuestionByCollegeId);  
router.get('/:id', questionController.getQuestionById);

module.exports = router;