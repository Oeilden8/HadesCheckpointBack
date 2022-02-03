const mainRouter = require("express").Router();
const imagesRouter = require("./images.routes");
const charactersRouter = require("./characters.routes");
const usersRouter = require("./users.routes");
const loginRouter = require("./login.routes");

mainRouter.use("/images", imagesRouter);
mainRouter.use("/characters", charactersRouter);
mainRouter.use("/users", usersRouter);
mainRouter.use("/login", loginRouter);

module.exports = mainRouter;
