const mongoose = require("mongoose");

const Student = new mongoose.Schema({
    name:{type:String,required:[true,"please enter your name"]},
    email:{type:String,required:[true,"please enter your email"]},
    password:{type:String},
    address:{type:String}
});
const studentModel = mongoose.model("student",Student);
module.exports = studentModel;