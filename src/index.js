const express = require("express");
const rateLimit = require("express-rate-limit");
const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  limit: 4, // Limit each IP to 4 requests per `window` (here, per 2 minutes).
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started successfully on PORT ${ServerConfig.PORT}`);

  //below line will print logs
  Logger.info("Successfully started the server", {});
});
