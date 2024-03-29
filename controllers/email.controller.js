
const nodeMailer = require("nodemailer");
const ejs = require("ejs");
var __parentDir =require('path').resolve(__dirname, '..');

/**
 * send reset email
 */
exports.sendResetMail = (req, res)=> {
  console.log('sendResetMail0', req);
  // var transporter = nodeMailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'ownwaysoft@gmail.com',
  //     pass: 'ownwaysoft@9095'
  //   }
  // });

  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  let emailData = {
    user_name : req.user_name,
    _id : req._id,
    reset_pwd_token : req.reset_pwd_token,
    host : process.env.PRODUCTION == 'DEV' ? process.env.CLIENT_HOST : process.env.HOST
  }
  
  console.log(emailData)
  return new Promise((resolve, reject)=> {
  ejs.renderFile(__parentDir + '/public/templates/email-template/reset-password.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = { 
          from: process.env.CONTACTMAILFROM,
          to: req.user_email,
          subject: 'Password Reset',
          html: data
        };
        // console.log("html data ======================>", mainOptions.html);
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                // return res.json(0)
                reject(0)
            } else {
                console.log('Message sent: ' + info.response);
                // return res.json(1)
                resolve(1)
            }
        });
    }
    
    });
  });
}


/**
 * send verify email
 */
exports.sendVerifyMail =  (req, res)=> {
  console.log('sendVerifyMail', req);
  
  return new Promise((resolve, reject)=> {
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  
 let emailData = {
    user_name : req.user_name,
    _id : req._id,
    reset_email_token : req.reset_email_token,
    host : process.env.PRODUCTION == 'DEV' ? process.env.CLIENT_HOST : process.env.HOST
  }

  // mailt to client
    ejs.renderFile(__parentDir + '/public/templates/email-template/verify-email.ejs', emailData, function (err, data) {
      if (err) {
          console.log(err);
          // reject(2)          
          resolve(0)
                  // return res.json(0)
      } else {
          var mainOptions = {         
            from: process.env.CONTACTMAILFROM,
            to: req.user_email,
            subject: 'Verify Your Email Address',
            html: data
          };
          transporter.sendMail(mainOptions, function (err, info) {
              if (err) {
                  console.log(err);
                  // return res.json(0)
                  resolve(0)
              } else {
                  console.log('Message sent: ' + info.response);
                  // return res.json(1)
                  resolve(1)
              }
          });
      }
      
      });
  });


}


/**
 * send register email
 */
exports.sendRegisterMail =  (req, res)=> {
  console.log('sendRegisterMail', req);
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  
  
   return new Promise((resolve, reject)=> {
     // mail to company
  var mainOptions = {         
    from: process.env.CONTACTMAILFROM,
    to: process.env.CONTACTMAILTO,
    subject: 'New User Registered',
    text: JSON.stringify(req)
  };
  
      // console.log("html data ======================>", mainOptions.html);
  transporter.sendMail(mainOptions, function (err, info) {
    if (err) {
        console.log(err);
        res.json(0)
    } else {
        console.log('Message sent: ' + info.response);
        res.json(1)
    }
});
  });
}


/**
 * send register email
 */
exports.sendWelcomeMail =  (req, res)=> {
  console.log('sendWelcomeMail', req);
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  
  let emailData = {
    user:{
      name: req.user_name
    }
  }

  // mailt to client
  
  return new Promise((resolve, reject)=> {
  ejs.renderFile(__parentDir + '/public/templates/email-template/register-success.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {         
          from: process.env.CONTACTMAILFROM,
          to: req.user_email,
          subject: 'Welcome to Ownwaysoft Billing Software',
          html: data
        };
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                // return res.json(0)
                reject(0)
            } else {
                console.log('Message sent: ' + info.response);
                // return res.json(1)
                resolve(1);
            }
        });
    }
    
    });
  });
}



/**
 * send contact email
 */
exports.sendContactMail =  (req, res)=> {
  console.log('sendContactMail', req.body);
  
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  // mail to company
  var mainOptions = {         
    from: process.env.CONTACTMAILFROM,
    to: process.env.CONTACTMAILTO,
    subject: req.body.subject,
    text: JSON.stringify(req.body)
  };

  return new Promise((resolve, reject)=> {
  transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
          console.log(err);
          // res.json(0)
          reject(0)
      } else {
          console.log('Message sent: ' + info.response);
          // res.json(1)
          resolve(1)
      }
  });
});
  
}


/**
 * send admin contact email
 */
exports.sendAdminMail =  (req, res)=> {
  console.log('sendAdminMail', req.body);
  
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  // mail to company
  var mainOptions = {         
    from: process.env.CONTACTMAILFROM,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.comments,
  };
 
  return new Promise((resolve, reject)=> {
  transporter.sendMail(mainOptions, function (err, info) {
      if (err) {
          console.log(err);
          // res.json(0)
          reject(0)
      } else {
          console.log('Message sent: ' + info.response);
          // res.json(1)
          resolve(1)
      }
    });
    });
  
}



/**
 * send account deactivation email
 */
exports.sendDeactivationMail =  (req)=> {
  console.log('sendDeactivationMail', req);
  var transporter = nodeMailer.createTransport({
    host: process.env.MAILHOST,
    port:  process.env.MAILPORT,
    secure: true, 
    auth: {
      user:  process.env.MAILAUTHUSERNAME,
      pass:  process.env.MAILAUTHPASSWORD
    },
	tls: { rejectUnauthorized: false  },
  debug:true
  });

  
  let emailData = {
    user:{
      name: req.user_name
    }
  }

  // mailt to client
  
  return new Promise((resolve, reject)=> {
  ejs.renderFile(__parentDir + '/public/templates/email-template/account-status.ejs', emailData, function (err, data) {
    if (err) {
        console.log(err);
    } else {
        var mainOptions = {         
          from: process.env.CONTACTMAILFROM,
          to: req.user_email,
          subject: 'Ownwaysoft Billing Software - Deactivation',
          html: data
        };
        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
                console.log(err);
                // return res.json(0)
                reject(0)
            } else {
                console.log('Message sent: ' + info.response);
                // return res.json(1)
                resolve(1);
            }
        });
    }
    
    });
  });
}

