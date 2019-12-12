
const ContactModel = require('../models/contact.model');
const emailController = require('../controllers/email.controller')

exports.sentContact =  (req, res)=> {
    console.log('add cont', req.body);    
    emailController.sendContactMail(req, res)  // send email to ownwaysoft

    ContactModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
}



