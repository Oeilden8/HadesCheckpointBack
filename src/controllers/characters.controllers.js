const { Characters } = require("../models");

const getAllCharacters = async (_req, resp) => {
  try {
    const [results] = await Characters.findManyCharacters();
    resp.json(results);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const getCharactersByType = async (req, resp) => {
  const { id } = req.params;
  try {
    const [results] = await Characters.findByType(id);
    resp.json(results);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const getCharactersById = async (req, resp) => {
  const { id } = req.params;
  try {
    const [result] = await Characters.findOneById(id);
    resp.json(result);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const deleteOne = async (req, resp) => {
  const { id } = req.params;
  try {
    const [result] = await Characters.deleteOneById(id);
    resp.json(result);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const createOne = async (req, resp, next) => {
  const character = req.body;
  console.log(req.body);
  if (character.name && character.type_id) {
    try {
      const [result] = await Characters.createOne(character);
      req.id = result.insertId;
      next();
    } catch (err) {
      resp.status(500).send(err.message);
    }
  } else {
    resp.status(500).send("You need to provide a name and a type of character");
  }
};

const updateOne = async (req, resp, next) => {
  const { id } = req.params;
  const { name, title, power, description, affiliation, type_id, image_id } =
    req.body;

  if (
    !name &&
    !title &&
    !power &&
    !description &&
    !affiliation &&
    type_id &&
    image_id
  ) {
    resp.status(400).send("You need to fill at least one input");
  } else {
    const character = {};
    if (name) {
      character.name = name;
    }
    if (title) {
      character.title = title;
    }
    if (power) {
      character.power = power;
    }
    if (description) {
      character.description = description;
    }
    if (affiliation) {
      character.affiliation = affiliation;
    }
    if (type_id) {
      character.type_id = type_id;
    }
    if (image_id) {
      character.image_id = image_id;
    }

    try {
      await Characters.updateOne(character, id);
      next();
    } catch (err) {
      resp.status(500).send(err.message);
    }
  }
};

module.exports = {
  getAllCharacters,
  getCharactersByType,
  getCharactersById,
  deleteOne,
  createOne,
  updateOne,
};
