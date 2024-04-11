const express = require('express');
const router = express.Router();

const interviewController = require('../../controllers/interview/index');

router.get('/', interviewController.getAllInterview);
router.get('/:id', interviewController.getInterviewById);
router.post('/', interviewController.createInterview);
router.put('/:id', interviewController.putInterview);
router.delete('/:id', interviewController.deleteInterview);

module.exports = router;