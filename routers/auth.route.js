const express = require('express');
const router = express.Router();
var passport  = require('passport');
const CompanyModel = require('../models/company.model');
const UserModel = require('../models/user.model');
const ContactModel = require('../models/contact.model');
const ProductPaymentModel = require('../models/product_payment.model');
const emailController = require('../controllers/email.controller')
const commonController = require('../controllers/common.controller')

require('../config/passport');


var jwt = require('jsonwebtoken');
var moment = require('moment');
var CryptoJS = require("crypto-js");


router.post('/login', async (req, res, next) => {
    passport.authenticate('authLogin', async (err, user, info) => {  
        console.log('user',user,info,process.env.SECRET_KEY);
        try {
        if(err){
          const error = new Error('An Error occured')
          return next(error);
        }
        if(!user){
           res.json({
            message : 'User Name/Password incorrect',
            user : user,
            token : null
          })
          return next(res);
        }
        req.login(user, { session : false }, async (error) => {
          if( error ) return next(error)
          //We don't want to store the sensitive information such as the
          //user password in the token so we pick only the email and id
          const body = { _id : user._id, user_name : user.user_name };
          //Sign the JWT token and populate the payload with the user email and id
          const token = jwt.sign({ user : body }, process.env.SECRET_KEY);
          //Send back the token to the user
          return  res.json({
            message : 'You made it to the secure route',
            user : user,
            token : token
          })
        });   
      } catch (error) {
        return next(error);
      }
    })(req, res, next);
  });
  
router.post('/register-company', async (req, res, next) => {
  console.log('register-company',req.body) 
  if(!req.body._id) {
   delete req.body._id;
 }
 let count = await commonController.getTotalCompanyCount(req, res);
 if(count >= 0 ){
  let cCode = count + 1
    
  var output = cCode + '';
  while (output.length < 4) {
      output = '0' + output;
  }
  let comCode = 'c-'+ output;

  req.body.company_code = comCode;
 console.log('cCode',cCode);
  CompanyModel.create(req.body, (err, result) => {
    if (err) return next(err);
    console.log('cresult',result) 
     return  res.json(result) 
  });
 }
 
});


router.post('/register-payment', async (req, res, next) => {
  console.log('req',req.body) 
  if(!req.body._id) {
   delete req.body._id;
 }
 ProductPaymentModel.create(req.body, (err, result) => {
    if (err) return next(err);
    console.log('pymntresult',result) 
     return  res.json(result) 
  });
});


router.put('/update-payment/:id', async (req, res, next) => {
  console.log('req',req.body) 
 ProductPaymentModel.updateOne({_id:req.params.id},req.body, (err, result) => {
    if (err) return next(err);
    console.log('pymntresultupate',result) 
     return  res.json(result) 
  });
});


router.get('/get-payment-details/:id', async (req, res, next) => {
  console.log('req',req.params.id) 
 ProductPaymentModel.find({_id : req.params.id}, (err, result) => {
    if (err) return next(err);
    console.log('pymntresult',result) 
     return  res.json(result) 
  });
});

router.post('/register-user', async (req, res, next) => {
    console.log('register-user',req.body) 
    if(!req.body._id) {
     delete req.body._id;
   }
   // Encrypt
   token = crypto.randomBytes(10).toString('hex').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '')//creating the token to be sent to the forgot password form (react)

   console.log('token',token); 
   req.body.isEmailVerified = false
   req.body.isPhoneVerified = false
   req.body.otp = ''
   req.body.reset_email_token = token 
   req.body.reset_email_expire = moment().add(1,'hour').format()

   let createUser = await commonController.createUser(req.body, res);
   console.log('createUserVal',createUser)
   if(createUser._id){
      try {
        let resultData = {
          _id: createUser._id,
          user_name: createUser.user_name,
          user_email: req.body.user_email,
          user_pwd: req.body.user_pwd, 
          reset_email_token : token,  
          reset_email_expire : moment().add(1,'hour').format()
        }
        let sendEmailStatus = await emailController.sendVerifyMail(resultData, res)
        emailController.sendRegisterMail(resultData,res) // send email to owner
        console.log('sendEmailStatus',sendEmailStatus)
        if(sendEmailStatus == 1){
          let resData= {
            status: 1,
            _id: createUser._id,
            user_name: createUser.user_name,
            user_email: req.body.user_email,
            user_pwd: req.body.user_pwd, 
          }
          return res.json(resData)  //send
        }else{
          let resData= {
            status: 0
          }
          return res.json(resData)  // not send
        }
      } catch (error) {        
        let resData= {
          status: 0
        }
        return res.json(resData)  // not send
      }
     
   }else{ 
     let resData= {
        status: 2
      }
     return res.json(resData) // user not create
   }

  });


router.post('/resend-verify-email', async (req, res, next) => { 

    let checkData = {
      user_email: req.body.user_email,  
     _id: req.body._id, 
    }
    console.log('checkData',checkData)
    const resultEmailExist = await commonController.emailExistCheckExceptSameUser(checkData,res);
    console.log('resultEmailExist',resultEmailExist)
    if(resultEmailExist == 0){ //send token to user
         token = crypto.randomBytes(10).toString('hex').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '')//creating the token to be sent to the forgot password form (react)

        console.log('token',token); 
          let updatedData = {
            _id: req.body._id,
            user_email: req.body.user_email, 
            reset_email_token : token,  
            reset_email_expire : moment().add(1,'hour').format()
          }
       
          const userUpdateStatus = await commonController.userUpdateById(updatedData, res)  // update user email when reenter new email
          console.log('userUpdateStatus',userUpdateStatus)
          if(userUpdateStatus == 1){
            
            let resultData = {
              _id: req.body._id,
              user_name: req.body.user_name,
              user_email: req.body.user_email, 
              reset_email_token : token,  
              reset_email_expire : moment().add(1,'hour').format()
            }
          const sendMailStatus = await emailController.sendVerifyMail(resultData, res) // send verify email to client
            if(sendMailStatus){  // 0-not send, 1-sent
              return res.json(sendMailStatus) // email send
            }else{
              return res.json(2) // email not send
            }
          }
    }else{
        return res.json(3) // user already exist
    }
   });


router.post('/verified-email', async (req, res, next) => { 
  UserModel.find({_id : req.body._id,status : 1}, (err, result) => {
    if (err) return next(err);
    console.log('reset result',result);
    console.log('result.length',result.length);
    if(result.length == 0){
      let resData = {status:2}
      return res.json(resData); // user not available or deactivated
    }

    console.log(result[0].reset_email_token,req.body.token);
    // if(result[0].reset_pwd_token == req.body.reset_pwd_token || result[0].reset_pwd_expire < moment().format()){
    if(result[0].reset_email_token == req.body.token){
        let updateData = {
          isEmailVerified: true,
          reset_email_token: null,
          reset_email_expire: null,
        }
      UserModel.findByIdAndUpdate(req.body._id, updateData, (err, result1) => {
        if (err) return next(err);
        console.log('veriResult',result1)
        
        emailController.sendWelcomeMail(result1,res) // send email to owner
        let resData = {
          status:1,
          user_email: result1.user_email,
          user_pwd: result1.user_pwd
        }
        return res.json(resData)         
      });
    }else{
      let resData = {status:3}
      return res.json(resData)  // Invalid or expired reset token
    }

  });
});  
  
router.get('/check-email-exist/:user_email', async (req, res, next) => {
  console.log('req',req.params) 
  UserModel.find({user_email : req.params.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
  });
});

router.post('/forgot-password', async (req, res, next) => {

  console.log(req.body);
  let checkData = {
    user_email: req.body.email
  }
  console.log('checkData',checkData)
  // email exist check 
  const resultEmailExistData = await commonController.getUserDataByEmail(checkData,res);
    console.log('resultEmailExistData',resultEmailExistData)
    if(resultEmailExistData.length == 1){ //send token to user
         token = crypto.randomBytes(10).toString('hex').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '')//creating the token to be sent to the forgot password form (react)
        console.log('token',token); 
          let updatedData = {
            _id: resultEmailExistData[0]._id,
            user_email: resultEmailExistData[0].user_email, 
            reset_pwd_token : token,  
            reset_pwd_expire : moment().add(1,'hour').format()
          }
       
          const userUpdateStatus = await commonController.userUpdateById(updatedData, res)  // update user email when reenter new email
          console.log('userUpdateStatus',userUpdateStatus)
          if(userUpdateStatus == 1){
            
            let resultData = {
              _id: resultEmailExistData[0]._id,
              user_name: resultEmailExistData[0].user_name,
              user_email: resultEmailExistData[0].user_email, 
              reset_pwd_token : token,  
              reset_pwd_expire : moment().add(1,'hour').format()
            }
          const sendMailStatus = await emailController.sendResetMail(resultData, res) // send verify email to client
            if(sendMailStatus){  // 0-not send, 1-sent
              return res.json(sendMailStatus) // email send
            }else{
              return res.json(2) // email not send
            }
          }
    }else{
        return res.json(3) // user not exist
    }


});

router.post('/reset-password', async (req, res, next) => {

  UserModel.find({_id : req.body._id,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
      console.log('reset result',result);
        if(result.length == 0){
          return res.json(2); // user not available or deactivated
        }

        console.log(result[0].reset_pwd_token,req.body.reset_pwd_token);
        if(result[0].reset_pwd_token == req.body.reset_pwd_token || result[0].reset_pwd_expire < moment().format()){
        if(result[0].reset_pwd_token == req.body.reset_pwd_token){
            let updateData = {
              user_pwd: req.body.user_pwd,
              cnfirm_user_pwd: req.body.cnfirm_user_pwd,
              reset_pwd_token: null,
              reset_pwd_expire: null,
            }
          UserModel.findByIdAndUpdate(req.body._id, updateData, (err, result1) => {
            if (err) return next(err);
            return res.json(1)         
          });
        }else{
          return res.json(3)  // Invalid or expired reset token
        }

       

    }
  }

});


});

router.post('/change-password', async (req, res, next) => {

  UserModel.findByIdAndUpdate(req.body._id, req.body,{new: true}, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });


});


router.post('/contact', async (req, res, next) => {
  console.log('add cont', req.body);    
  emailController.sendContactMail(req, res)  // send email to ownwaysoft

  ContactModel.create(req.body, (err, result) => {
  if (err) return next(err);
  return res.json(result);
  });
});

router.post('/logout', async (req, res, next) => {
  // console.log('reqs_user',req.user) 
  console.log('reqs_user',req.body) 
  // console.log('req1',req.sessionID) 
  // req.session.user.isLoggedIn = false;
  
  req.session.destroy((err) => {
    if(err) {      
      return res.json(err);
    }
    let data = {isLoggedIn:false}
    UserModel.findByIdAndUpdate(req.body._id, data, (err, result) => {
    if (err) return next(err);
    console.log('logoutUser',result)
    return res.json(result)
   
  });
  
});
});


module.exports = router;