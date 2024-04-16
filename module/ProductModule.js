const mongoose = require("mongoose");

const ImagesUpload = new mongoose.Schema({
      images:{type:Array}
})
const Product = mongoose.model("product",ImagesUpload);
module.exports = Product;
