
const UserModel = require('../models/user.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  UserModel.find({role: {  $gt: 0 }} ,(e,result) => {
    console.log('result', result); 
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id')
}


/**
 * get users list
 */
exports.getAllUsersByCompany =  (req, res)=> {
  UserModel.find({company_details_id : req.params.id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').sort( { updatedAt: -1 } )
}

/**
 * get users list
 */
exports.getUserById =  (req, res)=> {
  UserModel.find({_id : req.params.id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').sort( { updatedAt: -1 } )
}

exports.addUser =  (req, res)=> {
    console.log('add user1', req.body); 
    if(req.body._id === null) {
     delete req.body._id;
   }
    UserModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
}

exports.updateUser =  (req, res)=> {
    UserModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.deleteUser =  (req, res)=> {
    UserModel.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.userStatusUpdate =  (req, res)=> {
    UserModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})

}

/**
 * get users list
 */
exports.checkEmailExist =  (req, res)=> {
  console.log('checkEmailExist',req);
  UserModel.find({user_email : req.params.user_email},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}


