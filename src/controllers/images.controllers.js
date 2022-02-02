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

const getImageById = async (req, resp) => {
  const id = req.params.id ? req.params.id : req.id;
  const statusCode = req.method === "POST" ? 201 : 200;
  try {
    const [result] = await Images.findOneById(id);
    if (result.length === 0) {
      resp.status(404).send(`Image avec l' id${id} non trouvée`);
    } else {
      resp.status(statusCode).json(result[0]);
    }
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

const deleteOneImage = async (req, resp) => {
  const { id } = req.params;
  try {
    const [result] = await Images.deleteOneById(id);
    if (result.affectedRows === 0) {
      resp.status(404).send(`l'image avec l'id ${id} non trouvée`);
    } else {
      resp.status(200).send(`l'image ${id} supprimée`);
    }
  } catch (err) {
    resp
      .status(500)
      .send(`erreur lors de la suppression de l'image : ${err.message}`);
  }
};

const uploadOneImage = async (req, resp, next) => {
  const imageStorage = multer.diskStorage({
    destination: (_req, image, cb) => {
      // notre dossier ou on stocke les assets -> pouvoir le choisir par type
      cb(null, `public/images`);
    },
    filename: (_, image, cb) => {
      cb(null, `${image.originalname}`);
    },
  });

  // on configure multer pour qu'il sauvegarde bien un seul fichier
  const upload = multer({ storage: imageStorage }).single("image");
  upload(req, resp, (err) => {
    if (err) {
      resp.status(500).json(err);
    } else {
      console.log(req.file);
      next();
    }
  });
};

const createOneImage = async (req, resp, next) => {
  const image = {
    image_name: req.file.filename,
    source: `public/images/${req.file.filename}`,
  };
  try {
    const [result] = await Images.createOne(image);
    req.id = result.insertId;
    next();
  } catch (err) {
    resp.status(500).send(err.message);
  }
};

module.exports = {
  getAllImages,
  getImageById,
  deleteOneImage,
  uploadOneImage,
  createOneImage,
};
