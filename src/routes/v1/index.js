const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();
const { AuthRequestMiddlewares } = require("../../middlewares");

const userRoutes = require("./user-routes");

router.get("/info", AuthRequestMiddlewares.checkAuth, InfoController.info);

router.use("/user", userRoutes);

module.exports = router;
