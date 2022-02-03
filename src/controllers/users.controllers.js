const { Users } = require("../models");

const getAllUsers = async (_req, resp) => {
  try {
    const [results] = await Users.findManyUsers();
    resp.json(results);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const getOneUserById = async (req, resp) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  try {
    const [result] = await Users.findOneById(id);
    if (result.length === 0) {
      resp.status(404).send(`User with id ${id} not found`);
    } else {
      resp.status(statusCode).json(result[0]);
    }
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const verifyUserMail = async (req, resp, next) => {
  const { mail } = req.body;
  if (await Users.mailAlreadyExists(mail)) {
    resp.status(401).send(`${mail} already used by a member`);
    // pour vérifier le password voir joi
  } else {
    next();
  }
};

const createOneUser = async (req, resp, next) => {
  const { mail, password, admin } = req.body;

  try {
    const hashedPassword = await Users.passwordHashing(password);
    const [result] = await Users.createOne({ mail, hashedPassword, admin });
    console.log(result);
    req.id = result.insertId;
    next();
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const deleteOneUser = async (req, resp) => {
  const { id } = req.params;
  try {
    const [result] = await Users.deleteOnebyId(id);
    if (result.affectedRows === 0) {
      resp.status(404).send(`User with id ${id} not found`);
    } else {
      resp.status(200).send(`User ${id} deleted`);
    }
  } catch (err) {
    resp.status(500).send(`Unable to delete User : ${err.message}`);
  }
};

const verifyUserLogin = async (req, resp, next) => {
  const { mail, password } = req.body;
  try {
    const [result] = await Users.findOneByMail(mail);
    if (result.length === 0) {
      resp.status(404).send("This mail is not related to any user");
    } else {
      const { hashedPassword } = result[0];
      const validPassword = await Users.verifyPasswordHash(
        hashedPassword,
        password
      );
      if (!validPassword) {
        resp.status(401).send("Wrong password");
      } else {
        // si c'est un admin
        if (result[0].admin === 1) {
          req.adminId = result[0].id;
        } else {
          req.userId = result[0].id;
        }
        // authentification successfull : on recupère l'user id pour créer le token
        next();
      }
    }
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUserById,
  verifyUserMail,
  verifyUserLogin,
  createOneUser,
  deleteOneUser,
};
