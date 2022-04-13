const express = require("express");
const router = express.Router();
const Photo = require("../controller/search_photo")

router.get('/search', Photo.search)
router.get('/all-photo', Photo.getAll)

module.exports = router;