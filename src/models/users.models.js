const argon2 = require("argon2");
const { connection } = require("../../db-connection");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

class Users {
  static findManyUsers() {
    const sql = "SELECT id, mail, admin FROM users";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByMail(mail) {
    const sql = "SELECT * FROM users WHERE mail=?";
    return connection.promise().query(sql, [mail]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM users WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  // vérifie que l'email existe via query de email ds la database
  static async mailAlreadyExists(mail) {
    const sql = "SELECT * FROM users WHERE mail=?";
    const [result] = await connection.promise().query(sql, [mail]);
    return result.length > 0;
  }

  // hash le password via argon2
  static async passwordHashing(password) {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    return hashedPassword;
  }

  static verifyPasswordHash(hashedPassword, password) {
    return argon2.verify(hashedPassword, password, hashingOptions);
  }

  static createOne(user) {
    const sql = "INSERT INTO users SET ?";
    return connection.promise().query(sql, [user]);
  }
}

module.exports = Users;
