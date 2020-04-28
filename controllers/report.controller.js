const SalesModel = require('../models/sales.model');
const PurchaseModel = require('../models/purchase.model');
const moment = require('moment')


/**
 * get users list
 */
exports.getAllSalesByCompany =  (req, res)=> {
    console.log(req.body);
  SalesModel.find({ createdAt: {
    $gte: moment(req.body.from_date).startOf('day').format(),
    $lt: moment(req.body.to_date).endOf('day').format()
},company_details_id : req.body.company_id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('invoice_details_id').populate('stock_details_id').populate('customer_details_id').populate('company_details_id') .sort( { updatedAt: -1 } )
}


/**
 * get purchase list
 */
exports.getAllPurchaseByCompany =  (req, res)=> {
  console.log(req.body);
PurchaseModel.find({ createdAt: {
  $gte: moment(req.body.from_date).startOf('day').format(),
  $lt: moment(req.body.to_date).endOf('day').format()
},company_details_id : req.body.company_id},(e,result) => {
  if(e) {        
    console.log(e.message);
      return res.status(500).json(e);
  } else {
      return res.json(result);
  }
}).populate('invoice_purchase_details_id').populate('stock_details_id').populate('customer_details_id').populate('company_details_id') .sort( { updatedAt: -1 } )
}