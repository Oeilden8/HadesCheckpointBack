const jwt = require("jsonwebtoken");

const createToken = (req, resp) => {
  // on recupere l'user.id et le secret, et on définit la durée du token
  const id = req.adminId ? req.adminId : req.userId;
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });
  // on envoie le token dans un cookie nommé userToken ou adminToken, de type token, et protégé par httpOnly (le front ne pourra pas le lire)
  if (req.adminId) {
    resp
      .status(200)
      .cookie("adminToken", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 3600000,
      })
      .json({ id });
  } else {
    resp
      .status(200)
      .cookie("userToken", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 3600000,
      })
      .json({ id });
  }
};

const verifyUserToken = (req, resp, next) => {
  const { userToken } = req.cookies;
  if (userToken) {
    // verify recupère decoded ou une erreur si token pas bon
    jwt.verify(userToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        resp.status(403).send(err.message);
      } else {
        req.userId = decoded.id;
      }
    });
    next();
  } else {
    resp.status(403).send("Login failed or you don't have admin rights");
  }
};

const verifyAdminToken = (req, resp, next) => {
  const { adminToken } = req.cookies;
  if (adminToken) {
    // verify recupère decoded ou une erreur si token pas bon
    jwt.verify(adminToken, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        resp.status(403).send(err.message);
      } else {
        req.adminId = decoded.id;
      }
    });
    next();
  } else {
    resp.status(403).send("Login failed");
  }
};

module.exports = {
  createToken,
  verifyUserToken,
  verifyAdminToken,
};
