
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
    const results = req.files;
  //   let final=[]
  //   for (let index = 0; index < results.length; index++) {
  //     final = results[index].filename;
  //  }
    try {
      return res.status(201).send( `<h2>Here is the picture:</h2>
      ${results.map(cat => `<img src="${cat.filename}" alt=”something”/><br />`)}`,);   
    } 
    catch (err) {
      console.log(err, "Some error");
      next(err);
    }
  };

  module.exports = {
    upload_profile_pics,
    upload_cat_pics
  };