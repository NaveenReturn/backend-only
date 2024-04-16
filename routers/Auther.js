const multer = require("multer");
const path = require("path");
// first method

const upload = multer({
    storage:multer.diskStorage({
         destination:function(req,file,cb){
             cb(null,path.join(__dirname,"..","uploading/images"))
         },
         filename:function(req,file,cb){
            cb(null,path.extname(file.originalname))
         }
    })
})