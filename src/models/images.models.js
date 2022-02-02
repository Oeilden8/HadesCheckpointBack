const { connection } = require("../../db-connection");

class Images {
  static findManyImages() {
    const sql = "SELECT * FROM images";
    return connection.promise().query(sql);
  }

  static findOneById(id) {
    const sql = "SELECT * FROM images WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM images WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(image) {
    const sql = "INSERT INTO images SET ?";
    return connection.promise().query(sql, [image]);
  }
}

module.exports = Images;
