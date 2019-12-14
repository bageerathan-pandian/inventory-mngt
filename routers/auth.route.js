const express = require('express');
const router = express.Router();
var passport  = require('passport');
const CompanyModel = require('../models/company.model');
const UserModel = require('../models/user.model');
const ContactModel = require('../models/contact.model');
const ProductPaymentModel = require('../models/product_payment.model');
const emailController = require('../controllers/email.controller')

require('../config/passport');


var jwt = require('jsonwebtoken');


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
          req.session.token = token
          req.session.user = user; 
          console.log('sess',req.session.user)
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
  console.log('req',req.body) 
  if(!req.body._id) {
   delete req.body._id;
 }
  CompanyModel.create(req.body, (err, result) => {
    if (err) return next(err);
    console.log('cresult',result) 
     return  res.json(result) 
  });
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


router.get('/get-payment-details/:id', async (req, res, next) => {
  console.log('req',req.params.id) 
 ProductPaymentModel.find({company_details_id : req.params.id}, (err, result) => {
    if (err) return next(err);
    console.log('pymntresult',result) 
     return  res.json(result) 
  });
});

router.post('/register-user', async (req, res, next) => {
    console.log('req',req.body) 
    if(!req.body._id) {
     delete req.body._id;
   }
   UserModel.create(req.body, (err, result) => {
      if (err) return next(err);
      console.log('uresult',result) 
      //  const body = { _id : result._id, user_name : result.user_name };
      //  const token = jwt.sign({ user : body }, process.env.SECRET_KEY);
      //  return  res.json({
      //    message : 'You made it to the secure route',
      //    user : result,
      //    token : token
      //  }) 
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
          req.session.user = user; 
          emailController.sendRegisterMail(req, res)
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
    })
  });
    
  
router.get('/check-email-exist/:user_email', async (req, res, next) => {
  console.log('req',req.params) 
  UserModel.find({user_email : req.params.user_email},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
  });
});

router.post('/reset-password', emailController.sendResetMail);

router.get('/company-count', async (req, res, next) => {
  CompanyModel.find({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result.length);
    }
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
    req.body.isLoggedIn = false
    UserModel.findByIdAndUpdate(req.body._id, req.body, (err, result) => {
    if (err) return next(err);
    return res.json(req.body)
   
  });
  
});
});


module.exports = router;