// const express = require("express");
// const sharp = require("sharp");
// const fs = require("fs");
// const app = express();
import { blobToURL, fromBlob } from 'image-resize-compress';




const handleBlob = (blobFile) => {
    // quality value for webp and jpeg formats.
    const quality = 80;
    // output width. 0 will keep its original width and 'auto' will calculate its scale from height.
    const width = 0;
    // output height. 0 will keep its original height and 'auto' will calculate its scale from width.
    const height = 0;
    // file format: png, jpeg, bmp, gif, webp. If null, original format will be used.
    const format = 'jpg';
  
    // note only the blobFile argument is required
    fromBlob(blobFile, quality, width, height, format).then((blob) => {
      // will output the converted blob file
      console.log(blob);
      // will generate a url to the converted file
      blobToURL(blob).then((url) => console.log(url));
    });
  };
handleBlob(`./flower.jpg`);

// app.use(express.json());
// app.post("/api/register",(req,res,next)=>{
//     const user = req.body;
//    return res.status(200).json({
//          success:true,
//          message:"registrt success",
//          user
//     })
// })

// app.listen(8000,()=>{
//     console.log("server start in 8000")
// })

(async function(){
     try{
        await sharp("images/103659796e2c45694.01094302.jpg").grayscale().png().toFile("images/edited-sharp.png");
        
     }catch(error){
         console.log(error)
     }
})()