
const InvoiceModel = require('../models/invoice.model');
const InvoicePurchaseModel = require('../models/invoice_purchase.model');

var mongoose = require('mongoose');
var ObjectID = mongoose.Types.ObjectId;


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
  InvoiceModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
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



/**
 * get users list
 */
exports.getTotalSales =  (req, res)=> {
  console.log('getTotalSales',req.params.id)
    InvoiceModel.aggregate([
      {
        $match: { company_details_id: ObjectID(req.params.id) } 
      },
      // first Stage
    {
      $group: {
        _id : "$company_details_id",
        // _id : null,
        grand_total: { $sum: "$grand_total" },
        avg_sales: { $avg: "$grand_total" },
        count: { $sum: 1 } // for no. of documents count
      }
    }
  ],(e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
        console.log('getTotalSales',result)
          return res.json(result);
      }
  })
  }

  
/**
 * get users list
 */
exports.getTotalPurchase =  (req, res)=> {
  console.log('getTotalPurchase',req.params.id)
    InvoicePurchaseModel.aggregate([
      {
        $match: { company_details_id: ObjectID(req.params.id) } 
      },
      // first Stage
    {
      $group: {
        _id : "$company_details_id",
        // _id : null,
        grand_total: { $sum: "$grand_total" },
        avg_sales: { $avg: "$grand_total" },
        count: { $sum: 1 } // for no. of documents count
      }
    }
  ],(e,result) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
        console.log('getTotalSales',result)
          return res.json(result);
      }
  })
  }
  

