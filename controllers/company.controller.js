
const CompanyModel = require('../models/company.model');
const UserModel = require('../models/user.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  CompanyModel.find({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).sort( { company_name: 1 } )
}

/**
 * get admin users list
 */
exports.getAllAdminUsers =  (req, res)=> {
  UserModel.find({ role:{ $in: [ 0, 1 ] } },(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
  }).populate('company_details_id').sort( { updatedAt: -1 } )
}

/**
 * get groupByCompany list
 */
exports.groupByCompany =  (req, res)=> {
  CompanyModel.aggregate([{
    $group: {
      _id: "$_id",
      count: { $sum: "$like.count" }
    }
  }],(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

exports.addUser =  (req, res)=> {
    console.log('add user1', req.body); 
    if(req.body._id === null) {
     delete req.body._id;
   }
    CompanyModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result); 
  }); 
}

exports.updateUser =  (req, res)=> {
  console.log('update user1', req.body); 
  CompanyModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.deleteUser =  (req, res)=> {
  CompanyModel.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.userStatusUpdate =  (req, res)=> {
  CompanyModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

