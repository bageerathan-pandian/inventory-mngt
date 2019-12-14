
const ContactModel = require('../models/contact.model');
const emailController = require('./email.controller')

exports.sentMail =  (req, res)=> {
    console.log('add cont', req.body);    
    emailController.sendAdminMail(req, res)  // send email to ownwaysoft

    ContactModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
}

exports.getContact =  (req, res)=> {  

  ContactModel.find({}, (err, result) => {
  if (err) return next(err);
  return res.json(result);
  }).sort( { updatedAt: -1 } )
}


