const express = require("express");

const auth_controller = require("../../controllers/auth/index");

const auth_router = express.Router();

auth_router.post("/login", auth_controller.login);

module.exports = auth_router;
