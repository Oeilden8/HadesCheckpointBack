const mainRouter = require("express").Router();
const imagesRouter = require("./images.routes");
const charactersRouter = require("./characters.routes");

mainRouter.use("/images", imagesRouter);
mainRouter.use("/characters", charactersRouter);

module.exports = mainRouter;
