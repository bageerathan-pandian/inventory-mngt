
const SupplierModel = require('../models/supplier.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  SupplierModel.find({},(e,result) => {
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
  SupplierModel.find({company_details_id : req.params.id},(e,result) => {
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
    SupplierModel.create(req.body, (err, result) => {
    if (err) return next(err);
    return res.json(result);
  });
}

exports.updateUser =  (req, res)=> {
  SupplierModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.deleteUser =  (req, res)=> {
  SupplierModel.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.userStatusUpdate =  (req, res)=> {
  SupplierModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

