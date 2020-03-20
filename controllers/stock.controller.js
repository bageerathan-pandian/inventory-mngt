
const StockModel = require('../models/stock.model');
/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  StockModel.find({},(e,result) => {
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
  StockModel.find({company_details_id : req.params.id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').populate('category_details_id').populate('unit_details_id').sort( { updatedAt: -1 } )
}


/**
 * get users list
 */
exports.getAllUsersByCompanyActive =  (req, res)=> {
  StockModel.find({company_details_id : req.params.id,stock_qty: {  $gt: 0 }},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').populate('category_details_id').populate('unit_details_id').sort( { updatedAt: -1 } )
}

exports.addUser =  (req, res)=> {
    console.log('add user1', req.body); 
    if(req.body._id === null) {
      delete req.body._id;
    }
    StockModel.create(req.body, (e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
          return res.json(result);
      }
  });
}

exports.updateUser =  (req, res)=> {
  StockModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.deleteUser =  (req, res)=> {
  StockModel.findByIdAndRemove(req.params.id, req.body, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
      });
}

exports.userStatusUpdate =  (req, res)=> {
  StockModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

