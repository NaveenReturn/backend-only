const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
      title:{type:String},
      postedBy:{type:mongoose.SchemaTypes.ObjectId}
});

const post = mongoose.model("post",PostSchema);
module.exports = post;
