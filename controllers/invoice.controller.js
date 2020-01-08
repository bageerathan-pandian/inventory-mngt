
const InvoiceModel = require('../models/invoice.model');


/**
 * get users list
 */
exports.getAllUsersByCompany =  (req, res)=> {
  InvoiceModel.find({company_details_id : req.params.id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').populate('customer_details_id').sort( { updatedAt: -1 } )
}



exports.updateUser =  (req, res)=> {
  console.log('req.params.id', req.params.id);
  InvoiceModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}


exports.userStatusUpdate =  (req, res)=> {
  InvoiceModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

