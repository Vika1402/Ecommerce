const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,

  },
  userId:{
    type:String,
    required:true
  }
  ,password:{
    type:String,
    required:true

  },
  email:{
    type:String,
    required:true,
    lowercase:true,
    minLength:10,
    unique:true

  },
  userType:{
    type:String,
    defalut:"CUSTOMER",
    enum:["CUSTOMER","ADMIN"]

  }
},{timestamp:true,versioKey:false})

module.exports=mongoose.model("user",userSchema)