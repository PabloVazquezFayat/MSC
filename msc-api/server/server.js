const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const connectToDB = require("../DB");
const { port, env } = require("../utility/config");
const { contactRouter } = require("../modules/contacts");

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: [
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Origin",
      "Acces-Control-Allow-Methods",
      "Origin",
      "withCredentials",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "Authorization",
      "X-HTTP-Method-Override",
      "Set-Cookie",
      "Request",
    ],
  })
);
server.use(logger("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());

const serverPort = port || 3001;

connectToDB();

server.listen(serverPort, () => {
  if (env === "dev") {
    // eslint-disable-next-line no-console
    console.log(`Sever listening on port ${serverPort}`);
  }
});

server.use("/", contactRouter);

module.exports = server;
