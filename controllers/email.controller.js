
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
          replyTo : 'noreply@gmail.com',
          from: '"Ownwaysoft Team" noreply@gmail.com',
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

  // mail to company
  var mainOptions = {         
    replyTo : 'noreply@gmail.com',
    from: '"Ownwaysoft Team" noreply@gmail.com',
    to: 'ownwaysoft@gmail.com,bagee.blore@gmail.com',
    subject: 'New User Registered',
    text: JSON.stringify(req.body)
  };
  // console.log("html data ======================>", mainOptions.html);
  transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
          console.log(err);
          // res.json(0)
      } else {
          console.log('Message sent: ' + info.response);
          // res.json(1)
      }
  });
  
  let emailData = {
    user:{
      name: req.body.user_name
    }
  }

  // mailt to client
  ejs.renderFile(__parentDir + '/public/templates/email-template/register-success.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {         
          replyTo : 'noreply@gmail.com',
          from: '"Ownwaysoft Team" ownwaysoft@gmail.com',
          to: req.body.user_email,
          subject: 'Welcome to Ownwaysoft Billing Software',
          html: data
        };
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
exports.sendContactMail =  (req, res)=> {
  console.log('sendContactMail', req.body);
  
  var transporter = nodeMailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true, 
    auth: {
      user: 'enquiry@ownwaysoft.com',
      pass: 'ownwaysoft@9095'
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  // mail to company
  var mainOptions = {         
    replyTo : 'noreply@gmail.com',
    from: '"Ownwaysoft Team" enquiry@ownwaysoft.com',
    to: 'ownwaysoft@gmail.com',
    subject: 'New User Contacted',
    text: JSON.stringify(req.body)
  };
  // console.log("html data ======================>", mainOptions.html);
  transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
          console.log(err);
          // res.json(0)
      } else {
          console.log('Message sent: ' + info.response);
          // res.json(1)
      }
  });
  
}
