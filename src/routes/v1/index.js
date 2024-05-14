const express = require("express");
const { InfoController } = require("../../controllers");
const router = express.Router();

const userRoutes = require("./user-routes");

router.get("/info", InfoController.info);

router.use("/user", userRoutes);

module.exports = router;
