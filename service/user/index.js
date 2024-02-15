const getUserService = require("./userServices/get");
const postUserService = require("./userServices/post");
const putUserService = require("./userServices/put");
const deleteUserService = require("./userServices/delete");

module.exports = {
  getUserService,
  postUserService,
  putUserService,
  deleteUserService,
};
