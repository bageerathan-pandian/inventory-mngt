
const UserModel = require('../models/user.model');
const CompanyModel = require('../models/company.model');

//check email exist with user email id
exports.emailExistCheck = (req,res)=>{
  return new Promise((resolve,reject)=>{
  UserModel.find({user_email : req.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        // return res.status(500).json(e);
        reject()
    } else {
        if(result.length == 0){
          resolve(0);  // user not available
        }else{
          resolve(1); // user available
        }
    }
  });    
})
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
  return new Promise((resolve, reject)=> {
  UserModel.find({_id : req._id,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        // return res.status(500).json(e);
        reject()
    } else {
        if(result.length == 0){
          resolve(0);  // user not available
        }else{
         resolve(result); // return user data
        }
    }
  });
});
}

//get user data with user email id
exports.getUserDataByEmail = (req,res)=>{
  return new Promise((resolve, reject)=> {
  UserModel.find({user_email : req.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        // return res.status(500).json(e);
        reject()
    } else {
      console.log('result',result);
        if(result.length == 0){
          resolve(0)  // user not available
        }else{
          resolve(result); // return user data
        }
    }
  });
});
}


//get user data with user email id
exports.createUser = (req,res)=>{
  console.log('createUser',req);
  return new Promise((resolve, reject)=> { 
    if(!req._id) {
    delete req._id;
  }
  UserModel.create(req, (e, result) => {
    if(e) {        
      console.log(e.message);
        // return res.status(500).json(e);
        reject()
    } else {
      console.log('result',result);
        if(result.length == 0){
          resolve(0)  // user not create
        }else{
          resolve(result); // return user create
        }
    }
  });
});
}

//user update by id
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


//get company count
exports.getTotalCompanyCount = (req,res)=>{
  console.log('getTotalCompanyCount',req.body)
  return new Promise((resolve, reject)=> {
    CompanyModel.find({},(e,result) => {
      if(e) {        
        console.log(e.message);
          // return res.status(500).json(e);
          reject()
      } else {
        console.log('totalcount',result.length);
          // return res.json(result.length);
          resolve(result.length)
      }
    });
  });
 
}


