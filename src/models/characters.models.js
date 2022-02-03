const { connection } = require("../../db-connection");

class Characters {
  static findManyCharacters() {
    const sql =
      "SELECT * FROM characters AS c RIGHT JOIN type AS t ON type_id=t.id RIGHT JOIN images AS i ON image_id=i.id ORDER BY c.id";
    return connection.promise().query(sql);
  }

  static findByType(type) {
    const sql =
      "SELECT * FROM characters AS c RIGHT JOIN type AS t ON type_id=t.id RIGHT JOIN images AS i ON image_id=i.id WHERE t.id=? ORDER BY c.id";
    return connection.promise().query(sql, [type]);
  }

  static findOneById(id) {
    const sql =
      "SELECT * FROM characters AS c RIGHT JOIN type AS t ON type_id=t.id RIGHT JOIN images AS i ON image_id=i.id WHERE c.id=?";
    return connection.promise().query(sql, [id]);
  }

  static deleteOneById(id) {
    const sql = "DELETE FROM characters WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static createOne(character) {
    const sql = "INSERT INTO characters SET ?";
    return connection.promise().query(sql, [character]);
  }

  static updateOne(character, id) {
    const sql = "UPDATE characters SET ? WHERE id=?";
    return connection.promise().query(sql, [character, id]);
  }
}

module.exports = Characters;
