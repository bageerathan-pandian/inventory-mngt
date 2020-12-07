
const BrandModel = require('../models/brand.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  BrandModel.find({},(e,result) => {
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
  BrandModel.find({company_details_id : req.params.id},(e,result) => {
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
    BrandModel.create(req.body, (e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
          return res.json(result);
      }
  });
}

exports.updateUser =  (req, res)=> {
  console.log('req.params.id', req.params.id);
  BrandModel.findByIdAndUpdate(req.params.id, req.body,{new: true},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.deleteUser =  (req, res)=> {
  BrandModel.findByIdAndRemove(req.params.id, req.body, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.userStatusUpdate =  (req, res)=> {
  BrandModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

