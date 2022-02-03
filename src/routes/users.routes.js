const usersRouter = require("express").Router();

const { usersControllers, loginControllers } = require("../controllers");

usersRouter.get("/", usersControllers.getAllUsers);
usersRouter.get("/:id", usersControllers.getOneUserById);
usersRouter.post(
  "/",
  usersControllers.verifyUserMail,
  usersControllers.createOneUser,
  usersControllers.getOneUserById
);
usersRouter.delete(
  "/:id",
  loginControllers.verifyAdminToken,
  usersControllers.deleteOneUser
);

module.exports = usersRouter;
