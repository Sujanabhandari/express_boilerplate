
const db = require("../database/client.js");

  const upload_cat_pics= async (req, res, next) => {
  
    const results = req.files;
    console.log(results)
    try {
      const promises = [];
      
      results.forEach(file => {
        const query_file = db.query(`INSERT INTO pictures (name, path) VALUES($1, $2) RETURNING *`, [file.fieldname, file.filename]);
        promises.push(query_file);
      });

      await Promise.all(promises);
      return res.status(201).send(`<h2>Here is the picture:</h2>
      ${results.map(result => `<img width = "200px"src="/data/uploads/${result.filename}" alt=”something”/><br />`)}`);

    } 
    catch (err) {
      console.log(err, "Some error");
      next(err);
    }
  };

  

  const  upload_profile_pics= async (req, res, next) => {
    const {filename} = req.file;
    let {name, path } = req.body;
    name = req.file.originalname;
    path = req.file.filename;
    try {
      
      const { rows:[createdUser] } = await db.query(`INSERT INTO pictures (name, path)
      VALUES($1, $2) RETURNING *`,[name, path]);
      // return res.status(201).send(`<h2>Here is the picture:</h2><img src="${filename}" alt="Image"/>`);
      return res.status(201).send(`<h2>Here is the picture:</h2><img width = "200px" src="/data/uploads/${filename}" alt="Image"/> `);
      
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  const get_all_pics= async (req, res, next) => {
    console.log("hellop")
    try {
      const { rows } = await db.query("SELECT * from pictures ORDER BY id DESC;");
      return res.status(200).send(rows);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };

  const get_all_pics_dabase= async (req, res, next) => {
    console.log("hellop")
    try {
      const { rows } = await db.query("SELECT * from pictures ORDER BY id DESC;");
      console.log(rows);
      return res.status(201).send(`<h2>Here is the picture:</h2>
      
      ${rows.map(result =>  `<img width = "200px"src="/data/uploads/${result.path}" alt=”something”/><br />`)}`);
    } catch (err) {
      console.log(err);
      next(err);
    }
  };
  
  

  module.exports = {
    upload_profile_pics,
    get_all_pics_dabase,
    upload_cat_pics,
    get_all_pics
  };