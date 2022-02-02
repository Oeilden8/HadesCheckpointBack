const charactersRouter = require("express").Router();

const { charactersControllers } = require("../controllers");

charactersRouter.get("/", charactersControllers.getAllCharacters);
charactersRouter.get("/:id", charactersControllers.getCharactersById);
charactersRouter.get("/type/:id", charactersControllers.getCharactersByType);
charactersRouter.post(
  "/",
  charactersControllers.createOne,
  charactersControllers.getCharactersById
);
charactersRouter.put(
  "/:id",
  charactersControllers.updateOne,
  charactersControllers.getCharactersById
);
charactersRouter.delete("/:id", charactersControllers.deleteOne);

module.exports = charactersRouter;
