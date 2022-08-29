var express = require('express');
const multer  = require('multer');

var router = express.Router();

const upload = require("../middlewares/image_storage");

const {
  upload_profile_pics, upload_cat_pics
} = require("../controllers/users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
