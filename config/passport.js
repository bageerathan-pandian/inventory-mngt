const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;


UserModel = require('../models/user.model');


var CryptoJS = require("crypto-js");

//Create a passport middleware to handle User login
passport.use('authLogin', new localStrategy({
    usernameField : 'user_email',
    passwordField : 'user_pwd'
  }, async (user_email, user_pwd, done) => {
    console.log('user_email',user_email,'user_pwd',user_pwd);
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(user_pwd, process.env.PASSWORD_SECRET_KEY).toString();
    
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext,  process.env.PASSWORD_SECRET_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    console.log(ciphertext,originalText); // 'my message'
    try {
      const user = await UserModel.findOne({user_email, user_pwd}).populate('company_details_id');
     console.log('await user',user)
     if(!user ){ 
      return done(null, false, { message : 'User not found'});
    }else{
      user.isLoggedIn = true;
      UserModel.findByIdAndUpdate(user._id, user, (err, result) => {
        if (err) return next(err);
        return done(null, user, { message : 'Logged in Successfully'});
      });
     
    }
     

    } catch (error) {
      return done(error);
    }
  }));


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (user, done) {
    //If using Mongoose with MongoDB; if other you will need JS specific to that schema.
    // UserModel.findById(user.id, function (err, user) {
        done(err, user);
    // });
});


  //This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey : process.env.SECRET_KEY, 
    //we expect the user to send the token as a query paramater with the name 'secret_token'
    // jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),

  }, async (token, done) => {
    console.log('token',token);
    try {
      //Pass the user details to the next middleware
      // return done(null, token.user);
      return done(null, token);
    } catch (error) {
      done(error);
    }
  }));