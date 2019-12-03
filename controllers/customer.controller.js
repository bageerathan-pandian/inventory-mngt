
const CustomerModel = require('../models/customer.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  CustomerModel.find({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).sort( { updatedAt: -1 } )
}


/**
 * get users list
 */
exports.getAllUsersByCompany =  (req, res)=> {
  CustomerModel.find({company_details_id : req.params.id},(e,result) => {
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
    CustomerModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result); 
  }); 
}

exports.updateUser =  (req, res)=> {
  CustomerModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.deleteUser =  (req, res)=> {
  CustomerModel.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.userStatusUpdate =  (req, res)=> {
  CustomerModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

