const imagesRouter = require("express").Router();

const { imagesControllers } = require("../controllers");

imagesRouter.get("/", imagesControllers.getAllImages);
imagesRouter.get("/:id", imagesControllers.getImageById);
imagesRouter.delete("/:id", imagesControllers.deleteOneImage);
imagesRouter.post(
  "/",
  imagesControllers.uploadOneImage,
  imagesControllers.createOneImage,
  imagesControllers.getImageById
);

module.exports = imagesRouter;
