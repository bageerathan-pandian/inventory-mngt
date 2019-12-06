
const nodeMailer = require("nodemailer");
const fs = require("fs");
const ejs = require("ejs");
var __parentDir =require('path').resolve(__dirname, '..');

/**
 * send reset email
 */
exports.sendResetMail =  (req, res)=> {
  console.log('sendResetMail', req.body);
  var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ownwaysoft@gmail.com',
      pass: 'ownwaysoft@9095'
    }
  });

  let emailData = {
    user:{
      name: req.body.email,
      link: ''
    }
  }
  
  ejs.renderFile(__parentDir + '/public/templates/email-template/reset-password.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {
          from: 'ownwaysoft@gmail.com',
          to: req.body.email,
          subject: 'Password Reset',
          html: data
        };
        // console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                return res.json(0)
            } else {
                console.log('Message sent: ' + info.response);
                return res.json(1)
            }
        });
    }
    
    });
}

/**
 * send reset email
 */
exports.sendRegisterMail =  (req, res)=> {
  console.log('sendRegisterMail', req.body);
  var transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ownwaysoft@gmail.com',
      pass: 'ownwaysoft@9095'
    }
  });
  
  let emailData = {
    user:{
      name: req.body.user_email,
      link: ''
    }
  }

  ejs.renderFile(__parentDir + '/public/templates/email-template/register-success.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {
          from: 'ownwaysoft@gmail.com',
          to: req.body.user_email,
          subject: 'Register',
          html: data
        };
        // console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                return res.json(0)
            } else {
                console.log('Message sent: ' + info.response);
                return res.json(1)
            }
        });
    }
    
    });
}

