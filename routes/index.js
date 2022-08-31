var express = require('express');
const multer  = require('multer');

var router = express.Router();

const upload = require("../middlewares/image_storage");

const {
  upload_profile_pics, upload_cat_pics, get_all_pics, get_all_pics_dabase, get_all_pics_dabase_id
} = require("../controllers/users");
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router
  .route('/upload-profile-pic')
  .post(upload.single("profile_pic"), upload_profile_pics)
  // .post(upload.single("cat_pics"), upload_cat_pics)

  
router
.route('/pictures')
.get(get_all_pics)

router
.route('/get-pics')
.get(get_all_pics_dabase)

router
.route('/get-pics/:id')
.get(get_all_pics_dabase_id)

router
  .route('/upload-cat-pics')
  .post(upload.array("cat_pics", 7), upload_cat_pics)

module.exports = router;
