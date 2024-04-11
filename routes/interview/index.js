const express = require('express');
const router = express.Router();

const interviewController = require('../../controllers/interview/index');
const auth = require('../../middleware/auth');

router.get('/', interviewController.getAllInterview);
router.get('/:id', interviewController.getInterviewById);
router.post('/', auth,interviewController.createInterview);
router.put('/:id', interviewController.putInterview);
router.delete('/:id', interviewController.deleteInterview);

module.exports = router;