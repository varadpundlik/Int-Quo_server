const getQuestionService = require('./questionServices/get');
const postQuestionService = require('./questionServices/post');
const putQuestionService = require('./questionServices/put');
const deleteQuestionService = require('./questionServices/delete');

module.exports = {
    getQuestionService,
    postQuestionService,
    putQuestionService,
    deleteQuestionService
};