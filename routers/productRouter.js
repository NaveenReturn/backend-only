const express = require("express");
const Routers = express.Router();
const multer = require("multer");
const path = require("path");
const Product = require("../module/ProductModule");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null,path.join(__dirname,'..','uploading/images'));
    },
    filename: function(req, file, cb) {   
        cb(null, Date.now() + path.extname(file.originalname));
    },
  });



  const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
  }
  
  let upload = multer({ storage: storage, fileFilter: fileFilter });

Routers.route('/addata').post(upload.array('images',15),async(req, res) => {

        console.log("Entry");
       let images = [];

         const person = {
            images:images
         }

       for(let i =0;i< req.files.length;i++){
          images.push(req.files[i].filename)
       }

      const user = await Product.create(person)
    //  console.log(req.files.length)
          
      res.status(201).json({
          success:true,
          message:"success",
          user
      })
   })
// Routers.route("/upload")

module.exports = Routers;