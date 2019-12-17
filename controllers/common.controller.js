
const UserModel = require('../models/user.model');

exports.emailExistCheck = (req,res)=>{
  UserModel.find({user_email : req.user_email,status : 1},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
  });
}
