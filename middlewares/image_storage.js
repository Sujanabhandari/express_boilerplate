const multer = require("multer");
const path = require('path');
const app = require("../app");

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    console.log("From Middlewar", req)
    cb(null, "./public/data/uploads/");
  },
  filename: function (req, file, cb) {
    console.log(req.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
  
});

const upload = multer({ storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    // limits:{
    //     fileSize: 1024 * 1024
    // }
 });

module.exports = upload;
