const loginRouter = require("express").Router();
const { usersControllers, loginControllers } = require("../controllers");

loginRouter.post(
  "/",
  usersControllers.verifyUserLogin,
  loginControllers.createToken
);

module.exports = loginRouter;
