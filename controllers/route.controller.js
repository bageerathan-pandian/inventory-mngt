
const RouteModel = require('../models/route.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  RouteModel.find({},(e,result) => {
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
  RouteModel.find({company_details_id : req.params.id},(e,result) => {
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
  RouteModel.aggregate([{
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
   RouteModel.create(req.body, (e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
          return res.json(result);
      } 
  }); 
}

exports.updateUser =  (req, res)=> {
  RouteModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.deleteUser =  (req, res)=> {
  RouteModel.findByIdAndRemove(req.params.id, req.body, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.userStatusUpdate =  (req, res)=> {
  RouteModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

