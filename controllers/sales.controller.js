
const SalesModel = require('../models/sales.model');
const InvoiceModel = require('../models/invoice.model');
const StockModel = require('../models/stock.model');


/**
 * get users list
 */
exports.getAllUsers =  (req, res)=> {
  SalesModel.find({},(e,result) => {
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
exports.getLastInvoice =  (req, res)=> {
  InvoiceModel.countDocuments({company_details_id : req.params.id},(e,result) => {
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
exports.getAllUsersByCompany =  (req, res)=> {
  SalesModel.find({company_details_id : req.params.id},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
}).populate('company_details_id').sort( { updatedAt: -1 } )
}

exports.addUser =  (req, res)=> {
    console.log('add sales', req.body); 
    if(req.body._id === null) {
     delete req.body._id;
   }
   let invoiceData = {
    company_details_id:req.body.company_details_id,
    customer_details_id:req.body.customer_details_id,
    invoice_code:req.body.invoice_code,
    invoice_date:req.body.invoice_date,
    sub_total:req.body.sub_total,
    discount:req.body.discount,
    grand_total:req.body.grand_total,
    payment_type:req.body.payment_type,
    paid_amount:req.body.paid_amount,
    balance_amount:req.body.balance_amount,
    payment_status:req.body.payment_status
   }
   InvoiceModel.create(invoiceData, (err, result) => {
    if (err)  return res.status(500).json(err);
    console.log('invoice result',result)
    for(let invoiceArry of req.body.invoiceList){
      let salesData = {
        company_details_id:req.body.company_details_id,
        customer_details_id:req.body.customer_details_id,
        stock_details_id:invoiceArry.stock_details_id,
        invoice_details_id: result._id,
        stock_price:invoiceArry.price,
        stock_qty:invoiceArry.qty,
        stock_total_price:invoiceArry.total,
        sub_total:req.body.sub_total,
        discount:req.body.discount,
        grand_total:req.body.grand_total,
        payment_type:req.body.payment_type,
        payment_status:req.body.payment_status
       }
      SalesModel.create(salesData, (err, result1) => {
        if (err)  return res.status(500).json(err);
        console.log('sales result',result1)
        let stockData = {
          company_details_id:req.body.company_details_id,
          stock_qty: Number(invoiceArry.total_qty) - Number(invoiceArry.qty)
         }
         console.log('stockData',stockData,invoiceArry.total_qty,invoiceArry.qty)
        StockModel.findByIdAndUpdate(invoiceArry.stock_details_id, stockData, (err, result3) => {
          if (err) return next(err);
          console.log('qty result',result3)
        });
      });
     
    }
    
    InvoiceModel.countDocuments({company_details_id : req.body.company_details_id},(e,result4) => {
      if(e) {        
        console.log(e.message);
          return res.status(500).json(e);
      } else {
        console.log('invoice id',result._id);
          SalesModel.find({invoice_details_id : result._id},(e,result5) => {
            if(e) {        
              console.log(e.message);
                return res.status(500).json(e);
            } else {
                let restfinal = {
                  next_invoice: result4,
                  data : result5
                }
                return res.json(restfinal);
            }
        }).populate('company_details_id').populate('customer_details_id').populate('stock_details_id').populate('invoice_details_id')
       

      }
  })
  });

   
}

exports.updateUser =  (req, res)=> {
  SalesModel.findByIdAndUpdate(req.params.id, req.body,{new: true}, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.deleteUser =  (req, res)=> {
  SalesModel.findByIdAndRemove(req.params.id, req.body, (err, result) => {
        if (err) return next(err);
        return res.json(result);
      });
}

exports.userStatusUpdate =  (req, res)=> {
  SalesModel.save({},(e,result) => {
    if(e) {        
      console.log(e.message);
        return res.status(500).json(e);
    } else {
        return res.json(result);
    }
})
}

