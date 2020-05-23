const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoicePurchaseSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  customer_details_id:  { type: Schema.Types.ObjectId, ref: 'customer_details' },
  invoice_list: {type:Array},
  invoice_purchase_code: { type: String },
  invoice_date: { type: String },
  sub_total: { type: Number },
  discount: { type: Number },
  grand_total: { type: Number },
  payment_type: { type: Number },
  payment_status: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('invoice_purchase_details', InvoicePurchaseSchema);