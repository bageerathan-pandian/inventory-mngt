
const UserModel = require('../models/user.model');

//check email exist with user email id
exports.emailExistCheck = (req,res)=>{
  UserModel.find({user_email : req.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        if(result.length == 0){
          return res.json(0);  // user not available
        }else{
          return res.json(1); // user available
        }
    }
  });
}

//check email exist with user email id & user id
exports.emailExistCheckExceptSameUser = (req,res)=>{
  console.log('req',req)
  return new Promise((resolve, reject)=> {
    UserModel.find({user_email : req.user_email,_id:{$ne:req._id},status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        reject(2);
    } else {
      console.log('result',result);
      if(result.length == 0){
        resolve(0);  // user not available
      }else{
        resolve(1); // other user already exist
      }
    }
  });
  });
 
}

//get user data with user id
exports.getUserDataById = (req,res)=>{
  UserModel.find({_id : req._id,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        if(result.length == 0){
          return res.json(0);  // user not available
        }else{
          return res.json(result); // return user data
        }
    }
  });
}

//get user data with user email id
exports.getUserDataByEmail = (req,res)=>{
  UserModel.find({user_email : req.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
      console.log('result',result);
        if(result.length == 0){
          return res.json(0);  // user not available
        }else{
          return res.json(result); // return user data
        }
    }
  });
}

//check email exist with user email id & user id
exports.userUpdateById = (req,res)=>{
  console.log('userUpdateById',req)
  return new Promise((resolve, reject)=> {
    UserModel.findByIdAndUpdate(req._id, req, (e, result) => { 
    if(e) {        
      console.log(e.message);
        reject(2);
    } else {
      console.log('result',result);
        resolve(1); // usre updated
    }
  });
  });
 
}
