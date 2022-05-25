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

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello Hades api !" });
});

app.use("/api", mainRouter);

module.exports = app;
