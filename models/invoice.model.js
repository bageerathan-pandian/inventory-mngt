const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InvoiceSchema = new mongoose.Schema({
  company_details_id:  { type: Schema.Types.ObjectId, ref: 'company_details' },
  customer_details_id:  { type: Schema.Types.ObjectId, ref: 'customer_details' },
  invoice_list: {type:Array},
  invoice_code: { type: String },
  invoice_date: { type: String },
  sub_total: { type: Number },
  discount: { type: Number },
  cgst: { type: Number },
  sgst: { type: Number },
  tax_enable: { type: Boolean },
  grand_total: { type: Number },
  payment_type: { type: Number },
  payment_status: { type: Number },
  status: { type: Number },
},{timestamps: true});


module.exports = mongoose.model('invoice_details', InvoiceSchema);