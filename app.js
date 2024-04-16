const express = require("express");
const app = express();

app.use(express.json());
app.get("/api/v1/login",(req,res)=>{

  return res.status(200).json({message:"success"})
})

app.listen(8000,()=>{
   console.log("server is start")
})