
const express = require("express");
const Image = require("../models/Image");
const ImageController = require("../controllers/ImageController");

const router = express.Router();

router.get("", ImageController.index);
router.post("", ImageController.store);


module.exports = router
