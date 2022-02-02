const multer = require("multer");
const { Images } = require("../models");

const getAllImages = async (_req, resp) => {
  try {
    const [results] = await Images.findManyImages();
    resp.json(results);
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

module.exports = { getAllImages };
