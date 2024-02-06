const constants = require("../../constants");

const { message } = constants;

const getRoot = (req, res) => {
  res.status(200).send(message);
};

module.exports = { getRoot };
