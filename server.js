/**
 * this the starting file of the project
 * 1. expree
 * 2.mongoose
 */

const express = require("express");
const mongoose = require("mongoose");
const serverConfig = require("./configs/server.config");
const db_config=require("./configs/db.config")
const server_config = require("./configs/server.config");
const app = express();
const user_model=require("./models/user.model");
const bcrypt = require("bcryptjs");

/**
 * connect mongodb
 */
mongoose.connect(db_config.DB_URL)
const db=mongoose.connection
db.on("error",()=>{
console.log("Error while connecting to the mongoDb");

})
db.once("open",()=>{
  console.log("connected to mongo database");
  init();
})

async function init(){
  try{
    let user= await user_model.findOne({userId:"admin"})
  if(user){
    console.log("Admin is already present");
    return
  }

  }catch(error){
    console.log("error while reading the data",error);

  }
  
  //model of the user in save at databases
  try{
    user=await user_model.create({
      name:"vikas",
      userId:"admin",
      email:"vikaskumar@gmail.com",
      userType:"ADMIN",
      password:bcrypt.hashSync("Welcome1",8)
    })
    console.log("Admin Craeted : ",user);
  }catch(err){
console.log("Error while create admin",err);
  }
}
/**
 * create the server run 
 */
app.listen(serverConfig.port, () => {
  console.log("server started at port number ",serverConfig.port);
});
