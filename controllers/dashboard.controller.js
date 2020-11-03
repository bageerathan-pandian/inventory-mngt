
const StockModel = require('../models/stock.model');
const SalesModel = require('../models/sales.model');
const PurchaseModel = require('../models/purchase.model');
const UserModel = require('../models/user.model');
const InvoiceModel = require('../models/invoice.model');
const InvoicePurchaseModel = require('../models/invoice_purchase.model');
const CollectionModel = require('../models/collection.model');
var mongoose = require('mongoose');
var ObjectID = mongoose.Types.ObjectId;


/**
 * get loggedin users list
 */
exports.getLoggedInUsers = (req, res) => {
  //   var sessions = req.sessionStore.sessions
  //   console.log('sessions',sessions)
  //   var store = req.sessionStore; 
  //   console.log('store',store) 
  //   this.result = []
  // for(var sid in store.sessions){ 
  //     var ses = JSON.parse(store.sessions[sid]);  
  //     console.log('ses',ses)
  //     this.result.push(ses)
  // }
  // return res.json(this.result);
  UserModel.find({ isLoggedIn: true }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').sort({ updatedAt: -1 })
}

/**
 * get users list
 */
exports.getLatestStock = (req, res) => {
  console.log('getLatestStock');
  StockModel.find({ company_details_id: req.params.id }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').sort({ updatedAt: -1 }).limit(5)
}

exports.getLatestSales = (req, res) => {
  console.log('getLatestSales');
  SalesModel.find({ company_details_id: req.params.id }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').populate('customer_details_id').populate('invoice_details_id').populate('stock_details_id').sort({ updatedAt: -1 }).limit(5)
}


exports.getLatestPurchase = (req, res) => {
  PurchaseModel.find({ company_details_id: req.params.id }, (e, result) => {
    if (e) {
      console.log(e.message);
      return res.status(500).json(e);
    } else {
      return res.json(result);
    }
  }).populate('company_details_id').populate('supplier_details_id').populate('invoice_purchase_details_id').populate('stock_details_id').sort({ updatedAt: -1 }).limit(5)
}



exports.getProfitLoss = (req, res) => {
  InvoiceModel.aggregate([
    {
      $match: { company_details_id: ObjectID(req.params.id) }
    },
    {
      $group: {
        // _id : "$company_details_id",
        _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
        totalAmount: { $sum: "$grand_total" },
        count: { $sum: 1 }
      }
    }], (e, result) => {
      if (e) {
        console.log(e.message);
        return res.status(500).json(e);
      } else {
        InvoicePurchaseModel.aggregate([
          {
            $match: { company_details_id: ObjectID(req.params.id) }
          },
          {
            $group: {
              // _id : "$company_details_id",
              _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
              totalAmount: { $sum: "$grand_total" },
              count: { $sum: 1 }
            }
          }], (e, result1) => {
            if (e) {
              console.log(e.message);
              return res.status(500).json(e);
            } else {
              // let data = {sales_pos:result,purchase_pos:result1}
              // return res.json(data);
              CollectionModel.aggregate([
                {
                  $match: { company_details_id: ObjectID(req.params.id) }
                },
                {
                  $group: {
                    // _id : "$company_details_id",
                    _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
                    totalAmount: { $sum: "$collection_amt" },
                    count: { $sum: 1 }
                  }
                }], (e, result2) => {
                  if (e) {
                    console.log(e.message);
                    return res.status(500).json(e);
                  } else {
                    let data = { sales_pos: result, purchase_pos: result1, collection_pos: result2 }
                    return res.json(data);
                  }
                })

            }
          })

      }
    })
}
