const imagesRouter = require("express").Router();

const { imagesControllers, loginControllers } = require("../controllers");

imagesRouter.get("/", imagesControllers.getAllImages);
imagesRouter.get("/:id", imagesControllers.getImageById);
imagesRouter.delete(
  "/:id",
  loginControllers.verifyAdminToken,
  imagesControllers.deleteOneImage
);
imagesRouter.post(
  "/",
  loginControllers.verifyUserToken,
  imagesControllers.uploadOneImage,
  imagesControllers.createOneImage,
  imagesControllers.getImageById
);

module.exports = imagesRouter;
