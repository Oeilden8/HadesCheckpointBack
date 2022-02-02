const mainRouter = require("express").Router();
const imagesRouter = require("./images.routes");

mainRouter.use("/images", imagesRouter);

module.exports = mainRouter;
