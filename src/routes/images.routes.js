const imagesRouter = require("express").Router();

const { imagesControllers } = require("../controllers");

imagesRouter.get("/", imagesControllers.getAllImages);
// imagesRouter.get("/:id", imagesControllers.get)

module.exports = imagesRouter;
