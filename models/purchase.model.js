const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  supplier_details_id:  { type: Schema.Types.ObjectId, ref: 'supplier_details' },
  invoice_purchase_details_id:  { type: Schema.Types.ObjectId, ref: 'invoice_purchase_details' },
  // stock_details_id:  { type: Schema.Types.ObjectId, ref: 'stock_details' },
  // stock_qty: { type: Number },
  // stock_price: { type: Number },
  // stock_total_price: { type: Number },
  // stock_total_price_with_gst: { type: Number },
  sub_total: { type: Number },
  discount: { type: Number },
  cgst: { type: Number },
  sgst: { type: Number },
  grand_total: { type: Number },
  tax_enable: { type: Boolean },
  paid_amount: { type: Number },
  balance_amount: { type: Number },
  payment_status: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('purchase_details', PurchaseSchema);