
const ContactModel = require('../models/contact.model');
const emailController = require('./email.controller')

exports.sentMail =  (req, res)=> {
    console.log('add cont', req.body);    
    emailController.sendAdminMail(req, res)  // send email to ownwaysoft

    ContactModel.create(req.body, (e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
          return res.json(result);
      }
  });
}

exports.getContact =  (req, res)=> {  

  ContactModel.find({}, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
  }).sort( { updatedAt: -1 } )
}


