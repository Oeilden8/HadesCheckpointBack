const charactersRouter = require("express").Router();

const { charactersControllers, loginControllers } = require("../controllers");

charactersRouter.get("/", charactersControllers.getAllCharacters);
charactersRouter.get("/:id", charactersControllers.getCharactersById);
charactersRouter.get("/type/:id", charactersControllers.getCharactersByType);
charactersRouter.post(
  "/",
  loginControllers.verifyUserToken,
  charactersControllers.createOne,
  charactersControllers.getCharactersById
);
charactersRouter.put(
  "/:id",
  charactersControllers.updateOne,
  charactersControllers.getCharactersById
);
charactersRouter.delete(
  "/:id",
  loginControllers.verifyAdminToken,
  charactersControllers.deleteOne
);

module.exports = charactersRouter;
