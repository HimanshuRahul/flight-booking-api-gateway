const express = require("express");
const { UserController } = require("../../controllers");
const { UserMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post("/", UserController.signup);

module.exports = router;
