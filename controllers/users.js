
// var app = express();
// app.use(express.static("images"));

const  upload_profile_pics= async (req, res, next) => {
    console.log(req.file);
    const {filename, path} = req.file;
    
    try {
      return res.status(201).send(`<h2>Here is the picture:</h2><img src="${filename}" alt="Image"/>`);
      
    } catch (err) {
      console.log(err, "Some error");
      next(err);
    }
  };

  const upload_cat_pics= async (req, res, next) => {

    console.log("FROM CATS", req.files);
    req.files
    // const { filename } = req.files;
    // console.log(filename)
    const result = req.files;
    // result.map(photo => console.log(photo))

    // const targetPath = "." + destination + filename;
    // console.log("hello", filename)
    try {
      return res.status(201).send("hello");
      // return res.status(201).send(`<h2>Here is the picture:</h2><img src="${filename}"  alt="Image"/>`);
      
    } catch (err) {
      console.log(err, "Some error");
      next(err);
    }
  };

  module.exports = {
    upload_profile_pics,
    upload_cat_pics
  };