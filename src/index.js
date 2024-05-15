const express = require("express");
const rateLimit = require("express-rate-limit");
const { ServerConfig, Logger } = require("./config");
const { createProxyMiddleware } = require("http-proxy-middleware");
const apiRoutes = require("./routes");
const { FLIGHT_SERVICE, BOOKING_SERVICE } = require("./config/server-config");

const app = express();

const limiter = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  limit: 10, // Limit each IP to 10 requests per `window` (here, per 2 minutes).
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(limiter);

app.use(
  "/flightsService",
  createProxyMiddleware({
    target: FLIGHT_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/flightsService": "/" },
  })
);

app.use(
  "/bookingsService",
  createProxyMiddleware({
    target: BOOKING_SERVICE,
    changeOrigin: true,
    pathRewrite: { "^/bookingsService": "/" },
  })
);

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`Server started successfully on PORT ${ServerConfig.PORT}`);

  //below line will print logs
  Logger.info("Successfully started the server", {});
});
