
const UnitModel = require('../models/unit.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  UnitModel.find({},(e,result) => {
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
  UnitModel.find({company_details_id : req.params.id},(e,result) => {
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
  UnitModel.aggregate([{
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
    UnitModel.create(req.body, (e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
          return res.json(result);
      } 
  }); 
}

exports.updateUser =  (req, res)=> {
  UnitModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.deleteUser =  (req, res)=> {
  UnitModel.findByIdAndRemove(req.params.id, req.body, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.userStatusUpdate =  (req, res)=> {
  UnitModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

