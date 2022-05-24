const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const mainRouter = require("./routes");

app.use(express.json());
app.use(cookieParser());
// on configure cors pour autoriser uniquement le front a communiquer avec notre API
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN,
  })
);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.CLIENT_ORIGIN); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Hades api !" });
});

app.use("/api", mainRouter);

module.exports = app;
