const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SalesSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  customer_details_id:  { type: Schema.Types.ObjectId, ref: 'customer_details' },
  invoice_details_id:  { type: Schema.Types.ObjectId, ref: 'invoice_details' },
  stock_details_id:  { type: Schema.Types.ObjectId, ref: 'stock_details' },
  stock_qty: { type: Number },
  stock_price: { type: Number },
  stock_total_price: { type: Number },
  sub_total: { type: Number },
  discount: { type: Number },
  grand_total: { type: Number },
  payment_type: { type: Number },
  payment_status: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('sales_details', SalesSchema);